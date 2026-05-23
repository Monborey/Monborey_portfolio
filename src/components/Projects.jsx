import { cv } from "../data/cv";

export default function Projects() {
  return (
    <section id="projects" className="py-28 transition-colors duration-400" style={{ background: "var(--bg-secondary)" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-16">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs tracking-widest" style={{ color: "var(--gold)" }}>04</span>
          <div className="w-8 h-px" style={{ background: "var(--gold)" }} />
          <span className="text-xs tracking-widest uppercase" style={{ color: "var(--text-muted)" }}>Projects</span>
        </div>

        <h2 className="font-serif leading-tight mb-16" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--text-primary)" }}>
          Academic Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {cv.projects.map((proj, i) => (
            <div
              key={i}
              className="relative p-8 border rounded-sm transition-all duration-300 overflow-hidden group"
              style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--gold)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; }}
            >
              {/* BG number */}
              <div
                className="absolute -bottom-4 -right-2 font-serif text-9xl leading-none select-none transition-colors duration-300"
                style={{ color: "var(--border)", opacity: 0.6 }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              <div className="relative">
                <p className="font-mono text-xs tracking-widest mb-4" style={{ color: "var(--gold)" }}>{proj.year}</p>
                <h3 className="font-serif text-xl mb-3 leading-snug" style={{ color: "var(--text-primary)" }}>{proj.title}</h3>
                <p className="text-xs tracking-wide uppercase mb-4" style={{ color: "var(--text-muted)" }}>Advisor: {proj.advisor}</p>
                <p className="text-sm leading-relaxed font-light" style={{ color: "var(--text-secondary)" }}>{proj.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
