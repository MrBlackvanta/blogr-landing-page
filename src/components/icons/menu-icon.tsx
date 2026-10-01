type MenuIconProps = {
  className?: string;
};

export default function MenuIcon({ className }: MenuIconProps) {
  return (
    <svg
      viewBox="0 0 32 18"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z" />
    </svg>
  );
}
