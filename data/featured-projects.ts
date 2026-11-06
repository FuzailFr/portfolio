export interface FeaturedProject {
  slug: string;
  repoName: string; // nama repo di GitHub untuk matching dan deduplikasi
  title: string;
  summary: string;
  tech: string[];
  demoUrl?: string;
  sourceUrl: string;
  screenshot?: string; // path di public/, contoh: "/images/projects/rouve.png"
}

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    slug: "rouve-co",
    repoName: "Rouve-Co.",
    title: "Rouve-Co.",
    summary:
      "Platform katalog dan antarmuka web modern dengan arsitektur modular serta performa styling yang dioptimasi.",
    tech: ["TypeScript", "CSS", "Next.js"],
    demoUrl: "https://rouve-co.vercel.app/",
    sourceUrl: "https://github.com/FuzailFr/Rouve-Co.",
    screenshot: undefined,
  },
  {
    slug: "zailtrack",
    repoName: "ZailTrack",
    title: "ZailTrack",
    summary:
      "Sistem pemantauan dan tracking aktivitas dengan pencatatan terstruktur untuk efisiensi alur kerja pengembang.",
    tech: ["TypeScript", "Next.js", "Tailwind CSS"],
    demoUrl: "https://zail-track.vercel.app",
    sourceUrl: "https://github.com/FuzailFr/ZailTrack",
    screenshot: undefined,
  },
  {
    slug: "smart-waste-management",
    repoName: "Smart-Waste-Management",
    title: "Smart Waste Management",
    summary:
      "Solusi cerdas klasifikasi dan pemantauan volume limbah berbasis model machine learning dan integrasi sensor IoT.",
    tech: ["Python", "Machine Learning", "IoT", "HTML"],
    demoUrl: "https://fuzailfr.github.io/Smart-Waste-Management/",
    sourceUrl: "https://github.com/FuzailFr/Smart-Waste-Management",
    screenshot: undefined,
  },
];
