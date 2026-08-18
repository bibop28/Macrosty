export default function ExternalLinkIcon({ className = "size-3" }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 4h6v6" />
      <path d="M12 4 5 11" />
      <path d="M10 12H4V6" />
    </svg>
  );
}
