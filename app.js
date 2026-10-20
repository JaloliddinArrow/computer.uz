/* ==========================================================================
   COMPUTER.UZ — Core Application Engine (E-Commerce + Tech Journalism + Lab)
   ========================================================================== */

const EXCHANGE_RATE = 12850; // 1 USD = 12,850 UZS

// Verified High-Resolution Crisp Hardware Images (All HTTP 200 Verified)
const IMG = {
  workstation: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=1000&q=85",
  gamingPc: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1000&q=85",
  customLoop: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?auto=format&fit=crop&w=1000&q=85",
  gpu: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=1000&q=85",
  cpu: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=1000&q=85",
  motherboard: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=85",
  ram: "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=1000&q=85",
  ssd: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=1000&q=85",
  cooler: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=1000&q=85",
  monitor: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1000&q=85",
  keyboard: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=1000&q=85",
  mouse: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=1000&q=85",
  headset: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1000&q=85",
  laptopPro: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1000&q=85",
  laptopGaming: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=1000&q=85",
  deskSetup: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&w=1000&q=85",
  serverAi: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=85",
  chair: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=1000&q=85",
  mic: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1000&q=85",
  repairTool: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=85"
};

/* ==========================================================================
   1. COMPREHENSIVE PRODUCT CATALOG (24 HARDWARE & ESSENTIAL PRODUCTS)
   ========================================================================== */
