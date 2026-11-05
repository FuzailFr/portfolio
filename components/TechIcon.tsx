import React from "react";
import type { IconType } from "react-icons";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiOpenjdk,
  SiKotlin,
  SiSwift,
  SiGo,
  SiRust,
  SiC,
  SiCplusplus,
  SiDotnet,
  SiPhp,
  SiRuby,
  SiDart,
  SiGnubash,
  SiHtml5,
  SiCss,
  SiSass,
  SiVuedotjs,
  SiSvelte,
  SiJupyter,
  SiDocker,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiGit,
  SiMysql,
  SiLinux,
} from "react-icons/si";
import { Code2, BrainCircuit, Globe } from "lucide-react";

interface TechMeta {
  Icon: IconType | React.ComponentType<{ size?: number | string; className?: string; "aria-hidden"?: boolean | "true" | "false" }>;
  brandColor?: string; // Hex color for interactive hover
}

const TECH_MAP: Record<string, TechMeta> = {
  // Programming Languages (GitHub API exact & normalized)
  typescript: { Icon: SiTypescript, brandColor: "#3178C6" },
  javascript: { Icon: SiJavascript, brandColor: "#F7DF1E" },
  python: { Icon: SiPython, brandColor: "#3776AB" },
  java: { Icon: SiOpenjdk, brandColor: "#ED8B00" },
  kotlin: { Icon: SiKotlin, brandColor: "#7F52FF" },
  swift: { Icon: SiSwift, brandColor: "#F05138" },
  go: { Icon: SiGo, brandColor: "#00ADD8" },
  golang: { Icon: SiGo, brandColor: "#00ADD8" },
  rust: { Icon: SiRust, brandColor: "#DEA584" },
  c: { Icon: SiC, brandColor: "#A8B9CC" },
  "c++": { Icon: SiCplusplus, brandColor: "#00599C" },
  cpp: { Icon: SiCplusplus, brandColor: "#00599C" },
  "c#": { Icon: SiDotnet, brandColor: "#512BD4" },
  csharp: { Icon: SiDotnet, brandColor: "#512BD4" },
  php: { Icon: SiPhp, brandColor: "#777BB4" },
  ruby: { Icon: SiRuby, brandColor: "#CC342D" },
  dart: { Icon: SiDart, brandColor: "#0175C2" },
  shell: { Icon: SiGnubash, brandColor: "#4EAA25" },
  bash: { Icon: SiGnubash, brandColor: "#4EAA25" },
  html: { Icon: SiHtml5, brandColor: "#E34F26" },
  html5: { Icon: SiHtml5, brandColor: "#E34F26" },
  css: { Icon: SiCss, brandColor: "#1572B6" },
  css3: { Icon: SiCss, brandColor: "#1572B6" },
  scss: { Icon: SiSass, brandColor: "#CC6699" },
  sass: { Icon: SiSass, brandColor: "#CC6699" },
  vue: { Icon: SiVuedotjs, brandColor: "#4FC08D" },
  "vue.js": { Icon: SiVuedotjs, brandColor: "#4FC08D" },
  svelte: { Icon: SiSvelte, brandColor: "#FF3E00" },
  "jupyter notebook": { Icon: SiJupyter, brandColor: "#F37626" },
  jupyter: { Icon: SiJupyter, brandColor: "#F37626" },
  dockerfile: { Icon: SiDocker, brandColor: "#2496ED" },
  docker: { Icon: SiDocker, brandColor: "#2496ED" },

  // Frameworks & Libraries
  react: { Icon: SiReact, brandColor: "#61DAFB" },
  "next.js": { Icon: SiNextdotjs, brandColor: "var(--accent)" },
  nextjs: { Icon: SiNextdotjs, brandColor: "var(--accent)" },
  "tailwind css": { Icon: SiTailwindcss, brandColor: "#06B6D4" },
  tailwind: { Icon: SiTailwindcss, brandColor: "#06B6D4" },

  // Backend & Runtime
  "node.js": { Icon: SiNodedotjs, brandColor: "#5FA04E" },
  nodejs: { Icon: SiNodedotjs, brandColor: "#5FA04E" },
  mysql: { Icon: SiMysql, brandColor: "#4479A1" },
  "rest api": { Icon: Globe, brandColor: "var(--accent)" },
  api: { Icon: Globe, brandColor: "var(--accent)" },

  // Tools & Specialization
  git: { Icon: SiGit, brandColor: "#F05032" },
  github: { Icon: Code2, brandColor: "var(--accent)" },
  linux: { Icon: SiLinux, brandColor: "#FCC624" },
  "ai / machine learning": { Icon: BrainCircuit, brandColor: "var(--accent)" },
  "machine learning": { Icon: BrainCircuit, brandColor: "var(--accent)" },
  ai: { Icon: BrainCircuit, brandColor: "var(--accent)" },
  cli: { Icon: Code2, brandColor: "var(--accent)" },
  backend: { Icon: Code2, brandColor: "var(--accent)" },
  iot: { Icon: BrainCircuit, brandColor: "var(--accent)" },
};

export interface TechIconProps {
  name: string;
  size?: number;
  showLabel?: boolean;
  className?: string;
  labelClassName?: string;
}

export default function TechIcon({
  name,
  size = 16,
  showLabel = true,
  className = "",
  labelClassName = "",
}: TechIconProps) {
  const normalizedKey = name.trim().toLowerCase();
  const meta = TECH_MAP[normalizedKey];

  const IconComponent = meta?.Icon ?? Code2;
  const brandColor = meta?.brandColor;

  return (
    <span
      className={`group/icon inline-flex items-center gap-1.5 transition-colors ${className}`}
      title={name}
    >
      <span
        className="inline-flex shrink-0 items-center justify-center text-current transition-colors duration-150 ease-out group-hover/icon:text-[var(--hover-color)]"
        style={
          {
            "--hover-color": brandColor ?? "var(--accent)",
          } as React.CSSProperties
        }
      >
        <IconComponent size={size} aria-hidden="true" />
      </span>

      {showLabel && (
        <span className={labelClassName || "truncate"}>
          {name}
        </span>
      )}
      {!showLabel && <span className="sr-only">{name}</span>}
    </span>
  );
}
