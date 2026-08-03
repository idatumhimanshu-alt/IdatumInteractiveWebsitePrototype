import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Award,
  ShieldCheck,
  Lock,
  Server,
  GraduationCap,
  BookOpen,
  ClipboardCheck,
  ArrowRight,
  CheckCircle2,
  Briefcase,
  Leaf,
  HeartPulse,
  Stethoscope,
  FileSearch,
  Users,
  MessageSquare,
  Repeat,
  FileSpreadsheet,
  LayoutDashboard,
  CheckSquare,
  ListTodo,
  ClipboardList,
  MonitorSmartphone,
  Shield,
  Activity,
  Zap,
  Cpu,
  Check,
} from "lucide-react";

type Page = string;
interface HeroProps {
  navigate: (page: Page, state?: Record<string, string>) => void;
}

const clientLogos = [
  { name: "Schneider", style: { fontWeight: 800, letterSpacing: "-0.5px" } },
  { name: "TATA", style: { fontWeight: 800, color: "#1A5EA8" } },
  { name: "wipro", style: { fontWeight: 700, fontStyle: "italic" } },
  { name: "adani", style: { fontWeight: 600, letterSpacing: "0.5px" } },
];

const consultingItems = [
  {
    id: "infosec",
    num: "01",
    title: "Information Security & Compliance",
    subtitle:
      "ISO 27001:2022 Implementation, ISO 27701 Privacy, TISAX & Internal Audits.",
    icon: <ShieldCheck size={28} strokeWidth={1.5} />,
    track: "InfoSec",
  },
  {
    id: "datacenter",
    num: "02",
    title: "Data Center Consulting",
    subtitle:
      "Governance, Operations Management, Policies, SOPs & Capacity Planning.",
    icon: <Server size={28} strokeWidth={1.5} />,
    track: "Data Center",
  },
  {
    id: "quality",
    num: "03",
    title: "Quality & Business Excellence",
    subtitle:
      "ISO 9001, ISO 14001, ISO 22301, CMMI Maturity Levels & Process Improvement.",
    icon: <Award size={28} strokeWidth={1.5} />,
    track: "Quality",
  },
  {
    id: "cyber",
    num: "04",
    title: "Cyber Security Services",
    subtitle:
      "Risk Assessment, Security Policies, Third-Party Risk & Compliance Reviews.",
    icon: <Lock size={28} strokeWidth={1.5} />,
    track: "Cyber",
  },
  {
    id: "env-mgmt",
    num: "05",
    title: "Environmental Management",
    subtitle:
      "ISO 14001 implementation, sustainability planning & environmental impact assessments.",
    icon: <Leaf size={28} strokeWidth={1.5} />,
    track: "Environment",
  },
  {
    id: "ohs-social",
    num: "06",
    title: "Health, Safety & Social Mgmt",
    subtitle:
      "ISO 45001 occupational health, workplace safety & SA8000 social accountability.",
    icon: <HeartPulse size={28} strokeWidth={1.5} />,
    track: "OHS",
  },
  {
    id: "healthcare",
    num: "07",
    title: "Healthcare & Medical Devices",
    subtitle:
      "NABL & NABH accreditation, and ISO 13485 for Medical Devices Manufacturing.",
    icon: <Stethoscope size={28} strokeWidth={1.5} />,
    track: "Healthcare",
  },
  {
    id: "standalone",
    num: "08",
    title: "Standalone Services",
    subtitle:
      "Targeted GAP assessments, independent internal audits & ongoing compliance maintenance.",
    icon: <FileSearch size={28} strokeWidth={1.5} />,
    track: "Standalone",
  },
];

