# 📐 DESIGN.md — Universal UI Specification & Portfolio Design System
> **Standard:** Universal UI Spec (Dark-First, Anti-AI-Slop, Production-Hardened)  
> **Target Project:** Portofolio fuzail.dev (Next.js 16 App Router, React 19, Tailwind CSS v4, Vercel Analytics)  
> **Status:** Canonical Single Source of Truth (SSOT). File ini mengikat dan menang atas kebiasaan bawaan/default developer atau AI agent.

---

## 0. Prinsip Inti (*Core Principles*)
1. **Setiap Elemen Memiliki Fungsi:** Tidak ada fungsi yang jelas → hapus. Jangan menambahkan ornamen semata-mata untuk mengisi ruang kosong.
2. **Berangkat dari Konten & Data Nyata:** Desain dibangun mengelilingi data asli (GitHub API, status riil, metrik aktual), bukan *placeholder* atau template generik.
3. **Satu Warna Aksen (*One Accent Rule*):** Hanya gunakan satu warna aksen utama. Warna lain hanya hadir untuk membawa makna fungsional semantik (sukses, peringatan, destruktif, info).
4. **Padat Namun Tenang (*Dense but Calm*):** Nyaman dibaca berjam-jam tanpa silau. Tidak ada warna hitam pekat (`#000000`) atau putih murni (`#ffffff`) pada kanvas utama.
5. **Agnostik Bahasa (*Language-Agnostic & i18n-Ready*):** Tahan terhadap ekspansi teks +40%, mendukung RTL, skrip non-Latin, dan rendering tipografi yang aman.
6. **Alami & Hidup (*Soft and Alive, Never Stiff or Garish*):** Kedalaman visual yang halus melalui *hairline border* dan bayangan berlapis tipis; gerakan mikro tenang (120–280ms).
7. **Pemisahan Kode Bersih (*Clean Separation*):** Struktur (HTML/TSX), gaya (CSS Tokens), dan perilaku (State/TS) terpisah secara modular.

---

## 1. Daftar Terlarang (*Banned / Anti-Slop List*)
DILARANG KERAS menerapkan elemen-elemen berikut dalam kode maupun antarmuka:

* **Visual Slop:**
  * Gradien warna jenuh bergaya AI-template (ungu→biru, pink→oranye, pelangi, mesh gradient tanpa arti).
  * Efek *glassmorphism* tebal di semua tempat (maksimal 1 lapisan tipis melayang per halaman).
  * Bayangan hitam pekat kasar (*hard pitch-black shadows*), pendaran neon tebal (*thick colored glows*), dan *neumorphism*.
  * Elemen dekoratif sembarangan (bola mengambang, *mesh blobs*, partikel 3D generik).
  * Emoji sebagai pengganti ikon antarmuka (wajib gunakan keluarga ikon garis bergaris presisi: *Lucide React* atau *Simple Icons*).
  * Radius ekstrem sembarangan (seperti `rounded-3xl` pada elemen kotak biasa).
  * Teks bergradien (*gradient text*).
* **Layout Slop:**
  * Layout klise repetitif: Hero generik → 3 kartu identik → testimoni palsu → CTA raksasa.
  * Semua elemen dipusatkan (*everything centered*).
  * Padding seragam kaku tanpa variasi ritme.
  * Badge/Pill "✨ New" atau "✨ AI" tanpa kegunaan fungsional.
* **Tipografi Slop:**
  * Menggunakan font default tanpa pertimbangan; font tunggal untuk semua konteks.
  * Menggunakan digit proporsional pada tabel atau data metrik numerik (wajib gunakan *tabular-nums / monospace*).
  * Transformasi *uppercase* atau *letter-spacing* pada skrip *caseless* (Arab, CJK, Thai, India).
* **Copywriting Slop:**
  * Kata-kata dengung klise: *"Elevate / Unlock / Seamless / Revolutionize / Next-gen / All-in-one / Cutting-edge"*.
  * Data buatan palsu (*"10K+ Happy Users"*, *"99.9% Uptime"*, *"John Doe"*).
  * Teks *Lorem Ipsum* atau tanda seru ("!") berlebihan.
* **Gerakan & Animasi Slop:**
  * *Fade-up* pada setiap elemen di setiap scroll.
  * Efek hover berlebihan seperti `hover:scale-105 -translate-y-2`.
  * Animasi berputar (*spinners*) di mana-mana (gunakan *skeleton loaders* proporsional).
