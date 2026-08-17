export default function BrandMark({ className = "size-9" }) {
  return (
    <span
      className={`inline-grid shrink-0 place-items-center rounded-md border border-[rgba(var(--macro-accent-rgb),0.3)] bg-[rgba(var(--macro-accent-rgb),0.1)] text-[var(--macro-accent-soft)] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 28 28"
        className="size-[72%]"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7.5 18.5v-9l4.2 5.2 4.2-5.2v9" strokeWidth="1.8" />
        <path d="M17.4 8.2h2.2c2 0 3.6 1.6 3.6 3.6v.3" strokeWidth="1.6" />
        <path d="M21.6 10.4l1.6 1.7-1.6 1.7" strokeWidth="1.6" />
        <circle cx="20.8" cy="19.1" r="2" fill="#f87171" stroke="none" />
      </svg>
    </span>
  );
}
