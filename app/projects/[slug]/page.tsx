import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/portfolio";
import ProjectVideo from "@/components/project/ProjectVideo";
import ProjectGallery from "@/components/project/ProjectGallery";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <section className="section">
      <div className="container">
        <Link className="back-link" href="/#projects">
          ← Back to Projects
        </Link>

        <div className="project-page-head">
          <h1 className="h1">{project.title}</h1>
          <p className="lead">{project.description}</p>

          <div className="project-tags">
            {project.tags.map((t) => (
              <span className="tag" key={t}>
                {t}
              </span>
            ))}
          </div>

          <div className="project-links">
            {project.links.map((l) => (
              <a
                key={l.label}
                className="btn btn-ghost"
                href={l.href}
                target="_blank"
                rel="noreferrer"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Highlights */}
        {project.highlights?.length > 0 && (
          <div className="card project-highlights">
            <h2 className="h3">Highlights</h2>
            <ul className="project-bullets">
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        )}

        {project.video && <ProjectVideo title={project.title} videoUrl={project.video} />}

        <ProjectGallery title={project.title} images={project.images} />

        <div className="divider big" />

        <div className="card">
          <h2 className="h2">Want something like this?</h2>
          <p className="muted">Jump to the contact section and send a message.</p>
          <Link className="btn btn-primary" href="/#contact">
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}