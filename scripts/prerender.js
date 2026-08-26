// scripts/prerender.js
// Real prerendering: launches a headless browser, visits each hash-route,
// waits for React to render, and writes the ACTUAL resulting HTML into
// its matching real-URL folder. Replaces the old version, which just
// copied the empty index.html shell into every folder.
//
// Wired into package.json already: "build": "vite build && node scripts/prerender.js"
// Requires (one-time): npm install -D playwright && npx playwright install-deps chromium && npx playwright install chromium

import { chromium } from "playwright";
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createServer } from "http";
import handler from "serve-handler";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.resolve(__dirname, "../dist");
const PORT = 5050;

// hash -> real folder name (matches your existing dist/ structure) + meta.
// "" (empty hash) = homepage, written to dist/index.html directly.
const ROUTES = [
  {
    hash: "",
    folder: "",
    title: "Idatum | Enterprise Compliance, Auditing & Professional Training",
    description:
      "Idatum delivers practitioner-led compliance services, software solutions with Syscomply, and accredited certification training across ISO, SOC 2, POSH, and ITGC.",
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
    hash: "academy-intro",
    folder: "academy",
    title: "Idatum Academy | Overview",
    description:
      "Accredited compliance certification training programs from Idatum Academy.",
  },
  {
    hash: "syscomply-intro",
    folder: "syscomply",
    title: "Idatum | Syscomply Platform",
    description: "Syscomply: Idatum's compliance management software solution.",
  },
  {
    hash: "contact",
    folder: "contact",
    title: "Idatum | Contact Us",
    description: "Get in touch with Idatum's compliance team.",
  },
  {
    hash: "partner-intro",
    folder: "partner",
    title: "Idatum Partner Network | Overview",
    description: "Join Idatum's network of compliance trainers and auditors.",
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

  // Serve dist/ locally so the browser has something real to load.
  const server = createServer((req, res) =>
    handler(req, res, { public: DIST_DIR }),
  );
  await new Promise((resolve) => server.listen(PORT, resolve));

  const browser = await chromium.launch();
  const page = await browser.newPage();

  for (const route of ROUTES) {
    const url = `http://localhost:${PORT}/${route.hash ? "#" + route.hash : ""}`;
    console.log(`Rendering ${url} -> /${route.folder}`);

    await page.goto(url, { waitUntil: "networkidle" });
    await page.waitForTimeout(600); // let animations/lazy content settle

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
