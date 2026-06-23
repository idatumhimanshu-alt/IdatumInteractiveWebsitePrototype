import { motion } from "motion/react";

type Page = string;
interface Props { navigate: (page: Page) => void; }

const reasons = [
  {
    num: "01",
    title: "Certified Practitioners, Not Generalists",
    desc: "Every QA engagement is staffed by practitioners who hold active certifications in the frameworks they deliver — CISA, CISSP, ISO 27001 Lead Auditor, and SOC 2 specialists.",
    stat: "100%",
    statLabel: "Certified practitioner team",
  },
  {
    num: "02",
    title: "Outcome-Aligned Pricing",
    desc: "We don't bill by the hour for uncertainty. Our engagements are scoped to clear deliverables, with pricing tied to milestones — so you always know what you're getting.",
    stat: "Zero",
    statLabel: "Surprise billing incidents",
  },
  {
    num: "03",
    title: "Audit Success Track Record",
    desc: "Our clients consistently achieve first-attempt certification success. We prepare organizations so thoroughly that formal audits become a confirmation, not a discovery exercise.",
    stat: "96%",
    statLabel: "First-attempt certification rate",
  },
  {
    num: "04",
    title: "Integrated Training Reinforcement",
    desc: "As part of any QA engagement, your team receives targeted training through Idatum Academy — closing knowledge gaps before they become audit findings.",
    stat: "2×",
    statLabel: "Faster compliance sustainment",
  },
];

const testimonials = [
  {
    quote: "Idatum didn't just help us get SOC 2 certified — they built the muscle memory in our team to maintain it. That's the difference between a vendor and a partner.",
    name: "Chief Information Security Officer",
    org: "Series B SaaS Company",
  },
  {
    quote: "We had tried two other firms before Idatum. They were the first to actually listen to how our business works before recommending a path forward.",
    name: "VP of Compliance",
    org: "Regional Financial Institution",
  },
  {
    quote: "Our ISO 27001 audit was the smoothest we've ever run. The Idatum team prepared us for every question before it was asked.",
    name: "Head of Risk & Compliance",
    org: "Healthcare Technology Provider",
  },
];

export function WhyChooseQA({ navigate }: Props) {
  return (
    <div style={{ fontFamily: "var(--font-sans)", paddingTop: 64 }}>
      {/* Header */}
      <section style={{ background: "linear-gradient(135deg, #0D2B5A 0%, #1A4A8A 100%)", padding: "72px 40px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: "#9BB5D4", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: 12 }}>
            Why Idatum QA
          </p>
          <h1 style={{ fontSize: 44, fontWeight: 700, color: "#fff", lineHeight: 1.2, letterSpacing: "-0.8px", marginBottom: 20 }}>
            The Case for Choosing Idatum QA
          </h1>
          <p style={{ fontSize: 17, color: "#C5D8EE", lineHeight: 1.8 }}>
            Hundreds of organizations have trusted Idatum to navigate their most complex compliance challenges. Here is why they chose us — and why they stay.
          </p>
        </div>
      </section>

      {/* Reasons grid */}
      <section style={{ padding: "80px 40px", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
          {reasons.map((r, index) => (
            <motion.div
              key={r.num}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.07 }}
              style={{
                background: "#fff",
                border: "1px solid #D1DCE8",
                borderRadius: 12,
                padding: 36,
                display: "flex",
                gap: 24,
                transition: "box-shadow 0.15s ease",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(13,43,90,0.1)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.boxShadow = "none")}
            >
              <div style={{ flexShrink: 0 }}>
                <div
                  style={{
                    width: 56,
                    height: 56,
                    background: "#0D2B5A",
                    borderRadius: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 12,
                  }}
                >
                  <span style={{ fontSize: 13, fontWeight: 700, color: "#9BB5D4" }}>{r.num}</span>
                </div>
                <p style={{ fontSize: 28, fontWeight: 800, color: "#1A5EA8", lineHeight: 1 }}>{r.stat}</p>
                <p style={{ fontSize: 11, color: "#4A6080", lineHeight: 1.4, maxWidth: 80 }}>{r.statLabel}</p>
              </div>
              <div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "#0D2B5A", marginBottom: 10, lineHeight: 1.35 }}>{r.title}</h3>
                <p style={{ fontSize: 14, color: "#4A6080", lineHeight: 1.7 }}>{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ background: "#F1F5FA", padding: "72px 40px", borderTop: "1px solid #D1DCE8" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, color: "#0D2B5A", textAlign: "center", marginBottom: 48 }}>
            What Our Clients Say
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {testimonials.map((t, i) => (
              <div
                key={i}
                style={{
                  background: "#fff",
                  border: "1px solid #D1DCE8",
                  borderRadius: 12,
                  padding: 32,
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 20,
                    right: 24,
                    fontSize: 64,
                    color: "#EEF4FF",
                    fontFamily: "Georgia, serif",
                    lineHeight: 1,
                    userSelect: "none",
                  }}
                >
                  "
                </div>
                <p style={{ fontSize: 14, color: "#0D2B5A", lineHeight: 1.8, marginBottom: 24, fontStyle: "italic", position: "relative", zIndex: 1 }}>
                  "{t.quote}"
                </p>
                <div style={{ borderTop: "1px solid #D1DCE8", paddingTop: 16 }}>
                  <p style={{ fontSize: 13, fontWeight: 700, color: "#0D2B5A" }}>{t.name}</p>
                  <p style={{ fontSize: 12, color: "#4A6080" }}>{t.org}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ background: "#0D2B5A", padding: "64px 40px" }}>
        <div style={{ maxWidth: 840, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <h2 style={{ fontSize: 28, fontWeight: 700, color: "#fff", marginBottom: 8 }}>
              Ready to discuss your compliance needs?
            </h2>
            <p style={{ fontSize: 15, color: "#9BB5D4" }}>
              Schedule a consultation with our QA team — no obligation, no sales pressure.
            </p>
          </div>
          <button
            onClick={() => navigate("contact")}
            style={{
              background: "#fff",
              color: "#0D2B5A",
              border: "none",
              cursor: "pointer",
              padding: "14px 28px",
              fontSize: 15,
              fontWeight: 700,
              borderRadius: 6,
              whiteSpace: "nowrap",
              marginLeft: 40,
              flexShrink: 0,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#F1F5FA")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#fff")}
          >
            Discuss with Our Team
          </button>
        </div>
      </section>
    </div>
  );
}
