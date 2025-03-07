// destructuring assigment / destructuring variable 
// destructuring assigment / destructuring variable merupakan expression pada javascript yang dapat membongkar sebuah nilai pada array atau properti pada object kedalam variable baru

// Contoh pada object
// 1 memberikan vairbel baru
const nilaiMhs = [90, 80, 70, 65];
const [rika, dian, nina] = nilaiMhs; // kita bisa memberikan variabel baru dan melakukan assigment pada array sebelum nya. sehingga tidak lagi memanggil index array nya
// console.log(rika)

// 2 tidak memberikan varibel baru kepada nilai array
const [rian, , , niko] = nilaiMhs; // jika terdapat nilai array yang tidak ingin dimasukan varibel baru, bisa mengosongkan nya namun tetap memberikan tanda koma
// console.log(niko)

// 3 swap
let a = 1;
let b = 2;
// sebelum di swap
// console.log(a);
// console.log(b);

// setelah di swap
[a , b] = [b , a];
// console.log(a);
// console.log(b);

// 4 return value pada function
function satwa(){
    return ["singa", "jerapah"];
}

const [karnifora, herbifora] = satwa()
// console.log(herbifora)


// rest parameter
const tinggiBadan = [170, 160, 159, 166];
const [fadli, ...casis] = tinggiBadan; // ... (titik tiga) disebut juga sebagai rest parameter. ia akan memasukan nya kedalam array
// console.log(fadli)


// PASTIKAN NAMA PADA VARIABEL YANG DIBUAT SAMA DENGAN NAMA OBJECT
// Object
const dosen = {
    id: 123,
    nama: "sandhika",
    namas: "rikowalo",
    umur: 31
}

let {id, nama, umur} = dosen; // cara membuat nya hampir sama seperti array
// console.log(id)


// Object tanpa assign
({namaSatwa, asalSatwa} = {namaSatwa: "riko", asalSatwa:"kalimantan"});
// console.log(namaSatwa); // tidak bisa dijalankan jika dengan node, jalankan pada console browser

//set value default pada object
let {ids, namas = "fiko", umurs} = dosen    // memberikan nilai default jika tidak terdapat properti tersebut pada object,
                                            // namun jika ada value pada properi object maka akan di ambil dari object bukan dari default.
// console.log(namas)

// set variabel baru
let {nama: n, umur: u} = dosen; 
// console.log(n);
// console.log(u);

// menggabungkan value dafault dengan variabel baru
let klinik = {
    namaBidan: 'ratna',
    jamKerja: '13:00',
    alamat: 'jalan sukar dicari'
}

const {namaBidan: nb ="risi", jamKerja: jk, alamat: al} = klinik;
// console.log(nb)

// rest parameter
let {namaBidan, ...value} = klinik; // jika menggunakan rest parameter properti yang lain akan masuk ke object baru
console.log(value);

// mengambil field pada object setelah memasukan nya sebagai parameter function
function ambilKlinik( {alamat} ){ // ditambahkan nya kurung kurawal pada parameter, namun ini harus sama dengan object yang dibuat
    return alamat; // ini pun harus sama dengan parameter yang dipanggil
}
// console.log akan memberikan parameter pada function ambilKlinik lalu akan di pilih properti nya sesuai parameter lalu akan di return,
// itu sebab nya parameter harus sama dengan properti pada object, sebab jika tidak function tidak bisa menemukan properti yang sama pada object
console.log(ambilKlinik(klinik))







