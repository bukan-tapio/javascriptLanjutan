// Template literal / Template string merupakan string literal yang memungkinkan adanya expresion di dalam nya
// 3 Cara membuat string
// 1. dengan kutip satu = ''
// 2. dengan kutip dua = ""
// 3. dengan back tick = ``

// back tick memungkin kan kita menambahkan expression dengan mudah pada string
// dengan back tick kita dapat melakukan beberapa hal dengan mudah, Contoh nya:
// 1. Membuat multiple line string
// 2. HTML fragments
// 3. Embedded expression
// 4. Expression interpolation

// 1. Membuat multiple line string
const text = `
    lisa main kuda lumping
    ridho main ayam
    siyang makan nasi
`;
console.log(text);

// 2. HTML fragments
const listNav = `<ul class="navbar">
<li class="lisNav">Rian</li>
<li class="lisNav">suka</li>
<li class="lisNav">jajan</li>
<li class="lisNav">about</li>
</ul>
`
console.log(listNav)


// Terdapat yang naman nya expression dan statement
    // expression dapat mengahasilkan nilai
    // statement dapat mengerjakan sesuatu
// Dua-dua nya dapat di bedakan dengan tanda "=" jika error maka ia adalah statement

// 3. embeded expression 
const Dosen = {
    nama: 'sandhika galih',
    umur: 22,
    hobi: 'ngoding',
};
console.log(`Dosen baru hari ini adalah "${Dosen.nama}"`); // tanda ${} disebut interpolation
 
// 4. expression interpolation
console.log(`1 + 1 = ${1 + 1}`)
let i = 10;
console.log(`${(i % 2 == 0) ? 'genap' : 'ganjil'}`)