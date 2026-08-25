import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.resolve(__dirname, "../dist");

const FOLDERS = [
  "services",
  "academy",
  "syscomply",
  "contact",
  "about-us",
  "partner",
  "trainer-onboarding",
  "auditor-onboarding"
];

function prerender() {
  console.log("🚀 Generating static route copies...");
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
  console.log("🎉 All static route copies generated successfully!");
}

prerender();
