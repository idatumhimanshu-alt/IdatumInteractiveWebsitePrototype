import { ResponsiveGrid } from "../ResponsiveGrid";
import { useState } from "react";

type Page = string;
interface Props {
  navigate: (page: Page) => void;
}

export function Contact({ navigate: _navigate }: Props) {
  const [inquiry, setInquiry] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    role: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiry) {
      setError("Please select what you are enquiring about.");
      return;
    }
    setError("");
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("access_key", "31de9044-687f-4a9e-aded-572344017b1a");
      formData.append(
        "subject",
        `New Enquiry: ${inquiry} from ${form.firstName} ${form.lastName}`,
      );
      formData.append("Inquiry Type", inquiry);
      formData.append("First Name", form.firstName);
      formData.append("Last Name", form.lastName);
      formData.append("Email", form.email);
      formData.append("Company", form.company);
      formData.append("Role", form.role);
      formData.append("Message", form.message);

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
          paddingBottom: 120,
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            textAlign: "center",
            maxWidth: 520,
            padding: "40px",
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
              marginBottom: 12,
            }}
          >
            Message Received
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "#4A6080",
              lineHeight: 1.7,
              marginBottom: 32,
            }}
          >
            Thank you for reaching out. One of our specialists will review your
            enquiry regarding <strong>{inquiry}</strong> and respond shortly.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setInquiry("");
              setForm({
                firstName: "",
                lastName: "",
                email: "",
                company: "",
                role: "",
                phone: "",
                message: "",
              });
            }}
            style={{
              background: "#1A5EA8",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              padding: "12px 24px",
              fontSize: 14,
              fontWeight: 600,
              borderRadius: 6,
            }}
          >
            Send Another Message
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
        paddingBottom: 120,
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
            boxSizing: "border-box",
            width: "100%",
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
            Get in Touch
          </p>
          <h1
            style={{
              fontSize: 44,
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.2,
              letterSpacing: "-0.8px",
              marginBottom: 16,
              wordBreak: "break-word",
            }}
          >
            Let's Start the Right Conversation.
          </h1>
          <p style={{ fontSize: 17, color: "#C5D8EE", lineHeight: 1.8 }}>
            Whether you're exploring compliance services, software solutions,
            training programs, or interested in partnering with us — we're here
            to help you find the right path forward.
          </p>
        </div>
      </section>

      {/* Form + sidebar */}
      <section
        style={{
          padding: "72px 16px",
          maxWidth: 1100,
          margin: "0 auto",
          boxSizing: "border-box",
          width: "100%",
        }}
      >
        <ResponsiveGrid
          minColWidth={window.innerWidth < 768 ? 280 : 400}
          gap={40}
        >
          {/* Form */}
          <div style={{ boxSizing: "border-box", width: "100%" }}>
            {/* Inquiry type selector */}
            <div style={{ marginBottom: 36 }}>
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#0D2B5A",
                  marginBottom: 12,
                }}
              >
                What are you enquiring about? *
              </p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {[
                  "Idatum Services",
                  "Syscomply",
                  "Idatum Training Hub",
                  "Partner with Us",
                ].map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => {
                      setInquiry(opt);
                      if (error) setError("");
                    }}
                    style={{
                      flex: 1,
                      minWidth: "120px",
                      padding: "13px 16px",
                      border: "2px solid",
                      borderColor: inquiry === opt ? "#1A5EA8" : "#D1DCE8",
                      borderRadius: 8,
                      background: inquiry === opt ? "#EEF4FF" : "#fff",
                      color: inquiry === opt ? "#1A5EA8" : "#4A6080",
                      fontSize: 13,
                      fontWeight: 700,
                      cursor: "pointer",
                      transition: "all 0.15s",
                      fontFamily: "var(--font-sans)",
                      boxSizing: "border-box",
                    }}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              {error && (
                <p
                  style={{
                    fontSize: 12,
                    color: "#DC2626",
                    marginTop: 8,
                    fontWeight: 600,
                  }}
                >
                  {error}
                </p>
              )}
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
                    placeholder: "Jane",
                  },
                  { label: "Last Name", key: "lastName", placeholder: "Smith" },
                ].map((field) => (
                  <div
                    key={field.key}
                    style={{ boxSizing: "border-box", width: "100%" }}
                  >
                    <label
                      style={{
                        display: "block",
                        fontSize: 13,
                        fontWeight: 600,
                        color: "#0D2B5A",
                        marginBottom: 6,
                      }}
                    >
                      {field.label} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={field.placeholder}
                      value={form[field.key as keyof typeof form]}
                      onChange={(e) =>
                        setForm({ ...form, [field.key]: e.target.value })
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
                        transition: "border-color 0.15s",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#1A5EA8")}
                      onBlur={(e) => (e.target.style.borderColor = "#D1DCE8")}
                    />
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginBottom: 16,
                  boxSizing: "border-box",
                  width: "100%",
                }}
              >
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
                  type="email"
                  required
                  placeholder="jane.smith@company.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
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
                    label: "Organization",
                    key: "company",
                    placeholder: "Acme Corp",
                  },
                  {
                    label: "Your Role",
                    key: "role",
                    placeholder: "VP of Compliance",
                  },
                ].map((field) => (
                  <div
                    key={field.key}
                    style={{ boxSizing: "border-box", width: "100%" }}
                  >
                    <label
                      style={{
                        display: "block",
                        fontSize: 13,
                        fontWeight: 600,
                        color: "#0D2B5A",
                        marginBottom: 6,
                      }}
                    >
                      {field.label} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={field.placeholder}
                      value={form[field.key as keyof typeof form]}
                      onChange={(e) =>
                        setForm({ ...form, [field.key]: e.target.value })
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
                  marginBottom: 24,
                  boxSizing: "border-box",
                  width: "100%",
                }}
              >
                <label
                  style={{
                    display: "block",
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#0D2B5A",
                    marginBottom: 6,
                  }}
                >
                  How can we help? *
                </label>
                <textarea
                  required
                  placeholder={
                    inquiry === "Idatum Services"
                      ? "Tell us about your compliance needs — which frameworks are in scope, your timeline, and any current challenges..."
                      : inquiry === "Syscomply"
                        ? "Tell us about your compliance software requirements, team size, and goals..."
                        : inquiry === "Idatum Training Hub"
                          ? "Tell us about your training requirements — which topics, team size, preferred format, and timeline..."
                          : inquiry === "Partner with Us"
                            ? "Tell us about your organization and what a partnership with Idatum might look like..."
                            : "Tell us how we can help your organization..."
                  }
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  rows={5}
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

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: "100%",
                  background: "#1A5EA8",
                  color: "#fff",
                  border: "none",
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                  padding: "15px 24px",
                  fontSize: 15,
                  fontWeight: 700,
                  borderRadius: 7,
                  opacity: isSubmitting ? 0.7 : 1,
                  transition: "background 0.15s",
                  fontFamily: "var(--font-sans)",
                  boxSizing: "border-box",
                }}
                onMouseEnter={(e) =>
                  !isSubmitting &&
                  (e.currentTarget.style.background = "#0D4A8A")
                }
                onMouseLeave={(e) =>
                  !isSubmitting &&
                  (e.currentTarget.style.background = "#1A5EA8")
                }
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              <p
                style={{
                  fontSize: 12,
                  color: "#4A6080",
                  textAlign: "center",
                  marginTop: 12,
                }}
              >
                Your information is kept strictly confidential.
              </p>
            </form>
          </div>

          {/* Sidebar */}
          <div style={{ boxSizing: "border-box", width: "100%" }}>
            <div
              style={{
                background: "#0D2B5A",
                borderRadius: 12,
                padding: 28,
                marginBottom: 20,
                color: "#fff",
                boxSizing: "border-box",
                width: "100%",
              }}
            >
              <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 20 }}>
                What happens next?
              </h3>
              {[
                {
                  step: "1",
                  title: "We review your enquiry",
                  desc: "Our team reads every message personally and routes it to the right specialist.",
                },
                {
                  step: "2",
                  title: "Discovery call",
                  desc: "We schedule a 30-minute call to understand your needs, answer questions, and share how we can help.",
                },
                {
                  step: "3",
                  title: "Tailored proposal",
                  desc: "If there's a fit, we prepare a scope and approach specific to your situation — no boilerplate.",
                },
              ].map((s) => (
                <div
                  key={s.step}
                  style={{ display: "flex", gap: 14, marginBottom: 20 }}
                >
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      background: "#1A5EA8",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <span
                      style={{ fontSize: 12, fontWeight: 700, color: "#fff" }}
                    >
                      {s.step}
                    </span>
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                        color: "#fff",
                        marginBottom: 4,
                      }}
                    >
                      {s.title}
                    </p>
                    <p
                      style={{
                        fontSize: 12,
                        color: "#C5D8EE",
                        lineHeight: 1.6,
                      }}
                    >
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                background: "#F1F5FA",
                border: "1px solid #D1DCE8",
                borderRadius: 12,
                padding: 24,
                boxSizing: "border-box",
                width: "100%",
              }}
            >
              <h3
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#0D2B5A",
                  marginBottom: 16,
                }}
              >
                Our Office
              </h3>
              <div style={{ marginBottom: 16 }}>
                <p
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: "#0D2B5A",
                    marginBottom: 3,
                  }}
                >
                  Pune
                </p>
                <p style={{ fontSize: 12, color: "#4A6080", lineHeight: 1.5 }}>
                  Flat no 2, Shriniketan Apartments, Sheela Vihar Colony, Karve
                  Road, Pune 411038
                </p>
              </div>
              <div
                style={{
                  borderTop: "1px solid #D1DCE8",
                  paddingTop: 16,
                  marginTop: 4,
                }}
              >
                <p style={{ fontSize: 13, color: "#1A5EA8", fontWeight: 600 }}>
                  idatumconsultants@gmail.com
                </p>
              </div>
            </div>
          </div>
        </ResponsiveGrid>
      </section>
    </div>
  );
}
