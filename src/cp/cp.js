import cp from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import { pipeline } from 'stream';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spawnChildProcess = async (args) => {
  const folderPath = path.join(__dirname, 'files');
  const childFile = 'script.js';
  const childPath = path.join(folderPath, childFile);

  const childProcess = cp.fork(childPath, args, { silent: true });

  pipeline(process.stdin, childProcess.stdin, () => {});
  pipeline(childProcess.stdout, process.stdout, () => {});
};

spawnChildProcess([1, 2, 3, 4, 5]);