* **Kode Slop:**
  * Hardcoded nilai hex warna atau ukuran piksel di dalam komponen (`style={{ color: '#123456' }}` atau `text-[#123456]`).
  * CSS non-logis (`left`, `right` alih-alih `inline-start`, `inline-end`).
  * Tag `<style>` dalam HTML, inline handler interaksi, halaman monolitik raksasa.
  * Penggunaan `!important` (kecuali untuk reset `prefers-reduced-motion` dan media cetak).

---

## 2. Arsitektur Token Kanonikal (*Design Tokens*)

Variabel CSS adalah standar kanonikal. Di portofolio ini, token didefinisikan di [`app/globals.css`](file:///d:/PROJEK/porto/app/globals.css) dan dipanggil via sintaks Tailwind CSS v4: `bg-(--token)`, `text-(--token)`, `border-(--token)`.

### 2.1 Basis Sistem (*Root Tokens*)
```css
:root {
  --font-sans: "Bricolage Grotesque", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mono: "Space Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  --label-case: uppercase;
  --label-track: 0.08em;

  /* Radius Skala Presisi */
  --r-xs: 4px;      /* Badge, chip, tag */
  --r-sm: 6px;      /* Tombol, input, form controls */
  --r-md: 8px;      /* Kartu standar, panel */
  --r-lg: 12px;     /* Modal dialog, dropdown */
  --r-xl: 16px;     /* Avatar container, frame khusus */
  --r-full: 9999px; /* Status pill, avatar lingkaran */

  /* Timing & Easing */
  --ease: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-soft: cubic-bezier(0.34, 1.2, 0.64, 1);
  --d-fast: 120ms;
  --d-base: 180ms;
  --d-slow: 320ms;
  --d-enter: 280ms;

  /* Ukuran Kontrol & Ritme */
  --control-h: 36px;
  --row-h: 40px;
  --pad: 16px;
  --gap: 12px;
  --text-body: 14px;
  --focus-w: 2px;
}
```

### 2.2 Mode Gelap (*Dark Mode — Default Technical Archival*)
Karakter: *Slate-Charcoal*, kontras teks ~12:1, nyaman untuk mata teknisi dan sesi malam panjang.
```css
[data-theme="dark"] {
  color-scheme: dark;
  --bg: #0f1115;
  --bg-secondary: #16191f;
  --surface: #1a1e26;
  --surface-hover: #222731;
  --surface-active: #2a313e;
  --border: #262b35;
  --border-subtle: #1c212a;
  --border-strong: #3b4352;
  --overlay: rgba(10, 12, 16, 0.65);

  --text-primary: #f1f3f5;
  --text-secondary: #8b949e;
  --text-muted: #626c79;
  --text-off: #434a56;

  --accent: #60a5fa;             /* Cool Technical Blue */
  --accent-muted: rgba(96, 165, 250, 0.12);
  --accent-line: rgba(96, 165, 250, 0.35);
  --on-accent: #0b192c;

  --success: #34d399;
  --warning: #fbbf24;
  --danger: #f87171;
  --info: #60a5fa;

  --hero-gradient: linear-gradient(180deg, #0a0c0e 0%, #16191f 100%);
  --shadow-rgb: 0 0 0;
  --sh-sm: 0 1px 2px rgba(var(--shadow-rgb), 0.25);
  --sh-md: 0 2px 6px rgba(var(--shadow-rgb), 0.3), 0 8px 16px -4px rgba(var(--shadow-rgb), 0.35);
  --hl-top: inset 0 1px 0 rgba(255, 255, 255, 0.05);
}
```

### 2.3 Mode Terang (*Light Mode — Warm Paper & Lead*)
Karakter: *Paper & Lead*, tanpa putih murni yang menusuk mata, kontras ~12:1.
```css
[data-theme="light"] {
  color-scheme: light;
  --bg: #fafaf9;                  /* Warm paper */
  --bg-secondary: #f3f4f6;
  --surface: #ffffff;
  --surface-hover: #f9fafb;
  --surface-active: #f3f4f6;
  --border: #e2e5e9;
  --border-subtle: #eceef1;
  --border-strong: #cbd5e1;
  --overlay: rgba(30, 28, 24, 0.45);

  --text-primary: #111827;        /* Slate lead */
  --text-secondary: #4b5563;
  --text-muted: #6b7280;
  --text-off: #9ca3af;

  --accent: #2563eb;             /* Vibrant Royal Blue */
  --accent-muted: rgba(37, 99, 235, 0.08);
  --accent-line: rgba(37, 99, 235, 0.30);
  --on-accent: #ffffff;

  --success: #16a34a;
  --warning: #d97706;
  --danger: #dc2626;
  --info: #2563eb;

  --hero-gradient: linear-gradient(180deg, #f4f4f2 0%, #e9ecef 100%);
  --shadow-rgb: 40 35 25;
  --sh-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --sh-md: 0 2px 4px rgba(0, 0, 0, 0.06), 0 6px 12px -2px rgba(0, 0, 0, 0.08);
  --hl-top: inset 0 1px 0 rgba(255, 255, 255, 0.6);
}
```

### 2.4 Mode Kerapatan (*Density Levels*)
* `[data-density="compact"]`: `--control-h: 28px; --row-h: 32px; --pad: 12px; --gap: 8px; --text-body: 13px;`
* `[data-density="comfortable"]` (Default web): `--control-h: 36px; --row-h: 40px; --pad: 16px; --gap: 12px; --text-body: 14px;`
* Touch targets (`@media (pointer: coarse)`): Minimal `--control-h: 44px; --row-h: 48px;` untuk kenyamanan sentuhan jari di ponsel.

---

## 3. Sistem Mode & Anti-Kedipan (*Zero-FOUC*)
1. Atribut pada elemen `<html>`: `data-theme="dark"` (atau `"light"`).
2. **Inisialisasi Pre-Paint:** Disuntikkan via script sinkron pemblokir kecil sebelum render pertama di [`app/layout.tsx`](file:///d:/PROJEK/porto/app/layout.tsx#L58-L68):
   ```javascript
   (function () {
     try {
       var stored = localStorage.getItem("theme");
       var theme = stored === "light" || stored === "dark" ? stored : "dark";
       document.documentElement.setAttribute("data-theme", theme);
     } catch (e) {
       document.documentElement.setAttribute("data-theme", "dark");
     }
   })();
   ```
3. **Transisi Pergantian Halus:** `background-color 150ms ease, color 150ms ease, border-color 150ms ease` (otomatis mati jika `prefers-reduced-motion` aktif).

---

## 4. Warna & Keterbacaan (*Color & Eye Comfort*)
* **Rasio Kontras (WCAG 2.2 AA+):**
  * Teks utama (`--text-primary`) ke background: minimal 10:1 (standar kami ~12:1).
  * Teks metadata teknis (`--text-muted`) ke background: minimal 4.5:1.
  * Border antarmuka dan kontrol interaktif: minimal 3:1.
* **Aturan Alokasi Aksen:** Warna `--accent` dibatasi **≤ 5%** dari total area layar: hanya untuk tombol utama, link aktif, status fokus, dan indikator penting. Jangan pernah gunakan aksen sebagai latar belakang seksi penuh.
* **Tag Status Semantik:** Format wajib: background aksen semantik @10%, border @30%, teks warna penuh @100%, disertai teks atau simbol (tidak pernah warna sendirian).
* **Penyajian Data Visual (Dataviz):** Gunakan label langsung (*direct labels*) dan variasi pola/teks selain warna semata.

---

## 5. Tipografi & Internasionalisasi (*Typography & i18n*)

### 5.1 Skala Ukuran Font
Gunakan skala bertingkat dalam satuan relatif `rem` (1rem = 16px):
* `40px` (`2.5rem` / `text-4xl sm:text-6xl font-extrabold tracking-tight`): Nama profil Hero.
* `32px` (`2rem` / `text-3xl sm:text-5xl font-extrabold tracking-tight`): Judul halaman sub-halaman (`/projects`, `/about`).
* `24px` (`1.5rem` / `text-2xl sm:text-3xl font-extrabold`): Judul seksi utama.
* `20px` (`1.25rem` / `text-xl font-bold`): Judul seksi sekunder & kartu featured.
* `16px` (`1rem` / `text-base leading-relaxed`): Paragraf deskripsi bio utama.
* `14px` (`0.875rem` / `text-sm leading-relaxed`): Teks isi kartu, pengalaman kerja, tombol standar.
* `12px` (`0.75rem` / `text-xs font-mono`): Metadata, status pill, tag teknologi, timestamp, tanggal.
* `10px` / `11px`: Chip kecil overline.

### 5.2 Peran Font (*Font Roles*)
* **Display & Body:** `Bricolage Grotesque` (`--font-sans`). Memiliki `letter-spacing: -0.01em` pada body untuk keterbacaan modern yang solid.
* **Technical, Numerical, & Code:** `Space Mono` (`--font-mono`). Digunakan untuk angka statistik, counter, nama repo, tech badges, dan tanggal. Gunakan `tabular-nums` pada metrik angka agar lebar digit sejajar sempurna.
* **Aturan i18n & Skrip Lain:** Jika situs menampilkan skrip CJK, Arab, atau India, nonaktifkan *uppercase* dan *tracking*:
  ```css
  :lang(ar), :lang(zh), :lang(ja), :lang(ko), :lang(hi) {
    --label-case: none;
    --label-track: 0;
    letter-spacing: 0;
  }
  ```
* **Format Tanggal:** Wajib diformat melalui `Intl.DateTimeFormat` atau fungsi utilitas waktu relatif teruji (seperti `formatRelativeTime`), bukan manipulasi string manual.

---

## 6. Kedalaman, Gradien, & Efek Visual (*Depth & Blending*)
* **Hairline Borders:** Pemisah fisik antar elemen selalu menggunakan border 1px yang lembut: `border-(--border)` untuk kontainer/kartu dan `border-(--border-subtle)` untuk pembatas seksi.
* **Top Highlight:** Elemen permukaan elevated mendapatkan garis kilap tipis di atas: `box-shadow: var(--hl-top), var(--sh-sm);`.
* **Gradien:** Hanya diizinkan pada area Hero (`--hero-gradient`) dan kilau aksen lembut. Dilarang menggunakan gradien pelangi atau berlawanan arah warna.
* **Glassmorphism:** Dibatasi maksimal 1 elemen melayang di layar, yaitu Navbar sticky:
  ```css
  bg-(--bg)/95 backdrop-saturate-100 border-b border-(--border-subtle)
  ```

---

## 7. Gerakan & Animasi (*Motion System*)
* **Durasi Transisi:** Mikrointeraksi `120ms`–`180ms`, transisi panel `250ms`–`320ms`, animasi masuk halaman `280ms`.
* **Page Entrance:** `<main className="animate-entrance">` menggunakan transisi Y dari `4px` ke `0` dan opacity dari `0.85` ke `1` dalam kurun `280ms cubic-bezier(0.16, 1, 0.3, 1)`.
* **Tech Marquee:** Berjalan kontinu `35s linear infinite`. Wajib berhenti saat kursor mouse pengguna berada di atasnya: `hover:[animation-play-state:paused]`.
* **Reduced Motion:** Saat sistem mendeteksi `prefers-reduced-motion: reduce`:
  * Seluruh animasi dihentikan (`animation: none !important; transform: none !important;`).
  * Durasi transisi dipangkas ke `0.01ms !important;`.
  * `scroll-behavior` disetel ke `auto !important;`.

---

## 8. Tata Letak, Grid, & Irama Spasi (*Layout Rhythm*)

### 8.1 Kontainer Utama (Wajib Konsisten)
Semua halaman dan seksi **HARUS** berada di dalam kontainer standar:
```tsx
<div className="mx-auto max-w-5xl px-6">
  {/* Konten */}
</div>
```
* Maksimal lebar kontainer: `max-w-5xl` (1024px).
* Padding horisontal: `px-6` (24px).

### 8.2 Irama Spasi Vertikal
* **Hero Area:** `py-20 md:py-28`
* **Seksi Halaman Reguler:** `py-16` atau `py-20`
* **Data Strip & Marquee:** `py-4`, `py-8`, atau `py-14`
* **Divider Seksi:** `border-b border-(--border-subtle)` atau `border-t border-(--border-subtle)`

### 8.3 Pola Grid Baku
* **Hero:** `grid gap-10 md:grid-cols-[1.5fr_1fr] md:items-center` (teks dominan kiri, avatar kanan).
* **Statistik GitHub:** `grid grid-cols-2 gap-6 sm:grid-cols-4 md:gap-8`
* **Katalog Proyek:** `grid gap-6 md:grid-cols-2`
* **About / Profil:** `grid gap-12 md:grid-cols-[1fr_1.8fr] md:gap-16 items-start`
* **Experience & Education:** `grid gap-16 md:grid-cols-2`

---

## 9. Spesifikasi Komponen (*Component Standards*)

### 9.1 Tombol (*Buttons & Links*)
* **Primary Button:**
  ```tsx
  <button className="rounded-md border border-(--text-primary) bg-(--text-primary) px-5 py-2.5 text-sm font-medium text-(--bg) transition-opacity hover:opacity-90">
    Lihat Proyek
  </button>
  ```
* **Secondary / Outline Button:**
  ```tsx
  <a className="inline-flex items-center gap-2 rounded-md border border-(--border) px-4 py-2.5 text-sm font-medium text-(--text-primary) transition-colors hover:border-(--text-primary) bg-(--surface)">
    <Download size={15} aria-hidden="true" />
    Download CV
  </a>
  ```
* **Ghost Link Button:**
  ```tsx
  <a className="inline-flex items-center gap-1.5 px-3 py-2.5 text-sm font-medium text-(--text-secondary) transition-colors hover:text-(--text-primary)">
    <Github size={16} aria-hidden="true" />
    GitHub
  </a>
  ```
* **Card Action Buttons:** Tombol kecil di dalam kartu proyek menggunakan ukuran `px-3.5 py-1.5 text-xs font-medium`.

### 9.2 Kartu Proyek (*Featured Project Card*)
* Wadah: `flex flex-col overflow-hidden rounded-lg border border-(--border) bg-(--surface) transition-colors`
* Frame Gambar: `relative aspect-video w-full overflow-hidden border-b border-(--border-subtle) bg-(--bg-secondary)` dengan efek zoom mikro pada gambar: `hover:scale-105 transition-transform duration-300`.
* Badan Kartu: `flex flex-1 flex-col p-6` dengan tech chips dan tombol aksi di footer kartu yang terpisah garis halus `pt-4 border-t border-(--border-subtle)`.

### 9.3 Status Badge & Tech Chips
* **Status Availability Pill:**
  ```tsx
  <div className="inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--surface) px-3 py-1 text-xs text-(--text-muted) w-fit">
    <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
    <span>Tersedia untuk magang & posisi Software Engineer</span>
  </div>
  ```
* **Tech Stack Chip:**
  ```tsx
  <span className="rounded border border-(--border) bg-(--bg) px-2 py-0.5 text-xs font-mono text-(--text-muted) transition-colors hover:border-(--text-primary)">
    {/* Ikon dari Simple Icons / Lucide */}
  </span>
  ```

### 9.4 Formulir & Input (*Contact Form*)
* Input dan textarea: `rounded-md border border-(--border) bg-(--bg) px-3.5 py-2.5 text-sm text-(--text-primary) placeholder:text-(--text-muted) focus:border-(--accent) focus:outline-none transition-colors`.
* Validasi kesalahan wajib jelas, berada tepat di bawah input (`text-xs font-mono text-red-500 mt-1`), dan tidak menghapus isi teks pengguna jika terjadi kegagalan.

### 9.5 Navbar
* Tinggi pasti `h-16` (64px), `sticky top-0 z-50`.
* Indikator rute aktif: `font-medium text-(--text-primary) underline underline-offset-8 decoration-(--accent)`.
* Indikator rute non-aktif: `text-sm text-(--text-secondary) hover:text-(--text-primary)`.
* Tombol toggle tema dengan ikon `Sun` / `Moon` (`h-9 w-9 border border-(--border)`).

---

## 10. Performa & Ketahanan Trafik Tinggi (*High Concurrency & SLA*)

Ketika web mengalami lonjakan trafik (misalnya viral di media sosial atau agregator pengembang):

1. **Incremental Static Regeneration (ISR):**
   * Halaman utama (`app/page.tsx`), proyek (`app/projects/page.tsx`), dan profil (`app/about/page.tsx`) memuat `export const revalidate = 3600;`.
   * Halaman di-render secara statis saat *build-time* dan disimpan pada Vercel Global Edge CDN. Permintaan ribuan pengunjung langsung dijawab dari cache CDN dalam <20ms tanpa mengeksekusi fungsi serverless berulang kali.
2. **Perlindungan Kuota GitHub API:**
   * Panggilan API GitHub menggunakan `next: { revalidate: 3600 }` dengan batas waktu henti (*timeout*) ketat `6000ms` via `AbortController`.
   * Jika kuota habis atau jaringan GitHub bermasalah, fungsi secara instan mengembalikan data *fallback* statis (`FALLBACK_PROFILE`, `FALLBACK_REPOSITORIES`) tanpa memicu status HTTP 500.
3. **Optimasi Aset Gambar:**
   * Menggunakan `next/image` dengan konfigurasi `remotePatterns` untuk domain avatar GitHub resmi.
   * Gambar di atas lipatan layar (*above-the-fold*) memiliki atribut `priority` dan ukuran `sizes` responsif untuk menghindari layout shift (CLS < 0.05).
4. **Vercel Web Analytics Terintegrasi:**
   * Paket resmi `@vercel/analytics` terpasang dan dijalankan via `<Analytics />` di [`app/layout.tsx`](file:///d:/PROJEK/porto/app/layout.tsx) tanpa membebani thread utama.

---

## 11. Keamanan (*Security Hardening*)
1. **HTTP Security Headers:**
   Dikonfigurasi aktif di [`next.config.ts`](file:///d:/PROJEK/porto/next.config.ts):
   * `Strict-Transport-Security`: `max-age=63072000; includeSubDomains; preload` (Paksa HTTPS penuh).
   * `X-Frame-Options`: `DENY` (Mencegah serangan *clickjacking*).
   * `X-Content-Type-Options`: `nosniff` (Mencegah serangan *MIME-sniffing*).
   * `Referrer-Policy`: `strict-origin-when-cross-origin`.
   * `Permissions-Policy`: `camera=(), microphone=(), geolocation=(), interest-cohort=()`.
2. **Sanitasi URL Eksternal:**
   Semua URL repositori GitHub divalidasi ketat lewat fungsi `sanitizeGithubUrl`: hanya protokol `https:` dan hostname `github.com` yang diizinkan untuk mencegah serangan *open redirect* atau injeksi skema berbahaya (`javascript:`).
3. **Penyembunyian Kredensial:**
   Token GitHub (opsional) hanya dibaca di lingkungan server melalui variabel privat `process.env.GITHUB_TOKEN` dan tidak pernah diekspos ke client bundle (`NEXT_PUBLIC_`).

---

## 12. Panduan Tulisan Antarmuka (*UI Copywriting*)
* Bahasa yang digunakan: Indonesia formal-teknis, lugas, bersahabat, dan profesional.
* Tidak menggunakan istilah sensasional yang tidak dapat dibuktikan.
* Data metrik yang disajikan (jumlah repositori, followers, bahasa, komit terbaru) adalah data nyata hasil komputasi langsung dari profil GitHub.

---

## 13. Pre-Ship Checklist (Wajib Sebelum Merge/Deploy)

Sebelum merilis perubahan baru, periksa checklist berikut:

- [ ] **Banned Elements:** Tidak ada gradien warna jenuh ungu-oranye, tidak ada shadow hitam pekat, tidak ada emoji sebagai icon UI.
- [ ] **Token Only:** Tidak ada warna arbitrer Tailwind (`bg-gray-*`, `text-black`, `[#hex]`). Semua memakai token semantik `bg-(--surface)`, `text-(--text-primary)`, dll.
- [ ] **Dual-Theme Test:** Tampilan diuji dan terbaca sempurna di Mode Gelap (`[data-theme="dark"]`) dan Mode Terang (`[data-theme="light"]`).
- [ ] **Kontainer Konsisten:** Semua seksi dibungkus `mx-auto max-w-5xl px-6`.
- [ ] **Dual-Font System:** Narasi menggunakan Bricolage Grotesque; data teknis, label, chip, dan angka menggunakan Space Mono (`font-mono`).
- [ ] **Aksesibilitas (A11y):** Fokus keyboard terlihat jelas (`:focus-visible`), link eksternal menyertakan `rel="noopener noreferrer"`, gambar memiliki atribut `alt` deskriptif.
- [ ] **Reduced Motion:** Animasi non-aktif ketika pengguna menyalakan `prefers-reduced-motion`.
- [ ] **Performa & Keamanan:** Rute dinamis memiliki `revalidate = 3600`, sanitasi URL aktif, `npm run lint` dan `npm run build` sukses tanpa error.
- [ ] **Analytics Aktif:** Komponen `<Analytics />` terpasang di layout utama.

---

## 14. Protokol AI Agent (*AI Agent Instructions*)
Ketika Anda (agen AI) diminta melakukan perubahan atau membuat fitur baru pada web ini:
1. Baca dan patuhi aturan di §0, §1, §2, dan §8 dokumen ini sebelum menulis sebaris kode pun.
2. Gunakan selalu token CSS semantik dari sistem tema. Jangan pernah mengarang kode warna baru.
3. Pertahankan lebar maksimal `max-w-5xl` dan padding `px-6` pada seluruh kontainer seksi.
4. Jangan pernah menghapus komentar atau dokumentasi yang sudah ada kecuali diminta.
5. Jalankan `npm run lint` untuk memastikan tidak ada pelanggaran sintaks atau tipe data setelah Anda melakukan perubahan.
