import type { Metadata } from "next";
import ProjectsFilter from "@/components/ProjectsFilter";
import { FEATURED_PROJECTS } from "@/data/featured-projects";
import { getGithubRepositories, computeLanguageStats } from "@/lib/github";

export const metadata: Metadata = {
  title: "Proyek & Portofolio",
  description:
    "Koleksi proyek perangkat lunak, sistem backend, dan repositori open-source oleh Fuzail Fazle Rabbi.",
};

export const revalidate = 3600;

export default async function ProjectsPage() {
  const allRepos = await getGithubRepositories();

  // Deduplikasi repositori featured
  const featuredRepoNames = new Set(
    FEATURED_PROJECTS.map((p) => p.repoName.toLowerCase())
  );
  const otherRepos = allRepos.filter(
    (repo) => !featuredRepoNames.has(repo.name.toLowerCase())
  );

  const languageStats = computeLanguageStats(allRepos);
  const topLanguage = languageStats[0]?.language ?? "TypeScript";

  return (
    <div className="py-16">
      <div className="mx-auto max-w-5xl px-6">
        {/* Header dengan Ringkasan Statistik Nyata */}
        <div className="border-b border-(--border-subtle) pb-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-(--accent)">
                Arsip Teknikal
              </span>
              <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-(--text-primary) sm:text-5xl">
                Proyek & Implementasi
              </h1>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-(--text-secondary)">
                Koleksi aplikasi web terukur, modul backend, dan integrasi model kecerdasan buatan dari repositori publik GitHub.
              </p>
            </div>

            {/* Quick Metrics Badge */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
              <div className="rounded border border-(--border) bg-(--surface) px-3 py-1.5 text-(--text-secondary)">
                Total: <span className="font-bold text-(--text-primary)">{FEATURED_PROJECTS.length + otherRepos.length} Proyek</span>
              </div>
              <div className="rounded border border-(--border) bg-(--surface) px-3 py-1.5 text-(--text-secondary)">
                Dominan: <span className="font-bold text-(--accent)">{topLanguage}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Client Filter & Proyek List */}
        <ProjectsFilter
          featuredProjects={FEATURED_PROJECTS}
          otherRepos={otherRepos}
        />
      </div>
    </div>
  );
}
