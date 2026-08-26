import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.resolve(__dirname, "../dist");

const FOLDERS = [
  "about-us",
  "why-idatum",
  "contact",
  "academy",
  "training-tracks",
  "browse-all-courses",
  "how-we-train",
  "posh-course-detail",
  "choose-your-path",
  "trainer-onboarding",
  "auditor-onboarding",
  "services",
  "services-timeline",
  "why-choose-services",
  "process-built",
  "syscomply",
  "partners",
  "become-partner",
  "why-partner",
  "partner-vs-vendor"
];

function prerender() {
  console.log("🚀 Generating static route copies for all sitemap paths...");
  const indexPath = path.join(DIST_DIR, "index.html");
  if (!fs.existsSync(indexPath)) {
    console.error("❌ Error: dist/index.html not found!");
    process.exit(1);
  }

  const html = fs.readFileSync(indexPath, "utf-8");

  for (const folder of FOLDERS) {
    const targetDir = path.join(DIST_DIR, folder);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    fs.writeFileSync(path.join(targetDir, "index.html"), html, "utf-8");
    console.log(`✅ Created: /${folder}/index.html`);
  }
  console.log("🎉 All sitemap route copies generated successfully!");
}

prerender();
