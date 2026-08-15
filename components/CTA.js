export default function CTA() {
  return (
    <section
      id="download"
      className="border-t border-white/10 bg-[#080809] px-5 py-20 sm:px-6 lg:px-8 lg:py-24"
      data-reveal
    >
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-semibold tracking-normal text-white sm:text-4xl">
          Ready to automate repetitive actions?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-zinc-400">
          Macroly is currently in development. The Windows download will appear
          here when it is ready.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="#download"
            aria-disabled="true"
            className="inline-flex min-h-[52px] items-center justify-center rounded-md bg-cyan-200 px-5 py-3 text-sm font-semibold text-zinc-950 shadow-[0_12px_30px_rgba(103,232,249,0.14)] transition hover:-translate-y-0.5 hover:bg-cyan-100 active:translate-y-0"
          >
            Macroly for Windows — Coming Soon
          </a>
          <a
            href="#"
            className="inline-flex min-h-[52px] items-center justify-center rounded-md border border-white/10 bg-white/[0.025] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.06] active:translate-y-0"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
