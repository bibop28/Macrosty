const steps = [
  {
    number: "01",
    title: "Record",
    description: "Press Record in Macroly or use the visual F6 shortcut.",
  },
  {
    number: "02",
    title: "Do the task",
    description: "Use your keyboard and mouse normally while timing is captured.",
  },
  {
    number: "03",
    title: "Stop",
    description: "Stop when the sequence is complete and review the saved actions.",
  },
  {
    number: "04",
    title: "Replay",
    description: "Choose a repeat count or infinite mode, then press Play.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="border-y border-white/10 bg-[#080809]/82 px-5 py-20 sm:px-6 lg:px-8 lg:py-24"
      data-reveal
    >
      <div className="macro-container">
        <div className="max-w-3xl">
          <p className="macro-eyebrow">How It Works</p>
          <h2 className="macro-heading mt-4">Record once. Replay with control.</h2>
        </div>

        <div className="relative mt-12 grid gap-8 md:grid-cols-4 md:gap-6">
          <div
            className="absolute left-8 right-8 top-6 hidden h-px bg-white/10 md:block"
            aria-hidden="true"
          />
          {steps.map((step) => (
            <article key={step.number} className="relative flex gap-4 md:block">
              <div className="relative z-10 grid size-12 shrink-0 place-items-center rounded-md border border-cyan-300/25 bg-[#0f1113] font-mono text-sm font-semibold text-cyan-100 shadow-[0_12px_40px_rgba(0,0,0,0.25)]">
                {step.number}
              </div>
              <div className="min-w-0 md:mt-6">
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-3 max-w-xs text-sm leading-6 text-zinc-400">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
