import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <section className="card">
      <p className="eyebrow">404</p>
      <h1>This page doesn&apos;t exist</h1>
      <p>
        Head back to the <Link to="/">homepage</Link> or browse the{' '}
        <Link to="/blocks">block catalog</Link>.
      </p>
    </section>
  )
}
