"use client";

import { useEffect } from "react";

function isInInitialView(el: HTMLElement) {
  const r = el.getBoundingClientRect();
  const vh = window.innerHeight || 800;
  return r.top < vh * 0.85 && r.bottom > 0;
}

export default function ScrollReveal() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>(".section")).filter(
      (s) => !s.classList.contains("hero")
    );

    // Mark reveal items inside each section + assign stagger delays
    for (const section of sections) {
      const items: HTMLElement[] = [];

      const head = section.querySelector<HTMLElement>(".section-head");
      if (head) items.push(head);

      section
        .querySelectorAll<HTMLElement>(
          ".card, .chip, .project-card, .preview, .gallery-item, .media-card, .contact-card, .form"
        )
        .forEach((n) => items.push(n));

      // de-dup
      const seen = new Set<HTMLElement>();
      const unique = items.filter((n) => (seen.has(n) ? false : (seen.add(n), true)));

      unique.forEach((el, idx) => {
        el.classList.add("reveal-item");
        el.style.setProperty("--d", `${Math.min(idx * 70, 420)}ms`);
      });

      // If page loads already scrolled to this section, reveal immediately (no dead static feel)
      if (isInInitialView(section)) section.classList.add("is-visible");
    }

    // Enable JS-based reveal styling only after we prepared initial visibility
    document.documentElement.classList.add("js-reveal");

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const section = e.target as HTMLElement;
          section.classList.add("is-visible");
          io.unobserve(section); // reveal once (feels premium)
        }
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return null;
}