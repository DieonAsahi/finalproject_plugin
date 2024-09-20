penjelasan kode:

Kode ini adalah sebuah fungsi bernama hitungRataRata Dan Grade yang bertujuan untuk menghitung rata-rata dari empat nilai mata pelajaran dan menentukan grade berdasarkan rata-rata tersebut.

Parameter:
Fungsi ini menerima empat parameter yang mewakili nilai dari empat mata pelajaran:

- pemrogramanWeb (nilai Pemrograman Web)
- pemrogramanKomputer (nilai Pemrograman Komputer)
- statistika (nilai Statistika)
- sistem Basis Data (nilai Sistem Basis Data)

Langkah-langkah dalam fungsi:
Fungsi Validasi Nilai:
Fungsi ini bernama validasiNilai yang bertujuan untuk memeriksa apakah suatu nilai berada dalam rentang 0 hingga 100. Fungsi ini mengembalikan true jika nilai berada dalam rentang yang valid, dan false jika tidak.

Validasi Input:
Fungsi memeriksa apakah semua nilai input valid menggunakan fungsi validasiNilai. Jika ada nilai yang tidak valid, fungsi akan menampilkan pesan kesalahan "Semua nilai harus antara 0 dan 100!" dan menghentikan eksekusi.

Menghitung Rata-rata:
Fungsi menjumlahkan semua nilai yang diberikan dan kemudian membaginya dengan 4 untuk mendapatkan rata-rata.

Menentukan Grade:
Berdasarkan rata-rata yang telah dihitung, fungsi menentukan grade dengan ketentuan sebagai berikut:

- Grade A jika rata-rata >= 90
- Grade B jika rata-rata >= 80 dan < 90
- Grade C jika rata-rata >= 70 dan < 80
- Grade D jika rata-rata >= 60 dan < 70
- Grade E jika rata-rata < 60

Output Hasil:
Fungsi akan menampilkan rata-rata yang telah dihitung (dengan dua angka di belakang koma) dan grade yang telah ditentukan ke konsol.

Contoh Penggunaan:
Ketika fungsi dipanggil dengan contoh nilai 85, 90, 78, dan 92 untuk masing-masing parameter, fungsi akan menghitung rata-rata dari nilai-nilai tersebut dan menentukan grade berdasarkan rata-rata, kemudian menampilkannya.

Kode ini membantu untuk memvalidasi nilai, menghitung rata-rata, dan mengkategorikan hasil akhir dalam bentuk grade secara otomatis.
