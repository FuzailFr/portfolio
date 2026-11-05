import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Cegah browser menebak MIME type dari konten respons.
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Tolak embedding halaman ini di iframe dari domain lain.
          { key: "X-Frame-Options", value: "DENY" },
          // Kirim full URL hanya ke same-origin; ke cross-origin hanya origin saja.
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Batasi akses ke sensor, kamera, mikrofon, dan geolokasi.
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          // Paksa browser menggunakan koneksi aman HTTPS
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
