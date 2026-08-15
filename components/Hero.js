export default function Hero() {
  return (
    <section id="top" className="relative px-5 pt-24 pb-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.82fr] lg:items-center">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-zinc-300">
            <span className="size-2 rounded-full bg-cyan-300" aria-hidden="true" />
            Windows desktop utility in development
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-normal text-white sm:text-6xl lg:text-7xl">
            Record. Replay. Repeat.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
            A lightweight macro recorder for Windows. Record your keyboard and
            mouse actions and replay them whenever you need.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#download"
              className="inline-flex h-12 items-center justify-center rounded-md bg-cyan-200 px-5 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-100"
            >
              Download for Windows
            </a>
            <a
              href="#"
              className="inline-flex h-12 items-center justify-center rounded-md border border-white/10 bg-white/[0.03] px-5 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/[0.06]"
            >
              View on GitHub
            </a>
            <span className="inline-flex h-12 items-center justify-center rounded-md border border-zinc-700 px-4 text-sm font-medium text-zinc-400 sm:justify-start">
              Coming Soon
            </span>
          </div>

          <p className="mt-5 text-sm font-medium text-zinc-500">
            Windows 10 / 11 • Free • Local-first
          </p>
        </div>

        <div className="rounded-lg border border-white/10 bg-zinc-950/80 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
          <div className="rounded-md border border-white/10 bg-[#101113] p-4">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-white">Macroly</p>
                <p className="text-xs text-zinc-500">Desktop macro recorder</p>
              </div>
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="size-2.5 rounded-full bg-zinc-700" />
                <span className="size-2.5 rounded-full bg-zinc-700" />
                <span className="size-2.5 rounded-full bg-cyan-300" />
              </div>
            </div>
            <div className="space-y-3">
              {[
                ["Keyboard", "14 actions recorded"],
                ["Mouse", "8 clicks and moves"],
                ["Timing", "Precise delays saved"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between rounded-md border border-white/10 bg-white/[0.03] px-3 py-3"
                >
                  <span className="text-sm text-zinc-300">{label}</span>
                  <span className="text-xs text-zinc-500">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
