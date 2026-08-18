import BrandMark from "./BrandMark";
import ExternalLinkIcon from "./ExternalLinkIcon";

const githubUrl = "https://github.com/bibop28/Macroly";

const footerLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Privacy", href: "#privacy" },
  { label: "GitHub", href: githubUrl, external: true },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-8 sm:px-6 lg:px-8">
      <div className="macro-container flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <a href="#top" className="inline-flex items-center gap-3 text-sm font-semibold text-white">
            <BrandMark className="size-8" />
            Macroly
          </a>
          <p className="mt-3 text-sm text-zinc-500">&copy; 2026 Macroly</p>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-3" aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              aria-label={link.external ? `${link.label} repository (opens in a new tab)` : undefined}
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 transition hover:text-white"
            >
              <span>{link.label}</span>
              {link.external ? (
                <ExternalLinkIcon className="size-3 opacity-60 transition group-hover:opacity-100" />
              ) : null}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
