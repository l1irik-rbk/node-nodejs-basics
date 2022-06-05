import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { readdir, access } from 'node:fs/promises';
import * as path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const err = 'FS operation failed';

export const list = async () => {
  try {
    const filesPath = path.join(__dirname, 'files');
    const accessResponse = await exists(filesPath);
    if (!accessResponse) throw new Error(err);

    const files = await readdir(filesPath);
    console.log(files);
  } catch (error) {
    console.error(error.message);
  }
};
list();

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}
