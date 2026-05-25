import { Link, useParams } from 'react-router-dom'
import { AvailabilityBadges } from '../components/AvailabilityBadges'
import {
  blockCategories,
  blocks,
  formatBlockTypeCount,
  getBlockAvailabilitySummary,
} from '../data/blocks'
import { slug } from '../utils/slug'

export function BlocksCategoryPage() {
  const { cat } = useParams<{ cat: string }>()
  const category = blockCategories.find((c) => slug(c) === cat)

  if (!category) {
    return (
      <section className="card">
        <h1>Category not found</h1>
        <p>
          No category matches <code>{cat}</code>. <Link to="/blocks">Back to all blocks</Link>.
        </p>
      </section>
    )
  }

  const items = blocks.filter((b) => b.category === category)
  const totalTypes = items.reduce(
    (sum, b) => sum + (b.typeList?.length ?? 0),
    0,
  )

  return (
    <>
      <header className="page-header">
        <p className="eyebrow">
          {items.length} blocks · {totalTypes} documented types
        </p>
        <h1>{category}</h1>
        <p className="lede">
          {category} blocks across FM3, FM9, and Axe-Fx III. Product badges show instance
          counts and tag blocks that only exist on specific units.
        </p>
      </header>

      <section className="block-grid">
        {items.map((b) => (
          <Link to={`/blocks/${b.id}`} key={b.id} className="block-card">
            <div className="block-card-head">
              <span className="block-abbr">{b.abbreviation}</span>
              <span className="block-category">{b.category}</span>
            </div>
            <h3>{b.name}</h3>
            <p>{b.summary}</p>
            <div className="block-card-foot">
              <span>{formatBlockTypeCount(b)}</span>
            </div>
            <AvailabilityBadges block={b} compact />
            <p className="block-availability-summary">{getBlockAvailabilitySummary(b)}</p>
          </Link>
        ))}
      </section>
    </>
  )
}
