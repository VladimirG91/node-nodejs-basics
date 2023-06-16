import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
  const folderPath = path.join(__dirname, 'files');
  const fileToDecompress = 'fileToCompress.txt';
  const compressedFile = 'archive.gz';
  const inputFile = path.join(folderPath, compressedFile);
  const outputFile = path.join(folderPath, fileToDecompress);

  try {
    const readStream = fs.createReadStream(inputFile);
    const writeStream = fs.createWriteStream(outputFile);
    const unzipStream = zlib.createGunzip();

    readStream.pipe(unzipStream).pipe(writeStream);

    await new Promise((res, rej) => {
      writeStream.on('finish', res);
      writeStream.on('error', rej);
    });

    console.log('Decompression completed');
  } catch (error) {
    console.error('Decompression failed:', error);
  }
};

await decompress();
