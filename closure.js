// Closure merupakan inner function yang dapat mengakses parent scope nya walau parent function nya sudah dijalankan

// contoh:
let counter = function(){ //parent function
    let count = 0;
    return function(){  //inner function / Clouser. function ini akan membutuhkan variabel yang berada di luar inner function.
                        //ini merupakan anonymous function.
                        
        return ++count; // count akan mencari varibale count di luar function nya / mencari pada parent function nya
    }
}
let a = counter();  // fungsi nya adalah menjalankan function counter() lalu menyimpan nya pada variabel a.

// console.log(a())
// console.log(a())
// console.log(a())
// console.log(a())
    // pada line 12 sampai 15, function a di teruskan ke inner function nya.

// jika tidak ingin menggunakan variabel untuk menyimpan nya, bisa menggunakan IMMEDIATLY INOVOKED FUNCTION EXPRESSION / IIFE
// Contoh:

let greeting = function(nama){
    return function(greet){
        return `hallo ${nama}, selamat ${greet}`;
    };
};
let nama = greeting('rian');
console.log(nama('malam'));

// IIFE 
let counting = (function (){
    let counter = 0;
    return function(){
        return ++counter
    }
})();
console.log(counting())
console.log(counting())
console.log(counting())
console.log(counting())




