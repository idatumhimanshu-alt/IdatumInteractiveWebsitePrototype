type Page = string;
interface Props { navigate: (page: Page) => void; }

const steps = [
  {
    num: "01",
    title: "Credential Submission & Review",
    duration: "2–3 business days",
    desc: "Submit your professional credentials, certification documents, and a summary of your audit experience. Our QA Practice team reviews every application against Idatum's auditor standards.",
    details: ["CISA / CISSP / ISO LA credential verification", "Engagement history review", "Domain specialisation assessment"],
  },
  {
    num: "02",
    title: "Standards & Methodology Briefing",
    duration: "Half-day (virtual)",
    desc: "An in-depth briefing on Idatum's audit methodology, documentation standards, client communication protocols, and quality control processes. This is not generic — it's specific to how Idatum operates.",
    details: ["Idatum audit methodology overview", "Working paper and evidence standards", "Client interaction protocols"],
  },
  {
    num: "03",
    title: "Tool & Template Familiarisation",
    duration: "1 day self-paced",
    desc: "Access to Idatum's full audit toolkit — control testing templates, evidence request trackers, gap registers, and reporting frameworks. All structured for consistency across engagements.",
    details: ["Control testing workbooks", "Evidence request templates", "Gap register and reporting formats"],
  },
  {
    num: "04",
    title: "Supervised Engagement",
    duration: "First live engagement",
    desc: "Your first Idatum audit engagement is conducted under the supervision of a senior Idatum QA Principal. You lead the work; they provide structured coaching and sign off on deliverables.",
    details: ["Live client engagement", "QA Principal co-review", "Structured debrief and feedback"],
  },
  {
    num: "05",
    title: "Idatum Auditor Panel Admission",
    duration: "Within 5 days of supervised engagement",
    desc: "Following a successful supervised engagement, you are formally admitted to the Idatum Auditor Panel — gaining access to independent assignment opportunities and the partner fee structure.",
    details: ["Idatum Auditor Panel credential", "Independent assignment access", "Partner fee structure activation"],
  },
];

const specialisations = [
  { label: "ISMS / ISO 27001", req: "ISO 27001 Lead Auditor + minimum 3 ISMS engagements", color: "#0D6B4E", bg: "#ECFDF5" },
  { label: "SOC 2", req: "AICPA SOC examination experience as auditor or readiness lead", color: "#6B3DAB", bg: "#F5F0FF" },
  { label: "ISO 9001 / 22301", req: "ISO Lead Auditor in relevant standard + active certification body affiliation", color: "#8B4513", bg: "#FFF7ED" },
  { label: "ITGC / SOX", req: "CISA or CIA + minimum 4 years ITGC or SOX testing experience", color: "#B8370A", bg: "#FFF1EE" },
  { label: "Internal Audit", req: "CIA designation + IIA membership + minimum 5 years IA experience", color: "#2B6A7C", bg: "#EFF8FC" },
  { label: "Information Security", req: "CISSP or CISM + hands-on security assessment experience", color: "#1A5EA8", bg: "#EEF4FF" },
];

