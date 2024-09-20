Kode berikut adalah sebuah fungsi bernama cetakSegitigaSikuKanan yang digunakan untuk mencetak segitiga siku-siku kanan dengan karakter bintang (*). Fungsi ini menerima satu parameter tinggi yang menentukan tinggi segitiga tersebut.

Parameter:
Fungsi ini menerima satu parameter:
tinggi (tinggi segitiga yang diinginkan)

Langkah-langkah dalam fungsi:
1. Perulangan untuk Baris Segitiga:
Fungsi menggunakan perulangan for untuk mencetak setiap baris segitiga dari baris pertama hingga baris ke-tinggi.
2. Membuat Baris dengan Bintang dan Spasi:
Pada setiap iterasi, fungsi melakukan langkah-langkah berikut untuk mencetak baris segitiga:
    - Membuat Deretan Bintang:
Menggunakan Array(i).fill('*').join(' ') untuk membuat deretan bintang yang diikuti oleh spasi. Array(i) membuat array dengan panjang i, fill('*') mengisi array dengan karakter *, dan join(' ') menggabungkan elemen array menjadi string dengan spasi di antara karakter bintang.
    - Menambahkan Spasi di Depan Deretan Bintang:
Menggunakan ' '.repeat(2 * (tinggi - i)) untuk menambahkan spasi di depan deretan bintang. Fungsi repeat mengulang spasi sebanyak 2 * (tinggi - i) kali, di mana tinggi - i adalah jumlah spasi yang dibutuhkan untuk memposisikan deretan bintang di kanan.
3. Output Hasil:
Pada setiap iterasi, fungsi mencetak baris yang telah dibuat ke konsol. Baris tersebut terdiri dari sejumlah spasi diikuti oleh deretan bintang yang membentuk segitiga siku-siku kanan.
