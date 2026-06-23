import { useState } from "react";

type Page =
  | "hero"
  | "choose"
  | "why-idatum"
  | "qa-intro"
  | "partner-vs-vendor"
  | "qa-timeline"
  | "process-built"
  | "why-choose-qa"
  | "academy-intro"
  | "how-we-train"
  | "training-tracks"
  | "browse-courses"
  | "posh-detail"
  | "contact"
  | "partner-intro"
  | "why-partner"
  | "become-partner"
  | "trainer-onboarding"
  | "auditor-onboarding";

interface NavProps {
  navigate: (page: Page) => void;
  current: Page;
}

export function Nav({ navigate, current }: NavProps) {
  const [qaOpen, setQaOpen] = useState(false);
  const [academyOpen, setAcademyOpen] = useState(false);
  const [partnerOpen, setPartnerOpen] = useState(false);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "#fff",
        borderBottom: "1px solid #D1DCE8",
        fontFamily: "var(--font-sans)",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 40px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <button
          onClick={() => navigate("hero")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
        >
          <div
            style={{
              width: 32,
              height: 32,
              background: "#0D2B5A",
              borderRadius: 6,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                color: "#fff",
                fontSize: 14,
                fontWeight: 700,
              }}
            >
              i
            </span>
          </div>
          <span
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: "#0D2B5A",
              letterSpacing: "-0.3px",
            }}
          >
            Idatum
          </span>
        </button>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          {/* Idatum QA dropdown */}
          <div style={{ position: "relative" }}>
            <button
              onMouseEnter={() => {
                setQaOpen(true);
                setAcademyOpen(false);
                setPartnerOpen(false);
              }}
              onMouseLeave={() => setQaOpen(false)}
              onClick={() => navigate("qa-intro")}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "8px 12px",
                fontSize: 14,
                fontWeight: 500,
                color: [
                  "qa-intro",
                  "partner-vs-vendor",
                  "qa-timeline",
                  "process-built",
                  "why-choose-qa",
                ].includes(current)
                  ? "#1A5EA8"
                  : "#0D2B5A",
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              Idatum QA
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M3 4.5L6 7.5L9 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {qaOpen && (
              <div
                onMouseEnter={() => setQaOpen(true)}
                onMouseLeave={() => setQaOpen(false)}
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  background: "#fff",
                  border: "1px solid #D1DCE8",
                  borderRadius: 8,
                  padding: "8px 0",
                  minWidth: 200,
                  boxShadow: "0 8px 24px rgba(13,43,90,0.12)",
                }}
              >
                {[
                  {
                    label: "QA Overview",
                    page: "qa-intro" as Page,
                  },
                  {
                    label: "Partner vs Vendor",
                    page: "partner-vs-vendor" as Page,
                  },
                  {
                    label: "QA Timeline",
                    page: "qa-timeline" as Page,
                  },
                  {
                    label: "Process Built For You",
                    page: "process-built" as Page,
                  },
                  {
                    label: "Why Choose Idatum QA",
                    page: "why-choose-qa" as Page,
                  },
                ].map((item) => (
                  <button
                    key={item.page}
                    onClick={() => {
                      navigate(item.page);
                      setQaOpen(false);
                    }}
                    style={{
                      display: "block",
                      width: "100%",
                      textAlign: "left",
                      padding: "10px 16px",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: 13,
                      color: "#0D2B5A",
                      fontWeight: 400,
                      transition: "background 0.12s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background =
                        "#F1F5FA")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background =
                        "none")
                    }
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Training Academy dropdown */}
          <div style={{ position: "relative" }}>
            <button
              onMouseEnter={() => {
                setAcademyOpen(true);
                setQaOpen(false);
                setPartnerOpen(false);
              }}
              onMouseLeave={() => setAcademyOpen(false)}
              onClick={() => navigate("academy-intro")}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "8px 12px",
                fontSize: 14,
                fontWeight: 500,
                color: [
                  "academy-intro",
                  "how-we-train",
                  "training-tracks",
                  "browse-courses",
                  "posh-detail",
                ].includes(current)
                  ? "#1A5EA8"
                  : "#0D2B5A",
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              Training Academy
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M3 4.5L6 7.5L9 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {academyOpen && (
              <div
                onMouseEnter={() => setAcademyOpen(true)}
                onMouseLeave={() => setAcademyOpen(false)}
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  background: "#fff",
                  border: "1px solid #D1DCE8",
                  borderRadius: 8,
                  padding: "8px 0",
                  minWidth: 200,
                  boxShadow: "0 8px 24px rgba(13,43,90,0.12)",
                }}
              >
                {[
                  {
                    label: "Academy Overview",
                    page: "academy-intro" as Page,
                  },
                  {
                    label: "How We Train",
                    page: "how-we-train" as Page,
                  },
                  {
                    label: "Training Tracks",
                    page: "training-tracks" as Page,
                  },
                  {
                    label: "Browse All Courses",
                    page: "browse-courses" as Page,
                  },
                ].map((item) => (
                  <button
                    key={item.page}
                    onClick={() => {
                      navigate(item.page);
                      setAcademyOpen(false);
                    }}
                    style={{
                      display: "block",
                      width: "100%",
                      textAlign: "left",
                      padding: "10px 16px",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: 13,
                      color: "#0D2B5A",
                      fontWeight: 400,
                      transition: "background 0.12s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background =
                        "#F1F5FA")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background =
                        "none")
                    }
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Partner with Us dropdown */}
          <div style={{ position: "relative" }}>
            <button
              onMouseEnter={() => {
                setPartnerOpen(true);
                setQaOpen(false);
                setAcademyOpen(false);
              }}
              onMouseLeave={() => setPartnerOpen(false)}
              onClick={() => navigate("partner-intro")}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "8px 12px",
                fontSize: 14,
                fontWeight: 500,
                color: [
                  "partner-intro",
                  "why-partner",
                  "become-partner",
                  "trainer-onboarding",
                  "auditor-onboarding",
                ].includes(current)
                  ? "#1A5EA8"
                  : "#0D2B5A",
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              Partner with Us
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M3 4.5L6 7.5L9 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {partnerOpen && (
              <div
                onMouseEnter={() => setPartnerOpen(true)}
                onMouseLeave={() => setPartnerOpen(false)}
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  background: "#fff",
                  border: "1px solid #D1DCE8",
                  borderRadius: 8,
                  padding: "10px 0",
                  minWidth: 288,
                  boxShadow: "0 8px 24px rgba(13,43,90,0.12)",
                }}
              >
                {/* Group 1: Partner Program */}
                <div
                  style={{
                    padding: "2px 16px 6px",
                    fontSize: 10,
                    fontWeight: 700,
                    color: "#9BB5D4",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                  }}
                >
                  Partner Program
                </div>
                {[
                  {
                    label: "Partnership Overview",
                    sub: "Explore our partner models",
                    page: "partner-intro" as Page,
                    icon: (
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 9m0 8V9m0 0L9 7"
                          stroke="#1A5EA8"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ),
                  },
                  {
                    label: "Why Partner With Us",
                    sub: "Benefits & revenue share",
                    page: "why-partner" as Page,
                    icon: (
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                          stroke="#1A5EA8"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ),
                  },
                  {
                    label: "Become a Partner",
                    sub: "Apply as an organisation",
                    page: "become-partner" as Page,
                    icon: (
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                          stroke="#1A5EA8"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ),
                  },
                ].map((item) => (
                  <button
                    key={item.page}
                    onClick={() => {
                      navigate(item.page);
                      setPartnerOpen(false);
                    }}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 10,
                      width: "100%",
                      padding: "9px 16px",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "background 0.12s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background =
                        "#F1F5FA")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background =
                        "none")
                    }
                  >
                    <div
                      style={{
                        width: 30,
                        height: 30,
                        background: "#EEF4FF",
                        borderRadius: 6,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: 13,
                          fontWeight: 600,
                          color: "#0D2B5A",
                          margin: 0,
                        }}
                      >
                        {item.label}
                      </p>
                      <p
                        style={{
                          fontSize: 11,
                          color: "#9BB5D4",
                          margin: "2px 0 0",
                        }}
                      >
                        {item.sub}
                      </p>
                    </div>
                  </button>
                ))}

                {/* Divider */}
                <div
                  style={{
                    height: 1,
                    background: "#EEF2F7",
                    margin: "8px 0",
                  }}
                />

                {/* Group 2: Practitioner Network */}
                <div
                  style={{
                    padding: "2px 16px 6px",
                    fontSize: 10,
                    fontWeight: 700,
                    color: "#9BB5D4",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                  }}
                >
                  Practitioner Network
                </div>
                {[
                  {
                    label: "Trainer Onboarding",
                    sub: "Deliver Academy courses",
                    page: "trainer-onboarding" as Page,
                    icon: (
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          stroke="#0D6B4E"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ),
                    iconBg: "#ECFDF5",
                  },
                  {
                    label: "Auditor Onboarding",
                    sub: "Join the QA auditor panel",
                    page: "auditor-onboarding" as Page,
                    icon: (
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          stroke="#2B6A7C"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ),
                    iconBg: "#EFF8FC",
                  },
                  {
                    label: "Consultant Onboarding",
                    sub: "Join as an independent consultant",
                    page: "consultant-onboarding" as Page,
                    icon: (
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          stroke="#6B3DAB"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ),
                    iconBg: "#F5F0FF",
                  },
                ].map((item) => (
                  <button
                    key={item.page}
                    onClick={() => {
                      navigate(item.page);
                      setPartnerOpen(false);
                    }}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 10,
                      width: "100%",
                      padding: "9px 16px",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "background 0.12s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background =
                        "#F1F5FA")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background =
                        "none")
                    }
                  >
                    <div
                      style={{
                        width: 30,
                        height: 30,
                        background: item.iconBg,
                        borderRadius: 6,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: 13,
                          fontWeight: 600,
                          color: "#0D2B5A",
                          margin: 0,
                        }}
                      >
                        {item.label}
                      </p>
                      <p
                        style={{
                          fontSize: 11,
                          color: "#9BB5D4",
                          margin: "2px 0 0",
                        }}
                      >
                        {item.sub}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => navigate("why-idatum")}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px 12px",
              fontSize: 14,
              fontWeight: 500,
              color:
                current === "why-idatum"
                  ? "#1A5EA8"
                  : "#0D2B5A",
            }}
          >
            Why Idatum
          </button>

          <button
            onClick={() => navigate("contact")}
            style={{
              background: "#1A5EA8",
              border: "none",
              cursor: "pointer",
              padding: "10px 20px",
              fontSize: 14,
              fontWeight: 600,
              color: "#fff",
              borderRadius: 6,
              marginLeft: 8,
              transition: "background 0.15s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "#0D4A8A")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "#1A5EA8")
            }
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
}