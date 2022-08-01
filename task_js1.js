// 1.   Membuat Biodata

// let biodata = {
//     name : "Farhana Achmad",
//     age : 20,
//     hobbies : ["olahraga", " ngoding", " nonton drakor"],
//     isMaried : false,
//     schoolList : [
//         {
//             name : "SDN 218 Jambi",
//             yearIn : 2009,
//             yearOut : 2014,
//             major : null
//         },
//         {
//             name : "SMPN 3 Palembang",
//             yearIn : 2014,
//             yearOut : 2017,
//             major : null
//         },
//         {
//             name : "SMAN 5 Cimahi",
//             yearIn : 2017,
//             yearOut : 2020,
//             major : "IPA"
//         }
//     ],
//     skills : [
//         {
//             skillName : "Communication",
//             level : "Advanced"
//         },
//         {
//             skillName : "Javascript",
//             level : "Beginner"
//         }
//     ],
//     interestInCoding : true
// };


// 2.   Menghitung rata-rata UN dan Grade nya.

// let mtk = 0;
// let bahasaIndonesia = 0;
// let bahasaInggris = 0;
// let ipa = 0;

// // Validasi tidak boleh kosong
// if (mtk  == '' || bahasaIndonesia == '' || bahasaInggris == '' || ipa == '') {
//     console.log('Anda harus mengisi semua nilai');
//     return false;
// }

// // Validasi inputan harus angka
// if (isNaN(mtk) || isNaN(bahasaIndonesia) || isNaN(bahasaInggris) || isNaN(ipa)){
//     console.log('Semua data harus berupa angka');
//     return false;
// }

// let rataRata = ((Number(mtk)+Number(bahasaIndonesia)+Number(bahasaInggris)+Number(ipa))/4);
// let hasil = '';
// if (rataRata >= 90 && rataRata <= 100) {
//     hasil = 'A';
// } else if (rataRata >= 80 && rataRata <= 89) {
//     hasil = 'B';
// } else if (rataRata >= 70 && rataRata <= 79) {
//     hasil = 'C';
// } else if (rataRata >= 60 && rataRata <= 69) {
//     hasil = 'D';
// } else if (rataRata >= 0 && rataRata <= 59) {
//     hasil = 'E';
// } else {
//     console.log(`Tidak memnuhi range`);
//     return false
// }

// console.log(`Rata-rata = ${rataRata}\nGrade     = ${hasil}`);


// 3.   Membuat angka segitiga terbalik

// function printSegitiga (num) {
//     if (isNaN(num)) {
//         console.log("Data harus number");
//     };

//     let result = '';
//     for (let i = num; i >= 1; i--) {
//         for (let j = 1; j<=i; j++) {
//             result += `${j} `;
//         }
//         result += "\n";
//     }
//     return result;
// }
// console.log(printSegitiga(4));
// console.log(printSegitiga('empat'));


// 4.   Diberikan data :

// let data = {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
//     address:
//     {
//         street: "Kulas Light",
//         suite: "Apt. 556",
//         city: "Gwenborough",
//         zipcode: "92998-3874"
//     },
//     phone: "1-770-736-8031 x56442",
//     website: "hildegard.org"
// }


 // a. Mengubah data menggunakan spread operator
// let newData = {
//    ...data, 
//     name: "Farhana Achmad", 
//     email: "farhanaachmad8578@gmail.com", 
//     hobby: "Olahraga"
// };
// console.log(newData);


//  b. Mengambil data menggunakan destructuring
// let {address:{street, city}} = data;
// console.log(`${street}\n${city}`);

// //    tanpa menggunakan destructuring
// console.log(`${data.address.street}\n${data.address.city}`);