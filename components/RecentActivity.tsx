import Link from "next/link";
import { GitCommit, ArrowRight } from "lucide-react";
import TechIcon from "@/components/TechIcon";
import { formatRelativeTime } from "@/lib/github";
import type { GithubRepository } from "@/types/github";

interface RecentActivityProps {
  repos: GithubRepository[];
}

export default function RecentActivity({ repos }: RecentActivityProps) {
  const recentRepos = repos.slice(0, 4);

  if (recentRepos.length === 0) return null;

  return (
    <section className="border-b border-(--border-subtle) py-14">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-(--text-primary)">
              Aktivitas Kode Terbaru
            </h2>
            <p className="mt-1 text-sm text-(--text-secondary)">
              Repositori yang paling baru mendapatkan pembaruan dan komit kode.
            </p>
          </div>
          <Link
            href="/projects"
            className="mt-3 inline-flex items-center gap-1.5 text-xs font-mono text-(--accent) hover:underline sm:mt-0"
          >
            Lihat semua
            <ArrowRight size={13} aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {recentRepos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-lg border border-(--border) bg-(--surface) p-5 transition-colors hover:border-(--accent)"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <GitCommit size={15} className="text-(--accent) shrink-0" aria-hidden="true" />
                    <h3 className="font-semibold text-sm text-(--text-primary) group-hover:text-(--accent) transition-colors truncate">
                      {repo.name}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-(--text-muted) shrink-0">
                    {formatRelativeTime(repo.updated_at)}
                  </span>
                </div>

                <p className="mt-2 text-xs leading-relaxed text-(--text-secondary) line-clamp-2">
                  {repo.description || "Repositori pengembangan dan eksplorasi kode sumber publik."}
                </p>
              </div>

              <div className="mt-4 flex items-center justify-between pt-3 border-t border-(--border-subtle) text-xs font-mono text-(--text-muted)">
                {repo.language ? (
                  <TechIcon name={repo.language} size={13} />
                ) : (
                  <span>Plain Code</span>
                )}
                <span className="text-xs group-hover:text-(--text-primary) transition-colors">
                  Buka Repo
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
