import React from "react";
import {
  ShieldCheck,
  FileText,
  Activity,
  ArrowRight,
  CheckCircle2,
  Database,
  BarChart3,
} from "lucide-react";

type Page = string;
interface Props {
  navigate: (page: Page, state?: Record<string, string>) => void;
}

export function SyscomplyIntro({ navigate }: Props) {
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
          <h1
            style={{
              fontSize: 22,
              fontWeight: 800,
              letterSpacing: "2px",
              color: "#64FFDA",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Syscomply Platform
          </h1>
          <h2
            style={{
              fontSize: 44,
              fontWeight: 800,
              color: "#ffffff",
              marginBottom: 20,
              letterSpacing: "-1px",
            }}
          >
            Intelligent Compliance Automation Software
          </h2>
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

      {/* ── 2. Direct 4-Column Layout (No Clicks Needed) ── */}
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

        {/* 4 Permanent Side-by-Side Columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
            marginBottom: 64,
          }}
        >
          {features.map((feat, idx) => (
            <div
              key={idx}
              style={{
                background: "#ffffff",
                border: "1px solid #D1DCE8",
                borderRadius: 12,
                padding: 32,
                boxShadow: "0 4px 16px rgba(13,43,90,0.03)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 20,
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 10,
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
                      padding: "4px 10px",
                      borderRadius: 4,
                    }}
                  >
                    {feat.tag}
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#0D2B5A",
                    marginBottom: 12,
                  }}
                >
                  {feat.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: "#4A6080",
                    lineHeight: 1.6,
                    marginBottom: 24,
                  }}
                >
                  {feat.desc}
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  borderTop: "1px solid #EEF2F7",
                  paddingTop: 20,
                }}
              >
                {feat.bullets.map((bullet, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 8,
                      fontSize: 13,
                      fontWeight: 600,
                      color: "#0D2B5A",
                      lineHeight: 1.4,
                    }}
                  >
                    <CheckCircle2
                      size={16}
                      color="#0D6B4E"
                      style={{ flexShrink: 0, marginTop: 1 }}
                    />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── 3. Platform Advantage Full-Width CTA Section with "Explore Syscomply" ── */}
        <div
          style={{
            background: "#0D2B5A",
            borderRadius: 16,
            padding: 48,
            color: "#ffffff",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 32,
            boxShadow: "0 12px 35px rgba(13,43,90,0.15)",
          }}
        >
          <div
            style={{
              position: "absolute",
              right: -30,
              bottom: -30,
              opacity: 0.08,
              pointerEvents: "none",
            }}
          >
            <BarChart3 size={250} />
          </div>

          <div style={{ maxWidth: 700, position: "relative", zIndex: 1 }}>
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "#64FFDA",
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                marginBottom: 8,
                display: "block",
              }}
            >
              Platform Advantage
            </span>
            <h3
              style={{
                fontSize: 26,
                fontWeight: 800,
                color: "#ffffff",
                marginBottom: 12,
              }}
            >
              Seamless Workflow Integration
            </h3>
            <p
              style={{
                fontSize: 16,
                color: "#C5D8EE",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Syscomply integrates seamlessly with your existing team workflows,
              eliminating administrative friction while raising your security
              posture.
            </p>
          </div>

          <div style={{ position: "relative", zIndex: 1 }}>
            <button
              onClick={() => navigate("contact")}
              style={{
                background: "#64FFDA",
                color: "#0D2B5A",
                border: "none",
                padding: "16px 32px",
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
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#ffffff")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#64FFDA")
              }
            >
              Explore Syscomply <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section
        style={{
          background: "#081C38",
          padding: "60px 40px",
          textAlign: "center",
          color: "#ffffff",
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 16 }}>
            Ready to Automate Your Compliance?
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "#C5D8EE",
              lineHeight: 1.7,
              marginBottom: 28,
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
