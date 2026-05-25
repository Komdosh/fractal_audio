import type { BlockTypeDiagram as BlockTypeDiagramData } from '../data/blocks'

interface BlockTypeDiagramProps {
  diagram: BlockTypeDiagramData
  compact?: boolean
  className?: string
}

export function BlockTypeDiagram({
  diagram,
  compact = false,
  className,
}: BlockTypeDiagramProps) {
  const classes = [
    'block-type-diagram',
    compact ? 'compact' : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <figure className={classes}>
      <svg
        aria-label={`${diagram.title}. ${diagram.summary}`}
        role="img"
        viewBox="0 0 260 148"
      >
        <rect className="diagram-plot" x="18" y="14" width="224" height="100" rx="0" />
        <line className="diagram-grid-line" x1="24" y1="61" x2="236" y2="61" />
        <line className="diagram-axis" x1="24" y1="104" x2="236" y2="104" />
        <line className="diagram-axis" x1="24" y1="18" x2="24" y2="104" />

        {diagram.regions?.map((region) => (
          <g key={`${region.label}-${region.x}`} className={`diagram-region tone-${region.tone}`}>
            <rect x={region.x} y="18" width={region.width} height="86" />
            {!compact && (
              <text x={region.x + region.width / 2} y="111" textAnchor="middle">
                {region.label}
              </text>
            )}
          </g>
        ))}

        {diagram.paths.map((path, index) => (
          <path
            key={`${path.d}-${index}`}
            className={[
              'diagram-response-path',
              `tone-${path.tone ?? 'primary'}`,
              path.dashed ? 'dashed' : '',
            ]
              .filter(Boolean)
              .join(' ')}
            d={path.d}
          />
        ))}

        {!compact &&
          diagram.markers?.map((marker) => (
            <text
              key={`${marker.label}-${marker.x}-${marker.y}`}
              className={`diagram-marker tone-${marker.tone ?? 'primary'}`}
              x={marker.x}
              y={marker.y}
              textAnchor={marker.anchor ?? 'middle'}
            >
              {marker.label}
            </text>
          ))}

        {!compact && diagram.yLabel && (
          <text className="diagram-axis-label y" x="11" y="64" textAnchor="middle">
            {diagram.yLabel}
          </text>
        )}
        <text className="diagram-axis-label" x="24" y="134" textAnchor="middle">
          {diagram.xLabels?.low ?? 'Low'}
        </text>
        {!compact && diagram.xLabels?.mid && (
          <text className="diagram-axis-label" x="130" y="134" textAnchor="middle">
            {diagram.xLabels.mid}
          </text>
        )}
        <text className="diagram-axis-label" x="236" y="134" textAnchor="middle">
          {diagram.xLabels?.high ?? 'High'}
        </text>
      </svg>
      {!compact && (
        <figcaption>
          <span>{diagram.title}</span>
          <p>{diagram.summary}</p>
        </figcaption>
      )}
    </figure>
  )
}
