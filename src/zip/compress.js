import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compress = async () => {
  const folderPath = path.join(__dirname, 'files');
  const fileToCompress = 'fileToCompress.txt';
  const compressedFile = 'archive.gz';
  const inputFile = path.join(folderPath, fileToCompress);
  const outputFile = path.join(folderPath, compressedFile);

  try {
    const readStream = fs.createReadStream(inputFile);
    const writeStream = fs.createWriteStream(outputFile);
    const gzipStream = zlib.createGzip();

    readStream.pipe(gzipStream).pipe(writeStream);

    await new Promise((res, rej) => {
      writeStream.on('finish', res);
      writeStream.on('error', rej);
    });

    console.log('Compression completed');
  } catch (error) {
    console.error('Compression failed:', error);
  }
};

await compress();
