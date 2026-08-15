const fs = require('fs');
const path = require('path');

const clients = [
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

async function downloadClientLogos() {
  const dir = path.join(process.cwd(), 'client_logos');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);

  console.log('🚀 Starting logo download for your client roster...');

  for (const client of clients) {
    try {
      let res = await fetch(`https://logo.clearbit.com/${client.domain}`);
      if (!res.ok) {
        res = await fetch(`https://www.google.com/s2/favicons?domain=${client.domain}&sz=128`);
      }

      if (res.ok) {
        const buffer = Buffer.from(await res.arrayBuffer());
        const safeName = client.name.toLowerCase().replace(/[^a-z0-9]/g, '_');
        const filePath = path.join(dir, `${client.code.toLowerCase()}_${safeName}.png`);
        fs.writeFileSync(filePath, buffer);
        console.log(`✅ Saved: ${client.name}`);
      } else {
        console.log(`⚠️ Failed to fetch logo for ${client.name}`);
      }
    } catch (err) {
      console.error(`❌ Error for ${client.name}:`, err.message);
    }
  }
  console.log('🎉 Done! All available logos are saved in the "client_logos" directory.');
}

downloadClientLogos();
