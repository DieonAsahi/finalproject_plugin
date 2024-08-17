"use strict";
function cetakSegitiga(tinggi) {
    for (let i = 1; i <= tinggi; i++) {
        let baris = '';
        for (let j = 1; j <= i; j++) {
            baris += '* ';
        }
        console.log(baris);
    }
}
const tinggi = 15;
cetakSegitiga(tinggi);
