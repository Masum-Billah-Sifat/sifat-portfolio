import { skills } from "@/lib/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-head">
          <h2 className="h2">Skills</h2>
          <p className="muted">
            Clean, readable, and structured — designed to scale as you add more.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((s) => (
            <div key={s} className="chip">
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}