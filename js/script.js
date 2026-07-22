console.log("SCRIPT BARU AKTIF");

function hitungUsia() {

    const input = document.getElementById("tanggalLahir").value;

    if (input === "") {
        alert("Silakan pilih tanggal lahir terlebih dahulu.");
        return;
    }

    const lahir = new Date(input);
    const sekarang = new Date();

    let tahun = sekarang.getFullYear() - lahir.getFullYear();
    let bulan = sekarang.getMonth() - lahir.getMonth();
    let hari = sekarang.getDate() - lahir.getDate();

    if (hari < 0) {
        bulan--;
        const bulanSebelumnya = new Date(
            sekarang.getFullYear(),
            sekarang.getMonth(),
            0
        ).getDate();

        hari += bulanSebelumnya;
    }

    if (bulan < 0) {
        tahun--;
        bulan += 12;
    }

    const selisih = sekarang - lahir;
    const totalHari = Math.floor(selisih / (1000 * 60 * 60 * 24));

    const tanggalLahir = lahir.toLocaleDateString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    const tanggalSekarang = sekarang.toLocaleDateString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });
const hijri = masehiKeHijriyah(input);

const tanggalHijri = 
    hijri.hari + " " +
    hijri.bulan + " " +
    hijri.tahun + " H";
    const usiaHijri = hitungUsiaHijriyah(input);
    document.getElementById("hasil").innerHTML = `
        <p><b>Tanggal Lahir:</b><br>${tanggalLahir}</p>

        <br>

        <p><b>Tanggal Hari Ini:</b><br>${tanggalSekarang}</p>

        <br>

        <p><b>Usia Masehi:</b><br>
        ${tahun} Tahun ${bulan} Bulan ${hari} Hari</p>

        <br>

        <p><b>Total Hari Hidup:</b><br>
        ${totalHari.toLocaleString("id-ID")} Hari</p>

        <br>

        <p><b>Tanggal Lahir Hijriyah:</b><br>
${tanggalHijri}</p>
    `;

}
        
