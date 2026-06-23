type Page = string;
interface Props {
  navigate: (
    page: Page,
    state?: Record<string, string>,
  ) => void;
}

const tracks = [
  {
    label: "POSH",
    color: "#1A5EA8",
    bg: "#EEF4FF",
    title: "Prevention of Sexual Harassment",
    desc: "Comprehensive POSH Act training for Internal Committee members, employees, and managers. Covers legal obligations, complaint procedures, and creating a safe workplace culture.",
    courses: 6,
    duration: "2–8 hours per course",
    formats: ["Live Virtual", "In-Person", "Self-Paced"],
    highlights: [
      "IC Member Certification",
      "Awareness Program",
      "Manager Sensitization",
    ],
  },
  {
    label: "ISMS",
    color: "#0D6B4E",
    bg: "#ECFDF5",
    title: "Information Security Management",
    desc: "ISO 27001-aligned training covering information security fundamentals, risk management, and the practical implementation of an ISMS within your organization.",
    courses: 5,
    duration: "4–16 hours per course",
    formats: ["Live Virtual", "Blended"],
    highlights: [
      "Foundation Certificate",
      "Lead Implementer Prep",
      "Risk Assessment Workshop",
    ],
  },
  {
    label: "SOC 2",
    color: "#6B3DAB",
    bg: "#F5F0FF",
    title: "Service Organization Controls",
    desc: "End-to-end SOC 2 training for compliance teams, developers, and operations staff. Covers all five Trust Service Criteria with practical control mapping exercises.",
    courses: 4,
    duration: "3–12 hours per course",
    formats: ["Live Virtual", "Self-Paced"],
    highlights: [
      "TSC Deep Dives",
      "Evidence Collection",
      "Readiness Workshop",
    ],
  },
  {
    label: "ISO",
    color: "#8B4513",
    bg: "#FFF7ED",
    title: "International Standards Training",
    desc: "Training programs aligned to ISO 27001, ISO 9001, and ISO 22301 — covering requirements interpretation, implementation, and internal audit preparation.",
    courses: 5,
    duration: "4–20 hours per course",
    formats: ["In-Person", "Live Virtual", "Blended"],
    highlights: [
      "Requirements Interpretation",
      "Internal Auditor",
      "Lead Auditor Prep",
    ],
  },
  {
    label: "ITGC",
    color: "#B8370A",
    bg: "#FFF1EE",
    title: "IT General Controls",
    desc: "Practical training on designing and testing ITGC for SOX compliance, external audit, and internal control assessments — with hands-on testing walkthroughs.",
    courses: 4,
    duration: "3–10 hours per course",
    formats: ["Live Virtual", "Blended"],
    highlights: [
      "Control Design",
      "Testing Methodology",
      "SOX Alignment",
    ],
  },
  {
    label: "Audit",
    color: "#2B6A7C",
    bg: "#EFF8FC",
    title: "Internal & External Audit",
    desc: "Training for internal auditors, audit committee members, and finance professionals — covering audit planning, fieldwork, reporting, and follow-up best practices.",
    courses: 5,
    duration: "4–16 hours per course",
    formats: ["Live Virtual", "In-Person"],
    highlights: [
      "IIA Standards Alignment",
      "Risk-Based Auditing",
      "Audit Report Writing",
    ],
  },
];

