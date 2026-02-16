import Image from "next/image";
import { profile } from "@/lib/portfolio";

export default function Hero() {
  return (
    <section className="section hero">
      <div className="container hero-grid">
        <div className="hero-left">
          <div className="pill pill-strong">Open to opportunities</div>

          <h1 className="h1 hero-title">
            {profile.name}
            <span className="h1-accent">.</span>
          </h1>

          <p className="lead lead-big">{profile.headline}</p>

          <div className="hero-cta">
            <a className="btn btn-primary" href="/#projects">
              View Projects
            </a>
            <a className="btn btn-ghost" href="/#contact">
              Contact Me
            </a>
          </div>

          <div className="hero-social hero-social-big">
            {profile.socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                {s.label}
              </a>
            ))}
          </div>

          <div className="hero-kpis">
            {profile.highlights?.map((k) => (
              <div key={k.label} className="kpi">
                <div className="kpi-label">{k.label}</div>
                <div className="kpi-value">{k.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-right">
          <div className="avatar-card">
            <Image
              src={profile.avatar}
              alt={`${profile.name} photo`}
              width={900}
              height={900}
              priority
              className="avatar"
            />
            <div className="avatar-glow" aria-hidden />
          </div>

          <div className="hero-mini card">
            <div className="hero-mini-row">
              <span className="muted">Role</span>
              <span className="hero-mini-val">{profile.role}</span>
            </div>
            <div className="hero-mini-row">
              <span className="muted">Location</span>
              <span className="hero-mini-val">{profile.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}