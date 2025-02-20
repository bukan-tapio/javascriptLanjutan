// Execution Context dan Hoisting
    // Proses sebuah program javascript di jalankan. Seperti pada contoh

console.log(nama); //output dari console.log ini akan error, sebab variabel nama di tampilkan terlebih dahulu sebelum variabel nama di deklarasikan
var nama = "rio";
console.log(nama); //berbeda dengan ini, javascript akan menampilkan rio sebab, variabel sudah di deklarasikan terlebih dahulu sebelum di tampilkan di console

console.log(heal); //out dari console.log ini adalah, menampilkan isi dari function nya, sebab hanya nama nya saja bukan proses nya ()
console.log(heal()); //out dari console.log ini adalah, menampilkan "rio" karena console.log memberikan tanda buka tutup kurung.

// ada perbedaan antara function declaration dan function expression
// function expression
    //funciton expression tetap bisa di panggil walau functin nya dibuat setelah console.log / function di panggil
console.log(heal())
function heal(){
    return(`kamu sudah di heal`);
};

//function declaration
    //function declaration tidak bisa di panggil jika function nya dibaut setelah console.log / function nya di panggil
console.log(attack())
let attack = function (){
    return(`kamu sudah di heal`);
};


// Closure
    // javascript akan mencari dimana variabel / function yang paling dekat. Dimulai dari scope nya sendiri lalu mencoba mencari keluar
function createEmployeeTracker(initialId) {
  let employeeId = initialId;
  
  return {
    getCurrentId: function() {
      return employeeId;
    },
    assignNewId: function() {
      employeeId++;
      return employeeId;
    }
  };
}
const employeeTracker = createEmployeeTracker(2000);
console.log("ID Saat Ini:", employeeTracker.getCurrentId()); //2000
console.log("ID Baru:", employeeTracker.assignNewId()); //2001
console.log("ID Saat Ini:", employeeTracker.getCurrentId()); //2001
