import { useState } from "react";

type Page = string;
interface Props { navigate: (page: Page, state?: Record<string, string>) => void; defaultTrack?: string; }

const allCourses = [
  // POSH
  { id: "posh-ic", track: "POSH", title: "Internal Committee (IC) Member Certification", duration: "8 hours", format: "Live Virtual", level: "Practitioner", description: "Comprehensive certification program for IC members covering legal obligations, inquiry procedures, and report writing under the POSH Act.", isPOSH: true },
  { id: "posh-aware", track: "POSH", title: "Employee POSH Awareness Program", duration: "2 hours", format: "Self-Paced", level: "Foundational", description: "Organisation-wide awareness training covering POSH Act provisions, definitions, and reporting mechanisms for all employees.", isPOSH: true },
  { id: "posh-mgr", track: "POSH", title: "Manager Sensitization Workshop", duration: "4 hours", format: "Live Virtual", level: "Intermediate", description: "Practical workshop for people managers on recognising, responding to, and preventing harassment in the workplace.", isPOSH: true },
  { id: "posh-hr", track: "POSH", title: "HR Practitioner: POSH Compliance Management", duration: "6 hours", format: "Blended", level: "Advanced", description: "For HR professionals responsible for POSH compliance infrastructure — policy design, recordkeeping, and annual reporting.", isPOSH: true },
  { id: "posh-inq", track: "POSH", title: "POSH Inquiry Procedure & Natural Justice", duration: "5 hours", format: "Live Virtual", level: "Practitioner", description: "Deep-dive into the inquiry process: conducting fair hearings, gathering evidence, and drafting legally defensible findings.", isPOSH: true },
  { id: "posh-cli", track: "POSH", title: "POSH for Client-Facing Roles", duration: "3 hours", format: "Self-Paced", level: "Foundational", description: "Tailored for roles with frequent client or third-party interaction — understanding obligations and escalation paths.", isPOSH: true },
  // ISMS
  { id: "isms-found", track: "ISMS", title: "ISMS Foundation Certificate", duration: "8 hours", format: "Blended", level: "Foundational", description: "Introduces the principles and practices of an ISO 27001-aligned information security management system.", isPOSH: false },
  { id: "isms-impl", track: "ISMS", title: "ISO 27001 Lead Implementer Preparation", duration: "16 hours", format: "Live Virtual", level: "Advanced", description: "Prepares candidates for the ISO 27001 Lead Implementer examination with structured curriculum and practice assessments.", isPOSH: false },
  { id: "isms-risk", track: "ISMS", title: "Risk Assessment & Treatment Workshop", duration: "6 hours", format: "Live Virtual", level: "Intermediate", description: "Practical hands-on workshop for conducting, documenting, and communicating information security risk assessments.", isPOSH: false },
  // SOC 2
  { id: "soc2-found", track: "SOC 2", title: "SOC 2 Foundations: Trust Service Criteria", duration: "6 hours", format: "Self-Paced", level: "Foundational", description: "Covers the five Trust Service Criteria and their application to SaaS and cloud service organizations.", isPOSH: false },
  { id: "soc2-ready", track: "SOC 2", title: "SOC 2 Readiness Workshop", duration: "12 hours", format: "Blended", level: "Practitioner", description: "Intensive workshop for compliance and engineering teams preparing for a Type I or Type II examination.", isPOSH: false },
  // ISO
  { id: "iso-int", track: "ISO", title: "ISO 27001 Internal Auditor", duration: "12 hours", format: "Live Virtual", level: "Practitioner", description: "Equips participants to plan, conduct, and report on internal ISO 27001 audits within their organization.", isPOSH: false },
  { id: "iso-9001", track: "ISO", title: "ISO 9001 Quality Management Foundations", duration: "8 hours", format: "Self-Paced", level: "Foundational", description: "Covers ISO 9001 Quality Management System requirements with practical implementation guidance.", isPOSH: false },
  // ITGC
  { id: "itgc-design", track: "ITGC", title: "ITGC Design & Implementation", duration: "10 hours", format: "Blended", level: "Intermediate", description: "Covers the design of IT General Controls across access management, change management, and IT operations domains.", isPOSH: false },
  { id: "itgc-test", track: "ITGC", title: "ITGC Testing for Auditors", duration: "8 hours", format: "Live Virtual", level: "Practitioner", description: "Testing methodology and walkthrough techniques for internal and external auditors evaluating ITGC effectiveness.", isPOSH: false },
  // Audit
  { id: "audit-found", track: "Audit", title: "Internal Audit Foundations", duration: "8 hours", format: "Self-Paced", level: "Foundational", description: "Aligned to IIA standards — covers audit planning, risk assessment, fieldwork, and reporting fundamentals.", isPOSH: false },
  { id: "audit-rba", track: "Audit", title: "Risk-Based Auditing Workshop", duration: "12 hours", format: "Live Virtual", level: "Intermediate", description: "Practical training in risk-based audit methodology — scoping, materiality, sampling, and exception reporting.", isPOSH: false },
];

