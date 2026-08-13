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
  Activity,
  Zap,
  Cpu,
  Check,
  ChevronDown,
  ChevronUp,
  Building2,
  Factory,
  Landmark,
  ShieldAlert,
  Plane,
} from "lucide-react";

type Page = string;
interface HeroProps {
  navigate: (page: Page, state?: Record<string, string>) => void;
}

// Complete list of all 23 enterprise clients with monogram codes and sectors
const clients = [
  {
    name: "IL&FS Education, Schoolnet India",
    code: "ILF",
    sector: "Education & Infrastructure",
  },
  { name: "VFS Global", code: "VFS", sector: "Global Services" },
  {
    name: "HDFC (Internal development team)",
    code: "HDFC",
    sector: "Financial Services",
  },
  { name: "Century Enka", code: "CE", sector: "Manufacturing" },
  { name: "Wurth IT India", code: "WUR", sector: "IT Services" },
  { name: "Milliontech- Hongkong", code: "MIL", sector: "Technology" },
  { name: "Tridiagonal.ai", code: "TRI", sector: "Simulation & Engineering" },
  { name: "VDA Infosolutions Pvt. Ltd.", code: "VDA", sector: "IT Solutions" },
  {
    name: "Qorix India (KPIT Venture)",
    code: "QRX",
    sector: "Automotive Software",
  },
  { name: "Syntys- Qatar", code: "SYN", sector: "Data Center" },
  { name: "AurionPro Solutions", code: "APS", sector: "Enterprise Software" },
  { name: "ISRC Otis", code: "OTI", sector: "Engineering" },
  { name: "RePlus Engitech Pvt. Ltd", code: "REP", sector: "Energy & Tech" },
  {
    name: "Datametica Solutions Pvt. Ltd",
    code: "DAT",
    sector: "Data Analytics",
  },
  { name: "L&T Finance", code: "LTF", sector: "Financial Services" },
  { name: "Bond.ai (USA)", code: "BAI", sector: "AI & Technology" },
  { name: "Wide Wings Pvt. Ltd.", code: "WWP", sector: "Media & Production" },
  { name: "Bajaj Allianz", code: "BAL", sector: "Insurance" },
  { name: "Bitwise Global", code: "BIT", sector: "Data & IT Services" },
  { name: "tCognition Consultancy", code: "TCG", sector: "IT Consulting" },
  { name: "Xpanxion International", code: "XPX", sector: "Software Solutions" },
  { name: "Opus Software", code: "OPS", sector: "Fintech Solutions" },
  { name: "Minda Stoneridge", code: "MSI", sector: "Automotive Components" },
];

