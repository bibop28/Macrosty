function DownloadIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 4v10" />
      <path d="m8 10 4 4 4-4" />
      <path d="M5 20h14" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18a2.65 2.65 0 0 0-1.11-1.46c-.91-.62.07-.61.07-.61a2.1 2.1 0 0 1 1.53 1.03 2.13 2.13 0 0 0 2.91.83c.05-.5.26-.97.6-1.33-2.22-.25-4.56-1.11-4.56-4.94a3.86 3.86 0 0 1 1.03-2.68 3.6 3.6 0 0 1 .1-2.65s.84-.27 2.75 1.02a9.46 9.46 0 0 1 5 0c1.9-1.29 2.74-1.02 2.74-1.02.37.84.4 1.79.1 2.65a3.84 3.84 0 0 1 1.03 2.68c0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative px-5 pb-10 pt-20 sm:px-6 sm:pt-24 lg:px-8 lg:pb-16 lg:pt-28">
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.72fr)] lg:items-center">
        <div className="max-w-3xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.025] px-3 py-2 text-sm text-zinc-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <span className="size-2 rounded-full bg-cyan-300" aria-hidden="true" />
            Macroly is currently in development
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-normal text-white sm:text-6xl lg:text-[72px]">
            Record. Replay. Repeat.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl sm:leading-9">
            A lightweight macro recorder for Windows. Record your keyboard and
            mouse actions and replay them whenever you need.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#download"
              className="inline-flex min-h-[52px] items-center justify-center gap-3 rounded-md bg-cyan-200 px-5 py-3 text-sm font-semibold text-zinc-950 shadow-[0_12px_30px_rgba(103,232,249,0.16)] transition hover:-translate-y-0.5 hover:bg-cyan-100 active:translate-y-0 sm:px-5"
            >
              <DownloadIcon />
              <span>Download for Windows</span>
              <span className="rounded border border-zinc-950/15 bg-zinc-950/5 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-700">
                Coming Soon
              </span>
            </a>
            <a
              href="#"
              className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-md border border-white/10 bg-white/[0.025] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.06] active:translate-y-0"
            >
              <GitHubIcon />
              View on GitHub
            </a>
          </div>

          <p className="mt-5 text-sm font-medium text-zinc-500">
            Windows 10 / 11 • Free • Local-first
          </p>
        </div>

        <div className="hidden lg:block">
          <div className="ml-auto max-w-lg rounded-xl border border-white/10 bg-[#0a0b0d] p-5 shadow-[0_28px_80px_rgba(0,0,0,0.36)]">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <p className="text-sm font-semibold text-white">Macro timeline</p>
              <span className="rounded-md border border-cyan-300/25 bg-cyan-300/10 px-2.5 py-1 text-xs font-medium text-cyan-100">
                Ready
              </span>
            </div>

            <div className="mt-5 space-y-2.5">
              {[
                {
                  time: "00:00.000",
                  action: "F6 pressed",
                  detail: "Recording started",
                },
                {
                  time: "00:01.248",
                  action: "Mouse click",
                  detail: "Position captured",
                },
                {
                  time: "00:02.910",
                  action: "Key release",
                  detail: "Timing preserved",
                },
              ].map((event) => (
                <div
                  key={event.time}
                  className="grid grid-cols-[88px_1fr] gap-4 rounded-md border border-white/10 bg-white/[0.025] px-3.5 py-3"
                >
                  <span className="font-mono text-xs text-zinc-500">{event.time}</span>
                  <div>
                    <p className="text-sm font-medium text-zinc-200">{event.action}</p>
                    <p className="mt-1 text-xs text-zinc-500">{event.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
