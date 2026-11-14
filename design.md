# 📐 DESIGN.md — Universal Web UI Specification (Technical Archival / Slate & Lead)
> **Standard:** Universal UI Spec (Dark-First, Anti-AI-Slop, High-Performance, Accessible)  
> **Aesthetic:** *Technical Archival / Brutalist-leaning Minimalist / Engineered Precision*  
> **Compatibility:** Framework-Agnostic (Next.js, React, Vue, Svelte, Astro, HTML/CSS, Tailwind v3/v4, CSS Modules)  
> **Status:** Canonical Single Source of Truth (SSOT). File ini menjadi acuan mutlak bagi developer dan AI coding agent dalam merancang serta merevisi antarmuka web apa pun.

---

## 0. Filosofi & Karakter Desain (*Core Principles*)

1. **Fungsionalitas Mengungguli Dekorasi (*Function Over Fluff*):**  
   Setiap elemen harus memiliki tujuan yang jelas. Jika suatu elemen tidak membawa informasi atau fungsi interaksi, **hapus**. Tidak ada hiasan mengambang (*decorative blobs/orbs*) yang tidak bermakna.
2. **Kepadatan Informasi yang Tenang (*Dense but Calm*):**  
   Antarmuka menyajikan informasi teknis yang padat dan terstruktur rapi tanpa membuat mata cepat lelah. Menghindari warna hitam pekat (`#000000`) dan putih menyilaukan (`#ffffff`) pada kanvas utama.
3. **Aturan Satu Aksen (*One Accent Rule*):**  
   Gunakan **satu warna aksen utama** (biru teknikal). Warna aksen hanya boleh menempati **≤ 5%** area layar (aksi primer, status aktif, fokus). Warna lain hanya hadir untuk membawa makna semantik fungsional (sukses, peringatan, destruktif, info).
4. **Tipografi Berperan Ganda (*Dual-Role Typography*):**  
   Kombinasi font sans humanistik/grotesque untuk narasi yang mudah dibaca, dipadukan dengan font monospace untuk data numerik, kode, label teknis, chip, dan metadata.
5. **Dual-Theme First-Class:**  
   Mode Gelap (*Slate-Charcoal*) dan Mode Terang (*Paper & Lead*) dirancang dengan bobot estetika dan kontras keterbacaan yang setara (kontras teks utama ke kanvas ~12:1).
6. **Alami & Hidup (*Soft & Alive*):**  
   Kedalaman visual diciptakan melalui *hairline border* (1px) dan bayangan tipis bertingkat; bukan bayangan hitam pekat tebal atau efek 3D berlebihan. Gerakan mikro berlangsung cepat dan tenang (120ms–280ms).
7. **Pemisahan Peran Bersih (*Clean Separation*):**  
   Struktur (HTML/JSX), visual (CSS Tokens), dan logika perilaku (JS/TS) terpisah rapi. Tidak ada nilai warna/spasi yang di-*hardcode* di dalam komponen.

---

## 1. Daftar Terlarang (*Anti-AI-Slop Rules*)

DILARANG KERAS menerapkan elemen-elemen berikut dalam kode maupun desain antarmuka:

* 🚫 **Visual Slop:**
  * Gradien warna jenuh bergaya template AI (ungu-kebiruan, oranye-pink, pelangi, mesh gradient acak).
  * Efek *glassmorphism* tebal di semua tempat (maksimal 1 lapisan tipis melayang per halaman).
  * Bayangan hitam pekat pekat (*hard black shadows*), pendaran neon tebal (*thick glows*), dan *neumorphism*.
  * Elemen dekoratif mengambang tanpa fungsi (bola 3D, partikel melayang, ornamen sudut).
  * Emoji sebagai ikon UI (wajib gunakan keluarga ikon garis konsisten seperti *Lucide*, *Simple Icons*, atau *Radix Icons*).
  * Radius sudut ekstrem sembarangan (seperti `rounded-3xl` pada kartu informasi biasa).
  * Teks bergradien (*gradient text*).
