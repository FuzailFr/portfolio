import { Github, Linkedin, Mail } from "lucide-react";

const GITHUB_URL = "https://github.com/FuzailFr";
const LINKEDIN_URL = "https://www.linkedin.com/in/fuzail-fazle-rabbi-b73608429";
const EMAIL = "fuzailfr16@gmail.com";

const FOOTER_LINKS = [
  { label: "GitHub", href: GITHUB_URL, icon: Github },
  { label: "LinkedIn", href: LINKEDIN_URL, icon: Linkedin },
  { label: "Email", href: `mailto:${EMAIL}`, icon: Mail },
];

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-(--border-subtle) mt-auto">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 sm:px-8 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-(--text-muted)">
          © {CURRENT_YEAR} Fuzail Fazle Rabbi
        </p>

        <div className="flex items-center gap-5">
          {FOOTER_LINKS.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              aria-label={label}
              className="text-(--text-muted) transition-colors hover:text-(--text-primary)"
            >
              <Icon size={16} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
