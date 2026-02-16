export default function HomePage() {
  return (
    <section className="hero">
      <div className="hero-card">
        <p className="badge">Next.js 13.5.6</p>
        <h1>Clean starter homepage</h1>
        <p className="subtext">
          This is a minimal base layout with a simple navbar, footer, and basic
          global styling. Tell me your website requirements next and we’ll shape
          the structure properly.
        </p>

        <div className="actions">
          <a className="btn primary" href="#next">
            Get Started
          </a>
          <a className="btn" href="/about">
            Learn More
          </a>
        </div>
      </div>

      <div id="next" className="grid">
        <div className="panel">
          <h3>Layout</h3>
          <p>Header + main container + footer (clean and reusable).</p>
        </div>
        <div className="panel">
          <h3>Styling</h3>
          <p>Simple CSS reset, readable typography, basic components.</p>
        </div>
        <div className="panel">
          <h3>Next step</h3>
          <p>You give requirements → we add routes, components, data, auth.</p>
        </div>
      </div>
    </section>
  );
}