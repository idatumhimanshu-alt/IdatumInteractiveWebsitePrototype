type Page = string;

interface FooterProps {
  navigate: (page: Page) => void;
}

export function Footer({ navigate }: FooterProps) {
  return (
    <footer
      style={{
        background: "#0D2B5A",
        color: "#fff",
        padding: "64px 40px 32px",
        fontFamily: "var(--font-sans)",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 48,
            marginBottom: 48,
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  background: "#1A5EA8",
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
                  color: "#fff",
                }}
              >
                Idatum
              </span>
            </div>
            <p
              style={{
                fontSize: 13,
                lineHeight: 1.7,
                color: "#9BB5D4",
                maxWidth: 280,
              }}
            >
              Your trusted partner in compliance, quality
              assurance, and training. Building confidence
              through expertise.
            </p>
            <div
              style={{
                display: "flex",
                gap: 12,
                marginTop: 20,
              }}
            >
              {["POSH", "ISMS", "SOC 2", "ISO"].map((badge) => (
                <span
                  key={badge}
                  style={{
                    background: "rgba(26,94,168,0.3)",
                    border: "1px solid rgba(26,94,168,0.5)",
                    color: "#9BB5D4",
                    fontSize: 10,
                    fontWeight: 600,
                    padding: "3px 8px",
                    borderRadius: 4,
                    letterSpacing: "0.5px",
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: "#9BB5D4",
                letterSpacing: "1px",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              Idatum QA
            </p>
            {[
              { label: "QA Overview", page: "qa-intro" },
              {
                label: "Partner vs Vendor",
                page: "partner-vs-vendor",
              },
              { label: "QA Timeline", page: "qa-timeline" },
              { label: "Why Choose Us", page: "why-choose-qa" },
            ].map((item) => (
              <button
                key={item.page}
                onClick={() => navigate(item.page)}
                style={{
                  display: "block",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "4px 0",
                  fontSize: 13,
                  color: "#C5D8EE",
                  textAlign: "left",
                  width: "100%",
                  transition: "color 0.15s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#fff")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "#C5D8EE")
                }
              >
                {item.label}
              </button>
            ))}
          </div>

          <div>
            <p
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: "#9BB5D4",
                letterSpacing: "1px",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              Idatum Academy
            </p>
            {[
              {
                label: "Academy Overview",
                page: "academy-intro",
              },
              { label: "How We Train", page: "how-we-train" },
              {
                label: "Training Tracks",
                page: "training-tracks",
              },
              {
                label: "Browse Courses",
                page: "browse-courses",
              },
            ].map((item) => (
              <button
                key={item.page}
                onClick={() => navigate(item.page)}
                style={{
                  display: "block",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "4px 0",
                  fontSize: 13,
                  color: "#C5D8EE",
                  textAlign: "left",
                  width: "100%",
                  transition: "color 0.15s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#fff")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "#C5D8EE")
                }
              >
                {item.label}
              </button>
            ))}
          </div>

          <div>
            <p
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: "#9BB5D4",
                letterSpacing: "1px",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              Company
            </p>
            {[
              { label: "Why Idatum", page: "why-idatum" },
              {
                label: "Partner Program",
                page: "partner-intro",
              },
              {
                label: "Become a Partner",
                page: "become-partner",
              },
              { label: "Contact Us", page: "contact" },
            ].map((item) => (
              <button
                key={item.page}
                onClick={() => navigate(item.page)}
                style={{
                  display: "block",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "4px 0",
                  fontSize: 13,
                  color: "#C5D8EE",
                  textAlign: "left",
                  width: "100%",
                  transition: "color 0.15s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#fff")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "#C5D8EE")
                }
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{ fontSize: 12, color: "#9BB5D4" }}>
            © {new Date().getFullYear()} Idatum. All rights
            reserved.
          </p>
          <p style={{ fontSize: 12, color: "#9BB5D4" }}>
            Privacy Policy · Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}