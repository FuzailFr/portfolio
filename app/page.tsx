import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import StatsStrip from "@/components/StatsStrip";
import LanguageDistribution from "@/components/LanguageDistribution";
import RecentActivity from "@/components/RecentActivity";
import FeaturedProjectCard from "@/components/FeaturedProjectCard";
import { FEATURED_PROJECTS } from "@/data/featured-projects";
import {
  getGithubProfile,
  getGithubRepositories,
  computeLanguageStats,
  formatRelativeTime,
} from "@/lib/github";

export const revalidate = 3600;

export default async function Home() {
  const [profile, repos] = await Promise.all([
    getGithubProfile(),
    getGithubRepositories(),
  ]);

  const languageStats = computeLanguageStats(repos);
  const enrichedFeatured = FEATURED_PROJECTS.map((proj) => {
    const liveRepo = repos.find(
      (r) => r.name.toLowerCase() === proj.repoName.toLowerCase()
    );
    const hasExternalDemo =
      liveRepo?.homepage &&
      liveRepo.homepage.trim() !== "" &&
      !liveRepo.homepage.toLowerCase().includes("github.com/fuzailfr/");

    return {
      ...proj,
      demoUrl: (hasExternalDemo ? liveRepo.homepage : proj.demoUrl) ?? undefined,
    };
  });
  const featuredProjects = enrichedFeatured;
  const lastActiveFormatted = formatRelativeTime(profile.updatedAt);

  return (
    <div>
      {/* 1. Hero dengan Avatar GitHub 2-Kolom Asimetris */}
      <Hero profile={profile} />

      {/* 2. Marquee Halus Tech Stack */}
      <TechMarquee />

      {/* 3. Strip Statistik dari Data Nyata GitHub */}
      <StatsStrip
        profile={profile}
        totalLanguages={languageStats.length}
        lastActiveFormatted={lastActiveFormatted}
      />

      {/* 4. Distribusi Bahasa Visual Bar & Persentase */}
      <LanguageDistribution stats={languageStats} />

      {/* 5. Aktivitas Komit / Repo Terbaru */}
      <RecentActivity repos={repos} />

      {/* 6. Proyek Pilihan dengan Layout Bervariasi */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-(--text-primary)">
                Proyek Pilihan
              </h2>
              <p className="mt-2 text-base text-(--text-secondary)">
                Karya pilihan yang dirancang dengan arsitektur tangguh dan integrasi penuh.
              </p>
            </div>
            <Link
              href="/projects"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-(--accent) hover:underline sm:mt-0"
            >
              Jelajahi semua proyek
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>

          {/* Grid Proyek Pilihan: Asimetris (1 Kartu Besar Utama + 3 Kartu Pendamping) */}
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, idx) => (
              <div
                key={project.slug}
                className={idx === 0 ? "md:col-span-2 lg:col-span-3" : "col-span-1"}
              >
                <FeaturedProjectCard project={project} priority={idx === 0} />
              </div>
            ))}
          </div>

          {/* Section Ajakan Diskusi / Hubungi dengan skala visual kontras */}
          <div className="mt-16 rounded-xl border border-(--border) bg-gradient-to-r from-(--surface) to-(--bg-secondary) p-8 md:p-12 shadow-sm">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <span className="text-xs font-mono uppercase tracking-wider text-(--accent)">
                  Kolaborasi & Karir
                </span>
                <h3 className="mt-2 text-2xl font-bold tracking-tight text-(--text-primary) sm:text-3xl">
                  Siap membangun sistem terukur bersama?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-(--text-secondary)">
                  Saya terbuka untuk peluang magang, posisi Software Engineering purna waktu, maupun eksplorasi proyek Machine Learning baru.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/about"
                  className="rounded border border-(--border) bg-(--bg) px-5 py-2.5 text-sm font-medium text-(--text-primary) hover:border-(--text-primary) transition-colors"
                >
                  Lihat Profil Lengkap
                </Link>
                <Link
                  href="/contact"
                  className="rounded border border-(--text-primary) bg-(--text-primary) px-5 py-2.5 text-sm font-medium text-(--bg) hover:opacity-90 transition-opacity"
                >
                  Kirim Pesan
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