// Complete mapped client database with exact models/standards from records
const clientDatabase = [
  {
    name: "IL&FS Education, Schoolnet India",
    code: "ILF",
    sector: "Education",
    standards: "IMS (ISO 9001, ISO 27001) & CMMI V3.0",
  },
  {
    name: "VFS Global",
    code: "VFS",
    sector: "Global Services",
    standards: "ISO 20001",
  },
  {
    name: "HDFC (Internal development team)",
    code: "HDFC",
    sector: "Banking & Financial Services",
    standards: "CMMI Development V1.3",
  },
  {
    name: "Century Enka",
    code: "CE",
    sector: "Manufacturing",
    standards: "ISO 27001:2022",
  },
  {
    name: "Wurth IT India",
    code: "WUR",
    sector: "Software Development",
    standards: "ISO 20001 & CMMI Services v2.0",
  },
  {
    name: "Milliontech- Hongkong",
    code: "MIL",
    sector: "Software Development",
    standards: "CMMI V1.1",
  },
  {
    name: "Tridiagonal.ai",
    code: "TRI",
    sector: "Engineering Services",
    standards: "IMS (ISO 9001, 27001, 14001)",
  },
  {
    name: "VDA Infosolutions Pvt. Ltd.",
    code: "VDA",
    sector: "Software Development",
    standards: "CMMI Services L3 v3.0",
  },
  {
    name: "Qorix India (KPIT Venture)",
    code: "QRX",
    sector: "Automotive",
    standards: "IMS (ISO 9001, 27001)",
  },
  {
    name: "Syntys- Qatar",
    code: "SYN",
    sector: "Data Centers",
    standards: "ISO 9001, ISO 27001, SOC 2, ISO 14001, 45001, 22301",
  },
  {
    name: "AurionPro Solutions",
    code: "APS",
    sector: "Software Development",
    standards: "ISO 27001 & CMMI L5",
  },
  {
    name: "ISRC Otis",
    code: "OTI",
    sector: "Manufacturing",
    standards: "Otis Quality & Security Standard ACE",
  },
  {
    name: "RePlus Engitech Pvt. Ltd",
    code: "REP",
    sector: "Energy & Tech",
    standards: "IMS (ISO 27001, 9001, 14001, 45001)",
  },
  {
    name: "Datametica Solutions Pvt. Ltd",
    code: "DAT",
    sector: "Data Analytics",
    standards: "Developing Quality & Security Program",
  },
  {
    name: "L&T Finance",
    code: "LTF",
    sector: "Banking & Financial Services",
    standards: "Financial Sector Compliance Frameworks",
  },
  {
    name: "Bond.ai (USA)",
    code: "BAI",
    sector: "Software Development",
    standards: "AI & Tech Compliance Architecture",
  },
  {
    name: "Wide Wings Pvt. Ltd.",
    code: "WWP",
    sector: "Media & Production",
    standards: "Media Production Standards",
  },
  {
    name: "Bajaj Allianz",
    code: "BAL",
    sector: "Banking & Financial Services",
    standards: "Insurance Risk Frameworks",
  },
  {
    name: "Bitwise Global",
    code: "BIT",
    sector: "Software Development",
    standards: "ISO 9001 & ISMS 27001 (Quality Team Provision)",
  },
  {
    name: "tCognition Consultancy",
    code: "TCG",
    sector: "Software Development",
    standards: "IT Consulting Compliance",
  },
  {
    name: "Xpanxion International",
    code: "XPX",
    sector: "Software Development",
    standards: "Software Solutions Framework",
  },
  {
    name: "Opus Software",
    code: "OPS",
    sector: "Banking & Financial Services",
    standards: "Fintech Quality Assurance",
  },
  {
    name: "Minda Stoneridge Instruments Pvt. Ltd",
    code: "MSI",
    sector: "Automotive",
    standards: "Automotive SPICE",
  },
  {
    name: "Everyspend India Pvt. Ltd.",
    code: "EVS",
    sector: "Banking & Financial Services",
    standards: "SOC 2 Compliance & IQA Services",
  },
  {
    name: "National Investment & Infrastructure Fund",
    code: "NII",
    sector: "Banking & Financial Services",
    standards: "ISO 27001:2022",
  },
  {
    name: "Datavision Software Solutions",
    code: "DVS",
    sector: "Software Development",
    standards: "ISO 9001, ISO 27001, CMMI L5, Maintenance",
  },
  {
    name: "Avisys Services Private Limited",
    code: "AVI",
    sector: "Engineering Services",
    standards: "CMMI Development V3.0",
  },
  {
    name: "JJIT Fintech Solutions",
    code: "JJT",
    sector: "Banking & Financial Services",
    standards: "ISO 9001, ISO 27001, CMMI Services v3.0",
  },
  {
    name: "Yavatmal Bank",
    code: "YBK",
    sector: "Banking & Financial Services",
    standards: "ISO 9001 & ISO 27001",
  },
  {
    name: "OvalEdge Pvt. Ltd",
    code: "OVA",
    sector: "Software Development",
    standards: "ISO 9001 & ISO 27001",
  },
  {
    name: "Ellicium Solutions",
    code: "ELL",
    sector: "Data Analytics",
    standards: "ISO 9001",
  },
  {
    name: "SCA- IT",
    code: "SCA",
    sector: "Software Development",
    standards: "ISO 9001 & ISO 27001",
  },
  {
    name: "DTBX Innovate India Pvt. Ltd.",
    code: "DTB",
    sector: "Software Development",
    standards: "ISO 27001",
  },
  {
    name: "MSS India Pvt. Ltd",
    code: "MSS",
    sector: "Manufacturing",
    standards: "ISO 27001, TISAX",
  },
  {
    name: "Learningmate Solutions Pvt. Ltd",
    code: "LMT",
    sector: "Education",
    standards: "ISO 27001 Surveillance Services",
  },
];

