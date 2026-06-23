import { useState } from "react";

type Page = string;
interface Props { navigate: (page: Page) => void; }

export function Contact({ navigate: _navigate }: Props) {
  const [inquiry, setInquiry] = useState("Idatum QA");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", company: "",
    role: "", phone: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ fontFamily: "var(--font-sans)", paddingTop: 64, minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center", maxWidth: 520, padding: "40px" }}>
          <div style={{ width: 72, height: 72, background: "#DCFCE7", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M5 13l4 4L19 7" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 style={{ fontSize: 28, fontWeight: 700, color: "#0D2B5A", marginBottom: 12 }}>Message Received</h2>
          <p style={{ fontSize: 16, color: "#4A6080", lineHeight: 1.7, marginBottom: 32 }}>
            Thank you for reaching out. One of our specialists will review your enquiry and respond within one business day.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            style={{
              background: "#1A5EA8", color: "#fff", border: "none",
              cursor: "pointer", padding: "12px 24px",
              fontSize: 14, fontWeight: 600, borderRadius: 6,
            }}
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "var(--font-sans)", paddingTop: 64 }}>
      {/* Header */}
      <section style={{ background: "linear-gradient(135deg, #0D2B5A 0%, #1A4A8A 100%)", padding: "72px 40px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: "#9BB5D4", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: 12 }}>
            Get in Touch
          </p>
          <h1 style={{ fontSize: 44, fontWeight: 700, color: "#fff", lineHeight: 1.2, letterSpacing: "-0.8px", marginBottom: 16 }}>
            Let's Start the Right Conversation.
          </h1>
          <p style={{ fontSize: 17, color: "#C5D8EE", lineHeight: 1.8 }}>
            Whether you're exploring compliance services, looking for training programs, or interested in partnering with us — we're here to help you find the right path forward.
          </p>
        </div>
      </section>

      {/* Form + sidebar */}
      <section style={{ padding: "72px 40px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 60 }}>
          {/* Form */}
          <div>
            {/* Inquiry type selector */}
            <div style={{ marginBottom: 36 }}>
              <p style={{ fontSize: 14, fontWeight: 600, color: "#0D2B5A", marginBottom: 12 }}>
                What are you enquiring about? *
              </p>
              <div style={{ display: "flex", gap: 10 }}>
                {["Idatum QA", "Idatum Academy", "Partner with Us"].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setInquiry(opt)}
                    style={{
                      flex: 1,
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
                    }}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                {[
                  { label: "First Name", key: "firstName", placeholder: "Jane" },
                  { label: "Last Name", key: "lastName", placeholder: "Smith" },
                ].map((field) => (
                  <div key={field.key}>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#0D2B5A", marginBottom: 6 }}>
                      {field.label} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={field.placeholder}
                      value={form[field.key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
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

              <div style={{ marginBottom: 16 }}>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#0D2B5A", marginBottom: 6 }}>
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

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                {[
                  { label: "Organization", key: "company", placeholder: "Acme Corp" },
                  { label: "Your Role", key: "role", placeholder: "VP of Compliance" },
                ].map((field) => (
                  <div key={field.key}>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#0D2B5A", marginBottom: 6 }}>
                      {field.label} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={field.placeholder}
                      value={form[field.key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
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

              <div style={{ marginBottom: 24 }}>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#0D2B5A", marginBottom: 6 }}>
                  How can we help? *
                </label>
                <textarea
                  required
                  placeholder={
                    inquiry === "Idatum QA"
                      ? "Tell us about your compliance needs — which frameworks are in scope, your timeline, and any current challenges..."
                      : inquiry === "Idatum Academy"
                      ? "Tell us about your training requirements — which topics, team size, preferred format, and timeline..."
                      : "Tell us about your organization and what a partnership with Idatum might look like..."
                  }
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
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
                style={{
                  width: "100%",
                  background: "#1A5EA8",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                  padding: "15px 24px",
                  fontSize: 15,
                  fontWeight: 700,
                  borderRadius: 7,
                  transition: "background 0.15s",
                  fontFamily: "var(--font-sans)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#0D4A8A")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#1A5EA8")}
              >
                Send Message
              </button>

              <p style={{ fontSize: 12, color: "#9BB5D4", textAlign: "center", marginTop: 12 }}>
                We respond within one business day. Your information is kept strictly confidential.
              </p>
            </form>
          </div>

          {/* Sidebar */}
          <div>
            <div style={{ background: "#0D2B5A", borderRadius: 12, padding: 28, marginBottom: 20, color: "#fff" }}>
              <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 20 }}>What happens next?</h3>
              {[
                { step: "1", title: "We review your enquiry", desc: "Our team reads every message personally and routes it to the right specialist within hours." },
                { step: "2", title: "Discovery call", desc: "We schedule a 30-minute call to understand your needs, answer questions, and share how we can help." },
                { step: "3", title: "Tailored proposal", desc: "If there's a fit, we prepare a scope and approach specific to your situation — no boilerplate." },
              ].map((s) => (
                <div key={s.step} style={{ display: "flex", gap: 14, marginBottom: 20 }}>
                  <div style={{ width: 28, height: 28, background: "#1A5EA8", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontSize: 12, fontWeight: 700, color: "#fff" }}>{s.step}</span>
                  </div>
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 700, color: "#fff", marginBottom: 4 }}>{s.title}</p>
                    <p style={{ fontSize: 12, color: "#9BB5D4", lineHeight: 1.6 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background: "#F1F5FA", border: "1px solid #D1DCE8", borderRadius: 12, padding: 24 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "#0D2B5A", marginBottom: 16 }}>Our Offices</h3>
              {[
                { city: "Mumbai", address: "Level 14, One BKC, Bandra Kurla Complex, Mumbai 400 051" },
                { city: "Bangalore", address: "Embassy Golf Links, Block N, Bangalore 560 071" },
                { city: "Delhi NCR", address: "Unitech Cyber Park, Sector 39, Gurugram 122 001" },
              ].map((office) => (
                <div key={office.city} style={{ marginBottom: 16 }}>
                  <p style={{ fontSize: 13, fontWeight: 700, color: "#0D2B5A", marginBottom: 3 }}>{office.city}</p>
                  <p style={{ fontSize: 12, color: "#4A6080", lineHeight: 1.5 }}>{office.address}</p>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #D1DCE8", paddingTop: 16, marginTop: 4 }}>
                <p style={{ fontSize: 13, color: "#1A5EA8", fontWeight: 600 }}>enquiries@idatum.in</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
