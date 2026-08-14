import { motion } from "motion/react";
import { Video, Users, PlayCircle, LayoutGrid, Check } from "lucide-react";
import deskChattingImg from "../../../imports/idatum_desk_chatting.png";

type Page = string;
interface Props {
  navigate: (page: Page, state?: Record<string, string>) => void;
}

export function HowWeTrain({ navigate }: Props) {
  const formats = [
    {
      id: "live-virtual",
      icon: Video,
      title: "Live Virtual Instructor-Led",
      desc: "Real-time sessions delivered via virtual classroom. Participants engage directly with the instructor, ask questions, and work through case studies with peers — all without travel overhead.",
      bullets: [
        "Live Q&A and discussion",
        "Group breakout exercises",
        "Session recordings available",
        "Cohort-based scheduling",
      ],
    },
    {
      id: "in-person",
      icon: Users,
      title: "In-Person Workshop",
      desc: "Delivered at your location or a neutral venue. Best for teams that benefit from hands-on facilitation, working through organization-specific scenarios in a structured setting.",
      bullets: [
        "On-site at your premises",
        "Custom case studies",
        "Tabletop exercises",
        "Group certification pathways",
      ],
    },
    {
      id: "on-demand",
      icon: PlayCircle,
      title: "Self-Paced On-Demand",
      desc: "Learners complete modules at their own pace through our learning platform. Ideal for refresher training, onboarding new staff, or organizations with distributed teams across time zones.",
      bullets: [
        "24/7 platform access",
        "Progress tracking & reporting",
        "Completion certificates",
        "Mobile-compatible",
      ],
    },
    {
      id: "blended",
      icon: LayoutGrid,
      title: "Blended Learning Programs",
      desc: "A structured combination of self-paced pre-work, live application sessions, and post-training assessments. The most effective format for deep competency development.",
      bullets: [
        "Pre-work modules",
        "Live application sessions",
        "Post-training assessments",
        "Manager dashboards",
      ],
    },
  ];

  return (
    <div
      style={{
        fontFamily: "var(--font-sans)",
        background: "#F8FAFC",
        minHeight: "100vh",
        paddingBottom: 80,
      }}
    >
      {/* ── 1. Hero Section ── */}
      <section
        style={{
          background: "linear-gradient(135deg, #102847 0%, #15335A 100%)",
          padding: "100px 40px 80px",
          textAlign: "center",
        }}
      >
        <span
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "1.5px",
            color: "#64FFDA",
            textTransform: "uppercase",
            marginBottom: 16,
            display: "block",
          }}
        >
          OUR METHODOLOGY
        </span>
        <h1
          style={{
            fontSize: 48,
            fontWeight: 800,
            color: "#ffffff",
            marginBottom: 24,
            letterSpacing: "-1px",
          }}
        >
          How We Train
        </h1>
        <p
          style={{
            fontSize: 18,
            color: "#B0C4DE",
            lineHeight: 1.6,
            maxWidth: 700,
            margin: "0 auto",
            fontWeight: 400,
          }}
        >
          Idatum Academy offers four delivery formats designed to fit any team
          structure, schedule, or learning objective. Every format is built
          around the same core principle: real knowledge transfer, not
          box-ticking.
        </p>
      </section>

      {/* ── 2. The 4 Delivery Formats Grid ── */}
      <section
        style={{
          maxWidth: 1280,
          margin: "-40px auto 80px",
          padding: "0 40px",
          position: "relative",
          zIndex: 10,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))",
            gap: 24,
          }}
        >
          {formats.map((format) => (
            <motion.div
              key={format.id}
              whileHover={{ y: -4 }}
              style={{
                background: "#ffffff",
                border: "1px solid #E2E8F0",
                borderRadius: 16,
                padding: 40,
                boxShadow: "0 10px 30px rgba(13,43,90,0.04)",
                display: "flex",
                flexDirection: "column",
                transition: "border-color 0.2s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "#CBD5E1")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "#E2E8F0")
              }
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: "#F1F5FA",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 24,
                }}
              >
                <format.icon size={24} color="#1A5EA8" strokeWidth={2} />
              </div>

              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#0D2B5A",
                  marginBottom: 12,
                }}
              >
                {format.title}
              </h3>

              <p
                style={{
                  fontSize: 14,
                  color: "#4A6080",
                  lineHeight: 1.6,
                  marginBottom: 32,
                  flex: 1,
                }}
              >
                {format.desc}
              </p>

              {/* 2-Column Bullet List */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: window.innerWidth < 768 ? "1fr" : "1fr 1fr",
                  gap: "12px 16px",
                  borderTop: "1px solid #F1F5FA",
                  paddingTop: 24,
                }}
              >
                {format.bullets.map((bullet, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 8,
                    }}
                  >
                    <div style={{ marginTop: 2, color: "#10B981" }}>
                      <Check size={16} strokeWidth={3} />
                    </div>
                    <span
                      style={{
                        fontSize: 13,
                        color: "#4A6080",
                        lineHeight: 1.4,
                        fontWeight: 500,
                      }}
                    >
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 3. Competency vs Checkboxes (Split Screen) ── */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "40px" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 60,
          }}
        >
          {/* Left: Content */}
          <div style={{ flex: "1 1 500px" }}>
            <h2
              style={{
                fontSize: 32,
                fontWeight: 800,
                color: "#0D2B5A",
                marginBottom: 24,
                lineHeight: 1.2,
                letterSpacing: "-0.5px",
              }}
            >
              Training Built Around Competency, Not Compliance Checkboxes
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "#4A6080",
                lineHeight: 1.7,
                marginBottom: 20,
              }}
            >
              Too many compliance training programs exist solely to generate
              completion certificates. Idatum Academy is built differently. Our
              learning design starts with the job to be done — what your team
              needs to actually do as a result of training — and works backward
              to the curriculum.
            </p>
            <p
              style={{
                fontSize: 16,
                color: "#4A6080",
                lineHeight: 1.7,
                marginBottom: 32,
              }}
            >
              This means every module connects learning to application, and
              every assessment measures capability rather than memorization.
              Your team emerges from training ready to act, not just ready to
              pass a test.
            </p>
            <button
              onClick={() => navigate("contact")}
              style={{
                background: "#1A5EA8",
                color: "#ffffff",
                border: "none",
                cursor: "pointer",
                padding: "14px 28px",
                fontSize: 15,
                fontWeight: 600,
                borderRadius: 6,
                transition: "background 0.2s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#0D4A8A")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#1A5EA8")
              }
            >
              Contact Us to Learn More
            </button>
          </div>

          {/* Right: Custom Local Image */}
          <div style={{ flex: "1 1 400px", position: "relative" }}>
            <div
              style={{
                width: "100%",
                paddingBottom: "65%",
                position: "relative",
                borderRadius: 16,
                overflow: "hidden",
                boxShadow: "0 24px 48px rgba(13,43,90,0.12)",
              }}
            >
              <img
                src={deskChattingImg}
                alt="Team collaborating on training workflows at desk"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to right, rgba(13,43,90,0.1), transparent)",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
