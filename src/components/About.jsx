import { cv } from "../data/cv";

const infoRows = [
  { label: "Full Name", value: cv.personal.fullName },
  { label: "Date of Birth", value: cv.personal.dob },
  { label: "Nationality", value: cv.personal.nationality },
  { label: "Birth Place", value: cv.personal.birthPlace },
  { label: "Gender", value: cv.personal.gender },
  { label: "Marital Status", value: cv.personal.marital },
  { label: "Languages", value: cv.personal.languages.join(", ") },
];

export default function About() {
  return (
    <section id="about" className="py-28 transition-colors duration-400" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-16">
        {/* Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs tracking-widest" style={{ color: "var(--gold)" }}>01</span>
          <div className="w-8 h-px" style={{ background: "var(--gold)" }} />
          <span className="text-xs tracking-widest uppercase" style={{ color: "var(--text-muted)" }}>About</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-serif leading-tight mb-8" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--text-primary)" }}>
              Who I Am
            </h2>
            <p className="text-base leading-relaxed mb-6 font-light" style={{ color: "var(--text-secondary)" }}>{cv.overview}</p>
            <p className="text-sm leading-relaxed font-light" style={{ color: "var(--text-muted)" }}>
              Currently serving as Supervisor of Mechanical &amp; Automation at Dynamic Engineering Steels,
              bridging cutting-edge automation with real-world industrial applications across Cambodia.
            </p>

            {/* Accent bar */}
            <div className="flex gap-3 mt-10">
              <div className="w-1 h-16 rounded-full" style={{ background: "var(--accent)" }} />
              <div className="w-1 h-16 rounded-full opacity-40" style={{ background: "var(--gold)" }} />
            </div>
          </div>

          <div>
            <h3 className="text-xs tracking-widest uppercase mb-6" style={{ color: "var(--text-muted)" }}>Personal Info</h3>
            <div style={{ borderTop: "1px solid var(--border)" }}>
              {infoRows.map((row) => (
                <div
                  key={row.label}
                  className="flex justify-between py-4 group"
                  style={{ borderBottom: "1px solid var(--border)" }}
                >
                  <span
                    className="text-xs tracking-wider uppercase transition-colors duration-200 group-hover:text-gold"
                    style={{ color: "var(--text-muted)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                  >
                    {row.label}
                  </span>
                  <span className="text-sm font-light" style={{ color: "var(--text-primary)" }}>{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
