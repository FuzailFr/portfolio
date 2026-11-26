import Image from "next/image";
import Link from "next/link";
import { Download, Github, MapPin, Sparkles } from "lucide-react";
import type { GithubProfile } from "@/lib/github";

interface HeroProps {
  profile: GithubProfile;
}

const AVAILABILITY_STATUS = "Tersedia untuk magang & posisi Software Engineer";

export default function Hero({ profile }: HeroProps) {
  return (
    <section
      id="top"
      className="relative border-b border-(--border-subtle) [background:var(--hero-gradient)] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr] md:items-center">
          {/* Kolom Kiri: Teks & Aksi */}
          <div className="flex flex-col justify-center">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--surface) px-3 py-1 text-xs text-(--text-muted) w-fit">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{AVAILABILITY_STATUS}</span>
            </div>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-(--text-primary) sm:text-6xl">
              Fuzail Fazle Rabbi
            </h1>

            <p className="mt-3 text-lg font-medium text-(--accent) sm:text-xl">
              Software Engineer — Backend Systems & AI Integration
            </p>

            <p className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-(--text-secondary)">
              Membangun aplikasi terdistribusi yang terukur, mengintegrasikan model AI ke dalam alur kerja produksi, dan merancang arsitektur web modern yang tangguh.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-(--text-muted)">
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={13} aria-hidden="true" />
                Bekasi, Indonesia
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Sparkles size={13} aria-hidden="true" />
                VINIX7 AI Engineer Intern
              </span>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/projects"
                className="rounded-md border border-(--text-primary) bg-(--text-primary) px-5 py-2.5 text-sm font-medium text-(--bg) transition-opacity hover:opacity-90"
              >
                Lihat Proyek
              </Link>
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2 rounded-md border border-(--border) px-4 py-2.5 text-sm font-medium text-(--text-primary) transition-colors hover:border-(--text-primary) bg-(--surface)"
              >
                <Download size={15} aria-hidden="true" />
                Download CV
              </a>
              <a
                href="https://github.com/FuzailFr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2.5 text-sm font-medium text-(--text-secondary) transition-colors hover:text-(--text-primary)"
              >
                <Github size={16} aria-hidden="true" />
                GitHub
              </a>
            </div>
          </div>

          {/* Kolom Kanan: Foto Profil GitHub Avatar (Asimetris Desktop) */}
          <div className="flex justify-center md:justify-end">
            <div className="relative group">
              {/* Bingkai luar beraksen presisi */}
              <div className="relative h-56 w-56 sm:h-64 sm:w-64 md:h-72 md:w-72 overflow-hidden rounded-2xl border-2 border-(--border) bg-(--surface) shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]">
                <Image
                  src={profile.avatarUrl}
                  alt="Foto profil GitHub Fuzail Fazle Rabbi"
                  fill
                  sizes="(max-width: 768px) 224px, 288px"
                  priority
                  className="object-cover"
                />
              </div>

              {/* Taglet metadata di sudut bawah avatar */}
              <div className="absolute -bottom-3 -left-3 flex items-center gap-1.5 rounded-md border border-(--border) bg-(--bg) px-3 py-1.5 text-xs font-mono text-(--text-primary) shadow-md">
                <Github size={13} className="text-(--accent) shrink-0" aria-hidden="true" />
                <span>{profile.username}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
