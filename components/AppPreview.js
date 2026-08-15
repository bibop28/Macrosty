import BrandMark from "./BrandMark";

const savedMacros = [
  { name: "Daily Farm", details: "42 actions" },
  { name: "Collect Rewards", details: "18 actions" },
  { name: "Test Macro", details: "9 actions" },
];

export default function AppPreview() {
  return (
    <section
      className="px-5 pb-20 pt-8 sm:px-6 lg:px-8"
      aria-label="Application preview"
      data-reveal
    >
      <div className="mx-auto max-w-[1280px]">
        <h2 className="sr-only">Macroly application preview</h2>
        <div className="overflow-hidden rounded-xl border border-white/10 bg-[#08090b] shadow-[0_32px_110px_rgba(0,0,0,0.48)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_36px_120px_rgba(0,0,0,0.55)]">
          <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-[#101114] px-4 py-3 sm:px-5">
            <div className="flex min-w-0 items-center gap-3">
              <BrandMark className="size-8" />
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-white">Macroly</p>
                <div className="mt-1 flex items-center gap-2 text-xs text-zinc-500">
                  <span className="size-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                  <span>Status: Ready</span>
                </div>
              </div>
            </div>
            <div className="flex items-center text-zinc-500" aria-hidden="true">
              <span className="grid size-8 place-items-center text-sm">-</span>
              <span className="grid size-8 place-items-center text-xs">□</span>
              <span className="grid size-8 place-items-center text-sm">×</span>
            </div>
          </div>

          <div className="grid gap-4 p-4 sm:p-5 lg:grid-cols-[1fr_0.9fr]">
            <div className="space-y-4 rounded-lg border border-white/10 bg-[#0d0e10] p-4">
              <section>
                <div className="mb-4 flex items-center justify-between gap-3 border-b border-white/10 pb-3">
                  <h3 className="text-sm font-semibold text-white">Controls</h3>
                  <span className="font-mono text-xs text-zinc-500">F6 / F7 / F8</span>
                </div>
                <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                  <button
                    type="button"
                    className="flex h-12 items-center justify-center gap-2 rounded-md border border-red-400/35 bg-red-500/10 px-4 text-sm font-semibold text-red-100 transition hover:border-red-300/50 hover:bg-red-500/15 active:scale-[0.99]"
                  >
                    <span className="record-pulse size-2.5 rounded-full bg-red-400 shadow-[0_0_14px_rgba(248,113,113,0.45)]" />
                    Record
                  </button>
                  <button
                    type="button"
                    className="flex h-12 items-center justify-center gap-2 rounded-md border border-cyan-300/30 bg-cyan-300/10 px-4 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/50 hover:bg-cyan-300/15 active:scale-[0.99]"
                  >
                    <span aria-hidden="true">▶</span>
                    Play
                  </button>
                  <button
                    type="button"
                    className="flex h-12 items-center justify-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-4 text-sm font-semibold text-zinc-300 transition hover:border-white/20 hover:bg-white/[0.06] active:scale-[0.99]"
                  >
                    <span aria-hidden="true">■</span>
                    Stop
                  </button>
                </div>
              </section>

              <section className="pt-1">
                <h3 className="mb-3 text-sm font-semibold text-white">Repeat</h3>
                <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
                  <label className="block">
                    <span className="mb-2 block text-xs font-medium text-zinc-500">
                      Repeat count
                    </span>
                    <input
                      type="text"
                      value="5"
                      readOnly
                      className="h-11 w-full rounded-md border border-white/10 bg-[#070809] px-3 font-mono text-sm text-white outline-none"
                      aria-label="Repeat count preview"
                    />
                  </label>
                  <button
                    type="button"
                    aria-pressed="false"
                    className="flex h-11 items-center justify-between gap-4 rounded-md border border-white/10 bg-[#070809] px-3 text-sm text-zinc-300 transition hover:border-white/20 hover:bg-white/[0.03] sm:min-w-48"
                  >
                    <span>Infinite</span>
                    <span className="relative inline-flex h-6 w-11 items-center rounded-full border border-white/10 bg-zinc-800">
                      <span className="ml-1 size-4 rounded-full bg-zinc-500" />
                    </span>
                  </button>
                </div>
              </section>

              <div className="rounded-md border border-white/10 bg-[#070809] px-3 py-3">
                <div className="mb-2 flex items-center justify-between text-xs">
                  <span className="font-medium text-zinc-400">Last recording</span>
                  <span className="font-mono text-zinc-600">00:13.482</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                  <div className="h-full w-[62%] rounded-full bg-cyan-200/70" />
                </div>
              </div>
            </div>

            <section className="rounded-lg border border-white/10 bg-[#0d0e10] p-4">
              <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
                <h3 className="text-sm font-semibold text-white">Saved Macros</h3>
                <span className="text-xs text-zinc-500">Local</span>
              </div>
              <div className="space-y-3">
                {savedMacros.map((macro) => (
                  <div
                    key={macro.name}
                    className="flex items-center justify-between gap-3 rounded-md border border-white/10 bg-[#070809] p-3 transition hover:border-cyan-300/25 hover:bg-white/[0.03]"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-white">{macro.name}</p>
                      <p className="mt-1 text-xs text-zinc-500">{macro.details}</p>
                    </div>
                    <button
                      type="button"
                      aria-label={`Play ${macro.name}`}
                      className="grid size-9 shrink-0 place-items-center rounded-md border border-cyan-300/25 bg-cyan-300/10 text-xs font-semibold text-cyan-100 transition hover:border-cyan-200/45 hover:bg-cyan-300/15 active:scale-95"
                    >
                      <span aria-hidden="true">▶</span>
                    </button>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="grid gap-2 border-t border-white/10 bg-[#101114] px-4 py-3 text-xs text-zinc-400 sm:grid-cols-3 sm:px-5">
            <div className="rounded-md border border-white/[0.06] bg-white/[0.02] px-3 py-2">
              <span className="font-semibold text-zinc-200">F6</span> Record
            </div>
            <div className="rounded-md border border-white/[0.06] bg-white/[0.02] px-3 py-2">
              <span className="font-semibold text-zinc-200">F7</span> Play
            </div>
            <div className="rounded-md border border-red-300/15 bg-red-500/[0.04] px-3 py-2">
              <span className="font-semibold text-red-200">F8</span> Emergency Stop
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
