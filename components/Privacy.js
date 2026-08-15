export default function Privacy() {
  return (
    <section
      id="privacy"
      className="border-y border-white/10 bg-[#080809] px-5 py-24 sm:px-6 lg:px-8 lg:py-28"
      data-reveal
    >
      <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[0.86fr_1fr] lg:items-center">
        <div className="rounded-xl border border-white/10 bg-[#101113] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
          <div className="mx-auto max-w-sm">
            <div className="rounded-lg border border-white/10 bg-[#08090b] p-5">
              <div className="rounded-md border border-cyan-300/20 bg-cyan-300/[0.04] p-4">
                <div className="rounded border border-white/10 bg-[#121417] p-3">
                  <div className="mb-3 flex gap-1.5" aria-hidden="true">
                    <span className="size-2 rounded-full bg-zinc-700" />
                    <span className="size-2 rounded-full bg-zinc-700" />
                    <span className="size-2 rounded-full bg-cyan-300" />
                  </div>
                  <div className="h-20 rounded border border-white/10 bg-[#070809]" />
                </div>
              </div>

              <div className="flex justify-center py-4 text-cyan-200" aria-hidden="true">
                <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14" />
                  <path d="m7 14 5 5 5-5" />
                </svg>
              </div>

              <div className="rounded-md border border-white/10 bg-[#08090b] p-4">
                <div className="mb-3 flex items-center gap-3">
                  <svg viewBox="0 0 24 24" className="size-5 text-cyan-200" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M7 3h7l4 4v14H7z" />
                    <path d="M14 3v5h5" />
                  </svg>
                  <span className="text-sm font-semibold text-white">Local Macro File</span>
                </div>
                <div className="space-y-2">
                  <div className="h-1.5 w-4/5 rounded bg-white/10" />
                  <div className="h-1.5 w-2/3 rounded bg-white/10" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
            Privacy
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-normal text-white sm:text-4xl lg:text-5xl">
            Your macros stay on your PC.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            Macro recordings are stored locally on your computer. Macroly does
            not need to upload your keyboard or mouse recordings to a server in
            order to replay them.
          </p>
        </div>
      </div>
    </section>
  );
}
