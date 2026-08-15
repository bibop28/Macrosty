const steps = [
  {
    number: "01",
    title: "Record",
    description: "Press Record and begin performing your actions.",
  },
  {
    number: "02",
    title: "Perform",
    description: "Use your keyboard and mouse normally.",
  },
  {
    number: "03",
    title: "Stop",
    description: "Stop recording when the sequence is complete.",
  },
  {
    number: "04",
    title: "Replay",
    description: "Choose how many times to repeat it and press Play.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="border-y border-white/10 bg-[#080809] px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
            How It Works
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-normal text-white sm:text-4xl">
            Record once. Replay anytime.
          </h2>
        </div>

        <div className="relative mt-14 grid gap-5 md:grid-cols-4">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-white/10 md:block" aria-hidden="true" />
          {steps.map((step) => (
            <article key={step.number} className="relative">
              <div className="mb-6 grid size-16 place-items-center rounded-lg border border-cyan-300/25 bg-[#0f1113] text-sm font-semibold text-cyan-100 shadow-[0_12px_40px_rgba(0,0,0,0.25)]">
                {step.number}
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
