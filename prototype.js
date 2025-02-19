// Belajar prototype
// Prototype merupakan object yang berada di balik layar javascript

// sebelum nya kita menggunakan Object.create() pada object declaration
const characterdo = {
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
}

let Char = function(nama, rank, health){
    let character = Object.create(characterdo);

    character.nama = nama;
    character.rank = rank;
    character.health = health;

    return character;
}

// let rian = Char('rian', 'master', 200)
// console.log(rian)

// kita jadi perlu mengurus dua object, sebetul nya kita hanya memerlukan object Char saja.
// Object.create sebenarnya menjalankan protype di belakang nya.

// Kita bisa coba prototype dengan constructor
let Character = function(nama, rank, nyawa){
    this.nama = nama;
    this.rank = rank;
    this.nyawa = nyawa;
}

Character.prototype.serang = function(attack){
    this.nyawa -= attack;
    if(this.nyawa <= 0){
        return(`kamu sudah kalah`);
    };

    return(`nyawa mu tersisa ${this.nyawa}`);


};

Character.prototype.doHeal = function(itemHeal){
    if(itemHeal === "plester"){
        this.nyawa += 10;
        return(`nyawa mu menjadi ${this.nyawa}`);
    };
};

Character.prototype.heal = function(heal){
    this.nyawa += heal;
    return(`nyawa mu sekarang adalah ${this.nyawa}`)
};

let rian = new Character('rian', 'master', 200);
console.log(rian)
console.log(rian.doHeal("plester"))
console.log(rian.serang(200))
console.log(rian.heal(1000))

// dengan menggunakan constructor dan prototpye ini menjadi lebih simple dan mudah di baca

