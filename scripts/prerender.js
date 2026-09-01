// scripts/prerender.js
import { chromium } from "playwright";
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createServer } from "http";
import handler from "serve-handler";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.resolve(__dirname, "../dist");
const PORT = 5050;

const ROUTES = [
  {
    hash: "",
    folder: "",
    title: "Idatum | Enterprise Compliance, Auditing & Professional Training",
    description:
      "Idatum delivers practitioner-led compliance services, software solutions with Syscomply, and accredited certification training across ISO, SOC 2, POSH, and ITGC.",
  },
  {
    hash: "choose",
    folder: "explore",
    title: "Idatum | Explore Our Services",
    description:
      "Choose your path: compliance services, training academy, or partner network.",
  },
  {
    hash: "why-idatum",
    folder: "why-idatum",
    title: "Idatum | Why Idatum",
    description:
      "What sets Idatum apart in enterprise compliance and training.",
  },
  {
    hash: "about-us",
    folder: "about-us",
    title: "Idatum | About Us",
    description:
      "Learn about Idatum's mission in enterprise compliance and professional training.",
  },
  {
    hash: "services-intro",
    folder: "services",
    title: "Idatum | Services Overview",
    description:
      "Practitioner-led compliance services: ISO 27001, SOC 2, POSH, and ITGC audits.",
  },
  {
    hash: "partner-vs-vendor",
    folder: "services/partner-vs-vendor",
    title: "Idatum | Partner vs Vendor",
    description: "How Idatum works as a compliance partner, not just a vendor.",
  },
  {
    hash: "services-timeline",
    folder: "services/timeline",
    title: "Idatum | Implementation Timeline",
    description: "What to expect during a compliance engagement with Idatum.",
  },
  {
    hash: "process-built",
    folder: "services/process",
    title: "Idatum | Our Process",
    description: "Idatum's compliance implementation process.",
  },
  {
    hash: "why-choose-services",
    folder: "services/why-choose-us",
    title: "Idatum | Why Choose Our Services",
    description: "Why organizations choose Idatum for compliance.",
  },
  {
    hash: "syscomply-intro",
    folder: "syscomply",
    title: "Idatum | Syscomply Platform",
    description: "Syscomply: Idatum's compliance management software solution.",
  },
  {
    hash: "academy-intro",
    folder: "academy",
    title: "Idatum Academy | Overview",
    description:
      "Accredited compliance certification training programs from Idatum Academy.",
  },
  {
    hash: "how-we-train",
    folder: "academy/how-we-train",
    title: "Idatum Academy | Training Methodology",
    description: "Idatum's approach to compliance training.",
  },
  {
    hash: "training-tracks",
    folder: "academy/tracks",
    title: "Idatum Academy | Training Tracks",
    description: "Available training tracks at Idatum Academy.",
  },
  {
    hash: "browse-courses",
    folder: "academy/courses",
    title: "Idatum Academy | Browse All Courses",
    description: "All compliance training courses offered by Idatum.",
  },
  {
    hash: "posh-detail",
    folder: "academy/courses/posh",
    title: "Idatum Academy | POSH Compliance Course",
    description: "POSH (Prevention of Sexual Harassment) certification course.",
  },
  {
    hash: "partner-intro",
    folder: "partner",
    title: "Idatum Partner Network | Overview",
    description: "Join Idatum's network of compliance trainers and auditors.",
  },
  {
    hash: "why-partner",
    folder: "partner/why-partner",
    title: "Idatum Partner Network | Why Partner With Us",
    description: "Benefits of partnering with Idatum.",
  },
  {
    hash: "become-partner",
    folder: "partner/apply",
    title: "Idatum Partner Network | Partner Application",
    description: "Apply to become an Idatum partner.",
  },
  {
    hash: "trainer-onboarding",
    folder: "trainer-onboarding",
    title: "Idatum Partner Network | Trainer Onboarding",
    description: "Onboarding process for Idatum-accredited trainers.",
  },
  {
    hash: "auditor-onboarding",
    folder: "auditor-onboarding",
    title: "Idatum Partner Network | Auditor Onboarding",
    description: "Onboarding process for Idatum-accredited auditors.",
  },
  {
    hash: "contact",
    folder: "contact",
    title: "Idatum | Contact Us",
    description: "Get in touch with Idatum's compliance team.",
  },
];

