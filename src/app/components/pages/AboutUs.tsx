import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Target,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
  Building2,
  Cpu,
  Factory,
  Server,
  Landmark,
  HeartPulse,
  ShieldAlert,
  Radio,
  CheckCircle2,
  GraduationCap,
  Users,
  Plane,
  LucideIcon,
} from "lucide-react";

type Page = string;
interface Props {
  navigate: (page: Page, state?: Record<string, string>) => void;
}

interface Panel {
  id: string;
  badge: string;
  title: string;
  description: string;
  bullets: string[];
  icon: LucideIcon;
  bg: string;
  color: string;
  badgeColor: string;
  iconBg: string;
  iconColor: string;
  border: string;
  descColor: string;
  bulletColor: string;
}

interface Industry {
  name: string;
  icon: React.ReactElement;
  challenges: string;
  standards: string[];
  approach: string;
  deliverables: string[];
}

const panels: Panel[] = [
  {
    id: "philosophy",
    badge: "WHO WE ARE",
    title: "Partners in Your Improvement Journey.",
    description:
      "We are more than just consultants; we are your trustworthy partners dedicated to organizational excellence. As corporate compliance facilitators, we embed ourselves into your processes to ensure robust quality and security compliance.",
    bullets: [
      "Quality and Security Compliance Partners",
      "Corporate Compliance Facilitators",
      "Building solutions that hold up under real audit conditions",
    ],
    icon: Target,
    bg: "radial-gradient(circle at 100% 100%, rgba(100,255,218,0.15) 0%, transparent 60%), linear-gradient(135deg, #0D2B5A 0%, #1A4A8A 100%)",
    color: "#fff",
    badgeColor: "#64FFDA",
    iconBg: "rgba(255,255,255,0.1)",
    iconColor: "#64FFDA",
    border: "none",
    descColor: "#C5D8EE",
    bulletColor: "#fff",
  },
  {
    id: "legacy",
    badge: "OUR LEGACY & EXPERTISE",
    title: "100+ Years of Combined Industry Experience.",
    description:
      "Our team brings together over 100 years of hands-on experience in consultancy and training. We are comprised of lead auditors, CMMI assessment team members, and former compliance executives from various companies across diverse industries.",
    bullets: [
      "Trustworthy partners with more than 50 years of experience",
      "Lead auditors and CMMI assessment team members",
      "Compliance executives for various companies across industries",
    ],
    icon: TrendingUp,
    bg: "radial-gradient(circle at 100% 100%, rgba(26,94,168,0.08) 0%, transparent 60%), #ffffff",
    color: "#0D2B5A",
    badgeColor: "#1A5EA8",
    iconBg: "#F1F5FA",
    iconColor: "#1A5EA8",
    border: "1px solid #D1DCE8",
    descColor: "#4A6080",
    bulletColor: "#1E293B",
  },
];

