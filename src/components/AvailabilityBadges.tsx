import {
  formatProductCount,
  getBlockAvailability,
  isBlockLimitedToSpecificProducts,
  isProductAvailable,
  productLabels,
  productOrder,
} from '../data/blocks'
import type { Block } from '../data/blocks'

interface AvailabilityBadgesProps {
  block: Block
  compact?: boolean
  limitedOnly?: boolean
}

export function AvailabilityBadges({
  block,
  compact = false,
  limitedOnly = false,
}: AvailabilityBadgesProps) {
  if (limitedOnly && !isBlockLimitedToSpecificProducts(block)) return null

  const availability = getBlockAvailability(block)
  const className = [
    'availability-badges',
    compact ? 'compact' : '',
    isBlockLimitedToSpecificProducts(block) ? 'limited' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={className} aria-label="Product availability">
      {productOrder.map((product) => {
        const count = availability[product]
        const available = isProductAvailable(count)

        return (
          <span
            key={product}
            className={`availability-badge ${available ? 'available' : 'unavailable'}`}
            title={`${productLabels[product]}: ${formatProductCount(count)}`}
          >
            <span>{productLabels[product]}</span>
            {!compact && <strong>{formatProductCount(count)}</strong>}
          </span>
        )
      })}
    </div>
  )
}
