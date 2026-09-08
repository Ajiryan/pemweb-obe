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

# Proyek Individu: Platform Donasi Barang

Repositori ini berisi kode sumber untuk Halaman Utama (Homepage) dari Platform Donasi Bencana dan Peduli Sesama. Proyek ini dibangun menggunakan struktur HTML5 yang memenuhi standar aksesibilitas dasar.

## 1. Struktur Halaman & Fitur Utama
Halaman `index.html` dibangun dengan komponen semantik HTML5, meliputi:
- **Header & Navigasi (`<header>`, `<nav>`):** Berisi judul utama dan menu navigasi cepat menuju section Berita, Panduan, Auth, dan Form Donasi.
- **Berita Lapangan (`<section>`, `<article>`):** Menampilkan pembaruan kondisi posko dan laporan penerimaan barang donasi.
- **Panduan Berdonasi (`<section>`):** Berisi langkah-langkah alur pengajuan donasi barang bagi pengguna.
- **Autentikasi (`<section>`):** Pilihan masuk cepat (OAuth) serta form login/registrasi manual.
- **Form Pengajuan Donasi (`<section>`, `<form>`, `<fieldset>`):** Form bertahap untuk mendata nama, kategori barang, posko tujuan, dan detail barang.
- **Footer (`<footer>`):** Berisi informasi hak cipta halaman.

## 2. Checklist Aksesibilitas Dasar (Web Accessibility / A11y)
Berikut adalah penerapan standar aksesibilitas web yang telah diterapkan pada proyek ini:

- **Atribut `lang` pada Tag HTML:** Penggunaan atribut `lang="id"` pada tag pembuka `<html>` berfungsi untuk memberi tahu *screen reader* dan browser bahwa seluruh isi dokumen menggunakan bahasa Indonesia, sehingga penuturan suara (*text-to-speech*) dapat melafalkan kata-kata dengan dialek yang benar.
- **Struktur Heading yang Logis:** Penyusunan judul menggunakan tag `<h1>` hingga `<h3>` secara hierarkis dan runtut tanpa melompati tingkatan (`h1` -> `h2` -> `h3`) agar struktur informasi mudah dipahami oleh teknologi asistif.
- **Deskripsi Gambar dengan `alt text`:** Setiap elemen `<img>` dilengkapi dengan atribut `alt` yang mendeskripsikan konteks visual gambar secara jelas, sehingga pengguna dengan keterbatasan penglihatan tetap mendapatkan informasi relevan saat gambar dibacakan oleh pembaca layar.
- **Keterhubungan Label Form (`<label>`):** Seluruh elemen input pada form dihubungkan secara tegas ke teks penjelasnya menggunakan atribut `for` pada tag `<label>` yang nilainya sama persis dengan `id` pada elemen input tersebut.
- **Teks Tautan/Link yang Deskriptif:** Penggunaan kata-kata pada tag `<a>` dibuat informatif dan menjelaskan tujuan dari tautan tersebut (misalnya "Baca artikel selengkapnya"), menghindari kata-kata ambigu seperti "Klik di sini".
- **Pengujian Navigasi Keyboard:** Semua elemen interaktif (seperti menu navigasi, tautan, tombol, dan form) dapat diakses dan dipindahkan dengan mulus menggunakan tombol `Tab` dan `Enter/Space` pada keyboard.

## 3. Alur Pengguna (Sitemap / Wireframe Overview)
1. **Homepage:** Menampilkan berita dan petunjuk cara berdonasi.
2. **Autentikasi:** Donatur melakukan login/registrasi akun.
3. **Pengajuan:** Donatur mengisi form detail barang dan memilih posko tujuan.
4. **Verifikasi:** Pengajuan masuk ke sistem untuk ditinjau oleh tim/admin sebelum pengiriman barang.

---
*Dibuat untuk memenuhi Tugas OBE Pertemuan 2 - Proyek Individu.*