const PRODUCTS = [
  // --- TAYYOR KOMPYUTERLAR VA NOUTBUKLAR ---
  {
    id: "pc-proart-5090",
    title: "Computer.uz ProArt Studio RTX 5090 Extreme Workstation",
    category: "systems",
    subcat: "Tayyor PC",
    brand: "ASUS ROG",
    priceUsd: 3887,
    oldPriceUsd: 4150,
    stock: 3,
    labScore: 9.9,
    isLabChoice: true,
    badge: "FLAGMAN YIG'MA",
    badgeType: "copper",
    image: IMG.gamingPc,
    specs: ["Ryzen 9 9950X", "RTX 5090 32GB", "64GB DDR5-6400", "4TB Gen5 NVMe"],
    relatedArticleId: "art-rtx5090-review",
    description: "Sun'iy intellekt modellarini o'qitish (LLM), Unreal Engine 5, 8K video montaj va 4K Ultra o'yinlar uchun O'zbekistondagi eng qudratli yig'ma. Arctic MX-6 termopastasi va 360mm suyuqlik sovutish tizimi bilan jihozlangan.",
    fullSpecs: {
      "Protsessor": "AMD Ryzen 9 9950X (16 yadro / 32 oqim, 5.7 GHz)",
      "Videokarta": "NVIDIA GeForce RTX 5090 32GB GDDR7 (DLSS 4)",
      "Ona plata": "ASUS ProArt X870E-CREATOR WIFI (USB4, 10G LAN)",
      "Operativ xotira": "64GB (2x32GB) Corsair Dominator Titanium DDR5-6400",
      "Doimiy xotira": "2TB Crucial T705 PCIe 5.0 + 2TB Samsung 990 PRO",
      "Quvvat bloki": "Seasonic VERTEX PX-1200W 80+ Platinum ATX 3.1",
      "Kafolat": "36 oy rasmiy Computer.uz Lab kafolati"
    }
  },
  {
    id: "pc-cyber-4080s",
    title: "CyberCube Vision 2K/4K Gaming PC (RTX 4080 SUPER)",
    category: "systems",
    subcat: "Tayyor PC",
    brand: "Lian Li",
    priceUsd: 2290,
    oldPriceUsd: 2450,
    stock: 6,
    labScore: 9.7,
    isLabChoice: true,
    badge: "ENG KO'P SOTILGAN",
    badgeType: "emerald",
    image: IMG.customLoop,
    specs: ["Ryzen 7 9800X3D", "RTX 4080 Super 16GB", "32GB DDR5", "2TB NVMe"],
    relatedArticleId: "art-9800x3d-gaming",
    description: "Lian Li O11 Vision panoramali korpusda yig'ilgan kibersport va 4K gaming kompyuteri. Dunyodagi eng tez o'yin protsessori Ryzen 7 9800X3D bilan maksimal FPS beradi.",
    fullSpecs: {
      "Protsessor": "AMD Ryzen 7 9800X3D (3D V-Cache, 5.2 GHz)",
      "Videokarta": "ASUS TUF Gaming RTX 4080 SUPER 16GB GDDR6X",
      "Ona plata": "MSI MAG X870 TOMAHAWK WIFI",
      "Operativ xotira": "32GB G.Skill Trident Z5 Neo DDR5-6000 CL30",
      "Korpus": "Lian Li O11 Vision Chrome (Uch tomonlama temperlangan oyna)",
      "Kafolat": "36 oy rasmiy servis kafolati"
    }
  },
  {
    id: "lap-zephyrus-g16",
    title: "ASUS ROG Zephyrus G16 (2026) OLED 240Hz Noutbuk",
    category: "systems",
    subcat: "Noutbuk",
    brand: "ASUS ROG",
    priceUsd: 2350,
    oldPriceUsd: 2520,
    stock: 5,
    labScore: 9.6,
    isLabChoice: true,
    badge: "OLED 240HZ",
    badgeType: "cobalt",
    image: IMG.laptopGaming,
    specs: ["Core Ultra 9", "RTX 4080 12GB", "32GB LPDDR5X", "16\" 2.5K OLED"],
    relatedArticleId: "art-oled-monitors",
    description: "CNC alyuminiydan yasalgan ultra-yupqa (1.49 sm) korpusda ham professional dasturlash, ham og'ir o'yinlar uchun mo'ljallangan flagman noutbuk.",
    fullSpecs: {
      "Ekran": "16 dyuym ROG Nebula OLED, 2560x1600, 240Hz, 0.2ms",
      "Protsessor": "Intel Core Ultra 9 185H (NPU AI tezlatkich bilan)",
      "Videokarta": "NVIDIA GeForce RTX 4080 Laptop GPU 12GB",
      "Xotira": "32GB LPDDR5X 7467MHz / 2TB PCIe 4.0 SSD",
      "Vazni": "Atigi 1.85 kg (90Wh batareya)"
    }
  },
  {
    id: "lap-pro-workstation",
    title: "ProBook Studio Carbon 16 (Dasturchilar va Arxitektorlar uchun)",
    category: "systems",
    subcat: "Noutbuk",
    brand: "Intel",
    priceUsd: 1640,
    oldPriceUsd: null,
    stock: 9,
    labScore: 9.3,
    isLabChoice: false,
    badge: "DASTURCHI TANLOVI",
    badgeType: "dark",
    image: IMG.laptopPro,
    specs: ["Core Ultra 7", "64GB RAM", "2TB SSD", "4K IPS 100% DCI-P3"],
    relatedArticleId: "art-dev-build-guide",
    description: "Docker konteynerlar, Android Studio, Xcode va mikroservislar bilan ishlovchi Senior dasturchilar uchun 64GB tezkor xotirali sokin va uzoqqa chidamli noutbuk.",
    fullSpecs: {
      "Ekran": "16\" 3840x2400 IPS Matt (Ko'zni charchatmaydigan qoplama)",
      "Operativ xotira": "64GB DDR5-5600",
      "Doimiy xotira": "2TB Samsung PM9A1 NVMe",
      "Portlar": "2x Thunderbolt 4, HDMI 2.1, SD Card Reader, Wi-Fi 7"
    }
  },

  // --- PROTSESSOR VA VIDEOKARTALAR (CORE HARDWARE) ---
  {
    id: "gpu-rtx-5090",
    title: "NVIDIA GeForce RTX 5090 Founders / ROG Astral 32GB GDDR7",
    category: "core",
    subcat: "Videokarta",
    brand: "NVIDIA",
    priceUsd: 2390,
    oldPriceUsd: null,
    stock: 4,
    labScore: 9.9,
    isLabChoice: true,
    badge: "YANGI AVLOD GDDR7",
    badgeType: "copper",
    image: IMG.gpu,
    specs: ["32GB GDDR7", "512-bit shina", "DLSS 4 Multi-Frame", "PCIe 5.0"],
    relatedArticleId: "art-rtx5090-review",
    description: "Blackwell arxitekturasidagi mutlaq qirol. 32GB ultra-tez GDDR7 xotirasi bilan 4K Path Tracing o'yinlarda va lokal LLM (DeepSeek / Llama 70B) modellarida tengsiz.",
    fullSpecs: {
      "Grafik protsessor": "NVIDIA Blackwell GB202 (21,760 CUDA yadro)",
      "Video xotira": "32 GB GDDR7 (512-bit, 1792 GB/s o'tkazuvchanlik)",
      "Texnologiyalar": "DLSS 4, Reflex 2, 9-avlod NVENC enkoder",
      "Quvvat talabi": "575W TDP (Tavsiya etilgan PSU: 1000W ATX 3.1)"
    }
  },
  {
    id: "gpu-rtx-4080-super",
    title: "ASUS ROG Strix GeForce RTX 4080 SUPER 16GB OC Edition",
    category: "core",
    subcat: "Videokarta",
    brand: "ASUS ROG",
    priceUsd: 1090,
    oldPriceUsd: 1260,
    stock: 4,
    labScore: 9.6,
    isLabChoice: true,
    badge: "KUN CHEGIRMASI -14%",
    badgeType: "copper",
    image: IMG.gpu,
    specs: ["16GB GDDR6X", "2670 MHz Boost", "Bug' kamerasi", "3x Axial-tech"],
    relatedArticleId: "art-rtx5090-review",
    description: "Sokinlik va sovutish bo'yicha etalon. Yuqori yuklamada ham 62°C dan oshmaydi, g'altak shovqini (coil whine) yo'qligi Computer.uz Lab tomonidan tekshirilgan.",
    fullSpecs: {
      "CUDA yadrolari": "10,240 ta",
      "Xotira": "16 GB GDDR6X (256-bit, 23 Gbps)",
      "Chastota": "OC Mode: 2670 MHz",
      "Portlar": "2x Native HDMI 2.1a, 3x Native DisplayPort 1.4a"
    }
  },
  {
    id: "cpu-ryzen-9800x3d",
    title: "AMD Ryzen 7 9800X3D (8 Yadro / 16 Oqim, 104MB 3D V-Cache)",
    category: "core",
    subcat: "Protsessor",
    brand: "AMD",
    priceUsd: 515,
    oldPriceUsd: 549,
    stock: 11,
    labScore: 9.9,
    isLabChoice: true,
    badge: "GAMING QIROLI #1",
    badgeType: "emerald",
    image: IMG.cpu,
    specs: ["Socket AM5", "5.2 GHz Boost", "2-avlod 3D V-Cache", "120W TDP"],
    relatedArticleId: "art-9800x3d-gaming",
    description: "CS2, Valorant, Cyberpunk 2077 va Microsoft Flight Simulator 2024 o'yinlarida dunyodagi eng yuqori 1% Low va o'rtacha FPS ko'rsatkichini taqdim etuvchi protsessor.",
    fullSpecs: {
      "Soket": "AMD Socket AM5 (Zen 5 arxitekturasi)",
      "Yadrolar": "8 yadro / 16 oqim",
      "Kesh xotira": "96MB L3 (3D V-Cache) + 8MB L2 = 104MB",
      "Mos xotira": "DDR5-6000 / 6400 EXPO"
    }
  },
  {
    id: "cpu-ryzen-9950x",
    title: "AMD Ryzen 9 9950X (16 Yadro / 32 Oqim, 5.7 GHz Flagman)",
    category: "core",
    subcat: "Protsessor",
    brand: "AMD",
    priceUsd: 645,
    oldPriceUsd: null,
    stock: 7,
    labScore: 9.8,
    isLabChoice: true,
    badge: "WORKSTATION PRO",
    badgeType: "cobalt",
    image: IMG.cpu,
    specs: ["16 Yadro / 32 Oqim", "5.7 GHz Boost", "80MB Kesh", "AVX-512"],
    relatedArticleId: "art-dev-build-guide",
    description: "Kod kompilyatsiyasi (Rust, C++, Chromium), 3D render va virtual mashinalar uchun mukammal 16 yadroli protsessor.",
    fullSpecs: {
      "Soket": "AMD AM5",
      "Chastota": "Bazaviy 4.3 GHz / Boost 5.7 GHz",
      "Texjarayon": "TSMC 4nm FinFET",
      "TDP": "170W (Suyuqlik sovutish tavsiya etiladi)"
    }
  },
  {
    id: "cpu-intel-285k",
    title: "Intel Core Ultra 9 285K (24 Yadro: 8P + 16E, LGA1851)",
    category: "core",
    subcat: "Protsessor",
    brand: "Intel",
    priceUsd: 610,
    oldPriceUsd: 640,
    stock: 8,
    labScore: 9.4,
    isLabChoice: false,
    badge: "ARROW LAKE NPU",
    badgeType: "dark",
    image: IMG.cpu,
    specs: ["24 Yadro", "5.7 GHz", "LGA1851", "Ichki AI NPU"],
    relatedArticleId: "art-dev-build-guide",
    description: "Yangi Arrow Lake arxitekturasi oldingi avlodga nisbatan 80W kamroq energiya sarflab, video kodeklar va Adobe Premiere Pro-da yuqori tezlik ko'rsatadi.",
    fullSpecs: {
      "Soket": "Intel LGA1851 (Z890 platalar uchun)",
      "Yadrolar": "24 yadro (8 Performance + 16 Efficient)",
      "Kesh": "36 MB Intel Smart Cache + 40 MB L2"
    }
  },

  // --- ONA PLATA, RAM VA SSD XOTIRA ---
  {
    id: "mb-x870e-hero",
    title: "ASUS ROG Crosshair X870E HERO (AM5, DDR5, PCIe 5.0, Wi-Fi 7)",
    category: "board_mem",
    subcat: "Ona plata",
    brand: "ASUS ROG",
    priceUsd: 680,
    oldPriceUsd: null,
    stock: 5,
    labScore: 9.8,
    isLabChoice: true,
    badge: "18+2+2 VRM FAZA",
    badgeType: "cobalt",
    image: IMG.motherboard,
    specs: ["Socket AM5", "5x M.2 Slot", "2x USB4 40Gbps", "Wi-Fi 7"],
    relatedArticleId: "art-9800x3d-gaming",
    description: "110A quvvat fazalari, qalin alyuminiy radiatorlar va 5 ta M.2 slotga ega eng mukammal AM5 ona plata. Vintovkasiz Q-Release Slim mexanizmi bilan videokartani 1 soniyada yechish mumkin.",
    fullSpecs: {
      "Chipset": "AMD X870E",
      "Quvvat tizimi": "18+2+2 faza (110A SPS)",
      "Xotira": "4x DIMM, 192GB gacha DDR5 8600+ MT/s",
      "Tarmoq": "Intel 2.5Gb + Realtek 5Gb Ethernet + Wi-Fi 7"
    }
  },
  {
    id: "mb-z890-tomahawk",
    title: "MSI MAG Z890 TOMAHAWK WIFI (LGA1851, Thunderbolt 4, DDR5)",
    category: "board_mem",
    subcat: "Ona plata",
    brand: "Intel",
    priceUsd: 295,
    oldPriceUsd: 320,
    stock: 10,
    labScore: 9.5,
    isLabChoice: true,
    badge: "ENG YAXSHI NARX/SIFAT",
    badgeType: "emerald",
    image: IMG.motherboard,
    specs: ["LGA1851", "DDR5 9200MHz", "Thunderbolt 4", "5G LAN"],
    relatedArticleId: "art-dev-build-guide",
    description: "Intel Core Ultra protsessorlari uchun harbiy darajadagi mustahkam ona plata. Qora mat tekstolit va mis sovutish qatlamlari bilan jihozlangan.",
    fullSpecs: {
      "Soket": "LGA 1851",
      "Quvvat fazalari": "16+1+1+1 Duet Rail Power System (90A)",
      "M.2 Slotlar": "4x M.2 (1x PCIe 5.0, 3x PCIe 4.0) EZ M.2 Shield bilan"
    }
  },
  {
    id: "ram-corsair-64gb",
    title: "Corsair Dominator Titanium 64GB (2x32GB) DDR5-6600 CL32",
    category: "board_mem",
    subcat: "Operativ xotira",
    brand: "Corsair",
    priceUsd: 285,
    oldPriceUsd: 310,
    stock: 14,
    labScore: 9.8,
    isLabChoice: true,
    badge: "SK HYNIX A-DIE",
    badgeType: "copper",
    image: IMG.ram,
    specs: ["64GB (2x32GB)", "6600 MT/s", "CL32 Tayming", "DHX Sovutish"],
    relatedArticleId: "art-dev-build-guide",
    description: "Quyma alyuminiy radiatorli va almashtiriladigan ustki finlarga ega premium operativ xotira. Tanlangan SK Hynix A-Die chiplari yuqori barqarorlik beradi.",
    fullSpecs: {
      "Hajmi": "64 GB (2 x 32 GB komplekt)",
      "Chastota va Tayming": "DDR5-6600 MHz (CL32-39-39-76)",
      "Profillar": "Intel XMP 3.0 va AMD EXPO qo'llab-quvvatlanadi"
    }
  },
  {
    id: "ssd-samsung-990pro",
    title: "Samsung 990 PRO 2TB PCIe 4.0 NVMe M.2 SSD (7450 MB/s)",
    category: "board_mem",
    subcat: "SSD Xotira",
    brand: "Samsung",
    priceUsd: 175,
    oldPriceUsd: 195,
    stock: 22,
    labScore: 9.9,
    isLabChoice: true,
    badge: "LAB TAVSIYASI #1",
    badgeType: "emerald",
    image: IMG.ssd,
    specs: ["2 TB Hajm", "7450 MB/s O'qish", "2GB LPDDR4 Kesh", "1200 TBW"],
    relatedArticleId: "art-ssd-thermal-guide",
    description: "Operatsion tizim, ma'lumotlar bazasi va o'yinlar uchun eng ishonchli NVMe disk. Nikel qoplamali Pascal kontrolleri qizib ketishning oldini oladi.",
    fullSpecs: {
      "Ketma-ket o'qish/yozish": "7450 MB/s gacha o'qish / 6900 MB/s gacha yozish",
      "Tasodifiy tezlik (IOPS)": "1,400,000 IOPS (4K Random Read)",
      "Resurs": "1200 TBW (5 yil kafolat)"
    }
  },
  {
    id: "ssd-crucial-t705",
    title: "Crucial T705 2TB PCIe 5.0 NVMe M.2 SSD (14,500 MB/s Mis Radiatorli)",
    category: "board_mem",
    subcat: "SSD Xotira",
    brand: "Samsung",
    priceUsd: 290,
    oldPriceUsd: null,
    stock: 6,
    labScore: 9.7,
    isLabChoice: false,
    badge: "14,500 MB/S REKORD",
    badgeType: "copper",
    image: IMG.ssd,
    specs: ["PCIe Gen5 x4", "14 500 MB/s", "Mis+Alyuminiy Radiator", "DirectStorage"],
    relatedArticleId: "art-ssd-thermal-guide",
    description: "PCIe 4.0 disklardan ikki barobar tez! 8K RAW videolarni montaj qilish va katta AI modellarni bir necha soniyada RAMga yuklash uchun mo'ljallangan.",
    fullSpecs: {
      "O'qish tezligi": "14,500 MB/s",
      "Yozish tezligi": "12,700 MB/s",
      "Kontroller": "Phison E26 + 232-qatlamli TLC NAND"
    }
  },

  // --- SOVUTISH, KORPUS VA QUVVAT BLOKI ---
  {
    id: "cooler-kraken-360",
    title: "NZXT Kraken Elite 360 RGB (IPS Ekranli Suyuqlik Sovutish Tizimi)",
    category: "cooling_power",
    subcat: "Sovutish va Quvvat",
    brand: "Arctic",
    priceUsd: 275,
    oldPriceUsd: 299,
    stock: 8,
    labScore: 9.7,
    isLabChoice: true,
    badge: "IPS TELEMETRIYA EKRAN",
    badgeType: "cobalt",
    image: IMG.cooler,
    specs: ["360mm Radiator", "640x640 IPS LCD", "Asetek 8-avlod", "AM5 / LGA1851"],
    relatedArticleId: "art-ssd-thermal-guide",
    description: "Pompa ustidagi yorqin 2.36 dyuymli IPS ekranda protsessor va videokarta haroratini real vaqtda ko'rsatib turuvchi premium AIO suyuqlik kuleri.",
    fullSpecs: {
      "Radiator o'lchami": "394 x 121 x 27 mm (Alyuminiy)",
      "Pompa aylanishi": "800 – 2,800 RPM (Sokin rejim bilan)",
      "Moslik": "Intel LGA 1851/1700 va AMD AM5/AM4"
    }
  },
  {
    id: "cooler-noctua-d15",
    title: "Noctua NH-D15 G2 chromax.black (Ikki Minora va 8 Mis Trubkali Kuler)",
    category: "cooling_power",
    subcat: "Sovutish va Quvvat",
    brand: "Arctic",
    priceUsd: 148,
    oldPriceUsd: null,
    stock: 12,
    labScore: 9.9,
    isLabChoice: true,
    badge: "ABADIY ISHONCHLILIK",
    badgeType: "emerald",
    image: IMG.cooler,
    specs: ["8x Mis Heatpipe", "2x NF-A14x25r G2", "24.8 dB(A) Sokin", "NT-H2 Pasta komplektda"],
    relatedArticleId: "art-ssd-thermal-guide",
    description: "Suyuqlik sovutish tizimlari bilan tenglasha oladigan, ammo hech qachon oqib ketmaydigan va 10 yildan ortiq xizmat qiladigan afsonaviy Avstriya muhandislik mahsuloti.",
    fullSpecs: {
      "Issiqlik quvurlari": "8 ta nikel qoplangan mis heatpipe",
      "Shovqin darajasi": "Maksimal 24.8 dB(A)",
      "Kafolat": "6 yil rasmiy kafolat"
    }
  },
  {
    id: "psu-seasonic-1000",
    title: "Seasonic VERTEX GX-1000 (1000W 80+ Gold, Native ATX 3.1 & PCIe 5.1)",
    category: "cooling_power",
    subcat: "Sovutish va Quvvat",
    brand: "Lian Li",
    priceUsd: 215,
    oldPriceUsd: 235,
    stock: 9,
    labScore: 9.8,
    isLabChoice: true,
    badge: "ATX 3.1 / 12V-2X6",
    badgeType: "copper",
    image: IMG.serverAi,
    specs: ["1000W Haqiqiy Quvvat", "12V-2x6 RTX 50/40 Kabel", "100% Yapon Kondensator", "12 Yil Kafolat"],
    relatedArticleId: "art-rtx5090-review",
    description: "Qimmatbaho videokarta va protsessoringizning eng ishonchli qalqoni. Yangilangan 12V-2x6 ulagichi erib ketishdan 100% himoyalangan.",
    fullSpecs: {
      "Sertifikat": "80 PLUS Gold (92% FIK)",
      "Standart": "Intel ATX 3.1 va PCIe Gen 5.1",
      "Ventilyator": "135mm Fluid Dynamic Bearing (0 dB Hybrid rejim)"
    }
  },
  {
    id: "case-lianli-vision",
    title: "Lian Li O11 Vision Chrome / Black (Ustunsiz 3-Tomonlama Oyna Korpus)",
    category: "cooling_power",
    subcat: "Sovutish va Quvvat",
    brand: "Lian Li",
    priceUsd: 165,
    oldPriceUsd: null,
    stock: 7,
    labScore: 9.7,
    isLabChoice: true,
    badge: "PANORAMALI DIZAYN",
    badgeType: "dark",
    image: IMG.customLoop,
    specs: ["Ustunsiz 3x Oyna", "Ikki Kamerali", "E-ATX / ATX", "Olinadigan MB Tray"],
    relatedArticleId: "art-dev-build-guide",
    description: "PC Modderlar bilan hamkorlikda yaratilgan san'at asari. Burchak ustunisiz old, yon va ustki temperlangan oynalar kompyuterning ichki qismlarini akvariumdek tiniq ko'rsatadi.",
    fullSpecs: {
      "Materiallar": "4mm Temperlangan oyna + 3mm cho'tkalangan alyuminiy",
      "Videokarta uzunligi": "455 mm gacha (RTX 5090 bemalol sig'adi)",
      "Kabel-menejment": "Orqa kamerada 95mm keng bo'shliq"
    }
  },

  // --- MONITOR VA PROFESSIONAL PERIFERIYA ---
  {
    id: "mon-asus-oled",
    title: "ASUS ROG Swift OLED PG32UCDM (32\" 4K QD-OLED, 240Hz, 0.03ms)",
    category: "essentials",
    subcat: "Monitor va Periferiya",
    brand: "ASUS ROG",
    priceUsd: 1180,
    oldPriceUsd: 1290,
    stock: 4,
    labScore: 9.9,
    isLabChoice: true,
    badge: "QD-OLED ETALON",
    badgeType: "copper",
    image: IMG.monitor,
    specs: ["32\" 3840x2160", "240Hz & 0.03ms", "99% DCI-P3 (Delta E<2)", "USB-C 90W KVM"],
    relatedArticleId: "art-oled-monitors",
    description: "3-avlod QD-OLED paneli, grafen radiatorli sovutish tizimi va haqiqiy cheksiz qora rang. Ham kolorist/dizaynerlar (Delta E < 2), ham kibersportchilar uchun 1-raqamli monitor.",
    fullSpecs: {
      "Panel turi": "3-avlod Samsung QD-OLED (31.5 dyuym, 4K UHD)",
      "Yangilanish va javob vaqti": "240 Hz / 0.03 ms (GTG)",
      "Qo'shimcha": "Ichki KVM switch, USB Type-C 90W Power Delivery, Dolby Vision"
    }
  },
  {
    id: "kb-keychron-q1max",
    title: "Keychron Q1 Max QMK/VIA (To'liq CNC Alyuminiy Mexanik Klaviatura)",
    category: "essentials",
    subcat: "Monitor va Periferiya",
    brand: "Keychron",
    priceUsd: 210,
    oldPriceUsd: null,
    stock: 11,
    labScore: 9.8,
    isLabChoice: true,
    badge: "CNC ALYUMINIY + 2.4GHZ",
    badgeType: "emerald",
    image: IMG.keyboard,
    specs: ["6063 CNC Alyuminiy", "Double-Gasket Mount", "Hot-Swap Gateron Jupiter", "2.4GHz + BT + Kabel"],
    relatedArticleId: "art-dev-build-guide",
    description: "1.8 kg sof frezalangan alyuminiy korpus va ko'p qatlamli akustik ko'pik. Yozish paytida yoqimli 'thocky' ovoz chiqaradi va barmoqlarni mutlaqo charchatmaydi.",
    fullSpecs: {
      "Korpus materiali": "To'liq 6063 CNC ishlov berilgan anodlangan alyuminiy",
      "Klavish qopqoqlari (Keycaps)": "Double-shot PBT (KSA profil, yog'lanmaydi)",
      "Dasturlash": "Ochiq kodli QMK va brauzer orqali VIA sozlash"
    }
  },
  {
    id: "mouse-gprox-2",
    title: "Logitech G PRO X SUPERLIGHT 2 DEX (44,000 DPI, 8000Hz, 60 gramm)",
    category: "essentials",
    subcat: "Monitor va Periferiya",
    brand: "Logitech G",
    priceUsd: 159,
    oldPriceUsd: 175,
    stock: 15,
    labScore: 9.7,
    isLabChoice: true,
    badge: "8000HZ POLLING RATE",
    badgeType: "cobalt",
    image: IMG.mouse,
    specs: ["HERO 2 Sensor", "Lightforce Gibrid Switch", "60g Ultra-Yengil", "95 Soat Batareya"],
    relatedArticleId: "art-9800x3d-gaming",
    description: "Optik-mexanik Lightforce tugmalari ikki marta bosilib ketish (double-click) muammosini butunlay yo'q qiladi, 8000Hz uzatish esa 0.125ms kechikishsiz aniqlik beradi.",
    fullSpecs: {
      "Sensor": "HERO 2 (44,000 DPI, 888 IPS, 88G tezlanish)",
      "Vazni": "60 gramm",
      "Quvvat porti": "USB Type-C"
    }
  },
  {
    id: "audio-studio-headset",
    title: "HyperX Cloud III Wireless / Studio Planar Garnitura (120 Soat Quvvat)",
    category: "essentials",
    subcat: "Monitor va Periferiya",
    brand: "Logitech G",
    priceUsd: 145,
    oldPriceUsd: 165,
    stock: 13,
    labScore: 9.4,
    isLabChoice: false,
    badge: "120 SOAT QUUVAT",
    badgeType: "dark",
    image: IMG.headset,
    specs: ["53mm Burchakli Drayver", "10mm Tiniq Mikrofon", "Xotirali Ko'pik", "DTS Headphone:X"],
    relatedArticleId: "art-dev-build-guide",
    description: "Alyuminiy karkas va yumshoq xotirali ko'pik yostiqchalar 8-10 soatlik ish yoki o'yin seanslarida ham quloqni siqmaydi. Bir marta quvvatlab 2 hafta ishlatish mumkin.",
    fullSpecs: {
      "Drayverlar": "53mm Neodimiy magnitli burchakli dinamiklar",
      "Ulanish": "2.4GHz Ultra-Low Latency USB-C va USB-A adapter"
    }
  },

  // --- KERAKLI VOSITALAR VA KOMPYUTER PARVARISHI (ESSENTIAL ACCESSORIES) ---
  {
    id: "acc-arctic-mx6",
    title: "Arctic MX-6 (8 gramm) Ultimate Termopasta + 6x Spirtli Tozalash Salfetkasi",
    category: "essentials",
    subcat: "Kerakli Vositalar",
    brand: "Arctic",
    priceUsd: 14,
    oldPriceUsd: 18,
    stock: 45,
    labScore: 9.9,
    isLabChoice: true,
    badge: "HAR BIR PC UCHUN SHART",
    badgeType: "emerald",
    image: IMG.repairTool,
    specs: ["8 Gramm (15-20 marta surtish)", "Tok o'tkazmaydi", "Qurib qolmaydi (5 yil)", "6x Cleaner Salfetka"],
    relatedArticleId: "art-ssd-thermal-guide",
    description: "Kompyuter yig'ish yoki profilaktika qilishda eng kerakli vosita! MX-4 ga nisbatan 20% samaraliroq issiqlik o'tkazadi, protsessor va videokarta haroratini 6–9°C ga pasaytiradi.",
    fullSpecs: {
      "Yopishqoqlik": "45,000 Poise (Pump-out effektiga chidamli)",
      "Xavfsizlik": "Elektr tokini mutlaqo o'tkazmaydi (qisqa tutashuv xavfi yo'q)",
      "Komplektda": "8g shprits + 6 dona izopropil spirtli salfetka"
    }
  },
  {
    id: "acc-ups-apc-1500",
    title: "APC Back-UPS Pro 1500VA / 900W (AVR Stabilizatorli Uzluksiz Quvvat Manbai)",
    category: "essentials",
    subcat: "Kerakli Vositalar",
    brand: "Lian Li",
    priceUsd: 265,
    oldPriceUsd: 290,
    stock: 9,
    labScore: 9.8,
    isLabChoice: true,
    badge: "TOK O'YNASHIDAN HIMOYA",
    badgeType: "copper",
    image: IMG.serverAi,
    specs: ["1500VA / 900W", "Avtomatik AVR Stabilizator", "LCD Telemetriya", "10x Rozetka"],
    relatedArticleId: "art-ssd-thermal-guide",
    description: "O'zbekiston sharoitida qimmat kompyuter va ma'lumotlarni tok o'chishi hamda kuchlanish sakrashidan (160V–280V) saqlovchi eng zarur qurilma. Tok o'chganda loyihani saqlab kompyuterni xavfsiz o'chirishga 15–40 daqiqa vaqt beradi.",
    fullSpecs: {
      "Faol quvvat": "900 Watt / 1500 VA",
      "Stabilizator (AVR)": "Batareyani sarflamasdan past va yuqori kuchlanishni 220V ga tekislaydi",
      "Ulanish": "USB orqali Windows/Linux kompyuterga ulanib avtomatik Save & Shutdown qiladi"
    }
  },
  {
    id: "acc-thunderbolt-dock",
    title: "Anker Prime 14-in-1 Thunderbolt 4 / USB4 Workstation Dock (160W GaN)",
    category: "essentials",
    subcat: "Kerakli Vositalar",
    brand: "Keychron",
    priceUsd: 195,
    oldPriceUsd: null,
    stock: 10,
    labScore: 9.6,
    isLabChoice: false,
    badge: "14 PORTLI STANSIYA",
    badgeType: "cobalt",
    image: IMG.deskSetup,
    specs: ["40Gbps Uplink", "2x 4K 120Hz Ekran", "2.5G Ethernet", "Smart Ekranli"],
    relatedArticleId: "art-dev-build-guide",
    description: "Noutbuk yoki kompyuteringizga bitta kabel orqali 2 ta 4K monitor, tezkor LAN internet, SD-karta, mikrofon va barcha USB qurilmalarni ulab, ish stolini kabellardan tozalaydi.",
    fullSpecs: {
      "Quvvat uzatish": "Noutbuk uchun 100W PD + telefon/gadjetlar uchun 60W",
      "Portlar": "4x USB-C, 5x USB-A, 2x HDMI 2.1, 2.5Gbps RJ45, Audio 3.5mm"
    }
  },
  {
    id: "acc-ergo-chair",
    title: "ErgoMesh Pro Titanium (Beldagi Og'riqqa Qarshi Dasturchi Kreslosi)",
    category: "essentials",
    subcat: "Kerakli Vositalar",
    brand: "Keychron",
    priceUsd: 320,
    oldPriceUsd: 360,
    stock: 6,
    labScore: 9.7,
    isLabChoice: true,
    badge: "ORTOPEDIK 4D SETKA",
    badgeType: "emerald",
    image: IMG.chair,
    specs: ["Nafas oluvchi DuPont Setka", "Dinamik Bel Tayanchi", "Alyuminiy Oyoq (150kg)", "4D TirsakQo'ygich"],
    relatedArticleId: "art-dev-build-guide",
    description: "Yozda terlatmaydigan elastik DuPont elastomer to'ri va umurtqa pog'onasiga moslashuvchi dinamik bel tayanchi. Kuniga 8–12 soat kompyuter qarshisida o'tiradigan mutaxassislar salomatligi uchun eng muhim investitsiya.",
    fullSpecs: {
      "Karkas va asos": "Quyma alyuminiy (4-sinf TUV gazlift, 150 kg gacha)",
      "Sozlamalar": "Bosh suyanchi 3D, tirsak qo'ygich 4D, o'rindiq chuqurligi va 135° yotish burchagi"
    }
  }
];

