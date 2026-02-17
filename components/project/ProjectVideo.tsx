import React from "react";

function getYouTubeId(raw: string): string | null {
  try {
    const url = new URL(raw);

    // youtu.be/<id>
    if (url.hostname === "youtu.be") {
      const id = url.pathname.replace("/", "").trim();
      return id || null;
    }

    // youtube.com/watch?v=<id>
    if (
      url.hostname === "www.youtube.com" ||
      url.hostname === "youtube.com" ||
      url.hostname.endsWith(".youtube.com")
    ) {
      if (url.pathname === "/watch") return url.searchParams.get("v");
      if (url.pathname.startsWith("/embed/")) return url.pathname.split("/")[2] || null;
      if (url.pathname.startsWith("/shorts/")) return url.pathname.split("/")[2] || null;
    }
  } catch {
    // not a URL
  }

  return null;
}

export default function ProjectVideo({
  title,
  videoUrl,
}: {
  title: string;
  videoUrl: string;
}) {
  const ytId = getYouTubeId(videoUrl);

  if (ytId) {
    const embed = `https://www.youtube-nocookie.com/embed/${ytId}`;
    const watch = `https://youtu.be/${ytId}`;

    return (
      <div className="card media-card">
        <div className="media-head">
          <div className="media-title">Demo Video</div>
          <a className="media-link" href={watch} target="_blank" rel="noreferrer">
            Watch on YouTube
          </a>
        </div>

        <div className="video-frame" aria-label={`${title} demo video`}>
          <iframe
            src={embed}
            title={`${title} demo video`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    );
  }

  // fallback: local mp4
  return (
    <div className="card media-card">
      <div className="media-title">Demo Video</div>
      <video className="video" controls playsInline preload="metadata">
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
  );
}
