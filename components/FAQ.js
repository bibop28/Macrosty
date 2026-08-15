const faqs = [
  {
    question: "What is Macroly?",
    answer:
      "Macroly is a Windows utility for recording and replaying keyboard and mouse actions.",
  },
  {
    question: "Does Macroly require Python?",
    answer: "No. The final Windows version will be distributed as a standalone application.",
  },
  {
    question: "Can I repeat a macro multiple times?",
    answer:
      "Yes. Users will be able to choose a repeat count or use an infinite repeat mode.",
  },
  {
    question: "Where are recordings stored?",
    answer: "Recordings will be stored locally on the user's computer.",
  },
  {
    question: "Is Macroly available now?",
    answer: "Not yet. Macroly is currently in development.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
            FAQ
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-normal text-white sm:text-4xl">
            Common questions
          </h2>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-lg border border-white/10 bg-white/[0.03] p-5 transition hover:border-white/20"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-white">
                <span>{faq.question}</span>
                <span className="grid size-8 shrink-0 place-items-center rounded-md border border-white/10 text-zinc-400 transition group-open:rotate-45 group-open:text-cyan-200">
                  <svg
                    viewBox="0 0 24 24"
                    className="size-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-sm leading-6 text-zinc-400">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
