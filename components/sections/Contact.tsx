import { profile } from "@/lib/portfolio";
import ContactForm from "@/components/sections/contact/ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-head">
          <h2 className="h2">Contact</h2>
          <p className="muted">
            Send a message. In production you’ll wire this to email (Resend /
            SendGrid) or a CRM.
          </p>
        </div>

        <div className="contact-grid">
          <div className="card contact-card">
            <div className="contact-line">
              <span className="muted">Email</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
            <div className="contact-line">
              <span className="muted">Phone</span>
              <span>{profile.phone}</span>
            </div>
            <div className="contact-line">
              <span className="muted">Links</span>
              <div className="contact-links">
                {profile.socials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="divider" />

            <p className="muted small">
              Tip: consider not displaying your real phone publicly (spam). You
              can keep it private and use the form + email + LinkedIn instead.
            </p>
          </div>

          <div className="card">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}