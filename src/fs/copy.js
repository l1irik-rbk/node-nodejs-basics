import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { readdir, mkdir, copyFile } from 'node:fs/promises';
import * as path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const error = 'FS operation failed';

export const copy = async () => {
  try {
    const pathFiles = path.join(__dirname, 'files');
    const pathFilesCopy = path.join(__dirname, 'files-copy');
    const files = await readdir(pathFiles, { withFileTypes: true });
    await mkdir(pathFilesCopy);

    for (const file of files) {
      const oldFilePath = path.join(pathFiles, file.name);
      const newFilePath = path.join(pathFilesCopy, file.name);
      await copyFile(oldFilePath, newFilePath);
    }
  } catch (err) {
    if (err) {
      throw new Error(error);
    }
  }
};
copy();
