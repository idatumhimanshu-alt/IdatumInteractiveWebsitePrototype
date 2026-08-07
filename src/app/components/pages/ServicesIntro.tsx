import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import {
  Award,
  ShieldCheck,
  FileSearch,
  Server,
  Lock,
  CheckCircle2,
  ArrowRight,
  Shield,
  FileText,
  Users,
  Target,
  Check,
  Activity,
  ChevronRight,
} from "lucide-react";

type Page = string;
interface Props {
  navigate: (page: Page, state?: Record<string, string>) => void;
}

export function ServicesIntro({ navigate }: Props) {
  const [activeSection, setActiveSection] = useState("cert");

  // Section Refs for Scrollspy & Quick-Nav
  const sectionRefs = {
    cert: useRef<HTMLDivElement>(null),
    mgmt: useRef<HTMLDivElement>(null),
    audit: useRef<HTMLDivElement>(null),
    dc: useRef<HTMLDivElement>(null),
    risk: useRef<HTMLDivElement>(null),
    framework: useRef<HTMLDivElement>(null),
  };

  const scrollToSection = (id: keyof typeof sectionRefs) => {
    sectionRefs[id].current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const serviceBlocks = [
    { id: "cert", title: "Certification Consultancy", desc: "All ISO standards, gap analysis, documentation, and mock audits.", icon: <Award size={24} color="#64FFDA" />, badge: "ISO & Standards" },
    { id: "mgmt", title: "Management System Compliance", desc: "1-year end-to-end compliance maintenance, internal audits, and CAPA.", icon: <ShieldCheck size={24} color="#64FFDA" />, badge: "Annual Maintenance" },
    { id: "audit", title: "Second Party Auditing Services", desc: "Rigorous Supplier Assessment Framework and third-party vendor evaluations.", icon: <FileSearch size={24} color="#64FFDA" />, badge: "Vendor Assessments" },
    { id: "dc", title: "Data Center Certification Compliance", desc: "ISO 9k, 14k, 45k, 27k, 27701, 22301 tailored for Data Center operations.", icon: <Server size={24} color="#64FFDA" />, badge: "Data Centers" },
    { id: "risk", title: "Risk Management", desc: "Identify, assess, design mitigation action plans, and monitor continuously.", icon: <Lock size={24} color="#64FFDA" />, badge: "Governance" },
    { id: "framework", title: "Supported Frameworks", desc: "Tailored consultancy and readiness for HIPAA, GDPR, SOC 2, CMMI, TISAX, PCI DSS.", icon: <CheckCircle2 size={24} color="#64FFDA" />, badge: "Global Frameworks" },
  ];

  return (
    <div style={{ fontFamily: "var(--font-sans)", background: "#F8FAFC", paddingTop: 64 }}>

      {/* ── 1. Hero Header & 6 Quick-Access Gateway Cards ── */}
      <section style={{ background: "linear-gradient(135deg, #0D2B5A 0%, #15335A 100%)", padding: "80px 40px 100px", borderBottom: "1px solid #1A5EA8" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "1.5px", color: "#64FFDA", textTransform: "uppercase", marginBottom: 16, display: "block" }}>
              Unified Services Hub
            </span>
            <h1 style={{ fontSize: 44, fontWeight: 800, color: "#ffffff", marginBottom: 20, letterSpacing: "-1px" }}>
              End-to-End Enterprise Compliance & Consultancy
            </h1>
            <p style={{ fontSize: 18, color: "#C5D8EE", lineHeight: 1.7, maxWidth: 720, margin: "0 auto" }}>
              Explore our core service verticals below. Click any card to instantly jump to detailed implementation lifecycles and scope definitions.
            </p>
          </div>

          {/* The 6 Interactive Gateway Cards Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: 20 }}>
            {serviceBlocks.map((block) => (
              <motion.div
                key={block.id}
                whileHover={{ y: -4 }}
                onClick={() => scrollToSection(block.id as keyof typeof sectionRefs)}
                style={{
                  background: "rgba(255, 255, 255, 0.06)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  borderRadius: 12,
                  padding: 24,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.borderColor = "#64FFDA";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.06)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                    <div style={{ width: 44, height: 44, borderRadius: 10, background: "#1A5EA8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {block.icon}
                    </div>
                    <span style={{ fontSize: 11, fontWeight: 700, color: "#64FFDA", background: "rgba(100,255,218,0.1)", padding: "4px 10px", borderRadius: 20 }}>
                      {block.badge}
                    </span>
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: "#ffffff", marginBottom: 8 }}>{block.title}</h3>
                  <p style={{ fontSize: 13, color: "#B0C4DE", lineHeight: 1.5, margin: 0 }}>{block.desc}</p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 13, fontWeight: 700, color: "#64FFDA", marginTop: 20 }}>
                  <span>Jump to Section</span>
                  <ChevronRight size={16} />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 2. Story-Scroller Split Layout (Deep Dives) ── */}
      <section style={{ maxWidth: 1400, margin: "0 auto", padding: "64px 40px", display: "flex", gap: 64, position: "relative" }}>

        {/* LEFT: Sticky Scrollspy Sidebar */}
        <div style={{ flex: "0 0 280px" }}>
          <div style={{ position: "sticky", top: 100, display: "flex", flexDirection: "column", gap: 8 }}>
            <h4 style={{ fontSize: 12, fontWeight: 700, color: "#8892B0", textTransform: "uppercase", letterSpacing: "1px", marginBottom: 16 }}>
              Navigation Menu
            </h4>
            {serviceBlocks.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id as keyof typeof sectionRefs)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  width: "100%",
                  textAlign: "left",
                  background: activeSection === item.id ? "#ffffff" : "transparent",
                  border: activeSection === item.id ? "1px solid #1A5EA8" : "1px solid transparent",
                  color: activeSection === item.id ? "#1A5EA8" : "#4A6080",
                  padding: "12px 16px",
                  borderRadius: 10,
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  boxShadow: activeSection === item.id ? "0 4px 12px rgba(26,94,168,0.08)" : "none",
                }}
              >
                <div style={{ opacity: activeSection === item.id ? 1 : 0.6 }}>{item.icon}</div>
                {item.title}
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT: Content Feed */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 80, paddingBottom: 120, minWidth: 0 }}>

          {/* BLOCK 1: Certification Consultancy */}
          <div id="cert" ref={sectionRefs.cert} style={{ scrollMarginTop: 100 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
              <div style={{ width: 56, height: 56, borderRadius: 14, background: "#EEF4FF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Award size={28} color="#1A5EA8" />
              </div>
              <h2 style={{ fontSize: 32, fontWeight: 800, color: "#0D2B5A", letterSpacing: "-0.5px", margin: 0 }}>
                1. Certification Consultancy
              </h2>
            </div>
            <p style={{ fontSize: 16, color: "#4A6080", lineHeight: 1.7, marginBottom: 40 }}>
              <strong>Standards Covered:</strong> All ISO standards (ISO 27001, ISO 27701, ISO 9001, ISO 14001, ISO 22301, ISO 13485, ISO 62305, ISO 17025, IATF 16949, SPICE).
            </p>

            <h4 style={{ fontSize: 14, fontWeight: 700, color: "#8892B0", textTransform: "uppercase", letterSpacing: "1px", marginBottom: 16 }}>
              Core Services Offered
            </h4>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginBottom: 48 }}>
              <div style={{ background: "#ffffff", border: "1px solid #D1DCE8", borderRadius: 12, padding: 24, boxShadow: "0 2px 10px rgba(13,43,90,0.02)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12, color: "#1A5EA8" }}>
                  <FileText size={20} /> <h5 style={{ fontSize: 16, fontWeight: 700, margin: 0 }}>Documentation Design</h5>
                </div>
                <p style={{ fontSize: 14, color: "#4A6080", lineHeight: 1.6, margin: 0 }}>Drafting customized quality manuals, SOPs, ISMS documentation, policies, and work instructions tailored to workflows.</p>
              </div>

              <div style={{ background: "#ffffff", border: "1px solid #D1DCE8", borderRadius: 12, padding: 24, boxShadow: "0 2px 10px rgba(13,43,90,0.02)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12, color: "#1A5EA8" }}>
                  <Target size={20} /> <h5 style={{ fontSize: 16, fontWeight: 700, margin: 0 }}>Gap Analysis</h5>
                </div>
                <p style={{ fontSize: 14, color: "#4A6080", lineHeight: 1.6, margin: 0 }}>Evaluating existing processes to identify missing operational controls.</p>
              </div>

              <div style={{ background: "#ffffff", border: "1px solid #D1DCE8", borderRadius: 12, padding: 24, boxShadow: "0 2px 10px rgba(13,43,90,0.02)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12, color: "#1A5EA8" }}>
                  <Shield size={20} /> <h5 style={{ fontSize: 16, fontWeight: 700, margin: 0 }}>Internal Audits</h5>
                </div>
                <p style={{ fontSize: 14, color: "#4A6080", lineHeight: 1.6, margin: 0 }}>Performing mock audits to correct non-conformities beforehand.</p>
              </div>

              <div style={{ background: "#ffffff", border: "1px solid #D1DCE8", borderRadius: 12, padding: 24, boxShadow: "0 2px 10px rgba(13,43,90,0.02)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12, color: "#1A5EA8" }}>
                  <Users size={20} /> <h5 style={{ fontSize: 16, fontWeight: 700, margin: 0 }}>Training & Body Coordination</h5>
                </div>
                <p style={{ fontSize: 14, color: "#4A6080", lineHeight: 1.6, margin: 0 }}>Conducting internal auditor workshops and liaison with TÜV, SGS, Bureau Veritas, or NABCB.</p>
              </div>
            </div>

            <h4 style={{ fontSize: 14, fontWeight: 700, color: "#8892B0", textTransform: "uppercase", letterSpacing: "1px", marginBottom: 24 }}>
              Step-by-Step Implementation Lifecycle
            </h4>

            <div style={{ position: "relative", paddingLeft: 40 }}>
              <div style={{ position: "absolute", left: 15, top: 10, bottom: 20, width: 2, background: "#E2E8F0" }} />

              {[
                { title: "Initial Consultation & Scoping", desc: "Defining project scope, choosing the appropriate standard, and setting timelines." },
                { title: "Process Mapping", desc: "Aligning internal company workflows with standard clauses." },
                { title: "Implementation & Rollout", desc: "Deploying new workflows and documenting operational evidence." },
                { title: "Final Certification Audit", desc: "Managing external auditor interactions until the certificate is successfully issued." },
              ].map((step, idx) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: idx * 0.15 }}
                  key={idx} 
                  style={{ position: "relative", marginBottom: 32 }}
                >
                  <div style={{ position: "absolute", left: -40, top: 4, width: 12, height: 12, borderRadius: "50%", background: "#1A5EA8", border: "3px solid #ffffff", boxShadow: "0 0 0 2px #1A5EA8" }} />
                  <h5 style={{ fontSize: 18, fontWeight: 700, color: "#0D2B5A", margin: "0 0 6px 0" }}>Step 0{idx + 1}: {step.title}</h5>
                  <p style={{ fontSize: 15, color: "#4A6080", margin: 0, lineHeight: 1.6 }}>{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <hr style={{ border: "none", borderTop: "1px dashed #D1DCE8", margin: "20px 0" }} />

          {/* BLOCK 2: Management System Compliance */}
          <div id="mgmt" ref={sectionRefs.mgmt} style={{ scrollMarginTop: 100 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
              <div style={{ width: 56, height: 56, borderRadius: 14, background: "#ECFDF5", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <ShieldCheck size={28} color="#0D6B4E" />
              </div>
              <h2 style={{ fontSize: 32, fontWeight: 800, color: "#0D2B5A", letterSpacing: "-0.5px", margin: 0 }}>
                2. Management System Compliance
              </h2>
            </div>
            <p style={{ fontSize: 16, color: "#4A6080", lineHeight: 1.7, marginBottom: 32 }}>
              Available as a standalone service or as a bundle, we provide end-to-end Management System Compliance for a service period of 1 year, ensuring continuous audit-readiness.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
              {[
                { title: "Standard Mapping & Alignment", desc: "Cross-referencing internal company processes against specific clauses of a chosen standard." },
                { title: "Documented Information Control", desc: "Maintaining and updating policies, manuals, SOPs, and operational records." },
                { title: "Internal Auditing Program", desc: "Scheduling regular audits to objectively evaluate conformance to standard requirements." },
                { title: "Corrective Action (CAPA)", desc: "Systematic tracking and resolution of non-conformities to prevent recurrence." },
                { title: "Management Review", desc: "Periodic evaluations by executive leadership to assess system suitability and adequacy." },
              ].map((item, idx) => (
                <div key={idx} style={{ background: "#ffffff", borderLeft: "4px solid #0D6B4E", borderRadius: "0 12px 12px 0", padding: "20px 24px", boxShadow: "0 2px 12px rgba(13,107,78,0.06)" }}>
                  <h5 style={{ fontSize: 16, fontWeight: 700, color: "#0D2B5A", marginBottom: 8, marginTop: 0 }}>{item.title}</h5>
                  <p style={{ fontSize: 14, color: "#4A6080", margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <hr style={{ border: "none", borderTop: "1px dashed #D1DCE8", margin: "20px 0" }} />

          {/* BLOCK 3: Second Party Auditing */}
          <div id="audit" ref={sectionRefs.audit} style={{ scrollMarginTop: 100 }}>
             <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
              <div style={{ width: 56, height: 56, borderRadius: 14, background: "#F5F0FF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <FileSearch size={28} color="#6B3DAB" />
              </div>
              <h2 style={{ fontSize: 32, fontWeight: 800, color: "#0D2B5A", letterSpacing: "-0.5px", margin: 0 }}>
                3. Second Party Auditing Services
              </h2>
            </div>

            <div style={{ background: "linear-gradient(135deg, #2E1B4E 0%, #1A0D30 100%)", borderRadius: 16, padding: 40, color: "#ffffff", display: "flex", flexDirection: "column", gap: 16, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", right: -20, bottom: -20, opacity: 0.1 }}>
                <FileSearch size={200} />
              </div>
              <h3 style={{ fontSize: 24, fontWeight: 800, margin: 0, position: "relative", zIndex: 1 }}>Supplier Assessment Framework</h3>
              <p style={{ fontSize: 16, color: "#D1C4E9", lineHeight: 1.7, margin: 0, maxWidth: 600, position: "relative", zIndex: 1 }}>
                Rigorous evaluation of third-party vendors, partners, and external suppliers to verify security posture, operational maturity, and adherence to quality agreements on behalf of your enterprise.
              </p>
            </div>
          </div>

          <hr style={{ border: "none", borderTop: "1px dashed #D1DCE8", margin: "20px 0" }} />

          {/* BLOCK 4: Data Center Compliance */}
          <div id="dc" ref={sectionRefs.dc} style={{ scrollMarginTop: 100 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
              <div style={{ width: 56, height: 56, borderRadius: 14, background: "#FFF7ED", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Server size={28} color="#8B4513" />
              </div>
              <h2 style={{ fontSize: 32, fontWeight: 800, color: "#0D2B5A", letterSpacing: "-0.5px", margin: 0 }}>
                4. Data Center Certification Compliance
              </h2>
            </div>
            <p style={{ fontSize: 16, color: "#4A6080", lineHeight: 1.7, marginBottom: 32 }}>
              <strong>Standards Covered:</strong> Specialized framework covering ISO 9K, ISO 14K, ISO 45K, ISO 27K, ISO 27701, and ISO 22301 tailored specifically for data center environments.
            </p>

            <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
              <div style={{ flex: "1 1 300px" }}>
                <h4 style={{ fontSize: 14, fontWeight: 700, color: "#8B4513", textTransform: "uppercase", letterSpacing: "1px", marginBottom: 16 }}>Core Services</h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 16 }}>
                  {[
                    "Evaluating existing facility workflows and environmental controls.",
                    "Drafting data center policies, SOPs, and capacity planning manuals.",
                    "Conducting specialized operations training and readiness workshops.",
                    "Conducting mock infrastructure and governance audits.",
                    "Managing seamless liaisons with accredited registrars."
                  ].map((text, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 15, color: "#4A6080", lineHeight: 1.5 }}>
                      <Check size={18} color="#8B4513" style={{ marginTop: 2, flexShrink: 0 }} />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ flex: "1 1 300px", background: "#ffffff", border: "1px solid #E2E8F0", borderRadius: 12, padding: 24, boxShadow: "0 4px 12px rgba(0,0,0,0.03)" }}>
                <h4 style={{ fontSize: 14, fontWeight: 700, color: "#8B4513", textTransform: "uppercase", letterSpacing: "1px", marginBottom: 16 }}>Implementation Lifecycle</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div style={{ display: "flex", gap: 12 }}><div style={{ fontWeight: 800, color: "#8B4513" }}>01</div> <div style={{ fontSize: 14, color: "#0D2B5A" }}><strong>Initial Scoping:</strong> Defining perimeter and timelines.</div></div>
                  <div style={{ display: "flex", gap: 12 }}><div style={{ fontWeight: 800, color: "#8B4513" }}>02</div> <div style={{ fontSize: 14, color: "#0D2B5A" }}><strong>Process Mapping:</strong> Aligning governance with clauses.</div></div>
                  <div style={{ display: "flex", gap: 12 }}><div style={{ fontWeight: 800, color: "#8B4513" }}>03</div> <div style={{ fontSize: 14, color: "#0D2B5A" }}><strong>Rollout:</strong> Deploying facility controls and DR procedures.</div></div>
                  <div style={{ display: "flex", gap: 12 }}><div style={{ fontWeight: 800, color: "#8B4513" }}>04</div> <div style={{ fontSize: 14, color: "#0D2B5A" }}><strong>Final Audit:</strong> Managing auditor reviews through accreditation.</div></div>
                </div>
              </div>
            </div>
          </div>

          <hr style={{ border: "none", borderTop: "1px dashed #D1DCE8", margin: "20px 0" }} />

          {/* BLOCK 5: Risk Management */}
          <div id="risk" ref={sectionRefs.risk} style={{ scrollMarginTop: 100 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
              <div style={{ width: 56, height: 56, borderRadius: 14, background: "#FFF1EE", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Activity size={28} color="#B8370A" />
              </div>
              <h2 style={{ fontSize: 32, fontWeight: 800, color: "#0D2B5A", letterSpacing: "-0.5px", margin: 0 }}>
                5. Risk Management
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, marginTop: 32 }}>
              {[
                { title: "Identify", desc: "Spotting information security, operational, and physical vulnerabilities across enterprise assets." },
                { title: "Assess", desc: "Evaluating risk likelihood and potential impact severity." },
                { title: "Mitigate", desc: "Designing, prioritizing, and deploying effective risk treatment controls." },
                { title: "Monitor", desc: "Ongoing governance tracking, periodic reviews, and metric updates to ensure long-term stability." },
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  whileHover={{ y: -5 }}
                  style={{ background: "#ffffff", border: "1px solid #FFD9D2", borderRadius: 12, padding: 24, textAlign: "center", boxShadow: "0 4px 12px rgba(184,55,10,0.05)" }}
                >
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#B8370A", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontWeight: 800, fontSize: 18 }}>
                    {idx + 1}
                  </div>
                  <h4 style={{ fontSize: 18, fontWeight: 800, color: "#0D2B5A", marginBottom: 12 }}>{item.title}</h4>
                  <p style={{ fontSize: 14, color: "#4A6080", lineHeight: 1.5, margin: 0 }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <hr style={{ border: "none", borderTop: "1px dashed #D1DCE8", margin: "20px 0" }} />

          {/* BLOCK 6: Supported Frameworks */}
          <div id="framework" ref={sectionRefs.framework} style={{ scrollMarginTop: 100 }}>
             <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
              <div style={{ width: 56, height: 56, borderRadius: 14, background: "#EFF8FC", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <CheckCircle2 size={28} color="#2B6A7C" />
              </div>
              <h2 style={{ fontSize: 32, fontWeight: 800, color: "#0D2B5A", letterSpacing: "-0.5px", margin: 0 }}>
                6. Supported Frameworks
              </h2>
            </div>
            <p style={{ fontSize: 16, color: "#4A6080", lineHeight: 1.7, marginBottom: 32 }}>
              We apply our rigorous Certification Consultancy wording and structured lifecycles directly to these specific global regulatory frameworks. Hover over a framework to reveal our approach.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
              {["HIPAA", "GDPR", "SOC 2", "CMMI (Dev/SVC)", "TISAX", "PCI DSS"].map((fw, idx) => (
                <div 
                  key={idx}
                  style={{
                    position: "relative",
                    background: "#0D2B5A",
                    borderRadius: 12,
                    height: 160,
                    overflow: "hidden",
                    cursor: "pointer",
                    boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
                  }}
                  onMouseEnter={(e) => {
                    const overlay = e.currentTarget.querySelector('.overlay') as HTMLDivElement;
                    if(overlay) overlay.style.opacity = "1";
                  }}
                  onMouseLeave={(e) => {
                    const overlay = e.currentTarget.querySelector('.overlay') as HTMLDivElement;
                    if(overlay) overlay.style.opacity = "0";
                  }}
                >
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1 }}>
                    <h3 style={{ fontSize: 28, fontWeight: 800, color: "#ffffff", letterSpacing: "1px" }}>{fw}</h3>
                  </div>

                  <div 
                    className="overlay"
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "#2B6A7C",
                      padding: 20,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                      zIndex: 2,
                    }}
                  >
                    <h4 style={{ fontSize: 16, fontWeight: 700, color: "#ffffff", margin: "0 0 8px 0" }}>{fw} Implementation</h4>
                    <p style={{ fontSize: 12, color: "#E0F2FE", margin: 0, lineHeight: 1.5 }}>
                      Gap Analysis • Documentation Design • Awareness Training • Readiness Audits • Assessment Body Coordination
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}