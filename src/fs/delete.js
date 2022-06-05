import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { rm, access } from 'node:fs/promises';
import * as path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const err = 'FS operation failed';

export const remove = async () => {
  try {
    const removePath = path.join(__dirname, 'files', 'fileToRemove.txt');
    const accessResponse = await exists(removePath);
    if (!accessResponse) throw new Error(err);

    await rm(removePath);
  } catch (error) {
    console.error(error.message);
  }
};
remove();

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}
