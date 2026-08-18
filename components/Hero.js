function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18a2.65 2.65 0 0 0-1.11-1.46c-.91-.62.07-.61.07-.61a2.1 2.1 0 0 1 1.53 1.03 2.13 2.13 0 0 0 2.91.83c.05-.5.26-.97.6-1.33-2.22-.25-4.56-1.11-4.56-4.94a3.86 3.86 0 0 1 1.03-2.68 3.6 3.6 0 0 1 .1-2.65s.84-.27 2.75 1.02a9.46 9.46 0 0 1 5 0c1.9-1.29 2.74-1.02 2.74-1.02.37.84.4 1.79.1 2.65a3.84 3.84 0 0 1 1.03 2.68c0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative px-5 pb-6 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pb-8 lg:pt-24">
      <div className="macro-container">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-semibold text-cyan-100">Windows macro recorder</p>

          <h1 className="text-6xl font-semibold leading-none tracking-normal text-white sm:text-7xl lg:text-8xl">
            Macroly
          </h1>
          <p className="mt-5 max-w-5xl text-5xl font-semibold leading-none tracking-normal text-white sm:text-6xl lg:text-7xl">
            Record. Replay. Repeat.
          </p>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl sm:leading-9">
            Macroly is a lightweight Windows macro recorder. Record keyboard and
            mouse actions, then replay the same sequence automatically.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-start">
            <a
              href="#features"
              className="macro-button macro-button-primary w-full sm:w-auto"
            >
              Explore Features
            </a>
            <a
              href="https://github.com/bibop28/Macrosty"
              className="macro-button macro-button-secondary w-full sm:w-auto"
            >
              <GitHubIcon />
              <span className="whitespace-nowrap">View on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
