import { createHash } from 'crypto';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
  const folderPath = path.join(__dirname, 'files');
  const fileToCalculate = 'fileToCalculateHashFor.txt';
  const filePath = path.join(folderPath, fileToCalculate);

  try {
    const data = await fs.promises.readFile(filePath);
    const hash = createHash('sha256').update(data).digest('hex');
    console.log('SHA256 hash:', hash);
  } catch (error) {
    console.error('Error calculating hash:', error);
  }
};

await calculateHash();
