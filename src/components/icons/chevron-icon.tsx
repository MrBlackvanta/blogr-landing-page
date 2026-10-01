type ChevronIconProps = {
  className?: string;
};

export default function ChevronIcon({ className }: ChevronIconProps) {
  return (
    <svg
      viewBox="0 0 10 7"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
      className={className}
    >
      <path d="M1 1l4 4 4-4" />
    </svg>
  );
}
