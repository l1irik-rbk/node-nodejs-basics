import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { pipeline } from 'stream';
import * as path from 'path';
import * as zlib from 'zlib';
import * as fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const compress = async () => {
  const inputPath = path.join(__dirname, 'files', 'fileToCompress.txt');
  const outputPath = path.join(__dirname, 'files', 'archive.gz');

  const gzip = zlib.createGzip();
  const source = fs.createReadStream(inputPath);
  const destination = fs.createWriteStream(outputPath);

  pipeline(source, gzip, destination, (err) => {
    if (err) {
      console.error(err);
    }
  });
};
compress();
