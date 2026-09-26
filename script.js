// Aktivitas 1 : Setup Berkas & Integrasi Javascript

console.log("=== SISTEM POIN MEMBER KEDAI KOPI ===");
console.log("Javascript Terhubung!");


// Aktivitas 2 : Variabel & Dialog Interaktif

const NAMA_KEDAI = "Kopi PSTI";
let NAMA_KASIR = "Kak Eko";

console.log("Nama Kedai : " + NAMA_KEDAI);
console.log("Nama Kasir : " + NAMA_KASIR);

NAMA_KASIR = "Kak Dwifa";
console.log("Nama Kasir Baru : " + NAMA_KASIR);


// NOTIFIKASI PEMBUKA

alert(
    "Halo! Selamat datang di Kopi PSTI Kampus! \n\n" +
    "Ready buat ngopi sambil ngerjain tugas?"
);


// DAFTAR PELANGGAN

let DAFTAR_PELANGGAN = [
    "Dwifa Nusa Rahmani"
];


// INPUT NAMA PELANGGAN

let NAMA_PELANGGAN = prompt(
    "Sebelum lanjut, namamu siapa nihh?"
);

let PELANGGAN_VALID = false;


// CEK NAMA
// Akan terus mengulang jika nama salah

while (!PELANGGAN_VALID) {

    if (NAMA_PELANGGAN) {

        NAMA_PELANGGAN = NAMA_PELANGGAN.trim();

        for (let i = 0; i < DAFTAR_PELANGGAN.length; i++) {

            if (
                NAMA_PELANGGAN.toLowerCase() ===
                DAFTAR_PELANGGAN[i].toLowerCase()
            ) {

                PELANGGAN_VALID = true;

                NAMA_PELANGGAN = DAFTAR_PELANGGAN[i];

                break;
            }
        }
    }


    // JIKA NAMA SALAH

    if (!PELANGGAN_VALID) {

        alert(
            "Titutt!!! " +
            (NAMA_PELANGGAN || "Nama tersebut") +
            " belum terdaftar dalam pelanggan favorit nih.\n\n" +
            "Coba masukin nama yang terdaftar, ya!"
        );

        NAMA_PELANGGAN = prompt(
            "Coba cek lagi, siapa nama kamu?"
        );
    }
}


// JIKA NAMA BENAR

alert(
    "Welcome, " + NAMA_PELANGGAN + "! ✨\n\n" +
    "YUKKK, kopinya udah ready nih!"
);

console.log("Pelanggan : " + NAMA_PELANGGAN);


// Aktivitas 3 : Operasi Aritmatika

let POIN_KOPI = 45;
let POIN_MAKANAN = 35;
let POIN_MEMBER = 20;

let TOTAL_POIN = POIN_KOPI + POIN_MAKANAN + POIN_MEMBER;

console.log("=== PERHITUNGAN POIN ===");
console.log("Poin Kopi : " + POIN_KOPI);
console.log("Poin Makanan : " + POIN_MAKANAN);
console.log("Poin Member : " + POIN_MEMBER);
console.log("Total Poin : " + TOTAL_POIN);


// Aktivitas 4 : Percabangan Tier Member

let TIER_MEMBER = "";
let BENEFIT = "";

if (TOTAL_POIN >= 100) {

    TIER_MEMBER = "Platinum";
    BENEFIT = "Diskon 20% + Gratis 1 Minuman Signature";

} else if (TOTAL_POIN >= 70) {

    TIER_MEMBER = "Gold";
    BENEFIT = "Diskon 10% di setiap transaksi";

} else if (TOTAL_POIN >= 40) {

    TIER_MEMBER = "Silver";
    BENEFIT = "Diskon 5% untuk menu minuman";

} else {

    TIER_MEMBER = "Bronze";
    BENEFIT = "Member Reguler";
}

console.log("=== TIER MEMBER ===");
console.log("Tier : " + TIER_MEMBER);
console.log("Benefit : " + BENEFIT);


// Aktivitas 5 : Perulangan Data Menu

let DAFTAR_MENU = [
    "Café Latte",
    "Es Kopi Susu Gula Aren",
    "Cappuccino",
    "Iced Americano",
    "Café Mocha"
];

console.log("=== DAFTAR MENU KEDAI KOPI ===");

for (let i = 0; i < DAFTAR_MENU.length; i++) {

    console.log((i + 1) + ". " + DAFTAR_MENU[i]);
}

console.log("Total Menu : " + DAFTAR_MENU.length);


// Aktivitas 6 : Function untuk Menampilkan Informasi Member

function TAMPILKAN_MEMBER(nama, poin, tier) {

    console.log("=== INFORMASI MEMBER ===");
    console.log("Nama Pelanggan : " + nama);
    console.log("Total Poin : " + poin);
    console.log("Tier Member : " + tier);
}

TAMPILKAN_MEMBER(
    NAMA_PELANGGAN,
    TOTAL_POIN,
    TIER_MEMBER
);


// HASIL MEMBERSHIP

alert(
    "HASIL MEMBERSHIP\n\n" +
    "Nama Pelanggan : " + NAMA_PELANGGAN + "\n" +
    "Total Poin : " + TOTAL_POIN + "\n" +
    "Tier Member : " + TIER_MEMBER + "\n" +
    "Benefit : " + BENEFIT
);


// Aktivitas 7 : Simulasi Pelanggan Lain

let PELANGGAN_B = "Dwifa Nusa Rahmani";
let POIN_PELANGGAN_B = 80;

console.log("=== SIMULASI PELANGGAN B ===");
console.log("Nama Pelanggan : " + PELANGGAN_B);
console.log("Total Poin : " + POIN_PELANGGAN_B);