* 🚫 **Layout Slop:**
  * Layout klise: Hero generik → 3 kartu identik → testimoni palsu berulang → CTA raksasa.
  * Semua elemen diposisikan di tengah (*everything centered*).
  * Padding seragam tanpa variasi irama antar-seksi.
  * Badge dekoratif "✨ New" atau "✨ AI" tanpa kegunaan fungsional.
* 🚫 **Tipografi Slop:**
  * Menggunakan digit proporsional pada tabel atau data metrik numerik (wajib `tabular-nums` atau `font-mono`).
  * Menggunakan huruf kapital (*uppercase*) atau penambahan spasi (*letter-spacing*) pada skrip tanpa huruf besar-kecil (Arab, CJK, Thai, Devanagari).
* 🚫 **Copywriting Slop:**
  * Istilah dengung klise: *"Elevate / Unlock / Seamless / Revolutionize / Next-gen / All-in-one / Cutting-edge"*.
  * Angka palsu yang dibulatkan (*"10,000+ Happy Users"*, *"99.9% Uptime"*).
  * Teks *Lorem Ipsum* atau penggunaan tanda seru ("!") berlebihan.
* 🚫 **Gerakan & Animasi Slop:**
  * Efek *fade-up* berulang pada setiap elemen di setiap scroll.
  * Efek hover liar seperti `hover:scale-105 -translate-y-2`.
  * Animasi berputar (*spinners*) di setiap pemuatan (gunakan *skeleton loaders* proporsional).
* 🚫 **Kode Slop:**
  * Hardcoded warna hex atau ukuran piksel di dalam komponen (`style={{ color: '#123456' }}` atau `text-[#123456]`).
  * Penggunaan properti fisik non-logis (`left`, `right` alih-alih `inline-start`, `inline-end`).
  * Penggunaan `!important` sembarangan (kecuali untuk reset `prefers-reduced-motion` dan media cetak).

---

## 2. Arsitektur Token Warna & Tema (*Design Tokens*)

Variabel CSS adalah standar kanonikal. Salin blok ini ke stylesheet global proyek Anda (misalnya `globals.css` atau `tokens.css`):

```css
:root {
  /* Skala Font Default */
  --font-sans: "Bricolage Grotesque", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mono: "Space Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  --label-case: uppercase;
  --label-track: 0.08em;

  /* Skala Radius Sudut (Border Radius) */
  --r-xs: 4px;      /* Badge, chip tag, input checkbox */
  --r-sm: 6px;      /* Tombol, input teks, form control */
  --r-md: 8px;      /* Kartu standar, panel */
  --r-lg: 12px;     /* Modal dialog, dropdown popover */
  --r-xl: 16px;     /* Avatar container, frame khusus */
  --r-full: 9999px; /* Status pill, badge lingkaran */

  /* Timing & Easing Transisi */
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

/* =========================================================
   1. MODE GELAP (Default: Slate-Charcoal Technical Archival)
   ========================================================= */
:root,
[data-theme="dark"] {
  color-scheme: dark;
  --bg: #0f1115;                  /* Kanvas utama (gelap bersahabat, bukan #000) */
  --bg-secondary: #16191f;        /* Kanvas selang-seling / frame media */
  --surface: #1a1e26;             /* Permukaan kartu, panel, badge elevated */
  --surface-hover: #222731;       /* Permukaan saat kursor diarahkan */
  --surface-active: #2a313e;      /* Permukaan saat ditekan */

  --border: #262b35;              /* Border batas kartu & tombol */
  --border-subtle: #1c212a;       /* Garis pemisah antar seksi */
  --border-strong: #3b4352;       /* Border tegas kontrol interaktif */
  --overlay: rgba(10, 12, 16, 0.65);

  --text-primary: #f1f3f5;        /* Judul H1-H3, teks prioritas tinggi */
  --text-secondary: #8b949e;      /* Teks paragraf, deskripsi konten */
  --text-muted: #626c79;          /* Metadata teknis, copyright, footnote */
  --text-off: #434a56;            /* Teks nonaktif / placeholder */

  --accent: #60a5fa;              /* Biru teknikal sejuk (Cool Technical Blue) */
  --accent-muted: rgba(96, 165, 250, 0.12);
  --accent-line: rgba(96, 165, 250, 0.35);
  --on-accent: #0b192c;           /* Teks kontras di atas latar aksen */

  --success: #34d399;             /* Status sukses / live */
  --warning: #fbbf24;             /* Status perhatian */
  --danger: #f87171;              /* Status error / destruktif */
  --info: #60a5fa;

  --hero-gradient: linear-gradient(180deg, #0a0c0e 0%, #16191f 100%);
  --shadow-rgb: 0 0 0;
  --sh-sm: 0 1px 2px rgba(var(--shadow-rgb), 0.25);
  --sh-md: 0 2px 6px rgba(var(--shadow-rgb), 0.3), 0 8px 16px -4px rgba(var(--shadow-rgb), 0.35);
  --hl-top: inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

/* =========================================================
   2. MODE TERANG (Paper & Lead Technical Archival)
   ========================================================= */
[data-theme="light"] {
  color-scheme: light;
  --bg: #fafaf9;                  /* Kertas hangat bersih (bukan #fff murni) */
  --bg-secondary: #f3f4f6;        /* Latar selang-seling */
  --surface: #ffffff;             /* Permukaan kartu putih bersih */
  --surface-hover: #f9fafb;
  --surface-active: #f3f4f6;

  --border: #e2e5e9;              /* Border kartu */
  --border-subtle: #eceef1;       /* Divider pemisah seksi */
  --border-strong: #cbd5e1;
  --overlay: rgba(30, 28, 24, 0.45);

  --text-primary: #111827;        /* Teks arang pekat (Slate Lead) */
  --text-secondary: #4b5563;      /* Teks deskripsi */
  --text-muted: #6b7280;          /* Teks metadata */
  --text-off: #9ca3af;

  --accent: #2563eb;              /* Biru royal hidup (Vibrant Royal Blue) */
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

---

## 3. Cara Penggunaan Token di Komponen

### Dalam Tailwind CSS (v4 & v3 via Arbitrary Properties)
```tsx
// Background
className="bg-(--bg)"           // Latar kanvas utama
className="bg-(--bg-secondary)" // Latar seksi sekunder
className="bg-(--surface)"      // Latar kartu atau panel

