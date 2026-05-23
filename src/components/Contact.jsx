import { cv } from "../data/cv";

function ContactItem({ icon, label, href, value }) {
  return (
    <a
      href={href}
      className="flex items-center gap-4 group transition-all duration-300"
    >
      <div
        className="w-11 h-11 rounded-sm border flex items-center justify-center transition-all duration-300 shrink-0"
        style={{ borderColor: "var(--border-strong)", background: "var(--bg-card)" }}
        onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--gold)"; e.currentTarget.style.background = "var(--gold)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border-strong)"; e.currentTarget.style.background = "var(--bg-card)"; }}
      >
        {icon}
      </div>
      <div>
        <p className="text-xs tracking-widest uppercase mb-0.5" style={{ color: "var(--text-muted)" }}>{label}</p>
        <p className="text-sm font-light transition-colors" style={{ color: "var(--text-secondary)" }}>{value}</p>
      </div>
    </a>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-28 transition-colors duration-400" style={{ background: "var(--bg-secondary)" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-16">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs tracking-widest" style={{ color: "var(--gold)" }}>06</span>
          <div className="w-8 h-px" style={{ background: "var(--gold)" }} />
          <span className="text-xs tracking-widest uppercase" style={{ color: "var(--text-muted)" }}>Contact</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <h2 className="font-serif leading-tight mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--text-primary)" }}>
              Let's Connect
            </h2>
            <p className="text-base font-light leading-relaxed mb-12" style={{ color: "var(--text-secondary)" }}>
              Open to opportunities, collaborations, and conversations around mechanical engineering and industrial automation.
            </p>

            <div className="flex flex-col gap-7">
              <ContactItem
                label="Email"
                href={`mailto:${cv.contact.email}`}
                value={cv.contact.email}
                icon={
                  <svg className="w-4 h-4" style={{ color: "var(--accent)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                }
              />
              <ContactItem
                label="Phone"
                href={`tel:${cv.contact.phone}`}
                value={cv.contact.phone}
                icon={
                  <svg className="w-4 h-4" style={{ color: "var(--accent)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                }
              />
              <ContactItem
                label="Location"
                href="#"
                value={cv.contact.location}
                icon={
                  <svg className="w-4 h-4" style={{ color: "var(--accent)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                }
              />
              <ContactItem
                label="GitHub"
                href={cv.contact.github}
                value={cv.contact.github.replace("https://", "")}
                icon={
                  <svg className="w-4 h-4" style={{ color: "var(--accent)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                  </svg>
                }
              />
            </div>
          </div>

          {/* Right: References */}
          <div>
            <h3 className="text-xs tracking-widest uppercase mb-8" style={{ color: "var(--text-muted)" }}>References</h3>
            <div className="flex flex-col gap-5">
              {cv.referees.map((ref, i) => (
                <div
                  key={i}
                  className="p-6 border rounded-sm transition-all duration-300"
                  style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold shrink-0"
                      style={{ background: "var(--accent)", color: "#fff" }}
                    >
                      {ref.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                    </div>
                    <div>
                      <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>{ref.name}</p>
                      <p className="text-xs font-light leading-snug" style={{ color: "var(--text-muted)" }}>{ref.role}</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5 pl-12">
                    <a href={`tel:${ref.phone}`} className="text-xs transition-colors" style={{ color: "var(--text-muted)" }}
                      onMouseEnter={(e) => (e.target.style.color = "var(--gold)")}
                      onMouseLeave={(e) => (e.target.style.color = "var(--text-muted)")}>{ref.phone}</a>
                    <a href={`mailto:${ref.email}`} className="text-xs transition-colors" style={{ color: "var(--text-muted)" }}
                      onMouseEnter={(e) => (e.target.style.color = "var(--gold)")}
                      onMouseLeave={(e) => (e.target.style.color = "var(--text-muted)")}>{ref.email}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
