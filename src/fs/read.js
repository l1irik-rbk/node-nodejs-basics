import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { readFile, access } from 'node:fs/promises';
import * as path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const err = 'FS operation failed';

export const read = async () => {
  try {
    const filesPath = path.join(__dirname, 'files', 'fileToRead.txt');
    const accessResponse = await exists(filesPath);
    if (!accessResponse) throw new Error(err);

    const fileContant = await readFile(filesPath, { encoding: 'utf-8' });
    console.log(fileContant);
  } catch (error) {
    console.error(error.message);
  }
};
read();

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}