function setMeta(html, { title, description, canonicalPath }) {
  const canonical = `https://idatumsystemstech.com${canonicalPath}`;
  let out = html
    .replace(/<title>.*?<\/title>/i, `<title>${title}</title>`)
    .replace(/(<meta\s+name="title"\s+content=")[^"]*(")/i, `$1${title}$2`)
    .replace(
      /(<meta\s+name="description"\s+content=")[^"]*(")/i,
      `$1${description}$2`,
    )
    .replace(
      /(<meta\s+property="og:title"\s+content=")[^"]*(")/i,
      `$1${title}$2`,
    )
    .replace(
      /(<meta\s+property="og:description"\s+content=")[^"]*(")/i,
      `$1${description}$2`,
    )
    .replace(
      /(<meta\s+property="og:url"\s+content=")[^"]*(")/i,
      `$1${canonical}$2`,
    )
    .replace(
      /(<meta\s+property="twitter:title"\s+content=")[^"]*(")/i,
      `$1${title}$2`,
    )
    .replace(
      /(<meta\s+property="twitter:description"\s+content=")[^"]*(")/i,
      `$1${description}$2`,
    )
    .replace(
      /(<meta\s+property="twitter:url"\s+content=")[^"]*(")/i,
      `$1${canonical}$2`,
    )
    .replace(/(<link\s+rel="canonical"\s+href=")[^"]*(")/i, `$1${canonical}$2`);
  return out;
}

async function main() {
  const indexPath = path.join(DIST_DIR, "index.html");
  try {
    readFileSync(indexPath);
  } catch {
    console.error("dist/index.html not found — run `vite build` first.");
    process.exit(1);
  }

  const server = createServer((req, res) =>
    handler(req, res, { public: DIST_DIR }),
  );
  await new Promise((resolve) => server.listen(PORT, resolve));

  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Disable CSS animations globally for the crawler so content snaps in instantly
  await page.addInitScript(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      * {
        transition: none !important;
        animation: none !important;
      }
    `;
    document.head.appendChild(style);
  });

  for (const route of ROUTES) {
    const url = `http://localhost:${PORT}/${route.hash ? "#" + route.hash : ""}`;
    console.log(`Rendering ${url} -> /${route.folder}`);

    // Wait until network is idle
    await page.goto(url, { waitUntil: "networkidle" });

    // EXPLICIT WAIT: Wait for the main `<main>` tag to have children, ensuring React is fully mounted
    await page.waitForFunction(
      () => {
        const main = document.querySelector("main");
        return main && main.innerHTML.trim().length > 100; // Ensures content has injected
      },
      { timeout: 10000 },
    );

    // Optional: Give Framer Motion 500ms to resolve any lingering layout shifts
    await page.waitForTimeout(500);

    let html = await page.content();
    html = setMeta(html, {
      title: route.title,
      description: route.description,
      canonicalPath: route.folder ? `/${route.folder}` : "/",
    });

    const outPath = route.folder
      ? path.join(DIST_DIR, route.folder, "index.html")
      : path.join(DIST_DIR, "index.html");

    mkdirSync(path.dirname(outPath), { recursive: true });
    writeFileSync(outPath, html, "utf-8");
    console.log(`  wrote ${outPath.replace(DIST_DIR, "dist")}`);
  }

  await browser.close();
  server.close();
  console.log(
    `\nDone. Rendered ${ROUTES.length} real pages with unique content + meta.`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
