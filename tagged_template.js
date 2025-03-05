// tagged template literals merupakan bentuk string literals yang lebih kompleks lagi, memungkinkan kita membaca string literal melalui function
// Untuk saat ini ada 3 fungsi yang bisa kita gunakan untuk tagged template ini
// 1. Escaping / Sanitize HTML
// 2. Translation & Internationalization
// 3. Styled component

// 1. Escaping / Sanitize HTML memungkinkan kita untuk menyaring sesuatu yang jahat seperti script ilegal kedalam sebuah string literal.
// 2. Translation & Interantionalization memungkinkan kita untuk merupbah sebuah bahasa pada string literal.
// 3. Styled Component memungkinkan kita untuk melakukan styling dari string literal.


// Contoh
const nama = "sandhika galih";
const umur = 33;
const deskripsi = "mawar itu biru"

function greeting(good, ...values){
    // let result = '';

    // good.forEach((good, i) => {
    //     result += `${good}${values[i] || ''}`
    // });
    // console.log(result)

    return good.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
}

const str = greeting`halo, nama anda adalah ${nama}, dan berumur ${umur} tahun`;
console.log(str)
