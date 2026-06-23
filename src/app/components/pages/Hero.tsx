import { motion } from "motion/react";

type Page = string;
interface HeroProps {
  navigate: (page: Page) => void;
}

const domainColors: Record<
  string,
  { color: string; bg: string }
> = {
  POSH: { color: "#1A5EA8", bg: "#EEF4FF" },
  ISMS: { color: "#0D6B4E", bg: "#ECFDF5" },
  "SOC 2": { color: "#6B3DAB", bg: "#F5F0FF" },
  ISO: { color: "#8B4513", bg: "#FFF7ED" },
  ITGC: { color: "#B8370A", bg: "#FFF1EE" },
  Audit: { color: "#2B6A7C", bg: "#EFF8FC" },
};

const services = [
  {
    domain: "POSH",
    tagline:
      "Ensure a safe, inclusive workplace with comprehensive POSH compliance and training.",
    page: "training-tracks",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    domain: "ISMS",
    tagline:
      "Protect your information assets with a robust ISO 27001-aligned security management system.",
    page: "qa-intro",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    domain: "SOC 2",
    tagline:
      "Build client trust through independent, rigorous SOC 2 assessment and readiness support.",
    page: "qa-intro",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    domain: "ISO",
    tagline:
      "Achieve global recognition with expert ISO certification guidance and audit preparation.",
    page: "qa-intro",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    domain: "ITGC",
    tagline:
      "Strengthen your digital controls with precision IT General Controls testing and audit.",
    page: "qa-intro",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M5 12H3m18 0h-2M12 5V3m0 18v-2m4.22-13.78l-1.42 1.42M5.64 18.36l-1.42 1.42M18.36 18.36l-1.42-1.42M6.34 6.34L4.92 4.92M12 8a4 4 0 100 8 4 4 0 000-8z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    domain: "Audit",
    tagline:
      "Maintain operational excellence through thorough internal and external audit advisory services.",
    page: "browse-courses",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const trustItems = [
  { value: "Trusted Since 2012", label: "" },
  { value: "500+", label: "Organizations Served" },
  { value: "98%", label: "Compliance Success Rate" },
  { value: "50+", label: "Expert Practitioners" },
];

export function Hero({ navigate }: HeroProps) {
  return (
    <div style={{ fontFamily: "var(--font-sans)" }}>
      {/* ── Hero ── */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #0D2B5A 0%, #1A4A8A 60%, #1E5FAF 100%)",
          minHeight: "100vh",
          paddingTop: 64,
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `radial-gradient(circle at 70% 50%, rgba(26,94,168,0.3) 0%, transparent 60%),
                              radial-gradient(circle at 20% 80%, rgba(13,43,90,0.5) 0%, transparent 50%)`,
          }}
        />

        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "80px 40px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
            position: "relative",
            zIndex: 1,
            width: "100%",
          }}
        >
          {/* Left */}
          <div>
            <h1
              style={{
                fontSize: 52,
                fontWeight: 700,
                color: "#fff",
                lineHeight: 1.15,
                letterSpacing: "-1px",
                marginBottom: 16,
                maxWidth: 560,
              }}
            >
              Your Partner in Compliance, Quality & Training
            </h1>
            <p
              style={{
                fontSize: 13,
                color: "#9BB5D4",
                letterSpacing: "0.5px",
                marginBottom: 16,
                fontWeight: 500,
              }}
            >
              POSH · ISMS · SOC 2 · ISO · ITGC · Audit — for
              Indian organisations
            </p>

            <p
              style={{
                fontSize: 18,
                color: "#C5D8EE",
                lineHeight: 1.7,
                marginBottom: 44,
                maxWidth: 480,
              }}
            >
              Idatum helps organizations build lasting
              compliance frameworks, robust QA systems, and a
              skilled workforce — all through a single, trusted
              partner relationship.
            </p>

            {/* CTAs — Partner with Us is primary */}
            <div
              style={{
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <button
                onClick={() => navigate("partner-intro")}
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
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#F1F5FA";
                  e.currentTarget.style.transform =
                    "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#fff";
                  e.currentTarget.style.transform =
                    "translateY(0)";
                }}
              >
                Partner with Us
              </button>

              <button
                onClick={() => navigate("qa-intro")}
                style={{
                  background: "transparent",
                  color: "#fff",
                  border: "2px solid rgba(255,255,255,0.4)",
                  cursor: "pointer",
                  padding: "14px 28px",
                  fontSize: 15,
                  fontWeight: 600,
                  borderRadius: 6,
                  transition: "all 0.15s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#fff";
                  e.currentTarget.style.background =
                    "rgba(255,255,255,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor =
                    "rgba(255,255,255,0.4)";
                  e.currentTarget.style.background =
                    "transparent";
                }}
              >
                Explore Idatum QA
              </button>

              <button
                onClick={() => navigate("academy-intro")}
                style={{
                  background: "transparent",
                  color: "#fff",
                  border: "2px solid rgba(255,255,255,0.4)",
                  cursor: "pointer",
                  padding: "14px 28px",
                  fontSize: 15,
                  fontWeight: 600,
                  borderRadius: 6,
                  transition: "all 0.15s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#fff";
                  e.currentTarget.style.background =
                    "rgba(255,255,255,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor =
                    "rgba(255,255,255,0.4)";
                  e.currentTarget.style.background =
                    "transparent";
                }}
              >
                Browse Courses
              </button>
            </div>

            <button
              onClick={() => navigate("choose")}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "12px 0 0",
                fontSize: 13,
                color: "#9BB5D4",
                fontFamily: "var(--font-sans)",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#C5D8EE")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "#9BB5D4")
              }
            >
              Not sure where to start? Let us guide you
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Right — corporate image, no floating card */}
          <div
            style={{
              borderRadius: 12,
              overflow: "hidden",
              boxShadow: "0 32px 64px rgba(0,0,0,0.3)",
              position: "relative",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&h=500&fit=crop&auto=format"
              alt="Corporate compliance team in a professional meeting"
              style={{
                display: "block",
                width: "100%",
                height: 420,
                objectFit: "cover",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to bottom, transparent 60%, rgba(13,43,90,0.35) 100%)",
              }}
            />
          </div>
        </div>
      </section>

      {/* ── Trust Bar ── */}
      <section
        style={{
          background: "#fff",
          borderTop: "1px solid #D1DCE8",
          borderBottom: "1px solid #D1DCE8",
          padding: "20px 40px",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 0,
            flexWrap: "wrap",
          }}
        >
          {trustItems.map((item, i) => (
            <div
              key={item.value}
              style={{ display: "flex", alignItems: "center" }}
            >
              <div
                style={{
                  textAlign: "center",
                  padding: "0 32px",
                }}
              >
                <span
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: "#0D2B5A",
                  }}
                >
                  {item.value}
                </span>
                {item.label && (
                  <span
                    style={{
                      fontSize: 14,
                      color: "#4A6080",
                      marginLeft: 6,
                    }}
                  >
                    {item.label}
                  </span>
                )}
              </div>
              {i < trustItems.length - 1 && (
                <div
                  style={{
                    width: 1,
                    height: 24,
                    background: "#D1DCE8",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── Client Marquee Strip ── */}
      <section
        style={{
          background: "#F8FAFC",
          borderTop: "1px solid #D1DCE8",
          borderBottom: "1px solid #D1DCE8",
          padding: "16px 0",
          overflow: "hidden",
        }}
      >
        <style>{`
          @keyframes idatumScrollLeft {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .idatum-marquee { display: flex; width: max-content; animation: idatumScrollLeft 38s linear infinite; }
          .idatum-marquee:hover { animation-play-state: paused; }
        `}</style>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              flexShrink: 0,
              padding: "0 32px 0 40px",
              borderRight: "1px solid #D1DCE8",
            }}
          >
            <p
              style={{
                fontSize: 10,
                fontWeight: 700,
                color: "#9BB5D4",
                letterSpacing: "1.2px",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                margin: 0,
              }}
            >
              Trusted across
            </p>
          </div>
          <div style={{ overflow: "hidden", flex: 1 }}>
            <div className="idatum-marquee">
              {[
                "Financial Services",
                "BFSI",
                "Healthcare",
                "Technology & SaaS",
                "Manufacturing",
                "Professional Services",
                "IT Services",
                "Pharmaceuticals",
                "Logistics & Supply Chain",
                "Real Estate",
                "Legal & Compliance",
                "Education",
                "Retail & E-Commerce",
                "Government & PSU",
                "Financial Services",
                "BFSI",
                "Healthcare",
                "Technology & SaaS",
                "Manufacturing",
                "Professional Services",
                "IT Services",
                "Pharmaceuticals",
                "Logistics & Supply Chain",
                "Real Estate",
                "Legal & Compliance",
                "Education",
                "Retail & E-Commerce",
                "Government & PSU",
              ].map((sector, i) => (
                <span
                  key={i}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    whiteSpace: "nowrap",
                  }}
                >
                  <span
                    style={{
                      color: "#4A6080",
                      fontSize: 13,
                      fontWeight: 500,
                      padding: "0 6px",
                    }}
                  >
                    {sector}
                  </span>
                  <span
                    style={{
                      color: "#CBD5E1",
                      fontSize: 12,
                      padding: "0 8px",
                    }}
                  >
                    ·
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Service Grid ── */}
      <section
        style={{
          padding: "80px 40px",
          maxWidth: 1280,
          margin: "0 auto",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <p
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: "#1A5EA8",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Our Expertise
          </p>
          <h2
            style={{
              fontSize: 34,
              fontWeight: 700,
              color: "#0D2B5A",
              letterSpacing: "-0.5px",
              marginBottom: 12,
            }}
          >
            Our Compliance & Training Expertise
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "#4A6080",
              maxWidth: 520,
              margin: "0 auto",
            }}
          >
            Six specialised domains. Click any area to explore
            how Idatum can help your organisation.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
        >
          {services.map((svc, index) => {
            const { color, bg } = domainColors[svc.domain];
            return (
              <motion.button
                key={svc.domain}
                onClick={() => navigate(svc.page)}
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
                  cursor: "pointer",
                  textAlign: "left",
                  transition:
                    "border-color 0.15s ease, box-shadow 0.15s ease, transform 0.15s ease",
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  fontFamily: "var(--font-sans)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = color;
                  el.style.boxShadow = `0 8px 28px ${color}22`;
                  el.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "#D1DCE8";
                  el.style.boxShadow = "none";
                  el.style.transform = "translateY(0)";
                }}
              >
                {/* Icon + domain label row */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        background: bg,
                        borderRadius: 8,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color,
                        flexShrink: 0,
                      }}
                    >
                      {svc.icon}
                    </div>
                    <span
                      style={{
                        fontSize: 15,
                        fontWeight: 700,
                        color: "#0D2B5A",
                      }}
                    >
                      {svc.domain}
                    </span>
                  </div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    style={{ color, flexShrink: 0 }}
                  >
                    <path
                      d="M5 12h14M12 5l7 7-7 7"
                      stroke={color}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Tagline */}
                <p
                  style={{
                    fontSize: 13,
                    color: "#4A6080",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {svc.tagline}
                </p>
              </motion.button>
            );
          })}
        </div>
      </section>
    </div>
  );
}