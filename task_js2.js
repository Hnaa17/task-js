// 1.   10 Method JavaScript (Built-in Functions)

let buah = ['mangga', 'strowbery', 'jeruk', 'lemon', 'leci'];

// 1.   splice() = Metode ini berfungsi untuk menambah sekaligus menghapus elemen pada array.
// buah.splice(2, 2, 'jambu', 'pisang', 'durian');
// console.log(buah);

// 2.   slice() = Metode ini berfungsi menyalin sebagian elemen array ke array baru. Elemen yang ingin disalin ditentukan menggunakan indeks, indeks awal dan akhir.
// let buah2 = buah.slice(1,4);
// console.log(buah2);

// 3.   push() = Metode ini berfungsi untuk menambah elemen baru diakhir array.
// buah.push('salak', 'pisang', 'pepaya');
// console.log(buah.join('-'));

// 4.   pop() = Metode ini berfungsi untuk menghilangkan elemen terakhir dari sebuah array
// buah.pop();
// console.log(buah);

// 5.   unshift() = Metode ini berfungsi untuk menambahkan elemen baru di awal array.
// buah.unshift('anggur', 'melon');
// console.log(buah);

// 6.   shift() = Metode ini berfungsi untuk menghilangkan elemen pertama di array.
// buah.shift();
// console.log(buah);

let angka = [2,5,6,7,3,8,4,9,1,10];

// 7.   sort() = Metode ini berfungsi untuk mengurutkan elemen pada array baik secara ascending atau descending.
// angka.sort(function(a,b) {
//     return a-b;
// });
// console.log(angka);
// //atau
// angka.sort(function(a,b) {
//     return b-a;
// });
// console.log(angka);

// 8.   filter() = Metode ini berfungsi untuk mencari elemen pada array, dan bisa mengembalikan banyak nilai dalam bentuk array
// let angka2 = angka.filter(function(x) {
//     return x > 5;
// });
// console.log(angka2);

// 9.   find() = Metode ini berfungsi untuk mencari elemen pada array, namun hanya mengembalikan satu nilai.
// let angka2 = angka.find(function(x) {
//     return x > 5;
// });
// console.log(angka2);

// 10.  length() = Metode ini berfungsi untuk mengetahui ada berapa elemen dalam array.
// console.log(angka.length);


// 2.   Searching nama

// let name = [
//     "Abigail", "Alexandra", "Alison",
//     "Amanda", "Angela", "Bella",
//     "Carol", "Caroline", "Carolyn",
//     "Deirdre", "Diana", "Elizabeth",
//     "Ella", "Faith",  "Olivia",  "Penelope"
// ];

// let nameLower = name.map(element => {
//     return element.toLowerCase();
// });

// function searchName(search, output, callback) {
//     try {
//         if(typeof search !== 'string') throw "Yang anda masukkan salah";
//     } catch (error) {
//         console.log(error);
//         return false;
//     };

//     let result = nameLower.filter((nameLower) => nameLower.indexOf(search) !== -1);
//     result = result.slice(0, output);
//     callback(result);
// }

// function showFilter(word) {
//     let nameCapitalize = word.map(element => {
//         return element.charAt(0).toUpperCase() + element.slice(1);
//     });
//     console.log(nameCapitalize);
// }
// searchName("car", 3, showFilter);
// searchName(15, 3, showFilter);


// 3.   Fungsi seleksi nilai

// function seleksiNilai  (nilaiAwal, nilaiAkhir, dataArray) {
//     let rangeResult = dataArray.filter(function(currentElement) {
//         return currentElement > nilaiAwal && currentElement < nilaiAkhir;
//     });

//     try {
//         if(nilaiAkhir < nilaiAwal) throw "Nilai akhir harus lebih besar dari nilai awal";

//         if(dataArray.length <= 5) throw "Jumlah angka dalam data Array harus lebih dari 5";

//         if(rangeResult.length < 1) throw "Nilai tidak ditemukan";

//     } catch (error) {
//         console.log(error);
//         return false;
//     };

//     let urutanAngka = rangeResult.sort((a,b) => a > b ? 1 : -1);
//     console.log(urutanAngka);
// };

// seleksiNilai(15, 7, [4, 7, 15, 10, 17, 9]);
// seleksiNilai(7, 15, [4, 7, 15, 10, 9]);
// seleksiNilai(7, 15, [4, 6, 18, 3, 17, 16]);
// seleksiNilai(7, 15, [17, 14, 11, 6, 12, 10]);