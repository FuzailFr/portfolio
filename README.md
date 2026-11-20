# Portfolio

Personal portfolio and technical showcase of **Fuzail Fazle Rabbi**. Built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4.

---

## Features

- **App Router Architecture:** Modular routing (`/`, `/projects`, `/about`, `/contact`) with custom error and 404 boundaries.
- **Server-Side GitHub Integration:** Dynamic repository data, language stats, and commit activity fetched server-side with Incremental Static Regeneration (1-hour revalidation) and offline fallbacks.
- **Design & Accessibility:** Dark and Light mode without flicker (zero-FOUC), WCAG AA/AAA contrast adherence, and `prefers-reduced-motion` compliance.
- **Production Hardening:** Strict HTTP headers (HSTS, X-Frame-Options, no-sniff), runtime payload validation with Zod, and URL sanitization.

---

## Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | Next.js 16 (App Router, Turbopack) |
| **UI Library** | React 19 |
| **Language** | TypeScript 5 (Strict Mode) |
| **Styling** | Tailwind CSS v4 & PostCSS |
| **Icons** | Lucide React & Simple Icons |
| **Analytics** | Vercel Analytics |

---

## Getting Started

### Prerequisites
Node.js 18.18+ or later.

### Installation

```bash
# 1. Clone repository
git clone https://github.com/FuzailFr/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Type Check & Build

```bash
npx tsc --noEmit
npm run build
```

---

## Environment Variables

Create a `.env.local` file in the root directory if needed:

```env
# Canonical site URL for metadata
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app

# Optional: GitHub token to increase API rate limit (60 -> 5,000 req/hr)
GITHUB_TOKEN=
```

---

## Deployment

Optimized for deployment on [Vercel](https://vercel.com):

1. Import the repository in the Vercel Dashboard.
2. (Optional) Set `NEXT_PUBLIC_SITE_URL` and `GITHUB_TOKEN` under **Environment Variables**.
3. Deploy. Automatic builds and SSL certificates are provisioned on every push to `main`.
