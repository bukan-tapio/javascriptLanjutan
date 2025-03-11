// ARRAY
// Destructuring array pada function
function kalkulasi (a, b){
    return [a + b, b - a, a * b, a / b];
}

const [tambah, kurang, kali, bagi] = kalkulasi(3, 4);
// console.log(bagi)

// Penggunaan seperti ini memang sangat oke sekali, namun ada masalah jika nama variabel tidak sama dengan operasi pada array yang ada di function
// Contoh
function persegi (s){
    return [s + s + s + s, s * s];
}

const [luas, keliling] = persegi(5);
// console.log(luas); // variabel yang di buat merepresentasikan array yang di return, atau kita bisa menggunakan object


// Destructuring object pada function
function kalkulasiSegitigaSiku(alasSegitiga, tinggiSegitiga){
    return{
        luasSegitiga: (alasSegitiga * tinggiSegitiga) * 0.2,
        kelilingSegitiga: alasSegitiga + (tinggiSegitiga * 2)
    }
}

const {luasSegitiga, kelilingSegitiga} = kalkulasiSegitigaSiku(10, 3);
// console.log(kelilingSegitiga);


// OBJECT
// menggunakna destructuring
const Mahasiswa = {
    nama: "rizal",
    nim: 123,
    jurusan: "informatika",
}

const Dosen = {
    nama: "arry",
    nid: 1234,
    jurusan: "informatika",
    pengampu: {
        pagi: "Manejemen proyek",
        siang: "Struktur data",
        malam: "Keamanan cyber",
    }
}

// cara 1
function tampilMahasiswa1(nama, jurusan){
    return `hi, ${nama} kamu berada di jurusan ${jurusan}`;
}
// console.log(tampilMahasiswa1(mahasiswa.nama, mahasiswa.jurusan)); 

function tampilMahasiswa2(mhs){
    return `hi, ${mhs.nama} kamu berada di jurusan ${mhs.jurusan}`;
}
// console.log(tampilMahasiswa2(mahasiswa));


function tampilMahasiswa2({nama, jurusan}){
    return `hi, ${nama} kamu berada di jurusan ${jurusan}`;
}
// console.log(tampilMahasiswa2(mahasiswa));



    // sedikit compleks
function tampilDosen1({nama, nid, jurusan, pengampu: {pagi, siang, malam}}){
    return `halo pak ${nama}, pagi ini anda mengajar ${pagi}, lanjut siang nanti mengajar ${siang}, dan malam nya mengajar ${malam}`
}
// console.log(tampilDosen1(Dosen));

function tampilDosen2(dosen){
    return `halo pak ${dosen.nama}, pagi ini anda mengajar ${dosen.pengampu.pagi}, lanjut siang nanti mengajar ${dosen.pengampu.siang}, dan malam nya mengajar ${dosen.pengampu.malam}`
}
// console.log(tampilDosen2(Dosen));

function tampilDosen3(nama, pengampu){
    return `halo pak ${nama}, pagi ini anda mengajar ${pengampu.pagi}, lanjut siang nanti mengajar ${pengampu.siang}, dan malam nya mengajar ${pengampu.malam}`
}
// console.log(tampilDosen3(Dosen.nama, Dosen.pengampu));



