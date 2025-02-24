// Penggunaan var, let, const

// JANGAN GUNAKAN var LAGI
// Javascript merupakan bahasa yang function block, bukan code block sehingga penggunaan var untuk membuat variabel menjadi hal yang rumit.
// Jika menggunakan var kita perlu menggunakan function, agar variabel yang menggunakan var tidak dapat di akses di code program yang lain.
// Ini bisa menjadi masalah saat code program sudah banyak atau sudah besar.
// function main(){
//     for(var i = 0; i < 10; i++){
//         console.log(i)
//     }
// }

// console.log(i)

// gunakan let dan const
// let
// for(let i = 0; i < 5; i++){
//     console.log(i)
// }
// console.log(i) // dengan menggunakan let, variabel i pada loop for tidak dapat di akses di luar itu. Ini membuat suatu variabel menjadi block code.

// const
// let dan const walau sama-sama memiliki sifat block code. const tidak sama seperti let, nilai pada const tidak boleh di ubah atau benar-benar di buat baru.
// const mhs = 10;
// mhs = 30;
// console.log(mhs) // perubahan nilai dari 10 menjadi 30 pada variabel const tidak di perbolehkan, ini berfungsi untuk meminimalisir perubahan state.

// namun tidak sepenuh nya tidak bisa di ubah
// Contoh object
const mhs = {
    nama: "sandhika",
    umur: 31
}
mhs.umur = 20; // umur pada object berubah menjadi 20

console.log(mhs)

// Contoh array
const arr = [1,2,3,4];
arr.push(9)
console.log(arr)

// Tidak boleh di ubah jika menjadikan nya object baru
// Contoh object
const mahasiswa = {
    nama: 'rian',
    umur: 100
}

mahasiswa = {
    nama: 'agus'
}

console.log(mahasiswa) // Ini akan menjadi error, karena merubah nya menjadi object baru

// Contoh array
const generasi = [7,9,10,11,12]
generasi = [7,9,10,11,12,13]
console.log(generasi) // Ini akan menjadi error, karena merubah nya menjadi object baru