// Teks
className="text-(--text-primary)"   // Judul utama H1-H3
className="text-(--text-secondary)" // Paragraf isi
className="text-(--text-muted)"     // Metadata teknis
className="text-(--accent)"         // Teks aksen biru

// Border & Garis Pembatas
className="border-(--border)"        // Border kartu / form / tombol
className="border-(--border-subtle)" // Garis halus pemisah seksi
```

### Dalam Plain CSS / CSS Modules
```css
.card {
  background-color: var(--surface);
  border: 1px solid var(--border);
  color: var(--text-primary);
  border-radius: var(--r-md);
  box-shadow: var(--sh-sm);
}

.divider {
  border-bottom: 1px solid var(--border-subtle);
}
```

---

## 4. Tipografi & Hirarki Teks (*Typography Scale*)

### 4.1 Pasangan Font (*Font Pairing*)
* **Display & Body Text:** Font Sans-serif modern dan tegas berbobot humanis (`Bricolage Grotesque`, `Instrument Sans`, atau `Plus Jakarta Sans`).
* **Technical & Metrics Text:** Font Monospace presisi (`Space Mono`, `JetBrains Mono`, atau `IBM Plex Mono`).

### 4.2 Skala Hirarki Standar (Unit `rem` berbasis 16px)

| Peran Elemen | Ukuran & Weight Tailwind | Font Family | Keterangan |
|---|---|---|---|
| **Hero Title (H1)** | `text-4xl sm:text-6xl font-extrabold tracking-tight` | Sans | Judul utama paling menonjol pada halaman |
| **Page Title (H1)** | `text-3xl sm:text-5xl font-extrabold tracking-tight` | Sans | Judul utama sub-halaman katalog/fitur |
| **Section Title (H2)** | `text-2xl sm:text-3xl font-extrabold tracking-tight` | Sans | Judul setiap seksi konten |
| **Card Title (H3)** | `text-xl font-bold tracking-tight` | Sans | Judul kartu fitur/proyek/artikel |
| **Eyebrow / Overline** | `text-xs font-mono uppercase tracking-wider text-(--accent)` | **Mono** | Label kategori kecil di atas judul seksi |
| **Body (Reguler)** | `text-base leading-relaxed text-(--text-secondary)` | Sans | Teks paragraf utama (line-height 1.6) |
| **Body (Kompak)** | `text-sm leading-relaxed text-(--text-secondary)` | Sans | Teks penjelasan di dalam kartu |
| **Technical Metadata** | `text-xs font-mono text-(--text-muted)` | **Mono** | Tanggal, kode, tag, status, persentase |
| **Numeric Counters** | `text-2xl sm:text-3xl font-bold font-mono tracking-tight` | **Mono** | Angka metrik statistik (`tabular-nums`) |

> [!TIP]
> Tambahkan `letter-spacing: -0.01em;` pada elemen `body` untuk menghasilkan kesan tipografi padat, tegas, dan modern khas publikasi teknis.

---

## 5. Tata Letak, Grid, & Irama Spasi (*Layout Rhythm*)

### 5.1 Kontainer Standar (Konsistensi Mutlak)
Semua halaman dan seksi **HARUS** dibungkus dalam kontainer berpusat:
```tsx
<div className="mx-auto max-w-5xl px-6">
  {/* Konten halaman */}
