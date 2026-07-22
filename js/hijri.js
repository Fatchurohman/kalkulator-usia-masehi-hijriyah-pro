function masehiKeHijriyah(tanggal) {

    const date = new Date(tanggal);

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let jd;

    if (
        (year > 1582) ||
        (year === 1582 && month > 10) ||
        (year === 1582 && month === 10 && day >= 15)
    ) {

        jd = Math.floor(
            (1461 * (year + 4800 + Math.floor((month - 14) / 12))) / 4
        )
        + Math.floor(
            (367 * (month - 2 - 12 * Math.floor((month - 14) / 12))) / 12
        )
        - Math.floor(
            (3 * Math.floor((year + 4900 + Math.floor((month - 14) / 12)) / 100)) / 4
        )
        + day - 32075;

    } else {

        jd = 367 * year
        - Math.floor((7 * (year + 5001 + Math.floor((month - 9) / 7))) / 4)
        + Math.floor((275 * month) / 9)
        + day + 1729777;
    }


    let l = jd - 1948440 + 10632;
    let n = Math.floor((l - 1) / 10631);

    l = l - 10631 * n + 354;

    let j =
        Math.floor((10985 - l) / 5316) *
        Math.floor((50 * l) / 17719)
        +
        Math.floor(l / 5670) *
        Math.floor((43 * l) / 15238);


    l = l
        - Math.floor((30 - j) / 15)
        * Math.floor((17719 * j) / 50)
        - Math.floor(j / 16)
        * Math.floor((15238 * j) / 43)
        + 29;


    month = Math.floor((24 * l) / 709);

    day = l - Math.floor((709 * month) / 24);

    year = 30 * n + j - 30;


    const namaBulan = [
        "Muharram",
        "Safar",
        "Rabiul Awal",
        "Rabiul Akhir",
        "Jumadil Awal",
        "Jumadil Akhir",
        "Rajab",
        "Sya'ban",
        "Ramadan",
        "Syawal",
        "Dzulqa'dah",
        "Dzulhijjah"
    ];


    return {
        hari: day,
        bulan: namaBulan[month - 1],
        nomorBulan: month,
        tahun: year
    };
}



function hitungUsiaHijriyah(tanggalLahir) {

    const lahirHijri = masehiKeHijriyah(tanggalLahir);

    const sekarang = new Date();
    const sekarangHijri = masehiKeHijriyah(sekarang);


    let tahun = sekarangHijri.tahun - lahirHijri.tahun;

    let bulan = sekarangHijri.nomorBulan - lahirHijri.nomorBulan;

    let hari = sekarangHijri.hari - lahirHijri.hari;


    if (hari < 0) {
        bulan--;
        hari += 30;
    }


    if (bulan < 0) {
        tahun--;
        bulan += 12;
    }


    return {
        tahun: tahun,
        bulan: bulan,
        hari: hari
    };
}