const industrySectors = [
  {
    name: "Automotive",
    icon: <Cpu size={20} color="#1A5EA8" />,
    challenges:
      "Stringent supply chain security requirements, multi-tier vendor oversight, and zero-tolerance for operational downtime.",
    applicableStandards: ["TISAX", "Automotive SPICE", "IATF 16949"],
  },
  {
    name: "Banking & Financial Services",
    icon: <Landmark size={20} color="#1A5EA8" />,
    challenges:
      "Strict regulatory data mandates, secure consumer financial transactions, and exhaustive third-party risk management.",
    applicableStandards: ["PCI DSS", "SOC 2 Type II", "ISO 27001", "CMMI"],
  },
  {
    name: "Software Development",
    icon: <Building2 size={20} color="#1A5EA8" />,
    challenges:
      "Protecting proprietary source code, managing secure cloud infrastructure, and meeting international data privacy laws.",
    applicableStandards: [
      "ISO 27001:2022",
      "CMMI Development/Services",
      "GDPR",
      "SOC 2",
    ],
  },
  {
    name: "Manufacturing",
    icon: <Factory size={20} color="#1A5EA8" />,
    challenges:
      "OT/IT security convergence, environmental and workplace safety compliance, and robust quality control procedures.",
    applicableStandards: ["ISO 9001", "ISO 14001", "ISO 45001", "ACE Standard"],
  },
  {
    name: "Data Centers",
    icon: <Server size={20} color="#1A5EA8" />,
    challenges:
      "Maintaining 24/7 digital and physical uptime, facility environmental governance, and business continuity readiness.",
    applicableStandards: ["ISO 22301", "ISO 27701", "ISO 27001", "SOC 2"],
  },
  {
    name: "Education",
    icon: <GraduationCap size={20} color="#1A5EA8" />,
    challenges:
      "Multi-campus administrative governance, academic data protection, and institutional accreditation frameworks.",
    applicableStandards: ["NAAC / NBA", "IMS (ISO 9001/27001)", "CMMI V3.0"],
  },
  {
    name: "Healthcare",
    icon: <HeartPulse size={20} color="#1A5EA8" />,
    challenges:
      "Protecting electronic health records, strict patient confidentiality, and medical device data accuracy.",
    applicableStandards: ["HIPAA", "ISO 13485", "ISO 27701"],
  },
  {
    name: "Engineering Services",
    icon: <ShieldAlert size={20} color="#1A5EA8" />,
    challenges:
      "Safeguarding design blueprints, confidential client intellectual property, and secure cross-border collaboration.",
    applicableStandards: ["ISO 27001", "CMMI L3/L5"],
  },
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
      "ISO 9001, IATF 16949, ISO 22301, AS 9100, CMMI Dev & Services & Process Improvement.",
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
    title: "Health, Safety & Social Management",
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
  {
    id: "aerospace",
    num: "09",
    title: "Aerospace, Drone & Defense Tech",
    subtitle:
      "AS9100 implementation, drone and defense manufacturing compliance, and specialized quality frameworks.",
    icon: <Plane size={28} strokeWidth={1.5} />,
    track: "Aerospace",
  },
  {
    id: "edu-hr",
    num: "10",
    title: "Education & HR Providers",
    subtitle:
      "Institutional compliance (NAAC/NBA), POSH programs, and human resource framework management.",
    icon: <Users size={28} strokeWidth={1.5} />,
    track: "EduHR",
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
  const [showAllClients, setShowAllClients] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState(0);

  const currentItems =
    activeTab === "consulting"
      ? consultingItems
      : activeTab === "training"
        ? trainingItems
        : syscomplyItems;

  const displayedClients = showAllClients ? clients : clients.slice(0, 8);
  const activeSectorData = industrySectors[selectedIndustry];
  const filteredSectorClients = clientDatabase.filter(
    (c) => c.sector === activeSectorData.name,
  );

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
                  fontSize: 17,
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
                HIPAA · ISO · CMMI · TISAX · SOC 2 · GDPR · PCI DSS
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
              We partner with organizations across Automotive, Manufacturing,
              Software/IT, Data Centers, Financial Services, Healthcare,
              Aerospace, Drone, Defense Tech/Manufacturing, Education, and Human
              Resource Providers to build resilient frameworks.
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

          {/* RIGHT COLUMN: Cybernetic Compliance */}
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
              <ShieldCheck size={38} color="#64FFDA" strokeWidth={1.8} />
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
            </motion.div>

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

            {/* Floating Badges */}
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
                  Compliance
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
                left: "-5%",
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
                bottom: "5%",
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
              <Lock size={16} color="#64FFDA" />
              <span style={{ fontSize: 11, fontWeight: 700, color: "#ffffff" }}>
                Security Verified
              </span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 5.5,
                ease: "easeInOut",
                delay: 1.5,
              }}
              style={{
                position: "absolute",
                top: "12%",
                left: "2%",
                background: "rgba(16, 40, 71, 0.75)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: 12,
                padding: "8px 14px",
                display: "flex",
                alignItems: "center",
                gap: 8,
                boxShadow: "0 12px 30px rgba(0,0,0,0.3)",
                zIndex: 12,
              }}
            >
              <Briefcase size={16} color="#B0C4DE" />
              <span style={{ fontSize: 11, fontWeight: 700, color: "#ffffff" }}>
                Governance
              </span>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4.8,
                ease: "easeInOut",
                delay: 0.8,
              }}
              style={{
                position: "absolute",
                top: "45%",
                right: "-6%",
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
              <Cpu size={16} color="#64FFDA" />
              <span style={{ fontSize: 11, fontWeight: 700, color: "#ffffff" }}>
                AI Readiness
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Fused Interactive Industry-to-Client Proof Matrix ── */}
      <section
        style={{
          background: "#F1F5FA",
          padding: "80px 40px",
          borderBottom: "1px solid #D1DCE8",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "1.5px",
                color: "#1A5EA8",
                textTransform: "uppercase",
              }}
            >
              Proven Domain Expertise & Work Proofs
            </span>
            <h2
              style={{
                fontSize: 36,
                fontWeight: 800,
                color: "#0D2B5A",
                marginTop: 8,
                marginBottom: 12,
              }}
            >
              Explore Industry Sectors & Track Record
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "#4A6080",
                maxWidth: 700,
                margin: "0 auto",
              }}
            >
              Select an industry sector below to see our specific domain
              approach and representative work proofs amongst many from our
              extensive portfolio of enterprise engagements.
            </p>
          </div>

          {/* Industry Pills */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 10,
              marginBottom: 36,
            }}
          >
            {industrySectors.map((sector, idx) => {
              const isSelected = selectedIndustry === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedIndustry(idx)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "10px 20px",
                    borderRadius: 30,
                    background: isSelected ? "#0D2B5A" : "#ffffff",
                    color: isSelected ? "#64FFDA" : "#0D2B5A",
                    border: "1px solid #D1DCE8",
                    fontSize: 14,
                    fontWeight: 700,
                    cursor: "pointer",
                    boxShadow: isSelected
                      ? "0 4px 14px rgba(13,43,90,0.2)"
                      : "0 2px 6px rgba(0,0,0,0.02)",
                    transition: "all 0.2s ease",
                  }}
                >
                  {sector.icon}
                  {sector.name}
                </button>
              );
            })}
          </div>

          {/* Dynamic Showcase Card */}
          <motion.div
            key={selectedIndustry}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              background: "#ffffff",
              borderRadius: 16,
              border: "1px solid #D1DCE8",
              padding: 40,
              boxShadow: "0 10px 30px rgba(13,43,90,0.06)",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: 32,
                alignItems: "center",
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 800,
                    letterSpacing: "1px",
                    color: "#1A5EA8",
                    textTransform: "uppercase",
                  }}
                >
                  Sector Profile
                </span>
                <h3
                  style={{
                    fontSize: 26,
                    fontWeight: 800,
                    color: "#0D2B5A",
                    margin: "6px 0 12px",
                  }}
                >
                  {activeSectorData.name}
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    color: "#4A6080",
                    lineHeight: 1.6,
                    marginBottom: 20,
                  }}
                >
                  <strong>Core Challenge:</strong> {activeSectorData.challenges}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {activeSectorData.applicableStandards.map((std, i) => (
                    <span
                      key={i}
                      style={{
                        background: "#EEF4FF",
                        color: "#1A5EA8",
                        fontSize: 12,
                        fontWeight: 700,
                        padding: "4px 10px",
                        borderRadius: 6,
                      }}
                    >
                      {std}
                    </span>
                  ))}
                </div>
              </div>

              {/* Exact Client Proof List for this Sector */}
              <div
                style={{
                  background: "#F8FAFC",
                  borderRadius: 12,
                  padding: 24,
                  border: "1px solid #E2E8F0",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 16,
                  }}
                >
                  <h4
                    style={{
                      fontSize: 14,
                      fontWeight: 800,
                      color: "#0D2B5A",
                      textTransform: "uppercase",
                      margin: 0,
                      letterSpacing: "0.5px",
                    }}
                  >
                    Verified Client Work Proofs
                  </h4>
                  <span
                    style={{ fontSize: 11, fontWeight: 600, color: "#8892B0" }}
                  >
                    (Selected amongst many)
                  </span>
                </div>

                {filteredSectorClients.length > 0 ? (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 12,
                      maxHeight: 220,
                      overflowY: "auto",
                    }}
                  >
                    {filteredSectorClients.map((client, i) => (
                      <div
                        key={i}
                        style={{
                          background: "#ffffff",
                          padding: "10px 14px",
                          borderRadius: 8,
                          border: "1px solid #D1DCE8",
                        }}
                      >
                        <div
                          style={{
                            fontSize: 14,
                            fontWeight: 700,
                            color: "#0D2B5A",
                          }}
                        >
                          {client.name}
                        </div>
                        <div
                          style={{
                            fontSize: 12,
                            color: "#1A5EA8",
                            fontWeight: 600,
                            marginTop: 2,
                          }}
                        >
                          {client.standards}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p
                    style={{
                      fontSize: 14,
                      color: "#8892B0",
                      fontStyle: "italic",
                      margin: 0,
                    }}
                  >
                    Custom confidential assignments delivered in this vertical
                    amongst many more.
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. Enterprise Client Logo Grid (Top 8 + See More Toggle) ── */}
      <section
        style={{
          background: "#F8FAFC",
          borderBottom: "1px solid #E2E8F0",
          padding: "56px 40px",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <p
            style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "1.5px",
              color: "#8892B0",
              textTransform: "uppercase",
              marginBottom: 36,
            }}
          >
            Trusted by Industry Leaders & Global Enterprises
          </p>

          {/* Logo Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 20,
              marginBottom: showAllClients ? 16 : 32,
            }}
          >
            {displayedClients.map((client, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                style={{
                  background: "#ffffff",
                  border: "1px solid #D1DCE8",
                  borderRadius: 12,
                  padding: "24px 20px",
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  boxShadow: "0 2px 10px rgba(13,43,90,0.02)",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#1A5EA8";
                  e.currentTarget.style.boxShadow =
                    "0 6px 20px rgba(26,94,168,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#D1DCE8";
                  e.currentTarget.style.boxShadow =
                    "0 2px 10px rgba(13,43,90,0.02)";
                }}
              >
                {/* Monogram Badge Logo */}
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    background: "#0D2B5A",
                    color: "#64FFDA",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    fontSize: 13,
                    flexShrink: 0,
                  }}
                >
                  {client.code}
                </div>
                <div style={{ textAlign: "left", overflow: "hidden" }}>
                  <h4
                    style={{
                      fontSize: 15,
                      fontWeight: 700,
                      color: "#0D2B5A",
                      margin: "0 0 2px 0",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {client.name}
                  </h4>
                  <span
                    style={{ fontSize: 11, fontWeight: 600, color: "#8892B0" }}
                  >
                    {client.sector}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Subtext shown only when expanded */}
          {showAllClients && (
            <p
              style={{
                fontSize: 20,
                color: "#64748B",
                fontStyle: "italic",
                marginBottom: 24,
              }}
            >
              * Showing representative key enterprises amongst our extensive
              portfolio of engagements.
            </p>
          )}

          {/* See More / See Less Button */}
          {clients.length > 8 && (
            <button
              onClick={() => setShowAllClients(!showAllClients)}
              style={{
                background: "transparent",
                color: "#1A5EA8",
                border: "1.5px solid #1A5EA8",
                padding: "12px 28px",
                fontSize: 14,
                fontWeight: 700,
                borderRadius: 8,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#EEF4FF";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              {showAllClients ? (
                <>
                  Show Less Companies <ChevronUp size={16} />
                </>
              ) : (
                <>
                  See More Companies <ChevronDown size={16} />
                </>
              )}
            </button>
          )}
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
