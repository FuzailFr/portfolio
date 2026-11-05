import Image from "next/image";
import Link from "next/link";
import TechIcon from "@/components/TechIcon";
import { getGithubProfile } from "@/lib/github";

const TECH_GROUPS = [
  {
    label: "Frontend & Web Platform",
    description: "Membangun antarmuka modern yang cepat, ramah aksesibilitas, dan responsif.",
    items: ["TypeScript", "JavaScript", "React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    label: "Backend & Systems Architecture",
    description: "Merancang API tangguh, skema database terstruktur, dan komunikasi data server.",
    items: ["Python", "Node.js", "PHP", "Go", "MySQL", "REST API"],
  },
  {
    label: "Artificial Intelligence & DevOps",
    description: "Menerapkan pipeline model machine learning dan lingkungan kontainerisasi terstandar.",
    items: ["AI / Machine Learning", "Git", "GitHub", "Linux", "Docker"],
  },
];

export default async function About() {
  const profile = await getGithubProfile();

  return (
    <section id="about" className="py-12">
      <div className="mx-auto max-w-5xl px-6">
        {/* Header Seksi Profil */}
        <div className="border-b border-(--border-subtle) pb-8">
          <span className="text-xs font-mono uppercase tracking-wider text-(--accent)">
            Biografi & Filosofi
          </span>
          <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-(--text-primary) sm:text-5xl">
            Tentang Saya
          </h1>
        </div>

        <div className="mt-12 grid gap-12 md:grid-cols-[1fr_1.8fr] md:gap-16 items-start">
          {/* Sisi Kiri: Foto Profil GitHub / Lokal + Quick Cards */}
          <div className="flex flex-col gap-6 items-center md:items-start w-full">
            <div className="relative aspect-square w-full max-w-[320px] overflow-hidden rounded-2xl border-2 border-(--border) bg-(--surface) shadow-lg">
              <Image
                src={profile.avatarUrl}
                alt="Foto profil Fuzail Fazle Rabbi"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 320px, 320px"
                priority
              />
            </div>

            {/* Kotak Ringkasan Singkat Mahasiswa */}
            <div className="w-full max-w-[320px] rounded-lg border border-(--border) bg-(--surface) p-5 text-xs font-mono space-y-2 text-(--text-secondary)">
              <div className="flex justify-between">
                <span className="text-(--text-muted)">Status:</span>
                <span className="font-semibold text-(--text-primary)">Mahasiswa Aktif (Semester 7)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-(--text-muted)">Kampus:</span>
                <span className="font-semibold text-(--text-primary)">Universitas Esa Unggul</span>
              </div>
              <div className="flex justify-between">
                <span className="text-(--text-muted)">Lokasi:</span>
                <span className="font-semibold text-(--text-primary)">Bekasi, ID</span>
              </div>
              <div className="flex justify-between">
                <span className="text-(--text-muted)">Magang:</span>
                <span className="font-semibold text-(--accent)">VINIX7 (AI Division)</span>
              </div>
            </div>
          </div>

          {/* Sisi Kanan: Narasi Lengkap */}
          <div>
            <div className="space-y-4 text-base leading-relaxed text-(--text-secondary)">
              <p>
                Halo! Saya <strong>Fuzail Fazle Rabbi</strong>, seorang Software Engineer dan mahasiswa Teknik Informatika angkatan 2023 di Universitas Esa Unggul (Kampus Bekasi). Saat ini saya sedang menempuh semester 7 dan aktif menjalani program magang / studi independen di{" "}
                <a
                  href="https://vinix7.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-(--text-primary) underline underline-offset-4 hover:text-(--accent)"
                >
                  VINIX7
                </a>{" "}
                pada divisi <strong>Python Machine Learning &amp; AI Engineer</strong>.
              </p>
              <p>
                Perjalanan saya dalam rekayasa perangkat lunak berakar dari ketertarikan terhadap cara sistem bekerja di balik layar — mulai dari logika basis data, arsitektur backend yang tahan uji, hingga bagaimana model kecerdasan buatan dapat diterapkan untuk menyelesaikan persoalan nyata secara otomatis dan terukur.
              </p>
              <p>
                Saya memegang prinsip bahwa kode yang baik bukan hanya tentang bekerja saat ini, melainkan harus mudah dipelihara (*maintainable*), aman dari kerentanan umum, dan dibangun di atas fondasi kontrak tipe yang jelas.
              </p>
            </div>

            {/* Tech Stack Terkelompok dengan Ikon & Deskripsi */}
            <div className="mt-12 space-y-8">
              <h2 className="text-xl font-bold tracking-tight text-(--text-primary)">
                Keahlian & Ekosistem Teknologi
              </h2>

              {TECH_GROUPS.map((group) => (
                <div
                  key={group.label}
                  className="rounded-lg border border-(--border) bg-(--surface) p-6 transition-colors"
                >
                  <h3 className="text-sm font-bold uppercase tracking-wider text-(--text-primary)">
                    {group.label}
                  </h3>
                  <p className="mt-1 text-xs text-(--text-muted)">
                    {group.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((tech) => (
                      <li
                        key={tech}
                        className="rounded border border-(--border) bg-(--bg) px-3 py-1.5 text-xs font-mono text-(--text-secondary) transition-colors hover:border-(--text-primary)"
                      >
                        <TechIcon name={tech} size={16} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Quick Action Button */}
            <div className="mt-10 flex gap-4">
              <Link
                href="/contact"
                className="rounded border border-(--text-primary) bg-(--text-primary) px-5 py-2.5 text-sm font-medium text-(--bg) hover:opacity-90 transition-opacity"
              >
                Mulai Percakapan
              </Link>
              <a
                href="/cv.pdf"
                download
                className="rounded border border-(--border) bg-(--surface) px-5 py-2.5 text-sm font-medium text-(--text-primary) hover:border-(--text-primary) transition-colors"
              >
                Unduh Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
