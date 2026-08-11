"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Montserrat } from "next/font/google";
import Link from "next/link";

const montserrat = Montserrat({ subsets: ["latin"], weight: "300" });

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  // 4 Data Portofolio Utama
  const caseStudies = [
    {
      id: 1,
      title: "Highest Engagement: Organic Content",
      metrics: "6.2M Views",
      description: "Strategi hook visual menggunakan kemiripan model internal dengan Afgan. Berhasil memicu diskusi audiens dan viralitas organik.",
      type: "tiktok", 
      videoId: "7564629810203331860", 
      tiktokLink: "https://vt.https://www.tiktok.com/@bapinstore/video/7564629810203331860?_d=secCgYIASAHKAESPgo8CHPjhop9I6%2BnUnGG68xQFrdhYigmMwIjEuDPVMVlWQKrJGpmMW%2FffP2kO%2BIHTXM5Zeh9qOdM86iXg5kNGgA%3D&_r=1&share_app_id=1233&share_item_id=7564629810203331860&timestamp=1767555737&u_code=efm4eegmiff45j&utm_campaign=client_share&utm_source=short_fallback.com/ZS5yo61ny/", 
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
      // Deskripsi diubah menjadi elemen JSX
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
      title: "High Quality Visual Production + GMV Sales Objective",
      metrics: "Premium Output",
      description: "Pengambilan konten sinematik resolusi tinggi menggunakan kombinasi kamera profesional dan pengeditan tingkat lanjut untuk kebutuhan komersial brand.",
      type: "tiktok-custom",
      videoUrl: "https://res.cloudinary.com/tmmaq361/video/upload/v1786443176/TRACKPANTS_SPAM_2.mp4",
      tiktokLink: "https://tiktok.com/@bapinstore", 
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden scroll-smooth">
      
      {/* 1. HERO SECTION (REVISI RESPONSIF & MOBILE CENTERED) */}
      <section className="relative min-h-screen flex flex-col items-center justify-start pt-20 overflow-hidden bg-[#050505]">
        
        {/* Spotlight lebih stabil untuk mobile */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[20rem] md:w-[65rem] h-[20rem] md:h-[60rem] bg-white/30 blur-[80px] md:blur-[150px] rounded-full pointer-events-none z-0" />

        <div className="relative w-full max-w-5xl flex flex-col items-center justify-center px-4">
          
          {/* LAYER 1: TEKS RAKSASA (Ukuran disesuaikan agar tidak overflow di HP) */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10 text-center font-['Helvetica_Neue',_Helvetica,_Arial,_sans-serif] font-extrabold text-[3.8rem] md:text-[8.5rem] leading-[0.8] tracking-tighter text-white opacity-95 blur-[1px] md:blur-[4px] mt-10"
          >
            CREATIVE <br /> STRATEGIST
          </motion.h1>

          {/* LAYER 2: FOTO (Dinaikkan agar benar-benar di tengah teks) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-20 w-full max-w-[220px] md:max-w-[420px] mt-4 md:mt-12 pointer-events-none flex justify-center"
          >
            <img 
              src="https://res.cloudinary.com/tmmaq361/image/upload/v1786441159/NOVA_DESIGN.png" 
              alt="Profil Algifari"
              className="w-full h-auto object-contain drop-shadow-2xl"
              style={{
                // Masking diperhalus agar transisi di mobile tidak kaku
                maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)"
              }}
            />
          </motion.div>

          {/* LAYER 3: SUB-JUDUL & TOMBOL (Ditarik naik agar tidak terlalu jauh) */}
          <div className="relative z-30 max-w-xl text-center -mt-6 md:-mt-10 px-4">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`${montserrat.className} text-xs md:text-lg text-white mb-6 leading-relaxed font-light [text-shadow:_0_0_8px_rgba(255,255,255,0.8)]`}
            >
              Menggabungkan <strong className="font-bold">produksi visual</strong>, <strong className="font-bold">AI</strong>, dan <strong className="font-bold">strategi GMV Max</strong>.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-3 justify-center items-center"
            >
              <a href="#case-studies" className="px-6 py-2.5 rounded-full bg-white text-black text-sm font-medium hover:scale-105 transition-transform shadow-xl">
                Lihat Studi Kasus
              </a>
            </motion.div>
          </div>
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
            My work.
          </h2>
          <p className={`${montserrat.className} text-zinc-400 md:text-lg`}>
            List of my creativity through High Quality Shoots, Content Creation and AI Development.
          </p>
        </motion.div>

        {/* Grid 4 Kolom untuk Layar Besar, 2 Kolom Tablet */}
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
                    // Menggunakan versi player/v1 dan menambahkan parameter autoplay, muted, dan loop
                    src={`https://www.tiktok.com/player/v1/${study.videoId}?autoplay=1&muted=1&mute=1&loop=1`}
                    className="w-full h-full"
                    allowFullScreen
                    scrolling="no"
                    // Menambahkan izin (allow) spesifik agar browser mengizinkan autoplay
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