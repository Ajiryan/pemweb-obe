# Praktikum Pemrograman Web

## Identitas Mata Kuliah
* **Mata Kuliah:** Pemrograman Web (OBE)
* **Proyek:** Latihan Struktur Dasar HTML & Konfigurasi Server Lokal

---

## Deskripsi Singkat Proyek
Proyek ini merupakan proyek dasar untuk mata kuliah Pemrograman Web. Proyek berisi file `index.html` dengan struktur HTML5 minimum yang menampilkan teks dasar sebagai fondasi awal pengembangan aplikasi web berbasis OBE (Outcome-Based Education).

---

## Teknologi yang Digunakan
* **HTML5** — Bahasa markup utama untuk struktur halaman web.
* **Laragon 5** — Lingkungan pengembangan lokal (*local development environment*) menggunakan web server Apache.
* **Git & GitHub** — Pengontrol versi (*version control system*) dan repositori kode.

---

## Cara Menjalankan Proyek (Laragon 5)

1. **Clone Repositori**  
   Buka terminal/command prompt, masuk ke direktori web server Laragon (`C:\laragon\www\`), lalu jalankan perintah:
   ```bash
   cd C:\laragon\www
   git clone [https://github.com/Ajiryan/pemweb-obe.git](https://github.com/Ajiryan/pemweb-obe.git)

1. Jalankan Laragon
    Buka aplikasi Laragon 5.
    Klik tombol Start All untuk mengaktifkan layanan Apache & MySQL.
2. Akses Proyek
    Buka browser favorit Anda, lalu kunjungi URL lokal di bawah ini.

URL Lokal Access
URL Utama: http://localhost/pemweb-obe/

URL Auto-Virtual Host Laragon (Opsional): http://pemweb-obe.test/ (jika fitur Auto Virtual Hosts pada Laragon diaktifkan)


*diperbaharui pukul : 10.49

# Portal Kurikulum Outcome-Based Education (OBE)

## Deskripsi Halaman
Halaman web berbasis HTML5 semantik ini berfungsi sebagai portal informasi Kurikulum Outcome-Based Education (OBE). Struktur dokumen mencakup informasi program, daftar berita/artikel, dan formulir kontak sederhana.

## Cara Menjalankan (Laragon 5)
1. Buka aplikasi Laragon 5.
2. Simpan folder proyek ini di dalam direktori `C:\laragon\www\pemweb-obe`.
3. Klik Start All pada Laragon 5 untuk mengaktifkan Apache/Nginx.
4. Akses `http://localhost/pemweb-obe/` di browser.

## Catatan Fitur Selesai
- [x] Struktur HTML5 semantik (`header`, `nav`, `main`, `section`, `article`, `form`, `footer`)
- [x] Hierarki heading yang logis (`h1` hingga `h3`)
- [x] Penggunaan atribut `alt` informatif dan dekoratif (`alt=""`) pada gambar
- [x] Formulir kontak dengan keterkaitan `label` (`for`) dan `input` (`id`)
- [x] Aksesibilitas navigasi urut menggunakan tombol `Tab`