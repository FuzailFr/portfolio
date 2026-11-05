"use client";

import { useState } from "react";
import { Mail, Copy, Check, Github, Linkedin, MessageSquare } from "lucide-react";

const EMAIL = "fuzailfr16@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/fuzail-fazle-rabbi-b73608429";
const GITHUB_URL = "https://github.com/FuzailFr";

const SOCIAL_CARDS = [
  {
    label: "GitHub",
    handle: "@FuzailFr",
    href: GITHUB_URL,
    icon: Github,
    description: "Repositori kode terbuka, eksperimen proyek, dan kontribusi publik.",
  },
  {
    label: "LinkedIn",
    handle: "Fuzail Fazle Rabbi",
    href: LINKEDIN_URL,
    icon: Linkedin,
    description: "Koneksi profesional, riwayat karir, dan aktivitas industri.",
  },
];

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "Nama wajib diisi.";
  if (!values.email.trim()) {
    errors.email = "Email wajib diisi.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Format email tidak valid.";
  }
  if (!values.message.trim()) errors.message = "Pesan wajib diisi.";
  return errors;
}

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard fallback
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    const subject = encodeURIComponent(`[Portfolio] Pesan dari ${form.name}`);
    const body = encodeURIComponent(
      `Nama: ${form.name}\nEmail: ${form.email}\n\nPesan:\n${form.message}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-12">
      <div className="mx-auto max-w-5xl px-6">
        {/* Header Kontak */}
        <div className="border-b border-(--border-subtle) pb-8">
          <span className="text-xs font-mono uppercase tracking-wider text-(--accent)">
            Saluran Komunikasi
          </span>
          <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-(--text-primary) sm:text-5xl">
            Hubungi Saya
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-(--text-secondary)">
            Terbuka untuk diskusi proyek rekayasa perangkat lunak, peluang kerja sama teknologi, atau pertanyaan seputar Machine Learning.
          </p>
        </div>

        {/* Kotak Email Utama Berukuran Besar */}
        <div className="mt-10 rounded-2xl border-2 border-(--border) bg-(--surface) p-8 md:p-10 shadow-sm">
          <span className="text-xs font-mono uppercase tracking-wider text-(--text-muted)">
            Direct Email Address
          </span>

          <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
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
                <span>Buka Mail</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-12 md:grid-cols-2 items-start">
          {/* Sisi Kiri: Kartu Media Sosial */}
          <div>
            <h2 className="text-lg font-bold tracking-tight text-(--text-primary)">
              Jaringan Profesional
            </h2>
            <p className="mt-1 text-sm text-(--text-secondary)">
              Temukan aktivitas kode dan jejak karir saya di platform berikut.
            </p>

            <div className="mt-6 space-y-4">
              {SOCIAL_CARDS.map((card) => {
                const Icon = card.icon;
                return (
                  <a
                    key={card.label}
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-4 rounded-xl border border-(--border) bg-(--surface) p-5 transition-colors hover:border-(--accent)"
                  >
                    <div className="rounded-lg border border-(--border) bg-(--bg) p-2.5 text-(--text-primary) group-hover:text-(--accent) transition-colors">
                      <Icon size={20} aria-hidden="true" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-(--text-primary) group-hover:text-(--accent) transition-colors">
                          {card.label}
                        </span>
                        <span className="text-xs font-mono text-(--text-muted)">
                          {card.handle}
                        </span>
                      </div>
                      <p className="mt-1 text-xs leading-relaxed text-(--text-secondary)">
                        {card.description}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Sisi Kanan: Formulir Cepat */}
          <div className="rounded-xl border border-(--border) bg-(--surface) p-7">
            <div className="flex items-center gap-2 border-b border-(--border-subtle) pb-3">
              <MessageSquare size={16} className="text-(--accent)" aria-hidden="true" />
              <h2 className="font-bold text-sm text-(--text-primary)">
                Kirimkan Pesan Singkat
              </h2>
            </div>

            {submitted ? (
              <div
                role="status"
                className="mt-6 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-5 text-sm text-(--text-primary)"
              >
                Aplikasi email kamu akan terbuka dengan pesan siap kirim. Terima kasih!
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="mt-6 flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-name" className="text-xs font-mono text-(--text-primary)">
                    Nama Anda
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    aria-invalid={!!errors.name}
                    className="rounded border bg-(--bg) px-3.5 py-2 text-sm text-(--text-primary) outline-none transition-colors border-(--border) focus:border-(--accent)"
                    placeholder="Contoh: Alex Pratama"
                  />
                  {errors.name && (
                    <span role="alert" className="text-xs text-red-500">
                      {errors.name}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-email" className="text-xs font-mono text-(--text-primary)">
                    Alamat Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    aria-invalid={!!errors.email}
                    className="rounded border bg-(--bg) px-3.5 py-2 text-sm text-(--text-primary) outline-none transition-colors border-(--border) focus:border-(--accent)"
                    placeholder="alex@domain.com"
                  />
                  {errors.email && (
                    <span role="alert" className="text-xs text-red-500">
                      {errors.email}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-message" className="text-xs font-mono text-(--text-primary)">
                    Isi Pesan
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    aria-invalid={!!errors.message}
                    className="resize-none rounded border bg-(--bg) px-3.5 py-2 text-sm text-(--text-primary) outline-none transition-colors border-(--border) focus:border-(--accent)"
                    placeholder="Tuliskan topik bahasan atau tawaran kolaborasi..."
                  />
                  {errors.message && (
                    <span role="alert" className="text-xs text-red-500">
                      {errors.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="mt-2 rounded border border-(--text-primary) bg-(--text-primary) py-2.5 text-sm font-medium text-(--bg) hover:opacity-90 transition-opacity"
                >
                  Kirim via Email Client
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
