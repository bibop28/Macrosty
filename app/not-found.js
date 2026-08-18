import Link from "next/link";
import BrandMark from "@/components/BrandMark";

export const metadata = {
  title: "Page not found | Macroly",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <main className="site-shell flex min-h-screen items-center overflow-x-hidden bg-[#050506] px-5 py-16 text-zinc-50 sm:px-6 lg:px-8">
      <div className="macro-container">
        <Link
          href="/"
          className="inline-flex items-center gap-3 text-sm font-semibold tracking-wide text-white transition hover:text-cyan-50"
        >
          <BrandMark className="size-8" />
          Macroly
        </Link>

        <div className="mt-16 max-w-xl">
          <p className="macro-eyebrow">404</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-normal text-white sm:text-5xl">
            Page not found.
          </h1>
          <p className="macro-copy mt-4 max-w-md">
            The page you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link href="/" className="macro-button macro-button-primary mt-8">
            Back to Macroly
          </Link>
        </div>
      </div>
    </main>
  );
}
