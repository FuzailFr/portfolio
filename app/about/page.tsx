import type { Metadata } from "next";
import About from "@/components/About";
import Experience from "@/components/Experience";

export const metadata: Metadata = {
  title: "Tentang & Pengalaman",
  description:
    "Profil profesional, keahlian teknis, riwayat pengalaman kerja, dan latar belakang pendidikan Fuzail Fazle Rabbi.",
};

export const revalidate = 3600;

export default function AboutPage() {
  return (
    <div className="py-8">
      <About />
      <Experience />
    </div>
  );
}
