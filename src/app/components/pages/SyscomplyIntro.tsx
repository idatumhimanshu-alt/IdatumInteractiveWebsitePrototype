import React, { useState } from "react";
import { motion } from "motion/react";
import {
  ShieldCheck,
  Cpu,
  FileText,
  Activity,
  Lock,
  ArrowRight,
  CheckCircle2,
  Layers,
  Database,
  BarChart3,
} from "lucide-react";

type Page = string;
interface Props {
  navigate: (page: Page, state?: Record<string, string>) => void;
}

export function SyscomplyIntro({ navigate }: Props) {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: "Automated Evidence Collection",
      tag: "CORE ENGINE",
      desc: "Continuously gathers operational evidence and control logs across cloud infrastructure, endpoints, and SaaS applications to ensure zero-touch audit readiness.",
      icon: <Database size={24} color="#1A5EA8" />,
      bullets: [
        "Real-time connector sync with AWS, Azure, GCP, and GitHub",
        "Automated artifact tagging mapped directly to ISO & SOC 2 clauses",
        "Zero manual screenshot collection required",
      ],
    },
    {
      title: "Continuous Gap & Risk Monitoring",
      tag: "GOVERNANCE",
      desc: "Instantly flags policy drift, unmonitored assets, and control failures before they manifest as critical non-conformities during external audits.",
      icon: <Activity size={24} color="#0D6B4E" />,
      bullets: [
        "Dynamic risk scoring matrix updated hourly",
        "Automated alerting for failed control checkpoints",
        "Root-cause tracking and CAPA workflow integration",
      ],
    },
    {
      title: "Audit-Ready Document Repository",
      tag: "DOCUMENT CONTROL",
      desc: "A centralized, version-controlled repository for all quality manuals, policies, standard operating procedures (SOPs), and employee training logs.",
      icon: <FileText size={24} color="#6B3DAB" />,
      bullets: [
        "Strict versioning and mandatory review sign-offs",
        "Granular role-based access control (RBAC)",
        "Instant export to auditor-ready PDF bundles",
      ],
    },
    {
      title: "Vendor & Supplier Assessment",
      tag: "SECOND-PARTY AUDIT",
      desc: "Streamlines third-party risk management by automating vendor security questionnaires, artifact requests, and compliance scorecards.",
      icon: <ShieldCheck size={24} color="#8B4513" />,
      bullets: [
        "Automated vendor risk tiering and profiling",
        "Customizable security posture questionnaires",
        "Real-time third-party compliance tracking dashboard",
      ],
    },
  ];

  return (
    <div
      style={{
        fontFamily: "var(--font-sans)",
        background: "#F8FAFC",
        paddingTop: 64,
      }}
    >
      {/* ── 1. Hero Header ── */}
      <section
        style={{
          background: "linear-gradient(135deg, #0D2B5A 0%, #15335A 100%)",
          padding: "80px 40px",
          textAlign: "center",
          borderBottom: "1px solid #1A5EA8",
        }}
      >
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <span
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "1.5px",
              color: "#64FFDA",
              textTransform: "uppercase",
              marginBottom: 16,
              display: "block",
            }}
          >
            Syscomply Platform
          </span>
          <h1
            style={{
              fontSize: 44,
              fontWeight: 800,
              color: "#ffffff",
              marginBottom: 20,
              letterSpacing: "-1px",
            }}
          >
            Intelligent Compliance Automation Software
          </h1>
          <p
            style={{
              fontSize: 18,
              color: "#C5D8EE",
              lineHeight: 1.7,
              marginBottom: 32,
            }}
          >
            Replace manual spreadsheets and scattered documentation with an
            integrated operating system built for continuous audit readiness.
          </p>
          <button
            onClick={() => navigate("contact")}
            style={{
              background: "#64FFDA",
              color: "#0D2B5A",
              border: "none",
              padding: "14px 28px",
              fontSize: 15,
              fontWeight: 700,
              borderRadius: 8,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              boxShadow: "0 6px 20px rgba(100,255,218,0.3)",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#ffffff")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#64FFDA")}
          >
            Request Platform Demo <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* ── 2. Interactive Feature Showcase ── */}
      <section
        style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 40px" }}
      >
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2
            style={{
              fontSize: 34,
              fontWeight: 800,
              color: "#0D2B5A",
              marginBottom: 12,
            }}
          >
            Engineered for High-Stakes Compliance
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "#4A6080",
              maxWidth: 640,
              margin: "0 auto",
            }}
          >
            Explore how Syscomply automates the heaviest parts of your ISO, SOC
            2, and regulatory frameworks.
          </p>
        </div>

        {/* Feature Tab Selectors */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 16,
            marginBottom: 40,
          }}
        >
          {features.map((feat, idx) => {
            const isActive = activeFeature === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveFeature(idx)}
                style={{
                  background: isActive ? "#ffffff" : "#F1F5FA",
                  border: isActive ? "2px solid #1A5EA8" : "1px solid #D1DCE8",
                  borderRadius: 12,
                  padding: 24,
                  cursor: "pointer",
                  boxShadow: isActive
                    ? "0 10px 25px rgba(26,94,168,0.08)"
                    : "none",
                  transition: "all 0.2s ease",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 12,
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 8,
                      background: "#EEF4FF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {feat.icon}
                  </div>
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      color: "#1A5EA8",
                      background: "#E0F2FE",
                      padding: "3px 8px",
                      borderRadius: 4,
                    }}
                  >
                    {feat.tag}
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: "#0D2B5A",
                    margin: "0 0 6px 0",
                  }}
                >
                  {feat.title}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    color: "#4A6080",
                    margin: 0,
                    lineHeight: 1.5,
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Active Feature Deep Dive Card */}
        <motion.div
          key={activeFeature}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            background: "#ffffff",
            borderRadius: 16,
            border: "1px solid #D1DCE8",
            padding: 48,
            boxShadow: "0 10px 30px rgba(13,43,90,0.04)",
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: 48,
            alignItems: "center",
          }}
        >
          <div>
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "#1A5EA8",
                textTransform: "uppercase",
                letterSpacing: "1px",
                marginBottom: 8,
                display: "block",
              }}
            >
              {features[activeFeature].tag}
            </span>
            <h3
              style={{
                fontSize: 28,
                fontWeight: 800,
                color: "#0D2B5A",
                marginBottom: 16,
              }}
            >
              {features[activeFeature].title}
            </h3>
            <p
              style={{
                fontSize: 16,
                color: "#4A6080",
                lineHeight: 1.7,
                marginBottom: 24,
              }}
            >
              {features[activeFeature].desc}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {features[activeFeature].bullets.map((bullet, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#0D2B5A",
                  }}
                >
                  <CheckCircle2
                    size={18}
                    color="#0D6B4E"
                    style={{ flexShrink: 0 }}
                  />
                  {bullet}
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              background: "#0D2B5A",
              borderRadius: 12,
              padding: 32,
              color: "#ffffff",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -20,
                right: -20,
                opacity: 0.1,
              }}
            >
              <BarChart3 size={180} />
            </div>
            <h4
              style={{
                fontSize: 16,
                fontWeight: 700,
                color: "#64FFDA",
                marginBottom: 16,
              }}
            >
              Platform Advantage
            </h4>
            <p
              style={{
                fontSize: 14,
                color: "#C5D8EE",
                lineHeight: 1.7,
                margin: "0 0 20px 0",
              }}
            >
              Syscomply integrates seamlessly with your existing team workflows,
              eliminating administrative friction while raising your security
              posture.
            </p>
            <button
              onClick={() => navigate("contact")}
              style={{
                background: "transparent",
                color: "#64FFDA",
                border: "1px solid #64FFDA",
                padding: "10px 20px",
                fontSize: 13,
                fontWeight: 700,
                borderRadius: 6,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#64FFDA";
                e.currentTarget.style.color = "#0D2B5A";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#64FFDA";
              }}
            >
              Explore Technical Specs
            </button>
          </div>
        </motion.div>
      </section>

      {/* ── 3. Bottom CTA ── */}
      <section
        style={{
          background: "#0D2B5A",
          padding: "80px 40px",
          textAlign: "center",
          color: "#ffffff",
        }}
      >
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 16 }}>
            Ready to Automate Your Compliance?
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "#C5D8EE",
              lineHeight: 1.7,
              marginBottom: 32,
            }}
          >
            Schedule a personalized walkthrough with our product specialists to
            see how Syscomply handles your specific framework requirements.
          </p>
          <button
            onClick={() => navigate("contact")}
            style={{
              background: "#64FFDA",
              color: "#0D2B5A",
              border: "none",
              padding: "14px 32px",
              fontSize: 15,
              fontWeight: 700,
              borderRadius: 8,
              cursor: "pointer",
              boxShadow: "0 6px 20px rgba(100,255,218,0.3)",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#ffffff")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#64FFDA")}
          >
            Book a Live Demo
          </button>
        </div>
      </section>
    </div>
  );
}
