import { cv } from "../data/cv";

export default function Education() {
  return (
    <section id="education" className="py-28 transition-colors duration-400" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-16">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs tracking-widest" style={{ color: "var(--gold)" }}>03</span>
          <div className="w-8 h-px" style={{ background: "var(--gold)" }} />
          <span className="text-xs tracking-widest uppercase" style={{ color: "var(--text-muted)" }}>Education</span>
        </div>

        <h2 className="font-serif leading-tight mb-16" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--text-primary)" }}>
          Academic Background
        </h2>

        <div className="flex flex-col gap-6">
          {cv.education.map((edu, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row sm:items-center gap-6 p-8 border rounded-sm transition-all duration-300 group"
              style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.boxShadow = "0 0 0 1px var(--accent)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              {/* Decorative number */}
              <div className="font-serif text-6xl hidden sm:block shrink-0 transition-colors duration-300 group-hover:opacity-100 opacity-20"
                style={{ color: "var(--accent)", width: "80px" }}>
                {String(i + 1).padStart(2, "0")}
              </div>

              <div className="flex-1">
                <p className="font-mono text-xs tracking-widest mb-2" style={{ color: "var(--gold)" }}>{edu.period}</p>
                <h3 className="font-serif text-xl mb-1" style={{ color: "var(--text-primary)" }}>{edu.degree}</h3>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{edu.institution}</p>
                <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>{edu.location}</p>
              </div>

              {/* Accent stripe */}
              <div className="w-1 h-14 rounded-full shrink-0 hidden sm:block" style={{ background: "linear-gradient(to bottom, var(--accent), var(--gold))" }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
