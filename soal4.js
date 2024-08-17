"use strict";
function hitungRataRata(nilai1, nilai2, nilai3, nilai4) {
    return (nilai1 + nilai2 + nilai3 + nilai4) / 4;
}
function tentukanGrade(nilai) {
    if (nilai >= 90 && nilai <= 100) {
        return "A";
    }
    else if (nilai >= 80 && nilai < 90) {
        return "B";
    }
    else if (nilai >= 70 && nilai < 80) {
        return "C";
    }
    else if (nilai >= 60 && nilai < 70) {
        return "D";
    }
    else if (nilai >= 0 && nilai < 60) {
        return "E";
    }
    else {
        return "Nilai tidak valid";
    }
}
function validasiNilai(nilai1, nilai2, nilai3, nilai4) {
    return (nilai1 >= 0 && nilai1 <= 100) &&
        (nilai2 >= 0 && nilai2 <= 100) &&
        (nilai3 >= 0 && nilai3 <= 100) &&
        (nilai4 >= 0 && nilai4 <= 100);
}
let nilaiPemrogramanWeb = 100;
let nilaiPemrogramanKomputer = 90;
let nilaiStatistika = 90;
let nilaiSistemBasisData = 88;
if (validasiNilai(nilaiPemrogramanWeb, nilaiPemrogramanKomputer, nilaiStatistika, nilaiSistemBasisData)) {
    let rataRata = hitungRataRata(nilaiPemrogramanWeb, nilaiPemrogramanKomputer, nilaiStatistika, nilaiSistemBasisData);
    let grade = tentukanGrade(rataRata);
    console.log(`Rata-rata nilai: ${rataRata}`);
    console.log(`Grade: ${grade}`);
}
else {
    console.log("Nilai yang diberikan tidak valid");
}
