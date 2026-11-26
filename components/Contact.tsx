"use client";

import { useState } from "react";
import { Mail, Copy, Check, Github, Instagram, Linkedin, ArrowUpRight } from "lucide-react";
import { SiThreads } from "react-icons/si";

const EMAIL = "fuzailfr16@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/fuzail-fazle-rabbi-b73608429";
const GITHUB_URL = "https://github.com/FuzailFr";
const INSTAGRAM_URL = "https://www.instagram.com/fuzailfr/";
const THREADS_URL = "https://www.threads.net/@fuzailfr";

const SOCIAL_CARDS = [
  {
    label: "LinkedIn",
    handle: "Fuzail Fazle Rabbi",
    href: LINKEDIN_URL,
    icon: Linkedin,
    description: "Koneksi profesional, riwayat karir, dan pesan kolaborasi formal.",
    actionText: "Buka LinkedIn",
  },
  {
    label: "Instagram",
    handle: "fuzailfr",
    href: INSTAGRAM_URL,
    icon: Instagram,
    description: "Aktivitas personal, dokumentasi visual, dan kirim Direct Message (DM).",
    actionText: "Kirim DM Instagram",
  },
  {
    label: "Threads",
    handle: "fuzailfr",
    href: THREADS_URL,
    icon: SiThreads,
    description: "Opini teknologi, diskusi santai, dan update seputar rekayasa perangkat lunak.",
    actionText: "Buka Threads",
  },
  {
    label: "GitHub",
    handle: "FuzailFr",
    href: GITHUB_URL,
    icon: Github,
    description: "Repositori kode terbuka, issue diskusi, dan kolaborasi open-source.",
    actionText: "Buka GitHub",
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard fallback
    }
  };

  return (
    <section id="contact" className="py-12">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Header Kontak */}
        <div className="border-b border-(--border-subtle) pb-8">
          <span className="text-xs font-mono uppercase tracking-wider text-(--accent)">
            Saluran Komunikasi
          </span>
          <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-(--text-primary) sm:text-5xl">
            Hubungi Saya
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-(--text-secondary)">
            Terbuka untuk diskusi proyek rekayasa perangkat lunak, peluang kerja sama teknologi, atau pertanyaan seputar Machine Learning & Web Engineering.
          </p>
        </div>

        {/* Kotak Email Utama Berukuran Besar */}
        <div className="mt-10 rounded-2xl border-2 border-(--border) bg-(--surface) p-8 md:p-10 shadow-sm">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-mono uppercase tracking-wider text-(--text-muted)">
              Direct Email Address
            </span>
            <span className="text-xs text-(--text-secondary)">
              Kirimkan email langsung dari aplikasi email favorit Anda atau salin alamatnya.
            </span>
          </div>

          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-2xl font-bold tracking-tight text-(--text-primary) sm:text-3xl md:text-4xl font-mono break-all">
              {EMAIL}
            </span>

            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 rounded border border-(--border) bg-(--bg) px-4 py-2.5 text-xs font-mono text-(--text-primary) hover:border-(--accent) transition-colors"
                aria-label="Salin alamat email ke clipboard"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-emerald-500" />
                    <span>Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Salin Email</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 rounded border border-(--text-primary) bg-(--text-primary) px-4 py-2.5 text-xs font-medium text-(--bg) hover:opacity-90 transition-opacity"
              >
                <Mail size={14} />
                <span>Buka Mail Client</span>
              </a>
            </div>
          </div>
        </div>

        {/* Jaringan Profesional & Sosial */}
        <div className="mt-14">
          <div className="border-b border-(--border-subtle) pb-4">
            <h2 className="text-xl font-bold tracking-tight text-(--text-primary)">
              Jaringan Profesional & Sosial
            </h2>
            <p className="mt-1 text-sm text-(--text-secondary)">
              Saluran resmi untuk terhubung langsung secara aman tanpa perantara formulir pihak ketiga.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SOCIAL_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <a
                  key={card.label}
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col justify-between rounded-xl border border-(--border) bg-(--surface) p-6 transition-all duration-200 hover:-translate-y-1 hover:border-(--accent) hover:shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="rounded-lg border border-(--border) bg-(--bg) p-2.5 text-(--text-primary) group-hover:text-(--accent) transition-colors">
                        <Icon size={22} aria-hidden="true" />
                      </div>
                      <span className="text-[11px] font-mono text-(--accent) uppercase tracking-wider flex items-center gap-0.5">
                        Direct Link
                        <ArrowUpRight size={12} />
                      </span>
                    </div>

                    <div className="mt-4">
                      <h3 className="font-bold text-base text-(--text-primary) group-hover:text-(--accent) transition-colors">
                        {card.label}
                      </h3>
                      <p className="mt-0.5 text-xs font-mono text-(--text-muted)">
                        {card.handle}
                      </p>
                    </div>

                    <p className="mt-3 text-xs leading-relaxed text-(--text-secondary)">
                      {card.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-(--border-subtle) text-xs font-medium text-(--accent) group-hover:underline flex items-center justify-between">
                    <span>{card.actionText}</span>
                    <ArrowUpRight size={13} />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
