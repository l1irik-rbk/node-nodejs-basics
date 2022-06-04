import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { rm } from 'node:fs/promises';
import * as path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const error = 'FS operation failed';

export const remove = async () => {
  try {
    const removePath = path.join(__dirname, 'files', 'fileToRemove.txt');

    await rm(removePath);
  } catch (err) {
    throw new Error(error);
  }
};
remove();
