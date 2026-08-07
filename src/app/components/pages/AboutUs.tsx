import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Target, 
  TrendingUp, 
  ShieldCheck, 
  ArrowRight, 
  Building2, 
  Cpu, 
  Factory, 
  Server, 
  Landmark, 
  HeartPulse, 
  ShieldAlert, 
  Radio, 
  CheckCircle2 
} from "lucide-react";

type Page = string;
interface Props {
  navigate: (page: Page, state?: Record<string, string>) => void;
}

export function AboutUs({ navigate }: Props) {
  const [hovered, setHovered] = useState<number>(0);
  const [activeIndustry, setActiveIndustry] = useState(0);

  // Original sliding panels
  const panels = [
    {
      id: "philosophy",
      badge: "WHO WE ARE",
      title: "Partners in Your Improvement Journey.",
      description:
        "We are more than just consultants; we are your trustworthy partners dedicated to organizational excellence. As corporate compliance facilitators, we embed ourselves into your processes to ensure robust quality and security compliance.",
      bullets: [
        "Quality and Security Compliance Partners",
        "Corporate Compliance Facilitators",
        "Building solutions that hold up under real audit conditions",
      ],
      icon: Target,
      bg: "radial-gradient(circle at 100% 100%, rgba(100,255,218,0.15) 0%, transparent 60%), linear-gradient(135deg, #0D2B5A 0%, #1A4A8A 100%)",
      color: "#fff",
      badgeColor: "#64FFDA",
      iconBg: "rgba(255,255,255,0.1)",
      iconColor: "#64FFDA",
      border: "none",
      descColor: "#C5D8EE",
      bulletColor: "#fff",
    },
    {
      id: "legacy",
      badge: "OUR LEGACY & EXPERTISE",
      title: "100+ Years of Combined Industry Experience.",
      description:
        "Our team brings together over 100 years of hands-on experience in consultancy and training. We are comprised of lead auditors, CMMI assessment team members, and former compliance executives from various companies across diverse industries.",
      bullets: [
        "Trustworthy partners with more than 50 years of experience",
        "Lead auditors and CMMI assessment team members",
        "Compliance executives for various companies across industries",
      ],
      icon: TrendingUp,
      bg: "radial-gradient(circle at 100% 100%, rgba(26,94,168,0.08) 0%, transparent 60%), #ffffff",
      color: "#0D2B5A",
      badgeColor: "#1A5EA8",
      iconBg: "#F1F5FA",
      iconColor: "#1A5EA8",
      border: "1px solid #D1DCE8",
      descColor: "#4A6080",
      bulletColor: "#1E293B",
    },
  ];

  // Industry sectors based on team documents
  const industries = [
    {
      name: "Automotive",
      icon: <Cpu size={22} color="#1A5EA8" />,
      challenges: "Stringent supply chain security requirements, complex multi-tier vendor oversight, and zero-tolerance for operational downtime.",
      standards: ["TISAX", "IATF 16949", "ISO 9001"],
      approach: "End-to-end audit preparation, TISAX assessment alignment, and robust second-party supplier evaluation frameworks.",
      deliverables: ["TISAX Assessment Readiness Report", "Supply Chain Risk Matrix", "Quality Management Manuals"]
    },
    {
      name: "Manufacturing",
      icon: <Factory size={22} color="#1A5EA8" />,
      challenges: "Integrating operational technology (OT) with IT security, maintaining environmental compliance, and ensuring worker safety standards.",
      standards: ["ISO 9001", "ISO 14001", "ISO 45001"],
      approach: "Process mapping across shop floors, environmental impact audits, and rigorous documentation design for shop-floor SOPs.",
      deliverables: ["Environmental Management Systems", "Safety Protocol Manuals", "Process Optimization Audits"]
    },
    {
      name: "Software Development",
      icon: <Building2 size={22} color="#1A5EA8" />,
      challenges: "Protecting proprietary source code, managing cloud infrastructure security, and meeting international data privacy regulations for global clients.",
      standards: ["ISO 27001:2022", "SOC 2 Type II", "GDPR"],
      approach: "Implementing robust Information Security Management Systems (ISMS), conducting gap analyses, and preparing dev teams for rigorous type-2 audits.",
      deliverables: ["ISMS Policy Framework", "Access Control SOPs", "Mock Internal Audit Reports"]
    },
    {
      name: "Engineering Services",
      icon: <ShieldAlert size={22} color="#1A5EA8" />,
      challenges: "Safeguarding confidential design blueprints, client intellectual property, and multi-location engineering collaboration security.",
      standards: ["ISO 27001", "ISO 9001"],
      approach: "Structured asset classification, rigorous access controls, and tailored secure engineering workflow documentation.",
      deliverables: ["IP Protection Protocols", "Risk Assessment Registry", "Employee Security Awareness Framework"]
    },
    {
      name: "Data Centers",
      icon: <Server size={22} color="#1A5EA8" />,
      challenges: "Maintaining 24/7 physical and digital uptime, strict capacity planning, facility environmental governance, and robust disaster recovery.",
      standards: ["ISO 27001", "ISO 22301", "ISO 9k / 14k / 45k"],
      approach: "Specialized facility readiness assessments, governance policy creation, and comprehensive business continuity planning.",
      deliverables: ["Data Center Operations SOPs", "Disaster Recovery Frameworks", "Facility Compliance Checklists"]
    },
    {
      name: "Banking & Financial Services",
      icon: <Landmark size={22} color="#1A5EA8" />,
      challenges: "Meeting stringent regulatory compliance mandates, securing sensitive consumer financial data, and managing third-party vendor risks.",
      standards: ["PCI DSS", "ISO 27001", "GDPR"],
      approach: "Comprehensive data flow mapping, strict access governance, and continuous regulatory alignment audits.",
      deliverables: ["Data Protection Impact Assessments", "Vendor Risk Governance Model", "Security Compliance Reviews"]
    },
    {
      name: "Healthcare",
      icon: <HeartPulse size={22} color="#1A5EA8" />,
      challenges: "Safeguarding electronic protected health information (ePHI), patient confidentiality, and medical device data integrity.",
      standards: ["HIPAA", "ISO 27701", "ISO 13485"],
      approach: "Privacy management system implementation, administrative safeguard reviews, and workforce HIPAA awareness training.",
      deliverables: ["HIPAA Compliance Roadmap", "Privacy Impact Assessments", "Staff Training Records"]
    },
    {
      name: "Government",
      icon: <Building2 size={22} color="#1A5EA8" />,
      challenges: "Adhering to public sector cybersecurity mandates, citizen data sovereignty, and multi-agency accountability frameworks.",
      standards: ["ISO 27001", "ISO 22301"],
      approach: "Rigorous public-sector compliance audits, structured governance frameworks, and continuous risk monitoring.",
      deliverables: ["Public Sector Compliance Audit", "Continuity & Resilience Plans"]
    },
    {
      name: "Telecom",
      icon: <Radio size={22} color="#1A5EA8" />,
      challenges: "Securing massive network infrastructure, managing core routing security, and complying with national telecommunications regulations.",
      standards: ["ISO 27001", "ISO 27701", "ISO 22301"],
      approach: "Infrastructure vulnerability assessment, telecom-specific risk frameworks, and business continuity synchronization.",
      deliverables: ["Network Security Policy", "Incident Response Playbooks"]
    }
  ];

  return (
    <div
      style={{
        fontFamily: "var(--font-sans)",
        paddingTop: 64,
        background: "#F8FAFC",
      }}
    >
      {/* ── 1. Header & Intro Paragraph ── */}
      <section style={{ textAlign: "center", padding: "80px 24px 60px" }}>
        <span
          style={{
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "1px",
            color: "#1A5EA8",
            textTransform: "uppercase",
            background: "rgba(26,94,168,0.1)",
            padding: "6px 16px",
            borderRadius: 999,
          }}
        >
          About Us
        </span>
        <h1
          style={{
            fontSize: 44,
            fontWeight: 800,
            color: "#0D2B5A",
            marginTop: 20,
            marginBottom: 24,
            letterSpacing: "-0.8px",
          }}
        >
          A Partner Committed to Your Future
        </h1>

        <p
          style={{
            maxWidth: 800,
            margin: "0 auto",
            fontSize: 18,
            color: "#4A6080",
            lineHeight: 1.7,
            fontWeight: 400,
          }}
        >
          Established in 2010, We, at Idatum Researchers and Consultants,
          provide quality consulting services to our esteemed customers. Our
          team includes Corporate Compliance Facilitators, Partners in your
          improvement journey, ISO Lead Auditors and CMMI Assessment Team
          Members. The cumulative experience of our team counts for 100+ years
          ensuring the best expertise for our clients.
        </p>
      </section>

      {/* ── 2. Interactive Sliding Panels (Crazy UX) ── */}
      <section
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 40px 80px",
          display: "flex",
          gap: 24,
          flexWrap: "wrap",
        }}
      >
        {panels.map((panel, index) => {
          const isActive = hovered === index;
          return (
            <motion.div
              key={panel.id}
              layout
              onMouseEnter={() => setHovered(index)}
              onClick={() => setHovered(index)}
              style={{
                flex: isActive ? 2.5 : 1,
                minWidth: 320,
                minHeight: 520,
                background: panel.bg,
                color: panel.color,
                border: panel.border,
                borderRadius: 24,
                padding: 40,
                cursor: "pointer",
                overflow: "hidden",
                position: "relative",
                boxShadow: isActive
                  ? "0 24px 48px rgba(13,43,90,0.15)"
                  : "0 8px 16px rgba(13,43,90,0.04)",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            >
              <motion.div
                layout
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <motion.div
                  layout
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 14,
                    background: panel.iconBg,
                    color: panel.iconColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 32,
                  }}
                >
                  <panel.icon size={32} strokeWidth={1.5} />
                </motion.div>

                <motion.span
                  layout
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    color: panel.badgeColor,
                    marginBottom: 16,
                  }}
                >
                  {panel.badge}
                </motion.span>

                <motion.h2
                  layout
                  style={{
                    fontSize: 32,
                    fontWeight: 700,
                    lineHeight: 1.2,
                    marginBottom: isActive ? 24 : 0,
                    transition: "margin 0.3s ease",
                    minWidth: 260,
                  }}
                >
                  {panel.title}
                </motion.h2>

                {/* Smoothly Reveal Content on Hover */}
                <AnimatePresence mode="popLayout">
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      style={{ minWidth: 400 }}
                    >
                      <p
                        style={{
                          fontSize: 17,
                          lineHeight: 1.7,
                          color: panel.descColor,
                          marginBottom: 32,
                          maxWidth: 600,
                        }}
                      >
                        {panel.description}
                      </p>
                      <ul
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 16,
                          padding: 0,
                          margin: 0,
                          listStyle: "none",
                        }}
                      >
                        {panel.bullets.map((b, i) => (
                          <li
                            key={i}
                            style={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: 12,
                              fontSize: 15,
                              fontWeight: 500,
                              color: panel.bulletColor,
                            }}
                          >
                            <ShieldCheck
                              size={20}
                              style={{
                                flexShrink: 0,
                                marginTop: 2,
                                color: panel.iconColor,
                              }}
                            />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Inactive State CTA with Bouncing Arrow */}
                <AnimatePresence mode="popLayout">
                  {!isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      style={{
                        marginTop: "auto",
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        fontSize: 13,
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        color: panel.badgeColor,
                      }}
                    >
                      <span>Hover to explore</span>
                      <motion.div
                        animate={{ x: [0, 6, 0] }}
                        transition={{
                          repeat: Infinity,
                          duration: 1.5,
                          ease: "easeInOut",
                        }}
                      >
                        <ArrowRight size={18} />
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          );
        })}
      </section>

      {/* ── 3. Explore By Industry (From Team Documents) ── */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px 80px" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{ fontSize: 34, fontWeight: 700, color: "#0D2B5A", marginBottom: 12 }}>
            Explore By Industry
          </h2>
          <p style={{ fontSize: 16, color: "#4A6080" }}>
            Clients often search by industry rather than by standard. Select an industry sector below to review specific business challenges and applicable standards.
          </p>
        </div>

        {/* Industry Selector Tabs */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12, marginBottom: 40 }}>
          {industries.map((ind, idx) => {
            const isActive = activeIndustry === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveIndustry(idx)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "12px 20px",
                  borderRadius: 30,
                  background: isActive ? "#1A5EA8" : "#ffffff",
                  color: isActive ? "#ffffff" : "#0D2B5A",
                  border: "1px solid #D1DCE8",
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: "pointer",
                  boxShadow: isActive ? "0 4px 14px rgba(26,94,168,0.3)" : "0 2px 6px rgba(0,0,0,0.02)",
                  transition: "all 0.2s ease"
                }}
              >
                {React.cloneElement(ind.icon, { color: isActive ? "#ffffff" : "#1A5EA8" })}
                {ind.name}
              </button>
            );
          })}
        </div>

        {/* Industry Deep Dive Card */}
        <motion.div
          key={activeIndustry}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          style={{ background: "#ffffff", borderRadius: 16, border: "1px solid #D1DCE8", padding: 48, boxShadow: "0 10px 30px rgba(13,43,90,0.04)" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
            <div style={{ width: 56, height: 56, borderRadius: 14, background: "#EEF4FF", display: "flex", alignItems: "center", justifyContent: "center" }}>
              {React.cloneElement(industries[activeIndustry].icon, { color: "#1A5EA8" })}
            </div>
            <div>
              <h3 style={{ fontSize: 24, fontWeight: 800, color: "#0D2B5A", margin: 0 }}>
                {industries[activeIndustry].name} Sector
              </h3>
              <p style={{ fontSize: 13, fontWeight: 700, color: "#1A5EA8", margin: "4px 0 0" }}>
                Applicable Standards: {industries[activeIndustry].standards.join(" • ")}
              </p>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32, marginTop: 32 }}>
            <div style={{ background: "#F8FAFC", padding: 24, borderRadius: 12, borderLeft: "4px solid #1A5EA8" }}>
              <h4 style={{ fontSize: 14, fontWeight: 700, color: "#0D2B5A", textTransform: "uppercase", marginBottom: 8, letterSpacing: "0.5px" }}>Business Challenges</h4>
              <p style={{ fontSize: 15, color: "#4A6080", lineHeight: 1.6, margin: 0 }}>{industries[activeIndustry].challenges}</p>
            </div>

            <div style={{ background: "#F8FAFC", padding: 24, borderRadius: 12, borderLeft: "4px solid #0D6B4E" }}>
              <h4 style={{ fontSize: 14, fontWeight: 700, color: "#0D2B5A", textTransform: "uppercase", marginBottom: 8, letterSpacing: "0.5px" }}>Our Approach & Deliverables</h4>
              <p style={{ fontSize: 15, color: "#4A6080", lineHeight: 1.6, margin: "0 0 16px 0" }}>{industries[activeIndustry].approach}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {industries[activeIndustry].deliverables.map((del, i) => (
                  <div key={i} style={{ fontSize: 13, fontWeight: 600, color: "#0D6B4E", display: "flex", alignItems: "center", gap: 6 }}>
                    <CheckCircle2 size={14} /> {del}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── 4. Core Differentiators (6 Cards) ── */}
      <section
        style={{ padding: "0 40px 80px", maxWidth: 1280, margin: "0 auto" }}
      >
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <h2
            style={{
              fontSize: 34,
              fontWeight: 700,
              color: "#0D2B5A",
              letterSpacing: "-0.5px",
            }}
          >
            What Makes Idatum Different
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 24,
          }}
        >
          {[
            {
              num: "01",
              title: "Partner, Not Vendor",
              desc: "We align incentives with your success. Our engagements are structured around outcomes, not billable hours — which means we work to get things right the first time.",
              proof:
                "Average Idatum engagement: 3+ years. 87% of clients extend beyond the initial scope.",
            },
            {
              num: "02",
              title: "Domain-Depth Expertise",
              desc: "Our practitioners come from the industries they serve. Former auditors, CISOs, and compliance officers — people who have lived the pressures you face.",
              proof:
                "100% of our practitioners hold active industry certifications.",
            },
            {
              num: "03",
              title: "Integrated Services + Training",
              desc: "We uniquely combine consulting and training under one roof, so your team doesn't just achieve compliance — they understand it and sustain it.",
              proof:
                "Clients who pair Services + Training sustain certification 2× longer on average.",
            },
            {
              num: "04",
              title: "Audit-Ready, Always",
              desc: "Every deliverable we produce is designed to withstand external scrutiny. We build with auditors in mind so you are never caught off guard.",
              proof:
                "96% of Idatum clients pass first-attempt external audits. Industry average: ~70%.",
            },
            {
              num: "05",
              title: "Scalable Engagement",
              desc: "From a focused readiness assessment to a multi-year compliance partnership, we tailor our engagement model to your budget and maturity level.",
              proof:
                "Engagements start from a single-day readiness review. No minimum commitment required.",
            },
            {
              num: "06",
              title: "Trusted Track Record",
              desc: "Over 500 organizations across financial services, healthcare, technology, and manufacturing have relied on Idatum for their most critical compliance needs.",
              proof:
                "Providing quality consulting since 2010. 98% client satisfaction rate.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
                delay: index * 0.05,
              }}
              style={{
                background: "#fff",
                border: "1px solid #D1DCE8",
                borderRadius: 10,
                padding: 28,
                transition: "box-shadow 0.15s ease",
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 8px 24px rgba(13,43,90,0.08)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLDivElement).style.boxShadow = "none")
              }
            >
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#1A5EA8",
                  letterSpacing: "1px",
                  marginBottom: 12,
                }}
              >
                {item.num}
              </p>
              <h3
                style={{
                  fontSize: 17,
                  fontWeight: 700,
                  color: "#0D2B5A",
                  marginBottom: 10,
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: 13,
                  color: "#4A6080",
                  lineHeight: 1.7,
                  marginBottom: 14,
                  flex: 1,
                }}
              >
                {item.desc}
              </p>
              <div
                style={{
                  background: "#F1F5FA",
                  borderRadius: 6,
                  padding: "8px 12px",
                  marginTop: "auto",
                }}
              >
                <p
                  style={{
                    fontSize: 11,
                    color: "#1A5EA8",
                    fontWeight: 600,
                    margin: 0,
                    lineHeight: 1.5,
                  }}
                >
                  ↗ {item.proof}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 5. CTA Banner ── */}
      <section
        style={{
          background: "#0D2B5A",
          padding: "80px 40px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <h2
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: "#fff",
              marginBottom: 16,
            }}
          >
            Ready to Start the Right Conversation?
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "#C5D8EE",
              lineHeight: 1.7,
              marginBottom: 32,
            }}
          >
            Schedule a no-obligation discovery call with one of our compliance
            specialists.
          </p>
          <button
            onClick={() => navigate("contact")}
            style={{
              background: "#fff",
              color: "#0D2B5A",
              border: "none",
              cursor: "pointer",
              padding: "16px 36px",
              fontSize: 15,
              fontWeight: 700,
              borderRadius: 6,
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#EEF4FF")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#fff")}
          >
            Talk to Our Team
          </button>
        </div>
      </section>
    </div>
  );
}