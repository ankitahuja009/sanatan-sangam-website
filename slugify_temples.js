const fs = require('fs');

function slugify(text) {
    return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
}

async function main() {
    let dataCode = fs.readFileSync('lib/templesData.js', 'utf8');

    // Dynamically require to get the runtime objects
    const { temples } = require('./lib/templesData.js');

    let patchCount = 0;
    const usedSlugs = new Set();

    for (const temple of temples) {
        if (!temple.id.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}/i)) {
             // already a slug (e.g. ram-mandir) or some manually assigned id
             continue; 
        }

        let slug = slugify(temple.name);
        if (usedSlugs.has(slug)) {
            // Unlikely, but just in case of duplicates
            slug = slug + '-' + temple.id.split('-')[0];
        }
        usedSlugs.add(slug);

        console.log(`Mapping ${temple.id} -> ${slug}`);

        // RegeX to replace the EXACT id definition in the source file
        const idPattern = new RegExp(`id:\\s*"${temple.id}"`, 'g');
        const newData = dataCode.replace(idPattern, `id: "${slug}"`);
        
        if (newData !== dataCode) {
            patchCount++;
            dataCode = newData;
        }
    }

    fs.writeFileSync('lib/templesData.js', dataCode);
    console.log(`\nPatched ${patchCount} UUIDs to slugs in templesData.js`);
}

main().catch(console.error);
