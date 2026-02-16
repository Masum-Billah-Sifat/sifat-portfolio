"use client";

import { useMemo, useRef } from "react";
import { projects } from "@/lib/portfolio";
import ProjectCard from "@/components/sections/projects/ProjectCard";

export default function ProjectsCarousel() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const items = useMemo(() => projects, []);

  const scrollByCards = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;

    const card = el.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.offsetWidth + 16 : 420;

    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <div className="carousel">
      <div className="container carousel-top">
        <button
          className="icon-btn"
          onClick={() => scrollByCards(-1)}
          type="button"
          aria-label="Scroll left"
        >
          ‹
        </button>
        <button
          className="icon-btn"
          onClick={() => scrollByCards(1)}
          type="button"
          aria-label="Scroll right"
        >
          ›
        </button>
      </div>

      <div className="container">
        <div ref={scrollerRef} className="carousel-track">
          {items.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </div>
  );
}