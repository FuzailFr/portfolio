import type { Metadata } from "next";
import Script from "next/script";
import { Bricolage_Grotesque, Space_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Fuzail Fazle Rabbi — Software Engineer",
    template: "%s | Fuzail Fazle Rabbi",
  },
  description:
    "Portfolio Fuzail Fazle Rabbi, Software Engineer dan Information Technology Student dengan fokus pada Backend Systems dan Artificial Intelligence.",
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Fuzail Fazle Rabbi — Software Engineer",
    description:
      "Software Engineer dengan fokus pada Backend Systems dan Artificial Intelligence. Berbasis di Bekasi, Indonesia.",
    siteName: "Fuzail Fazle Rabbi",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fuzail Fazle Rabbi — Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fuzail Fazle Rabbi — Software Engineer",
    description:
      "Software Engineer dengan fokus pada Backend Systems dan Artificial Intelligence.",
    images: ["/og-image.png"],
  },
  authors: [{ name: "Fuzail Fazle Rabbi", url: "https://github.com/FuzailFr" }],
  creator: "Fuzail Fazle Rabbi",
};

const THEME_INIT_SCRIPT = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var theme = stored === "light" || stored === "dark" ? stored : "dark";
    document.documentElement.setAttribute("data-theme", theme);
  } catch (e) {
    document.documentElement.setAttribute("data-theme", "dark");
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" data-theme="dark" className={`${bricolage.variable} ${spaceMono.variable}`} suppressHydrationWarning>
      <head>
        <Script
          id="theme-initializer"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }}
        />
      </head>
      <body className="antialiased flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 animate-entrance">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
