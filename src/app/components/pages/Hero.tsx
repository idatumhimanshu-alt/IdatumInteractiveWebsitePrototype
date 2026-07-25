import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Award,
  ShieldCheck,
  Lock,
  Server,
  GraduationCap,
  BookOpen,
  ClipboardCheck,
  ArrowRight,
  CheckCircle2,
  Briefcase,
} from "lucide-react";

type Page = string;
interface HeroProps {
  navigate: (page: Page, state?: Record<string, string>) => void;
}

const clientLogos = [
  { name: "Schneider", style: { fontWeight: 800, letterSpacing: "-0.5px" } },
  { name: "TATA", style: { fontWeight: 800, color: "#1A5EA8" } },
  { name: "wipro", style: { fontWeight: 700, fontStyle: "italic" } },
  { name: "adani", style: { fontWeight: 600, letterSpacing: "0.5px" } },
];

const consultingItems = [
  {
    id: "infosec",
    title: "Information Security & Compliance",
    subtitle:
      "ISO 27001:2022 Implementation, ISO 27701 Privacy, TISAX & Internal Audits.",
    icon: <ShieldCheck size={28} strokeWidth={1.5} />,
    track: "InfoSec",
  },
  {
    id: "datacenter",
    title: "Data Center Consulting",
    subtitle:
      "Governance, Operations Management, Policies, SOPs & Capacity Planning.",
    icon: <Server size={28} strokeWidth={1.5} />,
    track: "Data Center",
  },
  {
    id: "quality",
    title: "Quality & Business Excellence",
    subtitle:
      "ISO 9001, ISO 14001, ISO 22301, CMMI Maturity Levels & Process Improvement.",
    icon: <Award size={28} strokeWidth={1.5} />,
    track: "Quality",
  },
  {
    id: "cyber",
    title: "Cyber Security Services",
    subtitle:
      "Risk Assessment, Security Policies, Third-Party Risk & Compliance Reviews.",
    icon: <Lock size={28} strokeWidth={1.5} />,
    track: "Cyber",
  },
];

const trainingItems = [
  {
    id: "iso-training",
    title: "ISO & TISAX Awareness",
    subtitle:
      "Comprehensive workforce awareness training for all major ISO standards & TISAX.",
    icon: <GraduationCap size={28} strokeWidth={1.5} />,
    track: "ISO Training",
  },
  {
    id: "auditor-training",
    title: "Internal Auditor Courses",
    subtitle:
      "1-day and 2-3 day internal auditor certification courses conducted by experts.",
    icon: <ClipboardCheck size={28} strokeWidth={1.5} />,
    track: "Auditor Course",
  },
  {
    id: "dc-training",
    title: "Data Center Operations Training",
    subtitle:
      "Specialized operational training covering uptime, continuity, and KPI frameworks.",
    icon: <Server size={28} strokeWidth={1.5} />,
    track: "DC Training",
  },
  {
    id: "risk-workshops",
    title: "Risk Management Workshops",
    subtitle:
      "Practical workshops focused on risk identification, assessment, and treatment.",
    icon: <CheckCircle2 size={28} strokeWidth={1.5} />,
    track: "Risk Workshop",
  },
];

