import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { Hero } from "./components/pages/Hero";
import { ChooseYourPath } from "./components/pages/ChooseYourPath";
import { WhyIdatum } from "./components/pages/WhyIdatum";
import { AboutUs } from "./components/pages/AboutUs";
import { ServicesIntro } from "./components/pages/ServicesIntro"; // Renamed from QAIntro
import { PartnerVsVendor } from "./components/pages/PartnerVsVendor";
import { ServicesTimeline } from "./components/pages/ServicesTimeline"; // Renamed from QATimeline
import { ProcessBuilt } from "./components/pages/ProcessBuilt";
import { WhyChooseServices } from "./components/pages/WhyChooseServices"; // Renamed from WhyChooseQA
import { AcademyIntro } from "./components/pages/AcademyIntro";
import { HowWeTrain } from "./components/pages/HowWeTrain";
import { TrainingTracks } from "./components/pages/TrainingTracks";
import { BrowseAllCourses } from "./components/pages/BrowseAllCourses";
import { POSHCourseDetail } from "./components/pages/POSHCourseDetail";
import { Contact } from "./components/pages/Contact";
import { PartnerIntro } from "./components/pages/PartnerIntro";
import { WhyPartner } from "./components/pages/WhyPartner";
import { BecomePartner } from "./components/pages/BecomePartner";
import { TrainerOnboarding } from "./components/pages/TrainerOnboarding";
import { AuditorOnboarding } from "./components/pages/AuditorOnboarding";

