import { Link, NavLink, Outlet, useLocation, useParams } from 'react-router-dom'
import { useEffect, useMemo, useRef, useState } from 'react'
import { AvailabilityBadges } from '../components/AvailabilityBadges'
import {
  blockCategories,
  blocks,
  getBlock,
  getBlockAvailabilitySummary,
  getBlockType,
} from '../data/blocks'
import type { Block, BlockCategory } from '../data/blocks'
import { slug } from '../utils/slug'

interface Crumb {
  label: string
  to?: string
}

function useCrumbs(): Crumb[] {
  const { blockId, typeId, cat } = useParams<{
    blockId?: string
    typeId?: string
    cat?: string
  }>()
  const location = useLocation()

  return useMemo(() => {
    const crumbs: Crumb[] = [{ label: 'Blocks', to: '/blocks' }]

    if (cat) {
      // category route
      const matchCat = blockCategories.find((c) => slug(c) === cat)
      crumbs.push({ label: matchCat ?? cat })
      return crumbs
    }

    if (blockId) {
      const block = getBlock(blockId)
      if (block) {
        crumbs.push({
          label: block.category,
          to: `/blocks/category/${slug(block.category)}`,
        })

        if (typeId) {
          crumbs.push({ label: block.name, to: `/blocks/${block.id}` })
          const typeMatch = getBlockType(block.id, typeId)
          crumbs.push({ label: typeMatch ? typeMatch.type.name : typeId })
        } else {
          crumbs.push({ label: block.name })
        }
        return crumbs
      }
    }

    // `/blocks` root
    void location
    return crumbs
  }, [blockId, typeId, cat, location])
}

export function BlocksLayout() {
  const { blockId, cat } = useParams<{ blockId?: string; cat?: string }>()
  const location = useLocation()
  const crumbs = useCrumbs()
  const contentRef = useRef<HTMLDivElement>(null)
  const [menuSearch, setMenuSearch] = useState('')

  const normalizedMenuSearch = menuSearch.trim().toLowerCase()
  const currentCategory = useMemo(
    () => (cat ? blockCategories.find((c) => slug(c) === cat) : undefined),
    [cat],
  )
  const menuMatchCount = useMemo(
    () =>
      normalizedMenuSearch
        ? blocks.filter((block) => matchesMenuSearch(block, normalizedMenuSearch)).length
        : blocks.length,
    [normalizedMenuSearch],
  )

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      const hashTarget = getHashTarget(location.hash)

      if (hashTarget) {
        hashTarget.scrollIntoView({ block: 'start' })
        return
      }

      contentRef.current?.scrollIntoView({ block: 'start' })
    })

    return () => window.cancelAnimationFrame(frameId)
  }, [location.hash, location.pathname, location.search])

  return (
    <div className="blocks-layout">
      <aside className="blocks-sidebar" aria-label="Block navigation">
        <div className="sidebar-header">
          <div>
            <p className="sidebar-kicker">Fractal catalog</p>
            <p className="sidebar-title">Blocks menu</p>
          </div>
          <span className="sidebar-total">{blocks.length}</span>
        </div>

        <label className="sidebar-search">
          <span className="sr-only">Search blocks menu</span>
          <input
            type="search"
            value={menuSearch}
            onChange={(event) => setMenuSearch(event.target.value)}
            placeholder="Search drive, delay, Axe-only..."
          />
        </label>

        <div className="sidebar-search-meta" aria-live="polite">
          {normalizedMenuSearch
            ? `${menuMatchCount} matching block${menuMatchCount === 1 ? '' : 's'}`
            : 'Browse by category or jump to a block'}
        </div>

        <NavLink to="/blocks" end className="sidebar-home-link">
          <span>All blocks</span>
          <span>{blocks.length}</span>
        </NavLink>

        <nav className="sidebar-nav">
          {blockCategories.map((cat) => (
            <CategorySection
              key={cat}
              category={cat}
              currentBlockId={blockId}
              currentCategory={currentCategory}
              query={normalizedMenuSearch}
            />
          ))}
        </nav>

        {normalizedMenuSearch && menuMatchCount === 0 && (
          <p className="sidebar-empty">No blocks match this search.</p>
        )}
      </aside>

      <div className="blocks-main">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          {crumbs.map((c, i) => {
            const isLast = i === crumbs.length - 1
            return (
              <span key={`${c.label}-${i}`} className="crumb">
                {!isLast && c.to ? (
                  <Link to={c.to}>{c.label}</Link>
                ) : (
                  <span className="crumb-current">{c.label}</span>
                )}
                {!isLast && <span className="crumb-sep" aria-hidden>›</span>}
              </span>
            )
          })}
        </nav>

        <div className="blocks-outlet" ref={contentRef}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

function CategorySection({
  category,
  currentBlockId,
  currentCategory,
  query,
}: {
  category: BlockCategory
  currentBlockId?: string
  currentCategory?: BlockCategory
  query: string
}) {
  const allItems = blocks.filter((b) => b.category === category)
  if (allItems.length === 0) return null

  const items = query
    ? allItems.filter((block) => matchesMenuSearch(block, query))
    : allItems

  if (query && items.length === 0) return null

  const containsCurrent = allItems.some((b) => b.id === currentBlockId)
  const containsCategory = currentCategory === category
  const shouldOpen = Boolean(query) || containsCurrent || containsCategory

  return (
    <details className="sidebar-cat" open={shouldOpen}>
      <summary>
        <span className="sidebar-cat-title">{category}</span>
        <span className="sidebar-count">
          {query ? `${items.length}/${allItems.length}` : allItems.length}
        </span>
      </summary>
      <ul>
        <li>
          <NavLink to={`/blocks/category/${slug(category)}`} className="sidebar-overview-link">
            <span className="sidebar-block-name">Category overview</span>
            <span className="sidebar-typecount">{allItems.length}</span>
          </NavLink>
        </li>
        {items.map((b) => (
          <li key={b.id}>
            <NavLink to={`/blocks/${b.id}`} end>
              <span className="sidebar-block-abbr">{b.abbreviation}</span>
              <span className="sidebar-block-name">{b.name}</span>
              {b.typeList && b.typeList.length > 0 && (
                <span className="sidebar-typecount">{b.typeList.length}</span>
              )}
              <AvailabilityBadges block={b} compact limitedOnly />
            </NavLink>
          </li>
        ))}
      </ul>
    </details>
  )
}

function matchesMenuSearch(block: Block, query: string): boolean {
  if (
    block.name.toLowerCase().includes(query) ||
    block.abbreviation.toLowerCase().includes(query) ||
    block.category.toLowerCase().includes(query) ||
    block.summary.toLowerCase().includes(query) ||
    getBlockAvailabilitySummary(block).toLowerCase().includes(query)
  ) {
    return true
  }

  return (block.typeList ?? []).some(
    (type) =>
      type.name.toLowerCase().includes(query) ||
      (type.basedOn ?? '').toLowerCase().includes(query),
  )
}

function getHashTarget(hash: string): HTMLElement | null {
  if (!hash) return null

  try {
    return document.getElementById(decodeURIComponent(hash.slice(1)))
  } catch {
    return document.getElementById(hash.slice(1))
  }
}
