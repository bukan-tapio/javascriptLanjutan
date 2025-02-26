// mencari angka lebih dari 3
const lAngka = [-1. -9, 8, 7, 0, 1, 2, 3, 4, 5];
const lTampung = []
for(let i = 0; i < lAngka.length; i++){
    if(lAngka[i] > 3){
        lTampung.push(lAngka[i]);
    };
};
// console.log(lTampung);

// filter, map, dan reduce dan Method chaind

// methode filter berfungsi untuk memfilter array sesuai yang di inginkan
    // Contoh methode filter menggunakan function anonymous
const lHasilFilter = lAngka.filter(function(a) { // a atau parameter a pada function merupakan representasi dari lAngka atau array
    return a > 3;
});
console.log(lHasilFilter);

    // Contoh methode filter menggunakan arrow function
const lHasilFilterArrow = lAngka.filter(a => a > 3); // a atau parameter a pada function merupakan representasi dari lAngka atau array
console.log(lHasilFilterArrow);


// methode map berfungsi merupakan memetakan semua array pada function yang baru dan array yang lama tidak hilang

    // contoh methode map pada arrow function
const lHasilMap = lAngka.map(a => a * 2); // a atau parameter a pada function merupakan representasi dari lAngka atau array
console.log(lHasilMap)
console.log(lAngka)

// methode reduce berfungsi untuk melakukan sesuatu terhadap semua array
const lHasilReduce = lAngka.reduce(function(acc, cur){  // reduce memiliki 2 parameter wajib yang harus di isi
                                                        // parameter 1 : merupakan array pertama yang akan di akumulasi
                                                        // parameter 2 : merupakan array saat ini atau array yang ingin di akumulasi
    return acc + cur;
}, 0);  // dan ini merupakan nilai yang dapat di berikan untuk di jumlahkan sebelum array sebelum nya
        // sehingga jika pada array [-1. -9, 8, 7, 0, 1, 2, 3, 4, 5];
        // maka secara default akan menambahkan angka 0 di awal menjadi 0 + -1 + -9 + 8 + 7 + 0 + 1 + 2 + 3 + 4 + 5.
        // namun ini opsional, jika tidak di tambahkan secara default akan bernilai 0
console.log(lHasilReduce);

// methode chaining atau methode berantai
// kita dapat memberikan beberapa methode yang pada sebuah operasi
// Contoh
// 1) saya ingin mencari bilangan array lebih dari 3
// 2) mengalikan semua nya dengan 3
// 3) lalu menjumlahkan semua nya, untuk mengetahui berapa total array yang baru di buat

const lHasilChaining = lAngka.filter(a => a > 3) // memfilter semua array yang nilai nya lebih dari 3
    .map(a => a * 3) // memaping agar semua array di kali dengan 3
    .reduce((acc, cur) => acc + cur); // menjumlahkan semua array baru yang sudah di kali 3

console.log(lHasilChaining); // hasil nya adalah 72


