import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: "300" });

export default function GearList() {
  const categories = [
    {
      title: "Kamera Profesional",
      items: [
        "SONY A6000 KIT", "SONY ZV E10 KIT", "SONY A6300", "SONY A6400", "SONY A6500", "SONY A6600", "SONY A7II", "SONY A7SII", "SONY A7III", "SONY A7C", "SONY FX30", "SONY A7IV", "SONY A7S III", "SONY HXR NX100", "SONY HXR MC2500",
        "CANON 700D KIT", "CANON 750D KIT", "CANON 60D (BO)", "CANON 80D (BO)", "CANON 6D WIFI (BO)", "CANON 6D II WIFI (BO)", "CANON M10 KIT", "CANON M3 KIT", "CANON M50 KIT", "CANON EOS RP",
        "FUJIFILM XA5 KIT", "FUJIFILM XE2S KIT", "FUJIFILM XT200 KIT", "FUJIFILM XT3 (BO)", "FUJIFILM XT4 (BO)",
        "NIKON D5200 KIT", "NIKON D7100 (BO)", "NIKON D750 (BO)"
      ]
    },
    {
      title: "Lensa & Optik",
      items: [
        "SIGMA ART 30MM F1.4", "SIGMA ART 18-35MM F1.8", "SIGMA ART 24MM F1.4", "SIGMA ART 35MM F1.4", "SIGMA ART 50MM F1.4", "SIGMA 18-50MM F2.8",
        "CANON 24MM F2.8 STM", "CANON 50MM F1.8", "CANON EF 17-40MM F4 L", "CANON EF 24-70MM F2.8 L", "CANON EF 70-200MM F2.8 L",
        "FUJIFILM XF 23MM F2", "FUJIFILM XF 35MM F1.4", "FUJIFILM XF 56MM F1.2",
        "SONY E 18-105MM F4 G", "SONY FE 16-35MM F2.8 GM", "SONY FE 24-70MM F2.8 GM", "SONY FE 70-200MM F2.8 GM", "TAMRON 17-28MM F2.8"
      ]
    },
    {
      title: "Tata Cahaya (Lighting)",
      items: [
        "YONGNUO YN600 II", "YONGNUO YN 300 III", "GVM 800D RGB", "AMARAN PT1C", "AMARAN B7C", "GODOX TL60", "GODOX SL200W II", "GODOX SL150W II", "GODOX ML60", "GODOX FL150S", "GODOX VSA-26K", "APUTURE LS COB120D II", "APUTURE LS COB300D II", "APUTURE LS COB600D", "AMARAN 300C",
        "GODOX TT600", "GODOX AD200 PRO", "GODOX AD600BM"
      ]
    },
    {
      title: "Stabilizer, Audio & Ekstra",
      items: [
        "DJI RONIN RSC2", "ZHIYUN CRANE 2", "ZHIYUN WEEBILL S", "TILTA RIG SONY A7", "SMALLRIG MINI MATTE BOX",
        "RODE VIDEOMIC PRO", "RODE NTG-4", "SARAMONIC BLINK 500 B2+", "HOLLYLAND LARK M2", "ZOOM H6",
        "GOPRO HERO 12", "DJI OSMO POCKET 3 CC", "INSTA360 ONE X3",
        "ATOMOS NINJA V", "HOLLYLAND MARS 400S PRO", "BLACKMAGIC ATEM MINI PRO"
      ]
    }
  ];

  return (
    // Menambahkan 'relative' pada main agar layer background terkurung dengan rapi
    <main className="relative min-h-screen bg-black text-white p-8 md:p-24 font-sans">
      
      {/* LAYER BACKGROUND IMAGE DENGAN OPACITY 50% */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-50 pointer-events-none z-0"
        style={{ backgroundImage: "url('https://res.cloudinary.com/tmmaq361/image/upload/v1786447735/sharegrid-RDxr5k3TUds-unsplash.jpg')" }}
      />

      {/* LAYER GRADIENT GELAP UNTUK KONTRAS TEKS */}
      <div className="fixed inset-0 bg-black/40 pointer-events-none z-0" />

      {/* KONTEN UTAMA DIBUNGKUS relative z-10 */}
      <div className="relative z-10 max-w-5xl mx-auto">
        <h1 className="font-['Helvetica_Neue',_Helvetica,_Arial,_sans-serif] font-extrabold text-4xl md:text-6xl mb-6 drop-shadow-lg">
          Equipment Arsenal <br/> / What Gear that I capable of.
        </h1>
        <p className={`${montserrat.className} text-zinc-200 text-lg mb-16 border-b border-zinc-700 pb-8 drop-shadow-md [text-shadow:_0_0_8px_rgba(255,255,255,0.6),_0_0_15px_rgba(255,255,255,0.2)]`}>
          Penguasaan teknis atas ekosistem perangkat keras produksi visual standar industri. Dipelajari secara otodidak saat saya mulai meniti karir di <strong className="font-bold text-white">Nusa Kamera</strong>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {categories.map((cat, i) => (
            // Menambahkan kotak glassmorphism agar list gear terbaca jelas di atas gambar kamera
            <div key={i} className="p-6 rounded-3xl bg-zinc-950/60 border border-zinc-800 backdrop-blur-md shadow-xl">
              <h2 className="font-['Helvetica_Neue',_Helvetica,_Arial,_sans-serif] font-bold text-2xl mb-6 text-white drop-shadow-md">
                {cat.title}
              </h2>
              <ul className={`${montserrat.className} space-y-3`}>
                {cat.items.map((item, idx) => (
                  // Warna teks diubah menjadi zinc-300 agar lebih terang
                  <li key={idx} className="text-zinc-300 flex items-center gap-3 text-sm">
                    <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full shadow-sm"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}