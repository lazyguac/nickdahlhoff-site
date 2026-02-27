import { ReactNode } from "react";

interface SectionWrapperProps {
  id?: string;
  children: ReactNode;
  className?: string;
  alternate?: boolean;
}

export default function SectionWrapper({
  id,
  children,
  className = "",
  alternate = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`py-16 lg:py-24 ${alternate ? "bg-[var(--color-surface-alt)]" : ""} ${className}`}
    >
      <div className="max-w-5xl mx-auto px-6">{children}</div>
    </section>
  );
}