const trackColors: Record<string, string> = {
  POSH: "#1A5EA8", ISMS: "#0D6B4E", "SOC 2": "#6B3DAB",
  ISO: "#8B4513", ITGC: "#B8370A", Audit: "#2B6A7C",
};
const trackBgs: Record<string, string> = {
  POSH: "#EEF4FF", ISMS: "#ECFDF5", "SOC 2": "#F5F0FF",
  ISO: "#FFF7ED", ITGC: "#FFF1EE", Audit: "#EFF8FC",
};
const levels = ["All Levels", "Foundational", "Intermediate", "Practitioner", "Advanced"];
const trackList = ["All Tracks", "POSH", "ISMS", "SOC 2", "ISO", "ITGC", "Audit"];

export function BrowseAllCourses({ navigate, defaultTrack }: Props) {
  const [activeTrack, setActiveTrack] = useState(defaultTrack && trackList.includes(defaultTrack) ? defaultTrack : "All Tracks");
  const [activeLevel, setActiveLevel] = useState("All Levels");

  const filtered = allCourses.filter((c) => {
    const matchTrack = activeTrack === "All Tracks" || c.track === activeTrack;
    const matchLevel = activeLevel === "All Levels" || c.level === activeLevel;
    return matchTrack && matchLevel;
  });

  return (
    <div style={{ fontFamily: "var(--font-sans)", paddingTop: 64 }}>
      {/* Header */}
      <section style={{ background: "#0D2B5A", padding: "56px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div>
            <p style={{ fontSize: 12, fontWeight: 600, color: "#9BB5D4", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: 12 }}>
              Training Academy
            </p>
            <h1 style={{ fontSize: 40, fontWeight: 700, color: "#fff", lineHeight: 1.2, letterSpacing: "-0.8px", marginBottom: 12 }}>
              Browse All Courses
            </h1>
            <p style={{ fontSize: 16, color: "#C5D8EE" }}>
              {allCourses.length} courses across 6 compliance domains
            </p>
          </div>
          <button
            onClick={() => navigate("contact")}
            style={{
              background: "#fff",
              color: "#0D2B5A",
              border: "none",
              cursor: "pointer",
              padding: "13px 24px",
              fontSize: 14,
              fontWeight: 700,
              borderRadius: 6,
            }}
          >
            Request a Demo
          </button>
        </div>
      </section>

      {/* Filters */}
      <section style={{ background: "#F1F5FA", borderBottom: "1px solid #D1DCE8", padding: "20px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <span style={{ fontSize: 12, fontWeight: 600, color: "#4A6080", textTransform: "uppercase", letterSpacing: "0.5px" }}>Track:</span>
              <div style={{ display: "flex", gap: 6 }}>
                {trackList.map((t) => (
                  <button
                    key={t}
                    onClick={() => setActiveTrack(t)}
                    style={{
                      background: activeTrack === t ? "#0D2B5A" : "#fff",
                      color: activeTrack === t ? "#fff" : "#4A6080",
                      border: "1px solid",
                      borderColor: activeTrack === t ? "#0D2B5A" : "#D1DCE8",
                      cursor: "pointer",
                      padding: "6px 14px",
                      fontSize: 12,
                      fontWeight: 600,
                      borderRadius: 20,
                      transition: "all 0.15s",
                    }}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <span style={{ fontSize: 12, fontWeight: 600, color: "#4A6080", textTransform: "uppercase", letterSpacing: "0.5px" }}>Level:</span>
              <div style={{ display: "flex", gap: 6 }}>
                {levels.map((l) => (
                  <button
                    key={l}
                    onClick={() => setActiveLevel(l)}
                    style={{
                      background: activeLevel === l ? "#1A5EA8" : "#fff",
                      color: activeLevel === l ? "#fff" : "#4A6080",
                      border: "1px solid",
                      borderColor: activeLevel === l ? "#1A5EA8" : "#D1DCE8",
                      cursor: "pointer",
                      padding: "6px 14px",
                      fontSize: 12,
                      fontWeight: 600,
                      borderRadius: 20,
                      transition: "all 0.15s",
                    }}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>
            <span style={{ fontSize: 13, color: "#4A6080", marginLeft: "auto" }}>{filtered.length} courses shown</span>
          </div>
        </div>
      </section>

      {/* Course cards */}
      <section style={{ padding: "48px 40px", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {filtered.map((course) => {
            const color = trackColors[course.track];
            const bg = trackBgs[course.track];
            return (
              <div
                key={course.id}
                style={{
                  background: "#fff",
                  border: "1px solid #D1DCE8",
                  borderRadius: 10,
                  padding: 24,
                  display: "flex",
                  flexDirection: "column",
                  transition: "box-shadow 0.2s, transform 0.2s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 24px rgba(13,43,90,0.1)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                  <span style={{ background: bg, color, fontSize: 10, fontWeight: 700, padding: "3px 9px", borderRadius: 4, letterSpacing: "0.5px" }}>
                    {course.track}
                  </span>
                  <span style={{ background: "#F1F5FA", color: "#4A6080", fontSize: 10, fontWeight: 600, padding: "3px 9px", borderRadius: 4 }}>
                    {course.level}
                  </span>
                </div>
                <h3 style={{ fontSize: 14, fontWeight: 700, color: "#0D2B5A", lineHeight: 1.45, marginBottom: 10, flex: 1 }}>
                  {course.title}
                </h3>
                <p style={{ fontSize: 12, color: "#4A6080", lineHeight: 1.65, marginBottom: 16 }}>{course.description}</p>
                <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
                  <span style={{ fontSize: 11, color: "#4A6080", display: "flex", alignItems: "center", gap: 4 }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#4A6080" strokeWidth="1.5"/><path d="M12 6v6l4 2" stroke="#4A6080" strokeWidth="1.5" strokeLinecap="round"/></svg>
                    {course.duration}
                  </span>
                  <span style={{ fontSize: 11, color: "#4A6080" }}>• {course.format}</span>
                </div>
                <button
                  onClick={() => course.isPOSH ? navigate("posh-detail") : navigate("contact")}
                  style={{
                    background: bg,
                    color,
                    border: `1px solid ${color}30`,
                    cursor: "pointer",
                    padding: "9px 16px",
                    fontSize: 12,
                    fontWeight: 700,
                    borderRadius: 6,
                    transition: "all 0.15s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = color; e.currentTarget.style.color = "#fff"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = bg; e.currentTarget.style.color = color; }}
                >
                  {course.isPOSH ? "View Course Details" : "Request Course Details"}
                </button>
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "80px 0", color: "#4A6080" }}>
            <p style={{ fontSize: 16 }}>No courses match your filters. Try adjusting the track or level selection.</p>
          </div>
        )}
      </section>
    </div>
  );
}
