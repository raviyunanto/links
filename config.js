const CONFIG = {
    // === DATA UTAMA ===
    profileImage: "dp.jpg",
    favicon: "icon.png", 
    name: "@raviyunanto",
    
    // === KONTAK vCARD ===
    phone: "081255655101", 
    email: "halo@raviyunanto.my.id",

    // === STATUS ===
    isOpenToWork: false,

    // === BIO ===
    typingTexts: [
        "Videographer", 
        "Photographer", 
        "Designer"
    ],

    // === LINKS & DIVIDERS ===
    links: [
        // -- KATEGORI 1: CONTACT --
        { type: 'divider', text: 'Quick Actions' }, 
        { 
            text: "📇 Save My Contact", 
            url: "#", 
            special: true 
        },
        { 
            text: "📩 Email Me", 
            url: "mailto:halo@raviyunanto.my.id" 
        },

        // -- KATEGORI 2: SOCIALS --
        { type: 'divider', text: 'Social Media' },
        { 
            text: "💬 WhatsApp", 
            url: "https://wa.me/6281255655101"
        },
        { 
            text: "📸 Instagram", 
            url: "https://instagram.com/raviyunanto",
            badge: "ACTIVE" //
        },
        
        // -- KATEGORI 3 (CONTOH LAIN) --
        // { type: 'divider', text: 'Portfolio' },
        // { text: "🎬 My Showreel", url: "...", badge: "NEW" }
    ],

    copyright: "© 2026. All Rights Reserved."
};