const trainingItems = [
  {
    id: "iso-training",
    num: "01",
    title: "ISO & TISAX Awareness",
    subtitle:
      "Comprehensive workforce awareness training for all major ISO standards & TISAX.",
    icon: <GraduationCap size={28} strokeWidth={1.5} />,
    track: "ISO Training",
  },
  {
    id: "auditor-training",
    num: "02",
    title: "Internal Auditor Courses",
    subtitle:
      "1-day and 2-3 day internal auditor certification courses conducted by experts.",
    icon: <ClipboardCheck size={28} strokeWidth={1.5} />,
    track: "Auditor Course",
  },
  {
    id: "dc-training",
    num: "03",
    title: "Data Center Operations Training",
    subtitle:
      "Specialized operational training covering uptime, continuity, and KPI frameworks.",
    icon: <Server size={28} strokeWidth={1.5} />,
    track: "DC Training",
  },
  {
    id: "risk-workshops",
    num: "04",
    title: "Risk Management Workshops",
    subtitle:
      "Practical workshops focused on risk identification, assessment, and treatment.",
    icon: <CheckCircle2 size={28} strokeWidth={1.5} />,
    track: "Risk Workshop",
  },
  {
    id: "posh",
    num: "05",
    title: "POSH Compliance Training",
    subtitle:
      "Sensitization and awareness programs to ensure a safe, inclusive workplace environment.",
    icon: <Users size={28} strokeWidth={1.5} />,
    track: "POSH",
  },
  {
    id: "soft-skills",
    num: "06",
    title: "Business Comm. & Leadership",
    subtitle:
      "Corporate leadership, effective communication, and interpersonal skills development.",
    icon: <MessageSquare size={28} strokeWidth={1.5} />,
    track: "Soft Skills",
  },
  {
    id: "scrum",
    num: "07",
    title: "Agile & Scrum Mastery",
    subtitle:
      "Foundational and advanced training for Scrum Masters and Agile project teams.",
    icon: <Repeat size={28} strokeWidth={1.5} />,
    track: "Scrum",
  },
  {
    id: "it-tools",
    num: "08",
    title: "Data Analytics & IT Tools",
    subtitle:
      "Practical training in Google Sheets, data analysis, and essential corporate IT tools.",
    icon: <FileSpreadsheet size={28} strokeWidth={1.5} />,
    track: "IT Tools",
  },
];

const syscomplyItems = [
  {
    id: "pm",
    num: "01",
    title: "Project Management",
    subtitle:
      "Centralize your compliance timelines, resource allocation, and project tracking.",
    icon: <LayoutDashboard size={28} strokeWidth={1.5} />,
    track: "Syscomply PM",
  },
  {
    id: "iso-mgmt",
    num: "02",
    title: "ISO Compliance Management",
    subtitle:
      "Streamline framework implementation with automated ISO documentation and workflows.",
    icon: <CheckSquare size={28} strokeWidth={1.5} />,
    track: "Syscomply ISO",
  },
  {
    id: "task-mgmt",
    num: "03",
    title: "Task Management",
    subtitle:
      "Assign, monitor, and complete compliance-related tasks across your entire organization.",
    icon: <ListTodo size={28} strokeWidth={1.5} />,
    track: "Syscomply Task",
  },
  {
    id: "audit-tool",
    num: "04",
    title: "Auditing Tool",
    subtitle:
      "Conduct internal audits, log non-conformities, and track corrective actions efficiently.",
    icon: <ClipboardList size={28} strokeWidth={1.5} />,
    track: "Syscomply Audit",
  },
];

