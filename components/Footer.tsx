import Link from "next/link";
import { profile } from "@/lib/portfolio";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* CTA strip */}
        <div className="footer-cta">
          <div className="footer-cta-left">
            <div className="footer-cta-title">Let’s build something great.</div>
            <div className="footer-cta-sub">
              Open to roles, collaborations, and freelance work.
            </div>
          </div>

          <div className="footer-cta-right">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              Email Me
            </a>
            <a className="btn btn-ghost" href="/#contact">
              Contact Form
            </a>
          </div>
        </div>

        {/* Main footer grid */}
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-name">{profile.name}</div>
            <p className="footer-desc">
              I build clean, high-performance web apps with strong product
              thinking and production-grade engineering.
            </p>

            <div className="footer-contact">
              <div className="footer-contact-row">
                <span className="footer-label">Email</span>
                <a className="footer-link" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </div>
              <div className="footer-contact-row">
                <span className="footer-label">Phone</span>
                <a className="footer-link" href={`tel:${profile.phone}`}>
                  {profile.phone}
                </a>
              </div>
              <div className="footer-contact-row">
                <span className="footer-label">Location</span>
                <span className="footer-value">{profile.location}</span>
              </div>
            </div>
          </div>

          <div className="footer-col">
            <div className="footer-col-title">Explore</div>
            <div className="footer-links">
              <a href="/#about">About</a>
              <a href="/#skills">Skills</a>
              <a href="/#projects">Projects</a>
              <a href="/#contact">Contact</a>
            </div>
          </div>

          <div className="footer-col">
            <div className="footer-col-title">Social</div>
            <div className="footer-socials">
              {profile.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-social-pill"
                >
                  {s.label}
                </a>
              ))}
            </div>

            <div className="footer-mini">
              <span className="footer-mini-dot" aria-hidden />
              <span>Available for opportunities</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom-row">
          <div className="footer-bottom-left">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </div>

          <div className="footer-bottom-right">
            <span className="footer-built">
              Built with Next.js • Styled with care
            </span>
            <a className="footer-top" href="#main">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}