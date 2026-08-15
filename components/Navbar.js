"use client";

import { useState } from "react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Privacy", href: "#privacy" },
  { label: "FAQ", href: "#faq" },
  { label: "GitHub", href: "#" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050506]/90 backdrop-blur-md">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8"
        aria-label="Primary navigation"
      >
        <a
          href="#top"
          className="flex items-center gap-3 text-sm font-semibold tracking-wide text-white"
          onClick={() => setIsOpen(false)}
        >
          <span className="grid size-8 place-items-center rounded-md border border-cyan-300/30 bg-cyan-300/10 text-cyan-200">
            M
          </span>
          Macroly
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#download"
            className="rounded-md border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 shadow-[0_0_0_1px_rgba(103,232,249,0.05)] transition hover:border-cyan-200/50 hover:bg-cyan-300/15 hover:text-white"
          >
            Download
          </a>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-md border border-white/10 bg-white/[0.03] text-zinc-200 transition hover:border-white/20 hover:bg-white/[0.06] md:hidden"
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

      {isOpen ? (
        <div
          id="mobile-menu"
          className="border-t border-white/10 bg-[#080809] px-5 py-4 md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-md px-3 py-3 text-sm font-medium text-zinc-300 transition hover:bg-white/[0.04] hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#download"
              className="mt-2 rounded-md border border-cyan-300/30 bg-cyan-300/10 px-3 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/50 hover:bg-cyan-300/15"
              onClick={() => setIsOpen(false)}
            >
              Download
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
