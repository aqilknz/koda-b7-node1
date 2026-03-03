import readline from "node:readline";


async function dateConversion() {
    const rd = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    try {
        const jawaban = await rd.question("Masukkan Tanggal DD-MM-YYYY: ");
        const regex = /^\d{2}-\d{2}-\d{4}$/;
    
    } catch (error) {
        console.error("error: ", error.messege)
    }
    
    rd.close();
}
dateConversion()