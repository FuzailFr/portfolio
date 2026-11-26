import { FolderGit2, Code2, Users, CalendarCheck } from "lucide-react";
import type { GithubProfile } from "@/lib/github";

interface StatsStripProps {
  profile: GithubProfile;
  totalLanguages: number;
  lastActiveFormatted: string;
}

export default function StatsStrip({
  profile,
  totalLanguages,
  lastActiveFormatted,
}: StatsStripProps) {
  return (
    <section className="border-b border-(--border-subtle) bg-(--surface)/30 py-8">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 md:gap-8">
          {/* Stat 1: Repositori Publik */}
          <div className="flex flex-col border-l-2 border-(--accent) pl-4">
            <span className="flex items-center gap-1.5 text-xs font-mono text-(--text-muted)">
              <FolderGit2 size={13} aria-hidden="true" />
              Public Repos
            </span>
            <span className="mt-1 text-2xl font-bold tracking-tight text-(--text-primary) sm:text-3xl font-mono">
              {profile.publicRepos}
            </span>
            <span className="text-xs text-(--text-secondary)">Repositori aktif</span>
          </div>

          {/* Stat 2: Total Bahasa yang Digunakan */}
          <div className="flex flex-col border-l-2 border-(--border) pl-4">
            <span className="flex items-center gap-1.5 text-xs font-mono text-(--text-muted)">
              <Code2 size={13} aria-hidden="true" />
              Ecosystem
            </span>
            <span className="mt-1 text-2xl font-bold tracking-tight text-(--text-primary) sm:text-3xl font-mono">
              {totalLanguages}
            </span>
            <span className="text-xs text-(--text-secondary)">Bahasa & stack</span>
          </div>

          {/* Stat 3: Followers */}
          <div className="flex flex-col border-l-2 border-(--border) pl-4">
            <span className="flex items-center gap-1.5 text-xs font-mono text-(--text-muted)">
              <Users size={13} aria-hidden="true" />
              Followers
            </span>
            <span className="mt-1 text-2xl font-bold tracking-tight text-(--text-primary) sm:text-3xl font-mono">
              {profile.followers}
            </span>
            <span className="text-xs text-(--text-secondary)">Komunitas GitHub</span>
          </div>

          {/* Stat 4: Aktivitas Terakhir */}
          <div className="flex flex-col border-l-2 border-(--border) pl-4">
            <span className="flex items-center gap-1.5 text-xs font-mono text-(--text-muted)">
              <CalendarCheck size={13} aria-hidden="true" />
              Last Push
            </span>
            <span className="mt-1 text-lg font-bold tracking-tight text-(--text-primary) sm:text-xl font-mono truncate">
              {lastActiveFormatted}
            </span>
            <span className="text-xs text-(--text-secondary)">Aktivitas sinkron</span>
          </div>
        </div>
      </div>
    </section>
  );
}
