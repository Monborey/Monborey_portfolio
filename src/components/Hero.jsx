import { cv } from "../data/cv";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
      style={{ background: "var(--bg-secondary)" }}
    >
      {/* Blue diagonal accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, var(--accent) 0%, transparent 45%)",
          opacity: 0.06,
        }}
      />

     

      {/* Large bg letters */}
      <div
        className="absolute top-1/2 -translate-y-1/2 right-6 text-[18vw] font-serif leading-none select-none pointer-events-none tracking-tighter hidden md:block"
        style={{ color: "var(--border-strong)", opacity: 0.4 }}
      >
        MB
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-16 pb-24 pt-36 w-full">
        {/* Badge */}
        <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full border" style={{ borderColor: "var(--border-strong)", background: "var(--bg-card)" }}>
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--gold)" }} />
          <span className="text-xs tracking-widest uppercase" style={{ color: "var(--text-muted)" }}>
            Open to Opportunities
          </span>
        </div>

        {/* Name */}
        <h1 className="font-serif leading-none tracking-tight mb-6" style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)", color: "var(--text-primary)" }}>
          MON
          <br />
          <span style={{ color: "var(--accent)" }}>Borey</span>
        </h1>

        {/* Divider row */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-10 h-0.5 rounded" style={{ background: "var(--gold)" }} />
          <span className="text-xs tracking-widest uppercase" style={{ color: "var(--text-muted)" }}>
            Mechanical &amp; Automation Engineer · Phnom Penh
          </span>
        </div>

        {/* Overview */}
        <p className="text-base leading-relaxed max-w-lg mb-10 font-light" style={{ color: "var(--text-secondary)" }}>
          {cv.overview}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <a
            href="#experience"
            className="px-8 py-3 text-xs font-semibold tracking-widest uppercase transition-all duration-300 rounded-sm"
            style={{ background: "var(--accent)", color: "#fff" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--accent-hover)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--accent)")}
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 text-xs font-semibold tracking-widest uppercase border transition-all duration-300 rounded-sm"
            style={{ borderColor: "var(--gold)", color: "var(--gold)" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "var(--gold)"; e.currentTarget.style.color = "var(--bg-primary)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--gold)"; }}
          >
            Contact Me
          </a>
        </div>


      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] tracking-widest uppercase" style={{ color: "var(--text-faint)" }}>Scroll</span>
        <div className="w-px h-10 animate-pulse" style={{ background: "linear-gradient(to bottom, var(--gold), transparent)" }} />
      </div>
    </section>
  );
}
