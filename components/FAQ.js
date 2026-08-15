"use client";

import { useState } from "react";

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
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="px-5 py-24 sm:px-6 lg:px-8 lg:py-28" data-reveal>
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
            FAQ
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-normal text-white sm:text-4xl">
            Common questions
          </h2>
        </div>

        <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div key={faq.question} className="group">
                <button
                  id={buttonId}
                  type="button"
                  className="flex w-full items-center justify-between gap-5 py-5 text-left text-base font-semibold text-white transition hover:text-cyan-50"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span>{faq.question}</span>
                  <span className="grid size-8 shrink-0 place-items-center rounded-md border border-white/10 text-zinc-400 transition group-hover:border-white/20 group-hover:text-cyan-200">
                    <span aria-hidden="true">{isOpen ? "-" : "+"}</span>
                  </span>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pb-5 text-sm leading-6 text-zinc-400">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
