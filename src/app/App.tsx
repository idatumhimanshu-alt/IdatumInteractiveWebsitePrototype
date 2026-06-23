import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { Hero } from "./components/pages/Hero";
import { ChooseYourPath } from "./components/pages/ChooseYourPath";
import { WhyIdatum } from "./components/pages/WhyIdatum";
import { QAIntro } from "./components/pages/QAIntro";
import { PartnerVsVendor } from "./components/pages/PartnerVsVendor";
import { QATimeline } from "./components/pages/QATimeline";
import { ProcessBuilt } from "./components/pages/ProcessBuilt";
import { WhyChooseQA } from "./components/pages/WhyChooseQA";
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
  | "qa-intro"
  | "partner-vs-vendor"
  | "qa-timeline"
  | "process-built"
  | "why-choose-qa"
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
  const [navState, setNavState] = useState<
    Record<string, string>
  >({});

  const navigate = (
    page: string,
    state?: Record<string, string>,
  ) => {
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
      case "qa-intro":
        return <QAIntro navigate={navigate} />;
      case "partner-vs-vendor":
        return <PartnerVsVendor navigate={navigate} />;
      case "qa-timeline":
        return <QATimeline navigate={navigate} />;
      case "process-built":
        return <ProcessBuilt navigate={navigate} />;
      case "why-choose-qa":
        return <WhyChooseQA navigate={navigate} />;
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
        "qa-intro",
        "partner-vs-vendor",
        "qa-timeline",
        "process-built",
        "why-choose-qa",
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
          {[
            "qa-intro",
            "partner-vs-vendor",
            "qa-timeline",
            "process-built",
            "why-choose-qa",
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
                { label: "QA Overview", page: "qa-intro" },
                {
                  label: "Partner vs Vendor",
                  page: "partner-vs-vendor",
                },
                { label: "Timeline", page: "qa-timeline" },
                { label: "Our Process", page: "process-built" },
                {
                  label: "Why Choose Us",
                  page: "why-choose-qa",
                },
              ].map((item) => (
                <button
                  key={item.page}
                  onClick={() => navigate(item.page)}
                  style={{
                    background:
                      currentPage === item.page
                        ? "#0D2B5A"
                        : "#fff",
                    color:
                      currentPage === item.page
                        ? "#fff"
                        : "#4A6080",
                    border: "1px solid",
                    borderColor:
                      currentPage === item.page
                        ? "#0D2B5A"
                        : "#D1DCE8",
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
                    background:
                      currentPage === item.page
                        ? "#0D2B5A"
                        : "#fff",
                    color:
                      currentPage === item.page
                        ? "#fff"
                        : "#4A6080",
                    border: "1px solid",
                    borderColor:
                      currentPage === item.page
                        ? "#0D2B5A"
                        : "#D1DCE8",
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
                    background:
                      currentPage === item.page
                        ? "#0D2B5A"
                        : "#fff",
                    color:
                      currentPage === item.page
                        ? "#fff"
                        : "#4A6080",
                    border: "1px solid",
                    borderColor:
                      currentPage === item.page
                        ? "#0D2B5A"
                        : "#D1DCE8",
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