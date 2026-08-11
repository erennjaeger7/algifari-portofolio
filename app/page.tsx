"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Montserrat } from "next/font/google";
import Link from "next/link";

const montserrat = Montserrat({ subsets: ["latin"], weight: "300" });

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Data Portofolio Utama
  const caseStudies = [
    {
      id: 1,
      title: "Highest Engagement: Organic Content",
      metrics: "6.2M Views",
      description: "Strategi hook visual menggunakan kemiripan model internal dengan Afgan. Berhasil memicu diskusi audiens dan viralitas organik.",
      type: "tiktok", 
      videoId: "7564629810203331860", 
      tiktokLink: "https://www.tiktok.com/@bapinstore/video/7564629810203331860?_r=1&_d=secCgYIASAHKAESPgo8WNHAnXABp1GxAFQUpOmmoL36B9BQPtzO7bODcPnMNosA1QkZT9IaQXu7EkKvUZFmDw4PvnokxwRQ2aoEGgA%3D&u_code=efm4eegmiff45j&share_item_id=7564629810203331860&timestamp=1767555737&utm_campaign=client_share&utm_source=short_fallback&share_app_id=1233", 
    },
    {
      id: 2,
      title: "Personal Branding: On-Camera Talent",
      metrics: "Public Speaking and On-Cam Skills",
      description: "Tampil di depan kamera sebagai talent dadakan dengan pembawaan natural untuk membangun kedekatan audiens dengan brand.",
      type: "tiktok-custom", 
      videoUrl: "https://res.cloudinary.com/tmmaq361/video/upload/v1786442465/ssstik.io_1786442389184.mp4", 
      tiktokStats: { username: "@bapinstore", likes: "27", comments: "2", shares: "1" },
      tiktokLink: "https://www.tiktok.com/@bapinstore/video/7451531023889763602", 
    },
    {
      id: 3,
      title: "Sales Showcase: GMV Max",
      metrics: "1M Views | High GMV Sales",
      description: (
        <>
          Pendekatan sensorik (ASMR) dan hook 3 detik pertama untuk menahan audiens di konten keranjang kuning.{" "}
          <strong className="font-bold text-white [text-shadow:_0_0_8px_rgba(255,255,255,0.8)]">
            Notes: Open link on Tiktok App (GMV Content Terms, Cannot open on Web)
          </strong>
        </>
      ),
      type: "tiktok-custom",
      videoUrl: "https://res.cloudinary.com/tmmaq361/video/upload/v1786442656/ssstik.io_1786442646430.mp4", 
      tiktokStats: { username: "@bapinstore", likes: "1K", comments: "9", shares: "37" },
      tiktokLink: "https://vt.tiktok.com/ZS5yog3Uw/", 
    },
    {
      id: 4,
      title: "High Quality Visual Production for High Quality GMV-Max Sales Content",
      metrics: "Premium Output",
      description: "Pengambilan gambar sinematik resolusi tinggi dengan kamera profesional dan pengeditan tingkat lanjut untuk kebutuhan komersial brand.",
      type: "tiktok-custom",
      videoUrl: "https://res.cloudinary.com/tmmaq361/video/upload/v1786443176/TRACKPANTS_SPAM_2.mp4", 
      tiktokStats: { username: "@bapinstore", likes: "N/A", comments: "N/A", shares: "N/A" },
      tiktokLink: "https://tiktok.com/@bapinstore", 
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden scroll-smooth">
      
      {/* 1. HERO SECTION DENGAN EFEK CINEMATIC POSTER */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#050505]">
        
        {/* Efek Spotlight Terang dari Atas */}
        <div className="absolute top-[-20%] md:top-[-15%] left-1/2 -translate-x-1/2 w-[35rem] md:w-[65rem] h-[30rem] md:h-[60rem] bg-white/40 blur-[100px] md:blur-[150px] rounded-full pointer-events-none z-0" />

        {/* Aksesoris Teks Kecil Kiri Kanan */}
        <div className="absolute top-6 left-4 right-4 md:left-10 md:right-10 flex justify-between w-full max-w-5xl mx-auto px-4 md:px-8 z-10">
          <span className="text-[8px] md:text-xs tracking-widest text-zinc-500 font-bold uppercase">AI-Enthusiast</span>
          <span className="text-[8px] md:text-xs tracking-widest text-zinc-500 font-bold uppercase">Professional Content Creative</span>
        </div>

        {/* WADAH UTAMA TEKS & FOTO DIBANGUN ULANG AGAR PRESISI DI SEMUA DEVICE */}
        {/* Menggunakan min-h-[450px] agar di HP foto tidak hilang tertimpa margin negatif */}
        <div className="relative w-full flex items-center justify-center min-h-[400px] md:min-h-[650px] mt-12 md:mt-0">
          
          {/* LAYER 1: TEKS RAKSASA (Absolute di tengah persis) */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute z-0 text-center font-['Helvetica_Neue',_Helvetica,_Arial,_sans-serif] font-extrabold text-[4.5rem] sm:text-[6rem] md:text-[10.5rem] leading-[0.8] tracking-tighter text-white opacity-95 blur-[1px] md:blur-[4px]"
          >
            CREATIVE <br /> STRATEGIST
          </motion.h1>

          {/* LAYER 2: FOTO SILUET (Diperbesar, dan diturunkan dengan translate-y agar kepala pas di tengah teks) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            // max-w diperbesar: 300px untuk HP, 500px untuk Desktop
            // translate-y-6 dan translate-y-12 menurunkan foto ke posisi sempurna
            className="relative z-10 w-full max-w-[300px] md:max-w-[500px] pointer-events-none flex justify-center translate-y-6 md:translate-y-12"
          >
            <img 
              src="https://res.cloudinary.com/tmmaq361/image/upload/v1786441159/NOVA_DESIGN.png" 
              alt="Profil Algifari"
              className="w-full h-auto object-contain drop-shadow-2xl"
              style={{
                // Masking disederhanakan menggunakan warna solid (black to transparent) agar tidak nge-bug di iOS Safari
                maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 100%)"
              }}
            />
          </motion.div>
        </div>

        {/* LAYER 3: SUB-JUDUL & TOMBOL (Disesuaikan marginnya menyesuaikan container di atas) */}
        <div className="relative z-20 max-w-2xl text-center px-4 mt-6 md:-mt-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className={`${montserrat.className} text-sm md:text-lg text-zinc-200 mb-8 leading-relaxed font-light drop-shadow-md [text-shadow:_0_0_8px_rgba(255,255,255,0.6),_0_0_15px_rgba(255,255,255,0.2)]`}
          >
            Menggabungkan keahlian produksi visual profesional, <strong className="font-bold text-white">teknologi AI</strong>, dan <strong className="font-bold text-white">strategi GMV Max</strong> untuk meroketkan skala bisnis brand.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a href="#case-studies" className="px-8 py-3 rounded-full bg-white text-black font-medium hover:scale-105 transition-transform duration-300 shadow-xl">
              Lihat Karya Saya
            </a>

            <div className="relative w-full sm:w-auto">
              <button 
                onClick={() => setIsContactOpen(!isContactOpen)}
                className="w-full sm:w-auto px-8 py-3 rounded-full bg-zinc-900 border border-zinc-800 text-white font-medium hover:bg-white hover:text-black transition-colors duration-300 backdrop-blur-md flex items-center justify-center gap-2 shadow-xl"
              >
                Hubungi Saya
                <svg className={`w-4 h-4 transition-transform duration-300 ${isContactOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>

              <AnimatePresence>
                {isContactOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-3 left-1/2 -translate-x-1/2 w-full sm:w-56 p-2 bg-zinc-900/90 border border-zinc-800 rounded-2xl shadow-2xl backdrop-blur-xl flex flex-col gap-1 z-50 text-sm"
                  >
                    <a href="mailto:algifarimuhammadardesta@gmail.com" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-3 p-3 rounded-xl hover:bg-zinc-800 hover:text-white transition-colors ${montserrat.className}`}>
                      <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                      Email
                    </a>
                    <a href="https://instagram.com/alseventeen_" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-3 p-3 rounded-xl hover:bg-zinc-800 hover:text-white transition-colors ${montserrat.className}`}>
                      <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 6.5h11A3 3 0 0120.5 9.5v11a3 3 0 01-3 3h-11a3 3 0 01-3-3v-11a3 3 0 013-3z"></path></svg>
                      Instagram
                    </a>
                    <a href="https://wa.me/6285224595559" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-3 p-3 rounded-xl hover:bg-zinc-800 hover:text-white transition-colors ${montserrat.className}`}>
                      <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 21l1.65-3.8a9 9 0 113.4 2.9L3 21z"></path></svg>
                      WhatsApp
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. CASE STUDIES SECTION */}
      <section id="case-studies" className="relative py-24 px-6 max-w-6xl mx-auto border-t border-zinc-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:text-center"
        >
          <h2 className="font-['Helvetica_Neue',_Helvetica,_Arial,_sans-serif] font-extrabold text-3xl md:text-5xl tracking-tight mb-4">
            Mesin Penghasil GMV.
          </h2>
          <p className={`${montserrat.className} text-zinc-400 md:text-lg`}>
            Analisis strategi di balik konten organik dan komersial dengan jutaan penayangan.
          </p>
        </motion.div>

        {/* Grid 4 Kolom */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-zinc-900/40 border border-zinc-800 rounded-3xl overflow-hidden backdrop-blur-sm group hover:border-zinc-700 transition-colors duration-300 flex flex-col"
            >
              <div className="relative h-[480px] w-full bg-black">
                {study.type === 'tiktok' ? (
                  <iframe
                    src={`https://www.tiktok.com/player/v1/${study.videoId}?autoplay=1&muted=1&mute=1&loop=1`}
                    className="w-full h-full"
                    allowFullScreen
                    scrolling="no"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share; fullscreen"
                  ></iframe>
                ) : (
                  <>
                    <video 
                      src={study.videoUrl} 
                      className="w-full h-full object-cover"
                      autoPlay 
                      muted 
                      loop 
                      playsInline
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 pointer-events-none"></div>
                    <div className="absolute right-3 bottom-16 flex flex-col items-center gap-5 z-10 scale-90">
                      <div className="flex flex-col items-center gap-1">
                        <div className="p-2 bg-black/40 backdrop-blur-md rounded-full">
                          <svg className="w-5 h-5 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                        </div>
                        <span className="text-white text-[10px] font-semibold drop-shadow-md">{study.tiktokStats?.likes}</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <div className="p-2 bg-black/40 backdrop-blur-md rounded-full">
                          <svg className="w-5 h-5 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z"/></svg>
                        </div>
                        <span className="text-white text-[10px] font-semibold drop-shadow-md">{study.tiktokStats?.comments}</span>
                      </div>
                    </div>
                    
                    <div className={`absolute left-3 bottom-4 right-14 z-10 text-white ${montserrat.className}`}>
                      <h4 className="font-bold text-xs mb-1 drop-shadow-md">{study.tiktokStats?.username}</h4>
                    </div>
                  </>
                )}
              </div>
              
              <div className="p-5 flex-1 flex flex-col bg-zinc-950">
                <div className="inline-flex px-2 py-1 mb-3 text-[10px] font-semibold tracking-wide text-black bg-white rounded-full self-start">
                  {study.metrics}
                </div>
                <h3 className="font-['Helvetica_Neue',_Helvetica,_Arial,_sans-serif] font-extrabold text-lg mb-2 text-zinc-100">
                  {study.title}
                </h3>
                <p className={`${montserrat.className} text-zinc-400 leading-relaxed text-xs flex-grow`}>
                  {study.description}
                </p>
                <a 
                  href={study.tiktokLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-center text-xs font-medium text-white hover:bg-white hover:text-black transition-colors duration-300"
                >
                  Lihat Detail ↗
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. AI SKILLSET & GEAR SHOWCASE */}
      <section className="relative py-24 px-6 max-w-6xl mx-auto border-t border-zinc-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6" 
        >
          <div>
            <h2 className="font-['Helvetica_Neue',_Helvetica,_Arial,_sans-serif] font-extrabold text-3xl md:text-5xl tracking-tight mb-4">
              Vibecoding & Arsenal.
            </h2>
            <p className={`${montserrat.className} text-zinc-400 md:text-lg max-w-xl`}>
              Inovasi manipulasi visual menggunakan kecerdasan buatan, didukung oleh penguasaan ekosistem perangkat produksi profesional.
            </p>
          </div>
          
          <div className="flex gap-4">
            <Link 
              href="/ai-skills" 
              target="_blank"
              className="px-6 py-3 rounded-full bg-zinc-900 border border-zinc-800 text-sm font-medium text-white hover:bg-white hover:text-black transition-colors duration-300"
            >
              Full AI Skillset ↗
            </Link>
            <Link 
              href="/gear" 
              target="_blank"
              className="px-6 py-3 rounded-full bg-zinc-900 border border-zinc-800 text-sm font-medium text-white hover:bg-white hover:text-black transition-colors duration-300"
            >
              Full Gear List ↗
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}