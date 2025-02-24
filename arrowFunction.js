// arrow function adalah versi minimalis dari function expression


// jika function tidak memiliki parameter, wajib disertai dengan buka tutup kurung dan tidak perlu menggunakan kata function seperti function expression
    // contoh nya
let nama = () => {
    console.log(`rian ferdian`);
}
nama();


// dibawah ini dalah arrow function dengan 2 parameter
    // contoh nya
let greeting = (name, hari) => {
    console.log(`halo ${name}, selamat ${hari}`)
}

greeting('rian siku', 'pagi')


// dibawah ini adalah arrow function dengan satu parameter, jika hanya memerlukan satu buah parameter kita bisa tidak menggunakan buka tutup kurung
// kita bisa hanya meletakan parameter nya saja lalu di lanjut dengan tanda arrow
    // contoh nya
let mahasiswa = nama => {
    console.log(`halo ${nama}, sebagai mahasiswa baru`);
}

mahasiswa('rians')

// kita bisa menghilangkan tanda kurung kurawal nya jika ingin menampilkan / me return sesuatu
    // pada contoh di bawah, function tanpa parameter dan hanya menampilkan pesan dari console.log saja
let x = () => console.log(`itu adalah saya`)
x()

// jika ingin me return sebuah object kita perlu menambahkan buka tutup kurung pada tanda kurung kurawal
        // yang biasanya seperti ini:
            // let x = () => {}

        // menjadi seperti ini:
            // let x = () => ({})

    // contoh nya
let displayBarang = (namaMahasiswa, semesterMahasiswa) => ({nama: namaMahasiswa, semester: semesterMahasiswa})

console.log(displayBarang('agus salim', 5))


// contoh lain nya, jika ingin menampilkan object pada array
    // contoh nya
let dataBarang = [
    {
        namaBarang: "Beras",
        harga: 50000,
        stok: 5,
    },
    {
        namaBarang: "Ketan",
        harga: 40000,
        stok: 5,
    },
];

let dataBarangBahari = dataBarang.forEach(item => {
    console.log(`nama barang adalah ${item.namaBarang}`);
    console.log(`harga barang adalah ${item.harga}`);
    console.log(`stok barang adalah ${item.stok}`);
});