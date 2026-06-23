type Page = string;

interface Props {
  navigate: (page: Page) => void;
}

export function PartnerVsVendor({ navigate }: Props) {
  const comparisons = [
    {
      dimension: "Relationship Model",
      partner: "Long-term, embedded engagement aligned to your goals",
      vendor: "Project-based, transactional, ends at delivery",
    },
    {
      dimension: "Knowledge Transfer",
      partner: "We build your team's internal capability as we work",
      vendor: "Knowledge stays with the consultant, not your organization",
    },
    {
      dimension: "Accountability",
      partner: "Shared ownership of outcomes and audit results",
      vendor: "Accountability ends when the statement of work is signed off",
    },
    {
      dimension: "Pricing Structure",
      partner: "Outcome-aligned; we win when you win",
      vendor: "Time-and-materials or fixed-fee; hours billed regardless of result",
    },
    {
      dimension: "Communication",
      partner: "Proactive, ongoing communication and status updates",
      vendor: "Responsive to requests; you manage the relationship",
    },
    {
      dimension: "Post-Engagement",
      partner: "Continued advisory, QBRs, and annual readiness reviews",
      vendor: "Handover document and sign-off; engagement complete",
    },
  ];

  return (
    <div style={{ fontFamily: "var(--font-sans)", paddingTop: 64 }}>
      {/* Header */}
      <section style={{ background: "#0D2B5A", padding: "64px 40px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: "#9BB5D4", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: 12 }}>
            The Idatum Difference
          </p>
          <h1 style={{ fontSize: 44, fontWeight: 700, color: "#fff", lineHeight: 1.2, letterSpacing: "-0.8px", marginBottom: 20 }}>
            Partner vs. Vendor: Why It Matters
          </h1>
          <p style={{ fontSize: 17, color: "#C5D8EE", lineHeight: 1.8 }}>
            The compliance industry is full of vendors. Idatum is something different — a genuine partner that embeds accountability into every engagement.
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section style={{ padding: "80px 40px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ border: "1px solid #D1DCE8", borderRadius: 12, overflow: "hidden" }}>
          {/* Table header */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              background: "#F1F5FA",
              borderBottom: "2px solid #D1DCE8",
            }}
          >
            <div style={{ padding: "16px 24px", fontSize: 13, fontWeight: 700, color: "#4A6080", textTransform: "uppercase", letterSpacing: "0.5px" }}>
              Dimension
            </div>
            <div
              style={{
                padding: "16px 24px",
                fontSize: 14,
                fontWeight: 700,
                color: "#fff",
                background: "#0D2B5A",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="#4ADE80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Idatum as Partner
            </div>
            <div style={{ padding: "16px 24px", fontSize: 14, fontWeight: 700, color: "#4A6080", borderLeft: "1px solid #D1DCE8" }}>
              Typical Vendor
            </div>
          </div>

          {comparisons.map((row, i) => (
            <div
              key={row.dimension}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                borderBottom: i < comparisons.length - 1 ? "1px solid #D1DCE8" : "none",
                background: i % 2 === 0 ? "#fff" : "#FAFBFD",
              }}
            >
              <div style={{ padding: "20px 24px", fontSize: 14, fontWeight: 600, color: "#0D2B5A" }}>
                {row.dimension}
              </div>
              <div style={{ padding: "20px 24px", fontSize: 14, color: "#0D2B5A", lineHeight: 1.6, borderLeft: "2px solid #1A5EA8" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ marginTop: 3, flexShrink: 0 }}>
                    <circle cx="7" cy="7" r="6" fill="#DCFCE7"/>
                    <path d="M4.5 7l2 2 3-3" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {row.partner}
                </div>
              </div>
              <div style={{ padding: "20px 24px", fontSize: 14, color: "#6B7280", lineHeight: 1.6, borderLeft: "1px solid #D1DCE8" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ marginTop: 3, flexShrink: 0 }}>
                    <circle cx="7" cy="7" r="6" fill="#FEE2E2"/>
                    <path d="M5 9l4-4M9 9L5 5" stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {row.vendor}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 48, background: "#F1F5FA", border: "1px solid #D1DCE8", borderRadius: 10, padding: 32, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <h3 style={{ fontSize: 20, fontWeight: 700, color: "#0D2B5A", marginBottom: 8 }}>
              Ready to work with a real partner?
            </h3>
            <p style={{ fontSize: 14, color: "#4A6080" }}>
              Start with a consultation to see how the partnership model works in practice.
            </p>
          </div>
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
              whiteSpace: "nowrap",
              marginLeft: 32,
            }}
          >
            Request a Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
