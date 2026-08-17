import DownloadButton from "./DownloadButton";

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18a2.65 2.65 0 0 0-1.11-1.46c-.91-.62.07-.61.07-.61a2.1 2.1 0 0 1 1.53 1.03 2.13 2.13 0 0 0 2.91.83c.05-.5.26-.97.6-1.33-2.22-.25-4.56-1.11-4.56-4.94a3.86 3.86 0 0 1 1.03-2.68 3.6 3.6 0 0 1 .1-2.65s.84-.27 2.75 1.02a9.46 9.46 0 0 1 5 0c1.9-1.29 2.74-1.02 2.74-1.02.37.84.4 1.79.1 2.65a3.84 3.84 0 0 1 1.03 2.68c0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative px-5 pb-4 pt-10 sm:px-6 sm:pt-14 lg:px-8 lg:pb-6 lg:pt-20">
      <div className="macro-container grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_320px] lg:items-end">
        <div className="max-w-4xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.025] px-3 py-2 text-sm text-zinc-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <span className="size-2 rounded-full bg-cyan-300" aria-hidden="true" />
            Windows macro recorder
          </div>

          <h1 className="max-w-5xl text-[clamp(3rem,8vw,5.25rem)] font-semibold leading-[0.98] tracking-normal text-white">
            Record. Replay. Repeat.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl sm:leading-9">
            Macroly is a lightweight Windows macro recorder. Record keyboard and
            mouse actions, then replay the same sequence automatically.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-start">
            <DownloadButton />
            <a
              href="#"
              className="macro-button macro-button-secondary w-full sm:w-auto"
            >
              <GitHubIcon />
              <span className="whitespace-nowrap">View on GitHub</span>
            </a>
          </div>
        </div>

        <dl className="grid grid-cols-3 rounded-lg border border-white/[0.08] bg-white/[0.025] px-3 py-3 shadow-[0_18px_50px_rgba(0,0,0,0.2)] lg:block lg:space-y-3 lg:px-4">
          {[
            ["Platform", "Windows 10 / 11"],
            ["Storage", "Local"],
            ["Status", "In Development"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="px-2 lg:px-0"
            >
              <dt className="text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-500">
                {label}
              </dt>
              <dd className="mt-1 text-xs font-semibold text-zinc-100 sm:text-sm">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
