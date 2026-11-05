"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Moon, Sun, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

type Theme = "dark" | "light";

export default function Navbar() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof document === "undefined") return "dark";
    const current = document.documentElement.getAttribute("data-theme");
    return current === "light" ? "light" : "dark";
  });
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // localStorage fallback
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-(--bg)/95 backdrop-saturate-100 border-(--border-subtle)">
      <nav
        aria-label="Navigasi Utama"
        className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6"
      >
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-(--text-primary)"
        >
          fuzail.dev
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`text-sm transition-colors ${
                  isActive
                    ? "font-medium text-(--text-primary) underline underline-offset-8 decoration-(--accent)"
                    : "text-(--text-secondary) hover:text-(--text-primary)"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Ganti ke mode terang" : "Ganti ke mode gelap"}
            className="flex h-9 w-9 items-center justify-center rounded border text-(--text-secondary) transition-colors hover:text-(--text-primary) border-(--border)"
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>
        </div>

        {/* Mobile Navigation Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Ganti ke mode terang" : "Ganti ke mode gelap"}
            className="flex h-9 w-9 items-center justify-center rounded border text-(--text-secondary) border-(--border)"
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="flex h-9 w-9 items-center justify-center rounded border text-(--text-secondary) border-(--border)"
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t px-6 py-4 md:hidden border-(--border-subtle) bg-(--bg)"
        >
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={`text-sm transition-colors ${
                    isActive
                      ? "font-medium text-(--text-primary)"
                      : "text-(--text-secondary) hover:text-(--text-primary)"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
