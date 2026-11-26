import { Github, Instagram, Linkedin, ArrowUpRight, MessageCircle, ShieldCheck } from "lucide-react";
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
    description: "Koneksi profesional, riwayat karir, dan pesan kolaborasi atau tawaran kerja formal.",
    actionText: "Kirim Pesan LinkedIn",
  },
  {
    label: "Instagram",
    handle: "fuzailfr",
    href: INSTAGRAM_URL,
    icon: Instagram,
    badge: "Direct Message",
    description: "Aktivitas personal, dokumentasi visual, dan kirim pesan langsung via Direct Message (DM).",
    actionText: "Kirim DM Instagram",
  },
  {
    label: "Threads",
    handle: "fuzailfr",
    href: THREADS_URL,
    icon: SiThreads,
    badge: "Diskusi & Opini",
    description: "Opini teknologi, diskusi santai seputar AI, dan kabar terbaru rekayasa perangkat lunak.",
    actionText: "Terhubung di Threads",
  },
  {
    label: "GitHub",
    handle: "FuzailFr",
    href: GITHUB_URL,
    icon: Github,
    badge: "Kode & Proyek",
    description: "Repositori kode terbuka, issue teknis, dan kolaborasi open-source langsung di repo.",
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

        {/* Informasi Jalur Komunikasi Aman & Terverifikasi */}
        <div className="mt-10 rounded-2xl border border-(--border) bg-(--surface) p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="rounded-xl border border-(--border) bg-(--bg) p-3 text-(--accent) shrink-0 mt-0.5 sm:mt-0">
                <ShieldCheck size={24} aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-base font-bold text-(--text-primary)">
                  Kirim Pesan Langsung (Direct Message)
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-(--text-secondary) leading-relaxed">
                  Untuk keamanan dan privasi dari spam, komunikasi personal dan tawaran kolaborasi diarahkan melalui Direct Message (DM) pada akun resmi terverifikasi berikut.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Grid Kartu Media Sosial & Jaringan Resmi */}
        <div className="mt-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
                      <span className="text-[10px] font-mono text-(--accent) uppercase tracking-wider bg-(--accent)/10 px-2 py-0.5 rounded border border-(--accent)/20">
                        {card.badge}
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
                    <ArrowUpRight size={13} aria-hidden="true" />
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
