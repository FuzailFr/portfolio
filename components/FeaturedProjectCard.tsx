"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Terminal, Github, Sparkles, Activity, Layers, Trash2 } from "lucide-react";
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
  const hasLiveDemo = Boolean(project.demoUrl && project.demoUrl.trim() !== "");

  // Render preview mockup khusus dengan tata letak luas & teks yang terbaca jelas
  const renderThemedMockup = () => {
    switch (project.slug) {
      case "antigravity-essentials":
        return (
          <div className="flex h-full w-full flex-col justify-between p-4 sm:p-5 bg-(--bg-secondary)/90 font-mono text-xs select-none">
            {/* Top Bar: URL + Badge dengan shrink-0 agar tidak pernah terpotong */}
            <div className="flex items-center justify-between gap-3 border-b border-(--border-subtle) pb-2.5">
              <div className="flex items-center gap-2 min-w-0 flex-1">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-red-500/80" />
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-amber-500/80" />
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500/80" />
                <span className="ml-1 text-[11px] text-(--text-muted) truncate flex items-center gap-1.5">
                  <Terminal size={12} className="text-(--accent) shrink-0" />
                  antigravity-essentials
                </span>
              </div>
              <span className="shrink-0 whitespace-nowrap rounded bg-indigo-500/10 px-2 py-0.5 text-[10px] font-semibold text-indigo-400 border border-indigo-500/20">
                CLI & RULES
              </span>
            </div>

            {/* Code Output */}
            <div className="py-2.5 space-y-1.5 text-[11px] sm:text-xs leading-relaxed">
              <div className="text-(--accent) flex items-center gap-1.5">
                <span className="font-bold">$</span>
                <span className="text-(--text-primary)">npx antigravity-essentials --status</span>
              </div>
              <div className="text-emerald-400">
                ✔ Loaded: [jagoan, anti-slop, humanizer-id]
              </div>
              <div className="text-(--text-secondary)">
                ⚙ Engine: Caveman Lite (Token Saver: Active)
              </div>
              <div className="text-(--text-muted) flex items-center gap-1 truncate">
                <span>&gt; Cursor, Claude Code, Windsurf & Antigravity</span>
                <span className="inline-block w-2 h-3.5 bg-(--accent) animate-pulse shrink-0" />
              </div>
            </div>

            {/* Terminal Status Footer */}
            <div className="flex items-center justify-between border-t border-(--border-subtle) pt-2 text-[11px] text-(--text-muted)">
              <span className="flex items-center gap-1 text-(--text-secondary) truncate">
                <Sparkles size={11} className="text-(--accent) shrink-0" />
                Prompt Engineering
              </span>
              <span className="text-emerald-400 font-semibold shrink-0">Open Source</span>
            </div>
          </div>
        );

      case "rouve-co":
        return (
          <div className="flex h-full w-full flex-col justify-between p-4 sm:p-5 bg-(--bg-secondary)/80 font-mono text-xs select-none">
            {/* Top Bar: URL + Badge */}
            <div className="flex items-center justify-between gap-3 border-b border-(--border-subtle) pb-2.5">
              <div className="flex items-center gap-2 min-w-0 flex-1">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-red-500/80" />
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-amber-500/80" />
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500/80" />
                <span className="ml-1 text-[11px] text-(--text-muted) truncate">
                  rouve-co.vercel.app
                </span>
              </div>
              <span className="shrink-0 whitespace-nowrap inline-flex items-center gap-1.5 rounded bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-400 border border-emerald-500/20">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                LIVE DEMO
              </span>
            </div>

            {/* Catalog UI Mockup */}
            <div className="py-2.5 flex flex-col justify-center">
              <div className="rounded-md border border-(--border) bg-(--surface) p-3 shadow-inner">
                <div className="flex items-center justify-between">
                  <span className="font-sans font-bold text-xs sm:text-sm text-(--text-primary)">
                    Rouve Co. Apparel Catalog
                  </span>
                  <span className="text-[10px] text-(--accent) bg-(--accent-muted) px-2 py-0.5 rounded font-mono shrink-0">
                    V1 Live
                  </span>
                </div>
                <div className="mt-2 grid grid-cols-3 gap-2 text-[10px] text-(--text-secondary)">
                  <div className="rounded bg-(--bg) border border-(--border-subtle) p-1.5 text-center truncate">
                    Tee · 189K
                  </div>
                  <div className="rounded bg-(--bg) border border-(--border-subtle) p-1.5 text-center truncate">
                    Pants · 329K
                  </div>
                  <div className="rounded bg-(--bg) border border-(--border-subtle) p-1.5 text-center truncate">
                    Jacket · 459K
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-(--border-subtle) pt-2 text-[11px] text-(--text-muted)">
              <span className="flex items-center gap-1 text-(--text-secondary) truncate">
                <Layers size={11} className="text-(--accent) shrink-0" />
                Modern Responsive Styling
              </span>
              <span className="text-(--accent) flex items-center gap-1 shrink-0">
                Live App <ExternalLink size={11} />
              </span>
            </div>
          </div>
        );

      case "zailtrack":
        return (
          <div className="flex h-full w-full flex-col justify-between p-4 sm:p-5 bg-(--bg-secondary)/80 font-mono text-xs select-none">
            {/* Top Bar: URL + Badge */}
            <div className="flex items-center justify-between gap-3 border-b border-(--border-subtle) pb-2.5">
              <div className="flex items-center gap-2 min-w-0 flex-1">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-red-500/80" />
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-amber-500/80" />
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500/80" />
                <span className="ml-1 text-[11px] text-(--text-muted) truncate">
                  zail-track.vercel.app
                </span>
              </div>
              <span className="shrink-0 whitespace-nowrap inline-flex items-center gap-1.5 rounded bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-400 border border-emerald-500/20">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                LIVE APP
              </span>
            </div>

            {/* Dashboard Analytics Mockup */}
            <div className="py-2.5 flex flex-col justify-center">
              <div className="rounded-md border border-(--border) bg-(--surface) p-3 shadow-inner">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-sans font-bold text-(--text-primary) truncate">
                    Productivity Tracking Stream
                  </span>
                  <span className="text-[10px] text-emerald-400 font-mono shrink-0 ml-2">
                    98.2% Active
                  </span>
                </div>
                {/* Visual bar metrics */}
                <div className="mt-2.5 flex items-end gap-2 h-8 px-1">
                  <div className="w-1/6 bg-(--accent)/40 rounded-t h-3.5" />
                  <div className="w-1/6 bg-(--accent)/60 rounded-t h-6" />
                  <div className="w-1/6 bg-(--accent) rounded-t h-8" />
                  <div className="w-1/6 bg-(--accent)/80 rounded-t h-5.5" />
                  <div className="w-1/6 bg-(--accent)/50 rounded-t h-4.5" />
                  <div className="w-1/6 bg-(--accent)/70 rounded-t h-7" />
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-(--border-subtle) pt-2 text-[11px] text-(--text-muted)">
              <span className="flex items-center gap-1 text-(--text-secondary) truncate">
                <Activity size={11} className="text-(--accent) shrink-0" />
                Activity Logging
              </span>
              <span className="text-(--accent) flex items-center gap-1 shrink-0">
                Live App <ExternalLink size={11} />
              </span>
            </div>
          </div>
        );

      case "smart-waste-management":
        return (
          <div className="flex h-full w-full flex-col justify-between p-4 sm:p-5 bg-(--bg-secondary)/80 font-mono text-xs select-none">
            {/* Top Bar: URL + Badge */}
            <div className="flex items-center justify-between gap-3 border-b border-(--border-subtle) pb-2.5">
              <div className="flex items-center gap-2 min-w-0 flex-1">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-red-500/80" />
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-amber-500/80" />
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500/80" />
                <span className="ml-1 text-[11px] text-(--text-muted) truncate">
                  smart-waste-sensor
                </span>
              </div>
              <span className="shrink-0 whitespace-nowrap inline-flex items-center gap-1.5 rounded bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-400 border border-emerald-500/20">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                AI & IOT
              </span>
            </div>

            {/* Sensory Scanner Display */}
            <div className="py-2.5 flex flex-col justify-center">
              <div className="rounded-md border border-(--border) bg-(--surface) p-3 shadow-inner">
                <div className="flex items-center justify-between">
                  <span className="font-sans font-bold text-xs text-(--text-primary) truncate">
                    Waste Material Classifier
                  </span>
                  <span className="text-[10px] text-amber-400 font-mono shrink-0 ml-2 flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400" /> Sensor OK
                  </span>
                </div>
                <div className="mt-2 flex items-center justify-between rounded bg-(--bg) px-2.5 py-1.5 border border-(--border-subtle) text-[11px]">
                  <span className="text-(--text-secondary)">Detected:</span>
                  <span className="font-bold text-emerald-400 truncate ml-1">Recyclable (98.4%)</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-(--border-subtle) pt-2 text-[11px] text-(--text-muted)">
              <span className="flex items-center gap-1 text-(--text-secondary) truncate">
                <Trash2 size={11} className="text-(--accent) shrink-0" />
                IoT Volume Sensing
              </span>
              <span className="text-(--accent) flex items-center gap-1 shrink-0">
                Demo Online <ExternalLink size={11} />
              </span>
            </div>
          </div>
        );

      default:
        return (
          <div className="flex h-full w-full flex-col justify-between p-4 sm:p-5 bg-(--bg-secondary)/60 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-(--border-subtle) pb-2.5 text-(--text-muted)">
              <div className="flex items-center gap-2 truncate">
                <span className="h-2 w-2 rounded-full bg-red-500/80" />
                <span className="h-2 w-2 rounded-full bg-amber-500/80" />
                <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
                <span className="ml-1 text-[11px] truncate">{project.slug}</span>
              </div>
              <span className="text-[10px] uppercase text-(--accent) shrink-0 whitespace-nowrap">
                {hasLiveDemo ? "Live App" : "Repository"}
              </span>
            </div>
            <div className="py-3 text-center font-semibold text-(--text-primary)">
              {project.title}
            </div>
            <div className="flex justify-between border-t border-(--border-subtle) pt-2 text-[11px] text-(--text-muted)">
              <span>branch: main</span>
              <span className="text-(--accent)">ready</span>
            </div>
          </div>
        );
    }
  };

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border border-(--border) bg-(--surface) transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-(--accent)">
      {/* Screenshot / Media Frame dengan zoom mikro */}
      <div className="relative aspect-video w-full overflow-hidden border-b border-(--border-subtle) bg-(--bg-secondary)">
        <div className="h-full w-full transition-transform duration-500 group-hover:scale-[1.01]">
          {showImage && project.screenshot ? (
            <Image
              src={project.screenshot}
              alt={`Screenshot tampilan antarmuka ${project.title}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading={priority ? undefined : "lazy"}
              priority={priority}
              onError={() => setImageError(true)}
              className="object-cover"
            />
          ) : (
            renderThemedMockup()
          )}
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold tracking-tight text-(--text-primary) transition-colors duration-200 group-hover:text-(--accent)">
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
              className="rounded border border-(--border) bg-(--bg) px-2 py-0.5 text-xs font-mono text-(--text-muted) transition-colors hover:border-(--accent) hover:text-(--text-primary)"
            >
              <TechIcon name={t} size={13} />
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-wrap items-center gap-3 pt-4 border-t border-(--border-subtle)">
          {hasLiveDemo ? (
            <>
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded border border-(--text-primary) bg-(--text-primary) px-4 py-2 text-xs font-medium text-(--bg) transition-all duration-150 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] inline-flex items-center gap-1.5 shadow-sm"
              >
                Live Demo
                <ExternalLink size={12} aria-hidden="true" />
              </a>
              {project.sourceUrl && (
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded border border-(--border) px-4 py-2 text-xs font-medium text-(--text-primary) transition-all duration-150 hover:border-(--text-primary) bg-(--bg) hover:scale-[1.02] active:scale-[0.98]"
                >
                  Source Code
                </a>
              )}
            </>
          ) : (
            <>
              {project.sourceUrl && (
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded border border-(--text-primary) bg-(--text-primary) px-4 py-2 text-xs font-medium text-(--bg) transition-all duration-150 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] inline-flex items-center gap-1.5 shadow-sm"
                >
                  <Github size={13} aria-hidden="true" />
                  Lihat di GitHub
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </article>
  );
}
