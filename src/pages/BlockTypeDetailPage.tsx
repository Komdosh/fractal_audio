import { Link, useParams } from 'react-router-dom'
import { AvailabilityBadges } from '../components/AvailabilityBadges'
import { BlockTypeDiagram } from '../components/BlockTypeDiagram'
import { getBlockAvailabilitySummary, getBlockType } from '../data/blocks'
import { getEffectVisual } from '../data/effectVisuals'

export function BlockTypeDetailPage() {
  const { blockId, typeId } = useParams<{ blockId: string; typeId: string }>()
  const match = blockId && typeId ? getBlockType(blockId, typeId) : undefined
  const visual = getEffectVisual(blockId, typeId)

  if (!match) {
    return (
      <section className="card">
        <h1>Type not found</h1>
        <p>
          No type matches that URL.{' '}
          {blockId ? (
            <Link to={`/blocks/${blockId}`}>Back to the block</Link>
          ) : (
            <Link to="/blocks">Back to all blocks</Link>
          )}
          .
        </p>
      </section>
    )
  }

  const { block, type } = match
  const diagram = type.diagram
  const siblingTypes = (block.typeList ?? []).filter((t) => t.id !== type.id)
  const sameFamily = type.family
    ? siblingTypes.filter((t) => t.family === type.family)
    : []
  const others = siblingTypes.filter((t) => !sameFamily.includes(t))

  return (
    <>
      <header className="page-header">
        <div className={visual || diagram ? 'type-hero-layout' : undefined}>
          <div className="type-hero-copy">
            <p className="eyebrow">
              {block.name} · {type.family ?? 'Type'}
              {type.basedOn ? <> · based on {type.basedOn}</> : null}
            </p>
            <h1>{type.name}</h1>
            <p className="lede">{type.description}</p>
            <AvailabilityBadges block={block} />
            <p className="block-availability-summary">{getBlockAvailabilitySummary(block)}</p>
          </div>

          {diagram ? (
            <BlockTypeDiagram diagram={diagram} className="type-hero-diagram" />
          ) : visual ? (
            <figure className="type-hero-visual">
              <img
                src={visual.imageUrl}
                alt={visual.imageAlt}
                referrerPolicy="no-referrer"
              />
              <figcaption>
                <span>{visual.modelName}</span>
                <a href={visual.sourceUrl} target="_blank" rel="noreferrer">
                  {visual.sourceName}
                </a>
              </figcaption>
            </figure>
          ) : null}
        </div>
      </header>

      {type.notes && (
        <section className="block-section callout">
          <h2>How to use it</h2>
          <p>{type.notes}</p>
        </section>
      )}

      {type.settingsLayout && type.settingsLayout.length > 0 ? (
        <section className="block-section">
          <h2>Settings layout</h2>
          <p className="muted">
            Controls and source facts for this Type. When defaults are listed, they reflect the
            values the selected unit/editor loads on <em>Reset Parameters</em>. Sourced from the{' '}
            <a
              href="https://www.fractalaudio.com/downloads/manuals/fas-guides/Fractal-Audio-Blocks-Guide.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Fractal Audio Blocks Guide
            </a>
            {' '}and relevant Fractal Audio wiki model pages.
          </p>

          {type.settingsLayout.map((group) => (
            <div key={group.title} className="settings-group">
              <h3 className="settings-group-title">{group.title}</h3>
              <table className="settings-table">
                <colgroup>
                  <col className="param-name-col" />
                  <col className="param-range-col" />
                  <col className="param-default-col" />
                  <col className="param-desc-col" />
                </colgroup>
                <thead>
                  <tr>
                    <th>Parameter</th>
                    <th>Range</th>
                    <th>Default</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {group.parameters.map((p) => (
                    <tr key={p.name}>
                      <td className="param-name">{p.name}</td>
                      <td className="param-range">{p.range ?? '—'}</td>
                      <td className="param-default">{p.default ?? '—'}</td>
                      <td className="param-desc">{p.description ?? ''}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}

          <p className="muted small">
            For background on what each shared parameter does generally, see the{' '}
            <Link to={`/blocks/${block.id}#parameters`}>
              {block.name} block parameter reference
            </Link>
            .
          </p>
        </section>
      ) : (
        <section className="block-section">
          <h2>Settings layout</h2>
          <p>
            This type uses the standard <Link to={`/blocks/${block.id}#parameters`}>
              {block.name} block parameter set
            </Link>{' '}
            with the algorithm-appropriate defaults loaded on <em>Reset Parameters</em>.
            This type does not have a dedicated layout breakdown yet. Refer to
            the {block.name} block section in the{' '}
            <a
              href="https://www.fractalaudio.com/downloads/manuals/fas-guides/Fractal-Audio-Blocks-Guide.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Fractal Audio Blocks Guide
            </a>{' '}
            for the full table.
          </p>
        </section>
      )}

      {sameFamily.length > 0 && (
        <section className="block-section">
          <h2>Other {type.family} types in this block</h2>
          <div className="type-grid">
            {sameFamily.map((t) => (
            <Link
              to={`/blocks/${block.id}/types/${t.id}`}
              key={t.id}
              className="type-card"
            >
              {(() => {
                if (t.diagram) {
                  return <BlockTypeDiagram diagram={t.diagram} compact className="type-card-diagram" />
                }

                const siblingVisual = getEffectVisual(block.id, t.id)
                return siblingVisual ? (
                  <div className="type-card-visual">
                      <img
                        src={siblingVisual.imageUrl}
                        alt={siblingVisual.imageAlt}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ) : null
                })()}
                <p className="type-card-family">{t.family ?? ''}</p>
                <h3>{t.name}</h3>
                {t.basedOn && <p className="type-card-basedon">{t.basedOn}</p>}
                <p className="type-card-desc">{t.description}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {others.length > 0 && (
        <section className="block-section">
          <h2>All other {block.name} types</h2>
          <ul className="type-link-list">
            {others.map((t) => (
              <li key={t.id}>
                <Link to={`/blocks/${block.id}/types/${t.id}`}>{t.name}</Link>
                {t.basedOn && <span className="muted"> — {t.basedOn}</span>}
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  )
}
