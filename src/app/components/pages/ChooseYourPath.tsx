type Page = string;

interface Props {
  navigate: (page: Page) => void;
}

export function ChooseYourPath({ navigate }: Props) {
  return (
    <div style={{ fontFamily: "var(--font-sans)", paddingTop: 64 }}>
      <section
        style={{
          background: "linear-gradient(135deg, #0D2B5A 0%, #1A4A8A 100%)",
          padding: "80px 40px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: "#9BB5D4", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: 12 }}>
            Get Started
          </p>
          <h1 style={{ fontSize: 44, fontWeight: 700, color: "#fff", lineHeight: 1.2, letterSpacing: "-0.8px", marginBottom: 20 }}>
            Choose Your Path with Idatum
          </h1>
          <p style={{ fontSize: 18, color: "#C5D8EE", lineHeight: 1.7 }}>
            Whether you need compliance consulting, professional training, or want to join our partner ecosystem — we have the right engagement model for your organization.
          </p>
        </div>
      </section>

      <section style={{ padding: "80px 40px", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
          {[
            {
              badge: "Compliance & QA",
              title: "I Need Compliance & Quality Assurance Support",
              desc: "Your organization needs expert guidance navigating regulatory requirements, building audit-ready processes, and sustaining quality standards over time.",
              features: ["Gap assessments & readiness reviews", "ISMS, SOC 2, ISO, ITGC framework implementation", "Ongoing QA support & monitoring", "Audit preparation & representation"],
              cta: "Explore Idatum QA",
              page: "qa-intro",
              accent: "#1A5EA8",
            },
            {
              badge: "Training",
              title: "I Want to Train My Team on Compliance Topics",
              desc: "Your team needs structured, certified training programs delivered by subject-matter experts who understand the nuances of workplace compliance.",
              features: ["POSH, ISMS, SOC 2, ISO training", "Live, on-demand & blended formats", "Customized to your industry", "Certification-ready programs"],
              cta: "Browse Courses",
              page: "academy-intro",
              accent: "#0D6B4E",
            },
            {
              badge: "Partnership",
              title: "I Want to Partner with Idatum",
              desc: "Your organization delivers adjacent services and wants to expand your offering through a structured partnership with a specialized compliance and training firm.",
              features: ["Co-delivery partnership model", "Revenue sharing arrangements", "White-label training content", "Joint go-to-market programs"],
              cta: "Explore Partnership",
              page: "partner-intro",
              accent: "#6B3DAB",
            },
          ].map((card) => (
            <div
              key={card.badge}
              style={{
                background: "#fff",
                border: "1px solid #D1DCE8",
                borderRadius: 12,
                padding: 36,
                display: "flex",
                flexDirection: "column",
                transition: "box-shadow 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 40px rgba(13,43,90,0.12)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  background: `${card.accent}18`,
                  color: card.accent,
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.8px",
                  textTransform: "uppercase",
                  padding: "5px 12px",
                  borderRadius: 20,
                  marginBottom: 20,
                  alignSelf: "flex-start",
                }}
              >
                {card.badge}
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: "#0D2B5A", lineHeight: 1.35, marginBottom: 16 }}>
                {card.title}
              </h3>
              <p style={{ fontSize: 14, color: "#4A6080", lineHeight: 1.7, marginBottom: 24 }}>
                {card.desc}
              </p>
              <ul style={{ margin: "0 0 32px 0", padding: 0, listStyle: "none", flex: 1 }}>
                {card.features.map((f) => (
                  <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10 }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginTop: 2, flexShrink: 0 }}>
                      <circle cx="8" cy="8" r="7" fill={`${card.accent}20`} />
                      <path d="M5 8l2 2 4-4" stroke={card.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span style={{ fontSize: 13, color: "#4A6080" }}>{f}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => navigate(card.page)}
                style={{
                  background: card.accent,
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                  padding: "13px 24px",
                  fontSize: 14,
                  fontWeight: 600,
                  borderRadius: 6,
                  transition: "opacity 0.15s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                {card.cta}
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
