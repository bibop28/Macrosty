"use client";

import { useId, useState } from "react";

function WindowsIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-4 shrink-0"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M4 5.5 11 4.6v6.8H4V5.5Z" />
      <path d="M12.5 4.4 20 3.4v8h-7.5v-7Z" />
      <path d="M4 12.9h7v6.8l-7-.9v-5.9Z" />
      <path d="M12.5 12.9H20v8l-7.5-1v-7Z" />
    </svg>
  );
}

export default function DownloadButton({ className = "", label = "Download for Windows" }) {
  const statusId = useId();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`w-full sm:w-auto ${className}`}>
      <button
        type="button"
        className="macro-button macro-button-primary w-full sm:w-auto"
        aria-expanded={isOpen}
        aria-controls={statusId}
        onClick={() => setIsOpen((current) => !current)}
      >
        <WindowsIcon />
        <span className="whitespace-nowrap">{label}</span>
        <span className="shrink-0 rounded border border-zinc-950/15 bg-zinc-950/5 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.08em] text-zinc-800">
          Coming Soon
        </span>
      </button>

      <div
        className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p
            id={statusId}
            role="status"
            aria-live="polite"
            className="mt-2 rounded-md border border-white/10 bg-[#101114] px-3 py-2 text-xs leading-5 text-zinc-300 shadow-[0_12px_28px_rgba(0,0,0,0.22)]"
          >
            Macroly is still in development. No Windows installer is available yet.
          </p>
        </div>
      </div>
    </div>
  );
}
