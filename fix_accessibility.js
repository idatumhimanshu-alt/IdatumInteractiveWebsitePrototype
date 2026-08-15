const fs = require('fs');
const path = require('path');

// 1. Fix Nav.tsx mobile toggle button
const navPath = 'src/app/components/Nav.tsx';
if (fs.existsSync(navPath)) {
  let nav = fs.readFileSync(navPath, 'utf8');
  if (!nav.includes('aria-label="Toggle mobile menu"')) {
    nav = nav.replace(
      /<button([^>]*onClick=\{[^}]*setMobileMenuOpen[^}]*\})/g,
      '<button aria-label="Toggle mobile menu"$1'
    );
    fs.writeFileSync(navPath, nav);
    console.log('✅ Added aria-label to mobile button in Nav.tsx');
  } else {
    console.log('ℹ️ aria-label already exists in Nav.tsx');
  }
}

// 2. Fix <h4> skipped heading levels across all components
const walk = (dir) => {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(fullPath));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(fullPath);
    }
  });
  return results;
};

const allFiles = walk('src');
let headingCount = 0;
allFiles.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  if (content.includes('<h4')) {
    content = content.replace(/<h4/g, '<h3').replace(/<\/h4>/g, '</h3>');
    fs.writeFileSync(f, content);
    headingCount++;
  }
});
console.log(`✅ Fixed heading levels in ${headingCount} files`);
