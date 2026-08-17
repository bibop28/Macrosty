export default function Privacy() {
  return (
    <section
      id="privacy"
      className="macro-section"
      data-reveal
    >
      <div className="macro-container grid gap-10 lg:grid-cols-[0.92fr_1fr] lg:items-center">
        <div className="order-2 rounded-lg border border-white/[0.08] bg-white/[0.025] p-4 shadow-[0_20px_70px_rgba(0,0,0,0.2)] lg:order-1">
          <div className="flex items-center justify-between border-b border-white/[0.07] pb-3">
            <div className="flex items-center gap-3">
              <svg
                viewBox="0 0 24 24"
                className="size-5 text-cyan-200"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M7 3h7l4 4v14H7z" />
                <path d="M14 3v5h5" />
              </svg>
              <span className="text-sm font-semibold text-white">daily-farm.macro</span>
            </div>
            <span className="rounded-md border border-cyan-300/25 bg-cyan-300/10 px-2 py-1 text-xs font-medium text-cyan-100">
              Local
            </span>
          </div>

          <div className="mt-3 divide-y divide-white/[0.06]">
            {[
              ["00:00.42", "Key W pressed"],
              ["00:01.08", "Mouse moved"],
              ["00:01.44", "Left click"],
            ].map(([time, action]) => (
              <div
                key={time}
                className="grid grid-cols-[78px_minmax(0,1fr)] gap-3 py-2.5 text-sm"
              >
                <span className="font-mono text-xs text-zinc-500">{time}</span>
                <span className="truncate text-zinc-300">{action}</span>
              </div>
            ))}
          </div>

          <div className="mt-3 flex items-center gap-3 border-t border-white/[0.07] pt-3 text-sm text-zinc-400">
            <span className="grid size-8 shrink-0 place-items-center rounded-md bg-cyan-300/10 text-cyan-100">
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
                <rect x="5" y="11" width="14" height="9" rx="2" />
                <path d="M8 11V8a4 4 0 0 1 8 0v3" />
              </svg>
            </span>
            Saved on the PC. No account, cloud sync, or server upload is required for replay.
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="macro-eyebrow">Privacy</p>
          <h2 className="macro-heading mt-4">Your macros stay on your PC.</h2>
          <p className="macro-copy mt-5 max-w-2xl">
            Macro recordings are stored locally on your computer. Macroly does
            not need to upload your keyboard or mouse recordings to a server in
            order to replay them.
          </p>
        </div>
      </div>
    </section>
  );
}
