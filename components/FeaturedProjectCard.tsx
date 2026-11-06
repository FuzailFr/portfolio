"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Terminal } from "lucide-react";
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
  const [imageError, setImageError] = useState(false);
  const showImage = Boolean(project.screenshot) && !imageError;

  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-(--border) bg-(--surface) transition-colors">
      {/* Screenshot / Media Frame */}
      <div className="relative aspect-video w-full overflow-hidden border-b border-(--border-subtle) bg-(--bg-secondary)">
        {showImage && project.screenshot ? (
          <Image
            src={project.screenshot}
            alt={`Screenshot tampilan antarmuka ${project.title}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading={priority ? undefined : "lazy"}
            priority={priority}
            onError={() => setImageError(true)}
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full flex-col justify-between p-5 bg-(--bg-secondary)/60 font-mono">
            {/* Terminal Window Header */}
            <div className="flex items-center justify-between border-b border-(--border-subtle) pb-3 text-xs text-(--text-muted)">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-red-500/80" />
                <span className="h-2 w-2 rounded-full bg-amber-500/80" />
                <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-[11px] text-(--text-muted)">
                  preview // {project.slug}
                </span>
              </div>
              <span className="text-[10px] uppercase text-(--accent)">
                {project.demoUrl ? "Live Deployed" : "Source Code"}
              </span>
            </div>

            {/* Terminal Center Display */}
            <div className="flex flex-col items-center justify-center py-4 text-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-md border border-(--border) bg-(--surface) text-(--accent) mb-2">
                <Terminal size={18} aria-hidden="true" />
              </div>
              <span className="text-sm font-semibold text-(--text-primary)">
                {project.title}
              </span>
              <span className="text-xs text-(--text-muted) mt-0.5">
                {project.demoUrl
                  ? "Tersedia live demo antarmuka web"
                  : "Repositori kode sumber siap ditinjau"}
              </span>
            </div>

            {/* Terminal Footer */}
            <div className="flex items-center justify-between text-[11px] text-(--text-muted) pt-2 border-t border-(--border-subtle)">
              <span>branch: main</span>
              {project.demoUrl && (
                <span className="inline-flex items-center gap-1 text-(--accent)">
                  web live <ExternalLink size={11} aria-hidden="true" />
                </span>
              )}
            </div>
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
              className="rounded border border-(--text-primary) bg-(--text-primary) px-3.5 py-1.5 text-xs font-medium text-(--bg) transition-opacity hover:opacity-90 inline-flex items-center gap-1.5"
            >
              Live Demo
              <ExternalLink size={12} aria-hidden="true" />
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
