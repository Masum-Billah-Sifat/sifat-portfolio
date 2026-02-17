"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

export default function ProjectGallery({
  title,
  images,
}: {
  title: string;
  images: string[];
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isOpen = activeIndex !== null;

  const activeSrc = useMemo(() => {
    if (activeIndex === null) return null;
    return images[activeIndex] ?? null;
  }, [activeIndex, images]);

  const close = () => setActiveIndex(null);

  const prev = () => {
    if (activeIndex === null) return;
    setActiveIndex((i) => (i === 0 ? images.length - 1 : (i as number) - 1));
  };

  const next = () => {
    if (activeIndex === null) return;
    setActiveIndex((i) => ((i as number) + 1) % images.length);
  };

  useEffect(() => {
    if (!isOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, activeIndex]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div className="gallery">
        {images.map((src, i) => (
          <button
            key={`${src}-${i}`}
            type="button"
            className="gallery-item gallery-btn"
            onClick={() => setActiveIndex(i)}
            aria-label={`Open image ${i + 1} of ${images.length}`}
          >
            <Image
              src={src}
              alt={`${title} image ${i + 1}`}
              width={1600}
              height={1000}
              className="gallery-img"
            />
          </button>
        ))}
      </div>

      {isOpen && activeSrc && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} image preview`}
          onClick={close}
        >
          <div className="lightbox-panel" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="lightbox-close"
              onClick={close}
              aria-label="Close preview"
            >
              ✕
            </button>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  className="lightbox-nav lightbox-prev"
                  onClick={prev}
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <button
                  type="button"
                  className="lightbox-nav lightbox-next"
                  onClick={next}
                  aria-label="Next image"
                >
                  ›
                </button>
              </>
            )}

            <div className="lightbox-media">
              <Image
                src={activeSrc}
                alt={`${title} image ${(activeIndex ?? 0) + 1}`}
                fill
                sizes="(max-width: 980px) 92vw, 1120px"
                className="lightbox-img"
                priority
              />
            </div>

            <div className="lightbox-caption">
              {(activeIndex ?? 0) + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
