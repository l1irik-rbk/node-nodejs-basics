import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { Worker, workerData } from 'worker_threads';
import * as path from 'path';
import * as os from 'os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const performCalculations = async () => {
  let startNumber = 10;
  const workerPath = path.join(__dirname, 'worker.js');
  const cpus = os.cpus();

  const resultArray = [];

  for (let i = 0; i < cpus.length; i++) {
    const promise = new Promise((resolve, reject) => {
      const worker = new Worker(workerPath, { workerData: startNumber });

      worker.on('message', (msg) => {
        const status = 'resolved';
        const data = msg;
        resolve({ status, data });
      });

      worker.on('error', (err) => {
        const status = 'error';
        const data = null;
        reject({ status, data });
      });
    });

    promise
      .then(({ status, data }) => {
        const response = { status, data };
        return response;
      })
      .catch(({ status, data }) => {
        const response = { status, data };
        return response;
      });

    resultArray.push(promise);
    startNumber++;
  }

  const promises = await Promise.allSettled(resultArray)
    .then((values) => values)
    .catch((values) => values);

  const finalArray = promises.map((obj) => (obj.reason ? obj.reason : obj.value));
  console.log(finalArray);
};
performCalculations();
