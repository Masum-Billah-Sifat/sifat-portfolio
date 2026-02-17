export type SocialLink = {
  label: string;
  href: string;
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  tags: string[];

  // Home page card assets
  coverImage: string; // e.g. "/projects/project-one/cover.jpg"
  previewImages: string[]; // small set for carousel card

  // Project page assets
  images: string[];
  video?: string; // e.g. "/projects/project-one/demo.mp4"

  links: ProjectLink[]; // code + live + docs etc.
};

export const profile = {
  name: "Masum Billah Sifat",
  role: "Software Engineer • CS & Engineering",
  location: "Bangladesh",
  email: "masum@example.com",
  phone: "+880 1XXXXXXXXX",
  avatar: "/me.jpg", // put your image at public/me.jpg
  headline:
    "I build clean, high-performance web apps with strong product thinking and production-grade engineering.",
  socials: [
    { label: "GitHub", href: "https://github.com/your-username" },
    { label: "LinkedIn", href: "https://linkedin.com/in/your-username" },
    { label: "Email", href: "mailto:masum@example.com" },
  ] satisfies SocialLink[],
  highlights: [
    { label: "Focus", value: "Full-stack product engineering" },
    { label: "Stack", value: "Next.js • Go • PostgreSQL" },
    { label: "Strength", value: "Systems + UX polish" },
  ],
};

export const about = {
  title: "About",
  body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  bullets: [
    "Build fast, responsive web experiences with clean UI and strong accessibility.",
    "Design scalable APIs and backend workflows with reliability in mind.",
    "Ship production features: auth, payments, data pipelines, dashboards.",
  ],
};

export const skills = [
  "Next.js (App Router)",
  "React",
  "TypeScript",
  "Node.js",
  "Golang",
  "PostgreSQL",
  "REST APIs",
  "System Design",
  "Docker",
  "CI/CD",
];

export const projects: Project[] = [
  {
    slug: "tanmore-commerce",
    title: "Tanmore Commerce Platform",
    shortDescription:
      "E-commerce platform with modern UI, auth, scalable backend, and clean data flow.",
    description:
      "A production-oriented commerce platform featuring authentication, role modes, cart flows, and an extensible product pipeline. Built with a focus on reliability, performance, and maintainable architecture.",
    tags: ["Next.js", "TypeScript", "Go", "PostgreSQL"],
    coverImage: "/projects/tanmore/cover.jpg",
    previewImages: [
      "/projects/tanmore/1.jpg",
      "/projects/tanmore/2.jpg",
      "/projects/tanmore/3.jpg",
      "/projects/tanmore/4.jpg",
    ],
    images: [
      "/projects/tanmore/1.jpg",
      "/projects/tanmore/2.jpg",
      "/projects/tanmore/3.jpg",
      "/projects/tanmore/4.jpg",
    ],
    video: "/projects/tanmore/demo.mp4",
    links: [
      { label: "Codebase", href: "https://github.com/your-username/tanmore" },
      { label: "Live Demo", href: "https://example.com" },
    ],
  },
  {
    slug: "geospatial-risk-mapper",
    title: "Geospatial Risk Mapper",
    shortDescription:
      "A mapping dashboard for vulnerability/risk storytelling using clean visuals and modular data layers.",
    description:
      "A clean, modular geospatial visualization project designed for reporting and decision support. Emphasizes clarity, responsiveness, and readable UI patterns.",
    tags: ["GIS", "Data", "Visualization"],
    coverImage: "/projects/gis/cover.jpg",
    previewImages: [
      "/projects/gis/1.jpg",
      "/projects/gis/2.jpg",
      "/projects/gis/3.jpg",
      "/projects/gis/4.jpg",
    ],
    images: [
      "/projects/gis/1.jpg",
      "/projects/gis/2.jpg",
      "/projects/gis/3.jpg",
      "/projects/gis/4.jpg",
    ],
    video: "/projects/gis/demo.mp4",
    links: [
      {
        label: "Codebase",
        href: "https://github.com/your-username/gis-mapper",
      },
      { label: "Live Demo", href: "https://example.com" },
    ],
  },
];
