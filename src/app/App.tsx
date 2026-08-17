import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { BackToTop } from "./components/BackToTop";
import { Hero } from "./components/pages/Hero";
import { ChooseYourPath } from "./components/pages/ChooseYourPath";
import { WhyIdatum } from "./components/pages/WhyIdatum";
import { AboutUs } from "./components/pages/AboutUs";
import { ServicesIntro } from "./components/pages/ServicesIntro";
import { SyscomplyIntro } from "./components/pages/SyscomplyIntro";
import { PartnerVsVendor } from "./components/pages/PartnerVsVendor";
import { ServicesTimeline } from "./components/pages/ServicesTimeline";
import { ProcessBuilt } from "./components/pages/ProcessBuilt";
import { WhyChooseServices } from "./components/pages/WhyChooseServices";
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
  | "about-us"
  | "services-intro"
  | "syscomply-intro"
  | "partner-vs-vendor"
  | "services-timeline"
  | "process-built"
  | "why-choose-services"
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

const VALID_PAGES: Page[] = [
  "hero",
  "choose",
  "why-idatum",
  "about-us",
  "services-intro",
  "syscomply-intro",
  "partner-vs-vendor",
  "services-timeline",
  "process-built",
  "why-choose-services",
  "academy-intro",
  "how-we-train",
  "training-tracks",
  "browse-courses",
  "posh-detail",
  "contact",
  "partner-intro",
  "why-partner",
  "become-partner",
  "trainer-onboarding",
  "auditor-onboarding",
];

const PAGE_TITLES: Record<Page, string> = {
  hero: "Idatum | Compliance",
  choose: "Idatum | Choose Your Path",
  "why-idatum": "Idatum | Why Idatum",
  "about-us": "Idatum | About Us",
  "services-intro": "Idatum | Services Overview",
  "syscomply-intro": "Idatum | Syscomply Platform",
  "partner-vs-vendor": "Idatum | Partner vs Vendor",
  "services-timeline": "Idatum | Implementation Timeline",
  "process-built": "Idatum | Our Process",
  "why-choose-services": "Idatum | Why Choose Our Services",
  "academy-intro": "Idatum Academy | Overview",
  "how-we-train": "Idatum Academy | Training Methodology",
  "training-tracks": "Idatum Academy | Training Tracks",
  "browse-courses": "Idatum Academy | Browse All Courses",
  "posh-detail": "Idatum Academy | POSH Compliance Course",
  contact: "Idatum | Contact Us",
  "partner-intro": "Idatum Partner Network | Overview",
  "why-partner": "Idatum Partner Network | Why Partner With Us",
  "become-partner": "Idatum Partner Network | Partner Application",
  "trainer-onboarding": "Idatum Partner Network | Trainer Onboarding",
  "auditor-onboarding": "Idatum Partner Network | Auditor Onboarding",
};

export default function App() {
  const getInitialPage = (): Page => {
    const hash = window.location.hash.replace("#", "");
    if (VALID_PAGES.includes(hash as Page)) {
      return hash as Page;
    }
    return "hero";
  };

  const [currentPage, setCurrentPage] = useState<Page>(getInitialPage);
  const [navState, setNavState] = useState<Record<string, string>>({});

  // Dynamic Browser Tab Titles Effect
  useEffect(() => {
    const title = PAGE_TITLES[currentPage] || "Idatum";
    document.title = title;
  }, [currentPage]);

  // Sync state with browser back/forward navigation & handle scroll position
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.replace("#", "");
      if (VALID_PAGES.includes(hash as Page)) {
        setCurrentPage(hash as Page);
      } else {
        setCurrentPage("hero");
      }
      // Smooth scroll to top on back/forward navigation
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (page: string, state?: Record<string, string>) => {
    const targetPage = (
      VALID_PAGES.includes(page as Page) ? page : "hero"
    ) as Page;
    setCurrentPage(targetPage);
    setNavState(state || {});

    // Push history state so the browser back button recognizes page changes
    window.history.pushState({ page: targetPage }, "", `#${targetPage}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
        return <SyscomplyIntro navigate={navigate} />;
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
        return (
          <BecomePartner
            navigate={navigate}
            defaultType={navState.defaultType}
          />
        );
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
        position: "relative",
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
                  color: "#1e3a8a",
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
                  color: "#1e3a8a",
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
                  color: "#1e3a8a",
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

      <BackToTop />
    </div>
  );
}
