import moment from "moment"
import readline from "node:readline"

const rd = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const dateConversion = (dateInput) => {
    const mmt = moment(dateInput, "DD-MM-YYYY", true)
    if (mmt.isValid()) {
        return mmt.format("DD/MM/YYYY")
    } else {
        return "Format tanggal salah"
    }
}
rd.question("Masukkan tanggal (DD-MM-YYYY): ", (answer) => {
    const result = dateConversion(answer);
    console.log(`Hasil DD/MM/YYYY: ${result}`);
    
    rd.close();
});

export default dateConversion;