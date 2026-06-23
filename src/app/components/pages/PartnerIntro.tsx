type Page = string;
interface Props { navigate: (page: Page) => void; }

const partnerTypes = [
  {
    title: "Referral Partner",
    icon: "🤝",
    desc: "Introduce us to organizations in your network that need compliance or training support. Earn a referral fee for every successful engagement — no delivery involvement required.",
    best: "Consultants, advisors, and professional services firms with broad networks.",
  },
  {
    title: "Co-Delivery Partner",
    icon: "🔗",
    desc: "Collaborate with Idatum to deliver compliance and training programs to shared clients. We bring the specialist expertise; you bring the client relationship and local presence.",
    best: "HR firms, IT services companies, and management consultancies.",
  },
  {
    title: "Reseller Partner",
    icon: "📦",
    desc: "License and resell Idatum Academy's course library under your own brand. White-label training content with your organization's identity, backed by Idatum's methodology.",
    best: "Training companies, HR technology providers, and LMS operators.",
  },
  {
    title: "Technology Partner",
    icon: "⚙️",
    desc: "Integrate Idatum's compliance assessment tools and training content with your platform, creating bundled solutions that serve your customers' compliance needs.",
    best: "GRC platforms, HRIS providers, and compliance technology vendors.",
  },
];

export function PartnerIntro({ navigate }: Props) {
  return (
    <div style={{ fontFamily: "var(--font-sans)", paddingTop: 64 }}>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #0D2B5A 0%, #1A4A8A 100%)",
          padding: "80px 40px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 80% 40%, rgba(26,94,168,0.3) 0%, transparent 60%)" }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center", position: "relative", zIndex: 1 }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 20, padding: "5px 14px", marginBottom: 24 }}>
              <div style={{ width: 6, height: 6, background: "#4ADE80", borderRadius: "50%" }} />
              <span style={{ fontSize: 12, color: "#C5D8EE", fontWeight: 500 }}>Partner Program</span>
            </div>
            <h1 style={{ fontSize: 44, fontWeight: 700, color: "#fff", lineHeight: 1.2, letterSpacing: "-0.8px", marginBottom: 20 }}>
              Grow Together with the Idatum Partner Network
            </h1>
            <p style={{ fontSize: 17, color: "#C5D8EE", lineHeight: 1.8, marginBottom: 40 }}>
              Idatum's partner program is built for organizations that want to extend their service offering, increase revenue, and deliver genuine value to clients — without building compliance or training capabilities from scratch.
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              <button
                onClick={() => navigate("why-partner")}
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
                Explore Partnership Options
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
                }}
              >
                Speak to Our Team
              </button>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=640&h=440&fit=crop&auto=format"
              alt="Business partnership handshake"
              style={{ display: "block", width: "100%", height: 400, objectFit: "cover", borderRadius: 12, boxShadow: "0 24px 56px rgba(0,0,0,0.3)" }}
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: "#F1F5FA", borderBottom: "1px solid #D1DCE8", padding: "36px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
          {[
            { val: "40+", label: "Active Partners" },
            { val: "₹0", label: "Joining Fee" },
            { val: "15–25%", label: "Revenue Share" },
            { val: "48hr", label: "Onboarding Time" },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <p style={{ fontSize: 34, fontWeight: 800, color: "#0D2B5A", lineHeight: 1, marginBottom: 6 }}>{s.val}</p>
              <p style={{ fontSize: 13, color: "#4A6080" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partnership types */}
      <section style={{ padding: "72px 40px", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <h2 style={{ fontSize: 34, fontWeight: 700, color: "#0D2B5A", letterSpacing: "-0.5px", marginBottom: 12 }}>
            Partnership Models
          </h2>
          <p style={{ fontSize: 16, color: "#4A6080", maxWidth: 560, margin: "0 auto" }}>
            Four models designed for different types of organizations. Choose the one that fits your business — or combine elements from multiple models.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
          {partnerTypes.map((pt) => (
            <div
              key={pt.title}
              style={{
                background: "#fff",
                border: "1px solid #D1DCE8",
                borderRadius: 12,
                padding: 32,
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(13,43,90,0.1)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              }}
            >
              <div style={{ fontSize: 32, marginBottom: 14 }}>{pt.icon}</div>
              <h3 style={{ fontSize: 19, fontWeight: 700, color: "#0D2B5A", marginBottom: 10 }}>{pt.title}</h3>
              <p style={{ fontSize: 14, color: "#4A6080", lineHeight: 1.7, marginBottom: 16 }}>{pt.desc}</p>
              <div style={{ background: "#F1F5FA", borderRadius: 6, padding: "10px 14px" }}>
                <p style={{ fontSize: 12, color: "#4A6080" }}>
                  <span style={{ fontWeight: 700, color: "#0D2B5A" }}>Best for: </span>
                  {pt.best}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
