import TechIcon from "@/components/TechIcon";
import type { LanguageStat } from "@/lib/github";

interface LanguageDistributionProps {
  stats: LanguageStat[];
}

export default function LanguageDistribution({ stats }: LanguageDistributionProps) {
  if (stats.length === 0) return null;

  return (
    <section className="border-b border-(--border-subtle) py-12">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-(--text-muted)">
            Distribusi Bahasa Repositori Publik
          </h2>
          <span className="text-xs font-mono text-(--text-muted)">
            Dihitung dari repositori asli (non-fork)
          </span>
        </div>

        {/* Visual Progress Bar Komposisi */}
        <div className="mt-4 flex h-3 w-full overflow-hidden rounded-full bg-(--border-subtle)">
          {stats.map((stat) => (
            <div
              key={stat.language}
              style={{ width: `${stat.percentage}%` }}
              title={`${stat.language}: ${stat.percentage}%`}
              className="h-full border-r border-(--bg) last:border-none transition-all duration-300 bg-(--accent)"
            />
          ))}
        </div>

        {/* Legend / Daftar Bahasa dengan Ikon & Persentase */}
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
          {stats.map((stat) => (
            <div
              key={stat.language}
              className="flex items-center gap-2 rounded border border-(--border) bg-(--surface) px-3 py-1.5 text-xs font-mono text-(--text-secondary)"
            >
              <TechIcon name={stat.language} size={15} />
              <span className="font-semibold text-(--text-primary)">
                {stat.percentage}%
              </span>
              <span className="text-(--text-muted)">({stat.count} repo)</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
