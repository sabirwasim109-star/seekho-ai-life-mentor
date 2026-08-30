const fs = require('fs');

const files = fs.readdirSync('src/components').filter(f => f.endsWith('.tsx')).map(f => 'src/components/' + f);

let changed = 0;
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  
  // Update overlay to items-end on mobile
  content = content.replace(/(className="[^"]*fixed inset-0[^"]*flex[^"]*)items-center([^"]*")/, (match, p1, p2) => {
    if (p1.includes("items-end")) return match;
    return p1 + "items-end sm:items-center" + p2;
  });

  // Remove bottom padding on mobile
  content = content.replace(/(className="[^"]*fixed inset-0[^"]*)p-2 sm:p-4([^"]*")/, (match, p1, p2) => {
    return p1 + "p-0 pt-10 sm:p-4" + p2;
  });
  
  // Make inner div slide up and rounded top
  content = content.replace(/(<div[^>]*className="[^"]*fixed inset-0[^>]*>[\s\S]*?<div[^>]*className="[^"]*)(rounded-[23]xl)([^"]*")/, (match, p1, p2, p3) => {
    if (p1.includes("rounded-t-")) return match;
    return p1 + "rounded-t-3xl sm:rounded-3xl" + p3;
  });
  
  // Also add animate-in slide-in-from-bottom
  content = content.replace(/(<div[^>]*className="[^"]*fixed inset-0[^>]*>[\s\S]*?<div[^>]*className="[^"]*)(rounded-t-3xl sm:rounded-[23]xl)([^"]*")/, (match, p1, p2, p3) => {
    if (p1.includes("animate-in slide-in-from-bottom")) return match;
    return p1 + p2 + " animate-in slide-in-from-bottom-8 sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-300" + p3;
  });

  if (content !== original) {
    fs.writeFileSync(file, content);
    changed++;
  }
});
console.log(`Changed ${changed} files`);
