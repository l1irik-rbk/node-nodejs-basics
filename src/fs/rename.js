import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { rename as renameFile } from 'node:fs/promises';
import * as path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const error = 'FS operation failed';

export const rename = async () => {
  try {
    const oldPathName = path.join(__dirname, 'files', 'wrongFilename.txt');
    const newPathName = path.join(__dirname, 'files', 'properFilename.md');

    await renameFile(oldPathName, newPathName);
  } catch (err) {
    throw new Error(error);
  }
};
rename();
