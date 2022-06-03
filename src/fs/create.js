import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as fs from 'fs';
import * as path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const content = 'I am fresh and young';
const error = 'FS operation failed';
const success = 'File was created!';

export const create = async () => {
  const rootPath = path.join(__dirname, 'files', 'fresh.txt');

  fs.writeFile(rootPath, content, { flag: 'wx' }, (err) => {
    if (err) {
      throw new Error(error);
    }
    console.log(success);
  });
};
create();
