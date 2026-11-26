import { Github, Instagram, Linkedin, ArrowUpRight } from "lucide-react";
import { SiThreads } from "react-icons/si";

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
    badge: "Prioritas Karir",
    description:
      "Saluran utama untuk peluang kerja, magang industri, dan kolaborasi rekayasa perangkat lunak secara profesional.",
    actionText: "Kirim Pesan LinkedIn",
  },
  {
    label: "Instagram",
    handle: "fuzailfr",
    href: INSTAGRAM_URL,
    icon: Instagram,
    badge: "Direct Message",
    description:
      "Terhubung untuk komunikasi langsung yang lebih personal, kegiatan harian, dan obrolan seputar proyek teknologi.",
    actionText: "Kirim DM Instagram",
  },
  {
    label: "Threads",
    handle: "fuzailfr",
    href: THREADS_URL,
    icon: SiThreads,
    badge: "Diskusi & Opini",
    description:
      "Ruang berbagi opini teknologi, insight implementasi AI modern, dan update ringkas seputar software engineering.",
    actionText: "Terhubung di Threads",
  },
  {
    label: "GitHub",
    handle: "FuzailFr",
    href: GITHUB_URL,
    icon: Github,
    badge: "Kode & Proyek",
    description:
      "Eksplorasi kode sumber terbuka, kontribusi pull request, serta diskusi teknis melalui issue repositori publik.",
    actionText: "Buka Profil GitHub",
  },
];

export default function Contact() {
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
            Terbuka untuk diskusi proyek rekayasa perangkat lunak, peluang kerja sama teknologi, atau pertanyaan seputar Machine Learning &amp; Web Engineering.
          </p>
        </div>

        {/* Grid 2 Kolom Seimbang (2x2) untuk 4 Kartu Resmi */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {SOCIAL_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <a
                key={card.label}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-(--border) bg-(--surface) p-7 transition-all duration-300 hover:-translate-y-1 hover:border-(--accent) hover:shadow-xl"
              >
                <div>
                  {/* Baris Atas Kartu: Ikon, Nama, dan Badge Kategori */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-(--border) bg-(--bg) text-(--text-primary) transition-colors group-hover:border-(--accent)/50 group-hover:text-(--accent) shadow-sm">
                        <Icon size={24} aria-hidden="true" />
                      </div>
                      <div>
                        <h2 className="text-lg font-bold tracking-tight text-(--text-primary) transition-colors group-hover:text-(--accent)">
                          {card.label}
                        </h2>
                        <span className="text-xs font-mono text-(--text-muted)">
                          {card.handle}
                        </span>
                      </div>
                    </div>

                    <span className="shrink-0 rounded-full border border-(--border) bg-(--bg) px-3 py-1 text-[11px] font-mono text-(--text-secondary)">
                      {card.badge}
                    </span>
                  </div>

                  {/* Deskripsi Kartu */}
                  <p className="mt-5 text-sm leading-relaxed text-(--text-secondary)">
                    {card.description}
                  </p>
                </div>

                {/* Footer Kartu: CTA Interaktif */}
                <div className="mt-8 flex items-center justify-between border-t border-(--border-subtle) pt-4 text-xs font-medium text-(--accent)">
                  <span className="transition-colors group-hover:underline">
                    {card.actionText}
                  </span>
                  <ArrowUpRight
                    size={15}
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
