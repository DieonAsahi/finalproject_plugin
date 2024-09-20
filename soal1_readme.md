Penjelasan HTML:
1. Bagian Header

Menggunakan tag <header> untuk menampilkan bagian atas halaman yang berisi gambar profil, nama, dan deskripsi singkat.
Gambar profil dimuat dari folder Foto dengan nama file yang panjang.
Nama dan deskripsi singkat diletakkan dalam elemen heading <h1> dan paragraf <p>.

2. Navigasi
Menggunakan tag <nav> untuk navigasi halaman.
Navigasi di dalam container yang menggunakan elemen daftar tidak terurut (<ul>) dan setiap tautan diwakili oleh elemen daftar (<li>).

3. Konten Utama
Tentang Saya: Menggunakan tag <section> dengan id tentang, berisi heading <h2> dan beberapa paragraf <p> yang mendeskripsikan latar belakang dan minat.
Keahlian: Menggunakan tag <section> dengan id keahlian, berisi heading <h2> dan daftar tidak terurut (<ul>) yang mendeskripsikan keterampilan.
Pendidikan: Menggunakan tag <section> dengan id pendidikan, berisi heading <h2> dan beberapa item pendidikan dalam div education-item.
Portofolio: Menggunakan tag <section> dengan id portofolio, berisi heading <h2> dan beberapa item portofolio dalam div portofolio-item.

4. Footer
Menggunakan tag <footer> yang berisi dua bagian: kontak dan hak cipta.
Kontak: Menggunakan tag <section> dengan id kontak, berisi heading <h2> dan beberapa paragraf <p> untuk email, telepon, dan LinkedIn.
Hak Cipta: Menggunakan tag <section> dengan id copyright, berisi satu paragraf <p> dengan teks hak cipta.

Penjelasan CSS:
Kode CSS ini mendefinisikan gaya untuk berbagai elemen dalam halaman web profil, memastikan tampilan yang konsisten, modern, dan menarik. Berikut adalah penjelasan mendetail untuk setiap bagian kode CSS:

A. Reset dan Pengaturan Dasar
1. Reset CSS
- Menghapus margin dan padding default dari semua elemen.
- Mengatur box-sizing: border-box agar padding dan border termasuk dalam ukuran elemen, memudahkan dalam pengaturan ukuran elemen.
2. Gaya Dasar untuk body
- Mengatur font default menggunakan 'Arial' atau font sans-serif lainnya.
- Mengatur line-height: 1.6 untuk jarak antar baris yang lebih nyaman dibaca.
- Mengatur warna teks menggunakan warna abu-abu gelap dengan nilai hue, saturation, dan lightness (HSL).
3. Container
- Mengatur lebar kontainer menjadi 80% dari lebar layar.
- Menggunakan margin: 0 auto untuk membuat kontainer berada di tengah.
- Menggunakan overflow: hidden untuk menangani elemen yang keluar dari kontainer.
- Menambahkan padding vertikal 10px.

B. Gaya untuk Header
1. Header
- Menggunakan gambar latar belakang yang diatur untuk tidak mengulang, diposisikan di tengah, dan mencakup seluruh area.
- Mengatur warna teks menjadi hampir putih dengan sedikit transparansi.
- Menyelaraskan teks di tengah.
- Menambahkan padding vertikal kecil.
- Mengatur posisi relatif untuk penempatan elemen anak secara absolut.
2. Foto Profil
- Mengatur lebar dan tinggi gambar menjadi 150px.
- Menggunakan border-radius: 50% untuk membuat gambar menjadi bulat.
- Menggunakan object-fit: cover untuk memastikan gambar mengisi seluruh area dengan proporsi yang benar.
- Menempatkan gambar secara absolut di 20px dari atas dan di tengah horizontal menggunakan left: 50% dan transform: translateX(-50%).
3. Judul di Header
- Mengatur ukuran font menjadi 2.5em.
- Menambahkan margin atas 180px untuk memberikan ruang bagi foto profil.
- Menambahkan margin bawah 10px.

C. Gaya untuk Navigasi
1. Navigasi
Mengatur warna latar belakang navigasi menjadi abu-abu gelap.
2. Daftar Navigasi
- Menambahkan padding 10px.
- Menghapus bullet list dengan list-style: none.
- Menggunakan flexbox untuk menampilkan item secara horizontal dan meratakan di tengah.
3. Item Navigasi
Menambahkan margin horizontal 15px antara item navigasi.
4. Tautan Navigasi
- Mengatur warna teks menjadi putih.
- Menghapus dekorasi teks.
- Menambahkan padding 10px vertikal dan 20px horizontal.
- Mengatur tampilan menjadi block untuk membuat area klik lebih besar.
- Mengatur ukuran font menjadi 1.1em.
- Mengubah latar belakang menjadi hijau dan menambahkan border-radius saat tautan di-hover.

  