/* ==========================================================================
   2. INTERACTIVE PC BUILDER COMPONENT OPTIONS (8 SLOTS)
   ========================================================================== */
const BUILDER_SLOTS = [
  {
    slotId: "cpu",
    label: "1. Protsessor (CPU)",
    options: [
      { id: "b-cpu-1", name: "AMD Ryzen 7 7800X3D (8 yadro, 5.0GHz)", socket: "AM5", priceUsd: 395, watt: 120, gaming: 92, render: 78, ai: 80, img: IMG.cpu },
      { id: "b-cpu-2", name: "AMD Ryzen 7 9800X3D (8 yadro, 5.2GHz 3D V-Cache)", socket: "AM5", priceUsd: 515, watt: 120, gaming: 100, render: 86, ai: 88, img: IMG.cpu },
      { id: "b-cpu-3", name: "AMD Ryzen 9 9950X (16 yadro / 32 oqim, 5.7GHz)", socket: "AM5", priceUsd: 645, watt: 170, gaming: 96, render: 100, ai: 99, img: IMG.cpu },
      { id: "b-cpu-4", name: "Intel Core Ultra 9 285K (24 yadro, LGA1851)", socket: "LGA1851", priceUsd: 610, watt: 165, gaming: 91, render: 98, ai: 95, img: IMG.cpu }
    ]
  },
  {
    slotId: "mb",
    label: "2. Ona Plata (Motherboard)",
    options: [
      { id: "b-mb-1", name: "ASUS TUF Gaming B650-PLUS WIFI (Socket AM5)", socket: "AM5", priceUsd: 210, watt: 35, img: IMG.motherboard },
      { id: "b-mb-2", name: "MSI MAG X870 TOMAHAWK WIFI (Socket AM5, PCIe 5.0)", socket: "AM5", priceUsd: 310, watt: 45, img: IMG.motherboard },
      { id: "b-mb-3", name: "ASUS ROG Crosshair X870E HERO (AM5 Flagman)", socket: "AM5", priceUsd: 680, watt: 55, img: IMG.motherboard },
      { id: "b-mb-4", name: "MSI MAG Z890 TOMAHAWK WIFI (Intel LGA1851)", socket: "LGA1851", priceUsd: 295, watt: 45, img: IMG.motherboard }
    ]
  },
  {
    slotId: "gpu",
    label: "3. Videokarta (GPU)",
    options: [
      { id: "b-gpu-1", name: "ASUS Dual GeForce RTX 4070 SUPER 12GB GDDR6X", priceUsd: 635, watt: 220, gaming: 82, render: 80, ai: 82, img: IMG.gpu },
      { id: "b-gpu-2", name: "ASUS ROG Strix RTX 4080 SUPER 16GB GDDR6X", priceUsd: 1090, watt: 320, gaming: 93, render: 92, ai: 92, img: IMG.gpu },
      { id: "b-gpu-3", name: "NVIDIA GeForce RTX 5090 32GB GDDR7 Flagman", priceUsd: 2390, watt: 575, gaming: 100, render: 100, ai: 100, img: IMG.gpu }
    ]
  },
  {
    slotId: "ram",
    label: "4. Operativ Xotira (RAM DDR5)",
    options: [
      { id: "b-ram-1", name: "32GB (2x16GB) G.Skill Trident Z5 DDR5-6000 CL30", priceUsd: 125, watt: 12, img: IMG.ram },
      { id: "b-ram-2", name: "64GB (2x32GB) Corsair Dominator Titanium DDR5-6600", priceUsd: 285, watt: 18, img: IMG.ram },
      { id: "b-ram-3", name: "96GB (2x48GB) G.Skill Ripjaws M5 DDR5-6400 Studio", priceUsd: 370, watt: 22, img: IMG.ram }
    ]
  },
  {
    slotId: "ssd",
    label: "5. Doimiy Xotira (NVMe SSD)",
    options: [
      { id: "b-ssd-1", name: "1TB Samsung 990 PRO PCIe 4.0 (7450 MB/s)", priceUsd: 105, watt: 8, img: IMG.ssd },
      { id: "b-ssd-2", name: "2TB Samsung 990 PRO PCIe 4.0 (7450 MB/s)", priceUsd: 175, watt: 9, img: IMG.ssd },
      { id: "b-ssd-3", name: "2TB Crucial T705 PCIe 5.0 (14,500 MB/s) + 2TB 990 PRO", priceUsd: 465, watt: 18, img: IMG.ssd }
    ]
  },
  {
    slotId: "cooler",
    label: "6. Protsessor Sovutish Tizimi",
    options: [
      { id: "b-cool-1", name: "Noctua NH-D15 G2 chromax.black (8-Trubkali Havo Kuler)", priceUsd: 148, watt: 10, img: IMG.cooler },
      { id: "b-cool-2", name: "Arctic Liquid Freezer III 360 Black (Suyuqlik AIO)", priceUsd: 135, watt: 18, img: IMG.cooler },
      { id: "b-cool-3", name: "NZXT Kraken Elite 360 RGB (IPS Ekranli Suyuqlik AIO)", priceUsd: 275, watt: 25, img: IMG.cooler }
    ]
  },
  {
    slotId: "psu",
    label: "7. Quvvat Bloki (PSU ATX 3.1)",
    options: [
      { id: "b-psu-1", name: "Corsair RM850e 850W 80+ Gold ATX 3.1", priceUsd: 135, capacity: 850, img: IMG.serverAi },
      { id: "b-psu-2", name: "Seasonic VERTEX GX-1000 1000W 80+ Gold ATX 3.1", priceUsd: 215, capacity: 1000, img: IMG.serverAi },
      { id: "b-psu-3", name: "Seasonic PRIME TX-1300 1300W 80+ Titanium ATX 3.1", priceUsd: 390, capacity: 1300, img: IMG.serverAi }
    ]
  },
  {
    slotId: "case",
    label: "8. Korpus + Termopasta Komplekti",
    options: [
      { id: "b-case-1", name: "NZXT H7 Flow (2026) Mesh + Arctic MX-6 Termopasta", priceUsd: 145, watt: 15, img: IMG.gamingPc },
      { id: "b-case-2", name: "Lian Li O11 Vision Chrome + 6x ARGB Fan + Arctic MX-6", priceUsd: 210, watt: 25, img: IMG.customLoop },
      { id: "b-case-3", name: "ASUS ProArt PA602 Wood/Titanium + Arctic MX-6", priceUsd: 265, watt: 25, img: IMG.workstation }
    ]
  }
];

