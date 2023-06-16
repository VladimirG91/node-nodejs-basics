import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  const folderPath = path.join(__dirname, 'files');
  const fileToRead = 'fileToRead.txt';
  const inputFile = path.join(folderPath, fileToRead);

  try {
    const readStream = fs.createReadStream(inputFile);
    readStream.pipe(process.stdout);
    console.log('Reading completed');
  } catch (error) {
    console.error('Reading failed:', error);
  }
};

await read();
