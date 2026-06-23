type Page = string;

interface Props {
  navigate: (page: Page) => void;
}

export function ProcessBuilt({ navigate }: Props) {
  return (
    <div style={{ fontFamily: "var(--font-sans)", paddingTop: 64 }}>
      {/* Header */}
      <section style={{ background: "#F1F5FA", padding: "64px 40px", borderBottom: "1px solid #D1DCE8" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: "#1A5EA8", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: 12 }}>
            Our Methodology
          </p>
          <h1 style={{ fontSize: 44, fontWeight: 700, color: "#0D2B5A", lineHeight: 1.2, letterSpacing: "-0.8px", marginBottom: 20 }}>
            A Process Built for Your Organization
          </h1>
          <p style={{ fontSize: 17, color: "#4A6080", lineHeight: 1.8 }}>
            No two organizations are identical. Our approach begins with deep listening and ends with a compliance system that fits how your organization actually works.
          </p>
        </div>
      </section>

      {/* Process steps */}
      <section style={{ padding: "80px 40px", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "start" }}>
          {/* Left: steps */}
          <div>
            {[
              {
                title: "Listen Before We Lead",
                desc: "Every engagement begins with structured discovery — not a pre-packaged slide deck. We interview leadership, operations, and technical staff to build a genuine picture of your environment.",
                icon: (
                  <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" stroke="#1A5EA8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                ),
              },
              {
                title: "Design Around Reality",
                desc: "We don't retrofit your organization into a generic framework. We map framework requirements to your existing processes, finding the most efficient path to compliance.",
                icon: (
                  <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm12 0a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" stroke="#1A5EA8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                ),
              },
              {
                title: "Build With Your Team",
                desc: "Compliance that lives in a consultant's head is fragile. We work hand-in-hand with your team, transferring knowledge as we build, so they can own and maintain what we create.",
                icon: (
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" stroke="#1A5EA8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                ),
              },
              {
                title: "Test Under Pressure",
                desc: "Before any external audit, we conduct internal simulation exercises designed to expose gaps under realistic conditions — so findings are made on our time, not the auditor's.",
                icon: (
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="#1A5EA8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                ),
              },
              {
                title: "Sustain and Improve",
                desc: "Certification is not the finish line. We build continuous monitoring routines and annual review cycles into every engagement, protecting your certification status and improving your posture year over year.",
                icon: (
                  <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" stroke="#1A5EA8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                ),
              },
            ].map((step, i) => (
              <div key={step.title} style={{ display: "flex", gap: 20, marginBottom: 36 }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    background: "#EEF4FF",
                    borderRadius: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">{step.icon}</svg>
                </div>
                <div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: "#0D2B5A", marginBottom: 8 }}>
                    {`${String(i + 1).padStart(2, "0")}. ${step.title}`}
                  </h3>
                  <p style={{ fontSize: 14, color: "#4A6080", lineHeight: 1.7 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: image + callouts */}
          <div>
            <div style={{ borderRadius: 12, overflow: "hidden", marginBottom: 24 }}>
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop&auto=format"
                alt="Compliance documentation process"
                style={{ display: "block", width: "100%", height: 320, objectFit: "cover" }}
              />
            </div>

            <div style={{ background: "#0D2B5A", borderRadius: 10, padding: 28, color: "#fff" }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>
                Tailored to Every Industry
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {["Financial Services", "Healthcare", "Technology", "Manufacturing", "Professional Services", "Government"].map((ind) => (
                  <div key={ind} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 6, height: 6, background: "#1A5EA8", borderRadius: "50%" }} />
                    <span style={{ fontSize: 13, color: "#C5D8EE" }}>{ind}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
