type Page = string;
interface Props { navigate: (page: Page) => void; }

const benefits = [
  {
    title: "Immediate Revenue Opportunity",
    desc: "Start earning from your existing relationships. Referral partners can generate revenue from day one with minimal setup — no certification required.",
    metric: "15–25%",
    metricLabel: "Revenue share on all referred engagements",
    icon: <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#1A5EA8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>,
  },
  {
    title: "Expand Your Service Offering",
    desc: "Add compliance and training capabilities to your portfolio without the investment of building a specialist practice. Serve more of your clients' needs without referring them elsewhere.",
    metric: "6",
    metricLabel: "Compliance domains available to partners",
    icon: <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm12 0a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" stroke="#1A5EA8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>,
  },
  {
    title: "Dedicated Partner Support",
    desc: "Every Idatum partner is assigned a dedicated Partner Success Manager — your single point of contact for deal registration, proposal support, and client escalations.",
    metric: "48hr",
    metricLabel: "Maximum response time for partner enquiries",
    icon: <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" stroke="#1A5EA8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>,
  },
  {
    title: "White-Label Flexibility",
    desc: "Reseller and co-delivery partners can deliver Idatum programs under their own brand. We provide the methodology, content, and expert delivery while you maintain the client relationship.",
    metric: "100%",
    metricLabel: "White-label option available",
    icon: <path d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z" stroke="#1A5EA8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>,
  },
  {
    title: "Jointly Developed Go-To-Market",
    desc: "We co-invest in pipeline development with serious partners. Joint webinars, co-branded content, and event participation are all available to qualified partners.",
    metric: "₹0",
    metricLabel: "Cost to access partner marketing resources",
    icon: <path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" stroke="#1A5EA8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>,
  },
  {
    title: "No Exclusivity Requirements",
    desc: "We don't require exclusivity. You can continue working with other compliance vendors while partnering with Idatum — we earn your referrals by delivering better outcomes.",
    metric: "Open",
    metricLabel: "Non-exclusive partnership model",
    icon: <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="#1A5EA8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>,
  },
];

