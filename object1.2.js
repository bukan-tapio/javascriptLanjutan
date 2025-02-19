// Belajar menggunakan object.create()
// let character = {
//     nama: 'rizal',
//     rank: 'master',
//     health: 100,
//     attack: function(attack){
//         this.health -= attack;
//         if(this.health < 0){
//             return(`kamu sudah kalah`)
//         }
//         return(`darah mu tersisa ${this.health}`)
//     },
// }

// console.log(character.attack(400))

// contoh penggunaan object.create() pada object declaration
    //Kekurangan dari object declaration adalah, function yang di tulis akan tetap di buat walau tidak di gunakan. Ini membuat program tetap memesan ruang pada memory walau tidak di gunakan
    //Ini kurang baik dalam management memory. Sehingga kita perlu membuat function tersebut keluar dari object nya / membuat object baru.

const attackAndHeal = { //object untuk attack dan heal
    attack: function(attack){
        this.health -= attack;
        if(this.health < 0){
            return(`kamu sudah kalah`)
        };

        return(`Kamu terkena damage attack sebesar ${attack}, nyawamu tersisa ${this.health}`);
    },

    heal: function(heal){
        this.health += heal;

        return(`Nyawa mu sudah bertambah, menjadi ${this.health}`);
    },

    doHeal: function(item){
        if(item === "plester"){
            this.health += 10;
            return(`kamu menggunakan ${item}, sehingga nyawa mu sekarang adalah ${this.health}`);
        }else{
            return(`tidak ditemukan, nyawa mu tersisa ${this.health}`)
        }
    },
};

// let Character = function(nama, rank, health){ //seperti ini sudah membaik, namu ini membuat kita harus mengurus dua object, akan mempersulit jika ada penambahan function pada object
//     let character = {};

//     character.nama = nama;
//     character.rank = rank;
//     character.health = health;
//     character.attack = attackAndHeal.attack;
//     character.heal = attackAndHeal.heal; 

//     return character;
// };

let Character = function(nama, rank, health){
    let character = Object.create(attackAndHeal); //untuk mempermudah, kita bisa merubah tanda kurawal untuk membuat object menggunakan object.crate()
        // Ini akan secara otomatis menargetkan object parent nya atau object yang terhubung dengan Object.create(); Sehingga tidak perlu lagi menuliskan program seperti sebelum nya.
    character.nama = nama;
    character.rank = rank;
    character.health = health;

    return character;
}

let rian = Character('Rusdi', 'Legend', 200) // dibagian ini merupakan inisiasi. fungsi akan tetap dibuat walau tidak di gunakan. Solusi nya adalah membuat object baru yang berisi function
console.log(rian.health)
console.log(rian.attack(50))
console.log(rian.heal(100))
console.log(rian.doHeal("plester"))

// walau dari segi management memory sedikit lebih baik masih terdapat masalah, untuk memperbaiki masalah yang sebelum nya kita perlu membuat dua object, itu berarti kita harus mengurus dua object tersebut
// padahal di sini kita hanya perlu mengurus satu object saja, yaitu object Character.
