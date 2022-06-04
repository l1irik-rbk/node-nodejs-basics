import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as path from 'path';
import * as crypto from 'crypto';
import { readFile } from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const calculateHash = async () => {
  try {
    const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
    const hash = crypto.createHash('sha256');
    const file = await readFile(filePath, { encoding: 'utf-8' });
    hash.update(file);

    const hex = hash.digest('hex');
    console.log(hex);
  } catch (error) {
    console.error(error);
  }
};
calculateHash();
