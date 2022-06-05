import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as path from 'path';
import * as fs from 'fs';
import * as readline from 'readline';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const write = async () => {
  try {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');
    const stream = fs.createWriteStream(filePath, { encoding: 'utf-8' });

    rl.on('line', (line) => {
      stream.write(`${line}\n`);
    });
  } catch (error) {
    console.error(error);
  }
};
write();
