import readline from 'node:readline';
import dateConversionMoment from './minitask1.js';
import dateConversionRegex from './minitask2.js';

const getInput = (q) => {
  const rd = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rd.question(q, (answer) => {
      rd.close();
      resolve(answer);
    });
  });
};

async function main() {
  try {
    const answer = await getInput('Masukkan tanggal (DD-MM-YYYY): ');
    
    // Menjalankan minitask1 (Moment)
    const result1 = dateConversionMoment(answer);
    console.log(`Hasil (Moment): ${result1}`);

    // Menjalankan minitask2 (Regex)
    const result2 = dateConversionRegex(answer);
    console.log(`Hasil (Regex): ${result2}`);

  } catch (error) {
    console.error('Terjadi kesalahan:', error.message);
  }
}

main();