export function Hero({ navigate }: HeroProps) {
  const [activeTab, setActiveTab] = useState<
    "consulting" | "training" | "syscomply"
  >("consulting");

  const currentItems =
    activeTab === "consulting"
      ? consultingItems
      : activeTab === "training"
        ? trainingItems
        : syscomplyItems;

  return (
    <div style={{ fontFamily: "var(--font-sans)", background: "#fff" }}>
      {/* ── 1. Cybernetic Split-Screen Hero Section ── */}
      <section
        style={{
          background:
            "radial-gradient(circle at 80% 20%, #1B4375 0%, #102847 45%, #0A192F 100%)",
          padding: "160px 40px 100px",
          display: "flex",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle Background Cyber Grid Lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(100, 255, 218, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 255, 218, 0.03) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "48px",
            position: "relative",
            zIndex: 1,
            width: "100%",
          }}
        >
          {/* LEFT COLUMN: Narrative & CTAs */}
          <div style={{ flex: "1 1 520px", textAlign: "left" }}>
            <div style={{ display: "inline-flex", marginBottom: 24 }}>
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#64FFDA",
                  letterSpacing: "1.2px",
                  textTransform: "uppercase",
                  background: "rgba(100, 255, 218, 0.08)",
                  border: "1px solid rgba(100, 255, 218, 0.25)",
                  padding: "6px 16px",
                  borderRadius: 999,
                  boxShadow: "0 0 20px rgba(100,255,218,0.15)",
                }}
              >
                [HIPAA · ISO 27001 · SOC 2 · GDPR · PCI DSS]
              </span>
            </div>

            <h1
              style={{
                fontSize: 62,
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 1.12,
                letterSpacing: "-1.5px",
                marginBottom: 24,
              }}
            >
              Building Trust.
              <br />
              <span style={{ color: "#9BB5D4" }}>Enhancing Business.</span>
              <br />
              <span
                style={{
                  color: "#64FFDA",
                  textShadow: "0 0 30px rgba(100,255,218,0.3)",
                }}
              >
                Securing Tomorrow.
              </span>
            </h1>

            <p
              style={{
                fontSize: 18,
                color: "#B0C4DE",
                lineHeight: 1.6,
                marginBottom: 44,
                maxWidth: 540,
                fontWeight: 400,
              }}
            >
              Enterprise Advisory for Governance, Risk, Compliance, Security &
              AI. We partner with organizations to build resilient frameworks.
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <button
                onClick={() => navigate("contact")}
                style={{
                  background: "#ffffff",
                  color: "#0A192F",
                  border: "none",
                  cursor: "pointer",
                  padding: "16px 36px",
                  fontSize: 16,
                  fontWeight: 700,
                  borderRadius: 8,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#64FFDA";
                  e.currentTarget.style.boxShadow =
                    "0 10px 30px rgba(100,255,218,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#ffffff";
                  e.currentTarget.style.boxShadow =
                    "0 10px 25px rgba(0,0,0,0.2)";
                }}
              >
                Book a Strategy Call
              </button>

              <button
                onClick={() => navigate("services-intro")}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(10px)",
                  color: "#ffffff",
                  border: "1px solid rgba(255,255,255,0.3)",
                  cursor: "pointer",
                  padding: "16px 32px",
                  fontSize: 16,
                  fontWeight: 600,
                  borderRadius: 8,
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.12)";
                  e.currentTarget.style.borderColor = "#64FFDA";
                  e.currentTarget.style.color = "#64FFDA";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                  e.currentTarget.style.color = "#ffffff";
                }}
              >
                Explore Services
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Cybernetic Compliance HUD */}
          <div
            style={{
              flex: "1 1 480px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              minHeight: 500,
            }}
          >
            {/* Outer Glowing Ambient Aura */}
            <div
              style={{
                position: "absolute",
                width: 360,
                height: 360,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(100,255,218,0.18) 0%, rgba(10,25,47,0) 70%)",
                filter: "blur(40px)",
              }}
            />
            {/* Radar Sweeping Line */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              style={{
                position: "absolute",
                width: 380,
                height: 380,
                borderRadius: "50%",
                background:
                  "conic-gradient(from 0deg, transparent 0deg, transparent 300deg, rgba(100, 255, 218, 0.3) 360deg)",
                pointerEvents: "none",
              }}
            />
            {/* Core Shield Reactor */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              style={{
                position: "relative",
                zIndex: 10,
                width: 130,
                height: 130,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #15335A 0%, #0A192F 100%)",
                border: "2px solid #64FFDA",
                boxShadow:
                  "0 0 35px rgba(100,255,218,0.4), inset 0 0 15px rgba(100,255,218,0.2)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Shield size={38} color="#64FFDA" strokeWidth={1.8} />
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 800,
                  color: "#ffffff",
                  letterSpacing: "1px",
                  marginTop: 6,
                }}
              >
                IDATUM
              </span>
            </motion.div>
            {/* Inner Revolving Orbit Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              style={{
                position: "absolute",
                width: 270,
                height: 270,
                borderRadius: "50%",
                border: "1px dashed rgba(100, 255, 218, 0.3)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -14,
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "#0A192F",
                  border: "1px solid #64FFDA",
                  padding: 6,
                  borderRadius: "50%",
                }}
              >
                <Cpu size={18} color="#64FFDA" />
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: -14,
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "#0A192F",
                  border: "1px solid #64FFDA",
                  padding: 6,
                  borderRadius: "50%",
                }}
              >
                <Zap size={18} color="#64FFDA" />
              </div>
            </motion.div>{" "}
            {/* <--- FIXED */}
            {/* Outer Revolving Orbit Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
              style={{
                position: "absolute",
                width: 410,
                height: 410,
                borderRadius: "50%",
                border: "1px solid rgba(255, 255, 255, 0.12)",
              }}
            />
            {/* ── Floating Glassmorphic Dynamic Badges (The "Crazy" Touch) ── */}
            {/* Badge 1: Top Right */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              style={{
                position: "absolute",
                top: "8%",
                right: "2%",
                background: "rgba(16, 40, 71, 0.75)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(100, 255, 218, 0.3)",
                borderRadius: 12,
                padding: "10px 16px",
                display: "flex",
                alignItems: "center",
                gap: 10,
                boxShadow: "0 12px 30px rgba(0,0,0,0.3)",
                zIndex: 12,
              }}
            >
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 6,
                  background: "rgba(100, 255, 218, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Check size={16} color="#64FFDA" strokeWidth={2.5} />
              </div>
              <div>
                <p
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#ffffff",
                    margin: 0,
                  }}
                >
                  ISO 27001:2022
                </p>
                <p
                  style={{
                    fontSize: 9,
                    color: "#64FFDA",
                    margin: 0,
                    fontWeight: 600,
                  }}
                >
                  ● AUDIT READY
                </p>
              </div>
            </motion.div>
            {/* Badge 2: Bottom Left */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
                delay: 1,
              }}
              style={{
                position: "absolute",
                bottom: "10%",
                left: "0%",
                background: "rgba(16, 40, 71, 0.75)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: 12,
                padding: "10px 16px",
                display: "flex",
                alignItems: "center",
                gap: 10,
                boxShadow: "0 12px 30px rgba(0,0,0,0.3)",
                zIndex: 12,
              }}
            >
              <Activity size={22} color="#64FFDA" />
              <div>
                <p
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#ffffff",
                    margin: 0,
                  }}
                >
                  Risk Assessment
                </p>
                <p style={{ fontSize: 9, color: "#B0C4DE", margin: 0 }}>
                  Score: 0.00% Vulnerability
                </p>
              </div>
            </motion.div>
            {/* Badge 3: Bottom Right */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4.5,
                ease: "easeInOut",
                delay: 0.5,
              }}
              style={{
                position: "absolute",
                bottom: "2%",
                right: "8%",
                background: "rgba(16, 40, 71, 0.75)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(100, 255, 218, 0.3)",
                borderRadius: 12,
                padding: "8px 14px",
                display: "flex",
                alignItems: "center",
                gap: 8,
                boxShadow: "0 12px 30px rgba(0,0,0,0.3)",
                zIndex: 12,
              }}
            >
              <span style={{ fontSize: 18 }}>🛡️</span>
              <span style={{ fontSize: 11, fontWeight: 700, color: "#ffffff" }}>
                SOC 2 Type II Certified
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. Client Logos Strip ── */}
      <section
        style={{
          background: "#ffffff",
          borderBottom: "1px solid #EEF2F7",
          padding: "32px 40px",
        }}
      >
        <div
          style={{
            maxWidth: 1000,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 32,
          }}
        >
          {clientLogos.map((client, index) => (
            <div
              key={index}
              style={{
                fontSize: 24,
                color: "#8892B0",
                filter: "grayscale(100%) opacity(70%)",
                transition: "all 0.3s ease",
                cursor: "default",
                ...client.style,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = "grayscale(0%) opacity(100%)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = "grayscale(100%) opacity(70%)";
              }}
            >
              {client.name}
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. Our Expertise Grid with Segmented Toggle ── */}
      <section
        style={{
          padding: "80px 40px",
          maxWidth: 1200,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: 32,
            fontWeight: 700,
            color: "#15335A",
            marginBottom: 24,
            letterSpacing: "-0.5px",
          }}
        >
          Our Expertise
        </h2>
        <p style={{ fontSize: 16, color: "#4A6080", marginBottom: 40 }}>
          Select a vertical below to explore our comprehensive service
          offerings.
        </p>

        {/* 3-Way Segmented Control Switch */}
        <div
          style={{
            display: "inline-flex",
            flexWrap: "wrap",
            justifyContent: "center",
            background: "#F1F5FA",
            padding: 6,
            borderRadius: 999,
            border: "1px solid #D1DCE8",
            marginBottom: 56,
          }}
        >
          <button
            onClick={() => setActiveTab("consulting")}
            style={{
              padding: "12px 28px",
              borderRadius: 999,
              border: "none",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s ease",
              background:
                activeTab === "consulting" ? "#15335A" : "transparent",
              color: activeTab === "consulting" ? "#ffffff" : "#4A6080",
              boxShadow:
                activeTab === "consulting"
                  ? "0 4px 12px rgba(21,51,90,0.15)"
                  : "none",
            }}
          >
            <span style={{ opacity: 0.6, marginRight: 6 }}>01</span> Services
          </button>
          <button
            onClick={() => setActiveTab("training")}
            style={{
              padding: "12px 28px",
              borderRadius: 999,
              border: "none",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s ease",
              background: activeTab === "training" ? "#15335A" : "transparent",
              color: activeTab === "training" ? "#ffffff" : "#4A6080",
              boxShadow:
                activeTab === "training"
                  ? "0 4px 12px rgba(21,51,90,0.15)"
                  : "none",
            }}
          >
            <span style={{ opacity: 0.6, marginRight: 6 }}>02</span> Training
            Hub
          </button>
          <button
            onClick={() => setActiveTab("syscomply")}
            style={{
              padding: "12px 28px",
              borderRadius: 999,
              border: "none",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s ease",
              background: activeTab === "syscomply" ? "#15335A" : "transparent",
              color: activeTab === "syscomply" ? "#ffffff" : "#4A6080",
              boxShadow:
                activeTab === "syscomply"
                  ? "0 4px 12px rgba(21,51,90,0.15)"
                  : "none",
            }}
          >
            <span style={{ opacity: 0.6, marginRight: 6 }}>03</span> Syscomply
          </button>
        </div>

        {/* Dynamic Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "24px",
              justifyItems: "center",
              marginBottom: 56,
            }}
          >
            {currentItems.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  textAlign: "left",
                  width: "100%",
                  padding: "32px 24px",
                  border: "1px solid #D1DCE8",
                  borderRadius: 12,
                  background: "#ffffff",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#15335A";
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px rgba(21,51,90,0.06)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#D1DCE8";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Icon & Number Row */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    alignItems: "flex-start",
                    marginBottom: 20,
                  }}
                >
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#15335A",
                      background: "#EEF4FF",
                    }}
                  >
                    {item.icon}
                  </div>
                  <span
                    style={{
                      fontSize: 24,
                      fontWeight: 800,
                      color: "#E2E8F0",
                      letterSpacing: "-1px",
                    }}
                  >
                    {item.num}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#15335A",
                    lineHeight: 1.3,
                    margin: "0 0 10px 0",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: "#4A6080",
                    margin: "0 0 24px 0",
                    lineHeight: 1.6,
                    flex: 1,
                  }}
                >
                  {item.subtitle}
                </p>

                <button
                  onClick={() =>
                    navigate(
                      activeTab === "consulting"
                        ? "services-intro"
                        : "browse-courses",
                      {
                        defaultTrack: item.track,
                      },
                    )
                  }
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    background: "none",
                    border: "none",
                    color: "#15335A",
                    fontWeight: 600,
                    fontSize: 14,
                    cursor: "pointer",
                    padding: 0,
                  }}
                >
                  <span>
                    {activeTab === "training" ? "Browse Courses" : "Learn More"}
                  </span>
                  <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Hub Routing Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 16,
            flexWrap: "wrap",
            paddingTop: 16,
            borderTop: "1px solid #EEF2F7",
          }}
        >
          <button
            onClick={() => navigate("services-intro")}
            style={{
              background: "#15335A",
              color: "#ffffff",
              border: "none",
              cursor: "pointer",
              padding: "14px 24px",
              fontSize: 14,
              fontWeight: 600,
              borderRadius: 6,
              transition: "background 0.2s ease",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#0D213B")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#15335A")}
          >
            <Briefcase size={18} />
            Explore Services
          </button>

          <button
            onClick={() => navigate("academy-intro")}
            style={{
              background: "#F1F5FA",
              color: "#15335A",
              border: "1px solid #D1DCE8",
              cursor: "pointer",
              padding: "14px 24px",
              fontSize: 14,
              fontWeight: 600,
              borderRadius: 6,
              transition: "all 0.2s ease",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#15335A";
              e.currentTarget.style.color = "#15335A";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#D1DCE8";
              e.currentTarget.style.color = "#15335A";
            }}
          >
            <BookOpen size={18} />
            Explore Training Hub
          </button>

          <button
            onClick={() => navigate("syscomply-intro")}
            style={{
              background: "#F1F5FA",
              color: "#15335A",
              border: "1px solid #D1DCE8",
              cursor: "pointer",
              padding: "14px 24px",
              fontSize: 14,
              fontWeight: 600,
              borderRadius: 6,
              transition: "all 0.2s ease",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#15335A";
              e.currentTarget.style.color = "#15335A";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#D1DCE8";
              e.currentTarget.style.color = "#15335A";
            }}
          >
            <MonitorSmartphone size={18} />
            Explore Syscomply
          </button>
        </div>
      </section>
    </div>
  );
}
