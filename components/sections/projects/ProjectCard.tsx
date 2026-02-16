import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/portfolio";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card" data-card>
      <div className="project-cover">
        <Image
          src={project.coverImage}
          alt={`${project.title} cover`}
          width={1200}
          height={800}
          className="project-cover-img"
        />
        <div className="project-cover-overlay" />
      </div>

      <div className="project-body">
        <div className="project-top">
          <h3 className="h3">{project.title}</h3>
          <p className="muted">{project.shortDescription}</p>
        </div>

        <div className="project-tags">
          {project.tags.slice(0, 4).map((t) => (
            <span className="tag" key={t}>
              {t}
            </span>
          ))}
        </div>

        <div className="project-previews">
          {project.previewImages.slice(0, 3).map((src, idx) => (
            <div className="preview" key={`${src}-${idx}`}>
              <Image
                src={src}
                alt={`${project.title} preview ${idx + 1}`}
                width={520}
                height={360}
                className="preview-img"
              />
            </div>
          ))}
        </div>

        <div className="project-actions">
          <Link className="btn btn-primary btn-sm" href={`/projects/${project.slug}`}>
            View Details
          </Link>
          {project.links[0] && (
            <a
              className="btn btn-ghost btn-sm"
              href={project.links[0].href}
              target="_blank"
              rel="noreferrer"
            >
              {project.links[0].label}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}