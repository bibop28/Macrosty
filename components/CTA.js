export default function CTA() {
  return (
    <section id="download" className="px-5 pb-24 pt-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-lg border border-white/10 bg-[#0f1113] px-6 py-12 text-center shadow-[0_24px_80px_rgba(0,0,0,0.35)] sm:px-10">
        <h2 className="text-3xl font-semibold tracking-normal text-white sm:text-4xl">
          Ready to automate repetitive actions?
        </h2>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="#download"
            aria-disabled="true"
            className="inline-flex h-12 items-center justify-center rounded-md bg-cyan-200 px-5 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-100"
          >
            Macroly for Windows — Coming Soon
          </a>
          <a
            href="#"
            className="inline-flex h-12 items-center justify-center rounded-md border border-white/10 bg-white/[0.03] px-5 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/[0.06]"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
