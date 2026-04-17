const fs = require('fs');
const pageCode = fs.readFileSync('app/[locale]/darshan/page.js', 'utf8');
const streams = JSON.parse(fs.readFileSync('streams_utf8.json', 'utf8').replace(/^\uFEFF/, ''));

const match = pageCode.match(/const temples\s*=\s*(\[[\s\S]*?\]);\r?\n\r?\nconst CATEGORIES/);
let existingTemples = [];
if (match) {
  existingTemples = eval(match[1]);
} else {
  console.log('Could not find existing temples array');
  process.exit(1);
}

const imagesMap = {};
const descMap = {};
existingTemples.forEach(t => {
  if (t.image) imagesMap[t.id] = t.image;
  if (t.desc) descMap[t.id] = t.desc;
});

const newTemples = streams.map(t => {
  return {
    id: t.id,
    name: t.templeName,
    location: t.location,
    state: t.state,
    category: t.category,
    religion: t.religion,
    live: t.isActive,
    schedule: t.liveSchedule || '',
    image: imagesMap[t.id] || '/temples/somnath.webp',
    desc: descMap[t.id] || t.templeName + ' live stream.',
    timetable: t.timetable ? t.timetable.map(tt => ({ n: tt.name, t: tt.time })) : []
  };
});

let newTemplesStr = 'const temples = ' + JSON.stringify(newTemples, null, 4).replace(/"([^"]+)":/g, '\$1:') + ';';

let newPageCode = pageCode.replace(/const temples\s*=\s*\[[\s\S]*?\];/, newTemplesStr);

const newCategoriesStr = `const CATEGORIES = [
    { key: 'all', tKey: 'filterAll' },
    { key: 'jyotirlinga', tKey: 'filterJyotirlinga' },
    { key: 'char_dham', tKey: 'filterCharDham' },
    { key: 'shakti_peeth', tKey: 'filterShaktiPeeth' },
    { key: 'major_temple', tKey: 'filterMajor' },
    { key: 'iskcon', tKey: 'filterIskcon' },
    { key: 'gurudwara', tKey: 'filterGurudwara' },
    { key: 'buddhist_site', tKey: 'filterBuddhist' },
    { key: 'jain_tirth', tKey: 'filterJain' },
    { key: 'katha', tKey: 'filterKatha' },
    { key: 'satsang', tKey: 'filterSatsang' },
    { key: 'other', tKey: 'filterOther' }
];`;

newPageCode = newPageCode.replace(/const CATEGORIES\s*=\s*\[[\s\S]*?\];/, newCategoriesStr);

fs.writeFileSync('app/[locale]/darshan/page.js', newPageCode);
console.log('Successfully updated page.js with ' + newTemples.length + ' streams');
