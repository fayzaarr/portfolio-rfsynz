// replaceName
function replaceName() {
    let userjs = prompt("Hello, there! Before entering my portofolio, please fill out this field with your name!", "");
    document.getElementById("userjs").innerHTML = userjs
}

replaceName()

//enimasi mengetik
const texts = [
    "Frontend Engineer",
    "Machine Learning Engineer",
    "Deep Learning Engineer"
];

const typingTextElement = document.getElementById("typing-text");
let index = 0;
let textIndex = 0;

function type() {
    const currentText = texts[textIndex];
    
    if (index < currentText.length) {
        typingTextElement.innerHTML += currentText.charAt(index);
        index++;
        setTimeout(type, 100); // Kecepatan mengetik (100ms)
    } else {
        setTimeout(deleteText, 1000); // Tunggu 1 detik sebelum mulai menghapus teks
    }
}

function deleteText() {
    if (index > 0) {
        typingTextElement.innerHTML = typingTextElement.innerHTML.slice(0, -1); // Menghapus karakter terakhir
        index--;
        setTimeout(deleteText, 100); // Kecepatan menghapus (100ms)
    } else {
        textIndex = (textIndex + 1) % texts.length; // Beralih ke teks berikutnya
        index = 0; // Reset index untuk mengetik ulang
        setTimeout(type, 500); // Tunggu sebentar sebelum mulai mengetik lagi
    }
}

type(); // Mulai efek mengetik

//animasi fade in
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.fade-in');

    function checkVisibility() {
        const triggerBottom = window.innerHeight / 5 * 4; // Menentukan batas scroll

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top; // Posisi bagian atas section
            if (sectionTop < triggerBottom) {
                section.classList.add('visible'); // Tambahkan kelas 'visible' jika section terlihat
            } else {
                section.classList.remove('visible'); // Hapus kelas 'visible' jika tidak terlihat
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Panggil fungsi saat halaman dimuat
});

//animasi navbar dan logo
// document.addEventListener('DOMContentLoaded', () => {
//     const header = document.querySelector('.main-header');

//     window.addEventListener('scroll', () => {
//         if (window.scrollY > 50) { // Ubah angka ini sesuai kebutuhan
//             header.classList.add('scrolled'); // Tambahkan kelas saat di-scroll
//         } else {
//             header.classList.remove('scrolled'); // Hapus kelas saat kembali ke atas
//         }
//     });
// });

