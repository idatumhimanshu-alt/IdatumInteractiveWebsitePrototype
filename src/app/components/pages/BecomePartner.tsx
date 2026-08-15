import { useState } from "react";
import { motion } from "motion/react";

type Page = string;
interface Props {
  navigate: (page: Page, state?: Record<string, string>) => void;
  defaultType?: string;
}

export function BecomePartner({
  navigate,
  defaultType = "Referral Partner",
}: Props) {
  const [partnerType, setPartnerType] = useState<string>(defaultType);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    website: "",
    role: "",
    teamSize: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("access_key", "1d7886ee-dc1f-490c-92f8-0f0aeb450af0");
      formData.append(
        "subject",
        `New Partner Application (${partnerType}) from ${form.firstName} ${form.lastName}`,
      );
      formData.append("Partnership Type", partnerType);
      formData.append("First Name", form.firstName);
      formData.append("Last Name", form.lastName);
      formData.append("Email", form.email);
      formData.append("Company", form.company);
      formData.append("Website", form.website);
      formData.append("Team Size", form.teamSize);
      formData.append("Business Overview", form.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div
        style={{
          overflowX: "hidden",
          maxWidth: "100vw",
          boxSizing: "border-box",
          fontFamily: "var(--font-sans)",
          paddingTop: 64,
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            textAlign: "center",
            maxWidth: 540,
            padding: 40,
            boxSizing: "border-box",
            width: "100%",
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              background: "#DCFCE7",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 24px",
            }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 13l4 4L19 7"
                stroke="#16A34A"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h2
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: "#0D2B5A",
              marginBottom: 10,
            }}
          >
            Application Received
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "#4A6080",
              lineHeight: 1.7,
              marginBottom: 8,
            }}
          >
            Thank you for applying to partner with Idatum,{" "}
            <strong>{form.firstName}</strong>.
          </p>
          <p
            style={{
              fontSize: 15,
              color: "#4A6080",
              lineHeight: 1.7,
              marginBottom: 32,
            }}
          >
            Our Partner Success team will review your application and reach out
            within <strong>one business day</strong> to schedule a discovery
            call.
          </p>
          <div
            style={{
              background: "#F1F5FA",
              border: "1px solid #D1DCE8",
              borderRadius: 10,
              padding: "20px 28px",
              marginBottom: 32,
              textAlign: "left",
            }}
          >
            <p
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "#0D2B5A",
                marginBottom: 12,
              }}
            >
              What happens next
            </p>
            {[
              {
                step: "1",
                text: "We review your application — usually within a few hours during business days.",
              },
              {
                step: "2",
                text: "A Partner Success Manager contacts you to schedule a 30-minute discovery call.",
              },
              {
                step: "3",
                text: "If there's a mutual fit, we move to a Partner Agreement — straightforward, no lock-in.",
              },
            ].map((s) => (
              <div
                key={s.step}
                style={{
                  display: "flex",
                  gap: 12,
                  marginBottom: 10,
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: 22,
                    height: 22,
                    background: "#0D2B5A",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: 1,
                  }}
                >
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: "#fff",
                    }}
                  >
                    {s.step}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: 13,
                    color: "#4A6080",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {s.text}
                </p>
              </div>
            ))}
          </div>
          <button
            onClick={() => navigate("partner-intro")}
            style={{
              background: "#1A5EA8",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              padding: "12px 28px",
              fontSize: 14,
              fontWeight: 600,
              borderRadius: 6,
              fontFamily: "var(--font-sans)",
            }}
          >
            Back to Partnership Overview
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        overflowX: "hidden",
        maxWidth: "100vw",
        boxSizing: "border-box",
        fontFamily: "var(--font-sans)",
        paddingTop: 64,
      }}
    >
      {/* Header */}
      <section
        style={{
          background: "linear-gradient(135deg, #0D2B5A 0%, #1A4A8A 100%)",
          padding: "72px 16px",
          boxSizing: "border-box",
          width: "100%",
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
              color: "#64FFDA",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Join the Network
          </p>
          <h1
            style={{
              fontSize: 44,
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.2,
              letterSpacing: "-0.8px",
              marginBottom: 20,
            }}
          >
            Become an Idatum Partner
          </h1>
          <p
            style={{
              fontSize: 17,
              color: "#C5D8EE",
              lineHeight: 1.8,
            }}
          >
            Apply today. Onboard in 48 hours. Start delivering value to your
            clients tomorrow. No joining fee. No long-term lock-in.
          </p>
        </div>
      </section>

      {/* Application form */}
      <section
        style={{
          padding: "72px 16px",
          maxWidth: 1100,
          margin: "0 auto",
          boxSizing: "border-box",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: window.innerWidth < 900 ? "1fr" : "1fr 340px",
            gap: 40,
            boxSizing: "border-box",
            width: "100%",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: "#0D2B5A",
                marginBottom: 8,
              }}
            >
              Partner Application
            </h2>
            <p
              style={{
                fontSize: 14,
                color: "#4A6080",
                marginBottom: 32,
              }}
            >
              Complete the form below. We review every application within one
              business day.
            </p>

            {error && (
              <p
                style={{
                  fontSize: 13,
                  color: "#DC2626",
                  marginBottom: 16,
                  fontWeight: 600,
                }}
              >
                {error}
              </p>
            )}

            {/* Partner type */}
            <div style={{ marginBottom: 28 }}>
              <p
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#0D2B5A",
                  marginBottom: 10,
                }}
              >
                Partnership Type *
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    window.innerWidth < 768 ? "1fr" : "1fr 1fr",
                  gap: 10,
                  boxSizing: "border-box",
                }}
              >
                {[
                  {
                    type: "Referral Partner",
                    icon: (
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ),
                    desc: "Introduce clients, earn referral fees — no delivery needed",
                    audience: "Consultants & advisors",
                  },
                  {
                    type: "Co-Delivery Partner",
                    icon: (
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ),
                    desc: "Collaborate on joint client engagements",
                    audience: "HR firms & consultancies",
                  },
                  {
                    type: "Reseller Partner",
                    icon: (
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ),
                    desc: "White-label our Academy course library",
                    audience: "Training companies & LMS operators",
                  },
                  {
                    type: "Technology Partner",
                    icon: (
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ),
                    desc: "Integrate our tools & content into your platform",
                    audience: "GRC & HR technology vendors",
                  },
                ].map(({ type: t, icon, desc, audience }) => {
                  const selected = partnerType === t;
                  return (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setPartnerType(t)}
                      style={{
                        padding: "14px 16px",
                        border: "2px solid",
                        borderColor: selected ? "#1A5EA8" : "#D1DCE8",
                        borderRadius: 8,
                        background: selected ? "#EEF4FF" : "#fff",
                        cursor: "pointer",
                        textAlign: "left",
                        fontFamily: "var(--font-sans)",
                        transition: "all 0.15s",
                        boxSizing: "border-box",
                        width: "100%",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          marginBottom: 6,
                          color: selected ? "#1A5EA8" : "#0D2B5A",
                        }}
                      >
                        {icon}
                        <span
                          style={{
                            fontSize: 13,
                            fontWeight: 700,
                          }}
                        >
                          {t}
                        </span>
                      </div>
                      <p
                        style={{
                          fontSize: 12,
                          color: "#4A6080",
                          lineHeight: 1.5,
                          margin: "0 0 4px",
                        }}
                      >
                        {desc}
                      </p>
                      <p
                        style={{
                          fontSize: 11,
                          color: "#1e3a8a",
                          margin: 0,
                        }}
                      >
                        Best for: {audience}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    window.innerWidth < 768 ? "1fr" : "1fr 1fr",
                  gap: 16,
                  marginBottom: 16,
                  boxSizing: "border-box",
                }}
              >
                {[
                  {
                    label: "First Name",
                    key: "firstName",
                    placeholder: "Rahul",
                  },
                  {
                    label: "Last Name",
                    key: "lastName",
                    placeholder: "Mehta",
                  },
                ].map((f) => (
                  <div key={f.key}>
                    <label
                      style={{
                        display: "block",
                        fontSize: 13,
                        fontWeight: 600,
                        color: "#0D2B5A",
                        marginBottom: 6,
                      }}
                    >
                      {f.label} *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder={f.placeholder}
                      value={form[f.key as keyof typeof form]}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          [f.key]: e.target.value,
                        })
                      }
                      style={{
                        width: "100%",
                        padding: "11px 14px",
                        border: "1.5px solid #D1DCE8",
                        borderRadius: 7,
                        fontSize: 14,
                        color: "#0D2B5A",
                        background: "#fff",
                        outline: "none",
                        boxSizing: "border-box",
                        fontFamily: "var(--font-sans)",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#1A5EA8")}
                      onBlur={(e) => (e.target.style.borderColor = "#D1DCE8")}
                    />
                  </div>
                ))}
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    window.innerWidth < 768 ? "1fr" : "1fr 1fr",
                  gap: 16,
                  marginBottom: 16,
                  boxSizing: "border-box",
                }}
              >
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: 13,
                      fontWeight: 600,
                      color: "#0D2B5A",
                      marginBottom: 6,
                    }}
                  >
                    Business Email *
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="rahul@yourfirm.in"
                    value={form.email}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        email: e.target.value,
                      })
                    }
                    style={{
                      width: "100%",
                      padding: "11px 14px",
                      border: "1.5px solid #D1DCE8",
                      borderRadius: 7,
                      fontSize: 14,
                      color: "#0D2B5A",
                      background: "#fff",
                      outline: "none",
                      boxSizing: "border-box",
                      fontFamily: "var(--font-sans)",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#1A5EA8")}
                    onBlur={(e) => (e.target.style.borderColor = "#D1DCE8")}
                  />
                </div>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: 13,
                      fontWeight: 600,
                      color: "#0D2B5A",
                      marginBottom: 6,
                    }}
                  >
                    Organization *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Your Firm Name"
                    value={form.company}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        company: e.target.value,
                      })
                    }
                    style={{
                      width: "100%",
                      padding: "11px 14px",
                      border: "1.5px solid #D1DCE8",
                      borderRadius: 7,
                      fontSize: 14,
                      color: "#0D2B5A",
                      background: "#fff",
                      outline: "none",
                      boxSizing: "border-box",
                      fontFamily: "var(--font-sans)",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#1A5EA8")}
                    onBlur={(e) => (e.target.style.borderColor = "#D1DCE8")}
                  />
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    window.innerWidth < 768 ? "1fr" : "1fr 1fr",
                  gap: 16,
                  marginBottom: 16,
                  boxSizing: "border-box",
                }}
              >
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: 13,
                      fontWeight: 600,
                      color: "#0D2B5A",
                      marginBottom: 6,
                    }}
                  >
                    Website
                  </label>
                  <input
                    type="url"
                    placeholder="https://yourfirm.in"
                    value={form.website}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        website: e.target.value,
                      })
                    }
                    style={{
                      width: "100%",
                      padding: "11px 14px",
                      border: "1.5px solid #D1DCE8",
                      borderRadius: 7,
                      fontSize: 14,
                      color: "#0D2B5A",
                      background: "#fff",
                      outline: "none",
                      boxSizing: "border-box",
                      fontFamily: "var(--font-sans)",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#1A5EA8")}
                    onBlur={(e) => (e.target.style.borderColor = "#D1DCE8")}
                  />
                </div>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: 13,
                      fontWeight: 600,
                      color: "#0D2B5A",
                      marginBottom: 6,
                    }}
                  >
                    Team Size
                  </label>
                  <select
                    value={form.teamSize}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        teamSize: e.target.value,
                      })
                    }
                    style={{
                      width: "100%",
                      padding: "11px 14px",
                      border: "1.5px solid #D1DCE8",
                      borderRadius: 7,
                      fontSize: 14,
                      color: form.teamSize ? "#0D2B5A" : "#1e3a8a",
                      background: "#fff",
                      outline: "none",
                      boxSizing: "border-box",
                      fontFamily: "var(--font-sans)",
                    }}
                  >
                    <option value="">Select...</option>
                    {["1–10", "11–50", "51–200", "201–500", "500+"].map((o) => (
                      <option key={o} value={o}>
                        {o} employees
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: 24 }}>
                <label
                  style={{
                    display: "block",
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#0D2B5A",
                    marginBottom: 6,
                  }}
                >
                  Tell us about your business *
                </label>
                <textarea
                  required
                  placeholder="Briefly describe your firm, the clients you typically serve, and why you're interested in partnering with Idatum..."
                  value={form.message}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      message: e.target.value,
                    })
                  }
                  rows={4}
                  style={{
                    width: "100%",
                    padding: "11px 14px",
                    border: "1.5px solid #D1DCE8",
                    borderRadius: 7,
                    fontSize: 14,
                    color: "#0D2B5A",
                    background: "#fff",
                    outline: "none",
                    resize: "vertical",
                    boxSizing: "border-box",
                    fontFamily: "var(--font-sans)",
                    lineHeight: 1.6,
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#1A5EA8")}
                  onBlur={(e) => (e.target.style.borderColor = "#D1DCE8")}
                />
              </div>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    flex: 1,
                    minWidth: "200px",
                    background: "#1A5EA8",
                    color: "#fff",
                    border: "none",
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                    padding: "14px 24px",
                    fontSize: 15,
                    fontWeight: 700,
                    borderRadius: 7,
                    opacity: isSubmitting ? 0.7 : 1,
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  {isSubmitting ? "Submitting..." : "Apply to Partner"}
                </button>
                <button
                  type="button"
                  onClick={() => navigate("contact")}
                  style={{
                    background: "#fff",
                    color: "#0D2B5A",
                    border: "1.5px solid #D1DCE8",
                    cursor: "pointer",
                    padding: "14px 20px",
                    fontSize: 14,
                    fontWeight: 600,
                    borderRadius: 7,
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  Contact Us First
                </button>
              </div>
            </form>
          </div>

          {/* Sidebar */}
          <div>
            <div
              style={{
                background: "#0D2B5A",
                borderRadius: 12,
                padding: 28,
                color: "#fff",
                marginBottom: 20,
              }}
            >
              <h3
                style={{
                  fontSize: 17,
                  fontWeight: 700,
                  marginBottom: 20,
                }}
              >
                Partner Program Highlights
              </h3>
              {[
                "No joining or annual fee",
                "Non-exclusive arrangement",
                "Clear, transparent terms — no hidden fees",
                "Dedicated Partner Success Manager",
                "Co-branded marketing materials",
                "Deal registration protection",
                "White-label option available",
                "48-hour onboarding",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 10,
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="6" fill="rgba(74,222,128,0.2)" />
                    <path
                      d="M4.5 7l2 2 3-3"
                      stroke="#4ADE80"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span style={{ fontSize: 13, color: "#C5D8EE" }}>{item}</span>
                </div>
              ))}
            </div>
            <div
              style={{
                background: "#F1F5FA",
                border: "1px solid #D1DCE8",
                borderRadius: 10,
                padding: 24,
              }}
            >
              <p
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#0D2B5A",
                  marginBottom: 8,
                }}
              >
                Questions before applying?
              </p>
              <p
                style={{
                  fontSize: 13,
                  color: "#4A6080",
                  lineHeight: 1.6,
                  marginBottom: 16,
                }}
              >
                Speak to our Partner Success team — no commitment required.
              </p>
              <button
                type="button"
                onClick={() => navigate("contact")}
                style={{
                  width: "100%",
                  background: "#fff",
                  color: "#1A5EA8",
                  border: "1.5px solid #1A5EA8",
                  cursor: "pointer",
                  padding: "11px 16px",
                  fontSize: 13,
                  fontWeight: 600,
                  borderRadius: 6,
                  fontFamily: "var(--font-sans)",
                }}
              >
                Talk to Partner Success
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
