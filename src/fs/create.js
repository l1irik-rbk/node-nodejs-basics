import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { writeFile } from 'node:fs/promises';
import * as path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const content = 'I am fresh and young';
const error = 'FS operation failed';

export const create = async () => {
  try {
    const rootPath = path.join(__dirname, 'files', 'fresh.txt');
    await writeFile(rootPath, content, { flag: 'wx' });
  } catch (err) {
    throw new Error(error);
  }
};
create();
