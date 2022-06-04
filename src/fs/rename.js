import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { rename as renameFile, access } from 'node:fs/promises';
import * as path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const err = 'FS operation failed';

export const rename = async () => {
  try {
    const oldPathName = path.join(__dirname, 'files', 'wrongFilename.txt');
    const newPathName = path.join(__dirname, 'files', 'properFilename.md');

    const oldAccessResponse = await exists(oldPathName);
    const newAccessResponse = await exists(newPathName);

    if (!oldAccessResponse || newAccessResponse) throw new Error(err);

    await renameFile(oldPathName, newPathName);
  } catch (error) {
    console.error(error.message);
  }
};
rename();

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}
