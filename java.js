// // Var Bulunduğu Fonksiyon içinde tanımlanır

// // let ve const ise bulundukları blok içinde geçerlidir örnek if blogu veya for döngüsü


// //                                               //




// const buton = document.getElementById('buton');
// const buton2 = document.getElementById('cikar');


// buton.addEventListener('click', function () {
//     const sayi1 = parseFloat(document.getElementById('sayi1').value);
//     const sayi2 = parseFloat(document.getElementById('sayi2').value);

//     if (isNaN(sayi1) || isNaN(sayi2)) { // İSNAN SAYININ MATAMATİKSEL İFADE OLUP OLMADIĞINA BAKAR
//         alert("SAYILARI GİRMEDİNİZ");
//     }
//     else {

//         const toplam = sayi1 + sayi2;

//         alert("Toplam : " + toplam)

//     }


// })
// buton2.addEventListener('click', function () {
//     const sayi1 = parseFloat(document.getElementById('sayi1').value);
//     const sayi2 = parseFloat(document.getElementById('sayi2').value);

//     if (isNaN(sayi1) || isNaN(sayi2)) { // İSNAN SAYININ MATAMATİKSEL İFADE OLUP OLMADIĞINA BAKAR
//         alert("SAYILARI GİRMEDİNİZ");
//     }
//     else {

//         const toplam = sayi1 - sayi2;

//         alert("Toplam : " + toplam)

//     }


// })
// // let kullaniciGirdisi = prompt("Lütfen bir değer girin:"); // Kullanıcıdan girdi alır





// // let gun = parseInt(prompt("değer gir")); // Gün numarası (1: Pazartesi, 2: Salı, 3: Çarşamba, vb.)

// // switch (gun) {
// //     case 1:
// //         alert("Bugün Pazartesi.");
// //         break;
// //     case 2:
// //         alert("Bugün Salı.");
// //         break;
// //     case 3:
// //         alert("Bugün Çarşamba.");
// //         break;
// //     case 4:
// //         alert("Bugün Perşembe.");
// //         break;
// //     case 5:
// //         console.log("Bugün Cuma.");
// //         break;
// //     case 6:
// //         console.log("Bugün Cumartesi.");
// //         break;
// //     case 7:
// //         console.log("Bugün Pazar.");
// //         break;
// //     default:
// //         console.log("Geçersiz gün numarası.");
// // }






// window.sessionStorage.setItem("350", "apo");

// let value = sessionStorage.getItem("587");
// if (value == null) {

//     alert("noo");
// }
// else {
//     console.log(value)
// }


const adi = prompt("Adınızı girin lütfen"); // Kullanıcıdan isim al

const button = document.getElementById('buton');
const output = document.getElementById('output');


button.addEventListener('click', () => {
    const text = "Merhaba " + adi + ", ben yapay zeka modelin. Sana nasıl yardımcı olabilirim, nasılsın?";
    const text2 = "Ben de iyiyim, teşekkür ederim.";
    const text3 = "Ne diyorsun?";

    const input = document.getElementById("input");
    const inputdeğer = input.value; // Kullanıcının girdiği değer

    output.textContent = ""; // Önce metni temizle

    if (inputdeğer.toLowerCase() === "merhaba" || inputdeğer.toLowerCase() === "selam" || inputdeğer.toLowerCase() === "naber") { // Küçük harf ile kontrol
        typeWriter(text, 0); // Yazı yazma fonksiyonunu başlat
    } else if (inputdeğer.toLowerCase() === "iyiyim sen" || inputdeğer.toLowerCase() === "iyiyim" || inputdeğer.toLowerCase() === "iyi") {
        typeWriter(text2, 0); // Yazı yazma fonksiyonunu başlat
    } else {
        typeWriter(text3, 0); // Yazı yazma fonksiyonunu başlat 
    }
});

// Yazı yazma animasyonu
function typeWriter(text, index) {
    if (index < text.length) {
        output.textContent += text.charAt(index); // Her seferinde bir karakter ekle
        index++;
        setTimeout(() => typeWriter(text, index), 80); // 80ms bekle ve bir sonraki karakteri ekle
    }
}
