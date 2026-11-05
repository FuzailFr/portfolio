# Portfolio — Fuzail Fazle Rabbi

Personal portfolio and technical showcase of **Fuzail Fazle Rabbi**, Software Engineer and Information Technology Student specializing in Backend Systems, Web Architecture, and Machine Learning / AI Integration.

Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**, designed for high performance, zero-runtime overhead, strict security, and seamless deployment on **Vercel**.

---

## 🚀 Fitur Utama

- **Multi-Page App Router Architecture:**
  - `/` (Home): Hero dua-kolom asimetris, avatar GitHub, infinite tech marquee, strip statistik GitHub nyata, visual bar distribusi bahasa, aktivitas komit terbaru, dan kartu proyek pilihan.
  - `/projects`: Katalog proyek unggulan dengan kartu interaktif (demo/source code) + tab filter stack instan + repositori publik GitHub lainnya dengan deduplikasi.
  - `/about`: Biografi lengkap, status mahasiswa semester 7 (Esa Unggul Bekasi), pengalaman magang di **VINIX7** (AI Division), dan ekosistem keahlian terkelompok.
  - `/contact`: Kotak email besar dengan tombol salin clipboard instan, formulir kontak cepat (`mailto:`), dan tautan dukungan via Saweria.
  - `app/error.tsx` & `app/not-found.tsx`: Penanganan error runtime dan 404 kustom yang selaras dengan tema.
- **Tipografi & Desain Presisi:**
  - Font Google modern via `next/font`: `Bricolage Grotesque` (display & body) dan `Space Mono` (metadata teknis & data numerik).
  - Tema **Dark & Light Mode** otomatis tersimpan di `localStorage` tanpa kedipan (*zero-FOUC*) via `next/script`.
  - Aksesibilitas teruji: WCAG AAA/AA contrast, keyboard navigation, dan menghormati penuh `prefers-reduced-motion`.
- **Integrasi GitHub API Cerdas & Andal:**
  - Data repositori, followers, bahasa dominan, dan timestamp ditarik dari GitHub Public API secara server-side.
  - **Incremental Static Regeneration (ISR)** dengan revalidasi bertahap 1 jam (`revalidate: 3600`) untuk efisiensi kuota API.
  - Fallback data statis otomatis jika jaringan atau kuota API habis.
- **Keamanan Ketat (Production Hardened):**
  - Sanitasi URL ketat pada tautan eksternal (memastikan hanya protokol `https://` dan domain `github.com`).
  - Runtime type-guarding untuk setiap respons payload API pihak ketiga.
  - HTTP Security Headers di `next.config.ts`: `Strict-Transport-Security` (HSTS), `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, dan `Permissions-Policy`.
  - Dukungan token opsional `GITHUB_TOKEN` di server-side untuk menaikkan limit API tanpa membocorkannya ke client.

---

## 🛠️ Tech Stack

| Lapisan | Teknologi |
|---|---|
| **Framework** | Next.js 16.4.5 (App Router, Turbopack) |
| **Library UI** | React 19.2.8 & React DOM |
| **Bahasa** | TypeScript 5 (Strict Mode) |
| **Styling** | Tailwind CSS v4 & PostCSS |
| **Ikon** | React Icons (`si` Simple Icons) & Lucide React |

---

## 💻 Menjalankan Secara Lokal

Pastikan Node.js (v18.18+ disarankan) telah terpasang:

```bash
# 1. Clone repositori
git clone https://github.com/FuzailFr/portfolio.git
cd portfolio

# 2. Pasang dependensi
npm install

# 3. Jalankan server lokal
npm run dev
```

Buka **[http://localhost:3000](http://localhost:3000)** pada peramban web.

Untuk menguji kompilasi produksi dan type checking:
```bash
npx tsc --noEmit
npm run build
```

---

## ⚙️ Variabel Lingkungan (Environment Variables)

Salin template variabel lingkungan dari `.env.example` ke `.env.local` jika diperlukan:

```env
# URL kanonikal publik (untuk Open Graph metadataBase)
NEXT_PUBLIC_SITE_URL=https://nama-domain-kamu.vercel.app

# GitHub Personal Access Token (Opsional, server-side only)
# Meningkatkan kuota rate-limit GitHub API dari 60 req/jam menjadi 5.000 req/jam.
GITHUB_TOKEN=
```

---

## 🚢 Panduan Deployment ke Vercel

Proyek ini 100% optimal untuk di-hosting di **Vercel** tanpa konfigurasi rumit:

1. Push repositori ini ke akun GitHub kamu.
2. Buka dashboard [Vercel](https://vercel.com) dan klik **"Add New..." -> "Project"**.
3. Pilih repositori `portfolio` dan klik **Import**.
4. (Opsional) Tambahkan variabel `NEXT_PUBLIC_SITE_URL` pada menu *Environment Variables*.
5. Klik **Deploy**. Website akan langsung live dengan SSL/HTTPS otomatis dan auto-build setiap ada `git push`.
