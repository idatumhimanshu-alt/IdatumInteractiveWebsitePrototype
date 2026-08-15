import React, { useState, useEffect, ReactNode } from "react";

interface ResponsiveGridProps {
  children: ReactNode;
  minColWidth?: number;
  gap?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({
  children,
  minColWidth = 300,
  gap = 32,
  className,
  style = {},
}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={className}
      style={{
        display: "grid",
        gridTemplateColumns: isMobile
          ? "1fr"
          : `repeat(auto-fit, minmax(${minColWidth}px, 1fr))`,
        gap: `${gap}px`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
