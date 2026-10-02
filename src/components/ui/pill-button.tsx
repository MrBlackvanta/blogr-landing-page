import type { ReactNode } from "react";

type PillButtonProps = {
  variant?: "light" | "outline" | "brand";
  className?: string;
  children: ReactNode;
};

const variantClasses = {
  light: "v-on-dark bg-white text-brand hover:bg-brand hover:text-white",
  outline:
    "v-on-dark border border-white text-white hover:bg-white hover:text-brand",
  brand: "bg-brand text-white hover:bg-white hover:text-brand",
};

export default function PillButton({
  variant = "light",
  className = "",
  children,
}: PillButtonProps) {
  return (
    <a
      href="#"
      className={`v-focus-ring font-ui text-nav inline-flex h-12 w-34.25 items-center justify-center rounded-full font-bold transition-colors ${variantClasses[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
