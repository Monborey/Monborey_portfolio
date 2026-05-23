import { cv } from "../data/cv";

export default function Experience() {
  return (
    <section id="experience" className="py-28 transition-colors duration-400" style={{ background: "var(--bg-secondary)" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-16">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs tracking-widest" style={{ color: "var(--gold)" }}>02</span>
          <div className="w-8 h-px" style={{ background: "var(--gold)" }} />
          <span className="text-xs tracking-widest uppercase" style={{ color: "var(--text-muted)" }}>Experience</span>
        </div>

        <h2 className="font-serif leading-tight mb-16" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--text-primary)" }}>
          Work History
        </h2>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-0 top-2 bottom-0 w-px hidden lg:block" style={{ background: "var(--border-strong)" }} />
          <div className="flex flex-col gap-16">
            {cv.experience.map((exp, i) => (
              <div key={i} className="lg:pl-10 relative">
                <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full hidden lg:block" style={{ background: "var(--gold)", border: "2px solid var(--bg-secondary)" }} />
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
                  <div>
                    <h3 className="font-serif text-xl mb-1" style={{ color: "var(--text-primary)" }}>{exp.role}</h3>
                    <p className="text-sm tracking-wide mb-0.5" style={{ color: "var(--accent)" }}>{exp.company}</p>
                    <p className="text-xs" style={{ color: "var(--text-muted)" }}>{exp.location}</p>
                  </div>
                  <span className="shrink-0 text-xs tracking-widest uppercase self-start px-3 py-1.5 rounded-sm border" style={{ borderColor: "var(--border-strong)", color: "var(--text-muted)" }}>
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-3">
                  {exp.responsibilities.map((r, j) => (
                    <li key={j} className="flex gap-3 text-sm font-light leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      <span className="shrink-0 mt-0.5" style={{ color: "var(--gold)" }}>—</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-24">
          <h3 className="font-serif text-2xl mb-10" style={{ color: "var(--text-primary)" }}>Certifications</h3>
          <div className="grid sm:grid-cols-2 gap-5">
            {cv.certifications.map((cert, i) => (
              <div
                key={i}
                className="p-6 rounded-sm border transition-all duration-300 group cursor-default"
                style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--gold)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
              >
                <p className="font-mono text-xs tracking-widest mb-3" style={{ color: "var(--gold)" }}>{cert.date}</p>
                <h4 className="text-sm font-medium mb-2 transition-colors" style={{ color: "var(--text-primary)" }}>{cert.title}</h4>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
