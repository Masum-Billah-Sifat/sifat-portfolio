import { about } from "@/lib/portfolio";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-head">
          <h2 className="h2">{about.title}</h2>
          <p className="muted section-sub">
            Crisp summary + bullets. You can change all of this from the store.
          </p>
        </div>

        <div className="about-grid">
          <div className="card prose about-prose">
            <p>{about.body}</p>
          </div>

          <div className="about-side">
            <div className="card">
              <h3 className="h3">What I bring</h3>
              <ul className="list">
                {(about as any).bullets?.map((b: string, i: number) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>

            <div className="card about-note">
              <h3 className="h3">Currently</h3>
              <p className="muted section-sub">
                Building projects that show strong engineering + clean product UX.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}