const industries: Industry[] = [
  {
    name: "Automotive",
    icon: <Cpu size={22} color="#1A5EA8" />,
    challenges:
      "Stringent supply chain security requirements, complex multi-tier vendor oversight, and zero-tolerance for operational downtime.",
    standards: ["TISAX", "IATF 16949", "ISO 9001"],
    approach:
      "End-to-end audit preparation, TISAX assessment alignment, and robust second-party supplier evaluation frameworks.",
    deliverables: [
      "TISAX Assessment Readiness Report",
      "Supply Chain Risk Matrix",
      "Quality Management Manuals",
    ],
  },
  {
    name: "Manufacturing",
    icon: <Factory size={22} color="#1A5EA8" />,
    challenges:
      "Integrating operational technology (OT) with IT security, maintaining environmental compliance, and ensuring worker safety standards.",
    standards: ["ISO 9001", "ISO 14001", "ISO 45001"],
    approach:
      "Process mapping across shop floors, environmental impact audits, and rigorous documentation design for shop-floor SOPs.",
    deliverables: [
      "Environmental Management Systems",
      "Safety Protocol Manuals",
      "Process Optimization Audits",
    ],
  },
  {
    name: "Software Development",
    icon: <Building2 size={22} color="#1A5EA8" />,
    challenges:
      "Protecting proprietary source code, managing cloud infrastructure security, and meeting international data privacy regulations.",
    standards: ["ISO 27001:2022", "SOC 2 Type II", "GDPR"],
    approach:
      "Implementing robust Information Security Management Systems (ISMS), conducting gap analyses, and preparing dev teams for rigorous type-2 audits.",
    deliverables: [
      "ISMS Policy Framework",
      "Access Control SOPs",
      "Mock Internal Audit Reports",
    ],
  },
  {
    name: "Engineering Services",
    icon: <ShieldAlert size={22} color="#1A5EA8" />,
    challenges:
      "Safeguarding confidential design blueprints, client intellectual property, and multi-location engineering collaboration security.",
    standards: ["ISO 27001", "ISO 9001"],
    approach:
      "Structured asset classification, rigorous access controls, and tailored secure engineering workflow documentation.",
    deliverables: [
      "IP Protection Protocols",
      "Risk Assessment Registry",
      "Employee Security Awareness Framework",
    ],
  },
  {
    name: "Data Centers",
    icon: <Server size={22} color="#1A5EA8" />,
    challenges:
      "Maintaining 24/7 physical and digital uptime, strict capacity planning, facility environmental governance, and robust disaster recovery.",
    standards: ["ISO 27001", "ISO 22301", "ISO 9k / 14k / 45k"],
    approach:
      "Specialized facility readiness assessments, governance policy creation, and comprehensive business continuity planning.",
    deliverables: [
      "Data Center Operations SOPs",
      "Disaster Recovery Frameworks",
      "Facility Compliance Checklists",
    ],
  },
  {
    name: "Banking & Financial Services",
    icon: <Landmark size={22} color="#1A5EA8" />,
    challenges:
      "Meeting stringent regulatory compliance mandates, securing sensitive consumer financial data, and managing third-party vendor risks.",
    standards: ["PCI DSS", "ISO 27001", "GDPR"],
    approach:
      "Comprehensive data flow mapping, strict access governance, and continuous regulatory alignment audits.",
    deliverables: [
      "Data Protection Impact Assessments",
      "Vendor Risk Governance Model",
      "Security Compliance Reviews",
    ],
  },
  {
    name: "Healthcare",
    icon: <HeartPulse size={22} color="#1A5EA8" />,
    challenges:
      "Safeguarding electronic protected health information (ePHI), patient confidentiality, and medical device data integrity.",
    standards: ["HIPAA", "ISO 27701", "ISO 13485"],
    approach:
      "Privacy management system implementation, administrative safeguard reviews, and workforce HIPAA awareness training.",
    deliverables: [
      "HIPAA Compliance Roadmap",
      "Privacy Impact Assessments",
      "Staff Training Records",
    ],
  },
  {
    name: "Government",
    icon: <Building2 size={22} color="#1A5EA8" />,
    challenges:
      "Adhering to public sector cybersecurity mandates, citizen data sovereignty, and multi-agency accountability frameworks.",
    standards: ["ISO 27001", "ISO 22301"],
    approach:
      "Rigorous public-sector compliance audits, structured governance frameworks, and continuous risk monitoring.",
    deliverables: [
      "Public Sector Compliance Audit",
      "Continuity & Resilience Plans",
    ],
  },
  {
    name: "Telecom",
    icon: <Radio size={22} color="#1A5EA8" />,
    challenges:
      "Securing massive network infrastructure, managing core routing security, and complying with national telecommunications regulations.",
    standards: ["ISO 27001", "ISO 27701", "ISO 22301"],
    approach:
      "Infrastructure vulnerability assessment, telecom-specific risk frameworks, and business continuity synchronization.",
    deliverables: ["Network Security Policy", "Incident Response Playbooks"],
  },
  {
    name: "Aerospace, Drone & Defense Tech",
    icon: <Plane size={22} color="#1A5EA8" />,
    challenges:
      "High-precision quality standards, defense-grade data security, and complex manufacturing traceability.",
    standards: ["AS9100", "ISO 27001", "ISO 9001"],
    approach:
      "Rigorous AS9100 quality integration, drone supply chain security, and design protection frameworks.",
    deliverables: [
      "AS9100 Compliance Audit",
      "Manufacturing Traceability Report",
      "Defense Data Security Plan",
    ],
  },
  {
    name: "Education",
    icon: <GraduationCap size={22} color="#1A5EA8" />,
    challenges:
      "Securing student and institutional data, multi-campus administrative compliance, managing accreditation timelines, and academic record integrity.",
    standards: ["NAAC", "NBA", "ISO 27001", "ISO 9001"],
    approach:
      "Data governance modeling, student privacy frameworks, accreditation roadmap preparation, and academic quality assurance audits.",
    deliverables: [
      "NAAC Accreditation Readiness Report",
      "Data Governance Policy",
      "Academic Quality Manual",
      "Campus Security Audit",
    ],
  },
  {
    name: "Human Resource Providers",
    icon: <Users size={22} color="#1A5EA8" />,
    challenges:
      "Handling sensitive employee PII at scale, labor law compliance, and secure cloud-based data storage.",
    standards: ["ISO 27001", "ISO 27701", "GDPR"],
    approach:
      "Privacy impact assessments, secure HR workflow mapping, and employee data lifecycle auditing.",
    deliverables: [
      "PII Protection Protocol",
      "HR Compliance Framework",
      "Data Privacy Audit Report",
    ],
  },
];

