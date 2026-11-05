import Image from "next/image";
import TechIcon from "@/components/TechIcon";
import type { FeaturedProject } from "@/data/featured-projects";

interface FeaturedProjectCardProps {
  project: FeaturedProject;
  priority?: boolean;
}

export default function FeaturedProjectCard({
  project,
  priority = false,
}: FeaturedProjectCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-(--border) bg-(--surface) transition-colors">
      {/* Screenshot / Media Frame */}
      <div className="relative aspect-video w-full overflow-hidden border-b border-(--border-subtle) bg-(--bg-secondary)">
        {project.screenshot ? (
          <Image
            src={project.screenshot}
            alt={`Screenshot tampilan antarmuka ${project.title}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading={priority ? undefined : "lazy"}
            priority={priority}
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-xs text-(--text-muted)">
            [ Pratinjau belum tersedia ]
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold tracking-tight text-(--text-primary)">
          {project.title}
        </h3>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-(--text-secondary)">
          {project.summary}
        </p>

        {/* Tech Badges */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded border border-(--border) bg-(--bg) px-2 py-0.5 text-xs font-mono text-(--text-muted) transition-colors hover:border-(--text-primary)"
            >
              <TechIcon name={t} size={13} />
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-wrap items-center gap-3 pt-4 border-t border-(--border-subtle)">
          {project.demoUrl && project.demoUrl.trim() !== "" && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded border border-(--text-primary) bg-(--text-primary) px-3.5 py-1.5 text-xs font-medium text-(--bg) transition-opacity hover:opacity-90"
            >
              Live Demo
            </a>
          )}
          {project.sourceUrl && (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded border border-(--border) px-3 py-1.5 text-xs font-medium text-(--text-primary) transition-colors hover:border-(--text-primary) bg-(--bg)"
            >
              Source Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
