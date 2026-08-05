import React from "react";
import { motion } from "motion/react";
import {
  HeartHandshake,
  Link as LinkIcon,
  Package,
  Settings,
  ArrowRight,
} from "lucide-react";

type Page = string;
interface Props {
  navigate: (page: Page) => void;
}

export function PartnerIntro({ navigate }: Props) {
  const metrics = [
    { value: "40+", label: "Active Partners" },
    { value: "₹0", label: "Joining Fee" },
    { value: "15–25%", label: "Revenue Share" },
    { value: "48hr", label: "Onboarding Time" },
  ];

  const models = [
    {
      id: "referral",
      title: "Referral Partner",
      icon: HeartHandshake,
      iconColor: "#F59E0B",
      iconBg: "#FEF3C7",
      desc: "Introduce us to organizations in your network that need compliance or training support. Earn a referral fee for every successful engagement — no delivery involvement required.",
      bestFor:
        "Consultants, advisors, and professional services firms with broad networks.",
    },
    {
      id: "codelivery",
      title: "Co-Delivery Partner",
      icon: LinkIcon,
      iconColor: "#EC4899",
      iconBg: "#FCE7F3",
      desc: "Collaborate with Idatum to deliver compliance and training programs to shared clients. We bring the specialist expertise; you bring the client relationship and local presence.",
      bestFor: "HR firms, IT services companies, and management consultancies.",
    },
    {
      id: "reseller",
      title: "Reseller Partner",
      icon: Package,
      iconColor: "#8B5CF6",
      iconBg: "#EDE9FE",
      desc: "License and resell Idatum Academy's course library under your own brand. White-label training content with your organization's identity, backed by Idatum's methodology.",
      bestFor:
        "Training companies, HR technology providers, and LMS operators.",
    },
    {
      id: "tech",
      title: "Technology Partner",
      icon: Settings,
      iconColor: "#06B6D4",
      iconBg: "#CFFAFE",
      desc: "Integrate Idatum's compliance assessment tools and training content with your platform, creating bundled solutions that serve your customers' compliance needs.",
      bestFor:
        "GRC platforms, HRIS providers, and compliance technology vendors.",
    },
  ];

  return (
    <div
      style={{
        fontFamily: "var(--font-sans)",
        background: "#F8FAFC",
        minHeight: "100vh",
      }}
    >
      {/* ── 1. Split Hero Section ── */}
      <section
        style={{
          background: "linear-gradient(135deg, #102847 0%, #15335A 100%)",
          padding: "120px 40px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 60,
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Left: Content */}
          <div style={{ flex: "1 1 500px" }}>
            <span
              style={{
                display: "inline-block",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "1px",
                color: "#64FFDA",
                background: "rgba(100, 255, 218, 0.1)",
                padding: "6px 16px",
                borderRadius: 999,
                marginBottom: 24,
                textTransform: "uppercase",
              }}
            >
              ● Partner Program
            </span>
            <h1
              style={{
                fontSize: 48,
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 1.15,
                letterSpacing: "-1px",
                marginBottom: 24,
              }}
            >
              Grow Together with the Idatum Partner Network
            </h1>
            <p
              style={{
                fontSize: 18,
                color: "#B0C4DE",
                lineHeight: 1.6,
                marginBottom: 40,
                maxWidth: 540,
              }}
            >
              Idatum's partner program is built for organizations that want to
              extend their service offering, increase revenue, and deliver
              genuine value to clients — without building compliance or training
              capabilities from scratch.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <button
                onClick={() => {
                  document
                    .getElementById("models-section")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                style={{
                  background: "#ffffff",
                  color: "#15335A",
                  border: "none",
                  cursor: "pointer",
                  padding: "16px 32px",
                  fontSize: 15,
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
                Explore Partnership Options
              </button>
              <button
                onClick={() => navigate("contact")}
                style={{
                  background: "transparent",
                  color: "#ffffff",
                  border: "1px solid rgba(255,255,255,0.3)",
                  cursor: "pointer",
                  padding: "16px 32px",
                  fontSize: 15,
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
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                }}
              >
                Speak to Our Team
              </button>
            </div>
          </div>

          {/* Right: Abstract Tech/Network Graphic */}
          <div
            style={{
              flex: "1 1 400px",
              display: "flex",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              style={{
                width: "100%",
                maxWidth: 500,
                aspectRatio: "4/3",
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 100%)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: 24,
                boxShadow: "0 24px 48px rgba(0,0,0,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                position: "relative",
              }}
            >
              {/* Decorative inner rings */}
              <div
                style={{
                  position: "absolute",
                  width: 300,
                  height: 300,
                  border: "1px dashed rgba(100,255,218,0.3)",
                  borderRadius: "50%",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  width: 200,
                  height: 200,
                  border: "1px solid rgba(100,255,218,0.1)",
                  borderRadius: "50%",
                }}
              />
              <div
                style={{
                  width: 80,
                  height: 80,
                  background: "rgba(100,255,218,0.15)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid #64FFDA",
                }}
              >
                <HeartHandshake size={32} color="#64FFDA" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. Metrics Bar ── */}
      <section
        style={{
          background: "#ffffff",
          borderBottom: "1px solid #E2E8F0",
          padding: "40px 0",
        }}
      >
        <div
          style={{
            maxWidth: 1000,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 32,
            textAlign: "center",
          }}
        >
          {metrics.map((metric, i) => (
            <div key={i}>
              <div
                style={{
                  fontSize: 40,
                  fontWeight: 800,
                  color: "#0D2B5A",
                  marginBottom: 8,
                  letterSpacing: "-1px",
                }}
              >
                {metric.value}
              </div>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#64748B",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. Partnership Models Grid ── */}
      <section
        id="models-section"
        style={{ padding: "100px 40px", maxWidth: 1280, margin: "0 auto" }}
      >
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <h2
            style={{
              fontSize: 36,
              fontWeight: 800,
              color: "#0D2B5A",
              marginBottom: 16,
              letterSpacing: "-0.5px",
            }}
          >
            Partnership Models
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "#4A6080",
              maxWidth: 600,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Four models designed for different types of organizations. Choose
            the one that fits your business — or combine elements from multiple
            models.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
            gap: 32,
          }}
        >
          {models.map((model) => (
            <motion.div
              key={model.id}
              onClick={() =>
                navigate("become-partner", { defaultType: model.title })
              }
              whileHover={{ y: -6 }}
              style={{
                background: "#ffffff",
                border: "1px solid #E2E8F0",
                borderRadius: 16,
                padding: 40,
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 4px 12px rgba(13,43,90,0.03)",
                transition: "box-shadow 0.2s ease, border-color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(13,43,90,0.08)";
                e.currentTarget.style.borderColor = "#CBD5E1";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 4px 12px rgba(13,43,90,0.03)";
                e.currentTarget.style.borderColor = "#E2E8F0";
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: model.iconBg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 24,
                }}
              >
                <model.icon size={24} color={model.iconColor} strokeWidth={2} />
              </div>

              <h3
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: "#0D2B5A",
                  marginBottom: 16,
                }}
              >
                {model.title}
              </h3>

              <p
                style={{
                  fontSize: 15,
                  color: "#4A6080",
                  lineHeight: 1.6,
                  marginBottom: 32,
                  flex: 1,
                }}
              >
                {model.desc}
              </p>

              <div
                style={{
                  background: "#F8FAFC",
                  padding: "16px 20px",
                  borderRadius: 8,
                  marginTop: "auto",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#1A5EA8",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  Best For:
                </span>
                <span
                  style={{
                    fontSize: 13,
                    color: "#334155",
                    fontWeight: 500,
                    lineHeight: 1.4,
                  }}
                >
                  {model.bestFor}
                </span>
              </div>

              {/* Hover Indicator */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  marginTop: 24,
                  color: "#1A5EA8",
                  fontWeight: 600,
                  fontSize: 14,
                }}
              >
                Apply for this model <ArrowRight size={16} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
