import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}

export default function Navbar() {
  const { dark, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "var(--nav-bg)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <span className="font-serif text-xl tracking-widest uppercase" style={{ color: "var(--text-primary)" }}>
          Mr.<span style={{ color: "var(--gold)" }}>Borey</span>
        </span>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-xs tracking-widest uppercase transition-colors duration-300"
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={(e) => (e.target.style.color = "var(--gold)")}
                onMouseLeave={(e) => (e.target.style.color = "var(--text-muted)")}
              >
                {link.label}
              </a>
            </li>
          ))}

          {/* Theme toggle */}
          <li>
            <button
              onClick={toggle}
              className="flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-300"
              style={{
                borderColor: "var(--border-strong)",
                color: "var(--gold)",
                background: "transparent",
              }}
              aria-label="Toggle theme"
            >
              {dark ? <SunIcon /> : <MoonIcon />}
            </button>
          </li>
        </ul>

        {/* Mobile right: toggle + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggle}
            className="flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300"
            style={{ borderColor: "var(--border-strong)", color: "var(--gold)" }}
            aria-label="Toggle theme"
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            className="flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className="block w-6 h-px transition-all duration-300" style={{ background: "var(--text-primary)", transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "" }} />
            <span className="block w-6 h-px transition-all duration-300" style={{ background: "var(--text-primary)", opacity: menuOpen ? 0 : 1 }} />
            <span className="block w-6 h-px transition-all duration-300" style={{ background: "var(--text-primary)", transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "" }} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-6 py-4" style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-xs tracking-widest uppercase transition-colors"
                  style={{ color: "var(--text-muted)" }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