export function TrainingTracks({ navigate }: Props) {
  return (
    <div
      style={{ fontFamily: "var(--font-sans)", paddingTop: 64 }}
    >
      {/* Header */}
      <section
        style={{
          background: "#F1F5FA",
          padding: "64px 40px",
          borderBottom: "1px solid #D1DCE8",
        }}
      >
        <div
          style={{
            maxWidth: 720,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
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
            Idatum Academy
          </p>
          <h1
            style={{
              fontSize: 44,
              fontWeight: 700,
              color: "#0D2B5A",
              lineHeight: 1.2,
              letterSpacing: "-0.8px",
              marginBottom: 20,
            }}
          >
            Training Tracks
          </h1>
          <p
            style={{
              fontSize: 17,
              color: "#4A6080",
              lineHeight: 1.8,
            }}
          >
            Six specialized tracks covering the compliance
            domains that matter most. Each track offers a
            progression from foundational awareness to advanced
            practitioner certification.
          </p>
        </div>
      </section>

      {/* Tracks */}
      <section
        style={{
          padding: "72px 40px",
          maxWidth: 1280,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
        >
          {tracks.map((track) => (
            <div
              key={track.label}
              style={{
                background: "#fff",
                border: "1px solid #D1DCE8",
                borderRadius: 12,
                overflow: "hidden",
                transition: "box-shadow 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                (
                  e.currentTarget as HTMLDivElement
                ).style.boxShadow =
                  `0 12px 40px ${track.color}20`;
                (
                  e.currentTarget as HTMLDivElement
                ).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (
                  e.currentTarget as HTMLDivElement
                ).style.boxShadow = "none";
                (
                  e.currentTarget as HTMLDivElement
                ).style.transform = "translateY(0)";
              }}
            >
              {/* Track header band */}
              <div
                style={{
                  background: track.color,
                  padding: "20px 28px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: "rgba(255,255,255,0.7)",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                    }}
                  >
                    Track
                  </span>
                  <p
                    style={{
                      fontSize: 22,
                      fontWeight: 800,
                      color: "#fff",
                      letterSpacing: "-0.3px",
                    }}
                  >
                    {track.label}
                  </p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p
                    style={{
                      fontSize: 28,
                      fontWeight: 700,
                      color: "#fff",
                      lineHeight: 1,
                    }}
                  >
                    {track.courses}
                  </p>
                  <p
                    style={{
                      fontSize: 11,
                      color: "rgba(255,255,255,0.75)",
                    }}
                  >
                    Courses
                  </p>
                </div>
              </div>

              {/* Track body */}
              <div style={{ padding: 28 }}>
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: "#0D2B5A",
                    marginBottom: 10,
                  }}
                >
                  {track.title}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    color: "#4A6080",
                    lineHeight: 1.7,
                    marginBottom: 20,
                  }}
                >
                  {track.desc}
                </p>

                {/* Meta row */}
                <div
                  style={{
                    display: "flex",
                    gap: 16,
                    marginBottom: 20,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="#4A6080"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M12 6v6l4 2"
                        stroke="#4A6080"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span
                      style={{ fontSize: 12, color: "#4A6080" }}
                    >
                      {track.duration}
                    </span>
                  </div>
                </div>

                {/* Formats */}
                <div
                  style={{
                    display: "flex",
                    gap: 6,
                    flexWrap: "wrap",
                    marginBottom: 20,
                  }}
                >
                  {track.formats.map((f) => (
                    <span
                      key={f}
                      style={{
                        background: track.bg,
                        color: track.color,
                        fontSize: 11,
                        fontWeight: 600,
                        padding: "3px 10px",
                        borderRadius: 20,
                      }}
                    >
                      {f}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <div
                  style={{
                    borderTop: "1px solid #EEF2F7",
                    paddingTop: 16,
                    marginBottom: 20,
                  }}
                >
                  {track.highlights.map((h) => (
                    <div
                      key={h}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        marginBottom: 6,
                      }}
                    >
                      <div
                        style={{
                          width: 5,
                          height: 5,
                          background: track.color,
                          borderRadius: "50%",
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          fontSize: 13,
                          color: "#0D2B5A",
                        }}
                      >
                        {h}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() =>
                    navigate("browse-courses", {
                      defaultTrack: track.label,
                    })
                  }
                  style={{
                    width: "100%",
                    background: track.bg,
                    color: track.color,
                    border: `1.5px solid ${track.color}40`,
                    cursor: "pointer",
                    padding: "11px 20px",
                    fontSize: 13,
                    fontWeight: 700,
                    borderRadius: 6,
                    transition: "all 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      track.color;
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = track.bg;
                    e.currentTarget.style.color = track.color;
                  }}
                >
                  Browse {track.label} Courses →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}