export function Hero({ navigate }: HeroProps) {
  const [activeTab, setActiveTab] = useState<"consulting" | "training">(
    "consulting",
  );

  const currentItems =
    activeTab === "consulting" ? consultingItems : trainingItems;

  return (
    <div style={{ fontFamily: "var(--font-sans)", background: "#fff" }}>
      {/* ── 1. Hero Section (Rich Navy Blue Theme) ── */}
      <section
        style={{
          background: "linear-gradient(135deg, #102847 0%, #15335A 100%)", // Applied the rich navy blue
          padding: "140px 40px 80px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            maxWidth: 1000,
            margin: "0 auto",
            textAlign: "center",
            position: "relative",
            zIndex: 1,
            width: "100%",
          }}
        >
          {/* Tagline Placeholder */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 24,
            }}
          >
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: "#64FFDA",
                letterSpacing: "1px",
                textTransform: "uppercase",
                background: "rgba(100, 255, 218, 0.1)",
                border: "1px solid rgba(100, 255, 218, 0.2)",
                padding: "6px 16px",
                borderRadius: 999,
              }}
            >
              [Placeholder: HIPAA · ISO 27001 · SOC 2 · GDPR · PCI DSS]
            </span>
          </div>

          <h1
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.15,
              letterSpacing: "-1.5px",
              marginBottom: 24,
            }}
          >
            Building Trust.
            <br />
            Enhancing Business.
            <br />
            <span style={{ color: "#64FFDA" }}>Securing Tomorrow.</span>
          </h1>

          <p
            style={{
              fontSize: 18,
              color: "#B0C4DE",
              lineHeight: 1.6,
              marginBottom: 48,
              maxWidth: 700,
              margin: "0 auto 48px",
              fontWeight: 400,
            }}
          >
            Enterprise Advisory for Governance, Risk, Compliance, Security & AI
          </p>

          {/* CTAs */}
          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={() => navigate("contact")}
              style={{
                background: "#ffffff",
                color: "#15335A",
                border: "none",
                cursor: "pointer",
                padding: "16px 32px",
                fontSize: 16,
                fontWeight: 700,
                borderRadius: 6,
                transition: "background 0.2s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#F1F5FA")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#ffffff")
              }
            >
              Book a Strategy Call
            </button>

            <button
              onClick={() => navigate("qa-intro")}
              style={{
                background: "transparent",
                color: "#ffffff",
                border: "1px solid rgba(255,255,255,0.4)",
                cursor: "pointer",
                padding: "16px 32px",
                fontSize: 16,
                fontWeight: 600,
                borderRadius: 6,
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                e.currentTarget.style.borderColor = "#ffffff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
              }}
            >
              Explore Services
            </button>
          </div>
        </div>
      </section>

      {/* ── 2. Client Logos Strip ── */}
      <section
        style={{
          background: "#ffffff",
          borderBottom: "1px solid #EEF2F7",
          padding: "32px 40px",
        }}
      >
        <div
          style={{
            maxWidth: 1000,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 32,
          }}
        >
          {clientLogos.map((client, index) => (
            <div
              key={index}
              style={{
                fontSize: 24,
                color: "#8892B0",
                filter: "grayscale(100%) opacity(70%)",
                transition: "all 0.3s ease",
                cursor: "default",
                ...client.style,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = "grayscale(0%) opacity(100%)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = "grayscale(100%) opacity(70%)";
              }}
            >
              {client.name}
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. Our Expertise Grid with Segmented Toggle ── */}
      <section
        style={{
          padding: "80px 40px",
          maxWidth: 1200,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: 32,
            fontWeight: 700,
            color: "#15335A",
            marginBottom: 24,
            letterSpacing: "-0.5px",
          }}
        >
          Our Expertise
        </h2>
        <p style={{ fontSize: 16, color: "#4A6080", marginBottom: 40 }}>
          Select a vertical below to explore our comprehensive service
          offerings.
        </p>

        {/* Segmented Control Switch */}
        <div
          style={{
            display: "inline-flex",
            background: "#F1F5FA",
            padding: 6,
            borderRadius: 999,
            border: "1px solid #D1DCE8",
            marginBottom: 56,
          }}
        >
          <button
            onClick={() => setActiveTab("consulting")}
            style={{
              padding: "12px 28px",
              borderRadius: 999,
              border: "none",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s ease",
              background:
                activeTab === "consulting" ? "#15335A" : "transparent",
              color: activeTab === "consulting" ? "#ffffff" : "#4A6080",
              boxShadow:
                activeTab === "consulting"
                  ? "0 4px 12px rgba(21,51,90,0.15)"
                  : "none",
            }}
          >
            Audit &amp; Consulting Services
          </button>
          <button
            onClick={() => setActiveTab("training")}
            style={{
              padding: "12px 28px",
              borderRadius: 999,
              border: "none",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s ease",
              background: activeTab === "training" ? "#15335A" : "transparent",
              color: activeTab === "training" ? "#ffffff" : "#4A6080",
              boxShadow:
                activeTab === "training"
                  ? "0 4px 12px rgba(21,51,90,0.15)"
                  : "none",
            }}
          >
            Training Academy
          </button>
        </div>

        {/* Dynamic Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "24px",
              justifyItems: "center",
              marginBottom: 56,
            }}
          >
            {currentItems.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  textAlign: "left",
                  width: "100%",
                  padding: "32px 24px",
                  border: "1px solid #D1DCE8",
                  borderRadius: 12,
                  background: "#ffffff",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#15335A";
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px rgba(21,51,90,0.06)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#D1DCE8";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#15335A",
                    background: "#EEF4FF",
                    marginBottom: 20,
                  }}
                >
                  {item.icon}
                </div>
                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#15335A",
                    lineHeight: 1.3,
                    margin: "0 0 10px 0",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: "#4A6080",
                    margin: "0 0 24px 0",
                    lineHeight: 1.6,
                    flex: 1,
                  }}
                >
                  {item.subtitle}
                </p>

                <button
                  onClick={() =>
                    navigate(
                      activeTab === "consulting"
                        ? "qa-intro"
                        : "browse-courses",
                      {
                        defaultTrack: item.track,
                      },
                    )
                  }
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    background: "none",
                    border: "none",
                    color: "#15335A",
                    fontWeight: 600,
                    fontSize: 14,
                    cursor: "pointer",
                    padding: 0,
                  }}
                >
                  <span>
                    {activeTab === "consulting"
                      ? "Learn More"
                      : "Browse Courses"}
                  </span>
                  <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Hub Routing Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 16,
            flexWrap: "wrap",
            paddingTop: 16,
            borderTop: "1px solid #EEF2F7",
          }}
        >
          <button
            onClick={() => navigate("qa-intro")}
            style={{
              background: "#15335A",
              color: "#ffffff",
              border: "none",
              cursor: "pointer",
              padding: "14px 28px",
              fontSize: 15,
              fontWeight: 600,
              borderRadius: 6,
              transition: "background 0.2s ease",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#0D213B")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#15335A")}
          >
            <Briefcase size={18} />
            Explore Full Audit &amp; Consulting Hub
          </button>

          <button
            onClick={() => navigate("academy-intro")}
            style={{
              background: "#F1F5FA",
              color: "#15335A",
              border: "1px solid #D1DCE8",
              cursor: "pointer",
              padding: "14px 28px",
              fontSize: 15,
              fontWeight: 600,
              borderRadius: 6,
              transition: "all 0.2s ease",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#15335A";
              e.currentTarget.style.color = "#15335A";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#D1DCE8";
              e.currentTarget.style.color = "#15335A";
            }}
          >
            <BookOpen size={18} />
            Explore Training Academy Hub
          </button>
        </div>
      </section>
    </div>
  );
}