</div>
```
* **Lebar Maksimal:** `max-w-5xl` (1024px) untuk konten editorial/portofolio, atau `max-w-6xl` (1152px) untuk dashboard lebar.
* **Padding Horisontal:** `px-6` (24px) konsisten di semua resolusi.

### 5.2 Irama Spasi Vertikal
* **Area Hero:** `py-20 md:py-28`
* **Seksi Halaman Reguler:** `py-16` atau `py-20`
* **Data Strip / Marquee / Ringkas:** `py-8` atau `py-12`
* **Pemisah Antar-Seksi:** Gunakan garis struktural `border-b border-(--border-subtle)` atau `border-t border-(--border-subtle)`.

### 5.3 Pola Grid Standar
* **Hero Asimetris (2 Kolom):** `grid gap-10 md:grid-cols-[1.5fr_1fr] md:items-center` (Teks dominan di kiri, media visual di kanan).
* **Grid Kartu Fitur / Proyek:** `grid gap-6 md:grid-cols-2` atau `grid gap-8 md:grid-cols-2 lg:grid-cols-3`.
* **Strip Metrik Statistik:** `grid grid-cols-2 gap-6 sm:grid-cols-4 md:gap-8`.

---

## 6. Spesifikasi Komponen UI Baku (*UI Component Specs*)

### 6.1 Tombol (*Buttons*)

#### Primary Button (Inverted High-Contrast)
Tombol aksi utama bernilai kontras tinggi (membalik warna teks ke background):
```tsx
<button className="rounded-md border border-(--text-primary) bg-(--text-primary) px-5 py-2.5 text-sm font-medium text-(--bg) transition-opacity hover:opacity-90">
  Aksi Utama
</button>
```

#### Secondary / Outline Button
Tombol pendukung dengan border tegas dan latar surface:
```tsx
<button className="inline-flex items-center gap-2 rounded-md border border-(--border) bg-(--surface) px-4 py-2.5 text-sm font-medium text-(--text-primary) transition-colors hover:border-(--text-primary)">
  Aksi Sekunder
</button>
```

#### Ghost Link Button
Tautan ringan tanpa batas kotak:
```tsx
<a className="inline-flex items-center gap-1.5 px-3 py-2.5 text-sm font-medium text-(--text-secondary) transition-colors hover:text-(--text-primary)">
  Tautan Detail →
</a>
```

#### Compact Action Button (Untuk Dalam Kartu)
```tsx
// Live / Primary Action
<a className="rounded border border-(--text-primary) bg-(--text-primary) px-3.5 py-1.5 text-xs font-medium text-(--bg) transition-opacity hover:opacity-90 inline-flex items-center gap-1.5">
  Live Demo ↗
</a>

// Secondary Action
<a className="rounded border border-(--border) bg-(--bg) px-3 py-1.5 text-xs font-medium text-(--text-primary) transition-colors hover:border-(--text-primary)">
  Dokumentasi
