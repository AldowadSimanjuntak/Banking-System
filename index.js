// Impor modul 'os' untuk mengakses informasi sistem
const os = require('os');
// Impor fungsi perhitungan luas dari berbagai jenis bangun datar
const LuasSegitiga = require('./segitiga');
const LuasPersegi = require('./persegi');
const LuasLingkaran = require('./lingkaran'); 

// Menampilkan pesan di konsol
console.log("Memory ku tersisa sebanyak:");
console.log("Free Memory", os.freemem());

// Contoh penggunaan fungsi
console.log("Luas Segitiga:", LuasSegitiga(10, 5));
console.log("Luas Persegi:", LuasPersegi(5));
console.log("Luas Lingkaran:", LuasLingkaran(7));