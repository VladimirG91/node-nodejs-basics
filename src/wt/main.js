import { Worker } from 'worker_threads';
import { cpus } from 'os';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const performCalculations = async () => {
  const numberOfCores = cpus().length;
  const workerPromises = [];
  const workerFilePath = path.resolve(__dirname, 'worker.js');

  for (let i = 0; i < numberOfCores; i++) {
    const worker = new Worker(workerFilePath, { workerData: i + 10 });

    const workerPromise = new Promise((resolve) => {
      worker.on('message', resolve);
    });

    workerPromises.push(workerPromise);
  }

  const results = await Promise.all(workerPromises);
  console.log('Computation results:', results);
};

await performCalculations();
