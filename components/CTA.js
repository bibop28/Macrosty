import DownloadButton from "./DownloadButton";

export default function CTA() {
  return (
    <section
      id="download"
      className="border-t border-white/10 bg-[#080809]/82 px-5 py-16 sm:px-6 lg:px-8 lg:py-20"
      data-reveal
    >
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="macro-heading">
          Ready to automate repetitive actions?
        </h2>
        <p className="macro-copy mx-auto mt-4 max-w-xl text-sm">
          Macroly is currently in development. The Windows download will appear
          here when it is ready.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:items-start">
          <DownloadButton />
          <a
            href="#"
            className="macro-button macro-button-secondary w-full sm:w-auto"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
