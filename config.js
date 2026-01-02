const CONFIG = {
    // === DATA UTAMA ===
    profileImage: "dp.jpg",     // Nama file foto profil
    name: "@raviyunanto",       // Nama yang muncul
    
    // === STATUS KETERSEDIAAN ===
    // Ubah ke "false" jika sedang sibuk/full booked
    // Ubah ke "true" jika sedang Open for Work (titik hijau nyala)
    isOpenToWork: true, 

    // === MUSIK ===
    musicFile: "one.mp3",       // Nama file lagu MP3

    // === BIO (EFEK KETIK) ===
    // Kamu bisa tambah atau kurangi teks di dalam kurung siku []
    typingTexts: [
        "Videographer", 
        "Photographer", 
        "Designer"
    ],

    // === DAFTAR LINK ===
    // Format: { text: "Nama Tombol", url: "Link Tujuan", special: true/false }
    // 'special: true' akan bikin tombolnya beda (border putih transparan)
    links: [
        { 
            text: "📇 Save My Contact", 
            url: "contact.vcf", 
            special: true // Ini buat tombol Contact yang beda sendiri
        },
        { 
            text: "💬 WhatsApp", 
            url: "https://wa.me/6281255655101" 
        },
        { 
            text: "📸 Instagram", 
            url: "https://instagram.com/raviyunanto" 
        },
        { 
            text: "📩 Email Me", 
            url: "mailto:ravi.yunanto@gmail.com" 
        }
    ],

    // === COPYRIGHT FOOTER ===
    copyright: "© 2026. All Rights Reserved."
};
