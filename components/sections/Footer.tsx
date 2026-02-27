export default function Footer() {
  return (
    <footer className="py-12 border-t border-[var(--color-border)]">
      <div className="max-w-5xl mx-auto px-6 text-center text-[var(--color-text-light)] text-sm">
        <p className="font-semibold text-[var(--color-text)]">Nick Dahlhoff</p>
        <p className="mt-1">West Michigan</p>
        <a
          href="mailto:ndahlhoff10@gmail.com"
          className="mt-1 inline-block hover:text-[var(--color-accent)] transition-colors"
        >
          ndahlhoff10@gmail.com
        </a>
        <p className="mt-4">&copy; 2026 Nick Dahlhoff</p>
      </div>
    </footer>
  );
}
