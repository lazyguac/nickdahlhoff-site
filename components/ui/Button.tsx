import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type ButtonProps = {
  variant?: "primary" | "secondary";
  size?: "default" | "large";
  href?: string;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>;

export default function Button({
  variant = "primary",
  size = "default",
  href,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold rounded-xl transition-colors cursor-pointer";
  const sizes = {
    default: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg",
  };
  const variants = {
    primary:
      "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)]",
    secondary:
      "border-2 border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white",
  };

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
