import { useState } from "react";

type Page = string;
interface Props {
  navigate: (page: Page) => void;
}

const steps = [
  {
    num: "01",
    title: "Submit Your Application",
    desc: "Complete the partner application form below. We review every application personally — no automated rejections.",
  },
  {
    num: "02",
    title: "Discovery Call",
    desc: "A 30-minute call with our Partner Success team to understand your business, clients, and how the partnership would work in practice.",
  },
  {
    num: "03",
    title: "Partner Agreement",
    desc: "We issue a straightforward partnership agreement — no lock-in, no hidden terms. Review, sign, and you're in.",
  },
  {
    num: "04",
    title: "Onboarding & Enablement",
    desc: "48-hour onboarding: you'll receive your partner toolkit, deal registration access, and an introduction to your dedicated Partner Success Manager.",
  },
];

export function BecomePartner({ navigate }: Props) {
  const [partnerType, setPartnerType] = useState(
    "Referral Partner",
  );
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        style={{
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
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
            >
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
            Our Partner Success team will review your
            application and reach out within{" "}
            <strong>one business day</strong> to schedule a
            discovery call.
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
      style={{ fontFamily: "var(--font-sans)", paddingTop: 64 }}
    >
      {/* Header */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #0D2B5A 0%, #1A4A8A 100%)",
          padding: "72px 40px",
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
              color: "#9BB5D4",
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
            Apply today. Onboard in 48 hours. Start delivering
            value to your clients tomorrow. No joining fee. No
            long-term lock-in.
          </p>
        </div>
      </section>

      {/* Process steps */}
      <section
        style={{
          background: "#F1F5FA",
          padding: "48px 40px",
          borderBottom: "1px solid #D1DCE8",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 0,
            }}
          >
            {steps.map((step, i) => (
              <div
                key={step.num}
                style={{ display: "flex", gap: 0 }}
              >
                <div style={{ padding: "0 20px", flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      marginBottom: 10,
                    }}
                  >
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        background: "#0D2B5A",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <span
                        style={{
                          fontSize: 12,
                          fontWeight: 700,
                          color: "#fff",
                        }}
                      >
                        {step.num}
                      </span>
                    </div>
                    {i < steps.length - 1 && (
                      <div
                        style={{
                          flex: 1,
                          height: 1,
                          background: "#D1DCE8",
                        }}
                      />
                    )}
                  </div>
                  <h4
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: "#0D2B5A",
                      marginBottom: 6,
                    }}
                  >
                    {step.title}
                  </h4>
                  <p
                    style={{
                      fontSize: 12,
                      color: "#4A6080",
                      lineHeight: 1.65,
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section
        style={{
          padding: "72px 40px",
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 340px",
            gap: 60,
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
              Complete the form below. We review every
              application within one business day.
            </p>

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
                  gridTemplateColumns: "1fr 1fr",
                  gap: 10,
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
                    audience:
                      "Training companies & LMS operators",
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
                      onClick={() => setPartnerType(t)}
                      style={{
                        padding: "14px 16px",
                        border: "2px solid",
                        borderColor: selected
                          ? "#1A5EA8"
                          : "#D1DCE8",
                        borderRadius: 8,
                        background: selected
                          ? "#EEF4FF"
                          : "#fff",
                        cursor: "pointer",
                        textAlign: "left",
                        fontFamily: "var(--font-sans)",
                        transition: "all 0.15s",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          marginBottom: 6,
                          color: selected
                            ? "#1A5EA8"
                            : "#0D2B5A",
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
                          color: "#9BB5D4",
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
                  gridTemplateColumns: "1fr 1fr",
                  gap: 16,
                  marginBottom: 16,
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
                      onFocus={(e) =>
                        (e.target.style.borderColor = "#1A5EA8")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor = "#D1DCE8")
                      }
                    />
                  </div>
                ))}
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 16,
                  marginBottom: 16,
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
                    onFocus={(e) =>
                      (e.target.style.borderColor = "#1A5EA8")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "#D1DCE8")
                    }
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
                    onFocus={(e) =>
                      (e.target.style.borderColor = "#1A5EA8")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "#D1DCE8")
                    }
                  />
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 16,
                  marginBottom: 16,
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
                    onFocus={(e) =>
                      (e.target.style.borderColor = "#1A5EA8")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "#D1DCE8")
                    }
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
                      color: form.teamSize
                        ? "#0D2B5A"
                        : "#9BB5D4",
                      background: "#fff",
                      outline: "none",
                      boxSizing: "border-box",
                      fontFamily: "var(--font-sans)",
                    }}
                  >
                    <option value="">Select...</option>
                    {[
                      "1–10",
                      "11–50",
                      "51–200",
                      "201–500",
                      "500+",
                    ].map((o) => (
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
                  onFocus={(e) =>
                    (e.target.style.borderColor = "#1A5EA8")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "#D1DCE8")
                  }
                />
              </div>

              <div style={{ display: "flex", gap: 12 }}>
                <button
                  type="submit"
                  style={{
                    flex: 1,
                    background: "#1A5EA8",
                    color: "#fff",
                    border: "none",
                    cursor: "pointer",
                    padding: "14px 24px",
                    fontSize: 15,
                    fontWeight: 700,
                    borderRadius: 7,
                    fontFamily: "var(--font-sans)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background =
                      "#0D4A8A")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background =
                      "#1A5EA8")
                  }
                >
                  Apply to Partner
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
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <circle
                      cx="7"
                      cy="7"
                      r="6"
                      fill="rgba(74,222,128,0.2)"
                    />
                    <path
                      d="M4.5 7l2 2 3-3"
                      stroke="#4ADE80"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span
                    style={{ fontSize: 13, color: "#C5D8EE" }}
                  >
                    {item}
                  </span>
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
                Speak to our Partner Success team — no
                commitment required.
              </p>
              <button
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