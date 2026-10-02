function hitungUsia() {
    const inputTanggal = document.getElementById('tanggalLahir').value;

    if (!inputTanggal) {
        alert('Silakan pilih tanggal lahir terlebih dahulu!');
        return;
    }

    const tglLahir = new Date(inputTanggal);
    const tglSekarang = new Date();

    if (tglLahir > tglSekarang) {
        alert('Tanggal lahir tidak boleh melebihi tanggal hari ini!');
        return;
    }

    // 1. Kalkulasi Usia Masehi
    let tahunMasehi = tglSekarang.getFullYear() - tglLahir.getFullYear();
    let bulanMasehi = tglSekarang.getMonth() - tglLahir.getMonth();
    let hariMasehi = tglSekarang.getDate() - tglLahir.getDate();

    if (hariMasehi < 0) {
        bulanMasehi--;
        const bulanLalu = new Date(tglSekarang.getFullYear(), tglSekarang.getMonth(), 0);
        hariMasehi += bulanLalu.getDate();
    }

    if (bulanMasehi < 0) {
        tahunMasehi--;
        bulanMasehi += 12;
    }

    // Tampilkan Hasil Masehi
    document.getElementById('masehiTahun').innerText = tahunMasehi;
    document.getElementById('masehiBulan').innerText = bulanMasehi;
    document.getElementById('masehiHari').innerText = hariMasehi;

    // 2. Kalkulasi Usia Hijriyah (Perkiraan Presisi berdasarkan selisih hari / rasio Hijriyah 354.36 hari)
    const diffTime = Math.abs(tglSekarang - tglLahir);
    const totalHari = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    let tahunHijri = Math.floor(totalHari / 354.367);
    let sisaHari = totalHari % 354.367;
    let bulanHijri = Math.floor(sisaHari / 29.531);
    let hariHijri = Math.floor(sisaHari % 29.531);

    // Tampilkan Hasil Hijriyah
    document.getElementById('hijriTahun').innerText = tahunHijri;
    document.getElementById('hijriBulan').innerText = bulanHijri;
    document.getElementById('hijriHari').innerText = hariHijri;

    // Tampilkan Card Hasil & Sembunyikan Input
    document.getElementById('inputSection').classList.add('hidden');
    document.getElementById('hasilSection').classList.remove('hidden');
}

function resetForm() {
    document.getElementById('tanggalLahir').value = '';
    document.getElementById('inputSection').classList.remove('hidden');
    document.getElementById('hasilSection').classList.add('hidden');
}
