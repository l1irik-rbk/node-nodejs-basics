import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { writeFile, access } from 'node:fs/promises';
import * as path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const content = 'I am fresh and young';
const err = 'FS operation failed';

export const create = async () => {
  try {
    const rootPath = path.join(__dirname, 'files', 'fresh.txt');

    const accessResponse = await exists(rootPath);
    if (accessResponse) throw new Error(err);

    await writeFile(rootPath, content, { flag: 'wx' });
  } catch (error) {
    console.error(error.message);
  }
};
create();

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}
