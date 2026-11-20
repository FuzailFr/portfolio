"use client";

import { useState, useMemo } from "react";
import FeaturedProjectCard from "@/components/FeaturedProjectCard";
import TechIcon from "@/components/TechIcon";
import type { FeaturedProject } from "@/data/featured-projects";
import type { GithubRepository } from "@/types/github";

interface ProjectsFilterProps {
  featuredProjects: FeaturedProject[];
  otherRepos: GithubRepository[];
}

function formatUpdatedAt(dateString: string): string {
  const d = new Date(dateString);
  if (isNaN(d.getTime())) return "—";
  return d.toLocaleDateString("id-ID", {
    year: "numeric",
    month: "short",
  });
}

export default function ProjectsFilter({
  featuredProjects,
  otherRepos,
}: ProjectsFilterProps) {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("ALL");

  // Kumpulkan semua bahasa unik
  const availableLanguages = useMemo(() => {
    const langs = new Set<string>();
    featuredProjects.forEach((p) => p.tech.forEach((t) => langs.add(t)));
    otherRepos.forEach((r) => {
      if (r.language) langs.add(r.language);
    });
    return Array.from(langs);
  }, [featuredProjects, otherRepos]);

  // Filter featured projects
  const filteredFeatured = useMemo(() => {
    if (selectedLanguage === "ALL") return featuredProjects;
    return featuredProjects.filter((p) =>
      p.tech.some(
        (t) => t.toLowerCase() === selectedLanguage.toLowerCase()
      )
    );
  }, [featuredProjects, selectedLanguage]);

  // Filter other repos
  const filteredOthers = useMemo(() => {
    if (selectedLanguage === "ALL") return otherRepos;
    return otherRepos.filter(
      (r) =>
        r.language?.toLowerCase() === selectedLanguage.toLowerCase() ||
        r.topics.some((tp) => tp.toLowerCase() === selectedLanguage.toLowerCase())
    );
  }, [otherRepos, selectedLanguage]);

  return (
    <div>
      {/* Filter Pill Tabs */}
      <div className="mt-8 flex flex-wrap items-center gap-2 border-b border-(--border-subtle) pb-6">
        <span className="text-xs font-mono text-(--text-muted) mr-2">Filter Stack:</span>
        <button
          type="button"
          onClick={() => setSelectedLanguage("ALL")}
          className={`rounded border px-3 py-1.5 text-xs font-mono transition-colors ${
            selectedLanguage === "ALL"
              ? "border-(--text-primary) bg-(--text-primary) text-(--bg) font-semibold"
              : "border-(--border) bg-(--surface) text-(--text-secondary) hover:text-(--text-primary)"
          }`}
        >
          Semua ({featuredProjects.length + otherRepos.length})
        </button>

        {availableLanguages.map((lang) => (
          <button
            key={lang}
            type="button"
            onClick={() => setSelectedLanguage(lang)}
            className={`inline-flex items-center gap-1.5 rounded border px-3 py-1.5 text-xs font-mono transition-colors ${
              selectedLanguage === lang
                ? "border-(--accent) bg-(--accent)/15 text-(--text-primary) font-semibold"
                : "border-(--border) bg-(--surface) text-(--text-secondary) hover:text-(--text-primary)"
            }`}
          >
            <TechIcon name={lang} size={13} showLabel={false} />
            <span>{lang}</span>
          </button>
        ))}
      </div>

      {/* Proyek Unggulan (Ukuran Besar & Skala Beragam) */}
      {filteredFeatured.length > 0 && (
        <div className="mt-12">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold tracking-tight text-(--text-primary)">
              Proyek Unggulan ({filteredFeatured.length})
            </h2>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {filteredFeatured.map((project, idx) => (
              <div key={project.slug}>
                <FeaturedProjectCard project={project} priority={idx < 2} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Daftar Eksplorasi Lainnya dari GitHub API */}
      {filteredOthers.length > 0 && (
        <div className="mt-16">
          <h2 className="text-xl font-bold tracking-tight text-(--text-primary)">
            Eksplorasi Repositori GitHub ({filteredOthers.length})
          </h2>
          <p className="mt-1 text-sm text-(--text-secondary)">
            Repositori publik, eksperimen kode, dan modul pendukung.
          </p>

          <div className="mt-6 divide-y divide-(--border-subtle) border-y border-(--border-subtle)">
            {filteredOthers.map((repo) => (
              <div
                key={repo.id}
                className="flex flex-col justify-between gap-4 py-5 sm:flex-row sm:items-baseline"
              >
                <div className="max-w-2xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-semibold text-(--text-primary) hover:underline"
                    >
                      {repo.name}
                    </a>
                    {repo.language && (
                      <span className="rounded border border-(--border) bg-(--surface) px-2 py-0.5 text-xs font-mono text-(--text-muted)">
                        <TechIcon name={repo.language} size={13} />
                      </span>
                    )}
                  </div>

                  {repo.description && (
                    <p className="mt-2 text-sm leading-relaxed text-(--text-secondary)">
                      {repo.description}
                    </p>
                  )}

                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-(--text-muted)">
                    {repo.topics.slice(0, 3).map((topic) => (
                      <span key={topic}>#{topic}</span>
                    ))}
                    <span>Diperbarui {formatUpdatedAt(repo.updated_at)}</span>
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-4">
                  {repo.homepage && (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-(--accent) hover:underline"
                    >
                      Live Demo ↗
                    </a>
                  )}
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-(--text-secondary) hover:text-(--text-primary) underline underline-offset-4"
                  >
                    Buka Repositori
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Jika tidak ada hasil filter */}
      {filteredFeatured.length === 0 && filteredOthers.length === 0 && (
        <div className="mt-16 rounded-lg border border-dashed border-(--border) p-12 text-center text-sm text-(--text-muted)">
          Tidak ada proyek yang cocok dengan filter stack ini.
        </div>
      )}
    </div>
  );
}
