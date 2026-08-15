export default function Privacy() {
  return (
    <section id="privacy" className="border-y border-white/10 bg-[#080809] px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="rounded-lg border border-white/10 bg-[#101113] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
          <div className="mx-auto grid aspect-[4/3] max-w-sm place-items-center rounded-lg border border-cyan-300/20 bg-cyan-300/[0.04]">
            <svg
              viewBox="0 0 120 90"
              className="h-auto w-4/5 text-cyan-100"
              fill="none"
              aria-hidden="true"
            >
              <rect x="20" y="16" width="80" height="52" rx="5" stroke="currentColor" strokeWidth="3" />
              <path d="M42 78h36M53 68v10M67 68v10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              <path d="M44 38h18l4 7h12v19H42V38h2Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
              <path d="M52 53h16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
            Privacy
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-normal text-white sm:text-4xl">
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
