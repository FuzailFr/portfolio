interface TimelineItem {
  period: string;
  role: string;
  institution: string;
  institutionUrl?: string;
  description: string;
  highlights?: string[];
}

const EXPERIENCES: TimelineItem[] = [
  {
    period: "2026 — Sekarang",
    role: "Machine Learning & AI Engineer Intern",
    institution: "VINIX7",
    institutionUrl: "https://vinix7.id/",
    description:
      "Menjalankan program magang / studi independen pada divisi Python Machine Learning & AI Engineer, berfokus pada pengembangan model cerdas, pemrosesan data, dan integrasi pipeline AI ke dalam sistem fungsional.",
    highlights: ["Python", "Machine Learning", "AI", "Data Pipeline", "Model Integration"],
  },
  {
    period: "2025 — Sekarang",
    role: "Software Engineer / Independent Developer",
    institution: "Freelance / Proyek Mandiri",
    description:
      "Merancang dan membangun solusi web modern, integrasi API, dan arsitektur backend untuk kebutuhan klien serta eksplorasi teknologi terdistribusi.",
    highlights: ["TypeScript", "Next.js", "Backend Systems", "REST API"],
  },
];

const EDUCATION: TimelineItem[] = [
  {
    period: "2023 — Sekarang",
    role: "S1 Teknik Informatika (Semester 7)",
    institution: "Universitas Esa Unggul — Kampus Bekasi",
    description:
      "Mahasiswa aktif angkatan 2023 dengan fokus studi mendalam pada Rekayasa Perangkat Lunak, Sistem Basis Data Terdistribusi, Pemrograman Berorientasi Objek, dan Komputasi Cerdas.",
    highlights: ["Algoritma", "Basis Data", "Rekayasa Web", "AI"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-t border-(--border-subtle) py-20 bg-(--bg-secondary)/30">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-(--accent)">
            Jejak Langkah Profesional
          </span>
          <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-(--text-primary) sm:text-3xl">
            Pengalaman Kerja & Pendidikan
          </h2>
          <p className="mt-2 text-sm text-(--text-secondary)">
            Ringkasan peran profesional, magang industri, dan fondasi akademis yang saya tempuh.
          </p>
        </div>

        <div className="mt-12 grid gap-16 md:grid-cols-2">
          {/* Kolom Pengalaman */}
          <div>
            <div className="flex items-center gap-2 border-b border-(--border-subtle) pb-3">
              <span className="h-2 w-2 rounded-full bg-(--accent)" />
              <h3 className="text-base font-bold tracking-tight text-(--text-primary)">
                Pengalaman Industri & Proyek
              </h3>
            </div>

            <div className="mt-8 border-l-2 border-(--border) pl-6 space-y-10">
              {EXPERIENCES.map((exp, index) => (
                <div key={index} className="relative group">
                  {/* Bullet Node */}
                  <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-(--border) bg-(--bg) transition-colors group-hover:border-(--accent)" />

                  <span className="rounded bg-(--surface) px-2 py-0.5 text-xs font-mono text-(--accent) border border-(--border)">
                    {exp.period}
                  </span>

                  <h4 className="mt-2 text-lg font-bold text-(--text-primary)">
                    {exp.role}
                  </h4>

                  <p className="mt-0.5 text-sm text-(--text-secondary)">
                    {exp.institutionUrl ? (
                      <a
                        href={exp.institutionUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-(--text-primary) underline underline-offset-4 hover:text-(--accent) transition-colors"
                      >
                        {exp.institution} ↗
                      </a>
                    ) : (
                      <span className="font-semibold text-(--text-primary)">
                        {exp.institution}
                      </span>
                    )}
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-(--text-secondary)">
                    {exp.description}
                  </p>

                  {exp.highlights && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {exp.highlights.map((tag) => (
                        <span
                          key={tag}
                          className="rounded border border-(--border) bg-(--surface) px-2 py-0.5 text-xs font-mono text-(--text-muted)"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Kolom Pendidikan */}
          <div>
            <div className="flex items-center gap-2 border-b border-(--border-subtle) pb-3">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <h3 className="text-base font-bold tracking-tight text-(--text-primary)">
                Pendidikan Akademis
              </h3>
            </div>

            <div className="mt-8 border-l-2 border-(--border) pl-6 space-y-10">
              {EDUCATION.map((edu, index) => (
                <div key={index} className="relative group">
                  <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-(--border) bg-(--bg) transition-colors group-hover:border-emerald-500" />

                  <span className="rounded bg-(--surface) px-2 py-0.5 text-xs font-mono text-emerald-500 border border-(--border)">
                    {edu.period}
                  </span>

                  <h4 className="mt-2 text-lg font-bold text-(--text-primary)">
                    {edu.role}
                  </h4>

                  <p className="mt-0.5 text-sm font-semibold text-(--text-primary)">
                    {edu.institution}
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-(--text-secondary)">
                    {edu.description}
                  </p>

                  {edu.highlights && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {edu.highlights.map((tag) => (
                        <span
                          key={tag}
                          className="rounded border border-(--border) bg-(--surface) px-2 py-0.5 text-xs font-mono text-(--text-muted)"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
