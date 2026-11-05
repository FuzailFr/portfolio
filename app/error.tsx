"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RotateCcw } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error secara internal di console (tanpa membocorkan data sensitif)
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-24 text-center">
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-red-500/20 bg-red-500/10 text-red-500 mb-4">
        <AlertCircle size={24} aria-hidden="true" />
      </div>

      <span className="text-xs font-mono uppercase tracking-wider text-(--text-muted)">
        500 // Terjadi Kendala
      </span>

      <h1 className="mt-2 text-2xl font-bold tracking-tight text-(--text-primary) sm:text-3xl">
        Terjadi Kesalahan pada Halaman
      </h1>

      <p className="mt-3 max-w-md text-sm leading-relaxed text-(--text-secondary)">
        Sistem mengalami gangguan saat memuat konten. Silakan coba muat ulang komponen atau kembali ke halaman beranda.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => reset()}
          className="inline-flex items-center gap-2 rounded border border-(--text-primary) bg-(--text-primary) px-4 py-2 text-sm font-medium text-(--bg) hover:opacity-90 transition-opacity"
        >
          <RotateCcw size={15} aria-hidden="true" />
          Coba Lagi
        </button>

        <Link
          href="/"
          className="rounded border border-(--border) bg-(--surface) px-4 py-2 text-sm font-medium text-(--text-primary) hover:border-(--text-primary) transition-colors"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
