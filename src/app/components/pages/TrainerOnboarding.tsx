type Page = string;
interface Props { navigate: (page: Page) => void; }

const steps = [
  {
    num: "01",
    title: "Application & Profile Review",
    duration: "1–2 business days",
    desc: "Submit your trainer application with credentials, certifications, and a sample of your delivery work. Our Curriculum team reviews your profile against Idatum's practitioner standards.",
    details: ["Credentials & certification verification", "Subject-matter expertise assessment", "Sample content or delivery review"],
  },
  {
    num: "02",
    title: "Orientation Session",
    duration: "Half-day (virtual)",
    desc: "A structured orientation covering Idatum Academy's pedagogical standards, delivery protocols, learner engagement expectations, and quality benchmarks.",
    details: ["Academy learning philosophy", "Delivery standards & expectations", "LMS and tooling walkthrough"],
  },
  {
    num: "03",
    title: "Content Familiarisation",
    duration: "2–3 days self-paced",
    desc: "Access to the full course library in your domain(s). Trainers review participant workbooks, facilitator guides, slide decks, and case study packs before delivery.",
    details: ["Facilitator guide review", "Case study and scenario bank access", "Assessment instrument walkthrough"],
  },
  {
    num: "04",
    title: "Observed Trial Delivery",
    duration: "1 session",
    desc: "Deliver a live 90-minute module segment with an Idatum Curriculum Lead observing. Structured feedback is provided using our trainer evaluation rubric.",
    details: ["Live delivery with curriculum observer", "Real-time notes and structured debrief", "Evaluation against Idatum rubric"],
  },
  {
    num: "05",
    title: "Certification & Activation",
    duration: "Within 48 hours of trial",
    desc: "Upon successful trial delivery, you receive your Idatum Certified Trainer designation, access to the trainer portal, and your first delivery assignment.",
    details: ["Idatum Certified Trainer credential", "Trainer portal access", "First assignment scheduling"],
  },
];

const tracks = [
  { label: "POSH", color: "#1A5EA8", bg: "#EEF4FF", req: "IC Member experience or legal background in employment law" },
  { label: "ISMS", color: "#0D6B4E", bg: "#ECFDF5", req: "ISO 27001 Lead Implementer or CISM certification" },
  { label: "SOC 2", color: "#6B3DAB", bg: "#F5F0FF", req: "Active SOC 2 audit or implementation experience" },
  { label: "ISO", color: "#8B4513", bg: "#FFF7ED", req: "ISO Lead Auditor certification in relevant standard" },
  { label: "ITGC", color: "#B8370A", bg: "#FFF1EE", req: "CISA or equivalent IT audit qualification" },
  { label: "Audit", color: "#2B6A7C", bg: "#EFF8FC", req: "IIA membership and minimum 5 years audit experience" },
];

