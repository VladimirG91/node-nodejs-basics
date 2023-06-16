import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
  const folderPath = path.join(__dirname, 'files');
  const fileToWrite = 'fileToWrite.txt';
  const outputFile = path.join(folderPath, fileToWrite);

  try {
    const writeStream = fs.createWriteStream(outputFile);
    process.stdin.pipe(writeStream);
    console.log('Writing completed');
  } catch (error) {
    console.error('Writing failed:', error);
  }
};

await write();
