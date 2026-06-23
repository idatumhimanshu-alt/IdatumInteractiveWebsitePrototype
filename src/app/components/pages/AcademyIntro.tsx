type Page = string;
interface Props { navigate: (page: Page) => void; }

const tracks = [
  { label: "POSH", color: "#1A5EA8", desc: "Prevention of Sexual Harassment" },
  { label: "ISMS", color: "#0D6B4E", desc: "Information Security Management" },
  { label: "SOC 2", color: "#6B3DAB", desc: "Service Organization Controls" },
  { label: "ISO", color: "#8B4513", desc: "International Standards" },
  { label: "ITGC", color: "#B8370A", desc: "IT General Controls" },
  { label: "Audit", color: "#2B6A7C", desc: "Internal & External Audit" },
];

export function AcademyIntro({ navigate }: Props) {
  return (
    <div style={{ fontFamily: "var(--font-sans)", paddingTop: 64 }}>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #0D2B5A 0%, #0D4A8A 60%, #1A5EA8 100%)",
          padding: "80px 40px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse at 70% 40%, rgba(26,94,168,0.25) 0%, transparent 65%)" }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center", position: "relative", zIndex: 1 }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 20, padding: "5px 14px", marginBottom: 24 }}>
              <div style={{ width: 6, height: 6, background: "#4ADE80", borderRadius: "50%" }} />
              <span style={{ fontSize: 12, color: "#C5D8EE", fontWeight: 500 }}>Professional Training Programs</span>
            </div>
            <h1 style={{ fontSize: 44, fontWeight: 700, color: "#fff", lineHeight: 1.2, letterSpacing: "-0.8px", marginBottom: 20 }}>
              Training Academy: Training That Builds Real Competency
            </h1>
            <p style={{ fontSize: 17, color: "#C5D8EE", lineHeight: 1.8, marginBottom: 40 }}>
              Training Academy delivers certification-aligned training across the most critical compliance and workplace domains. Led by active practitioners — not just trainers — every course is built around what your team will actually encounter on the job.
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              <button
                onClick={() => navigate("training-tracks")}
                style={{
                  background: "#fff",
                  color: "#0D2B5A",
                  border: "none",
                  cursor: "pointer",
                  padding: "14px 28px",
                  fontSize: 15,
                  fontWeight: 700,
                  borderRadius: 6,
                  transition: "all 0.15s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#F1F5FA"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                View Courses
              </button>
              <button
                onClick={() => navigate("contact")}
                style={{
                  background: "transparent",
                  color: "#fff",
                  border: "2px solid rgba(255,255,255,0.4)",
                  cursor: "pointer",
                  padding: "14px 28px",
                  fontSize: 15,
                  fontWeight: 600,
                  borderRadius: 6,
                  transition: "all 0.15s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#fff"; e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)"; e.currentTarget.style.background = "transparent"; }}
              >
                Request a Demo
              </button>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=640&h=440&fit=crop&auto=format"
              alt="Professional compliance training session"
              style={{ display: "block", width: "100%", height: 400, objectFit: "cover", borderRadius: 12, boxShadow: "0 24px 56px rgba(0,0,0,0.3)" }}
            />
          </div>
        </div>
      </section>

      {/* Training tracks preview */}
      <section style={{ padding: "80px 40px", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: "#1A5EA8", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: 12 }}>Training Tracks</p>
          <h2 style={{ fontSize: 34, fontWeight: 700, color: "#0D2B5A", letterSpacing: "-0.5px", marginBottom: 12 }}>Six Specialized Training Areas</h2>
          <p style={{ fontSize: 16, color: "#4A6080", maxWidth: 560, margin: "0 auto" }}>
            Each track is designed to build both foundational knowledge and operational competency — not just exam preparation.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {tracks.map((t) => (
            <button
              key={t.label}
              onClick={() => navigate("training-tracks")}
              style={{
                background: "#fff",
                border: "1px solid #D1DCE8",
                borderRadius: 10,
                padding: "24px 28px",
                cursor: "pointer",
                textAlign: "left",
                display: "flex",
                alignItems: "center",
                gap: 16,
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = t.color;
                (e.currentTarget as HTMLButtonElement).style.boxShadow = `0 6px 20px ${t.color}20`;
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "#D1DCE8";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
              }}
            >
              <div style={{ width: 44, height: 44, background: `${t.color}18`, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontSize: 11, fontWeight: 800, color: t.color, letterSpacing: "0.5px" }}>{t.label}</span>
              </div>
              <div>
                <p style={{ fontSize: 15, fontWeight: 700, color: "#0D2B5A", marginBottom: 3 }}>{t.label} Training</p>
                <p style={{ fontSize: 12, color: "#4A6080" }}>{t.desc}</p>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ marginLeft: "auto", flexShrink: 0 }}>
                <path d="M5 12h14M12 5l7 7-7 7" stroke={t.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          ))}
        </div>
      </section>

      {/* Why Academy */}
      <section style={{ background: "#F1F5FA", padding: "72px 40px", borderTop: "1px solid #D1DCE8" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=580&h=380&fit=crop&auto=format"
              alt="Corporate training workshop"
              style={{ display: "block", width: "100%", height: 340, objectFit: "cover", borderRadius: 12 }}
            />
          </div>
          <div>
            <h2 style={{ fontSize: 32, fontWeight: 700, color: "#0D2B5A", letterSpacing: "-0.5px", marginBottom: 20 }}>
              Why Train with Training Academy?
            </h2>
            {[
              { title: "Practitioner-Led", desc: "Instructors are active compliance professionals — not career trainers — who bring real-world scenarios into every session." },
              { title: "Certification-Aligned", desc: "All courses are mapped to recognized certification bodies and audit standards, so learning translates directly to verifiable credentials." },
              { title: "Flexible Delivery", desc: "Live virtual, in-person, and self-paced modules available. We match delivery to your team's schedule and learning preferences." },
              { title: "Customizable Content", desc: "Programs can be tailored to your industry, regulatory context, and organizational maturity level." },
            ].map((item) => (
              <div key={item.title} style={{ display: "flex", gap: 14, marginBottom: 20 }}>
                <div style={{ width: 6, height: 6, background: "#1A5EA8", borderRadius: "50%", marginTop: 8, flexShrink: 0 }} />
                <div>
                  <p style={{ fontSize: 15, fontWeight: 700, color: "#0D2B5A", marginBottom: 4 }}>{item.title}</p>
                  <p style={{ fontSize: 14, color: "#4A6080", lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
