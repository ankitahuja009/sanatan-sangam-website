const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const SUPABASE_URL = 'https://fagwrtbzoxuuuwwscyyu.supabase.co';
const ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhZ3dydGJ6b3h1dXV3d3NjeXl1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM5MTEyMzcsImV4cCI6MjA3OTQ4NzIzN30.bhBKJBsBWoYgIF6oQbgZQgxcBwhWG3jSPpfh4zOLQr4';

function downloadFile(url, dest) {
    return new Promise((resolve, reject) => {
        const proto = url.startsWith('https') ? https : http;
        const file = fs.createWriteStream(dest);
        proto.get(url, (res) => {
            if (res.statusCode === 301 || res.statusCode === 302) {
                file.close();
                fs.unlinkSync(dest);
                downloadFile(res.headers.location, dest).then(resolve).catch(reject);
                return;
            }
            res.pipe(file);
            file.on('finish', () => file.close(resolve));
        }).on('error', (err) => {
            fs.unlink(dest, () => {});
            reject(err);
        });
    });
}

async function main() {
    // 1. Fetch all katha+satsang streams with thumbnail_url from Supabase
    const res = await fetch(
        `${SUPABASE_URL}/rest/v1/temple_streams?select=id,short_name,temple_name,category,thumbnail_url&category=in.(katha,satsang)&order=display_order`,
        { headers: { apikey: ANON_KEY, Authorization: `Bearer ${ANON_KEY}` } }
    );
    const streams = await res.json();
    console.log(`Fetched ${streams.length} katha/satsang streams`);

    // 2. Build id -> local image path map, download each image
    const destDir = path.join('public', 'temples', 'katha-satsang');
    if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

    const imageMap = {};

    for (const s of streams) {
        if (!s.thumbnail_url) {
            console.log(`  SKIP (no thumbnail): ${s.short_name}`);
            imageMap[s.id] = '/temples/somnath.webp'; // fallback
            continue;
        }

        // derive a safe, clean filename from short_name only (never from URL)
        const slug = s.short_name.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');
        const filename = `${slug}.jpg`;
        const destPath = path.join(destDir, filename);

        if (fs.existsSync(destPath)) {
            console.log(`  EXISTS: ${filename}`);
        } else {
            try {
                await downloadFile(s.thumbnail_url, destPath);
                console.log(`  DOWNLOADED: ${filename}`);
            } catch (e) {
                console.log(`  ERROR downloading ${s.short_name}: ${e.message}`);
                imageMap[s.id] = '/temples/somnath.webp';
                continue;
            }
        }
        imageMap[s.id] = `/temples/katha-satsang/${filename}`;
    }

    // 3. Read templesData.js and patch image field for matching ids
    let dataCode = fs.readFileSync('lib/templesData.js', 'utf8');

    let patchCount = 0;
    for (const [id, imgPath] of Object.entries(imageMap)) {
        // id appears as "id": "xxxx" in the JSON-style object in the file
        const idPattern = new RegExp(`(id:\\s*"${id}",[\\s\\S]*?image:\\s*)"[^"]*"`, 'g');
        const newData = dataCode.replace(idPattern, `$1"${imgPath}"`);
        if (newData !== dataCode) {
            patchCount++;
            dataCode = newData;
        }
    }
    fs.writeFileSync('lib/templesData.js', dataCode);
    console.log(`\nPatched ${patchCount} image paths in templesData.js`);
    console.log('Done!');
}

main().catch(console.error);
