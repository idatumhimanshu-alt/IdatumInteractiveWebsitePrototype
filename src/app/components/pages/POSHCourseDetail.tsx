type Page = string;
interface Props { navigate: (page: Page, state?: Record<string, string>) => void; }

const modules = [
  { num: "01", title: "Legal Framework & Legislative History", duration: "45 min", desc: "The Sexual Harassment of Women at Workplace Act 2013 — legislative intent, key definitions, scope of application, and employer obligations." },
  { num: "02", title: "Identifying Sexual Harassment", duration: "60 min", desc: "Distinguishing between quid pro quo and hostile work environment harassment. Case studies and scenario analysis from Indian jurisprudence." },
  { num: "03", title: "Role & Responsibilities of the IC", duration: "90 min", desc: "Composition requirements, quorum, powers, and the IC's duties throughout the complaint lifecycle — from receipt to resolution." },
  { num: "04", title: "Inquiry Procedure & Natural Justice", duration: "90 min", desc: "Step-by-step inquiry conduct: receiving complaints, preliminary assessment, inquiry hearings, evidence examination, and maintaining confidentiality." },
  { num: "05", title: "Inquiry Report & Recommendations", duration: "60 min", desc: "Drafting findings, formulating recommendations, and communicating the report to management and parties — practical templates included." },
  { num: "06", title: "Conciliation & Settlement", duration: "45 min", desc: "When and how conciliation applies, how to facilitate it ethically, and documenting the outcome within POSH Act parameters." },
  { num: "07", title: "Annual Reporting & Recordkeeping", duration: "30 min", desc: "Statutory annual reporting obligations, POSH register maintenance, and proactive compliance measures to avoid penalties." },
  { num: "08", title: "Mock Inquiry Exercise", duration: "60 min", desc: "Participants conduct a simulated inquiry using a realistic case scenario — applying all prior learning in a structured debrief session." },
];

