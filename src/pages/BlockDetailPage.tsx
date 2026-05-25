import { Link, useLocation, useParams } from 'react-router-dom'
import { useMemo, useState } from 'react'
import { AvailabilityBadges } from '../components/AvailabilityBadges'
import { BlockTypeDiagram } from '../components/BlockTypeDiagram'
import { ampModels } from '../data/ampModels'
import {
  blocks,
  formatBlockTypeCount,
  getBlock,
  getBlockAvailability,
  getBlockAvailabilitySummary,
  verifiedTypeCatalogs,
} from '../data/blocks'
import type { Block, BlockType, BlockTypeFamily } from '../data/blocks'
import { getEffectVisual } from '../data/effectVisuals'

export function BlockDetailPage() {
  const location = useLocation()
  const { blockId } = useParams<{ blockId: string }>()
  const block = blockId ? getBlock(blockId) : undefined
  const sectionPath = `${location.pathname}${location.search}`

  const groupedTypes = useMemo(() => {
    if (!block?.typeList) return null
    const groups = new Map<string, BlockType[]>()
    for (const t of block.typeList) {
      const key = t.family ?? 'Other'
      const arr = groups.get(key) ?? []
      arr.push(t)
      groups.set(key, arr)
    }
    return [...groups.entries()] as [BlockTypeFamily | 'Other', BlockType[]][]
  }, [block])

  if (!block) {
    return (
      <section className="card">
        <h1>Block not found</h1>
        <p>
          The block <code>{blockId}</code> doesn&apos;t exist in this catalog.{' '}
          <Link to="/blocks">Back to all blocks</Link>.
        </p>
      </section>
    )
  }

  const siblings = blocks.filter(
    (b) => b.category === block.category && b.id !== block.id,
  )
  const availability = getBlockAvailability(block)

  return (
    <>
      <header className="page-header">
        <p className="eyebrow">
          {block.category} · {formatBlockTypeCount(block)} · {getBlockAvailabilitySummary(block)}
        </p>
        <h1>
          <span className="block-abbr inline">{block.abbreviation}</span> {block.name}
        </h1>
        <p className="lede">{block.summary}</p>
        <AvailabilityBadges block={block} />
      </header>

      {/* In-page TOC */}
      <nav className="page-toc" aria-label="On this page">
        <Link to={`${sectionPath}#overview`}>Overview</Link>
        {block.typeList && block.typeList.length > 0 && (
          <Link to={`${sectionPath}#types`}>Types ({block.typeList.length})</Link>
        )}
        <Link to={`${sectionPath}#availability`}>Availability</Link>
        <Link to={`${sectionPath}#parameters`}>Parameters</Link>
        <Link to={`${sectionPath}#position`}>In the chain</Link>
        {block.tips && block.tips.length > 0 && (
          <Link to={`${sectionPath}#tips`}>Tips</Link>
        )}
      </nav>

      <section id="overview" className="block-section">
        <h2>Overview</h2>
        <p>{block.description}</p>
      </section>

      <section id="availability" className="block-section">
        <h2>Product availability</h2>
        <AvailabilityBadges block={block} />
        <p className="block-availability-summary">{getBlockAvailabilitySummary(block)}</p>
        {availability.note && <p className="muted small">{availability.note}</p>}
      </section>

      {groupedTypes && (
        <section id="types" className="block-section">
          {(() => {
            const documented = block.typeList!.length
            const verified =
              (verifiedTypeCatalogs as Record<string, readonly string[] | undefined>)[block.id]
            const totalLabel = verified?.length
              ? String(verified.length)
              : typeof block.types === 'number'
                ? String(block.types)
                : block.types
            const showTotal = totalLabel && totalLabel !== String(documented)
            return (
              <>
                <h2>
                  Types ({documented} documented{showTotal ? ` of ${totalLabel} available` : ''})
                </h2>
                <p className="muted">
                  The <strong>Type</strong> parameter on this block selects between the algorithm
                  variants below. Click any type for a dedicated page.
                </p>
                {verified && verified.length > documented && (
                  <details className="callout-light">
                    <summary>
                      This catalog includes {verified.length} {block.name} types — show full list
                      (verified from the live FM3 unit on firmware 12.00)
                    </summary>
                    <ul className="raw-type-list">
                      {verified.map((name) => (
                        <li key={name}>{name}</li>
                      ))}
                    </ul>
                    <p className="muted small">
                      Types without a dedicated page below use the standard {block.name} layout
                      with the algorithm-appropriate defaults loaded on{' '}
                      <em>Reset Parameters</em>.
                    </p>
                  </details>
                )}
              </>
            )
          })()}
          {block.id === 'amp' ? (
            <AmpModelCatalog block={block} />
          ) : (
            groupedTypes.map(([family, items]) => (
              <div key={family} className="type-family">
                <h3 className="type-family-heading">{family}</h3>
                <div className="type-grid">
                  {items.map((t) => (
                    <Link
                      to={`/blocks/${block.id}/types/${t.id}`}
                      key={t.id}
                      className="type-card"
                    >
                      {(() => {
                        if (t.diagram) {
                          return <BlockTypeDiagram diagram={t.diagram} compact className="type-card-diagram" />
                        }

                        const visual = getEffectVisual(block.id, t.id)
                        return visual ? (
                          <div className="type-card-visual">
                            <img
                              src={visual.imageUrl}
                              alt={visual.imageAlt}
                              loading="lazy"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                        ) : null
                      })()}
                      <p className="type-card-family">{t.family ?? ''}</p>
                      <h4>{t.name}</h4>
                      {t.basedOn && <p className="type-card-basedon">{t.basedOn}</p>}
                      <p className="type-card-desc">{t.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ))
          )}
        </section>
      )}

      <section id="parameters" className="block-section">
        <h2>Key parameters</h2>
        <dl className="param-list">
          {block.keyParameters.map((p) => (
            <div key={p.name} className="param-row">
              <dt>{p.name}</dt>
              <dd>{p.description}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="position" className="block-section">
        <h2>Typical position in the chain</h2>
        <p>{block.typicalPosition}</p>
      </section>

      {block.tips && block.tips.length > 0 && (
        <section id="tips" className="block-section">
          <h2>Tips</h2>
          <ul className="tip-list">
            {block.tips.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </section>
      )}

      {siblings.length > 0 && (
        <section className="block-section">
          <h2>Related blocks ({block.category})</h2>
          <div className="block-grid compact">
            {siblings.map((b) => (
              <Link to={`/blocks/${b.id}`} key={b.id} className="block-card">
                <div className="block-card-head">
                  <span className="block-abbr">{b.abbreviation}</span>
                </div>
                <h3>{b.name}</h3>
                <p>{b.summary}</p>
                <AvailabilityBadges block={b} compact />
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  )
}

function AmpModelCatalog({ block }: { block: Block }) {
  const [query, setQuery] = useState('')
  const [family, setFamily] = useState('All')
  const needle = query.trim().toLowerCase()

  const families = useMemo(
    () => ['All', ...Array.from(new Set(ampModels.map((model) => model.family)))],
    [],
  )

  const filteredModels = useMemo(
    () =>
      ampModels.filter((model) => {
        const familyMatches = family === 'All' || model.family === family
        const searchMatches = !needle || matchesAmpModelSearch(model, needle)
        return familyMatches && searchMatches
      }),
    [family, needle],
  )

  return (
    <div className="amp-catalog">
      <div className="amp-catalog-toolbar">
        <label className="amp-catalog-search">
          <span className="sr-only">Search amp models</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search amp, circuit, cab, tubes, controls..."
          />
        </label>
        <div className="amp-family-tabs" aria-label="Filter amp family">
          {families.map((familyName) => (
            <button
              key={familyName}
              type="button"
              className={familyName === family ? 'active' : undefined}
              onClick={() => setFamily(familyName)}
            >
              <span>{familyName}</span>
              <span>
                {familyName === 'All'
                  ? ampModels.length
                  : ampModels.filter((model) => model.family === familyName).length}
              </span>
            </button>
          ))}
        </div>
      </div>

      <p className="amp-catalog-count" aria-live="polite">
        Showing {filteredModels.length} of {ampModels.length} current Fractal Audio Wiki amp models.
      </p>

      <div className="amp-model-grid">
        {filteredModels.map((model) => {
          const controls = model.controls.slice(0, 5)
          const hiddenControls = Math.max(model.controls.length - controls.length, 0)

          return (
            <Link
              key={model.id}
              to={`/blocks/${block.id}/types/${model.id}`}
              className="amp-model-card"
            >
              <div className="amp-model-image">
                <img
                  src={model.imageUrl}
                  alt={model.imageAlt}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="amp-model-body">
                <div className="amp-model-heading">
                  <span className="type-card-family">{model.family}</span>
                  <h3>{model.name}</h3>
                </div>
                {model.basedOn && <p className="type-card-basedon">{model.basedOn}</p>}
                <dl className="amp-model-facts">
                  {model.powerTubes && (
                    <>
                      <dt>Tubes</dt>
                      <dd>{model.powerTubes}</dd>
                    </>
                  )}
                  {model.matchingDynaCab && (
                    <>
                      <dt>DynaCab</dt>
                      <dd>{model.matchingDynaCab}</dd>
                    </>
                  )}
                  {model.originalCab && (
                    <>
                      <dt>Original cab</dt>
                      <dd>{model.originalCab}</dd>
                    </>
                  )}
                </dl>
                {model.controls.length > 0 && (
                  <div className="amp-control-list">
                    {controls.map((control) => (
                      <span key={control}>{control}</span>
                    ))}
                    {hiddenControls > 0 && <span>+{hiddenControls} more</span>}
                  </div>
                )}
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

function matchesAmpModelSearch(model: (typeof ampModels)[number], needle: string) {
  return [
    model.name,
    model.family,
    model.basedOn,
    model.originalCab,
    model.matchingDynaCab,
    model.powerTubes,
    ...model.controls,
  ]
    .filter(Boolean)
    .some((value) => value!.toLowerCase().includes(needle))
}
