type Page = string;

interface Props {
  navigate: (page: Page) => void;
}

export function QAIntro({ navigate }: Props) {
  return (
    <div style={{ fontFamily: "var(--font-sans)", paddingTop: 64 }}>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #0D2B5A 0%, #1A4A8A 100%)",
          padding: "80px 40px",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 20, padding: "5px 14px", marginBottom: 24 }}>
              <div style={{ width: 6, height: 6, background: "#4ADE80", borderRadius: "50%" }} />
              <span style={{ fontSize: 12, color: "#C5D8EE", fontWeight: 500 }}>Quality Assurance Services</span>
            </div>
            <h1 style={{ fontSize: 44, fontWeight: 700, color: "#fff", lineHeight: 1.2, letterSpacing: "-0.8px", marginBottom: 20 }}>
              Idatum QA: Compliance Built to Last
            </h1>
            <p style={{ fontSize: 17, color: "#C5D8EE", lineHeight: 1.8, marginBottom: 40 }}>
              Idatum QA delivers structured, auditor-tested compliance frameworks across ISMS, SOC 2, ISO 27001, ITGC, and Audit domains. We don't just help you pass — we help you build systems that perform under scrutiny, year after year.
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              <button
                onClick={() => navigate("contact")}
                style={{
                  background: "#fff",
                  color: "#0D2B5A",
                  border: "none",
                  cursor: "pointer",
                  padding: "14px 28px",
                  fontSize: 15,
                  fontWeight: 600,
                  borderRadius: 6,
                }}
              >
                Request a Consultation
              </button>
              <button
                onClick={() => navigate("qa-timeline")}
                style={{
                  background: "transparent",
                  color: "#fff",
                  border: "2px solid rgba(255,255,255,0.4)",
                  cursor: "pointer",
                  padding: "14px 28px",
                  fontSize: 15,
                  fontWeight: 600,
                  borderRadius: 6,
                }}
              >
                View Timeline
              </button>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=640&h=440&fit=crop&auto=format"
              alt="Quality assurance team reviewing compliance documentation"
              style={{ display: "block", width: "100%", height: 400, objectFit: "cover", borderRadius: 12, boxShadow: "0 24px 56px rgba(0,0,0,0.3)" }}
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: "80px 40px", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <h2 style={{ fontSize: 34, fontWeight: 700, color: "#0D2B5A", letterSpacing: "-0.5px", marginBottom: 12 }}>
            Our QA Service Areas
          </h2>
          <p style={{ fontSize: 16, color: "#4A6080", maxWidth: 560, margin: "0 auto" }}>
            We bring deep expertise across the most critical compliance and quality frameworks in use today.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {[
            { label: "ISMS", full: "Information Security Management", desc: "Design, implement, and maintain an ISO 27001-aligned Information Security Management System." },
            { label: "SOC 2", full: "Service Organization Controls", desc: "Achieve and sustain SOC 2 Type I and Type II compliance across all five Trust Service Criteria." },
            { label: "ISO 27001", full: "International Security Standard", desc: "Navigate the full certification lifecycle — from gap assessment to certification audit support." },
            { label: "ITGC", full: "IT General Controls", desc: "Build robust ITGC frameworks that satisfy internal audit, SOX, and external auditor requirements." },
            { label: "Audit Readiness", full: "End-to-End Audit Preparation", desc: "Structured readiness reviews, evidence packaging, and auditor liaison services." },
            { label: "Risk Assessment", full: "Organizational Risk Management", desc: "Comprehensive risk registers, heat maps, and treatment plans aligned to your risk appetite." },
          ].map((svc) => (
            <div
              key={svc.label}
              style={{
                background: "#fff",
                border: "1px solid #D1DCE8",
                borderRadius: 10,
                padding: 28,
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 24px rgba(13,43,90,0.1)";
                (e.currentTarget as HTMLDivElement).style.borderColor = "#1A5EA8";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                (e.currentTarget as HTMLDivElement).style.borderColor = "#D1DCE8";
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  background: "#0D2B5A",
                  color: "#fff",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.8px",
                  padding: "4px 10px",
                  borderRadius: 4,
                  marginBottom: 14,
                }}
              >
                {svc.label}
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: "#0D2B5A", marginBottom: 8 }}>{svc.full}</h3>
              <p style={{ fontSize: 13, color: "#4A6080", lineHeight: 1.7 }}>{svc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#F1F5FA", padding: "64px 40px", borderTop: "1px solid #D1DCE8" }}>
        <div style={{ maxWidth: 840, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: 40, alignItems: "center" }}>
          <div>
            <h2 style={{ fontSize: 28, fontWeight: 700, color: "#0D2B5A", marginBottom: 10 }}>
              Not sure where to begin?
            </h2>
            <p style={{ fontSize: 15, color: "#4A6080", lineHeight: 1.7 }}>
              Our QA specialists will conduct a complimentary readiness conversation to help you identify your most pressing compliance gaps.
            </p>
          </div>
          <button
            onClick={() => navigate("contact")}
            style={{
              background: "#1A5EA8",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              padding: "14px 28px",
              fontSize: 15,
              fontWeight: 600,
              borderRadius: 6,
              whiteSpace: "nowrap",
            }}
          >
            Request a Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
