import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { spawn } from 'child_process';
import * as path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const spawnChildProcess = async (args) => {
  const filePath = path.join(__dirname, 'files', 'script.js');
  const newArgs = [filePath, ...args];
  a;
  const child = spawn('node', newArgs);

  child.stdout.on('data', (data) => {
    process.stdout.write(data);
  });

  process.stdin.on('data', (data) => {
    child.stdin.write(data.toString().trim());
  });

  child.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  child.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
};
spawnChildProcess(process.argv.slice(2));
