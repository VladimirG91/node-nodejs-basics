import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
  const sourceFolderPath = path.join(__dirname, 'files');
  const destinationFolderPath = path.join(__dirname, 'files_copy');

  try {
    await fs.promises.access(sourceFolderPath, fs.constants.F_OK);
  } catch (error) {
    throw new Error('FS operation failed');
  }

  try {
    await fs.promises.access(destinationFolderPath, fs.constants.F_OK);
    throw new Error('FS operation failed');
  } catch (error) {}

  try {
    await fs.promises.mkdir(destinationFolderPath);
    const files = await fs.promises.readdir(sourceFolderPath);

    for (const file of files) {
      const sourceFilePath = path.join(sourceFolderPath, file);
      const destinationFilePath = path.join(destinationFolderPath, file);
      await fs.promises.copyFile(sourceFilePath, destinationFilePath);
    }
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await copy();
