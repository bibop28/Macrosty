"use client";

import { useEffect, useState } from "react";
import BrandMark from "./BrandMark";
import ExternalLinkIcon from "./ExternalLinkIcon";

const githubUrl = "https://github.com/bibop28/Macroly";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Privacy", href: "#privacy" },
  { label: "GitHub", href: githubUrl, external: true },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrolled = () => setIsScrolled(window.scrollY > 8);

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });

    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition duration-300 ${
        isScrolled || isOpen
          ? "border-white/10 bg-[#050506]/95 shadow-[0_18px_50px_rgba(0,0,0,0.32)] backdrop-blur-xl"
          : "border-white/[0.06] bg-[#050506]/78 backdrop-blur-md"
      }`}
    >
      <nav
        className="macro-container relative flex h-16 items-center justify-between px-5 sm:px-6 lg:px-8"
        aria-label="Primary navigation"
      >
        <a
          href="#top"
          className="flex items-center gap-3 text-sm font-semibold tracking-wide text-white transition hover:text-cyan-50"
          onClick={closeMenu}
        >
          <BrandMark className="size-8" />
          Macroly
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              aria-label={link.external ? `${link.label} repository (opens in a new tab)` : undefined}
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-zinc-400 transition hover:-translate-y-0.5 hover:text-white"
            >
              <span>{link.label}</span>
              {link.external ? (
                <ExternalLinkIcon className="size-3 opacity-60 transition group-hover:opacity-100" />
              ) : null}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-md border border-white/10 bg-white/[0.03] text-zinc-200 transition hover:border-white/20 hover:bg-white/[0.06] active:scale-95 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((current) => !current)}
        >
          <svg
            className="size-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {isOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`grid border-t bg-[#080809]/98 transition-[grid-template-rows,opacity,border-color] duration-200 ease-out lg:hidden ${
          isOpen
            ? "grid-rows-[1fr] border-white/10 opacity-100"
            : "pointer-events-none grid-rows-[0fr] border-transparent opacity-0"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="overflow-hidden">
          <div className="macro-container flex flex-col gap-1 px-5 py-4 sm:px-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                aria-label={link.external ? `${link.label} repository (opens in a new tab)` : undefined}
                tabIndex={isOpen ? 0 : -1}
                className="group inline-flex items-center gap-1.5 rounded-md px-3 py-3 text-sm font-medium text-zinc-300 transition hover:bg-white/[0.04] hover:text-white"
                onClick={closeMenu}
              >
                <span>{link.label}</span>
                {link.external ? (
                  <ExternalLinkIcon className="size-3 opacity-60 transition group-hover:opacity-100" />
                ) : null}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
