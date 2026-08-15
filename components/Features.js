const features = [
  {
    title: "Keyboard Recording",
    description: "Capture keyboard presses and releases.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M7 10h.01M10.5 10h.01M14 10h.01M17.5 10h.01M7 14h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Mouse Recording",
    description: "Record mouse clicks, movement, and cursor positions.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <rect x="7" y="3" width="10" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M9 11h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Accurate Timing",
    description: "Preserve delays between recorded actions.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="13" r="7" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 13l3-2M9 3h6M12 6V3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Repeat Macros",
    description: "Replay a recording a specific number of times.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M17 2l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 11V8a3 3 0 0 1 3-3h13M7 22l-3-3 3-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 13v3a3 3 0 0 1-3 3H4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Infinite Mode",
    description: "Keep replaying until manually stopped.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M7.5 8.5c-2 0-3.5 1.6-3.5 3.5s1.5 3.5 3.5 3.5c3.5 0 5.5-7 9-7 2 0 3.5 1.6 3.5 3.5s-1.5 3.5-3.5 3.5c-3.5 0-5.5-7-9-7Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Emergency Stop",
    description: "Immediately stop playback using a dedicated hotkey.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3l8 4v5c0 4.6-3.1 7.5-8 9-4.9-1.5-8-4.4-8-9V7l8-4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M9 9l6 6M15 9l-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="px-5 py-24 sm:px-6 lg:px-8 lg:py-28" data-reveal>
      <div className="mx-auto max-w-[1280px]">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
            Features
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-normal text-white sm:text-4xl lg:text-5xl">
            Everything you need. Nothing you don&apos;t.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
            Macroly focuses on the core macro workflow: capture input, preserve
            timing, replay with control, and stop immediately when needed.
          </p>
        </div>

        <div className="mt-14 grid gap-x-10 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group border-t border-white/10 py-7 transition duration-200 hover:border-cyan-300/30"
            >
              <div className="mb-5 grid size-10 place-items-center rounded-md border border-white/10 bg-white/[0.025] text-cyan-200 transition group-hover:-translate-y-0.5 group-hover:border-cyan-300/30 group-hover:bg-cyan-300/10">
                <div className="size-5">{feature.icon}</div>
              </div>
              <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
              <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-400">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