</a>
```

---

### 6.2 Kartu Konten (*Universal Card Pattern*)

Struktur kartu terdiri dari 3 bagian: Frame Media (atas), Badan Konten (tengah), dan Tombol Aksi (bawah):
```tsx
<article className="flex flex-col overflow-hidden rounded-lg border border-(--border) bg-(--surface) transition-colors">
  {/* 1. Media Frame (Aspek Rasio 16:9 dengan Fallback Terminal) */}
  <div className="relative aspect-video w-full overflow-hidden border-b border-(--border-subtle) bg-(--bg-secondary)">
    {hasImage ? (
      <img src="..." alt="..." className="object-cover transition-transform duration-300 hover:scale-105" />
    ) : (
      /* Fallback Terminal Frame jika gambar belum ada */
      <div className="flex h-full w-full flex-col justify-between p-5 bg-(--bg-secondary)/60 font-mono text-xs text-(--text-muted)">
        <div className="flex items-center justify-between border-b border-(--border-subtle) pb-3">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-red-500/80" />
            <span className="h-2 w-2 rounded-full bg-amber-500/80" />
            <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-[11px]">preview // identifier</span>
          </div>
          <span className="text-[10px] uppercase text-(--accent)">Active</span>
        </div>
        <div className="text-center font-semibold text-(--text-primary)">
          Pratinjau Antarmuka
        </div>
        <div className="flex justify-between border-t border-(--border-subtle) pt-2 text-[11px]">
          <span>status: ready</span>
          <span className="text-(--accent)">online</span>
        </div>
      </div>
    )}
  </div>

  {/* 2. Badan Konten */}
  <div className="flex flex-1 flex-col p-6">
    <h3 className="text-xl font-bold tracking-tight text-(--text-primary)">Judul Kartu</h3>
    <p className="mt-2 flex-1 text-sm leading-relaxed text-(--text-secondary)">
      Deskripsi ringkas yang menjelaskan manfaat atau fungsi fitur ini secara jelas.
    </p>

    {/* Baris Chip Tag */}
    <div className="mt-4 flex flex-wrap gap-1.5">
      <span className="rounded border border-(--border) bg-(--bg) px-2 py-0.5 text-xs font-mono text-(--text-muted)">
        TypeScript
      </span>
    </div>

    {/* 3. Footer Tombol Aksi */}
    <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-(--border-subtle) pt-4">
      {/* Tombol aksi */}
    </div>
  </div>
</article>
```

---

### 6.3 Status Badges & Chips

#### Status Availability Pill (dengan Titik Berkedip)
```tsx
<div className="inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--surface) px-3 py-1 text-xs text-(--text-muted) w-fit">
  <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
  <span>Sistem Berjalan Normal / Siap Digunakan</span>
</div>
```

#### Tech / Category Chip
```tsx
<span className="rounded border border-(--border) bg-(--bg) px-2 py-0.5 text-xs font-mono text-(--text-muted) transition-colors hover:border-(--text-primary)">
  Label Chip
