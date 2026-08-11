"use client";

import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: "300" });

export default function AISkillsPage() {
  const skills = [
    {
      title: "Ideation & Brainstorming",
      tools: "Claude, ChatGPT, Gemini",
      desc: "Rekayasa prompt tingkat lanjut untuk membedah tren audiens, perancangan naskah video hook-retention, dan penciptaan aset gambar konseptual."
    },
   {
      title: "AI Vibe Coding",
      tools: "Vercel, Supabase, Github Workspace",
      desc: (
        <>
          Implementasi antarmuka digital dan sistem Customer Service berbasis AI API, dirakit langsung dari lingkungan cloud.{" "}
          <strong className="font-bold text-white">
            Termasuk Web ini, dibuat dengan skema Vibe-Coding.
          </strong>
        </>
      )
    },
    {
      title: "Video Manipulation & Generation",
      tools: "Google VEO, Google Flow, Seedance",
      desc: "Sintesis footage hiper-realistis dan manipulasi elemen visual berbasis teks-ke-video."
    },
    {
      title: "Audio Synthesis",
      tools: "ElevenLabs, NanoBanana",
      desc: "Kloning suara dan pembuatan Voice Over emosional yang presisi untuk kebutuhan konten GMV."
    }
  ];

  const aiShowcase = [
    {
      id: 1,
      title: "AI Photo to Video Manipulation",
      metrics: "Google VEO & Flow",
      description: "Manipulasi footage dan pembuatan aset visual dinamis menggunakan model kecerdasan buatan generatif (Dari foto menjadi video berisikan footage mobil lewat).",
      videoUrl: "https://res.cloudinary.com/tmmaq361/video/upload/v1786445785/Cars_passing_building_facade_202608071758.mp4", 
    },
    {
      id: 2,
      title: "AI Video Manipulation",
      metrics: "NanoBanana + Flow",
      description: "Memanipulasi footage drone yang goyang dan biasa, jadi footage timelapse stabil dengan cara Screenshot>Image Refine dari NanoBanana > Edit awal akhir dengan flow",
      videoUrl: "https://res.cloudinary.com/tmmaq361/video/upload/v1786445974/revisi_akhir_hyperlapse_drone.mp4", 
    }
  ];

  return (
    // Menambahkan 'relative' pada main agar layer background terkurung dengan rapi
    <main className="relative min-h-screen bg-black text-white p-8 md:p-16 font-sans">
      
      {/* LAYER BACKGROUND IMAGE DENGAN OPACITY 50% */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-50 pointer-events-none z-0"
        style={{ backgroundImage: "url('https://res.cloudinary.com/tmmaq361/image/upload/v1786447336/igor-omilaev-FHgWFzDDAOs-unsplash.jpg')" }}
      />

      {/* LAYER GRADIENT GELAP (Opsional) */}
      {/* Menjaga agar teks tetap kontras dan mudah dibaca di atas gambar */}
      <div className="fixed inset-0 bg-black/30 pointer-events-none z-0" />

      {/* KONTEN UTAMA DIBUNGKUS relative z-10 AGAR BERADA DI DEPAN GAMBAR */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <h1 className="font-['Helvetica_Neue',_Helvetica,_Arial,_sans-serif] font-extrabold text-4xl md:text-6xl mb-4 drop-shadow-lg">
          Artificial Intelligence Stack.
        </h1>
       <p className={`${montserrat.className} text-white text-lg mb-12 border-b border-zinc-700 pb-8 drop-shadow-lg [text-shadow:_0_0_10px_rgba(255,255,255,0.8),_0_0_20px_rgba(255,255,255,0.5),_0_0_30px_rgba(255,255,255,0.3)]`}>
          Inovasi efisiensi operasional kreatif menggunakan teknologi generatif modern.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Bagian Kiri: Daftar Teks AI Skillset */}
          <div className="flex flex-col gap-6">
            {skills.map((skill, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-3xl bg-zinc-950/60 border border-zinc-800 backdrop-blur-md"
              >
                <span className="inline-block px-3 py-1 mb-3 text-[10px] font-semibold tracking-wide text-black bg-white rounded-full shadow-sm">
                  {skill.tools}
                </span>
                <h2 className="font-['Helvetica_Neue',_Helvetica,_Arial,_sans-serif] font-bold text-xl mb-2">{skill.title}</h2>
                <p className={`${montserrat.className} text-zinc-300 leading-relaxed text-sm`}>{skill.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Bagian Kanan: Judul Example & 2 Blok Video AI */}
          <div className="flex flex-col gap-6">
            
            <motion.h2 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="font-['Helvetica_Neue',_Helvetica,_Arial,_sans-serif] font-extrabold text-3xl md:text-4xl mt-6 lg:mt-0 mb-2 text-white border-b border-zinc-700 pb-4 drop-shadow-lg"
            >
              Example.
            </motion.h2>

            {aiShowcase.map((ai, index) => (
              <motion.div
                key={ai.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-zinc-950/60 border border-zinc-800 rounded-3xl overflow-hidden backdrop-blur-md group flex flex-col sm:flex-row h-full shadow-xl"
              >
                <div className="w-full sm:w-1/2 relative aspect-square sm:aspect-auto sm:h-auto bg-black">
                  <video 
                    src={ai.videoUrl} 
                    className="w-full h-full object-cover"
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                  />
                </div>
                <div className="p-6 w-full sm:w-1/2 flex flex-col justify-center bg-transparent">
                  <div className="inline-flex px-3 py-1 mb-3 text-[10px] font-semibold tracking-wide text-white bg-indigo-600 rounded-full self-start shadow-sm">
                    {ai.metrics}
                  </div>
                  <h3 className="font-['Helvetica_Neue',_Helvetica,_Arial,_sans-serif] font-extrabold text-xl mb-2 text-zinc-100">
                    {ai.title}
                  </h3>
                  <p className={`${montserrat.className} text-zinc-300 leading-relaxed text-xs`}>
                    {ai.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}