import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as path from 'path';
import * as fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const read = async () => {
  try {
    const filePath = path.join(__dirname, 'files', 'fileToRead.txt');
    const stream = fs.createReadStream(filePath, { encoding: 'utf-8' });

    stream.on('data', (chunk) => {
      process.stdout.write(chunk);
    });
  } catch (error) {
    console.error(error);
  }
};
read();
