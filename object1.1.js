// mengingat kembali tentang Object di javascript

// didalam object harus menggunakan this.

// object literal
    // kekurangan object literal adalah, kita tidak bisa membuat object dengan naman variabel yang sama. Semisal sudah ada object dengan nama variabel mahasiswa, tidak boleh ada nama object mahasiswa lagi
// let mahasiswa = {
//     nama: 'Rizal',
//     energi: 10,
//     isiEnergy: function(porsi){
//         this.energi = this.energi + porsi;
//         return(`halo ${this.nama} energy anda sekarang adalah ${this.energi}`);
//     }
// };

// console.log(mahasiswa.isiEnergy(10))

// object declaration
// function Mahasiswa(nama, energi){
//     let mahasiswa = {} // membuat object nya terlebih dahulu (object kosong)
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.isiEnergi = function(porsi){
//         this.energi += porsi;
//         return(`halo ${this.nama} energi kamu sekarang adalah ${this.energi}`)
//     };
    
//     return mahasiswa; // pemberian return kepada nama object harus di berikan, sebab ini akan membuat nya menjadi error
// };

// let rizal = Mahasiswa('rizal', 100)
// console.log(rizal.isiEnergi(500))



// object constructor
function Mahasiswa(nama, energi){
    // pada constructor kita tidak perlu lagi membuat variabel object kosong, di ganting dengan membuat nama variabel saat memanggil lalu di beri 'new'.
    // kita hanya perlu memberikan this. bukan lagi menggunakan nama variabel object lagi. Ini membuat code program terlihat lebih simple
    this.nama = nama;
    this.energi = energi;

    this.isiEnergi = function(porsi){
        this.energi += porsi;
        return(`halo ${this.nama}, energi kamu saat ini adalah ${this.energi}`)
    };

    this.main = function(main){

        this.energi -= (main * 60);
        return(`halo ${this.nama}, energi kamu saat ini adalah ${this.energi}`)
    }
}

let mahasiswa = new Mahasiswa('rian', 200) 
console.log(mahasiswa.isiEnergi(500))
console.log(mahasiswa.main(5))