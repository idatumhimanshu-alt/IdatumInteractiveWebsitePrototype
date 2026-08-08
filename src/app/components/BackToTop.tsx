import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      style={{
        position: "fixed",
        bottom: "32px",
        right: "32px",
        zIndex: 9999,
        background: "#0D2B5A",
        color: "#64FFDA",
        border: "1px solid #1A5EA8",
        borderRadius: "9999px",
        padding: "10px 18px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        cursor: "pointer",
        fontSize: "13px",
        fontWeight: 600,
        boxShadow: "0 6px 20px rgba(13,43,90,0.35)",
        transition: "all 0.2s ease",
        fontFamily: "var(--font-sans)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "#1A5EA8";
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 10px 25px rgba(26,94,168,0.4)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "#0D2B5A";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 6px 20px rgba(13,43,90,0.35)";
      }}
    >
      <ArrowUp size={16} strokeWidth={2.5} />
      <span>Back to Top</span>
    </button>
  );
}