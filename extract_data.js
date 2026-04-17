const fs = require('fs');
const pageCode = fs.readFileSync('app/[locale]/darshan/page.js', 'utf8');

const templesMatch = pageCode.match(/const temples\s*=\s*\[[\s\S]*?\];\r?\n/);
const categoriesMatch = pageCode.match(/const CATEGORIES\s*=\s*\[[\s\S]*?\];\r?\n/);

if (!templesMatch || !categoriesMatch) {
  console.log('Error finding arrays');
  process.exit(1);
}

if (!fs.existsSync('lib')) fs.mkdirSync('lib');

const dataCode = `export ` + templesMatch[0] + `export ` + categoriesMatch[0] + `
export function getTempleById(id) {
  return temples.find(t => t.id === id);
}

export function getAllTemples() {
  return temples;
}
`;

fs.writeFileSync('lib/templesData.js', dataCode);

let newPageCode = pageCode.replace(templesMatch[0], '');
newPageCode = newPageCode.replace(categoriesMatch[0], '');
newPageCode = newPageCode.replace(/import styles from '.\/darshan.module.css';/, "import styles from './darshan.module.css';\nimport { temples, CATEGORIES } from '../../../lib/templesData';");

fs.writeFileSync('app/[locale]/darshan/page.js', newPageCode);
console.log('Successfully extracted data to lib/templesData.js');
