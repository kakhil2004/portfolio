import sharp from 'sharp';
import { readdir, stat, rename, unlink } from 'fs/promises';
import { join, extname } from 'path';

const IMAGE_DIR = new URL('../static/images', import.meta.url).pathname.slice(1);

async function* getFiles(dir) {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
        const full = join(dir, entry.name);
        if (entry.isDirectory()) yield* getFiles(full);
        else yield full;
    }
}

let totalBefore = 0, totalAfter = 0;

for await (const file of getFiles(IMAGE_DIR)) {
    const ext = extname(file).toLowerCase();
    if (ext === '.gif') { console.log(`SKIP  ${file} (gif)`); continue; }
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue;

    const before = (await stat(file)).size;
    totalBefore += before;
    const tmp = file + '.tmp';

    try {
        if (ext === '.jpg' || ext === '.jpeg') {
            await sharp(file).jpeg({ quality: 80, mozjpeg: true }).toFile(tmp);
        } else {
            await sharp(file).png({ compressionLevel: 9, adaptiveFiltering: true }).toFile(tmp);
        }

        const after = (await stat(tmp)).size;
        if (after < before) {
            await rename(tmp, file);
            totalAfter += after;
            const saved = Math.round((before - after) / 1024);
            console.log(`OK    ${file.replace(IMAGE_DIR, '')}: ${Math.round(before/1024)}KB → ${Math.round(after/1024)}KB (-${saved}KB)`);
        } else {
            await unlink(tmp);
            totalAfter += before;
            console.log(`SKIP  ${file.replace(IMAGE_DIR, '')} (already optimal)`);
        }
    } catch (e) {
        totalAfter += before;
        console.error(`ERR   ${file}: ${e.message}`);
    }
}

console.log(`\nTotal: ${Math.round(totalBefore/1024/1024*10)/10}MB → ${Math.round(totalAfter/1024/1024*10)/10}MB`);