export function AboutUs({ navigate }: Props) {
  const [hovered, setHovered] = useState<number>(0);
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div
      style={{
        fontFamily: "var(--font-sans)",
        paddingTop: 64,
        background: "#F8FAFC",
        overflowX: "hidden",
      }}
    >
      {/* Header Section */}
      <section style={{ textAlign: "center", padding: "60px 16px 40px" }}>
        <span
          style={{
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "1px",
            color: "#1A5EA8",
            textTransform: "uppercase",
            background: "rgba(26,94,168,0.1)",
            padding: "6px 16px",
            borderRadius: 999,
          }}
        >
          About Us
        </span>
        <h1
          style={{
            fontSize: isMobile ? 32 : 44,
            fontWeight: 800,
            color: "#0D2B5A",
            marginTop: 20,
            marginBottom: 20,
            letterSpacing: "-0.8px",
          }}
        >
          A Partner Committed to Your Future
        </h1>

        <p
          style={{
            maxWidth: 800,
            margin: "0 auto",
            fontSize: isMobile ? 15 : 18,
            color: "#4A6080",
            lineHeight: 1.7,
            fontWeight: 400,
            padding: "0 8px",
          }}
        >
          Established in 2010, We, at Idatum Researchers and Consultants,
          provide quality consulting services to our esteemed customers. Our
          team includes Corporate Compliance Facilitators, Partners in your
          improvement journey, ISO Lead Auditors and CMMI Assessment Team
          Members. The cumulative experience of our team counts for 100+ years
          ensuring the best expertise for our clients.
        </p>
      </section>

      {/* Expandable Info Cards Section */}
      <section
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: isMobile ? "0 16px 50px" : "0 40px 80px",
          display: "flex",
          gap: 20,
          flexWrap: "wrap",
        }}
      >
        {panels.map((panel, index) => {
          // On mobile, keep both panels fully expanded by default for readability
          const isActive = isMobile ? true : hovered === index;
          const IconComponent = panel.icon;

          return (
            <motion.div
              key={panel.id}
              layout
              onMouseEnter={() => !isMobile && setHovered(index)}
              onClick={() => setHovered(index)}
              style={{
                flex: isMobile ? "1 1 100%" : isActive ? 2.5 : 1,
                width: "100%",
                background: panel.bg,
                color: panel.color,
                border: panel.border,
                borderRadius: 20,
                padding: isMobile ? 24 : 40,
                cursor: "pointer",
                overflow: "hidden",
                position: "relative",
                boxShadow: "0 8px 24px rgba(13,43,90,0.06)",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 12,
                    background: panel.iconBg,
                    color: panel.iconColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 24,
                  }}
                >
                  <IconComponent size={28} strokeWidth={1.5} />
                </div>

                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    color: panel.badgeColor,
                    marginBottom: 12,
                  }}
                >
                  {panel.badge}
                </span>

                <h2
                  style={{
                    fontSize: isMobile ? 24 : 32,
                    fontWeight: 700,
                    lineHeight: 1.2,
                    marginBottom: 20,
                  }}
                >
                  {panel.title}
                </h2>

                <div>
                  <p
                    style={{
                      fontSize: isMobile ? 15 : 17,
                      lineHeight: 1.7,
                      color: panel.descColor,
                      marginBottom: 24,
                      width: "100%",
                    }}
                  >
                    {panel.description}
                  </p>
                  <ul
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 12,
                      padding: 0,
                      margin: 0,
                      listStyle: "none",
                    }}
                  >
                    {panel.bullets.map((b, i) => (
                      <li
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 10,
                          fontSize: isMobile ? 14 : 15,
                          fontWeight: 500,
                          color: panel.bulletColor,
                        }}
                      >
                        <ShieldCheck
                          size={18}
                          style={{
                            flexShrink: 0,
                            marginTop: 2,
                            color: panel.iconColor,
                          }}
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {!isMobile && !isActive && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    style={{
                      marginTop: 24,
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      fontSize: 12,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      color: panel.badgeColor,
                    }}
                  >
                    <span>Hover to explore</span>
                    <ArrowRight size={16} />
                  </motion.div>
                )}
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* Industries Section */}
      <section
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: isMobile ? "0 16px 60px" : "0 40px 80px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <h2
            style={{
              fontSize: isMobile ? 26 : 34,
              fontWeight: 700,
              color: "#0D2B5A",
              marginBottom: 10,
            }}
          >
            Explore By Industry
          </h2>
          <p
            style={{
              fontSize: isMobile ? 14 : 16,
              color: "#4A6080",
              padding: "0 8px",
            }}
          >
            Select an industry sector below to review specific business
            challenges and applicable standards.
          </p>
        </div>

        {/* Industry Pill Buttons */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 8,
            marginBottom: 32,
          }}
        >
          {industries.map((ind, idx) => {
            const isActive = activeIndustry === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveIndustry(idx)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "10px 16px",
                  borderRadius: 30,
                  background: isActive ? "#1A5EA8" : "#ffffff",
                  color: isActive ? "#ffffff" : "#0D2B5A",
                  border: "1px solid #D1DCE8",
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                  boxShadow: isActive
                    ? "0 4px 14px rgba(26,94,168,0.3)"
                    : "0 2px 6px rgba(0,0,0,0.02)",
                  transition: "all 0.2s ease",
                }}
              >
                {React.cloneElement(ind.icon, {
                  color: isActive ? "#ffffff" : "#1A5EA8",
                  size: 18,
                })}
                {ind.name}
              </button>
            );
          })}
        </div>

        {/* Active Industry Detail Card */}
        <motion.div
          key={activeIndustry}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            background: "#ffffff",
            borderRadius: 16,
            border: "1px solid #D1DCE8",
            padding: isMobile ? 24 : 48,
            boxShadow: "0 10px 30px rgba(13,43,90,0.04)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginBottom: 20,
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                background: "#EEF4FF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              {React.cloneElement(industries[activeIndustry].icon, {
                color: "#1A5EA8",
                size: 24,
              })}
            </div>
            <div>
              <h3
                style={{
                  fontSize: isMobile ? 20 : 24,
                  fontWeight: 800,
                  color: "#0D2B5A",
                  margin: 0,
                }}
              >
                {industries[activeIndustry].name} Sector
              </h3>
              <p
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#1A5EA8",
                  margin: "4px 0 0",
                  wordBreak: "break-word",
                }}
              >
                Applicable Standards:{" "}
                {industries[activeIndustry].standards.join(" • ")}
              </p>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 24,
              marginTop: 24,
            }}
          >
            <div
              style={{
                background: "#F8FAFC",
                padding: 20,
                borderRadius: 12,
                borderLeft: "4px solid #1A5EA8",
              }}
            >
              <h3
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#0D2B5A",
                  textTransform: "uppercase",
                  marginBottom: 8,
                  letterSpacing: "0.5px",
                }}
              >
                Business Challenges
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: "#4A6080",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {industries[activeIndustry].challenges}
              </p>
            </div>

            <div
              style={{
                background: "#F8FAFC",
                padding: 20,
                borderRadius: 12,
                borderLeft: "4px solid #0D6B4E",
              }}
            >
              <h3
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#0D2B5A",
                  textTransform: "uppercase",
                  marginBottom: 8,
                  letterSpacing: "0.5px",
                }}
              >
                Our Approach & Deliverables
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: "#4A6080",
                  lineHeight: 1.6,
                  margin: "0 0 12px 0",
                }}
              >
                {industries[activeIndustry].approach}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {industries[activeIndustry].deliverables.map((del, i) => (
                  <div
                    key={i}
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: "#0D6B4E",
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <CheckCircle2 size={14} style={{ flexShrink: 0 }} />{" "}
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
