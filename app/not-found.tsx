import Link from "next/link";
import { FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-24 text-center">
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-(--border) bg-(--surface) text-(--text-muted) mb-4">
        <FileQuestion size={24} aria-hidden="true" />
      </div>

      <span className="text-xs font-mono uppercase tracking-wider text-(--accent)">
        404 // Halaman Tidak Ditemukan
      </span>

      <h1 className="mt-2 text-2xl font-bold tracking-tight text-(--text-primary) sm:text-3xl">
        Rute Tidak Tersedia
      </h1>

      <p className="mt-3 max-w-md text-sm leading-relaxed text-(--text-secondary)">
        Tautan yang Anda tuju mungkin telah dipindahkan, dihapus, atau alamat URL yang dimasukkan kurang tepat.
      </p>

      <div className="mt-8">
        <Link
          href="/"
          className="rounded border border-(--text-primary) bg-(--text-primary) px-5 py-2.5 text-sm font-medium text-(--bg) hover:opacity-90 transition-opacity"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
