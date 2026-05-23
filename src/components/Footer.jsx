export default function Footer() {
  return (
    <footer
      className="py-10 border-t transition-colors duration-400"
      style={{ background: "var(--bg-secondary)", borderColor: "var(--border)" }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-serif text-lg tracking-widest" style={{ color: "var(--text-primary)" }}>
          MON <span style={{ color: "var(--gold)" }}>Borey</span>
        </span>
        <p className="text-xs tracking-wider" style={{ color: "var(--text-muted)" }}>
          Mechanical &amp; Automation Engineer · Phnom Penh, Cambodia
        </p>
        <p className="text-xs" style={{ color: "var(--text-faint)" }}>© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