const BUILDER_PRESETS = {
  esports: {
    cpu: "b-cpu-1",
    mb: "b-mb-1",
    gpu: "b-gpu-1",
    ram: "b-ram-1",
    ssd: "b-ssd-1",
    cooler: "b-cool-2",
    psu: "b-psu-1",
    case: "b-case-1"
  },
  creator: {
    cpu: "b-cpu-2",
    mb: "b-mb-2",
    gpu: "b-gpu-2",
    ram: "b-ram-2",
    ssd: "b-ssd-2",
    cooler: "b-cool-1",
    psu: "b-psu-2",
    case: "b-case-2"
  },
  extreme: {
    cpu: "b-cpu-3",
    mb: "b-mb-3",
    gpu: "b-gpu-3",
    ram: "b-ram-3",
    ssd: "b-ssd-3",
    cooler: "b-cool-3",
    psu: "b-psu-3",
    case: "b-case-3"
  }
};

/* ==========================================================================
   3. BENCHMARK LAB DATA & TECH JOURNALISM ARTICLES
   ========================================================================== */
const BENCHMARK_SUITES = {
  cyberpunk: {
    unit: "FPS (4K Ultra + Path Tracing + DLSS FG)",
    maxVal: 180,
    items: [
      { name: "NVIDIA GeForce RTX 5090 32GB", val: 168, productId: "gpu-rtx-5090" },
      { name: "ProArt Studio RTX 5090 Yig'ma", val: 172, productId: "pc-proart-5090" },
      { name: "ASUS ROG Strix RTX 4080 SUPER 16GB", val: 118, productId: "gpu-rtx-4080-super" },
      { name: "CyberCube RTX 4080S + 9800X3D PC", val: 124, productId: "pc-cyber-4080s" },
      { name: "ASUS ROG Zephyrus G16 (RTX 4080 Laptop)", val: 89, productId: "lap-zephyrus-g16" }
    ]
  },
  blender: {
    unit: "Sekund (Classroom 4.3 — Kamroq raqam tezroq!)",
    maxVal: 45,
    items: [
      { name: "NVIDIA GeForce RTX 5090 32GB (OptiX)", val: 9.4, barPct: 96, productId: "gpu-rtx-5090" },
      { name: "ASUS ROG Strix RTX 4080 SUPER 16GB", val: 16.8, barPct: 80, productId: "gpu-rtx-4080-super" },
      { name: "AMD Ryzen 9 9950X (CPU Render 16-Core)", val: 31.2, barPct: 62, productId: "cpu-ryzen-9950x" },
      { name: "Intel Core Ultra 9 285K (24-Core)", val: 33.5, barPct: 58, productId: "cpu-intel-285k" }
    ]
  },
  cinebench: {
    unit: "Ball (Cinebench 2024 Multi-Core)",
    maxVal: 2600,
    items: [
      { name: "AMD Ryzen 9 9950X (16 Yadro / 32 Oqim)", val: 2410, productId: "cpu-ryzen-9950x" },
      { name: "Intel Core Ultra 9 285K (24 Yadro)", val: 2345, productId: "cpu-intel-285k" },
      { name: "AMD Ryzen 7 9800X3D (8 Yadro 3D V-Cache)", val: 1420, productId: "cpu-ryzen-9800x3d" },
      { name: "ROG Zephyrus G16 (Core Ultra 9 185H)", val: 1150, productId: "lap-zephyrus-g16" }
    ]
  }
};

