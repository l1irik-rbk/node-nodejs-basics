import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { pipeline } from 'stream';
import { rm } from 'node:fs/promises';
import { promisify } from 'node:util';
import * as path from 'path';
import * as zlib from 'zlib';
import * as fs from 'fs';

const pipe = promisify(pipeline);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const compress = async () => {
  try {
    const inputPath = path.join(__dirname, 'files', 'fileToCompress.txt');
    const outputPath = path.join(__dirname, 'files', 'archive.gz');

    const gzip = zlib.createGzip();
    const source = fs.createReadStream(inputPath);
    const destination = fs.createWriteStream(outputPath);

    await pipe(source, gzip, destination);
    await rm(inputPath);
  } catch (error) {
    console.error(error);
  }
};
compress();
