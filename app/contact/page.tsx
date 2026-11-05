import type { Metadata } from "next";
import Contact from "@/components/Contact";
import Support from "@/components/Support";

export const metadata: Metadata = {
  title: "Kontak & Dukungan",
  description:
    "Hubungi Fuzail Fazle Rabbi untuk peluang kerja sama rekayasa perangkat lunak atau kirimkan dukungan pengembangan.",
};

export default function ContactPage() {
  return (
    <div className="py-8">
      <Contact />
      <Support />
    </div>
  );
}
