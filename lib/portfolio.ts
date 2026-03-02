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

  // full page content
  description: string; // paragraph only
  highlights: string[]; // bullet points

  tags: string[];

  coverImage: string;
  previewImages: string[];

  images: string[];
  video?: string; // YouTube URL or local mp4

  links: ProjectLink[]; // multiple links allowed
};

export const profile = {
  name: "Masum Billah Sifat",
  role: "Software Engineer • CS & Engineering",
  location: "Bangladesh",
  email: "m.sifat1666690@gmail.com",
  phone: "+880 1841618081",
  avatar: "/me.jpg",
  headline:
    "I build clean, high-performance web apps with strong product thinking and production-grade engineering.",
  socials: [
    { label: "GitHub", href: "https://github.com/Masum-Billah-Sifat" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sifat-undefined-790513357/",
    },
    { label: "Email", href: "mailto:m.sifat1666690@gmail.com" },
  ] satisfies SocialLink[],
  highlights: [
    { label: "Focus", value: "Full-stack product engineering" },
    { label: "Stack", value: "Next.js • Go • PostgreSQL" },
    { label: "Strength", value: "Systems + UX polish" },
  ],
};

export const about = {
  title: "About",
  body: `I started my web development journey in 2022 with HTML, CSS, and JavaScript, then progressed into React and Next.js. Since then, I’ve built 100+ web applications independently—focusing on clean UI, responsiveness, and production-grade engineering. I also have strong experience integrating machine learning models into real web products, backed by solid mathematical foundations. Right now, I’m building Tanmore: a production-ready multi-seller commerce platform for leather goods across Bangladesh.`,
  bullets: [
    "100+ web applications built end-to-end (design → frontend → backend integration)",
    "Strong React/Next.js foundations with emphasis on performance and UX polish",
    "Experience shipping AI/ML features into real web applications (model → API → UI)",
    "Solid math background (helps with ML, optimization, and technical problem-solving)",
    "Currently building Tanmore, a Daraz-style multi-seller platform for leather products in Bangladesh",
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
  "Prisma ORM",
  "Express js",
  "Supabase",
];

export const projects: Project[] = [
  {
    slug: "tanmore-commerce",
    title: "Tanmore Commerce Platform",
    shortDescription:
      "Production-grade multi-seller e-commerce platform with secure auth, full checkout flow, and seller dashboards.",
    description:
      "Tanmore is a production-grade, multi-seller e-commerce platform built to sell leather products across Bangladesh. It is designed with scalable architecture, secure authentication, and complete commerce workflows—built to feel like a real-world marketplace from day one.",
    highlights: [
      "Secure Google OAuth login with access/refresh tokens and strict session handling",
      "Complete commerce flow: cart, address, checkout, and order confirmation",
      "Multi-seller tooling: product management, reviews visibility, and order tracking",
      "PostgreSQL-backed data model designed for production use",
      "Media upload pipeline for product assets (images/videos) with scalable storage approach",
      "Status: active development (not publicly deployed yet), preparing for launch",
    ],
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
    video: "https://youtu.be/yd9uQeV99EM",
    links: [
      {
        label: "Frontend Repo",
        href: "https://github.com/Masum-Billah-Sifat/leather_tanmore_marketplace_frontend",
      },
      {
        label: "Backend Repo",
        href: "https://github.com/Masum-Billah-Sifat/Tanmore_leather_marketplace_backend",
      },
      // { label: "Live Demo (Soon)", href: "https://example.com" },
    ],
  },

  // ✅ NEW PROJECT (added)
  {
    slug: "saas-file-management-system",
    title: "SaaS File Management System (Subscription-Based)",
    shortDescription:
      "Subscription-based file & folder manager with strict plan enforcement, admin package control, and Supabase-backed uploads.",
    description:
      "A full-featured SaaS-style file and folder management system where an admin dynamically defines subscription packages (Free/Silver/Gold/Diamond). Every user action is enforced by the active package—folder limits, nesting depth, allowed file types, max upload size, total files per account, and files per folder. Users can manage nested folders and upload/preview/download/rename/archive files with consistent rule enforcement.",
    highlights: [
      "Admin panel to create/update/deactivate subscription packages with dynamic limits (no hardcoded rules)",
      "Strict enforcement on every action: max folders, max nesting, allowed types, max file size, total file limit, files per folder",
      "User subscription switching with history tracking (new limits apply forward; existing data preserved)",
      "Folder management: create / rename / archive with subtree archival handling",
      "File management: upload (Supabase Storage), preview (image/pdf/video/audio), download, rename, archive",
      "Auth system with seeded admin, role-based routing/guards, and session revocation on logout",
      "Bonus: mock email verification + mock password reset for USER accounts (admin reset intentionally disabled)",
      "Test Admin Credentials: admin@zoomit.com / Admin@12345",
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Supabase",
    ],
    coverImage: "/projects/saas-file/cover.jpg", // TODO: replace
    previewImages: [
      "/projects/saas-file/1.jpg", // TODO: replace
      "/projects/saas-file/2.jpg", // TODO: replace
      "/projects/saas-file/3.jpg", // TODO: replace
      "/projects/saas-file/4.jpg", // TODO: replace
    ],
    images: [
      "/projects/saas-file/1.jpg", // TODO: replace
      "/projects/saas-file/2.jpg", // TODO: replace
      "/projects/saas-file/3.jpg", // TODO: replace
      "/projects/saas-file/4.jpg", // TODO: replace
      "/projects/saas-file/5.jpg", // TODO: replace
      "/projects/saas-file/6.jpg", // TODO: replace
    ],
    video: "https://youtu.be/3Xj2-vG7cMs", // TODO: add if you want
    links: [
      {
        label: "Live Frontend",
        href: "https://saas-file-management-system-fronten.vercel.app/",
      },
      {
        label: "Live Backend",
        href: "https://saas-file-management-system.onrender.com",
      },
      {
        label: "Frontend Repo",
        href: "https://github.com/Masum-Billah-Sifat/saas-file-management-system-frontend",
      },
      {
        label: "Backend Repo",
        href: "https://github.com/Masum-Billah-Sifat/saas-file-management-system",
      },
    ],
  },

  {
    slug: "geospatial-risk-mapper",
    title: "Business Portfolio Website (Iraq)",
    shortDescription:
      "Deployed business portfolio website optimized for SEO and lead generation, built to support real contract outreach.",
    description:
      "A professional portfolio website built for a businessman based in Iraq—designed to present services clearly, build credibility, and support international client outreach. The site was structured for SEO so it can rank for targeted keywords in Google.",
    highlights: [
      "Modern, responsive UI with strong credibility and clear service presentation",
      "SEO-focused structure: metadata, keyword-oriented sections, and performance-friendly pages",
      "Content layout designed for conversion and client trust",
      "Deployed and publicly accessible",
      "Helped support outreach that contributed to a Bangladesh-related contract",
    ],
    tags: ["Next.js", "SEO", "Responsive UI"],
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
    video: "https://youtu.be/cgWtokzvNvo",
    links: [
      { label: "Live Website", href: "https://www.ebdaaaltakwenco.com/" },
      {
        label: "Frontend Repo",
        href: "https://github.com/Masum-Billah-Sifat/iqbaltaqween",
      },
    ],
  },
];
