import { writeFile } from 'fs/promises';
import { join } from 'path';

const nojekyllPath = join(process.cwd(), 'build', '.nojekyll');

async function createNojekyll() {
    try {
        await writeFile(nojekyllPath, '');
        console.log('.nojekyll file created.');
    } catch (error) {
        console.error('Error creating .nojekyll file:', error);
    }
}

createNojekyll();