export function AuditorOnboarding({ navigate }: Props) {
  return (
    <div style={{ fontFamily: "var(--font-sans)", paddingTop: 64 }}>
      {/* Header */}
      <section style={{ background: "linear-gradient(135deg, #0D2B5A 0%, #0D4870 100%)", padding: "72px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 20, padding: "5px 14px", marginBottom: 24 }}>
              <div style={{ width: 6, height: 6, background: "#4ADE80", borderRadius: "50%" }} />
              <span style={{ fontSize: 12, color: "#C5D8EE", fontWeight: 500 }}>Partner with Us</span>
            </div>
            <h1 style={{ fontSize: 44, fontWeight: 700, color: "#fff", lineHeight: 1.2, letterSpacing: "-0.8px", marginBottom: 20 }}>
              Auditor Onboarding
            </h1>
            <p style={{ fontSize: 17, color: "#C5D8EE", lineHeight: 1.8, marginBottom: 36 }}>
              Idatum QA delivers its client engagements through a panel of credentialed, practitioner-grade auditors. If you are a certified professional with active audit experience, we want to explore working together.
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              <button
                onClick={() => navigate("contact")}
                style={{ background: "#fff", color: "#0D2B5A", border: "none", cursor: "pointer", padding: "14px 28px", fontSize: 15, fontWeight: 700, borderRadius: 6 }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#F1F5FA")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#fff")}
              >
                Apply to Join the Panel
              </button>
              <button
                onClick={() => navigate("become-partner")}
                style={{ background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,0.4)", cursor: "pointer", padding: "14px 28px", fontSize: 15, fontWeight: 600, borderRadius: 6 }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#fff"; e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)"; e.currentTarget.style.background = "transparent"; }}
              >
                Full Partner Application
              </button>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=640&h=420&fit=crop&auto=format"
              alt="Auditor reviewing compliance documentation"
              style={{ display: "block", width: "100%", height: 380, objectFit: "cover", borderRadius: 12, boxShadow: "0 24px 56px rgba(0,0,0,0.3)" }}
            />
          </div>
        </div>
      </section>

      {/* Key requirements strip */}
      <section style={{ background: "#F1F5FA", borderBottom: "1px solid #D1DCE8", padding: "36px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
          {[
            { label: "Experience Required", value: "5+ years" },
            { label: "Certification", value: "Mandatory" },
            { label: "Engagement Type", value: "Contract / Panel" },
            { label: "First Engagement", value: "Supervised" },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <p style={{ fontSize: 26, fontWeight: 800, color: "#0D2B5A", lineHeight: 1, marginBottom: 6 }}>{s.value}</p>
              <p style={{ fontSize: 12, color: "#4A6080" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Standards we expect */}
      <section style={{ padding: "72px 40px", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
          <div>
            <h2 style={{ fontSize: 30, fontWeight: 700, color: "#0D2B5A", letterSpacing: "-0.4px", marginBottom: 20 }}>
              The Idatum Auditor Standard
            </h2>
            <p style={{ fontSize: 15, color: "#4A6080", lineHeight: 1.8, marginBottom: 24 }}>
              We are deliberate about who joins our auditor panel. Every engagement carries the Idatum name, and our clients rely on consistency. That means our auditors don't just meet minimum qualification thresholds — they reflect how Idatum thinks about quality.
            </p>
            <p style={{ fontSize: 15, color: "#4A6080", lineHeight: 1.8, marginBottom: 32 }}>
              Our auditors are expected to communicate findings clearly to non-technical stakeholders, exercise independent judgment, and maintain absolute client confidentiality. Technical knowledge is necessary but not sufficient.
            </p>
            {[
              { title: "Integrity First", desc: "No conflicts of interest, no commercial pressure on findings. Our auditors call it as they see it." },
              { title: "Communication Clarity", desc: "Audit findings must be written and presented in language that enables action — not just satisfies an evidence checklist." },
              { title: "Methodology Adherence", desc: "Idatum has defined working paper and evidence standards. Panel auditors follow them consistently." },
            ].map((item) => (
              <div key={item.title} style={{ display: "flex", gap: 14, marginBottom: 20 }}>
                <div style={{ width: 6, height: 6, background: "#1A5EA8", borderRadius: "50%", marginTop: 8, flexShrink: 0 }} />
                <div>
                  <p style={{ fontSize: 14, fontWeight: 700, color: "#0D2B5A", marginBottom: 4 }}>{item.title}</p>
                  <p style={{ fontSize: 13, color: "#4A6080", lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Onboarding timeline */}
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0D2B5A", marginBottom: 28 }}>Onboarding Process</h2>
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", left: 21, top: 0, bottom: 0, width: 2, background: "linear-gradient(to bottom, #1A5EA8, #D1DCE8)" }} />
              {steps.map((step, i) => (
                <div key={step.num} style={{ display: "flex", gap: 20, marginBottom: i < steps.length - 1 ? 28 : 0 }}>
                  <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#0D2B5A", border: "2px solid #fff", boxShadow: "0 0 0 2px #1A5EA8", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, zIndex: 1, position: "relative" }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: "#fff" }}>{step.num}</span>
                  </div>
                  <div style={{ flex: 1, background: "#fff", border: "1px solid #D1DCE8", borderRadius: 8, padding: 18, marginTop: 2 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                      <p style={{ fontSize: 14, fontWeight: 700, color: "#0D2B5A" }}>{step.title}</p>
                      <span style={{ background: "#EEF4FF", color: "#1A5EA8", fontSize: 10, fontWeight: 600, padding: "3px 10px", borderRadius: 20, whiteSpace: "nowrap", marginLeft: 12, flexShrink: 0 }}>{step.duration}</span>
                    </div>
                    <p style={{ fontSize: 12, color: "#4A6080", lineHeight: 1.65 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specialisation requirements */}
      <section style={{ background: "#F1F5FA", padding: "64px 40px", borderTop: "1px solid #D1DCE8" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, color: "#0D2B5A", marginBottom: 8 }}>Specialisation Requirements</h2>
          <p style={{ fontSize: 14, color: "#4A6080", marginBottom: 32 }}>
            Minimum credential requirements for each audit specialisation on the Idatum panel. You may apply for multiple specialisations if you meet the requirements across each.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {specialisations.map((s) => (
              <div key={s.label} style={{ background: "#fff", border: "1px solid #D1DCE8", borderRadius: 10, overflow: "hidden" }}>
                <div style={{ background: s.color, padding: "14px 20px" }}>
                  <span style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>{s.label}</span>
                </div>
                <div style={{ padding: "16px 20px" }}>
                  <p style={{ fontSize: 12, color: "#4A6080", lineHeight: 1.65 }}>{s.req}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#0D2B5A", padding: "56px 40px" }}>
        <div style={{ maxWidth: 840, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <h2 style={{ fontSize: 26, fontWeight: 700, color: "#fff", marginBottom: 8 }}>Apply to Join the Idatum Auditor Panel</h2>
            <p style={{ fontSize: 14, color: "#9BB5D4" }}>We review applications within two business days. Strong candidates are fast-tracked to an orientation call.</p>
          </div>
          <button
            onClick={() => navigate("contact")}
            style={{ background: "#fff", color: "#0D2B5A", border: "none", cursor: "pointer", padding: "14px 28px", fontSize: 15, fontWeight: 700, borderRadius: 6, whiteSpace: "nowrap", marginLeft: 40, flexShrink: 0 }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#F1F5FA")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#fff")}
          >
            Apply Now
          </button>
        </div>
      </section>
    </div>
  );
}