export function WhyPartner({ navigate }: Props) {
  return (
    <div style={{ fontFamily: "var(--font-sans)", paddingTop: 64 }}>
      {/* Header */}
      <section style={{ background: "#0D2B5A", padding: "72px 40px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: "#9BB5D4", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: 12 }}>
            Partnership Benefits
          </p>
          <h1 style={{ fontSize: 44, fontWeight: 700, color: "#fff", lineHeight: 1.2, letterSpacing: "-0.8px", marginBottom: 20 }}>
            Why Partner with Idatum?
          </h1>
          <p style={{ fontSize: 17, color: "#C5D8EE", lineHeight: 1.8 }}>
            We built our partner program around what partners actually want: real revenue, real support, and a firm that makes them look good in front of their clients.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ padding: "80px 40px", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {benefits.map((b) => (
            <div
              key={b.title}
              style={{
                background: "#fff",
                border: "1px solid #D1DCE8",
                borderRadius: 12,
                padding: 32,
                transition: "box-shadow 0.2s, transform 0.2s",
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
              <div style={{ width: 48, height: 48, background: "#EEF4FF", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">{b.icon}</svg>
              </div>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: "#0D2B5A", marginBottom: 10, lineHeight: 1.35 }}>{b.title}</h3>
              <p style={{ fontSize: 13, color: "#4A6080", lineHeight: 1.7, marginBottom: 20 }}>{b.desc}</p>
              <div style={{ borderTop: "1px solid #EEF2F7", paddingTop: 16 }}>
                <span style={{ fontSize: 24, fontWeight: 800, color: "#1A5EA8" }}>{b.metric}</span>
                <p style={{ fontSize: 11, color: "#4A6080", marginTop: 3 }}>{b.metricLabel}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials / social proof */}
      <section style={{ background: "#F1F5FA", padding: "64px 40px", borderTop: "1px solid #D1DCE8" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, color: "#0D2B5A", marginBottom: 40 }}>What Our Partners Say</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {[
              {
                quote: "Adding Idatum to our service portfolio was the easiest expansion decision we've made. Our clients trust them, and the revenue share is genuinely competitive.",
                result: "3 clients referred in the first quarter. ₹8L in incremental revenue in Year 1.",
                name: "Managing Director",
                org: "HR Advisory Firm, Pune",
                since: "Partner since 2022",
              },
              {
                quote: "The co-delivery model lets us stay front and center with our clients while Idatum handles the specialist delivery. Our clients get the best of both worlds.",
                result: "Zero conflicts of interest. Client retention improved — they now see us as a full-service compliance partner.",
                name: "Partner",
                org: "Management Consultancy, Bangalore",
                since: "Partner since 2021",
              },
            ].map((t, i) => (
              <div key={i} style={{ background: "#fff", border: "1px solid #D1DCE8", borderRadius: 12, padding: 28, textAlign: "left" }}>
                <p style={{ fontSize: 14, color: "#0D2B5A", lineHeight: 1.8, marginBottom: 16, fontStyle: "italic" }}>"{t.quote}"</p>
                <div style={{ background: "#F1F5FA", borderRadius: 6, padding: "10px 14px", marginBottom: 16 }}>
                  <p style={{ fontSize: 12, color: "#4A6080", lineHeight: 1.6, margin: 0 }}>
                    <span style={{ fontWeight: 700, color: "#0D6B4E" }}>Result: </span>{t.result}
                  </p>
                </div>
                <div style={{ borderTop: "1px solid #EEF2F7", paddingTop: 14 }}>
                  <p style={{ fontSize: 13, fontWeight: 700, color: "#0D2B5A", marginBottom: 2 }}>{t.name}</p>
                  <p style={{ fontSize: 12, color: "#4A6080" }}>{t.org}</p>
                  <p style={{ fontSize: 11, color: "#9BB5D4", marginTop: 3 }}>{t.since}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner FAQ */}
      <section style={{ padding: "64px 40px", maxWidth: 900, margin: "0 auto" }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: "#0D2B5A", marginBottom: 8 }}>Common Questions</h2>
        <p style={{ fontSize: 14, color: "#4A6080", marginBottom: 32 }}>
          Answers to what every serious partnership candidate asks before applying.
        </p>
        <div style={{ display: "grid", gap: 16 }}>
          {[
            {
              q: "Who owns the client relationship?",
              a: "You do. In Referral and Co-Delivery models, you remain the primary relationship owner. Idatum operates as the specialist behind you, not in competition with you.",
            },
            {
              q: "How does the revenue share work exactly?",
              a: "For Referral Partners: you refer a client, Idatum delivers, and you receive 15–25% of Idatum's engagement revenue. For example, on a ₹10L SOC 2 engagement, your share would be ₹1.5–2.5L. Revenue share is on gross engagement value, not net.",
            },
            {
              q: "What if I want to start small before committing?",
              a: "That's the norm, not the exception. Most new partners begin with a single referred or co-delivered engagement to test the working relationship. There's no minimum commitment.",
            },
            {
              q: "What support does Idatum provide after I sign?",
              a: "Every partner gets a dedicated Partner Success Manager — your direct point of contact for deal registration, proposal support, client questions, and escalations. Response SLA: within one business day.",
            },
            {
              q: "What if a client dispute arises?",
              a: "Client disputes are managed jointly. Idatum's delivery team handles complaints about training or QA outcomes directly with the client, with you cc'd throughout. You are never left managing an Idatum delivery issue alone.",
            },
          ].map((faq, i) => (
            <div key={i} style={{ background: "#fff", border: "1px solid #D1DCE8", borderRadius: 10, padding: "20px 24px" }}>
              <p style={{ fontSize: 14, fontWeight: 700, color: "#0D2B5A", marginBottom: 8 }}>{faq.q}</p>
              <p style={{ fontSize: 13, color: "#4A6080", lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#0D2B5A", padding: "64px 40px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: 32, fontWeight: 700, color: "#fff", marginBottom: 12 }}>
            Ready to Apply?
          </h2>
          <p style={{ fontSize: 16, color: "#C5D8EE", lineHeight: 1.7, marginBottom: 32 }}>
            Joining takes less than 48 hours. Submit your application and we'll schedule a discovery call within one business day.
          </p>
          <button
            onClick={() => navigate("become-partner")}
            style={{
              background: "#fff",
              color: "#0D2B5A",
              border: "none",
              cursor: "pointer",
              padding: "15px 32px",
              fontSize: 15,
              fontWeight: 700,
              borderRadius: 6,
              transition: "background 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#F1F5FA")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#fff")}
          >
            Apply to Partner
          </button>
        </div>
      </section>
    </div>
  );
}
