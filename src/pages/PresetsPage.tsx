import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { presets, presetGroups, type Preset, type PresetRoutingRow } from '../data/chains'
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

export function PresetsPage() {
  const [query, setQuery] = useState('')
  const [activeGroup, setActiveGroup] = useState(allGroupsLabel)
  const [activeTag, setActiveTag] = useState(allTagsLabel)
  const [activeDifficulty, setActiveDifficulty] = useState(allDifficultiesLabel)
  const [activeBlock, setActiveBlock] = useState(allBlocksLabel)

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

      return matchesQuery && matchesGroup && matchesTag && matchesDifficulty && matchesBlock
    })
    .map(({ preset }) => preset)

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
  ].filter(Boolean).length

  const clearFilters = () => {
    setQuery('')
    setActiveGroup(allGroupsLabel)
    setActiveTag(allTagsLabel)
    setActiveDifficulty(allDifficultiesLabel)
    setActiveBlock(allBlocksLabel)
  }

  return (
    <>
      <header className="page-header">
        <p className="eyebrow">{presets.length} stage-ready preset recipes</p>
        <h1>Preset atlas</h1>
        <p className="lede">
          Search a deep catalog of complete Fractal-style rigs: block order, use case,
          product fit, and scene notes for FM3, FM9, and Axe-Fx III.
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
            placeholder="Search presets, blocks, styles, pickups..."
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
              {groupPresets.map((preset) => (
                <article key={preset.id} className="preset-card">
                  <header className="preset-card-header">
                    <div className="preset-meta">
                      <span>{preset.difficulty}</span>
                      <span>{preset.routing}</span>
                      <span>{preset.productFocus}</span>
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

                  <details className="preset-scenes">
                    <summary>{preset.scenes.length} scenes</summary>
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
              ))}
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
