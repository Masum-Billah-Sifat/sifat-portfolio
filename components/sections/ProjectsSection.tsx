import ProjectsCarousel from "@/components/sections/projects/ProjectsCarousel";

export default function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-head">
          <h2 className="h2">Projects</h2>
          <p className="muted">
            Scroll or use arrows. Hover to reveal details. Click to open full
            project page.
          </p>
        </div>
      </div>

      <ProjectsCarousel />
    </section>
  );
}