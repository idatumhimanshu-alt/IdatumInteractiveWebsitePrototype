import { motion } from "motion/react";

type Page = string;

interface Props {
  navigate: (page: Page) => void;
}

export function WhyIdatum({ navigate }: Props) {
  return (
    <div style={{ fontFamily: "var(--font-sans)", paddingTop: 64 }}>
      {/* Hero */}
      <section style={{ background: "#F1F5FA", padding: "80px 40px", borderBottom: "1px solid #D1DCE8" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <p style={{ fontSize: 12, fontWeight: 600, color: "#1A5EA8", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: 12 }}>
              About Idatum
            </p>
            <h1 style={{ fontSize: 44, fontWeight: 700, color: "#0D2B5A", lineHeight: 1.2, letterSpacing: "-0.8px", marginBottom: 20 }}>
              Why Organizations Trust Idatum
            </h1>
            <p style={{ fontSize: 17, color: "#4A6080", lineHeight: 1.8, marginBottom: 32 }}>
              We don't parachute in, hand you a checklist, and leave. Idatum embeds as a genuine organizational partner — learning your systems, speaking your language, and building solutions that hold up under real audit conditions.
            </p>
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
              }}
            >
              Talk to Our Team
            </button>
          </div>
          <div style={{ borderRadius: 12, overflow: "hidden", boxShadow: "0 12px 40px rgba(13,43,90,0.12)" }}>
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=640&h=420&fit=crop&auto=format"
              alt="Idatum compliance experts collaborating"
              style={{ display: "block", width: "100%", height: 380, objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* Core differentiators */}
      <section style={{ padding: "80px 40px", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <h2 style={{ fontSize: 34, fontWeight: 700, color: "#0D2B5A", letterSpacing: "-0.5px" }}>
            What Makes Idatum Different
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {[
            {
              num: "01",
              title: "Partner, Not Vendor",
              desc: "We align incentives with your success. Our engagements are structured around outcomes, not billable hours — which means we work to get things right the first time.",
              proof: "Average Idatum engagement: 3+ years. 87% of clients extend beyond the initial scope.",
            },
            {
              num: "02",
              title: "Domain-Depth Expertise",
              desc: "Our practitioners come from the industries they serve. Former auditors, CISOs, and compliance officers — people who have lived the pressures you face.",
              proof: "100% of QA practitioners hold active certifications (CISA, CISSP, ISO 27001 Lead Auditor).",
            },
            {
              num: "03",
              title: "Integrated QA + Training",
              desc: "We uniquely combine consulting and training under one roof, so your team doesn't just achieve compliance — they understand it and sustain it.",
              proof: "Clients who pair QA + Academy training sustain certification 2× longer on average.",
            },
            {
              num: "04",
              title: "Audit-Ready, Always",
              desc: "Every deliverable we produce is designed to withstand external scrutiny. We build with auditors in mind so you are never caught off guard.",
              proof: "96% of Idatum clients pass first-attempt external audits. Industry average: ~70%.",
            },
            {
              num: "05",
              title: "Scalable Engagement",
              desc: "From a focused readiness assessment to a multi-year compliance partnership, we tailor our engagement model to your budget and maturity level.",
              proof: "Engagements start from a single-day readiness review. No minimum commitment required.",
            },
            {
              num: "06",
              title: "Trusted Track Record",
              desc: "Over 500 organizations across financial services, healthcare, technology, and manufacturing have relied on Idatum for their most critical compliance needs.",
              proof: "Trusted since 2012. 500+ organizations served. 98% client satisfaction rate.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.05 }}
              style={{
                background: "#fff",
                border: "1px solid #D1DCE8",
                borderRadius: 10,
                padding: 28,
                transition: "box-shadow 0.15s ease",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 24px rgba(13,43,90,0.08)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.boxShadow = "none")}
            >
              <p style={{ fontSize: 11, fontWeight: 700, color: "#1A5EA8", letterSpacing: "1px", marginBottom: 12 }}>{item.num}</p>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: "#0D2B5A", marginBottom: 10 }}>{item.title}</h3>
              <p style={{ fontSize: 13, color: "#4A6080", lineHeight: 1.7, marginBottom: 14 }}>{item.desc}</p>
              <div style={{ background: "#F1F5FA", borderRadius: 6, padding: "8px 12px" }}>
                <p style={{ fontSize: 11, color: "#1A5EA8", fontWeight: 600, margin: 0, lineHeight: 1.5 }}>↗ {item.proof}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <section style={{ background: "#0D2B5A", padding: "64px 40px", textAlign: "center" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <h2 style={{ fontSize: 32, fontWeight: 700, color: "#fff", marginBottom: 16 }}>
            Ready to Start the Right Conversation?
          </h2>
          <p style={{ fontSize: 16, color: "#C5D8EE", lineHeight: 1.7, marginBottom: 32 }}>
            Schedule a no-obligation discovery call with one of our compliance specialists.
          </p>
          <button
            onClick={() => navigate("contact")}
            style={{
              background: "#fff",
              color: "#0D2B5A",
              border: "none",
              cursor: "pointer",
              padding: "14px 32px",
              fontSize: 15,
              fontWeight: 700,
              borderRadius: 6,
            }}
          >
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
}
