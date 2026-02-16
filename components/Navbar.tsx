"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { profile } from "@/lib/portfolio";
import { usePathname, useRouter } from "next/navigation";

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function smoothScrollToId(id: string, offsetPx = 84, durationMs = 650) {
  const el = document.getElementById(id);
  if (!el) return;

  const startY = window.scrollY;
  const rect = el.getBoundingClientRect();
  const targetY = startY + rect.top - offsetPx;

  const start = performance.now();
  const tick = (now: number) => {
    const elapsed = now - start;
    const t = Math.min(1, elapsed / durationMs);
    const y = startY + (targetY - startY) * easeInOutCubic(t);
    window.scrollTo(0, y);
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const onNavClick = async (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    // allow new tab / modified click / middle click
    if (
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey ||
      (e.nativeEvent as MouseEvent).button === 1
    ) {
      return;
    }

    e.preventDefault();
    setOpen(false);

    if (pathname !== "/") {
      router.push(`/#${id}`);

      // wait for the homepage DOM to be ready, then scroll
      let tries = 0;
      const timer = setInterval(() => {
        tries++;
        const el = document.getElementById(id);
        if (el) {
          clearInterval(timer);
          smoothScrollToId(id, 84, 700);
        }
        if (tries > 40) clearInterval(timer);
      }, 50);

      return;
    }

    // already on homepage -> smooth scroll without jump
    history.replaceState(null, "", `/#${id}`);
    smoothScrollToId(id, 84, 700);
  };

  return (
    <header className="nav-shell">
      <div className="container nav">
        <Link className="nav-brand" href="/" onClick={() => setOpen(false)}>
          <span className="nav-dot" aria-hidden />
          {profile.name}
        </Link>

        <nav className="nav-links" aria-label="Primary navigation">
          <a href="/#about" onClick={(e) => onNavClick(e, "about")}>
            About
          </a>
          <a href="/#skills" onClick={(e) => onNavClick(e, "skills")}>
            Skills
          </a>
          <a href="/#projects" onClick={(e) => onNavClick(e, "projects")}>
            Projects
          </a>
          <a href="/#contact" onClick={(e) => onNavClick(e, "contact")}>
            Contact
          </a>
        </nav>

        <div className="nav-actions">
          <a className="btn btn-ghost" href={`mailto:${profile.email}`}>
            Email
          </a>

          <button
            className="nav-burger"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            type="button"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {open && (
        <div className="nav-mobile" role="dialog" aria-label="Mobile menu">
          <div className="container nav-mobile-inner">
            <a href="/#about" onClick={(e) => onNavClick(e, "about")}>
              About
            </a>
            <a href="/#skills" onClick={(e) => onNavClick(e, "skills")}>
              Skills
            </a>
            <a href="/#projects" onClick={(e) => onNavClick(e, "projects")}>
              Projects
            </a>
            <a href="/#contact" onClick={(e) => onNavClick(e, "contact")}>
              Contact
            </a>

            <div className="nav-mobile-divider" />

            <div className="nav-mobile-social">
              {profile.socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}