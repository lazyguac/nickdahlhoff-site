interface ImagePlaceholderProps {
  label: string;
  aspectRatio?: string;
  className?: string;
}

export default function ImagePlaceholder({
  label,
  aspectRatio = "aspect-video",
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`${aspectRatio} rounded-2xl border-2 border-dashed border-[var(--color-border)] bg-gradient-to-br from-[var(--color-surface-alt)] to-[var(--color-surface)] flex items-center justify-center ${className}`}
    >
      <span className="text-sm text-[var(--color-text-light)] text-center px-4">
        {label}
      </span>
    </div>
  );
}