type Page =
  | "hero"
  | "choose"
  | "why-idatum"
  | "about-us" // Added
  | "services-intro" // Replaced qa-intro
  | "syscomply-intro" // Added
  | "partner-vs-vendor"
  | "services-timeline" // Replaced qa-timeline
  | "process-built"
  | "why-choose-services" // Replaced why-choose-qa
  | "academy-intro"
  | "how-we-train"
  | "training-tracks"
  | "browse-courses"
  | "posh-detail"
  | "contact"
  | "partner-intro"
  | "why-partner"
  | "become-partner"
  | "trainer-onboarding"
  | "auditor-onboarding";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("hero");
  const [navState, setNavState] = useState<Record<string, string>>({});

  const navigate = (page: string, state?: Record<string, string>) => {
    setCurrentPage(page as Page);
    setNavState(state || {});
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Pages that don't show footer (none in this case)
  const showFooter = true;

  const renderPage = () => {
    switch (currentPage) {
      case "hero":
        return <Hero navigate={navigate} />;
      case "choose":
        return <ChooseYourPath navigate={navigate} />;
      case "why-idatum":
        return <WhyIdatum navigate={navigate} />;
      case "about-us":
        return <AboutUs navigate={navigate} />;
      case "services-intro":
        return <ServicesIntro navigate={navigate} />;
      case "syscomply-intro":
        return (
          <div
            style={{
              padding: "120px 40px",
              textAlign: "center",
              minHeight: "60vh",
            }}
          >
            <h2 style={{ fontSize: 32, color: "#15335A" }}>
              Syscomply Overview
            </h2>
            <p style={{ color: "#4A6080", marginTop: 16 }}>Coming Soon...</p>
          </div>
        );
      case "partner-vs-vendor":
        return <PartnerVsVendor navigate={navigate} />;
      case "services-timeline":
        return <ServicesTimeline navigate={navigate} />;
      case "process-built":
        return <ProcessBuilt navigate={navigate} />;
      case "why-choose-services":
        return <WhyChooseServices navigate={navigate} />;
      case "academy-intro":
        return <AcademyIntro navigate={navigate} />;
      case "how-we-train":
        return <HowWeTrain navigate={navigate} />;
      case "training-tracks":
        return <TrainingTracks navigate={navigate} />;
      case "browse-courses":
        return (
          <BrowseAllCourses
            navigate={navigate}
            defaultTrack={navState.defaultTrack}
          />
        );
      case "posh-detail":
        return <POSHCourseDetail navigate={navigate} />;
      case "contact":
        return <Contact navigate={navigate} />;
      case "partner-intro":
        return <PartnerIntro navigate={navigate} />;
      case "why-partner":
        return <WhyPartner navigate={navigate} />;
      case "become-partner":
        return <BecomePartner navigate={navigate} />;
      case "trainer-onboarding":
        return <TrainerOnboarding navigate={navigate} />;
      case "auditor-onboarding":
        return <AuditorOnboarding navigate={navigate} />;
      default:
        return <Hero navigate={navigate} />;
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "#fff",
        fontFamily: "var(--font-sans)",
      }}
    >
      <Nav navigate={navigate} current={currentPage} />
      <main style={{ flex: 1 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeInOut" }}
            style={{ width: "100%" }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Contextual bottom nav — only on active flow pages */}
      {[
        "services-intro",
        "partner-vs-vendor",
        "services-timeline",
        "process-built",
        "why-choose-services",
        "academy-intro",
        "how-we-train",
        "training-tracks",
        "browse-courses",
        "posh-detail",
        "partner-intro",
        "why-partner",
        "become-partner",
        "trainer-onboarding",
        "auditor-onboarding",
        "choose",
      ].includes(currentPage) && (
        <div
          style={{
            background: "#F1F5FA",
            borderTop: "1px solid #D1DCE8",
            padding: "12px 40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            flexWrap: "wrap",
          }}
        >
          {currentPage === "choose" && (
            <span
              style={{
                fontSize: 13,
                color: "#4A6080",
                alignSelf: "center",
              }}
            >
              Not sure which path?{" "}
              <button
                onClick={() => navigate("contact")}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#1A5EA8",
                  fontWeight: 600,
                  fontSize: 13,
                  padding: 0,
                  fontFamily: "var(--font-sans)",
                }}
              >
                Talk to our team →
              </button>
            </span>
          )}

          {/* Services Hub Bottom Nav */}
          {[
            "services-intro",
            "partner-vs-vendor",
            "services-timeline",
            "process-built",
            "why-choose-services",
          ].includes(currentPage) && (
            <>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: "#9BB5D4",
                  textTransform: "uppercase",
                  letterSpacing: "0.8px",
                  alignSelf: "center",
                  marginRight: 4,
                }}
              >
                You're exploring:
              </span>
              {[
                { label: "Services Overview", page: "services-intro" },
                {
                  label: "Partner vs Vendor",
                  page: "partner-vs-vendor",
                },
                { label: "Timeline", page: "services-timeline" },
                { label: "Our Process", page: "process-built" },
                {
                  label: "Why Choose Us",
                  page: "why-choose-services",
                },
              ].map((item) => (
                <button
                  key={item.page}
                  onClick={() => navigate(item.page)}
                  style={{
                    background: currentPage === item.page ? "#0D2B5A" : "#fff",
                    color: currentPage === item.page ? "#fff" : "#4A6080",
                    border: "1px solid",
                    borderColor:
                      currentPage === item.page ? "#0D2B5A" : "#D1DCE8",
                    cursor: "pointer",
                    padding: "6px 14px",
                    fontSize: 12,
                    fontWeight: 600,
                    borderRadius: 20,
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  {item.label}
                </button>
              ))}
            </>
          )}

          {/* Academy Hub Bottom Nav */}
          {[
            "academy-intro",
            "how-we-train",
            "training-tracks",
            "browse-courses",
            "posh-detail",
          ].includes(currentPage) && (
            <>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: "#9BB5D4",
                  textTransform: "uppercase",
                  letterSpacing: "0.8px",
                  alignSelf: "center",
                  marginRight: 4,
                }}
              >
                You're exploring:
              </span>
              {[
                { label: "Overview", page: "academy-intro" },
                { label: "How We Train", page: "how-we-train" },
                { label: "Tracks", page: "training-tracks" },
                {
                  label: "All Courses",
                  page: "browse-courses",
                },
              ].map((item) => (
                <button
                  key={item.page}
                  onClick={() => navigate(item.page)}
                  style={{
                    background: currentPage === item.page ? "#0D2B5A" : "#fff",
                    color: currentPage === item.page ? "#fff" : "#4A6080",
                    border: "1px solid",
                    borderColor:
                      currentPage === item.page ? "#0D2B5A" : "#D1DCE8",
                    cursor: "pointer",
                    padding: "6px 14px",
                    fontSize: 12,
                    fontWeight: 600,
                    borderRadius: 20,
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  {item.label}
                </button>
              ))}
            </>
          )}

          {/* Partner Hub Bottom Nav */}
          {[
            "partner-intro",
            "why-partner",
            "become-partner",
            "trainer-onboarding",
            "auditor-onboarding",
          ].includes(currentPage) && (
            <>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: "#9BB5D4",
                  textTransform: "uppercase",
                  letterSpacing: "0.8px",
                  alignSelf: "center",
                  marginRight: 4,
                }}
              >
                You're exploring:
              </span>
              {[
                { label: "Overview", page: "partner-intro" },
                { label: "Why Partner", page: "why-partner" },
                { label: "Apply", page: "become-partner" },
                {
                  label: "Trainer Onboarding",
                  page: "trainer-onboarding",
                },
                {
                  label: "Auditor Onboarding",
                  page: "auditor-onboarding",
                },
              ].map((item) => (
                <button
                  key={item.page}
                  onClick={() => navigate(item.page)}
                  style={{
                    background: currentPage === item.page ? "#0D2B5A" : "#fff",
                    color: currentPage === item.page ? "#fff" : "#4A6080",
                    border: "1px solid",
                    borderColor:
                      currentPage === item.page ? "#0D2B5A" : "#D1DCE8",
                    cursor: "pointer",
                    padding: "6px 14px",
                    fontSize: 12,
                    fontWeight: 600,
                    borderRadius: 20,
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  {item.label}
                </button>
              ))}
            </>
          )}
        </div>
      )}

      {showFooter && <Footer navigate={navigate} />}
    </div>
  );
}