const ARTICLES = [
  {
    id: "art-rtx5090-review",
    title: "GeForce RTX 5090 32GB GDDR7 Lab Obzori: 4K O'yinlar va Lokal Sun'iy Intellektda Yangi Davr",
    category: "Lab Benchmark",
    timeAgo: "2 soat oldin",
    readTime: "7 daqiqa o'qish",
    author: "Sardorbek Alimov — Bosh Hardware Muhandis",
    image: IMG.gpu,
    linkedProductId: "gpu-rtx-5090",
    excerpt: "Toshkentdagi Computer.uz laboratoriyasida yangi Blackwell flagmanini 48 soat davomida Cyberpunk 2077, Blender 4.3 va DeepSeek-R1 70B modellarida sinovdan o'tkazdik. Natijalar va harorat tahlili.",
    contentHtml: `
      <p>NVIDIA-ning Blackwell arxitekturasiga asoslangan <strong>GeForce RTX 5090</strong> videokartasi nihoyat Toshkentdagi sinov stendimizga yetib keldi. 512-bitli shina va <strong>32 GB GDDR7</strong> xotira o'tkazuvchanlikni rekord darajadagi <strong>1,792 GB/sekund</strong> ga olib chiqdi.</p>
      <h4 style="margin:16px 0 8px;">🔬 Computer.uz Lab Stendi Natijalari:</h4>
      <ul style="padding-left:20px; margin-bottom:14px;">
        <li><strong>Cyberpunk 2077 (4K Ray Tracing Overdrive):</strong> RTX 4090 ga nisbatan sof rasterizatsiyada +34%, DLSS 4 Multi-Frame Generation bilan esa barqaror <strong>168–174 FPS</strong>!</li>
        <li><strong>Lokal LLM va AI (Llama-3 / DeepSeek):</strong> 32GB VRAM tufayli 70 milliard parametrli kvantlangan modellarni to'liq videokarta xotirasida 48 token/sekund tezlikda ishlatish mumkin.</li>
        <li><strong>Harorat va Quvvat:</strong> Maksimal 575W yuklamada ham bug' kamerasi (vapor chamber) yadroni 65°C da ushlab turdi.</li>
      </ul>
      <p><strong>Muhim tavsiya:</strong> Ushbu videokarta uchun albatta <em>ATX 3.1 va 12V-2x6</em> standartidagi kamida 1000W quvvat bloki (masalan, Seasonic VERTEX GX-1000) tavsiya etiladi.</p>
    `
  },
  {
    id: "art-9800x3d-gaming",
    title: "Nima Uchun AMD Ryzen 7 9800X3D Hozirgi Kundagi Eng Mukammal O'yin Protsessori?",
    category: "Lab Benchmark",
    timeAgo: "Bugun, 14:20",
    readTime: "5 daqiqa o'qish",
    author: "Javohir Rustamov — Kibersport Tahlilchisi",
    image: IMG.cpu,
    linkedProductId: "cpu-ryzen-9800x3d",
    excerpt: "2-avlod 3D V-Cache texnologiyasida kesh xotira yadrolarning ostiga joylashtirildi. Natijada harorat 12°C ga tushib, CS2 hamda Dota 2 da 600+ FPS barqarorlikka erishildi.",
    contentHtml: `
      <p>Oldingi 7800X3D protsessorida 3D V-Cache qatlami kremniy yadrolarning ustida joylashgani sababli issiqlik uzatish biroz cheklangan edi. <strong>Ryzen 7 9800X3D</strong> da AMD muhandislari keshni yadrolarning <em>ostiga</em> ko'chirishdi!</p>
      <h4 style="margin:16px 0 8px;">⚡ Asosiy Afzalliklar:</h4>
      <ul style="padding-left:20px; margin-bottom:14px;">
        <li>Barcha 8 yadro barqaror <strong>5.2 GHz</strong> chastotada ishlaydi va PBO razgonni to'liq qo'llab-quvvatlaydi.</li>
        <li><strong>1% Low FPS (Qotishlarsiz silliqlik):</strong> Raqobatbardosh o'yinlarda eng past FPS ko'rsatkichi raqobatchilardan 28% yuqori.</li>
        <li>Atigi 85–110W real o'yin sarfi — hatto havo kuleri (Noctua NH-D15 G2) bilan ham 60°C dan oshmaydi.</li>
      </ul>
    `
  },
  {
    id: "art-dev-build-guide",
    title: "2026-Yilda Senior Dasturchi, Docker va AI Muhandisi Uchun Ideal Kompyuter Qanday Bo'lishi Kerak?",
    category: "Xarid Qo'llanmasi",
    timeAgo: "Kecha",
    readTime: "8 daqiqa o'qish",
    author: "Ulug'bek Karimov — Senior Systems Architect",
    image: IMG.workstation,
    linkedProductId: "ram-corsair-64gb",
    excerpt: "RAM 32GB endi kamlik qiladimi? PCIe 5.0 SSD kompilyatsiyaga qanday ta'sir ko'rsatadi va nega ergonomik kreslo hamda mexanik klaviatura unumdorlikni 30% oshiradi?",
    contentHtml: `
      <p>Zamonaviy dasturlash muhiti (IDE + 15 ta Docker konteyner + Kubernetes + lokal AI yordamchi + 40 ta brauzer sahifasi) kompyuter resurslariga bo'lgan talabni tubdan o'zgartirdi.</p>
      <h4 style="margin:16px 0 8px;">🧭 Dasturchi Uchun "Oltin Standart" Qismlar:</h4>
      <ul style="padding-left:20px; margin-bottom:14px;">
        <li><strong>Operativ xotira:</strong> Kamida <strong>64GB DDR5 (2x32GB)</strong>. 4 ta plankadan ko'ra 2x32GB juftlik DDR5-6000/6600 chastotada ancha barqaror ishlaydi.</li>
        <li><strong>Protsessor:</strong> Ko'p oqimli kompilyatsiya uchun 16 yadroli <em>Ryzen 9 9950X</em> yoki 24 yadroli <em>Core Ultra 9 285K</em>.</li>
        <li><strong>Klaviatura va Ergonomika:</strong> Kuniga 40,000+ tugma bosadigan dasturchi uchun CNC alyuminiy <em>Keychron Q1 Max</em> va ortopedik <em>ErgoMesh Pro</em> kreslosi bo'g'im va umurtqa kasalliklarining oldini oladi.</li>
      </ul>
    `
  },
  {
    id: "art-oled-monitors",
    title: "3-Avlod 4K 240Hz QD-OLED Monitorlar: Kuyib Qolish (Burn-in) Muammosi Hal Bo'ldimi?",
    category: "Texno-Yangiliklar",
    timeAgo: "2 kun oldin",
    readTime: "6 daqiqa o'qish",
    author: "Dilshod Xolmatov — Displey Eksperti",
    image: IMG.monitor,
    linkedProductId: "mon-asus-oled",
    excerpt: "Grafen plyonkali passiv radiator va sun'iy intellektli piksel tozalash algoritmlari yangi ASUS ROG PG32UCDM monitorini ham kod yozish, ham HDR kino uchun ideal qildi.",
    contentHtml: `
      <p>Ko'pchilik dasturchilar va geymerlar OLED monitor olishdan oldin ikkita savol berishadi: <em>matnlar aniq ko'rinadimi</em> va <em>statik panellar ekranda iz qoldirmaydimi?</em></p>
      <p style="margin-top:10px;"><strong>3-avlod QD-OLED sub-piksel strukturasi</strong> matn qirralaridagi rangli soyalarni butunlay yo'qotdi — 32 dyuymda 4K (140 PPI) zichlik MacBook Retina ekranlaridek tiniqlik beradi. Orqa paneldagi <strong>maxsus grafen qatlami</strong> esa issiqlikni tez tarqatib, panel resursini 3 barobar uzaytiradi.</p>
    `
  },
  {
    id: "art-ssd-thermal-guide",
    title: "Kompyuter Parvarishi: Termopastani Qachon Yangilash Kerak va Nega UPS Stabilizator Shart?",
    category: "Kompyuter Parvarishi",
    timeAgo: "3 kun oldin",
    readTime: "5 daqiqa o'qish",
    author: "Sardorbek Alimov — Bosh Hardware Muhandis",
    image: IMG.repairTool,
    linkedProductId: "acc-arctic-mx6",
    excerpt: "Yozgi issiqda va kuchlanish o'ynaydigan hududlarda kompyuterni 5–7 yil muammosiz ishlatish sirlari: Arctic MX-6, changdan tozalash va AVR stabilizatorli UPS tanlash.",
    contentHtml: `
      <p>Hatto eng qimmat 4000 dollarlik kompyuter ham ikki narsa tufayli muddatidan oldin ishdan chiqishi mumkin: <strong>qizib ketish (termal degradatsiya)</strong> va <strong>elektr tarmog'idagi kuchlanish sakrashi</strong>.</p>
      <h4 style="margin:16px 0 8px;">🛠️ Har Bir Foydalanuvchi Bilishi Kerak Bo'lgan 3 Qoida:</h4>
      <ul style="padding-left:20px; margin-bottom:14px;">
        <li><strong>Termopasta:</strong> Sifatsiz zavod termopastasi 12 oyda qurib qoladi. <em>Arctic MX-6</em> esa yuqori yopishqoqlikka ega bo'lib, 4-5 yil davomida o'z xususiyatini yo'qotmaydi.</li>
        <li><strong>NVMe SSD Radiatori:</strong> PCIe 4.0 va 5.0 SSD disklar 70°C dan oshganda tezlikni 50% ga tushiradi (throttling). Ona platadagi termoprokladka qopqog'ini albatta o'rnating.</li>
        <li><strong>UPS va AVR:</strong> <em>APC Back-UPS Pro 1500VA</em> nafaqat tok o'chganda batareyaga o'tadi, balki tok 175V ga tushganda uni 220V ga tekislab, quvvat blokini himoya qiladi.</li>
      </ul>
    `
  },
  {
    id: "art-ddr5-speeds",
    title: "DDR5-6000 CL30 vs DDR5-8000: Qaysi Operativ Xotira Protsessoringiz Uchun Eng Foydali?",
    category: "Lab Benchmark",
    timeAgo: "4 kun oldin",
    readTime: "6 daqiqa o'qish",
    author: "Javohir Rustamov — Kibersport Tahlilchisi",
    image: IMG.ram,
    linkedProductId: "ram-corsair-64gb",
    excerpt: "AMD AM5 va Intel Z890 platformalarida xotira kontrollerining 1:1 va 1:2 rejimlari qanday ishlaydi? Ortiqcha pul sarflamasdan maksimal tezlik olish sirlari.",
    contentHtml: `
      <p>Operativ xotira tanlashda faqat megagers (MHz) raqamiga qarash xato. Asosiy ko'rsatkich — <strong>Birinchi So'z Kechikishi (First Word Latency, ns)</strong> va xotira kontrollerining sinxron ishlashidir.</p>
      <p style="margin-top:10px;">AMD Ryzen 9000 seriyasi uchun <strong>DDR5-6000 CL30</strong> yoki <strong>DDR5-6400 CL32</strong> (1:1 UCLK=MCLK rejimida) eng optimal nuqta hisoblanadi. Intel Core Ultra 200 (Z890) platformasi esa yuqori chastotali <strong>DDR5-6600 – 8000 MT/s</strong> xotiralarda o'zining to'liq quvvatini namoyon etadi.</p>
    `
  }
];

/* ==========================================================================
   4. APPLICATION STATE & STORAGE
   ========================================================================== */
const state = {
  currency: "UZS", // "UZS" or "USD"
  theme: "light",
  activeCategory: "all",
  activeSubcat: "all",
  activeBrand: "all",
  sortBy: "featured",
  onlyLabChoice: false,
  searchQuery: "",
  activeNewsCat: "all",
  activeBenchmark: "cyberpunk",
  cart: [
    { id: "acc-arctic-mx6", qty: 1 }
  ],
  wishlist: ["gpu-rtx-5090", "mon-asus-oled"],
  compare: ["cpu-ryzen-9800x3d", "cpu-ryzen-9950x"],
  promoDiscountPct: 0,
  builderSelections: { ...BUILDER_PRESETS.creator }
};

/* ==========================================================================
   5. CURRENCY & FORMATTING HELPERS
   ========================================================================== */
function formatPrice(usdAmount) {
  if (usdAmount === null || usdAmount === undefined) return "";
  if (state.currency === "USD") {
    return "$" + Math.round(usdAmount).toLocaleString("en-US");
  }
  const uzs = Math.round((usdAmount * EXCHANGE_RATE) / 1000) * 1000;
  return uzs.toLocaleString("ru-RU").replace(/,/g, " ") + " so'm";
}

function formatInstallment(usdAmount) {
  const monthlyUsd = usdAmount / 12;
  if (state.currency === "USD") {
    return `Oyiga $${Math.round(monthlyUsd)} × 12 oy`;
  }
  const monthlyUzs = Math.round(((usdAmount * EXCHANGE_RATE) / 12) / 1000) * 1000;
  return `Oyiga ${monthlyUzs.toLocaleString("ru-RU").replace(/,/g, " ")} so'm × 12`;
}

function showToast(message) {
  const container = document.getElementById("toastContainer");
  if (!container) return;
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span>⚡</span><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 0.25s ease";
    setTimeout(() => toast.remove(), 260);
  }, 3200);
}

/* ==========================================================================
   6. RENDER HERO WIRE & STATIC PRICES
   ========================================================================== */
function updateStaticPrices() {
  const flagshipEl = document.getElementById("heroFlagshipPrice");
  if (flagshipEl) flagshipEl.textContent = formatPrice(3887);

  document.querySelectorAll("[data-usd-price]").forEach((el) => {
    const usd = Number(el.getAttribute("data-usd-price"));
    el.textContent = formatPrice(usd);
  });
}

function renderHeroWire() {
  const container = document.getElementById("heroWireList");
  if (!container) return;
  const topArticles = ARTICLES.slice(0, 3);
  container.innerHTML = topArticles
    .map(
      (art) => `
      <div class="wire-item" data-open-article="${art.id}">
        <span class="wire-time">${art.category}</span>
        <div>
          <div class="wire-headline">${art.title}</div>
          <div style="font-size:0.74rem; color:var(--text-muted); margin-top:2px;">
            ⏱️ ${art.readTime} &bull; Maqoladagi mahsulot do'konda mavjud
          </div>
        </div>
      </div>
    `
    )
    .join("");
}

/* ==========================================================================
   7. RENDER PRODUCT CATALOG
   ========================================================================== */
