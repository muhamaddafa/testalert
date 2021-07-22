// menulis java script

/* var x = 10;
console.log("Hello World");
console.log("Isi dari variabel x adalah " + x);
*/

/* akhir menulis javascrpit */

// Pop Up Box

// Alert
/* alert("Hello World");
alert("Halo");
alert("Nama saya");
alert("Muhamad Dafa"); */

// Prompt
/* var nama = prompt("Masukan Nama");
alert("Halo " + nama + " Selamat Pagi"); */

// Confirm
/* var tes = confirm("Apakah Kamu Yakin??");
if (tes === true) {
  alert("OKE TERIMAKASIH");
} else {
  alert("Oke anjing");
} */

/* Akhir Pop Up Box */

// Control Flow (Pengulangan & Pengkondisian)

// Pengulangan (WHILE)
/* var ulang = true;
while (ulang) {
  console.log("Muhamad Dafa");
  ulang = confirm("Lagi?");
} */

/* var nilaiAwal = 1;
while (nilaiAwal <= 10) {
  console.log("muhamad Dafa");
  nilaiAwal++;
} */

var nama = prompt("Masukkan Nama Anda :");
var tes = confirm("Halo " + nama + " Apakah Kamu Siswa 12 Mipa 7 ?");

if (tes === false) {
  window.close();
}
