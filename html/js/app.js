// Array objek inventaris dengan tema Kuliner & Katering RasaLokal
const inventaris = [
  {
    id: 1,
    nama: "Wajan Besar Stainless",
    kategori: "Peralatan Dapur",
    jumlah: 12,
    kondisi: "Baik"
  },
  {
    id: 2,
    nama: "Bumbu Rendang Spesial (Pack)",
    kategori: "Bahan Baku",
    jumlah: 45,
    kondisi: "Baik"
  },
  {
    id: 3,
    nama: "Pemanas Makanan Catering (Chafing Dish)",
    kategori: "Peralatan Penyajian",
    jumlah: 8,
    kondisi: "Perlu Perbaikan"
  },
  {
    id: 4,
    nama: "Kotak Nasi Prasmanan (Box)",
    kategori: "Kemasan",
    jumlah: 150,
    kondisi: "Baik"
  },
  {
    id: 5,
    nama: "Blender Industri",
    kategori: "Peralatan Dapur",
    jumlah: 2,
    kondisi: "Rusak"
  }
];

// Menggunakan metode .filter() JavaScript untuk mendapatkan inventaris dengan kondisi "Baik"
const inventarisBaik = inventaris.filter((item) => item.kondisi === "Baik");
console.log("Inventaris dengan Kondisi Baik:", inventarisBaik)

// Menggunakan metode .map() JavaScript untuk mendapatkan daftar nama alat dari inventaris
const namaAlat = inventaris.map((item) => item.nama);
console.log("Daftar Nama Alat:", namaAlat);

// Menggunakan metode .reduce() JavaScript untuk menghitung total jumlah seluruh alat
const totalJumlahAlat = inventaris.reduce((total, item) => total + item.jumlah, 0);
console.log("Total Jumlah Seluruh Alat:", totalJumlahAlat);

// Fungsi untuk merangkum data inventaris menjadi ringkasan statistik
function ringkasInventaris(data) {
  return {
    totalJenisBarang: data.length,
    totalUnit: data.reduce((total, item) => total + item.jumlah, 0),
    jumlahKondisiBaik: data.filter((item) => item.kondisi === "Baik").length,
    jumlahKondisiPerbaikan: data.filter((item) => item.kondisi === "Perlu Perbaikan").length,
    jumlahKondisiRusak: data.filter((item) => item.kondisi === "Rusak").length
  };
}
// Menggunakan fungsi ringkasInventaris untuk mendapatkan ringkasan inventaris
const ringkasanInventaris = ringkasInventaris(inventaris);
console.log("Ringkasan Inventaris:", ringkasanInventaris);

// Meng-export variabel inventaris agar dapat di-import oleh file JS lain jika diperlukan
export { inventaris, inventarisBaik, namaAlat, totalJumlahAlat, ringkasanInventaris };

// Menampilkan data di Console browser untuk pengecekan awal
console.log("Data Inventaris RasaLokal:", inventaris);