function getFilteredProducts() {
  return PRODUCTS.filter((p) => {
    if (state.activeCategory !== "all" && p.category !== state.activeCategory) return false;
    if (state.activeSubcat !== "all" && p.subcat !== state.activeSubcat) return false;
    if (state.activeBrand !== "all" && p.brand !== state.activeBrand) return false;
    if (state.onlyLabChoice && !p.isLabChoice) return false;
    if (state.searchQuery.trim() !== "") {
      const q = state.searchQuery.toLowerCase();
      const haystack = `${p.title} ${p.brand} ${p.subcat} ${p.specs.join(" ")} ${p.description}`.toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    return true;
  }).sort((a, b) => {
    if (state.sortBy === "price-asc") return a.priceUsd - b.priceUsd;
    if (state.sortBy === "price-desc") return b.priceUsd - a.priceUsd;
    if (state.sortBy === "rating-desc") return b.labScore - a.labScore;
    return (b.isLabChoice ? 1 : 0) - (a.isLabChoice ? 1 : 0);
  });
}

function renderProductCatalog() {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  const list = getFilteredProducts();
  if (list.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align:center; padding:48px 20px; background:var(--bg-surface); border-radius:var(--radius-lg); border:1px dashed var(--border-strong);">
        <h3 style="font-family:var(--font-display); font-size:1.25rem; margin-bottom:8px;">Tanlangan filtr bo'yicha mahsulot topilmadi</h3>
        <p style="color:var(--text-secondary); margin-bottom:16px;">Filtrlarni tozalab barcha 24 ta kompyuter va ehtiyot qismlarni ko'rishingiz mumkin.</p>
        <button type="button" class="btn-primary-copper" id="resetCatalogFiltersBtn">Barcha Mahsulotlarni Ko'rsatish</button>
      </div>
    `;
    const resetBtn = document.getElementById("resetCatalogFiltersBtn");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        state.activeCategory = "all";
        state.activeSubcat = "all";
        state.activeBrand = "all";
        state.onlyLabChoice = false;
        state.searchQuery = "";
        document.getElementById("brandFilterSelect").value = "all";
        document.getElementById("filterLabChoice").checked = false;
        syncCategoryUI();
        renderProductCatalog();
      });
    }
    return;
  }

  grid.innerHTML = list
    .map((p) => {
      const inWish = state.wishlist.includes(p.id);
      const inComp = state.compare.includes(p.id);
      const relatedArt = ARTICLES.find((a) => a.id === p.relatedArticleId);

      return `
        <article class="product-card">
          <div class="product-media">
            <img src="${p.image}" alt="${p.title}" loading="lazy" />
            <div class="product-badges-top">
              <div class="badge-stack">
                <span class="prod-badge ${p.badgeType}">${p.badge}</span>
                <span class="prod-badge dark">${p.subcat}</span>
              </div>
              <div class="product-quick-actions">
                <button type="button" class="icon-circle-btn ${inWish ? "active" : ""}" data-toggle-wish="${p.id}" title="Sevimlilarga qo'shish">
                  ♥
                </button>
                <button type="button" class="icon-circle-btn ${inComp ? "active" : ""}" data-toggle-compare="${p.id}" title="Taqqoslashga qo'shish">
                  ⇄
                </button>
              </div>
            </div>
            <div class="lab-tested-pill">
              <span>🔬 Lab Bahosi:</span>
              <strong>${p.labScore} / 10</strong>
            </div>
          </div>

          <div class="product-body">
            <div class="product-meta-row">
              <span class="product-brand">${p.brand}</span>
              <span class="product-stock">● Omborda: ${p.stock} dona</span>
            </div>

            <h3 class="product-title" data-quick-view="${p.id}">${p.title}</h3>

            <div class="spec-chips">
              ${p.specs.map((s) => `<span class="spec-chip">${s}</span>`).join("")}
            </div>

            ${
              relatedArt
                ? `
              <div class="product-editorial-link" data-open-article="${relatedArt.id}">
                <span>📰 Lab Maqola: "${relatedArt.title.slice(0, 42)}..."</span>
                <span>O'qish &rarr;</span>
              </div>
            `
                : ""
            }

            <div class="product-footer">
              <div class="price-block">
                ${p.oldPriceUsd ? `<span class="price-old">${formatPrice(p.oldPriceUsd)}</span>` : ""}
                <span class="price-current">${formatPrice(p.priceUsd)}</span>
                <span class="price-installment">${formatInstallment(p.priceUsd)}</span>
              </div>

              <div class="product-btn-group">
                <button type="button" class="btn-quick-view" data-quick-view="${p.id}" title="Texnik xususiyatlar">
                  Ko'rish
                </button>
                <button type="button" class="btn-add-cart" data-add-cart="${p.id}">
                  + Savatga
                </button>
              </div>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function syncCategoryUI() {
  document.querySelectorAll(".category-card").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-cat") === state.activeCategory);
  });
  document.querySelectorAll("[data-nav-cat]").forEach((link) => {
    link.classList.toggle("active", link.getAttribute("data-nav-cat") === state.activeCategory);
  });
  document.querySelectorAll("#subcatPills .subcat-pill").forEach((pill) => {
    pill.classList.toggle("active", pill.getAttribute("data-subcat") === state.activeSubcat);
  });
}

/* ==========================================================================
   8. INTERACTIVE PC KONFIGURATOR (CUSTOM BUILDER)
   ========================================================================== */
function renderBuilder() {
  const slotsContainer = document.getElementById("builderSlotsContainer");
  if (!slotsContainer) return;

  slotsContainer.innerHTML = BUILDER_SLOTS.map((slot) => {
    const selectedId = state.builderSelections[slot.slotId];
    const currentOpt = slot.options.find((o) => o.id === selectedId) || slot.options[0];

    return `
      <div class="builder-slot-card">
        <div class="slot-header">
          <span class="slot-type">${slot.label}</span>
          <span class="slot-watt">${
            currentOpt.capacity
              ? `Quvvat: ${currentOpt.capacity}W`
              : currentOpt.watt
              ? `~${currentOpt.watt}W`
              : ""
          }</span>
        </div>
        <div class="slot-preview">
          <img src="${currentOpt.img}" alt="${currentOpt.name}" />
          <div style="flex:1; min-width:0;">
            <select class="slot-select" data-builder-slot="${slot.slotId}">
              ${slot.options
                .map(
                  (opt) => `
                <option value="${opt.id}" ${opt.id === currentOpt.id ? "selected" : ""}>
                  ${opt.name} — ${formatPrice(opt.priceUsd)}
                </option>
              `
                )
                .join("")}
            </select>
          </div>
        </div>
      </div>
    `;
  }).join("");

  updateBuilderTelemetry();
}

function updateBuilderTelemetry() {
  const chosen = {};
  let rawTotalUsd = 0;
  let totalWatt = 45; // Base system fans/peripherals

  BUILDER_SLOTS.forEach((slot) => {
    const selId = state.builderSelections[slot.slotId];
    const opt = slot.options.find((o) => o.id === selId) || slot.options[0];
    chosen[slot.slotId] = opt;
    rawTotalUsd += opt.priceUsd;
    if (opt.watt) totalWatt += opt.watt;
  });

  const psuCap = chosen.psu.capacity || 850;
  const socketMatch = chosen.cpu.socket === chosen.mb.socket;
  const powerOk = psuCap >= totalWatt + 100;

  const banner = document.getElementById("builderCompatBanner");
  const bannerText = document.getElementById("builderCompatText");

  if (!socketMatch) {
    banner.style.background = "rgba(201, 42, 42, 0.2)";
    banner.style.borderColor = "#EF4444";
    banner.style.color = "#FCA5A5";
    banner.innerHTML = `<span>⚠️</span><span>Soket mos emas: Protsessor (${chosen.cpu.socket}) va Ona plata (${chosen.mb.socket}) bir-biriga tushmaydi! Mos soketni tanlang.</span>`;
  } else if (!powerOk) {
    banner.style.background = "rgba(229, 154, 40, 0.2)";
    banner.style.borderColor = "#F59E0B";
    banner.style.color = "#FCD34D";
    banner.innerHTML = `<span>⚡</span><span>Diqqat: Tizim ${totalWatt}W sarflaydi. Barqarorlik uchun kuchliroq PSU (1000W+) tavsiya etiladi.</span>`;
  } else {
    banner.style.background = "rgba(23, 184, 130, 0.14)";
    banner.style.borderColor = "rgba(23, 184, 130, 0.35)";
    banner.style.color = "#34D399";
    banner.innerHTML = `<span>✅</span><span>Barcha 8 ta qism 100% o'zaro mos (${chosen.cpu.socket} • DDR5 • PCIe 5.0)</span>`;
  }

  const discountUsd = Math.round(rawTotalUsd * 0.05);
  const finalUsd = rawTotalUsd - discountUsd;

  document.getElementById("builderWattageVal").textContent = `${totalWatt} W / ${psuCap} W`;
  document.getElementById("builderDiscountVal").textContent = `-${formatPrice(discountUsd)}`;
  document.getElementById("builderTotalPrice").textContent = formatPrice(finalUsd);
  document.getElementById("builderInstallmentText").textContent = `${formatInstallment(finalUsd)} (Bepul professional yig'ish + Arctic MX-6 + Windows 11 Pro sovg'a!)`;

  // Performance Indexes
  const gamingScore = Math.round((chosen.cpu.gaming * 0.42 + chosen.gpu.gaming * 0.58));
  const fpsEst = Math.round(gamingScore * 1.68);
  const renderScore = Math.round((chosen.cpu.render * 0.5 + chosen.gpu.render * 0.5));
  const aiScore = Math.round((chosen.cpu.ai * 0.35 + chosen.gpu.ai * 0.65));

  document.getElementById("perfGamingLabel").textContent = `${fpsEst} FPS (4K Ultra)`;
  document.getElementById("perfGamingBar").style.width = `${Math.min(100, gamingScore)}%`;

  document.getElementById("perfRenderLabel").textContent = `${renderScore} / 100`;
  document.getElementById("perfRenderBar").style.width = `${Math.min(100, renderScore)}%`;

  document.getElementById("perfAiLabel").textContent = `${aiScore} / 100`;
  document.getElementById("perfAiBar").style.width = `${Math.min(100, aiScore)}%`;
}

/* ==========================================================================
   9. RENDER BENCHMARK LAB & EDITORIAL ARTICLES
   ========================================================================== */
function renderBenchmarkWidget() {
  const container = document.getElementById("benchmarkBarsContainer");
  if (!container) return;

  const suite = BENCHMARK_SUITES[state.activeBenchmark];
  container.innerHTML = suite.items
    .map((item) => {
      const pct = item.barPct ? item.barPct : Math.min(100, Math.round((item.val / suite.maxVal) * 100));
      return `
        <div class="bench-row">
          <div class="bench-gpu-name">
            <span>⚡</span>
            <span>${item.name}</span>
          </div>
          <div class="bench-bar-wrap">
            <div class="bench-bar-fill" style="width: ${pct}%;">
              ${item.val} ${state.activeBenchmark === "cyberpunk" ? "FPS" : state.activeBenchmark === "blender" ? "sek" : "ball"}
            </div>
          </div>
          <button type="button" class="bench-buy-link" data-quick-view="${item.productId}">
            🛒 Xarid / Ko'rish
          </button>
        </div>
      `;
    })
    .join("");
}

function renderNewsGrid() {
  const grid = document.getElementById("newsGrid");
  if (!grid) return;

  const filtered = ARTICLES.filter(
    (a) => state.activeNewsCat === "all" || a.category === state.activeNewsCat
  );

  grid.innerHTML = filtered
    .map((art) => {
      const linkedProd = PRODUCTS.find((p) => p.id === art.linkedProductId);
      return `
        <article class="news-card">
          <div class="news-media">
            <img src="${art.image}" alt="${art.title}" loading="lazy" />
            <span class="news-cat-badge">${art.category}</span>
          </div>
          <div class="news-body">
            <div class="news-meta">
              <span>📅 ${art.timeAgo}</span>
              <span>&bull;</span>
              <span>⏱️ ${art.readTime}</span>
            </div>
            <h3 class="news-title" data-open-article="${art.id}">${art.title}</h3>
            <p class="news-excerpt">${art.excerpt}</p>

            ${
              linkedProd
                ? `
              <div class="shop-the-article-box">
                <div class="sta-info">
                  <span class="sta-label">🛒 Maqoladagi mahsulot:</span>
                  <span class="sta-name">${linkedProd.title}</span>
                  <span class="sta-price">${formatPrice(linkedProd.priceUsd)}</span>
                </div>
                <button type="button" class="sta-buy-btn" data-add-cart="${linkedProd.id}">
                  + Savatga
                </button>
              </div>
            `
                : ""
            }

            <button type="button" class="news-read-btn" data-open-article="${art.id}">
              <span>Maqolani va Lab jadvalini to'liq o'qish</span>
              <span>&rarr;</span>
            </button>
          </div>
        </article>
      `;
    })
    .join("");
}

/* ==========================================================================
   10. MODALS: QUICK VIEW, ARTICLE READER, COMPARE, WISHLIST
   ========================================================================== */
function openUniversalModal(innerHtml) {
  const backdrop = document.getElementById("universalModalBackdrop");
  const content = document.getElementById("universalModalContent");
  content.innerHTML = `
    <button type="button" class="modal-close-btn" id="closeUniversalModalBtn">&times;</button>
    ${innerHtml}
  `;
  backdrop.classList.add("open");
  document.getElementById("closeUniversalModalBtn").addEventListener("click", closeUniversalModal);
}

function closeUniversalModal() {
  document.getElementById("universalModalBackdrop").classList.remove("open");
}

function openProductQuickView(productId) {
  const p = PRODUCTS.find((item) => item.id === productId);
  if (!p) return;

  const specsRows = Object.entries(p.fullSpecs || {})
    .map(
      ([k, v]) => `
      <tr style="border-bottom:1px solid var(--border-subtle);">
        <td style="padding:9px 0; font-weight:600; color:var(--text-secondary); width:38%;">${k}</td>
        <td style="padding:9px 0; font-family:var(--font-mono); font-size:0.84rem;">${v}</td>
      </tr>
    `
    )
    .join("");

  openUniversalModal(`
    <div style="display:grid; grid-template-columns: 1fr 1.2fr; gap:24px; align-items:start;">
      <div>
        <img src="${p.image}" alt="${p.title}" style="width:100%; height:290px; object-fit:cover; border-radius:var(--radius-md); border:1px solid var(--border-subtle); margin-bottom:14px;" />
        <div style="background:var(--bg-secondary); padding:14px; border-radius:12px; border:1px solid var(--border-subtle);">
          <div style="font-family:var(--font-mono); font-size:0.75rem; color:var(--accent-copper); font-weight:700; margin-bottom:6px;">
            💳 MUDDATLI TO'LOV (NASIYA KALKULYATORI)
          </div>
          <div style="display:flex; justify-content:space-between; font-size:0.84rem; margin-bottom:4px;">
            <span>6 oyga (0% ustama):</span>
            <strong>${formatPrice(p.priceUsd / 6)} / oy</strong>
          </div>
          <div style="display:flex; justify-content:space-between; font-size:0.84rem;">
            <span>12 oyga bo'lib to'lash:</span>
            <strong>${formatPrice(p.priceUsd / 12)} / oy</strong>
          </div>
        </div>
      </div>

      <div>
        <span class="prod-badge ${p.badgeType}" style="margin-bottom:8px;">${p.badge} &bull; Lab: ${p.labScore}/10</span>
        <h2 style="font-family:var(--font-display); font-size:1.45rem; font-weight:800; margin-bottom:8px;">${p.title}</h2>
        <p style="font-size:0.9rem; color:var(--text-secondary); margin-bottom:16px;">${p.description}</p>

        <div style="display:flex; align-items:baseline; gap:14px; margin-bottom:18px;">
          <span style="font-family:var(--font-display); font-size:1.65rem; font-weight:800; color:var(--accent-copper);">${formatPrice(p.priceUsd)}</span>
          ${p.oldPriceUsd ? `<span style="text-decoration:line-through; color:var(--text-muted); font-family:var(--font-mono);">${formatPrice(p.oldPriceUsd)}</span>` : ""}
        </div>

        <table style="width:100%; border-collapse:collapse; margin-bottom:20px; font-size:0.86rem;">
          <tbody>${specsRows}</tbody>
        </table>

        <div style="display:flex; gap:12px; flex-wrap:wrap;">
          <button type="button" class="btn-primary-copper" data-add-cart="${p.id}" onclick="document.getElementById('universalModalBackdrop').classList.remove('open')">
            🛒 Savatga Qo'shish
          </button>
          <button type="button" class="btn-quick-view" data-toggle-compare="${p.id}">
            ⇄ Taqqoslashga Qo'shish
          </button>
        </div>
      </div>
    </div>
  `);
}

function openArticleModal(articleId) {
  const art = ARTICLES.find((a) => a.id === articleId);
  if (!art) return;
  const prod = PRODUCTS.find((p) => p.id === art.linkedProductId);

  openUniversalModal(`
    <div>
      <span class="prod-badge copper" style="margin-bottom:10px;">${art.category}</span>
      <h2 style="font-family:var(--font-display); font-size:1.65rem; font-weight:800; line-height:1.25; margin-bottom:10px;">
        ${art.title}
      </h2>
      <div style="font-family:var(--font-mono); font-size:0.78rem; color:var(--text-muted); margin-bottom:18px;">
        ✍️ ${art.author} &bull; 📅 ${art.timeAgo} &bull; ⏱️ ${art.readTime}
      </div>
      <img src="${art.image}" alt="${art.title}" style="width:100%; max-height:330px; object-fit:cover; border-radius:var(--radius-md); margin-bottom:20px;" />
      <div style="font-size:0.96rem; line-height:1.7; color:var(--text-primary); margin-bottom:24px;">
        ${art.contentHtml}
      </div>

      ${
        prod
          ? `
        <div style="background:var(--bg-secondary); border:1.5px solid var(--accent-copper); border-radius:var(--radius-md); padding:18px; display:flex; align-items:center; justify-content:space-between; gap:16px; flex-wrap:wrap;">
          <div style="display:flex; align-items:center; gap:14px;">
            <img src="${prod.image}" alt="${prod.title}" style="width:72px; height:72px; border-radius:10px; object-fit:cover;" />
            <div>
              <span style="font-family:var(--font-mono); font-size:0.72rem; color:var(--accent-copper); font-weight:700;">MAQOLADA SINOVDAN O'TGAN QURILMA</span>
              <h4 style="font-family:var(--font-display); font-size:1.05rem; font-weight:800;">${prod.title}</h4>
              <div style="font-family:var(--font-mono); font-weight:700; font-size:0.95rem; margin-top:2px;">
                ${formatPrice(prod.priceUsd)} &bull; <span style="color:var(--accent-emerald);">Omborda ${prod.stock} dona bor</span>
              </div>
            </div>
          </div>
          <button type="button" class="btn-primary-copper" data-add-cart="${prod.id}">
            🛒 Darhol Savatga Qo'shish
          </button>
        </div>
      `
          : ""
      }
    </div>
  `);
}

function openCompareModal() {
  const items = state.compare.map((id) => PRODUCTS.find((p) => p.id === id)).filter(Boolean);
  if (items.length === 0) {
    showToast("Taqqoslash ro'yxati bo'sh. Mahsulot kartochkasidagi ⇄ tugmasini bosing!");
    return;
  }

  openUniversalModal(`
    <h2 style="font-family:var(--font-display); font-size:1.45rem; font-weight:800; margin-bottom:16px;">
      ⇄ Qurilmalarni Texnik Taqqoslash (${items.length} ta)
    </h2>
    <div style="overflow-x:auto;">
      <table style="width:100%; border-collapse:collapse; font-size:0.86rem;">
        <thead>
          <tr style="border-bottom:2px solid var(--border-strong); text-align:left;">
            <th style="padding:10px;">Xususiyat</th>
            ${items.map((p) => `<th style="padding:10px; min-width:200px;">${p.title}</th>`).join("")}
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid var(--border-subtle);">
            <td style="padding:10px; font-weight:700;">Narxi</td>
            ${items.map((p) => `<td style="padding:10px; font-family:var(--font-mono); font-weight:700; color:var(--accent-copper);">${formatPrice(p.priceUsd)}</td>`).join("")}
          </tr>
          <tr style="border-bottom:1px solid var(--border-subtle);">
            <td style="padding:10px; font-weight:700;">Lab Bahosi</td>
            ${items.map((p) => `<td style="padding:10px; font-family:var(--font-mono); color:var(--accent-emerald); font-weight:700;">${p.labScore} / 10</td>`).join("")}
          </tr>
          <tr style="border-bottom:1px solid var(--border-subtle);">
            <td style="padding:10px; font-weight:700;">Asosiy Parametrlar</td>
            ${items.map((p) => `<td style="padding:10px;">${p.specs.join(" • ")}</td>`).join("")}
          </tr>
          <tr>
            <td style="padding:10px; font-weight:700;">Amal</td>
            ${items
              .map(
                (p) => `
              <td style="padding:10px;">
                <button type="button" class="btn-add-cart" data-add-cart="${p.id}">+ Savatga</button>
              </td>
            `
              )
              .join("")}
          </tr>
        </tbody>
      </table>
    </div>
  `);
}

function openWishlistModal() {
  const items = state.wishlist.map((id) => PRODUCTS.find((p) => p.id === id)).filter(Boolean);
  if (items.length === 0) {
    showToast("Sevimlilar ro'yxati bo'sh. ♥ tugmasini bosib saqlab qo'ying!");
    return;
  }

  openUniversalModal(`
    <h2 style="font-family:var(--font-display); font-size:1.45rem; font-weight:800; margin-bottom:16px;">
      ♥ Sevimli Qurilmalar (${items.length} ta)
    </h2>
    <div style="display:flex; flex-direction:column; gap:12px;">
      ${items
        .map(
          (p) => `
        <div style="display:flex; align-items:center; justify-content:space-between; gap:14px; padding:12px; background:var(--bg-secondary); border-radius:12px;">
          <div style="display:flex; align-items:center; gap:12px;">
            <img src="${p.image}" alt="${p.title}" style="width:60px; height:60px; border-radius:8px; object-fit:cover;" />
            <div>
              <h4 style="font-size:0.95rem; font-weight:700;">${p.title}</h4>
              <span style="font-family:var(--font-mono); font-size:0.84rem; color:var(--accent-copper); font-weight:700;">${formatPrice(p.priceUsd)}</span>
            </div>
          </div>
          <button type="button" class="btn-add-cart" data-add-cart="${p.id}">+ Savatga</button>
        </div>
      `
        )
        .join("")}
    </div>
  `);
}

/* ==========================================================================
   11. SHOPPING CART & CHECKOUT ENGINE
   ========================================================================== */
function addToCart(productId, customItem = null) {
  if (customItem) {
    state.cart.push(customItem);
  } else {
    const existing = state.cart.find((c) => c.id === productId);
    if (existing) {
      existing.qty += 1;
    } else {
      state.cart.push({ id: productId, qty: 1 });
    }
  }
  updateCartUI();
}

function updateCartUI() {
  const countBadge = document.getElementById("cartCountBadge");
  const headerTotal = document.getElementById("headerCartTotal");
  const container = document.getElementById("cartItemsContainer");
  const totalValueEl = document.getElementById("cartTotalValue");

  const totalCount = state.cart.reduce((acc, item) => acc + item.qty, 0);
  countBadge.textContent = totalCount;

  let rawUsd = 0;
  const rowsHtml = state.cart
    .map((item, idx) => {
      const prod = item.customTitle
        ? { title: item.customTitle, priceUsd: item.priceUsd, image: item.image }
        : PRODUCTS.find((p) => p.id === item.id);

      if (!prod) return "";
      rawUsd += prod.priceUsd * item.qty;

      return `
        <div class="cart-item">
          <img src="${prod.image}" alt="${prod.title}" />
          <div class="cart-item-info">
            <div class="cart-item-title">${prod.title}</div>
            <div class="cart-item-price">${formatPrice(prod.priceUsd)}</div>
          </div>
          <div class="qty-controls">
            <button type="button" data-cart-dec="${idx}">-</button>
            <span style="font-family:var(--font-mono); font-size:0.8rem; font-weight:700;">${item.qty}</span>
            <button type="button" data-cart-inc="${idx}">+</button>
          </div>
        </div>
      `;
    })
    .join("");

  const finalUsd = rawUsd * (1 - state.promoDiscountPct / 100);
  headerTotal.textContent = totalCount > 0 ? formatPrice(finalUsd) : "Savatcha";
  totalValueEl.textContent = formatPrice(finalUsd);

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:40px 10px; color:var(--text-muted);">
        <p style="font-size:1rem; font-weight:600; margin-bottom:6px;">Savatchangiz hozircha bo'sh</p>
        <p style="font-size:0.84rem;">Katalogdan ehtiyot qismlar tanlang yoki PC Konfiguratorda o'z kompyuteringizni yig'ing.</p>
      </div>
    `;
  } else {
    container.innerHTML = rowsHtml;
  }

  document.getElementById("wishlistCountBadge").textContent = state.wishlist.length;
  document.getElementById("compareCountBadge").textContent = state.compare.length;
}

/* ==========================================================================
   12. SMART LIVE SEARCH (PRODUCTS + ARTICLES)
   ========================================================================== */
function handleLiveSearch(query) {
  const dropdown = document.getElementById("searchDropdown");
  if (!query || query.trim().length < 2) {
    dropdown.classList.remove("open");
    return;
  }

  const q = query.toLowerCase();
  const matchedProds = PRODUCTS.filter((p) =>
    `${p.title} ${p.brand} ${p.subcat} ${p.specs.join(" ")}`.toLowerCase().includes(q)
  ).slice(0, 5);

  const matchedArts = ARTICLES.filter((a) =>
    `${a.title} ${a.category} ${a.excerpt}`.toLowerCase().includes(q)
  ).slice(0, 3);

  if (matchedProds.length === 0 && matchedArts.length === 0) {
    dropdown.innerHTML = `<div style="padding:12px; font-size:0.85rem; color:var(--text-muted);">"${query}" bo'yicha hech narsa topilmadi.</div>`;
    dropdown.classList.add("open");
    return;
  }

  let html = "";
  if (matchedProds.length > 0) {
    html += `<div class="search-group-title">🛒 DO'KON MAHSULOTLARI VA QISMLAR</div>`;
    html += matchedProds
      .map(
        (p) => `
        <div class="search-result-item" data-quick-view="${p.id}">
          <img src="${p.image}" alt="${p.title}" />
          <div class="search-result-meta">
            <div class="search-result-title">${p.title}</div>
            <div class="search-result-sub">${p.subcat} &bull; ${p.specs.slice(0, 2).join(", ")}</div>
          </div>
          <div class="search-result-price">${formatPrice(p.priceUsd)}</div>
        </div>
      `
      )
      .join("");
  }

  if (matchedArts.length > 0) {
    html += `<div class="search-group-title" style="margin-top:8px;">📰 TEXNO-JURNAL MAQOLALARI</div>`;
    html += matchedArts
      .map(
        (a) => `
        <div class="search-result-item" data-open-article="${a.id}">
          <img src="${a.image}" alt="${a.title}" />
          <div class="search-result-meta">
            <div class="search-result-title">${a.title}</div>
            <div class="search-result-sub">${a.category} &bull; ${a.readTime}</div>
          </div>
        </div>
      `
      )
      .join("");
  }

  dropdown.innerHTML = html;
  dropdown.classList.add("open");
}

