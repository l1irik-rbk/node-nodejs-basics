import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { readdir, mkdir, copyFile, access } from 'node:fs/promises';
import * as path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const err = 'FS operation failed';

export const copy = async () => {
  try {
    const pathFiles = path.join(__dirname, 'files');
    const pathFilesCopy = path.join(__dirname, 'files_copy');

    const filseAccessResponse = await exists(pathFiles);
    const filesCopyAccessResponse = await exists(pathFilesCopy);
    if (!filseAccessResponse || filesCopyAccessResponse) throw new Error(err);

    const files = await readdir(pathFiles, { withFileTypes: true });
    await mkdir(pathFilesCopy);

    for (const file of files) {
      const oldFilePath = path.join(pathFiles, file.name);
      const newFilePath = path.join(pathFilesCopy, file.name);
      await copyFile(oldFilePath, newFilePath);
    }
  } catch (error) {
    console.error(error.message);
  }
};
copy();

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}
