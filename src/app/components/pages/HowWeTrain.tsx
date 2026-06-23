type Page = string;
interface Props { navigate: (page: Page) => void; }

const methods = [
  {
    title: "Live Virtual Instructor-Led",
    icon: (
      <path d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" stroke="#1A5EA8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    ),
    desc: "Real-time sessions delivered via virtual classroom. Participants engage directly with the instructor, ask questions, and work through case studies with peers — all without travel overhead.",
    features: ["Live Q&A and discussion", "Group breakout exercises", "Session recordings available", "Cohort-based scheduling"],
  },
  {
    title: "In-Person Workshop",
    icon: (
      <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" stroke="#1A5EA8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    ),
    desc: "Delivered at your location or a neutral venue. Best for teams that benefit from hands-on facilitation, working through organization-specific scenarios in a structured setting.",
    features: ["On-site at your premises", "Custom case studies", "Tabletop exercises", "Group certification pathways"],
  },
  {
    title: "Self-Paced On-Demand",
    icon: (
      <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#1A5EA8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    ),
    desc: "Learners complete modules at their own pace through our learning platform. Ideal for refresher training, onboarding new staff, or organizations with distributed teams across time zones.",
    features: ["24/7 platform access", "Progress tracking & reporting", "Completion certificates", "Mobile-compatible"],
  },
  {
    title: "Blended Learning Programs",
    icon: (
      <path d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" stroke="#1A5EA8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    ),
    desc: "A structured combination of self-paced pre-work, live application sessions, and post-training assessments. The most effective format for deep competency development.",
    features: ["Pre-work modules", "Live application sessions", "Post-training assessments", "Manager dashboards"],
  },
];

export function HowWeTrain({ navigate }: Props) {
  return (
    <div style={{ fontFamily: "var(--font-sans)", paddingTop: 64 }}>
      {/* Header */}
      <section style={{ background: "#0D2B5A", padding: "72px 40px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: "#9BB5D4", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: 12 }}>
            Our Methodology
          </p>
          <h1 style={{ fontSize: 44, fontWeight: 700, color: "#fff", lineHeight: 1.2, letterSpacing: "-0.8px", marginBottom: 20 }}>
            How We Train
          </h1>
          <p style={{ fontSize: 17, color: "#C5D8EE", lineHeight: 1.8 }}>
            Idatum Academy offers four delivery formats designed to fit any team structure, schedule, or learning objective. Every format is built around the same core principle: real knowledge transfer, not box-ticking.
          </p>
        </div>
      </section>

      {/* Training methods */}
      <section style={{ padding: "80px 40px", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
          {methods.map((m) => (
            <div
              key={m.title}
              style={{
                background: "#fff",
                border: "1px solid #D1DCE8",
                borderRadius: 12,
                padding: 36,
                transition: "box-shadow 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(13,43,90,0.1)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.boxShadow = "none")}
            >
              <div style={{ width: 52, height: 52, background: "#EEF4FF", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">{m.icon}</svg>
              </div>
              <h3 style={{ fontSize: 19, fontWeight: 700, color: "#0D2B5A", marginBottom: 12 }}>{m.title}</h3>
              <p style={{ fontSize: 14, color: "#4A6080", lineHeight: 1.7, marginBottom: 20 }}>{m.desc}</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                {m.features.map((f) => (
                  <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ marginTop: 2, flexShrink: 0 }}>
                      <circle cx="7" cy="7" r="6" fill="#DCFCE7"/>
                      <path d="M4.5 7l2 2 3-3" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span style={{ fontSize: 12, color: "#4A6080" }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Training philosophy */}
      <section style={{ background: "#F1F5FA", padding: "64px 40px", borderTop: "1px solid #D1DCE8" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <h2 style={{ fontSize: 32, fontWeight: 700, color: "#0D2B5A", letterSpacing: "-0.5px", marginBottom: 20 }}>
              Training Built Around Competency, Not Compliance Checkboxes
            </h2>
            <p style={{ fontSize: 15, color: "#4A6080", lineHeight: 1.8, marginBottom: 20 }}>
              Too many compliance training programs exist solely to generate completion certificates. Idatum Academy is built differently. Our learning design starts with the job to be done — what your team needs to actually do as a result of training — and works backward to the curriculum.
            </p>
            <p style={{ fontSize: 15, color: "#4A6080", lineHeight: 1.8, marginBottom: 32 }}>
              This means every module connects learning to application, and every assessment measures capability rather than memorization. Your team emerges from training ready to act, not just ready to pass a test.
            </p>
            <button
              onClick={() => navigate("contact")}
              style={{
                background: "#1A5EA8",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                padding: "13px 24px",
                fontSize: 14,
                fontWeight: 600,
                borderRadius: 6,
              }}
            >
              Contact Us to Learn More
            </button>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=580&h=400&fit=crop&auto=format"
              alt="Instructor-led compliance training"
              style={{ display: "block", width: "100%", height: 360, objectFit: "cover", borderRadius: 12, boxShadow: "0 12px 40px rgba(13,43,90,0.12)" }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
