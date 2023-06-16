import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const list = async () => {
  const folderPath = path.join(__dirname, 'files');
  try {
    await fs.promises.access(folderPath, fs.constants.F_OK);
  } catch (error) {
    throw new Error('FS operation failed');
  }

  const files = await fs.promises.readdir(folderPath);
  console.log(files);
};

await list();
