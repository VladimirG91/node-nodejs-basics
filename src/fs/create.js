import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
  const text = 'I am fresh and young';
  const filePath = path.resolve(__dirname, 'files', 'fresh.txt');
  try {
    await fs.promises.access(filePath, fs.constants.F_OK);
    throw new Error('FS operation failed');
  } catch (error) {
    await fs.promises.mkdir(path.dirname(filePath), { recursive: true });
    await fs.promises.writeFile(filePath, text);
  }
};

await create();
