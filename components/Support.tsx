import Image from "next/image";

const SAWERIA_PROFILE_URL = "https://saweria.co/Grav3exx";

export default function Support() {
  return (
    <section id="support" className="border-t border-(--border-subtle) py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <h2 className="text-xl font-bold tracking-tight text-(--text-primary)">
          Dukungan Pengembang
        </h2>

        <p className="mt-4 max-w-xl text-base leading-relaxed text-(--text-secondary)">
          Jika kamu merasa proyek open-source atau karya saya bermanfaat, kamu dapat memberikan apresiasi dan dukungan pengembangan melalui Saweria.
        </p>

        <div className="mt-8 w-44 overflow-hidden rounded-md border p-3 border-(--border) bg-(--surface)">
          <Image
            src="/images/saweria-qr.png"
            alt="Kode QR Saweria untuk mendukung Fuzail Fazle Rabbi"
            width={370}
            height={370}
            className="h-auto w-full rounded"
          />
        </div>

        <a
          href={SAWERIA_PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1.5 rounded border border-(--border) px-4 py-2 text-sm font-medium text-(--text-primary) transition-colors hover:border-(--text-primary) bg-(--surface)"
        >
          Dukung via Saweria
        </a>
      </div>
    </section>
  );
}
