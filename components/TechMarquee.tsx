import TechIcon from "@/components/TechIcon";

const MARQUEE_TECH = [
  "TypeScript",
  "Python",
  "Go",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "PHP",
  "MySQL",
  "Git",
  "Linux",
  "Docker",
  "AI / Machine Learning",
  "REST API",
];

export default function TechMarquee() {
  // Duplikasi list agar pergerakan terlihat berkesinambungan
  const duplicatedList = [...MARQUEE_TECH, ...MARQUEE_TECH];

  return (
    <div className="relative border-y border-(--border-subtle) bg-(--bg-secondary)/40 py-4 overflow-hidden select-none">
      <div className="flex w-max animate-marquee gap-8 items-center">
        {duplicatedList.map((item, idx) => (
          <div
            key={`${item}-${idx}`}
            className="flex items-center gap-2 text-xs font-mono text-(--text-muted) transition-colors hover:text-(--text-primary)"
          >
            <TechIcon name={item} size={15} />
            <span className="text-(--border)">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
