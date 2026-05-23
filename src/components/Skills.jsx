import { cv } from "../data/cv";

const softSkills = ["Communication", "Team Work", "Negotiating", "Flexibility", "Leadership", "Responsibility"];

export default function Skills() {
  return (
    <section id="skills" className="py-28 transition-colors duration-400" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-16">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs tracking-widest" style={{ color: "var(--gold)" }}>05</span>
          <div className="w-8 h-px" style={{ background: "var(--gold)" }} />
          <span className="text-xs tracking-widest uppercase" style={{ color: "var(--text-muted)" }}>Skills</span>
        </div>

        <h2 className="font-serif leading-tight mb-16" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--text-primary)" }}>
          Expertise
        </h2>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Research Skills */}
          <div>
            <h3 className="text-xs tracking-widest uppercase mb-8" style={{ color: "var(--text-muted)" }}>Research Skills</h3>
            <div className="flex flex-col gap-8">
              {cv.skills.research.map((skill, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>{skill.name}</span>
                    <span className="text-xs" style={{ color: "var(--text-muted)" }}>Advanced</span>
                  </div>
                  <p className="text-xs mb-3 font-light" style={{ color: "var(--text-muted)" }}>{skill.detail}</p>
                  <div className="h-1 rounded-full" style={{ background: "var(--border)" }}>
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: "78%",
                        background: "linear-gradient(to right, var(--accent), var(--gold))",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-xs tracking-widest uppercase mb-8" style={{ color: "var(--text-muted)" }}>Technical Stack</h3>
            <div className="flex flex-wrap gap-3 mb-12">
              {cv.skills.technical.map((skill, i) => (
                <span
                  key={i}
                  className="pf-tag cursor-default"
                  style={{ background: "var(--bg-card)" }}
                >
                  {skill}
                </span>
              ))}
            </div>

            <h3 className="text-xs tracking-widest uppercase mb-6" style={{ color: "var(--text-muted)" }}>Soft Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((s, i) => (
                <div key={s} className="flex items-center gap-3 p-3 rounded-sm border transition-all duration-200"
                  style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                >
                  <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: i % 2 === 0 ? "var(--accent)" : "var(--gold)" }} />
                  <span className="text-sm font-light" style={{ color: "var(--text-secondary)" }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
