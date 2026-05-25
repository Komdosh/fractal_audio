import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { signalChainGroups, signalChains, type SignalChain } from '../data/chains'
import { getBlock } from '../data/blocks'

const allGroupsLabel = 'All groups'
const allTagsLabel = 'All tags'
const allBlocksLabel = 'Any block'

function uniqueSorted(values: string[]) {
  return Array.from(new Set(values)).sort((a, b) => a.localeCompare(b))
}

function slug(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

function getChainSearchText(chain: SignalChain) {
  const stepText = chain.steps.flatMap((step) => {
    const block = getBlock(step.blockId)
    return [
      step.blockId,
      step.label,
      step.note,
      block?.name,
      block?.abbreviation,
      block?.category,
    ]
  })

  return [
    chain.name,
    chain.group,
    chain.vibe,
    chain.description,
    chain.routing,
    chain.difficulty,
    chain.productNote,
    ...chain.tags,
    ...stepText,
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase()
}

export function SignalChainsPage() {
  const [query, setQuery] = useState('')
  const [activeGroup, setActiveGroup] = useState(allGroupsLabel)
  const [activeTag, setActiveTag] = useState(allTagsLabel)
  const [activeBlock, setActiveBlock] = useState(allBlocksLabel)

  const availableGroups = useMemo(() => {
    const configuredGroups = new Set<string>(signalChainGroups)
    const extraGroups = uniqueSorted(signalChains.map((chain) => chain.group)).filter(
      (group) => !configuredGroups.has(group),
    )
    return [...signalChainGroups, ...extraGroups]
  }, [])

  const tags = useMemo(
    () => uniqueSorted(signalChains.flatMap((chain) => chain.tags)),
    [],
  )

  const blockOptions = useMemo(() => {
    const blockIds = uniqueSorted(signalChains.flatMap((chain) => chain.steps.map((step) => step.blockId)))
    return blockIds.map((blockId) => {
      const block = getBlock(blockId)
      return {
        id: blockId,
        label: block ? `${block.name} (${block.abbreviation})` : blockId,
      }
    })
  }, [])

  const searchIndex = useMemo(
    () => signalChains.map((chain) => ({ chain, searchText: getChainSearchText(chain) })),
    [],
  )

  const normalizedQuery = query.trim().toLowerCase()

  const filteredChains = searchIndex
    .filter(({ chain, searchText }) => {
      const matchesQuery = normalizedQuery.length === 0 || searchText.includes(normalizedQuery)
      const matchesGroup = activeGroup === allGroupsLabel || chain.group === activeGroup
      const matchesTag = activeTag === allTagsLabel || chain.tags.includes(activeTag)
      const matchesBlock =
        activeBlock === allBlocksLabel || chain.steps.some((step) => step.blockId === activeBlock)

      return matchesQuery && matchesGroup && matchesTag && matchesBlock
    })
    .map(({ chain }) => chain)

  const groupedChains = availableGroups
    .map((group) => ({
      group,
      chains: filteredChains.filter((chain) => chain.group === group),
    }))
    .filter(({ chains }) => chains.length > 0)

  const activeFilterCount = [
    normalizedQuery.length > 0,
    activeGroup !== allGroupsLabel,
    activeTag !== allTagsLabel,
    activeBlock !== allBlocksLabel,
  ].filter(Boolean).length

  const clearFilters = () => {
    setQuery('')
    setActiveGroup(allGroupsLabel)
    setActiveTag(allTagsLabel)
    setActiveBlock(allBlocksLabel)
  }

  return (
    <>
      <header className="page-header">
        <p className="eyebrow">{signalChains.length} ready-to-build chains</p>
        <h1>Signal chain catalog</h1>
        <p className="lede">
          Search by sound, block, tag, or playing context. Each template is a practical
          starting rig with real block order, routing intent, and scene-friendly notes.
        </p>
      </header>

      <section className="chain-catalog-toolbar" aria-label="Signal chain filters">
        <label className="chain-search">
          <span className="sr-only">Search signal chains</span>
          <input
            className="filter-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search chains, blocks, tags..."
          />
        </label>

        <div className="chain-filter-row" aria-label="Chain groups">
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

        <div className="chain-filter-selects">
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

        <div className="chain-results-meta">
          <span>
            {filteredChains.length} of {signalChains.length} chains
          </span>
          {activeFilterCount > 0 && (
            <button type="button" onClick={clearFilters}>
              Clear filters
            </button>
          )}
        </div>
      </section>

      {groupedChains.length > 0 ? (
        groupedChains.map(({ group, chains }) => (
          <section key={group} className="chain-group" id={`chains-${slug(group)}`}>
            <div className="chain-group-header">
              <div>
                <p className="type-family-heading">{group}</p>
                <h2>{chains.length === 1 ? '1 chain' : `${chains.length} chains`}</h2>
              </div>
            </div>

            <div className="chain-grid">
              {chains.map((chain) => (
                <article key={chain.id} className="chain-card">
                  <header className="chain-card-header">
                    <div className="chain-meta">
                      <span>{chain.difficulty}</span>
                      <span>{chain.routing}</span>
                      <span>{chain.steps.length} blocks</span>
                    </div>
                    <h3>{chain.name}</h3>
                    <p className="vibe">{chain.vibe}</p>
                    <p className="chain-description">{chain.description}</p>
                    {chain.productNote && (
                      <p className="chain-product-note">{chain.productNote}</p>
                    )}
                    <div className="chain-tags" aria-label={`${chain.name} tags`}>
                      {chain.tags.map((tag) => (
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

                  <ol className="chain-steps">
                    {chain.steps.map((step, idx) => {
                      const block = getBlock(step.blockId)
                      return (
                        <li key={`${step.blockId}-${idx}`} className="chain-step">
                          <span className="step-num">{idx + 1}</span>
                          <div className="step-body">
                            <div className="step-title">
                              {block ? (
                                <Link to={`/blocks/${block.id}`}>
                                  <span className="block-abbr inline">{block.abbreviation}</span>{' '}
                                  {block.name}
                                </Link>
                              ) : (
                                step.blockId
                              )}
                              {step.label && <span className="step-label"> · {step.label}</span>}
                            </div>
                            <p className="step-note">{step.note}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ol>
                </article>
              ))}
            </div>
          </section>
        ))
      ) : (
        <section className="empty">
          No chains match those filters. Try clearing one filter or searching for a block name.
        </section>
      )}
    </>
  )
}
