const savedMacros = [
  { name: "Daily Farm", actions: "42 actions" },
  { name: "Collect Rewards", actions: "18 actions" },
  { name: "Test Macro", actions: "9 actions" },
];

export default function AppPreview() {
  return (
    <section className="px-5 py-14 sm:px-6 lg:px-8" aria-label="Application preview">
      <div className="mx-auto max-w-7xl">
        <h2 className="sr-only">Macroly application preview</h2>
        <div className="overflow-hidden rounded-lg border border-white/10 bg-[#0b0c0e] shadow-[0_28px_90px_rgba(0,0,0,0.5)]">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-[#111214] px-4 py-3 sm:px-5">
            <div className="flex min-w-0 items-center gap-3">
              <div className="grid size-9 shrink-0 place-items-center rounded-md bg-cyan-300/10 text-sm font-bold text-cyan-200">
                M
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-white">Macroly</p>
                <div className="mt-1 flex items-center gap-2 text-xs text-zinc-500">
                  <span className="size-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                  <span>Idle</span>
                </div>
              </div>
            </div>
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="size-3 rounded-full bg-zinc-700" />
              <span className="size-3 rounded-full bg-zinc-700" />
              <span className="size-3 rounded-full bg-zinc-600" />
            </div>
          </div>

          <div className="grid gap-4 p-4 sm:p-5 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <section className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <h3 className="text-sm font-semibold text-white">Main controls</h3>
                  <span className="rounded-md border border-white/10 px-2 py-1 text-xs text-zinc-500">
                    Ready
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <button
                    type="button"
                    className="flex h-12 items-center justify-center gap-2 rounded-md border border-red-400/30 bg-red-500/10 px-4 text-sm font-semibold text-red-100"
                  >
                    <span className="size-2.5 rounded-full bg-red-400 shadow-[0_0_14px_rgba(248,113,113,0.45)]" />
                    Record
                  </button>
                  <button
                    type="button"
                    className="flex h-12 items-center justify-center rounded-md border border-cyan-300/30 bg-cyan-300/10 px-4 text-sm font-semibold text-cyan-100"
                  >
                    Play
                  </button>
                  <button
                    type="button"
                    className="flex h-12 items-center justify-center rounded-md border border-white/10 bg-zinc-900 px-4 text-sm font-semibold text-zinc-300"
                  >
                    Stop
                  </button>
                </div>
              </section>

              <section className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
                <h3 className="mb-4 text-sm font-semibold text-white">Repeat controls</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">
                      Repeat count
                    </span>
                    <input
                      type="text"
                      value="5"
                      readOnly
                      className="h-11 w-full rounded-md border border-white/10 bg-[#0d0e10] px-3 text-sm text-white outline-none"
                      aria-label="Repeat count preview"
                    />
                  </label>
                  <div className="rounded-md border border-white/10 bg-[#0d0e10] p-3">
                    <span className="mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">
                      Infinite toggle
                    </span>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-sm text-zinc-300">Off</span>
                      <span className="relative inline-flex h-6 w-11 items-center rounded-full border border-white/10 bg-zinc-800">
                        <span className="ml-1 size-4 rounded-full bg-zinc-500" />
                      </span>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <section className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-white">Saved Macros</h3>
                <span className="text-xs text-zinc-500">Local library</span>
              </div>
              <div className="space-y-3">
                {savedMacros.map((macro) => (
                  <div
                    key={macro.name}
                    className="flex items-center justify-between gap-3 rounded-md border border-white/10 bg-[#0d0e10] p-3"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-white">{macro.name}</p>
                      <p className="mt-1 text-xs text-zinc-500">{macro.actions}</p>
                    </div>
                    <button
                      type="button"
                      className="shrink-0 rounded-md border border-cyan-300/25 bg-cyan-300/10 px-3 py-2 text-xs font-semibold text-cyan-100"
                    >
                      Play
                    </button>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="grid gap-2 border-t border-white/10 bg-[#111214] px-4 py-3 text-xs text-zinc-400 sm:grid-cols-3 sm:px-5">
            <div>
              <span className="font-semibold text-zinc-200">F6</span> — Record
            </div>
            <div>
              <span className="font-semibold text-zinc-200">F7</span> — Play
            </div>
            <div>
              <span className="font-semibold text-red-200">F8</span> — Emergency Stop
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
