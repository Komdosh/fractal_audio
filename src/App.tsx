import { Navigate, NavLink, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { HardwarePage } from './pages/HardwarePage'
import { BlocksLayout } from './pages/BlocksLayout'
import { BlocksIndexPage } from './pages/BlocksIndexPage'
import { BlocksCategoryPage } from './pages/BlocksCategoryPage'
import { BlockDetailPage } from './pages/BlockDetailPage'
import { BlockTypeDetailPage } from './pages/BlockTypeDetailPage'
import { SignalChainsPage } from './pages/SignalChainsPage'
import { PresetsPage } from './pages/PresetsPage'
import { HacksPage } from './pages/HacksPage'
import { ResourcesPage } from './pages/ResourcesPage'
import { NotFoundPage } from './pages/NotFoundPage'

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/hardware', label: 'Hardware' },
  { to: '/blocks', label: 'Blocks' },
  { to: '/signal-chains', label: 'Signal Chains' },
  { to: '/presets', label: 'Presets' },
  { to: '/hacks', label: 'Techniques' },
  { to: '/resources', label: 'Resources' },
]

export function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <NavLink to="/" className="brand" end>
          <span className="brand-mark">FAS</span>
          <span className="brand-wordmark">
            Fractal Field Guide
            <span>FM3 / FM9 / Axe-Fx III</span>
          </span>
        </NavLink>
        <nav className="primary-nav">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="app-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hardware" element={<HardwarePage />} />
          <Route path="/fm3" element={<Navigate to="/hardware" replace />} />

          <Route path="/blocks" element={<BlocksLayout />}>
            <Route index element={<BlocksIndexPage />} />
            <Route path="category/:cat" element={<BlocksCategoryPage />} />
            <Route path=":blockId" element={<BlockDetailPage />} />
            <Route
              path=":blockId/types/:typeId"
              element={<BlockTypeDetailPage />}
            />
          </Route>

          <Route path="/signal-chains" element={<SignalChainsPage />} />
          <Route path="/presets" element={<PresetsPage />} />
          <Route path="/hacks" element={<HacksPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <footer className="app-footer">
        <p>
          Unofficial reference for the Fractal Audio FM3, FM9, and Axe-Fx III family,
          focused on current block behavior and product differences. Sourced from the{' '}
          <a href="https://www.fractalaudio.com/downloads/manuals/fas-guides/Fractal-Audio-Blocks-Guide.pdf">
            Fractal Audio Blocks Guide
          </a>
          , the{' '}
          <a href="https://wiki.fractalaudio.com/wiki/index.php?title=Effects_list">
            Fractal Audio effects list
          </a>
          , and the{' '}
          <a href="https://wiki.fractalaudio.com/wiki/index.php?title=Axe-Fx_III%2C_FM9%2C_FM3">
            Fractal Audio Wiki product comparison
          </a>.
        </p>
        <p className="muted">
          Fractal Audio, FM3, FM9, Axe-Fx, Cygnus, DynaCab, FASLINK and UltraRes are
          trademarks of Fractal Audio Systems. This site is not affiliated with or
          endorsed by Fractal Audio.
        </p>
      </footer>
    </div>
  )
}
