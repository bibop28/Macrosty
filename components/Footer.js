import BrandMark from "./BrandMark";

const footerLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Privacy", href: "#privacy" },
  { label: "FAQ", href: "#faq" },
  { label: "GitHub", href: "#" },
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
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between lg:gap-7">
          <nav className="flex flex-wrap gap-x-5 gap-y-3" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-zinc-500 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="inline-flex w-fit items-center gap-2 rounded-md border border-white/10 bg-white/[0.025] px-3 py-2 text-xs font-semibold text-zinc-300">
            <span className="size-1.5 rounded-full bg-cyan-300" aria-hidden="true" />
            In Development
          </div>
        </div>
      </div>
    </footer>
  );
}
