// higer order function adalah sebuah function yang mana, parameter atau return nya merupakan function
// Contoh
// let box;
// box.addEventListener('click', function(){ // addEventListener merupakan salah satu contoh Higer Order Function, karena salah satu parameter nya merupakan function
//     // code program
// })

// Contoh 
const count = function(){
    let count = 0;
    return function(){ // Ini juga termasuk Higer Order Function, karena return pada function nya merupakan anonymous function
        return ++count
    };
}
let x = count();
console.log(x());

// Contoh lain nya, parameter belajar di panggil di dalam function. function belajar di buat di luar function kuliah
let kuliah = function(mahasiswa, belajar){
    console.log(`hari ini mahasiswa ${mahasiswa}, Belajar`);
    belajar();
}

let belajar = function(){
    console.log("sudah selesai")
}

kuliah("rian", belajar)


// MENGAPA PERLU MENGGUNAKAN HIGHER ORDER FUNCTION
// Ini berguna untuk menyederhankan program yang kita buat, sebab semakin komplek program yang akan di buat dapat mempersulit kedepan nya.
