import { Link } from 'react-router-dom'
import { useUnit } from 'effector-react'
import { AvailabilityBadges } from '../components/AvailabilityBadges'
import {
  blockCategories,
  blocks,
  getBlockAvailabilitySummary,
} from '../data/blocks'
import { $search, setSearch } from '../model/blockFilter'
import { slug } from '../utils/slug'

export function BlocksIndexPage() {
  const [search, onSearch] = useUnit([$search, setSearch])

  const needle = search.trim().toLowerCase()
  const hits = needle
    ? blocks.filter((b) => {
        if (
          b.name.toLowerCase().includes(needle) ||
          b.abbreviation.toLowerCase().includes(needle) ||
          b.summary.toLowerCase().includes(needle) ||
          getBlockAvailabilitySummary(b).toLowerCase().includes(needle)
        ) {
          return true
        }
        // Search type names too
        return (b.typeList ?? []).some(
          (t) =>
            t.name.toLowerCase().includes(needle) ||
            (t.basedOn ?? '').toLowerCase().includes(needle),
        )
      })
    : []

  const totalBlocks = blocks.length
  const totalTypes = blocks.reduce(
    (sum, b) => sum + (b.typeList?.length ?? 0),
    0,
  )

  return (
    <>
      <header className="page-header">
        <p className="eyebrow">
          {totalBlocks} blocks · {totalTypes} documented types
        </p>
        <h1>The Fractal block catalog</h1>
        <p className="lede">
          Every block category across FM3, FM9, and Axe-Fx III. Product badges show whether a
          block runs on all three units, only FM9/Axe-Fx III, or Axe-Fx III only. Search by block,
          type, source model, or product tag.
        </p>
      </header>

      <div className="filter-bar">
        <input
          type="search"
          placeholder="Search blocks and types — try fuzz, klon, plate, univibe, octave…"
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          className="filter-search"
        />
      </div>

      {needle && (
        <section className="block-section">
          <h2>{hits.length} matches for "{search}"</h2>
          {hits.length === 0 ? (
            <p className="muted">Nothing matches. Try a broader term.</p>
          ) : (
            <ul className="search-hits">
              {hits.map((b) => {
                const typeMatches = (b.typeList ?? []).filter(
                  (t) =>
                    t.name.toLowerCase().includes(needle) ||
                    (t.basedOn ?? '').toLowerCase().includes(needle),
                )
                return (
                  <li key={b.id} className="search-hit">
                    <Link to={`/blocks/${b.id}`} className="search-hit-block">
                      <span className="block-abbr">{b.abbreviation}</span>
                      <span>{b.name}</span>
                      <span className="muted"> — {b.summary}</span>
                    </Link>
                    <AvailabilityBadges block={b} compact />
                    {typeMatches.length > 0 && (
                      <ul className="search-hit-types">
                        {typeMatches.map((t) => (
                          <li key={t.id}>
                            <Link to={`/blocks/${b.id}/types/${t.id}`}>
                              {t.name}
                            </Link>
                            {t.basedOn && (
                              <span className="muted"> — {t.basedOn}</span>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                )
              })}
            </ul>
          )}
        </section>
      )}

      {!needle && (
        <section className="block-section">
          <div className="category-grid">
            {blockCategories.map((cat) => {
              const items = blocks.filter((b) => b.category === cat)
              const types = items.reduce(
                (sum, b) => sum + (b.typeList?.length ?? 0),
                0,
              )
              return (
                <Link
                  to={`/blocks/category/${slug(cat)}`}
                  key={cat}
                  className="category-card"
                >
                  <h3>{cat}</h3>
                  <p className="muted">
                    {items.length} block{items.length === 1 ? '' : 's'}
                    {types > 0 ? ` · ${types} documented types` : ''}
                  </p>
                  <ul className="category-card-blocks">
                    {items.slice(0, 5).map((b) => (
                      <li key={b.id}>{b.name}</li>
                    ))}
                    {items.length > 5 && (
                      <li className="muted">+ {items.length - 5} more…</li>
                    )}
                  </ul>
                </Link>
              )
            })}
          </div>
        </section>
      )}
    </>
  )
}
