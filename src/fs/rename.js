import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
  const folderPath = path.join(__dirname, 'files');
  const sourceFileName = 'wrongFilename.txt';
  const destinationFileName = 'properFilename.md';

  const sourceFilePath = path.join(folderPath, sourceFileName);
  const destinationFilePath = path.join(folderPath, destinationFileName);

  try {
    await fs.promises.access(sourceFilePath, fs.constants.F_OK);
  } catch (error) {
    throw new Error('FS operation failed');
  }

  try {
    await fs.promises.access(destinationFilePath, fs.constants.F_OK);
    throw new Error('FS operation failed');
  } catch (error) {
    console.log(error);
  }

  try {
    await fs.promises.rename(sourceFilePath, destinationFilePath);
    throw new Error('FS operation failed');
  } catch (error) {
    console.log(error);
  }
};

await rename();
