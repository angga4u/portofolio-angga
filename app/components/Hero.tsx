"use client";

import { motion } from 'framer-motion';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

export default function Hero({ setActiveSection }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-300/30 to-cyan-300/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-indigo-300/20 to-sky-300/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center">
        {/* Left side - Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-6"
          >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 text-sm font-semibold tracking-wide rounded-full border border-blue-200">
            Selamat datang di Website Angga, tempat saya membagikan karya, pengalaman, serta perjalanan dalam mengembangkan keterampilan.
          </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Creating{' '}
            <span className="text-gradient">Innovative</span>
            <br />
            Digital Experiences
            <br />
            <span className="inline-flex items-center gap-3">
              With <span className="text-5xl sm:text-6xl"></span> Passion
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg text-slate-600 max-w-xl mb-12 leading-relaxed"
          >
            Saya memiliki ketertarikan yang kuat pada dunia Teknologi Informasi dan semangat untuk terus belajar serta mengembangkan keterampilan di bidang tersebut.
            Di sisi lain, public speaking menjadi salah satu kemampuan yang saya bangun untuk mendukung komunikasi, kolaborasi, dan kepemimpinan.
            Saya bercita-cita menggabungkan kedua bidang ini agar dapat menciptakan solusi teknologi yang inovatif sekaligus mampu mengkomunikasikan ide dan memberikan dampak positif bagi banyak orang.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => setActiveSection('about')}
              className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center justify-center gap-2">
                Tentang Angga
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
            <button
              onClick={() => setActiveSection('contact')}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-white border-2 border-blue-300 text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-all duration-300 hover:scale-105"
            >
              Pesan Untuk Angga 💬
            </button>
          </motion.div>
        </motion.div>

        {/* Right side - Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-2xl shadow-blue-500/20">
            <img
              src="/owner.png"
              alt="Profile"
              className="w-full h-full object-cover hover:scale-110 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 via-transparent to-transparent" />
          </div>
          <div className="absolute -inset-4 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-3xl -z-10 blur-xl" />
        </motion.div>
      </div>
    </section>
  );
}