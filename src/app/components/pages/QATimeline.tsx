type Page = string;

interface Props {
  navigate: (page: Page) => void;
}

const phases = [
  {
    num: "01",
    title: "Discovery & Scoping",
    duration: "Weeks 1–2",
    desc: "We conduct structured interviews with your key stakeholders, review existing documentation, and map your current state against target frameworks. Output: scoping report and project charter.",
    deliverables: ["Stakeholder interview summary", "As-is compliance map", "Project charter & timeline"],
  },
  {
    num: "02",
    title: "Gap Assessment",
    duration: "Weeks 3–5",
    desc: "A comprehensive gap analysis across all applicable control domains. We quantify gaps by severity, effort, and risk impact — giving you a clear picture of where you stand.",
    deliverables: ["Gap assessment report", "Risk-prioritized gap register", "Remediation roadmap"],
  },
  {
    num: "03",
    title: "Remediation & Implementation",
    duration: "Weeks 6–16",
    desc: "We work alongside your team to close gaps systematically — drafting policies, building controls, configuring tooling, and training personnel on new processes.",
    deliverables: ["Policy & procedure library", "Control implementation evidence", "Training completion records"],
  },
  {
    num: "04",
    title: "Internal Audit & Validation",
    duration: "Weeks 17–19",
    desc: "We perform an internal audit simulation against the target framework, identify any remaining gaps, and remediate before the formal audit window.",
    deliverables: ["Internal audit report", "Residual risk summary", "Pre-audit remediation log"],
  },
  {
    num: "05",
    title: "Formal Audit Support",
    duration: "Weeks 20–22",
    desc: "Idatum serves as your liaison with external auditors — managing evidence requests, fielding technical inquiries, and ensuring a smooth audit experience.",
    deliverables: ["Evidence package", "Auditor correspondence log", "Final audit debrief"],
  },
  {
    num: "06",
    title: "Ongoing Monitoring & Advisory",
    duration: "Continuous",
    desc: "Post-certification, we remain engaged through quarterly reviews, continuous control monitoring, and annual readiness assessments to protect your certification status.",
    deliverables: ["Quarterly compliance reviews", "Continuous monitoring reports", "Annual readiness assessment"],
  },
];

export function QATimeline({ navigate }: Props) {
  return (
    <div style={{ fontFamily: "var(--font-sans)", paddingTop: 64 }}>
      {/* Header */}
      <section style={{ background: "#0D2B5A", padding: "64px 40px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: "#9BB5D4", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: 12 }}>
            Our Engagement Model
          </p>
          <h1 style={{ fontSize: 44, fontWeight: 700, color: "#fff", lineHeight: 1.2, letterSpacing: "-0.8px", marginBottom: 20 }}>
            The QA Engagement Timeline
          </h1>
          <p style={{ fontSize: 17, color: "#C5D8EE", lineHeight: 1.8 }}>
            A structured, six-phase engagement that takes your organization from current state to certified — with full transparency at every step.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: "80px 40px", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: 28,
              top: 0,
              bottom: 0,
              width: 2,
              background: "linear-gradient(to bottom, #1A5EA8, #D1DCE8)",
            }}
          />

          {phases.map((phase, i) => (
            <div
              key={phase.num}
              style={{
                display: "flex",
                gap: 32,
                marginBottom: i < phases.length - 1 ? 48 : 0,
                position: "relative",
              }}
            >
              {/* Circle */}
              <div
                style={{
                  width: 58,
                  height: 58,
                  borderRadius: "50%",
                  background: i === phases.length - 1 ? "#0D6B4E" : "#0D2B5A",
                  border: "3px solid #fff",
                  boxShadow: "0 0 0 2px #1A5EA8",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <span style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>{phase.num}</span>
              </div>

              {/* Content */}
              <div
                style={{
                  flex: 1,
                  background: "#fff",
                  border: "1px solid #D1DCE8",
                  borderRadius: 10,
                  padding: 28,
                  marginTop: 4,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                  <h3 style={{ fontSize: 19, fontWeight: 700, color: "#0D2B5A" }}>{phase.title}</h3>
                  <span
                    style={{
                      background: "#EEF4FF",
                      color: "#1A5EA8",
                      fontSize: 12,
                      fontWeight: 600,
                      padding: "4px 12px",
                      borderRadius: 20,
                      whiteSpace: "nowrap",
                      marginLeft: 16,
                    }}
                  >
                    {phase.duration}
                  </span>
                </div>
                <p style={{ fontSize: 14, color: "#4A6080", lineHeight: 1.7, marginBottom: 16 }}>{phase.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {phase.deliverables.map((d) => (
                    <span
                      key={d}
                      style={{
                        background: "#F1F5FA",
                        border: "1px solid #D1DCE8",
                        color: "#0D2B5A",
                        fontSize: 12,
                        fontWeight: 500,
                        padding: "4px 10px",
                        borderRadius: 4,
                      }}
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          style={{
            marginTop: 64,
            background: "#0D2B5A",
            borderRadius: 12,
            padding: "40px 48px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <h3 style={{ fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 8 }}>
              Ready to start your compliance journey?
            </h3>
            <p style={{ fontSize: 14, color: "#9BB5D4" }}>
              Discuss your timeline and scope with one of our QA specialists.
            </p>
          </div>
          <button
            onClick={() => navigate("contact")}
            style={{
              background: "#fff",
              color: "#0D2B5A",
              border: "none",
              cursor: "pointer",
              padding: "13px 24px",
              fontSize: 14,
              fontWeight: 700,
              borderRadius: 6,
              whiteSpace: "nowrap",
              marginLeft: 32,
            }}
          >
            Discuss Your Timeline
          </button>
        </div>
      </section>
    </div>
  );
}
