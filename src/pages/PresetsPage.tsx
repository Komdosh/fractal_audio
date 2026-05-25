import { useCallback, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  presets,
  presetGroups,
  type BuildSheet,
  type BuildSheetBlock,
  type BuildSheetScene,
  type Preset,
  type PresetRoutingRow,
  type SceneBlockState,
} from '../data/chains'
import { getBlock } from '../data/blocks'

const allGroupsLabel = 'All groups'
const allTagsLabel = 'All tags'
const allDifficultiesLabel = 'Any difficulty'
const allBlocksLabel = 'Any block'

function uniqueSorted(values: string[]) {
  return Array.from(new Set(values)).sort((a, b) => a.localeCompare(b))
}

function slug(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

function countLabel(count: number, singular: string) {
  return `${count} ${count === 1 ? singular : `${singular}s`}`
}

function getPresetBlockIds(preset: Preset) {
  const parallelBlocks = preset.parallelRouting
    ? [
        ...(preset.parallelRouting.input?.blockOrder ?? []),
        ...preset.parallelRouting.rows.flatMap((row) => row.blockOrder),
        ...(preset.parallelRouting.output?.blockOrder ?? []),
      ]
    : []

  return Array.from(new Set([...preset.blockOrder, ...parallelBlocks]))
}

function getPresetSearchText(preset: Preset) {
  const blockText = getPresetBlockIds(preset).flatMap((blockId) => {
    const block = getBlock(blockId)
    return [blockId, block?.name, block?.abbreviation, block?.category]
  })
  const parallelRouting = preset.parallelRouting
  const routingRowText = parallelRouting
    ? [
        parallelRouting.splitLabel,
        parallelRouting.mergeLabel,
        parallelRouting.input?.name,
        parallelRouting.input?.role,
        parallelRouting.output?.name,
        parallelRouting.output?.role,
        ...parallelRouting.rows.flatMap((row) => [row.name, row.role]),
      ]
    : []

  const buildSheetText = preset.buildSheet
    ? [
        ...preset.buildSheet.blocks.flatMap((block) => [block.type, ...(block.params ?? []).map((p) => `${p.name} ${p.value}`)]),
        ...preset.buildSheet.scenes.flatMap((scene) => [scene.name, scene.summary]),
      ]
    : []

  return [
    preset.name,
    preset.group,
    preset.vibe,
    preset.description,
    preset.routing,
    preset.difficulty,
    preset.productFocus,
    ...preset.tags,
    ...preset.scenes.flatMap((scene) => [scene.name, scene.note]),
    ...blockText,
    ...routingRowText,
    ...buildSheetText,
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase()
}

function BlockOrderFlow({
  blockOrder,
  label,
  compact = false,
}: {
  blockOrder: string[]
  label: string
  compact?: boolean
}) {
  return (
    <div className={`preset-block-flow${compact ? ' compact' : ''}`} aria-label={label}>
      {blockOrder.map((blockId, idx) => {
        const block = getBlock(blockId)
        return (
          <span key={`${blockId}-${idx}`} className="preset-block-flow-item">
            {block ? (
              <Link to={`/blocks/${block.id}`} title={block.name}>
                <span className="block-abbr inline">{block.abbreviation}</span>
                <span className="sr-only">{block.name}</span>
              </Link>
            ) : (
              blockId
            )}
            {idx < blockOrder.length - 1 && <span className="arrow"> &rarr; </span>}
          </span>
        )
      })}
    </div>
  )
}

function RoutingBus({
  row,
  variant,
  presetName,
}: {
  row: PresetRoutingRow
  variant: 'input' | 'output'
  presetName: string
}) {
  return (
    <div className={`preset-routing-bus ${variant}`}>
      <span className="preset-routing-terminal" aria-hidden="true">
        {variant === 'input' ? 'In' : 'Out'}
      </span>
      <div className="preset-routing-bus-content">
        <div className="preset-routing-row-copy">
          <strong>{row.name}</strong>
          <span>{row.role}</span>
        </div>
        <BlockOrderFlow
          blockOrder={row.blockOrder}
          label={`${presetName} ${row.name} block order`}
          compact
        />
      </div>
    </div>
  )
}

function RoutingJunction({ kind, label }: { kind: 'split' | 'merge'; label: string }) {
  return (
    <div className={`preset-routing-junction ${kind}`}>
      <span className="preset-routing-node" aria-hidden="true">
        {kind === 'split' ? 'Split' : 'Merge'}
      </span>
      <span className="preset-routing-line" aria-hidden="true" />
      <span className="preset-routing-junction-copy">{label}</span>
    </div>
  )
}

function ParallelRoutingMap({ preset }: { preset: Preset }) {
  const routing = preset.parallelRouting

  if (!routing) {
    return null
  }

  return (
    <div
      className={`preset-parallel-map rows-${routing.rows.length}`}
      aria-label={`${preset.name} parallel routing`}
    >
      <div className="preset-routing-header">
        <div>
          <span className="preset-routing-kicker">Parallel routing</span>
          <strong>{countLabel(routing.rows.length, 'lane')}</strong>
        </div>
        <span className="preset-routing-topology">
          {routing.splitLabel} / {routing.mergeLabel}
        </span>
      </div>

      <div className="preset-routing-diagram">
        {routing.input && (
          <RoutingBus row={routing.input} variant="input" presetName={preset.name} />
        )}

        <RoutingJunction kind="split" label={routing.splitLabel} />

        <div className="preset-parallel-rows" aria-label={`${preset.name} parallel lanes`}>
          {routing.rows.map((row, idx) => (
            <div key={row.name} className="preset-parallel-row">
              <div className="preset-parallel-lane-meta">
                <span className="preset-parallel-index">Lane {idx + 1}</span>
                <span>{countLabel(row.blockOrder.length, 'block')}</span>
              </div>
              <div className="preset-parallel-row-body">
                <div className="preset-routing-row-copy">
                  <strong>{row.name}</strong>
                  <span>{row.role}</span>
                </div>
                <BlockOrderFlow
                  blockOrder={row.blockOrder}
                  label={`${preset.name} ${row.name} block order`}
                  compact
                />
              </div>
            </div>
          ))}
        </div>

        <RoutingJunction kind="merge" label={routing.mergeLabel} />

        {routing.output && (
          <RoutingBus row={routing.output} variant="output" presetName={preset.name} />
        )}
      </div>
    </div>
  )
}

function BuildSheetBlockCard({ block, index }: { block: BuildSheetBlock; index: number }) {
  const def = getBlock(block.blockId)
  return (
    <article className="build-block">
      <header className="build-block-header">
        <span className="build-block-step" aria-hidden="true">
          {index + 1}
        </span>
        <div className="build-block-title">
          <h4>
            {def ? (
              <Link to={`/blocks/${def.id}`} title={`Open ${def.name} reference`}>
                {def.name}
              </Link>
            ) : (
              block.blockId
            )}
            {block.instance && <span className="build-block-instance">{block.instance}</span>}
          </h4>
          {def?.abbreviation && <span className="build-block-abbr">{def.abbreviation}</span>}
        </div>
        {block.type && (
          <div className="build-block-type">
            <span className="build-block-type-label">Type</span>
            <strong>{block.type}</strong>
          </div>
        )}
      </header>

      {block.channels && block.channels.length > 0 && (
        <div className="build-block-channels">
          <span className="build-block-section-label">Channels</span>
          <ul>
            {block.channels.map((ch) => (
              <li key={ch.channel}>
                <span className="channel-pill">Ch {ch.channel}</span>
                <span>{ch.role}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {block.params && block.params.length > 0 && (
        <div className="build-block-params">
          <span className="build-block-section-label">Set parameters</span>
          <dl>
            {block.params.map((param) => (
              <div key={param.name} className="build-block-param">
                <dt>{param.name}</dt>
                <dd>
                  <code>{param.value}</code>
                  {param.note && <span className="build-block-param-note">{param.note}</span>}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      )}

      {block.note && <p className="build-block-note">{block.note}</p>}
    </article>
  )
}

function describeSceneState(state: SceneBlockState): {
  bypass?: 'on' | 'off'
  channel?: string
  overrides?: BuildSheetBlock['params']
} {
  if (state === 'on') {
    return { bypass: 'on' }
  }
  if (state === 'off') {
    return { bypass: 'off' }
  }
  return { bypass: state.bypass, channel: state.channel, overrides: state.overrides }
}

function SceneMatrix({ blocks, scenes }: { blocks: BuildSheetBlock[]; scenes: BuildSheetScene[] }) {
  return (
    <div className="build-scene-matrix-wrap">
      <table className="build-scene-matrix" aria-label="Scene programming matrix">
        <thead>
          <tr>
            <th scope="col">Block</th>
            {scenes.map((scene) => (
              <th key={scene.name} scope="col">
                <span className="build-scene-matrix-name">{scene.name}</span>
                <span className="build-scene-matrix-summary">{scene.summary}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {blocks.map((block) => {
            const def = getBlock(block.blockId)
            return (
              <tr key={`${block.blockId}-${block.instance ?? ''}`}>
                <th scope="row">
                  <span className="block-abbr inline">{def?.abbreviation ?? '??'}</span>
                  <span className="build-scene-matrix-blockname">{def?.name ?? block.blockId}</span>
                  {block.instance && <span className="build-block-instance">{block.instance}</span>}
                </th>
                {scenes.map((scene) => {
                  const sceneBlock = scene.blockStates.find(
                    (sb) => sb.blockId === block.blockId && (sb.instance ?? null) === (block.instance ?? null),
                  )
                  if (!sceneBlock) {
                    return (
                      <td key={scene.name} className="build-scene-cell muted">
                        <span className="sr-only">No setting</span>—
                      </td>
                    )
                  }
                  const desc = describeSceneState(sceneBlock.state)
                  return (
                    <td key={scene.name} className={`build-scene-cell bypass-${desc.bypass ?? 'on'}`}>
                      <div className="build-scene-cell-status">
                        <span className={`pill bypass bypass-${desc.bypass ?? 'on'}`}>
                          {desc.bypass === 'off' ? 'Bypassed' : 'Engaged'}
                        </span>
                        {desc.channel && <span className="pill channel">Ch {desc.channel}</span>}
                      </div>
                      {desc.overrides && desc.overrides.length > 0 && (
                        <ul className="build-scene-overrides">
                          {desc.overrides.map((ov) => (
                            <li key={ov.name}>
                              <span>{ov.name}</span>
                              <code>{ov.value}</code>
                            </li>
                          ))}
                        </ul>
                      )}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

function buildSheetMarkdown(preset: Preset, sheet: BuildSheet): string {
  const lines: string[] = []
  lines.push(`# ${preset.name}`)
  lines.push('')
  lines.push(`_${preset.vibe}_`)
  lines.push('')
  lines.push(`- **Group:** ${preset.group}`)
  lines.push(`- **Difficulty:** ${preset.difficulty}`)
  lines.push(`- **Routing:** ${preset.routing}`)
  lines.push(`- **Product focus:** ${preset.productFocus}`)
  lines.push('')
  lines.push('## Global setup')
  sheet.globals.forEach((g) => {
    const note = g.note ? ` — ${g.note}` : ''
    lines.push(`- **${g.label}:** ${g.value}${note}`)
  })
  lines.push('')
  lines.push('## Build order')
  sheet.blocks.forEach((block, idx) => {
    const def = getBlock(block.blockId)
    lines.push(`### ${idx + 1}. ${def?.name ?? block.blockId}${block.instance ? ` (${block.instance})` : ''}`)
    if (block.type) {
      lines.push(`- **Type:** ${block.type}`)
    }
    if (block.channels && block.channels.length > 0) {
      lines.push('- **Channels:**')
      block.channels.forEach((ch) => lines.push(`  - Ch ${ch.channel}: ${ch.role}`))
    }
    if (block.params && block.params.length > 0) {
      lines.push('- **Parameters:**')
      block.params.forEach((p) => {
        const note = p.note ? ` — ${p.note}` : ''
        lines.push(`  - ${p.name}: \`${p.value}\`${note}`)
      })
    }
    if (block.note) {
      lines.push(`- _Note: ${block.note}_`)
    }
    lines.push('')
  })
  lines.push('## Scene programming')
  sheet.scenes.forEach((scene) => {
    lines.push(`### ${scene.name}`)
    lines.push(`_${scene.summary}_`)
    lines.push('')
    scene.blockStates.forEach((sb) => {
      const def = getBlock(sb.blockId)
      const desc = describeSceneState(sb.state)
      const parts: string[] = []
      parts.push(desc.bypass === 'off' ? 'Bypassed' : 'Engaged')
      if (desc.channel) parts.push(`Ch ${desc.channel}`)
      if (desc.overrides && desc.overrides.length > 0) {
        parts.push(desc.overrides.map((ov) => `${ov.name} = \`${ov.value}\``).join('; '))
      }
      lines.push(`- **${def?.name ?? sb.blockId}:** ${parts.join(' · ')}`)
    })
    lines.push('')
  })
  if (sheet.checks && sheet.checks.length > 0) {
    lines.push('## Final checks')
    sheet.checks.forEach((c) => lines.push(`- ${c}`))
  }
  return lines.join('\n')
}

function BuildSheetView({ preset, sheet }: { preset: Preset; sheet: BuildSheet }) {
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'error'>('idle')
  const storageKey = `presets:done:${preset.id}`
  const [done, setDone] = useState<Record<string, boolean>>(() => {
    if (typeof window === 'undefined') return {}
    try {
      const raw = window.localStorage.getItem(storageKey)
      return raw ? (JSON.parse(raw) as Record<string, boolean>) : {}
    } catch {
      return {}
    }
  })

  const toggleStep = useCallback(
    (key: string) => {
      setDone((prev) => {
        const next = { ...prev, [key]: !prev[key] }
        try {
          window.localStorage.setItem(storageKey, JSON.stringify(next))
        } catch {
          /* ignore */
        }
        return next
      })
    },
    [storageKey],
  )

  const copyMarkdown = useCallback(async () => {
    try {
      const md = buildSheetMarkdown(preset, sheet)
      await navigator.clipboard.writeText(md)
      setCopyState('copied')
      setTimeout(() => setCopyState('idle'), 1800)
    } catch {
      setCopyState('error')
      setTimeout(() => setCopyState('idle'), 2400)
    }
  }, [preset, sheet])

  const completed = sheet.blocks.filter((b) => done[`block-${b.blockId}-${b.instance ?? ''}`]).length
  const total = sheet.blocks.length

  return (
    <section className="build-sheet" aria-label={`${preset.name} build sheet`}>
      <header className="build-sheet-header">
        <div>
          <span className="build-sheet-kicker">Build sheet</span>
          <h3>Replicate this preset on your device</h3>
          <p className="build-sheet-progress">
            {completed} / {total} blocks built · check items as you go (saved locally)
          </p>
        </div>
        <button
          type="button"
          className="build-sheet-copy"
          onClick={copyMarkdown}
          aria-live="polite"
        >
          {copyState === 'copied' && 'Copied!'}
          {copyState === 'error' && 'Copy failed'}
          {copyState === 'idle' && 'Copy as Markdown'}
        </button>
      </header>

      <div className="build-globals" role="group" aria-label="Global setup">
        <span className="build-block-section-label">Global setup (once)</span>
        <dl>
          {sheet.globals.map((g) => (
            <div key={g.label} className="build-global">
              <dt>{g.label}</dt>
              <dd>
                <code>{g.value}</code>
                {g.note && <span className="build-block-param-note">{g.note}</span>}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="build-blocks">
        <span className="build-block-section-label">Build order</span>
        <ol>
          {sheet.blocks.map((block, idx) => {
            const key = `block-${block.blockId}-${block.instance ?? ''}`
            const checked = Boolean(done[key])
            return (
              <li key={key} className={checked ? 'done' : undefined}>
                <label className="build-block-check">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleStep(key)}
                    aria-label={`Mark ${block.blockId} step ${idx + 1} done`}
                  />
                  <span className="sr-only">Mark step done</span>
                </label>
                <BuildSheetBlockCard block={block} index={idx} />
              </li>
            )
          })}
        </ol>
      </div>

      <div className="build-scenes" aria-label="Scene programming">
        <span className="build-block-section-label">Scene programming</span>
        <SceneMatrix blocks={sheet.blocks} scenes={sheet.scenes} />
      </div>

      {sheet.checks && sheet.checks.length > 0 && (
        <div className="build-final-checks">
          <span className="build-block-section-label">Final checks</span>
          <ul>
            {sheet.checks.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}

export function PresetsPage() {
  const [query, setQuery] = useState('')
  const [activeGroup, setActiveGroup] = useState(allGroupsLabel)
  const [activeTag, setActiveTag] = useState(allTagsLabel)
  const [activeDifficulty, setActiveDifficulty] = useState(allDifficultiesLabel)
  const [activeBlock, setActiveBlock] = useState(allBlocksLabel)
  const [buildSheetsOnly, setBuildSheetsOnly] = useState(false)
  const [expanded, setExpanded] = useState<Record<string, boolean>>({})

  const availableGroups = useMemo(() => {
    const configuredGroups = new Set<string>(presetGroups)
    const extraGroups = uniqueSorted(presets.map((preset) => preset.group)).filter(
      (group) => !configuredGroups.has(group),
    )
    return [...presetGroups, ...extraGroups]
  }, [])

  const tags = useMemo(() => uniqueSorted(presets.flatMap((preset) => preset.tags)), [])

  const difficulties = useMemo(
    () => uniqueSorted(presets.map((preset) => preset.difficulty)),
    [],
  )

  const blockOptions = useMemo(() => {
    const blockIds = uniqueSorted(presets.flatMap((preset) => getPresetBlockIds(preset)))
    return blockIds.map((blockId) => {
      const block = getBlock(blockId)
      return {
        id: blockId,
        label: block ? `${block.name} (${block.abbreviation})` : blockId,
      }
    })
  }, [])

  const searchIndex = useMemo(
    () => presets.map((preset) => ({ preset, searchText: getPresetSearchText(preset) })),
    [],
  )

  const normalizedQuery = query.trim().toLowerCase()

  const filteredPresets = searchIndex
    .filter(({ preset, searchText }) => {
      const matchesQuery = normalizedQuery.length === 0 || searchText.includes(normalizedQuery)
      const matchesGroup = activeGroup === allGroupsLabel || preset.group === activeGroup
      const matchesTag = activeTag === allTagsLabel || preset.tags.includes(activeTag)
      const matchesDifficulty =
        activeDifficulty === allDifficultiesLabel || preset.difficulty === activeDifficulty
      const matchesBlock =
        activeBlock === allBlocksLabel || getPresetBlockIds(preset).includes(activeBlock)
      const matchesSheet = !buildSheetsOnly || Boolean(preset.buildSheet)

      return matchesQuery && matchesGroup && matchesTag && matchesDifficulty && matchesBlock && matchesSheet
    })
    .map(({ preset }) => preset)

  const presetsWithBuildSheet = presets.filter((p) => p.buildSheet).length

  const groupedPresets = availableGroups
    .map((group) => ({
      group,
      presets: filteredPresets.filter((preset) => preset.group === group),
    }))
    .filter(({ presets: groupPresets }) => groupPresets.length > 0)

  const activeFilterCount = [
    normalizedQuery.length > 0,
    activeGroup !== allGroupsLabel,
    activeTag !== allTagsLabel,
    activeDifficulty !== allDifficultiesLabel,
    activeBlock !== allBlocksLabel,
    buildSheetsOnly,
  ].filter(Boolean).length

  const clearFilters = () => {
    setQuery('')
    setActiveGroup(allGroupsLabel)
    setActiveTag(allTagsLabel)
    setActiveDifficulty(allDifficultiesLabel)
    setActiveBlock(allBlocksLabel)
    setBuildSheetsOnly(false)
  }

  const toggleExpanded = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <>
      <header className="page-header">
        <p className="eyebrow">
          {presets.length} preset recipes · {presetsWithBuildSheet} with full build sheets
        </p>
        <h1>Preset atlas</h1>
        <p className="lede">
          Buildable Fractal-style rigs — pick a preset, follow the step-by-step build sheet (block
          types, parameter values, channel assignments, scene programming), and replicate it on your
          FM3, FM9, or Axe-Fx III.
        </p>
      </header>

      <section className="preset-catalog-toolbar" aria-label="Preset filters">
        <label className="preset-search">
          <span className="sr-only">Search presets</span>
          <input
            className="filter-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search presets, blocks, types, parameter values..."
          />
        </label>

        <div className="preset-filter-row" aria-label="Preset groups">
          <button
            className={`chip${activeGroup === allGroupsLabel ? ' active' : ''}`}
            type="button"
            onClick={() => setActiveGroup(allGroupsLabel)}
          >
            All
          </button>
          {availableGroups.map((group) => (
            <button
              key={group}
              className={`chip${activeGroup === group ? ' active' : ''}`}
              type="button"
              onClick={() => setActiveGroup(group)}
            >
              {group}
            </button>
          ))}
        </div>

        <div className="preset-filter-selects">
          <label>
            <span>Tag</span>
            <select value={activeTag} onChange={(event) => setActiveTag(event.target.value)}>
              <option>{allTagsLabel}</option>
              {tags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          </label>

          <label>
            <span>Difficulty</span>
            <select
              value={activeDifficulty}
              onChange={(event) => setActiveDifficulty(event.target.value)}
            >
              <option>{allDifficultiesLabel}</option>
              {difficulties.map((difficulty) => (
                <option key={difficulty} value={difficulty}>
                  {difficulty}
                </option>
              ))}
            </select>
          </label>

          <label>
            <span>Block</span>
            <select value={activeBlock} onChange={(event) => setActiveBlock(event.target.value)}>
              <option>{allBlocksLabel}</option>
              {blockOptions.map((block) => (
                <option key={block.id} value={block.id}>
                  {block.label}
                </option>
              ))}
            </select>
          </label>

          <label className="preset-toggle-label">
            <input
              type="checkbox"
              checked={buildSheetsOnly}
              onChange={(event) => setBuildSheetsOnly(event.target.checked)}
            />
            <span>Full build sheet only</span>
          </label>
        </div>

        <div className="preset-results-meta">
          <span>
            {filteredPresets.length} of {presets.length} presets
          </span>
          {activeFilterCount > 0 && (
            <button type="button" onClick={clearFilters}>
              Clear filters
            </button>
          )}
        </div>
      </section>

      {groupedPresets.length > 0 ? (
        groupedPresets.map(({ group, presets: groupPresets }) => (
          <section key={group} className="preset-group" id={`presets-${slug(group)}`}>
            <div className="preset-group-header">
              <div>
                <p className="type-family-heading">{group}</p>
                <h2>{groupPresets.length === 1 ? '1 preset' : `${groupPresets.length} presets`}</h2>
              </div>
            </div>

            <div className="preset-grid">
              {groupPresets.map((preset) => {
                const hasSheet = Boolean(preset.buildSheet)
                const isExpanded = expanded[preset.id] ?? false
                return (
                  <article key={preset.id} className={`preset-card${hasSheet ? ' has-build-sheet' : ''}`}>
                    <header className="preset-card-header">
                      <div className="preset-meta">
                        <span>{preset.difficulty}</span>
                        <span>{preset.routing}</span>
                        <span>{preset.productFocus}</span>
                        <span className={`preset-sheet-flag ${hasSheet ? 'on' : 'off'}`}>
                          {hasSheet ? 'Full build sheet' : 'Recipe notes only'}
                        </span>
                      </div>
                      <h3>{preset.name}</h3>
                      <p className="vibe">{preset.vibe}</p>
                      <p className="preset-description">{preset.description}</p>
                      <div className="preset-tags" aria-label={`${preset.name} tags`}>
                        {preset.tags.slice(0, 8).map((tag) => (
                          <button
                            key={tag}
                            type="button"
                            className={`tag-pill${activeTag === tag ? ' active' : ''}`}
                            onClick={() => setActiveTag(tag)}
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                    </header>

                    {preset.parallelRouting ? (
                      <ParallelRoutingMap preset={preset} />
                    ) : (
                      <BlockOrderFlow
                        blockOrder={preset.blockOrder}
                        label={`${preset.name} block order`}
                      />
                    )}

                    {hasSheet && preset.buildSheet ? (
                      <>
                        <button
                          type="button"
                          className="build-sheet-toggle"
                          onClick={() => toggleExpanded(preset.id)}
                          aria-expanded={isExpanded}
                          aria-controls={`build-sheet-${preset.id}`}
                        >
                          {isExpanded ? 'Hide build sheet' : 'Show full build sheet'}
                          <span aria-hidden="true">{isExpanded ? ' ▴' : ' ▾'}</span>
                        </button>
                        {isExpanded && (
                          <div id={`build-sheet-${preset.id}`}>
                            <BuildSheetView preset={preset} sheet={preset.buildSheet} />
                          </div>
                        )}
                      </>
                    ) : (
                      <p className="build-sheet-missing">
                        Full block-by-block build sheet not yet authored for this preset. Follow
                        the block order above plus the scene notes below — and check the matching
                        signal chain recipe for type hints.
                      </p>
                    )}

                    <details className="preset-scenes">
                      <summary>{preset.scenes.length} scenes (prose notes)</summary>
                      <ul className="scene-list compact">
                        {preset.scenes.map((scene) => (
                          <li key={scene.name}>
                            <strong>{scene.name}</strong>
                            <p>{scene.note}</p>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </article>
                )
              })}
            </div>
          </section>
        ))
      ) : (
        <section className="empty">
          No presets match those filters. Try clearing one filter or searching for a block name.
        </section>
      )}
    </>
  )
}
