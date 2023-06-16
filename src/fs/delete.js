import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
  const folderPath = path.join(__dirname, 'files');
  const fileToRemove = 'fileToRemove.txt';
  const filePath = path.join(folderPath, fileToRemove);
  try {
    await fs.promises.access(filePath, fs.constants.F_OK);
  } catch (error) {
    throw new Error('FS operation failed');
  }

  await fs.promises.unlink(filePath);
};

await remove();
