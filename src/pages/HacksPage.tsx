import { Link } from 'react-router-dom'
import { getBlock } from '../data/blocks'
import {
  deviceHacks,
  hackCategoryOrder,
  hackSources,
  type DeviceHack,
  type HackSourceKey,
} from '../data/hacks'
import { slug } from '../utils/slug'

function countUniqueSources() {
  return new Set(deviceHacks.flatMap((hack) => hack.sourceKeys)).size
}

function RelatedBlocks({ blockIds }: { blockIds: string[] }) {
  const blocks = blockIds.flatMap((blockId) => {
    const block = getBlock(blockId)
    return block ? [block] : []
  })

  if (blocks.length === 0) return null

  return (
    <div className="hack-related" aria-label="Related blocks">
      {blocks.map((block) => (
        <Link key={block.id} to={`/blocks/${block.id}`}>
          <span className="block-abbr inline">{block.abbreviation}</span>
          {block.name}
        </Link>
      ))}
    </div>
  )
}

function SourceLinks({ sourceKeys }: { sourceKeys: HackSourceKey[] }) {
  return (
    <div className="hack-sources" aria-label="Sources">
      {sourceKeys.map((sourceKey) => {
        const source = hackSources[sourceKey]

        return (
          <a key={sourceKey} href={source.url} target="_blank" rel="noopener noreferrer">
            {source.name}
          </a>
        )
      })}
    </div>
  )
}

function HackCard({ hack }: { hack: DeviceHack }) {
  return (
    <article className="hack-card" id={hack.id}>
      <header className="hack-card-header">
        <div className="hack-meta">
          <span>{hack.category}</span>
          <span>{hack.appliesTo}</span>
        </div>
        <h3>{hack.title}</h3>
        <p className="hack-summary">{hack.summary}</p>
      </header>

      <div className="hack-body">
        <section className="hack-field">
          <h4>Payoff</h4>
          <p>{hack.payoff}</p>
        </section>

        <section className="hack-field chain-move">
          <h4>Signal-chain move</h4>
          <p>{hack.chainMove}</p>
        </section>

        <section className="hack-field">
          <h4>Apply it</h4>
          <ol className="hack-steps">
            {hack.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        {hack.caveat && (
          <section className="hack-caveat">
            <h4>Check first</h4>
            <p>{hack.caveat}</p>
          </section>
        )}
      </div>

      <footer className="hack-card-footer">
        <RelatedBlocks blockIds={hack.blockIds} />
        <SourceLinks sourceKeys={hack.sourceKeys} />
      </footer>
    </article>
  )
}

export function HacksPage() {
  const groupedHacks = hackCategoryOrder
    .map((category) => ({
      category,
      hacks: deviceHacks.filter((hack) => hack.category === category),
    }))
    .filter(({ hacks }) => hacks.length > 0)

  return (
    <>
      <header className="page-header">
        <p className="eyebrow">Source-linked Fractal techniques</p>
        <h1>Techniques</h1>
        <p className="lede">
          Proven device moves for tighter presets, smarter scenes, and more useful
          signal chains. Each technique points to the relevant block, feature, or product source.
        </p>
      </header>

      <section className="hack-summary-grid" aria-label="Technique catalog summary">
        <div className="hack-summary-stat">
          <span>{deviceHacks.length}</span>
          <p>curated techniques</p>
        </div>
        <div className="hack-summary-stat">
          <span>{hackCategoryOrder.length}</span>
          <p>focus areas</p>
        </div>
        <div className="hack-summary-stat">
          <span>{countUniqueSources()}</span>
          <p>source pages</p>
        </div>
      </section>

      {groupedHacks.map(({ category, hacks }) => (
        <section key={category} className="hack-section" id={`hacks-${slug(category)}`}>
          <div className="chain-group-header">
            <div>
              <p className="type-family-heading">{category}</p>
              <h2>{hacks.length === 1 ? '1 technique' : `${hacks.length} techniques`}</h2>
            </div>
          </div>

          <div className="hack-grid">
            {hacks.map((hack) => (
              <HackCard key={hack.id} hack={hack} />
            ))}
          </div>
        </section>
      ))}
    </>
  )
}