/* ==========================================================================
   13. EVENT LISTENERS & INITIALIZATION
   ========================================================================== */
function initApp() {
  updateStaticPrices();
  renderHeroWire();
  renderProductCatalog();
  renderBuilder();
  renderBenchmarkWidget();
  renderNewsGrid();
  updateCartUI();

  // Currency Switch
  document.querySelectorAll("[data-currency]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.currency = btn.getAttribute("data-currency");
      document.querySelectorAll("[data-currency]").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      updateStaticPrices();
      renderProductCatalog();
      renderBuilder();
      renderNewsGrid();
      updateCartUI();
      showToast(`Valyuta ${state.currency} ga o'zgartirildi`);
    });
  });

  // Theme Toggle
  const themeBtn = document.getElementById("themeToggleBtn");
  themeBtn.addEventListener("click", () => {
    state.theme = state.theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", state.theme);
    document.getElementById("themeIcon").textContent = state.theme === "dark" ? "☀️" : "🌙";
    document.getElementById("themeText").textContent = state.theme === "dark" ? "Studiya Rejim" : "Grafit Rejim";
  });

  // Category Cards & Nav Links
  document.querySelectorAll(".category-card").forEach((card) => {
    card.addEventListener("click", () => {
      state.activeCategory = card.getAttribute("data-cat");
      state.activeSubcat = "all";
      syncCategoryUI();
      renderProductCatalog();
    });
  });

  document.querySelectorAll("[data-nav-cat]").forEach((link) => {
    link.addEventListener("click", () => {
      state.activeCategory = link.getAttribute("data-nav-cat");
      state.activeSubcat = "all";
      syncCategoryUI();
      renderProductCatalog();
    });
  });

  document.querySelectorAll("#subcatPills .subcat-pill").forEach((pill) => {
    pill.addEventListener("click", () => {
      state.activeSubcat = pill.getAttribute("data-subcat");
      state.activeCategory = "all";
      syncCategoryUI();
      renderProductCatalog();
    });
  });

  document.querySelectorAll("[data-footer-subcat]").forEach((link) => {
    link.addEventListener("click", () => {
      state.activeSubcat = link.getAttribute("data-footer-subcat");
      state.activeCategory = "all";
      syncCategoryUI();
      renderProductCatalog();
    });
  });

  // Brand, Sort, Lab Choice Filters
  document.getElementById("brandFilterSelect").addEventListener("change", (e) => {
    state.activeBrand = e.target.value;
    renderProductCatalog();
  });

  document.getElementById("sortFilterSelect").addEventListener("change", (e) => {
    state.sortBy = e.target.value;
    renderProductCatalog();
  });

  document.getElementById("filterLabChoice").addEventListener("change", (e) => {
    state.onlyLabChoice = e.target.checked;
    renderProductCatalog();
  });

  // PC Builder Slot Changes & Presets
  document.getElementById("builderSlotsContainer").addEventListener("change", (e) => {
    if (e.target.matches("[data-builder-slot]")) {
      const slotId = e.target.getAttribute("data-builder-slot");
      state.builderSelections[slotId] = e.target.value;
      renderBuilder();
    }
  });

  document.querySelectorAll("[data-preset]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const presetKey = btn.getAttribute("data-preset");
      document.querySelectorAll("[data-preset]").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      state.builderSelections = { ...BUILDER_PRESETS[presetKey] };
      renderBuilder();
      showToast(`"${btn.textContent.trim()}" konfiguratsiyasi yuklandi`);
    });
  });

  document.getElementById("addCustomBuildToCartBtn").addEventListener("click", () => {
    let rawUsd = 0;
    const names = [];
    BUILDER_SLOTS.forEach((slot) => {
      const opt = slot.options.find((o) => o.id === state.builderSelections[slot.slotId]) || slot.options[0];
      rawUsd += opt.priceUsd;
      names.push(opt.name.split("(")[0].trim());
    });
    const discountedUsd = Math.round(rawUsd * 0.95);
    addToCart(null, {
      id: "custom-build-" + Date.now(),
      customTitle: `Maxsus PC Yig'ma (${names.slice(0, 3).join(" + ")} + 5 qism)`,
      priceUsd: discountedUsd,
      image: IMG.gamingPc,
      qty: 1
    });
    showToast("🛠️ 8 ta qismdan iborat shaxsiy kompyuter yig'mangiz 5% chegirma bilan savatga qo'shildi!");
    document.getElementById("cartDrawerBackdrop").classList.add("open");
  });

  // Benchmark Tabs
  document.querySelectorAll("#benchmarkTabs .bench-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      state.activeBenchmark = tab.getAttribute("data-bench");
      document.querySelectorAll("#benchmarkTabs .bench-tab").forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      renderBenchmarkWidget();
    });
  });

  // News Filter Pills
  document.querySelectorAll("#newsFilterPills .subcat-pill").forEach((pill) => {
    pill.addEventListener("click", () => {
      state.activeNewsCat = pill.getAttribute("data-newscat");
      document.querySelectorAll("#newsFilterPills .subcat-pill").forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      renderNewsGrid();
    });
  });

  // Hero Flagship Actions
  document.getElementById("heroBuyFlagshipBtn").addEventListener("click", () => {
    addToCart("pc-proart-5090");
    showToast("🔥 ProArt Studio RTX 5090 Flagman stansiyasi savatga qo'shildi!");
    document.getElementById("cartDrawerBackdrop").classList.add("open");
  });

  document.getElementById("heroReadReviewBtn").addEventListener("click", () => {
    openArticleModal("art-rtx5090-review");
  });

  document.getElementById("flashDealBuyBtn").addEventListener("click", () => {
    addToCart("gpu-rtx-4080-super");
    showToast("⚡ ASUS ROG Strix RTX 4080 SUPER chegirma narxda savatga qo'shildi!");
    document.getElementById("cartDrawerBackdrop").classList.add("open");
  });

  // Global Delegated Clicks (Add to Cart, Quick View, Article Modal, Wishlist, Compare)
  document.body.addEventListener("click", (e) => {
    const addBtn = e.target.closest("[data-add-cart]");
    if (addBtn) {
      const id = addBtn.getAttribute("data-add-cart");
      const prod = PRODUCTS.find((p) => p.id === id);
      addToCart(id);
      if (prod) showToast(`🛒 "${prod.title}" savatga qo'shildi!`);
      return;
    }

    const qvBtn = e.target.closest("[data-quick-view]");
    if (qvBtn) {
      document.getElementById("searchDropdown").classList.remove("open");
      openProductQuickView(qvBtn.getAttribute("data-quick-view"));
      return;
    }

    const artBtn = e.target.closest("[data-open-article]");
    if (artBtn) {
      document.getElementById("searchDropdown").classList.remove("open");
      openArticleModal(artBtn.getAttribute("data-open-article"));
      return;
    }

    const wishBtn = e.target.closest("[data-toggle-wish]");
    if (wishBtn) {
      const id = wishBtn.getAttribute("data-toggle-wish");
      const idx = state.wishlist.indexOf(id);
      if (idx > -1) {
        state.wishlist.splice(idx, 1);
        showToast("Sevimlilardan olib tashlandi");
      } else {
        state.wishlist.push(id);
        showToast("♥ Sevimli qurilmalarga qo'shildi!");
      }
      renderProductCatalog();
      updateCartUI();
      return;
    }

    const compBtn = e.target.closest("[data-toggle-compare]");
    if (compBtn) {
      const id = compBtn.getAttribute("data-toggle-compare");
      const idx = state.compare.indexOf(id);
      if (idx > -1) {
        state.compare.splice(idx, 1);
        showToast("Taqqoslash ro'yxatidan o'chirildi");
      } else {
        state.compare.push(id);
        showToast("⇄ Taqqoslash ro'yxatiga qo'shildi!");
      }
      renderProductCatalog();
      updateCartUI();
      return;
    }

    const incBtn = e.target.closest("[data-cart-inc]");
    if (incBtn) {
      const idx = Number(incBtn.getAttribute("data-cart-inc"));
      state.cart[idx].qty += 1;
      updateCartUI();
      return;
    }

    const decBtn = e.target.closest("[data-cart-dec]");
    if (decBtn) {
      const idx = Number(decBtn.getAttribute("data-cart-dec"));
      state.cart[idx].qty -= 1;
      if (state.cart[idx].qty <= 0) state.cart.splice(idx, 1);
      updateCartUI();
      return;
    }
  });

  // Header Modals & Cart Drawer
  document.getElementById("openCartBtn").addEventListener("click", () => {
    document.getElementById("cartDrawerBackdrop").classList.add("open");
  });
  document.getElementById("closeCartDrawerBtn").addEventListener("click", () => {
    document.getElementById("cartDrawerBackdrop").classList.remove("open");
  });
  document.getElementById("cartDrawerBackdrop").addEventListener("click", (e) => {
    if (e.target.id === "cartDrawerBackdrop") {
      document.getElementById("cartDrawerBackdrop").classList.remove("open");
    }
  });
  document.getElementById("universalModalBackdrop").addEventListener("click", (e) => {
    if (e.target.id === "universalModalBackdrop") closeUniversalModal();
  });

  document.getElementById("openCompareBtn").addEventListener("click", openCompareModal);
  document.getElementById("openWishlistBtn").addEventListener("click", openWishlistModal);

  // Promo Code Application
  document.getElementById("applyPromoBtn").addEventListener("click", () => {
    const code = document.getElementById("promoCodeInput").value.trim().toUpperCase();
    if (code === "COMPUTER2026" || code === "LAB10") {
      state.promoDiscountPct = 10;
      updateCartUI();
      showToast("🎉 Tabriklaymiz! Promokod orqali 10% chegirma qo'llandi!");
    } else {
      showToast("Promokod topilmadi. Maslahat: COMPUTER2026 kodini kiriting!");
    }
  });

  // Checkout Flow
  document.getElementById("checkoutOrderBtn").addEventListener("click", () => {
    if (state.cart.length === 0) {
      showToast("Avval savatchaga mahsulot qo'shing!");
      return;
    }
    document.getElementById("cartDrawerBackdrop").classList.remove("open");
    openUniversalModal(`
      <h2 style="font-family:var(--font-display); font-size:1.5rem; font-weight:800; margin-bottom:8px;">
        ✅ Buyurtmani Rasmiylashtirish (Computer.uz Express)
      </h2>
      <p style="font-size:0.9rem; color:var(--text-secondary); margin-bottom:18px;">
        Toshkent shahrida 2 soatda bepul yetkazib beramiz. Mutaxassisimiz siz bilan 5 daqiqa ichida bog'lanadi.
      </p>
      <form id="finalCheckoutForm" style="display:flex; flex-direction:column; gap:14px;">
        <div>
          <label style="font-size:0.82rem; font-weight:700; display:block; margin-bottom:4px;">Ism-sharifingiz</label>
          <input type="text" required placeholder="Masalan: Sardorbek Karimov" style="width:100%; padding:11px 14px; border-radius:10px; border:1px solid var(--border-strong); background:var(--bg-surface-elevated);" />
        </div>
        <div>
          <label style="font-size:0.82rem; font-weight:700; display:block; margin-bottom:4px;">Telefon raqamingiz</label>
          <input type="tel" required placeholder="+998 90 123 45 67" style="width:100%; padding:11px 14px; border-radius:10px; border:1px solid var(--border-strong); background:var(--bg-surface-elevated);" />
        </div>
        <div>
          <label style="font-size:0.82rem; font-weight:700; display:block; margin-bottom:4px;">To'lov usuli</label>
          <select style="width:100%; padding:11px 14px; border-radius:10px; border:1px solid var(--border-strong); background:var(--bg-surface-elevated);">
            <option>Naqd pul yoki karta orqali (Yetkazib berilganda)</option>
            <option>Click / Payme / Uzcard onlayn to'lov</option>
            <option>Muddatli to'lov (0-0-12 Nasiya)</option>
            <option>Korporativ hisob-faktura (Perichisleniye)</option>
          </select>
        </div>
        <button type="submit" class="btn-primary-copper" style="justify-content:center; margin-top:8px;">
          🚀 Buyurtmani Tasdiqlash
        </button>
      </form>
    `);

    document.getElementById("finalCheckoutForm").addEventListener("submit", (ev) => {
      ev.preventDefault();
      state.cart = [];
      updateCartUI();
      closeUniversalModal();
      showToast("🎉 Buyurtmangiz #CUZ-8492 raqami bilan qabul qilindi! Tez orada bog'lanamiz.");
    });
  });

  // Search Input & Ctrl+K
  const searchInput = document.getElementById("globalSearchInput");
  searchInput.addEventListener("input", (e) => {
    state.searchQuery = e.target.value;
    handleLiveSearch(e.target.value);
    renderProductCatalog();
  });

  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      searchInput.focus();
    }
    if (e.key === "Escape") {
      closeUniversalModal();
      document.getElementById("cartDrawerBackdrop").classList.remove("open");
      document.getElementById("searchDropdown").classList.remove("open");
    }
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".header-search")) {
      document.getElementById("searchDropdown").classList.remove("open");
    }
  });

  // Newsletter
  document.getElementById("newsletterForm").addEventListener("submit", (e) => {
    e.preventDefault();
    e.target.reset();
    showToast("📬 Texno-dayjestga muvaffaqiyatli obuna bo'ldingiz!");
  });

  // Live Flash Deal Countdown Timer
  let totalSec = 6 * 3600 + 42 * 60 + 19;
  setInterval(() => {
    if (totalSec > 0) totalSec--;
    const h = String(Math.floor(totalSec / 3600)).padStart(2, "0");
    const m = String(Math.floor((totalSec % 3600) / 60)).padStart(2, "0");
    const s = String(totalSec % 60).padStart(2, "0");
    const el = document.getElementById("flashTimer");
    if (el) el.textContent = `${h}:${m}:${s}`;
  }, 1000);
}

document.addEventListener("DOMContentLoaded", initApp);