export function POSHCourseDetail({ navigate }: Props) {
  return (
    <div style={{ fontFamily: "var(--font-sans)", paddingTop: 64 }}>
      {/* Breadcrumb */}
      <div style={{ background: "#F1F5FA", borderBottom: "1px solid #D1DCE8", padding: "12px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", gap: 8 }}>
          {[
            { label: "Academy", page: "academy-intro" },
            { label: "Training Tracks", page: "training-tracks" },
            { label: "Browse Courses", page: "browse-courses" },
          ].map((crumb, i) => (
            <span key={crumb.label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <button
                onClick={() => navigate(crumb.page)}
                style={{ background: "none", border: "none", cursor: "pointer", fontSize: 13, color: "#1A5EA8", padding: 0, fontFamily: "var(--font-sans)" }}
              >
                {crumb.label}
              </button>
              <span style={{ color: "#9BB5D4", fontSize: 13 }}>›</span>
            </span>
          ))}
          <span style={{ fontSize: 13, color: "#4A6080" }}>IC Member Certification</span>
        </div>
      </div>

      {/* Hero */}
      <section style={{ background: "#0D2B5A", padding: "64px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 340px", gap: 60, alignItems: "start" }}>
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
              <span style={{ background: "#1A5EA8", color: "#fff", fontSize: 10, fontWeight: 700, padding: "3px 10px", borderRadius: 4, letterSpacing: "0.5px" }}>POSH</span>
              <span style={{ background: "rgba(255,255,255,0.15)", color: "#C5D8EE", fontSize: 10, fontWeight: 600, padding: "3px 10px", borderRadius: 4 }}>PRACTITIONER</span>
            </div>
            <h1 style={{ fontSize: 38, fontWeight: 700, color: "#fff", lineHeight: 1.25, letterSpacing: "-0.6px", marginBottom: 16 }}>
              Internal Committee (IC) Member Certification Program
            </h1>
            <p style={{ fontSize: 16, color: "#C5D8EE", lineHeight: 1.8, marginBottom: 28, maxWidth: 620 }}>
              The definitive certification program for Internal Committee members under the POSH Act. Combines legal knowledge with practical inquiry skills to ensure your IC operates with confidence, fairness, and full statutory compliance.
            </p>
            <div style={{ display: "flex", gap: 24 }}>
              {[
                { label: "Duration", value: "8 hours" },
                { label: "Format", value: "Live Virtual" },
                { label: "Certification", value: "Included" },
                { label: "Participants", value: "Up to 25" },
              ].map((m) => (
                <div key={m.label}>
                  <p style={{ fontSize: 11, color: "#9BB5D4", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 4 }}>{m.label}</p>
                  <p style={{ fontSize: 16, fontWeight: 700, color: "#fff" }}>{m.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Action card */}
          <div style={{ background: "#fff", borderRadius: 12, padding: 28, boxShadow: "0 16px 48px rgba(0,0,0,0.2)" }}>
            <img
              src="https://images.unsplash.com/photo-1588702547923-7f6a74c2d1b9?w=400&h=200&fit=crop&auto=format"
              alt="POSH training workshop"
              style={{ display: "block", width: "100%", height: 160, objectFit: "cover", borderRadius: 8, marginBottom: 20 }}
            />
            <p style={{ fontSize: 13, color: "#4A6080", lineHeight: 1.6, marginBottom: 20 }}>
              This program is available for group delivery at your organization. Pricing is per-cohort, not per-head — making it cost-effective for teams of all sizes.
            </p>
            <button
              onClick={() => navigate("contact")}
              style={{
                width: "100%",
                background: "#1A5EA8",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                padding: "13px 20px",
                fontSize: 14,
                fontWeight: 700,
                borderRadius: 6,
                marginBottom: 10,
              }}
            >
              Request a Demo
            </button>
            <button
              onClick={() => navigate("contact")}
              style={{
                width: "100%",
                background: "#fff",
                color: "#0D2B5A",
                border: "1.5px solid #D1DCE8",
                cursor: "pointer",
                padding: "12px 20px",
                fontSize: 14,
                fontWeight: 600,
                borderRadius: 6,
              }}
            >
              Contact Us
            </button>
            <p style={{ fontSize: 11, color: "#9BB5D4", textAlign: "center", marginTop: 12 }}>
              No commitment required. We'll discuss your requirements first.
            </p>
          </div>
        </div>
      </section>

      {/* Course content */}
      <section style={{ padding: "64px 40px", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 60, alignItems: "start" }}>
          <div>
            <h2 style={{ fontSize: 28, fontWeight: 700, color: "#0D2B5A", marginBottom: 8 }}>Course Curriculum</h2>
            <p style={{ fontSize: 14, color: "#4A6080", marginBottom: 32 }}>8 modules · 8 hours total · Certification upon completion</p>
            <div>
              {modules.map((mod, i) => (
                <div
                  key={mod.num}
                  style={{
                    display: "flex",
                    gap: 20,
                    padding: "20px 0",
                    borderBottom: i < modules.length - 1 ? "1px solid #EEF2F7" : "none",
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      background: "#EEF4FF",
                      borderRadius: 8,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <span style={{ fontSize: 12, fontWeight: 700, color: "#1A5EA8" }}>{mod.num}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                      <h4 style={{ fontSize: 15, fontWeight: 700, color: "#0D2B5A" }}>{mod.title}</h4>
                      <span style={{ fontSize: 12, color: "#4A6080", flexShrink: 0, marginLeft: 16 }}>{mod.duration}</span>
                    </div>
                    <p style={{ fontSize: 13, color: "#4A6080", lineHeight: 1.65 }}>{mod.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right sidebar */}
          <div>
            <div style={{ background: "#F1F5FA", border: "1px solid #D1DCE8", borderRadius: 10, padding: 24, marginBottom: 20 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: "#0D2B5A", marginBottom: 16 }}>Who This Course Is For</h3>
              {["Newly appointed IC members", "Existing IC members seeking certification", "HR professionals managing POSH compliance", "Legal and compliance officers", "Senior managers with IC responsibilities"].map((item) => (
                <div key={item} style={{ display: "flex", gap: 10, marginBottom: 10, alignItems: "flex-start" }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ marginTop: 2, flexShrink: 0 }}>
                    <circle cx="7" cy="7" r="6" fill="#DCFCE7"/>
                    <path d="M4.5 7l2 2 3-3" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span style={{ fontSize: 13, color: "#0D2B5A" }}>{item}</span>
                </div>
              ))}
            </div>

            <div style={{ background: "#0D2B5A", borderRadius: 10, padding: 24 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 12 }}>What's Included</h3>
              {["8-hour live virtual program", "Participant workbook & case studies", "POSH Act reference handbook", "Mock inquiry exercise", "Digital completion certificate", "3-month post-training Q&A access"].map((item) => (
                <div key={item} style={{ display: "flex", gap: 10, marginBottom: 8, alignItems: "center" }}>
                  <div style={{ width: 5, height: 5, background: "#4ADE80", borderRadius: "50%", flexShrink: 0 }} />
                  <span style={{ fontSize: 13, color: "#C5D8EE" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related POSH courses */}
      <section style={{ background: "#F1F5FA", padding: "56px 40px", borderTop: "1px solid #D1DCE8" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 28 }}>
            <div>
              <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0D2B5A", marginBottom: 4 }}>Other POSH Courses</h2>
              <p style={{ fontSize: 13, color: "#4A6080" }}>The IC Member Certification is one of six POSH programmes we offer.</p>
            </div>
            <button
              onClick={() => navigate("browse-courses", { defaultTrack: "POSH" })}
              style={{ background: "none", border: "none", cursor: "pointer", color: "#1A5EA8", fontSize: 13, fontWeight: 600, fontFamily: "var(--font-sans)", display: "flex", alignItems: "center", gap: 5 }}
            >
              View all POSH courses
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {[
              { title: "Employee POSH Awareness Program", duration: "2 hours", format: "Self-Paced", level: "Foundational" },
              { title: "Manager Sensitization Workshop", duration: "4 hours", format: "Live Virtual", level: "Intermediate" },
              { title: "HR Practitioner: POSH Compliance Management", duration: "6 hours", format: "Blended", level: "Advanced" },
              { title: "POSH Inquiry Procedure & Natural Justice", duration: "5 hours", format: "Live Virtual", level: "Practitioner" },
            ].map((course) => (
              <div
                key={course.title}
                style={{ background: "#fff", border: "1px solid #D1DCE8", borderRadius: 10, padding: 20, cursor: "pointer", transition: "box-shadow 0.2s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.boxShadow = "0 6px 20px rgba(13,43,90,0.1)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.boxShadow = "none")}
                onClick={() => navigate("browse-courses", { defaultTrack: "POSH" })}
              >
                <span style={{ background: "#EEF4FF", color: "#1A5EA8", fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 4, letterSpacing: "0.5px" }}>{course.level}</span>
                <p style={{ fontSize: 13, fontWeight: 700, color: "#0D2B5A", margin: "10px 0 8px", lineHeight: 1.4 }}>{course.title}</p>
                <p style={{ fontSize: 11, color: "#4A6080" }}>{course.duration} · {course.format}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
