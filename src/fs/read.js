import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const read = async () => {
  const folderPath = path.join(__dirname, 'files');
  const fileToRead = 'fileToRead.txt';
  const filePath = path.join(folderPath, fileToRead);

  try {
    await fs.promises.access(filePath, fs.constants.F_OK);
  } catch (error) {
    throw new Error('FS operation failed');
  }

  const fileContent = await fs.promises.readFile(filePath, 'utf-8');
  console.log(fileContent);
};

await read();
