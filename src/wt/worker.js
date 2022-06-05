import { parentPort, workerData } from 'worker_threads';

// n should be received from main thread
export const nthFibonacci = (n) => (n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2));

export const sendResult = () => {
  // This function sends result of nthFibonacci computations to main thread

  // Можно использовать это выражение для проверки ошибки

  //   const randomNum = Math.random();
  //   if (randomNum < 0.5) {
  //     throw new Error();
  //   }

  const result = nthFibonacci(workerData);
  parentPort.postMessage(result);
};
sendResult();
