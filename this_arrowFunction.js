// konsep this berlaku pada function declaration dan funtion expression
    // konsep this tidak berlaku pada arrow function

// ada 3 hal yang penting
    // 1. function expression memiliki konsep this, sehingga jika tidak di temukan variabel pada inner function nya maka akan di cari ke parent nya
    // 2. function declaration memiliki konsep this, berbeda dengan expresseion, declaration akan terkena hoisting jika variabel nya tidak pada pada inner nya.
    //      Ia akan mencari ke window, bukan ke parent nya.
    // 3. arrow function tidak memiliki konsep this, sehingga untuk beberapa kasus variabel yang di panggil menggunakan arrow function akan undefined.
    //  Contoh nya pada Object literal.
    

// Contoh function expression
let Mahasiswa = function(){
    this.nama = "rizal",
    this.umur = 22;

// function anonymous
    setInterval(function(){ // pada setInterval menggunakan function anonymous, karena varibael this.nama tidak ada pada inner function
    //                         ia tidak mencari pada parent nya
        console.log(this.nama);
    }, 1000); 

    setInterval(function(){ // pada setInterval menggunakan function anonymous, kita bisa lihat, this ini merujuk papda window bukan pada object Mahasiswa
            console.log(this);
        }, 1000); 

// arrow function
    setInterval(() => {
        console.log(this.nama) // karena arrow function tidak memiliki konsep this, maka ia akan mencari pada parent nya nya
    }, 1000);

    setInterval(() => {
        console.log(this) // pada contoh ini, arrow function akan merujuk pada object Mahasiswa, berbeda dengan function anonymous tadi yang berujuk pada window (karena terkena hoisting)
    }, 1000);

};

const x = new Mahasiswa();

// object literal
let Dosen = {
    nama: "rahmi",
    nid: 220901,
    ngajar: function(){ // pada kasus object seperti ini, function declaration memiliki fungsi this, sehingga ia akan merujuk pada object nya
        console.log(`dengan nid ${this.nid}, mengajar logika`)
    },
};

// arrow function
let Petugas = {
    nama: "riko",
    nid: 22088,
    jaga: () => { // arrow function tidak memiliki fungsi this, sehingga jika variabel yang di cari tidak ada pada innernya maka akan bernilai undefined
        // namun jika ada pada inner nya, maka ia akan mengambil dari inner nya.

        // this.nid = 31221
        console.log(`dengan nid ${this.nid}, menjaga pintu gerbang`)
    },
};

Petugas.jaga()
Dosen.ngajar()



