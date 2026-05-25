import { Link } from 'react-router-dom'

const products = [
  {
    name: 'FM3 Mark II Turbo',
    role: 'Compact floor unit',
    body:
      'Smallest current Fractal modeler. Best when you want the same core amp/effects sound in a lightweight rig and can live with one Amp block, one Cab block, and fewer simultaneous blocks.',
    facts: ['1 Amp block', '1 Cab block', '3 onboard switches', 'USB 4x4 audio', '2 pedal ports'],
  },
  {
    name: 'FM9 Mark II Turbo',
    role: 'Expanded floor unit',
    body:
      'The larger floorboard choice. It keeps the live-friendly integrated switch format, adds more I/O and foot control, and supports dual Amp/Cab workflows plus the Crossover block.',
    facts: ['2 Amp blocks', '2 Cab blocks', '9 onboard switches', 'USB 8x8 audio', '3 pedal ports'],
  },
  {
    name: 'Axe-Fx III Mark II Turbo',
    role: 'Flagship rack processor',
    body:
      'The deepest current platform. It has the broadest block inventory, the highest instance counts, Axe-only utilities, FullRes IR workflows, and the most complex routing headroom.',
    facts: ['2 Amp blocks', '2 Cab blocks', 'Axe-only blocks', 'USB 8x8 audio', '4 FC controllers'],
  },
]

const differences = [
  {
    label: 'Extra block inventory',
    value:
      'FM9 and Axe-Fx III add Crossover. Axe-Fx III also adds Dynamic Distortion, IR Player, Tone Match, Real-Time Analyzer, IR Capture, and Vocoder.',
  },
  {
    label: 'More instances',
    value:
      'FM9 and Axe-Fx III can run more instances of several shared blocks: Amp, Cab, Drive, Reverb, Megatap, Ten-Tap, Multiband Compressor, EQ, Volume/Pan, and more.',
  },
  {
    label: 'Cab and IR features',
    value:
      'FM3 and FM9 use smaller Cab/IR limits than Axe-Fx III. FullRes IR storage and IR Player workflows belong to Axe-Fx III.',
  },
  {
    label: 'Amp feature differences',
    value:
      'The amp modeling quality is shared, but FM3 has one Amp block and omits some larger-unit Amp features such as Bias Tremolo and Input Dynamics.',
  },
  {
    label: 'Preset transfer',
    value:
      'FM3 can load many larger-unit presets only within its CPU, block inventory, and routing limits. The block catalog now marks those limits directly.',
  },
]

const limitedBlocks = [
  {
    label: 'FM9 + Axe-Fx III',
    blocks: [
      { to: '/blocks/crossover', name: 'Crossover' },
    ],
  },
  {
    label: 'Axe-Fx III only',
    blocks: [
      { to: '/blocks/dynamic-distortion', name: 'Dynamic Distortion' },
      { to: '/blocks/ir-player', name: 'IR Player' },
      { to: '/blocks/tone-match', name: 'Tone Match' },
      { to: '/blocks/real-time-analyzer', name: 'Real-Time Analyzer' },
      { to: '/blocks/ir-capture', name: 'IR Capture' },
      { to: '/blocks/vocoder', name: 'Vocoder' },
    ],
  },
]

export function HardwarePage() {
  return (
    <>
      <header className="page-header">
        <p className="eyebrow">Hardware family</p>
        <h1>Fractal Audio FM3, FM9, and Axe-Fx III</h1>
        <p className="lede">
          One reference for the covered Fractal Audio floor and rack modelers. The sound engine
          and most blocks are shared, but block inventory, instance counts, routing
          headroom, I/O, and utility tools differ by product.
        </p>
      </header>

      <section className="block-section">
        <h2>Models at a glance</h2>
        <div className="product-card-grid">
          {products.map((product) => (
            <article key={product.name} className="product-card">
              <p className="type-card-family">{product.role}</p>
              <h3>{product.name}</h3>
              <p>{product.body}</p>
              <ul>
                {product.facts.map((fact) => (
                  <li key={fact}>{fact}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="block-section">
        <h2>What changes between them</h2>
        <div className="spec-table">
          {differences.map((item) => (
            <div key={item.label} className="spec-row">
              <div className="spec-label">{item.label}</div>
              <div className="spec-value">{item.value}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="block-section">
        <h2>Blocks limited to specific products</h2>
        <div className="card-grid">
          {limitedBlocks.map((group) => (
            <article key={group.label} className="info-card">
              <h3>{group.label}</h3>
              <ul>
                {group.blocks.map((block) => (
                  <li key={block.to}>
                    <Link to={block.to}>{block.name}</Link>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="muted small">
          The <Link to="/blocks">block catalog</Link> shows product tags on every
          block, so FM3 users can avoid incompatible blocks and FM9/Axe-Fx III users
          can see what extra routing or utility blocks they gain.
        </p>
      </section>
    </>
  )
}
