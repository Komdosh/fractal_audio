import { Link } from 'react-router-dom'
import { blocks } from '../data/blocks'
import { ampModels } from '../data/ampModels'
import { signalChains } from '../data/chains'

const featureCards = [
  {
    to: '/hardware',
    title: 'FM3, FM9, Axe-Fx III',
    body: 'Compare the covered Fractal units — I/O, block inventory, instance counts, and product-only tools.',
  },
  {
    to: '/blocks',
    title: 'Every block, documented',
    body: `${blocks.length} blocks with product tags, parameters, typical positions, and tips — cross-checked against the Blocks Guide and Fractal Audio Wiki.`,
  },
  {
    to: '/signal-chains',
    title: 'Genre-tailored chains',
    body: `${signalChains.length} ready-to-build signal chains — clean, classic rock, modern metal, ambient, funk, acoustic, bass.`,
  },
  {
    to: '/presets',
    title: 'Starter presets',
    body: 'Scene-by-scene preset recipes with notes for compact FM3 rigs and larger dual-amp units.',
  },
  {
    to: '/hacks',
    title: 'Source-linked techniques',
    body: 'Non-obvious CPU, routing, scene, delay, cab, and live-control moves you can apply to real presets.',
  },
  {
    to: '/resources',
    title: 'Official sources',
    body: 'Direct links to the manual, Blocks Guide, Fractal Audio Wiki, and the Fractal Audio forum.',
  },
]

const heroStats = [
  { label: 'Amp models', value: String(ampModels.length) },
  { label: 'Drive types', value: '87' },
  { label: 'Blocks', value: String(blocks.length) },
  { label: 'Products', value: '3' },
]

export function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <div className="hero-meta">
            <p className="eyebrow">Fractal Audio — Field Guide</p>
            <span>Edition 01</span>
          </div>
          <h1>
            The Fractal <span className="accent">block</span> universe.
          </h1>
          <p className="lede">
            FM3, FM9, and Axe-Fx III share the same core modeling platform — but the larger
            units add instances, routing headroom, and a few product-only blocks. One
            place for the differences.
          </p>
          <div className="hero-cta">
            <Link to="/blocks" className="btn primary">Browse the catalog</Link>
            <Link to="/signal-chains" className="btn ghost">Signal-chain templates</Link>
          </div>
          <div className="hero-product-strip" aria-label="Supported Fractal units">
            <span>FM3</span>
            <span>FM9</span>
            <span>Axe-Fx III</span>
          </div>
        </div>

        <div className="hero-stats-row" aria-label="Catalog at a glance">
          {heroStats.map((item) => (
            <Stat key={item.label} label={item.label} value={item.value} />
          ))}
        </div>
      </section>

      <div className="section-intro">
        <span>01 / Explore</span>
        <h2>A reference for the rig you actually own.</h2>
      </div>
      <section className="card-grid">
        {featureCards.map((c) => (
          <Link key={c.to} to={c.to} className="feature-card">
            <h3>{c.title}</h3>
            <p>{c.body}</p>
            <span className="link-cue">Open &rarr;</span>
          </Link>
        ))}
      </section>
    </>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="stat">
      <div className="stat-value">{value}</div>
      <div className="stat-label">{label}</div>
    </div>
  )
}
