const fs = require('fs');
const pageCode = fs.readFileSync('app/[locale]/darshan/page.js', 'utf8');
const streams = JSON.parse(fs.readFileSync('supabase_streams.json', 'utf8'));

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
// We want to map it correctly. DB uses 'id' which might be a UUID, but short_name or temple_name might match?
// Or some ids are like 'somnath'.
// Let's rely on matching by ID or English name
existingTemples.forEach(t => {
  if (t.image) imagesMap[t.id] = t.image;
  if (t.desc) descMap[t.id] = t.desc;
  imagesMap[t.name] = t.image;
  descMap[t.name] = t.desc;
});

const newTemples = streams.map(t => {
  // Try to find image and desc based on ID first, then Name
  let img = imagesMap[t.id] || imagesMap[t.temple_name] || imagesMap[t.names_jsonb?.en] || '/temples/somnath.webp';
  let dsc = descMap[t.id] || descMap[t.temple_name] || descMap[t.names_jsonb?.en] || t.description || 'Watch the live stream of ' + (t.names_jsonb?.en || t.temple_name) + '.';
  
  return {
    id: t.id,
    name: t.names_jsonb?.en || t.temple_name,
    location: t.locations_jsonb?.en || t.location,
    state: t.state,
    category: t.category,
    religion: t.religion,
    live: t.is_active,
    schedule: t.schedules_jsonb?.en || t.live_schedule || '',
    image: img,
    desc: dsc,
    timetable: (t.timetables_jsonb && t.timetables_jsonb.en) ? t.timetables_jsonb.en.map(tt => ({ n: tt.name, t: tt.time })) : (t.timetable ? t.timetable.map(tt => ({ n: tt.name, t: tt.time })) : [])
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
