import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/portfolio";

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

        {project.video && (
          <div className="card media-card">
            <div className="media-title">Demo Video</div>
            <video className="video" controls playsInline preload="metadata">
              <source src={project.video} />
            </video>
          </div>
        )}

        <div className="gallery">
          {project.images.map((src, i) => (
            <div className="gallery-item" key={`${src}-${i}`}>
              <Image
                src={src}
                alt={`${project.title} image ${i + 1}`}
                width={1600}
                height={1000}
                className="gallery-img"
              />
            </div>
          ))}
        </div>

        <div className="divider big" />

        <div className="card">
          <h2 className="h2">Want something like this?</h2>
          <p className="muted">
            Jump to the contact section and send a message.
          </p>
          <Link className="btn btn-primary" href="/#contact">
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}