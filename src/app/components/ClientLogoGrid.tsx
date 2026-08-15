import React, { useState } from 'react';

interface Client {
  name: string;
  code: string;
  sector: string;
  domain: string;
}

const clients: Client[] = [
  { name: "Bajaj Allianz", code: "BAL", sector: "Insurance", domain: "bajajallianz.com" },
  { name: "Syntys- Qatar", code: "SYN", sector: "Data Center", domain: "syntys.com" },
  { name: "VFS Global", code: "VFS", sector: "Global Services", domain: "vfsglobal.com" },
  { name: "HDFC (Internal development team)", code: "HDFC", sector: "Financial Services", domain: "hdfcbank.com" },
  { name: "Century Enka", code: "CE", sector: "Manufacturing", domain: "centuryenka.com" },
  { name: "L&T Finance", code: "LTF", sector: "Financial Services", domain: "ltf.com" },
  { name: "Bitwise Global", code: "BIT", sector: "Data & IT Services", domain: "bitwiseglobal.com" },
  { name: "Bond.ai (USA)", code: "BAI", sector: "AI & Technology", domain: "bond.ai" },
  { name: "IL&FS Education, Schoolnet India", code: "ILF", sector: "Education & Infrastructure", domain: "ilfseducation.com" },
  { name: "Wurth IT India", code: "WUR", sector: "IT Services", domain: "wurth-it.in" },
  { name: "Milliontech- Hongkong", code: "MIL", sector: "Technology", domain: "milliontech.com" },
  { name: "Tridiagonal.ai", code: "TRI", sector: "Simulation & Engineering", domain: "tridiagonal.ai" },
  { name: "VDA Infosolutions Pvt. Ltd.", code: "VDA", sector: "IT Solutions", domain: "vdainfosolutions.com" },
  { name: "Qorix India (KPIT Venture)", code: "QRX", sector: "Automotive Software", domain: "qorix.io" },
  { name: "AurionPro Solutions", code: "APS", sector: "Enterprise Software", domain: "aurionpro.com" },
  { name: "ISRC Otis", code: "OTI", sector: "Engineering", domain: "otis.com" },
  { name: "RePlus Engitech Pvt. Ltd", code: "REP", sector: "Energy & Tech", domain: "replusengitech.com" },
  { name: "Datametica Solutions Pvt. Ltd", code: "DAT", sector: "Data Analytics", domain: "datametica.com" },
  { name: "Wide Wings Pvt. Ltd.", code: "WWP", sector: "Media & Production", domain: "widewingsmedia.com" },
  { name: "tCognition Consultancy", code: "TCG", sector: "IT Consulting", domain: "tcognition.com" },
  { name: "Xpanxion International", code: "XPX", sector: "Software Solutions", domain: "xpanxion.com" },
  { name: "Opus Software", code: "OPS", sector: "Fintech Solutions", domain: "opussoftware.com" },
  { name: "Minda Stoneridge", code: "MSI", sector: "Automotive Components", domain: "mindastoneridge.com" }
];

export function ClientLogoGrid() {
  const [failedImages, setFailedImages] = useState<{ [key: string]: boolean }>({});

  const handleImageError = (code: string) => {
    setFailedImages(prev => ({ ...prev, [code]: true }));
  };

  return (
    <section style={{ padding: "80px 16px", background: "#f8fafc" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: "#1A5EA8", textTransform: "uppercase", letterSpacing: "1.5px" }}>
            Trusted Partnerships
          </span>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: "#0D2B5A", marginTop: 8 }}>
            Organizations We've Empowered
          </h2>
          <p style={{ fontSize: 15, color: "#475569", maxWidth: 600, margin: "12px auto 0" }}>
            Proudly delivering enterprise compliance, data solutions, and engineering excellence across global industries.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: 20
        }}>
          {clients.map((client) => {
            const hasFailed = failedImages[client.code];
            // Uses Clearbit logo API, falls back to Google high-res favicon if needed
            const logoUrl = `https://logo.clearbit.com/${client.domain}`;

            return (
              <div
                key={client.code}
                style={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: 12,
                  padding: 20,
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  boxShadow: "0 2px 4px rgba(0,0,0,0.02)",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(13,43,90,0.08)";
                  e.currentTarget.style.borderColor = "#1A5EA8";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 2px 4px rgba(0,0,0,0.02)";
                  e.currentTarget.style.borderColor = "#e2e8f0";
                }}
              >
                <div style={{
                  width: 48,
                  height: 48,
                  borderRadius: 10,
                  background: "#f1f5f9",
                  border: "1px solid #e2e8f0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  overflow: "hidden",
                  padding: 6
                }}>
                  {!hasFailed ? (
                    <img
                      src={logoUrl}
                      alt={`${client.name} logo`}
                      style={{ width: "100%", height: "100%", objectFit: "contain" }}
                      onError={() => handleImageError(client.code)}
                    />
                  ) : (
                    <span style={{ fontWeight: 700, fontSize: 13, color: "#0D2B5A" }}>
                      {client.code}
                    </span>
                  )}
                </div>
                <div style={{ overflow: "hidden" }}>
                  <h4 style={{ fontSize: 14, fontWeight: 700, color: "#0D2B5A", margin: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {client.name}
                  </h4>
                  <span style={{ fontSize: 12, color: "#64748b", display: "block", marginTop: 4 }}>
                    {client.sector}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