</span>
```

---

### 6.4 Formulir & Input (*Form Controls*)
* **Input Text & Textarea:**
  ```tsx
  <input 
    type="text"
    className="w-full rounded-md border border-(--border) bg-(--bg) px-3.5 py-2.5 text-sm text-(--text-primary) placeholder:text-(--text-muted) focus:border-(--accent) focus:outline-none transition-colors"
  />
  ```
* **Label Input:** `block text-xs font-mono text-(--text-muted) mb-1.5`
* **Pesan Kesalahan (Error):** `text-xs font-mono text-red-500 mt-1`

---

### 6.5 Header & Navbar
* **Tinggi Baku:** `h-16` (64px).
* **Posisi:** `sticky top-0 z-50`.
* **Latar Belakang:** `bg-(--bg)/95 backdrop-saturate-100 border-b border-(--border-subtle)`.
* **Link Aktif:** `font-medium text-(--text-primary) underline underline-offset-8 decoration-(--accent)`.
* **Link Non-Aktif:** `text-sm text-(--text-secondary) hover:text-(--text-primary) transition-colors`.

---

## 7. Sistem Anti-Kedipan (*Zero-FOUC Theme Engine*)

Agar saat memuat halaman tidak terjadi kedipan putih di mode gelap (*Flash of Unstyled Content*), suntikkan script kecil ini di bagian paling atas `<head>` sebelum konten di-*render*:

```html
<script>
  (function () {
    try {
      var stored = localStorage.getItem("theme");
      var theme = stored === "light" || stored === "dark" ? stored : "dark";
      document.documentElement.setAttribute("data-theme", theme);
    } catch (e) {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  })();
</script>
```

Fungsi toggle pergantian tema pada tombol:
```javascript
function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") || "dark";
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  try {
    localStorage.setItem("theme", next);
  } catch (e) {}
}
```

---

## 8. Gerakan & Aksesibilitas (*Motion & A11y*)

### 8.1 Transisi Mikro Global
Semua elemen interaktif mewarisi transisi mikro yang halus dan cepat:
```css
body, button, a, input, textarea {
  transition: background-color 150ms ease, color 150ms ease, border-color 150ms ease, opacity 150ms ease;
}
```

### 8.2 Animasi Pemuatan Halaman (*Page Entrance*)
Gunakan kurva cubic-bezier tenang:
```css
@keyframes pageEntrance {
  0% {
    opacity: 0.85;
    transform: translateY(4px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-entrance {
  animation: pageEntrance 280ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
```

### 8.3 Kepatuhan Aksesibilitas & `prefers-reduced-motion`
Wajib menyertakan reset bila pengguna mengaktifkan mode minim-gerakan di perangkat:
```css
:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto !important;
  }
  .animate-entrance,
  .animate-marquee {
    animation: none !important;
    transform: none !important;
  }
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 9. Checklist Anti-Drift untuk Proyek Web Baru

Gunakan daftar periksa ini untuk memvalidasi bahwa antarmuka web baru Anda mematuhi standar desain ini sebelum dirilis:

- [ ] **Warna Semantik 100%:** Tidak ada penggunaan warna arbitrer Tailwind (`bg-zinc-*`, `text-gray-*`, `[#hex]`). Seluruh komponen menggunakan variabel `bg-(--surface)`, `text-(--text-primary)`, `border-(--border)`, dll.
- [ ] **Dual-Theme Tested:** Antarmuka telah diuji dan memiliki kontras tajam di Mode Gelap (`[data-theme="dark"]`) dan Mode Terang (`[data-theme="light"]`).
- [ ] **Kontainer Konsisten:** Konten utama dibungkus pembatas `mx-auto max-w-5xl px-6`.
- [ ] **Hirarki Tipografi:** Teks narasi menggunakan Sans Grotesque, metrik angka dan label teknis menggunakan Monospace (`tabular-nums`).
- [ ] **Pemisah Seksi:** Pembatas antar-seksi menggunakan border struktural halus `border-(--border-subtle)`.
- [ ] **Status Indikator:** Badge ketersediaan menggunakan pulse emerald hidup (`bg-emerald-500 animate-pulse`).
- [ ] **Tidak Ada Elemen Terlarang:** Bersih dari emoji sebagai icon, bebas dari gradien pelangi/ungu-oranye, dan bebas dari bayangan hitam tebal.
- [ ] **Zero-FOUC:** Skrip inisialisasi tema telah disematkan di `<head>`.
- [ ] **Aksesibilitas (A11y):** Indikator fokus `:focus-visible` terlihat jelas, rasio kontras teks memenuhi WCAG 2.2 AA+.

---

## 10. Protokol untuk AI Coding Agent (*AI Prompt Injection*)

Jika Anda memberikan file ini kepada AI coding assistant (Cursor, Antigravity, Claude, Copilot, v0):
> *"Ikuti seluruh spesifikasi di DESIGN.md secara ketat. Dilarang mengarang warna baru atau menggunakan class warna Tailwind hardcoded. Selalu gunakan token semantik `bg-(--bg)`, `bg-(--surface)`, `text-(--text-primary)`, `border-(--border)`, dan terapkan prinsip anti-AI-slop pada setiap komponen yang Anda buat."*
