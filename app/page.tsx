"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: "300" });

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden scroll-smooth">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-start pt-20 overflow-hidden bg-[#050505]">
        
        {/* Spotlight */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[20rem] md:w-[65rem] h-[20rem] md:h-[60rem] bg-white/30 blur-[80px] md:blur-[150px] rounded-full pointer-events-none z-0" />

        <div className="relative w-full max-w-5xl flex flex-col items-center justify-center px-4">
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10 text-center font-['Helvetica_Neue',_Helvetica,_Arial,_sans-serif] font-extrabold text-[3.8rem] md:text-[8.5rem] leading-[0.8] tracking-tighter text-white opacity-95 blur-[1px] md:blur-[4px] mt-10"
          >
            CREATIVE <br /> STRATEGIST
          </motion.h1>

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
                maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)"
              }}
            />
          </motion.div>

          <div className="relative z-30 max-w-xl text-center -mt-6 md:-mt-10 px-4">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`${montserrat.className} text-xs md:text-lg text-white mb-6 leading-relaxed font-light [text-shadow:_0_0_8px_rgba(255,255,255,0.8)]`}
            >
              Menggabungkan <strong className="font-bold">produksi visual</strong>, <strong className="font-bold">AI</strong>, dan <strong className="font-bold">strategi GMV Max</strong>.
            </motion.p>
            
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#case-studies" className="px-8 py-3 rounded-full bg-white text-black font-medium hover:scale-105 transition-transform shadow-xl">
                Lihat Studi Kasus
              </a>

              {/* TOMBOL KONTAK DIPASTIKAN ADA DI SINI */}
              <div className="relative">
                <button 
                  onClick={() => setIsContactOpen(!isContactOpen)}
                  className="px-8 py-3 rounded-full bg-zinc-900 border border-zinc-800 text-white font-medium hover:bg-white hover:text-black transition-colors duration-300 flex items-center gap-2 shadow-xl"
                >
                  Hubungi Saya
                  <svg className={`w-4 h-4 transition-transform ${isContactOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>

                <AnimatePresence>
                  {isContactOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="absolute top-full mt-3 left-0 right-0 p-2 bg-zinc-900 border border-zinc-800 rounded-2xl z-50 text-sm"
                    >
                      <a href="mailto:algifarimuhammadardesta@gmail.com" className="block p-3 hover:bg-zinc-800 rounded-xl">Email</a>
                      <a href="https://instagram.com/alseventeen_" className="block p-3 hover:bg-zinc-800 rounded-xl">Instagram</a>
                      <a href="https://wa.me/6285224595559" className="block p-3 hover:bg-zinc-800 rounded-xl">WhatsApp</a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}