export function TrainerOnboarding({ navigate }: Props) {
  return (
    <div style={{ fontFamily: "var(--font-sans)", paddingTop: 64 }}>
      {/* Header */}
      <section style={{ background: "linear-gradient(135deg, #0D2B5A 0%, #1A4A8A 100%)", padding: "72px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 20, padding: "5px 14px", marginBottom: 24 }}>
              <div style={{ width: 6, height: 6, background: "#4ADE80", borderRadius: "50%" }} />
              <span style={{ fontSize: 12, color: "#C5D8EE", fontWeight: 500 }}>Partner with Us</span>
            </div>
            <h1 style={{ fontSize: 44, fontWeight: 700, color: "#fff", lineHeight: 1.2, letterSpacing: "-0.8px", marginBottom: 20 }}>
              Trainer Onboarding
            </h1>
            <p style={{ fontSize: 17, color: "#C5D8EE", lineHeight: 1.8, marginBottom: 36 }}>
              Idatum Academy delivers training through a network of domain-certified practitioners. If you hold active credentials in any of our six training tracks, we'd like to hear from you.
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              <button
                onClick={() => navigate("contact")}
                style={{ background: "#fff", color: "#0D2B5A", border: "none", cursor: "pointer", padding: "14px 28px", fontSize: 15, fontWeight: 700, borderRadius: 6 }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#F1F5FA")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#fff")}
              >
                Apply as a Trainer
              </button>
              <button
                onClick={() => navigate("become-partner")}
                style={{ background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,0.4)", cursor: "pointer", padding: "14px 28px", fontSize: 15, fontWeight: 600, borderRadius: 6 }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#fff"; e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)"; e.currentTarget.style.background = "transparent"; }}
              >
                Partner Application
              </button>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=640&h=420&fit=crop&auto=format"
              alt="Professional trainer delivering a compliance workshop"
              style={{ display: "block", width: "100%", height: 380, objectFit: "cover", borderRadius: 12, boxShadow: "0 24px 56px rgba(0,0,0,0.3)" }}
            />
          </div>
        </div>
      </section>

      {/* What we look for */}
      <section style={{ background: "#F1F5FA", borderBottom: "1px solid #D1DCE8", padding: "48px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0D2B5A", marginBottom: 24 }}>What We Look for in a Trainer</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
            {[
              { title: "Active Practitioner", desc: "You are currently working in the domain you train — not just teaching it. We don't engage career trainers without domain experience." },
              { title: "Certified & Current", desc: "You hold a recognized certification in your domain and keep it current. Expired credentials are not accepted." },
              { title: "Facilitation Skill", desc: "You can engage an adult professional audience — not just lecture. Case-based discussion and scenario facilitation are core to our delivery model." },
              { title: "India-Context Awareness", desc: "You understand how compliance frameworks apply in the Indian regulatory environment and can speak to local nuance." },
            ].map((c) => (
              <div key={c.title} style={{ background: "#fff", border: "1px solid #D1DCE8", borderRadius: 10, padding: 24 }}>
                <div style={{ width: 8, height: 8, background: "#1A5EA8", borderRadius: "50%", marginBottom: 14 }} />
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "#0D2B5A", marginBottom: 8 }}>{c.title}</h3>
                <p style={{ fontSize: 13, color: "#4A6080", lineHeight: 1.7 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Onboarding steps */}
      <section style={{ padding: "72px 40px", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <h2 style={{ fontSize: 32, fontWeight: 700, color: "#0D2B5A", letterSpacing: "-0.5px", marginBottom: 12 }}>
            The Onboarding Journey
          </h2>
          <p style={{ fontSize: 15, color: "#4A6080", maxWidth: 520, margin: "0 auto" }}>
            From application to your first delivery assignment in as little as two weeks.
          </p>
        </div>

        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", left: 27, top: 0, bottom: 0, width: 2, background: "linear-gradient(to bottom, #1A5EA8, #D1DCE8)" }} />
          {steps.map((step, i) => (
            <div key={step.num} style={{ display: "flex", gap: 32, marginBottom: i < steps.length - 1 ? 40 : 0 }}>
              <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#0D2B5A", border: "3px solid #fff", boxShadow: "0 0 0 2px #1A5EA8", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, zIndex: 1, position: "relative" }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>{step.num}</span>
              </div>
              <div style={{ flex: 1, background: "#fff", border: "1px solid #D1DCE8", borderRadius: 10, padding: 26, marginTop: 4 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: "#0D2B5A" }}>{step.title}</h3>
                  <span style={{ background: "#EEF4FF", color: "#1A5EA8", fontSize: 11, fontWeight: 600, padding: "4px 12px", borderRadius: 20, whiteSpace: "nowrap", marginLeft: 16 }}>{step.duration}</span>
                </div>
                <p style={{ fontSize: 13, color: "#4A6080", lineHeight: 1.7, marginBottom: 14 }}>{step.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {step.details.map((d) => (
                    <span key={d} style={{ background: "#F1F5FA", border: "1px solid #D1DCE8", color: "#0D2B5A", fontSize: 11, fontWeight: 500, padding: "3px 10px", borderRadius: 4 }}>{d}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Track requirements */}
      <section style={{ background: "#F1F5FA", padding: "64px 40px", borderTop: "1px solid #D1DCE8" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, color: "#0D2B5A", marginBottom: 8 }}>Track-Specific Requirements</h2>
          <p style={{ fontSize: 14, color: "#4A6080", marginBottom: 32 }}>Minimum credential requirements vary by training track. All tracks require active practitioner status.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {tracks.map((t) => (
              <div key={t.label} style={{ background: "#fff", border: "1px solid #D1DCE8", borderRadius: 10, overflow: "hidden" }}>
                <div style={{ background: t.color, padding: "14px 20px" }}>
                  <span style={{ fontSize: 16, fontWeight: 800, color: "#fff" }}>{t.label}</span>
                </div>
                <div style={{ padding: "16px 20px" }}>
                  <p style={{ fontSize: 13, color: "#4A6080", lineHeight: 1.6 }}>{t.req}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#0D2B5A", padding: "56px 40px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, color: "#fff", marginBottom: 12 }}>Ready to Deliver for Idatum Academy?</h2>
          <p style={{ fontSize: 15, color: "#C5D8EE", lineHeight: 1.7, marginBottom: 28 }}>Send us your credentials and a brief note about your experience. We'll review and respond within two business days.</p>
          <button
            onClick={() => navigate("contact")}
            style={{ background: "#fff", color: "#0D2B5A", border: "none", cursor: "pointer", padding: "14px 32px", fontSize: 15, fontWeight: 700, borderRadius: 6 }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#F1F5FA")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#fff")}
          >
            Apply as a Trainer
          </button>
        </div>
      </section>
    </div>
  );
}
