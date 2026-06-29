"use client";

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle play/pause
  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Ulang dari awal
  const restartAudio = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = 0;
    audioRef.current.play();
    setIsPlaying(true);
  };

  // Reset state kalau audio selesai sendiri
  const handleAudioEnded = () => {
    setIsPlaying(false);
  };

  const menuItems = [
    { name: 'Home', icon: '🏠' },
    { name: 'Memories', icon: '📸' },
    { name: 'About', icon: '👨‍💻' },
    { name: 'Contact', icon: '📧' }
  ];

  // Komponen Logo yang dipakai di desktop & mobile
  const Logo = ({ size = 'md' }: { size?: 'sm' | 'md' }) => (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2 cursor-pointer"
    >
      {/* Gambar logo dari public/remove.png */}
      <div className={`relative rounded-full overflow-hidden ring-2 ring-blue-200 ${
        size === 'sm' ? 'w-8 h-8' : 'w-10 h-10'
      }`}>
        <Image
          src="/dg.JPG"
          alt="Angga Logo"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Nama */}
      <span className={`font-bold ${size === 'sm' ? 'text-lg' : 'text-2xl'}`}>
        <span className="text-gradient">ANGGA</span>
      </span>
    </motion.div>
  );

  // Animasi equalizer bars (gerak saat playing, diam saat pause)
  const EqualizerBars = () => (
    <div className="flex items-center gap-[2px] h-4">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-[3px] bg-white rounded-full"
          animate={
            isPlaying
              ? { height: ['30%', '100%', '50%', '90%', '30%'] }
              : { height: '30%' }
          }
          transition={
            isPlaying
              ? { duration: 0.9, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }
              : { duration: 0.2 }
          }
        />
      ))}
    </div>
  );

  // Komponen Mini Music Player
  const MusicPlayer = ({ compact = false }: { compact?: boolean }) => (
    <motion.div
      className={`flex items-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full shadow-lg shadow-blue-500/30 ${
        compact ? 'pl-3 pr-2 py-2' : 'pl-4 pr-2 py-2'
      }`}
    >
      {/* Equalizer + Teks */}
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
          <EqualizerBars />
        </div>
        {!compact && (
          <div className="flex flex-col leading-none mr-1">
            <span className="text-white text-xs font-bold whitespace-nowrap">
              Lagu Favorit Angga
            </span>
            <span className="text-white/70 text-[10px] whitespace-nowrap">
              {isPlaying ? 'Sedang diputar 🎵' : 'Diam, tap play'}
            </span>
          </div>
        )}
      </div>

      {/* Tombol Play/Pause */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={togglePlay}
        className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-md"
        aria-label={isPlaying ? 'Pause' : 'Play'}
      >
        <span className="text-blue-600 text-base">{isPlaying ? '⏸️' : '▶️'}</span>
      </motion.button>

      {/* Tombol Restart */}
      <motion.button
        whileHover={{ scale: 1.08, rotate: 180 }}
        whileTap={{ scale: 0.92 }}
        onClick={restartAudio}
        className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center"
        aria-label="Ulang dari awal"
      >
        <span className="text-white text-sm">🔄</span>
      </motion.button>
    </motion.div>
  );

  return (
    <>
      {/* Audio element, hidden, dikontrol via state */}
      <audio
        ref={audioRef}
        src="/blue.mpeg"
        onEnded={handleAudioEnded}
      />

      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`hidden md:block fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-blue-100'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            {/* Logo dengan gambar */}
            <Logo size="md" />

            {/* Desktop Menu */}
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-md px-3 py-3 rounded-full shadow-lg border border-blue-100">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => setActiveSection(item.name.toLowerCase())}
                  className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeSection === item.name.toLowerCase()
                      ? 'text-white'
                      : 'text-slate-600 hover:text-blue-600'
                  }`}
                >
                  {activeSection === item.name.toLowerCase() && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full shadow-lg"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <span>{item.icon}</span>
                    {item.name}
                  </span>
                </button>
              ))}
            </div>

            {/* Music Player (pengganti Hire Me) */}
            <MusicPlayer />
          </div>
        </div>
      </motion.nav>

      {/* Mobile Bottom Navigation */}
      <motion.nav
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t border-blue-100 shadow-2xl"
      >
        <div className="grid grid-cols-4 gap-1 px-4 py-3">
          {menuItems.map((item, index) => (
            <motion.button
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setActiveSection(item.name.toLowerCase())}
              className="relative flex flex-col items-center gap-1 py-2 rounded-xl transition-all duration-300"
            >
              {activeSection === item.name.toLowerCase() && (
                <motion.div
                  layoutId="mobileActiveTab"
                  className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-200"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 text-2xl">{item.icon}</span>
              <span
                className={`relative z-10 text-xs font-semibold transition-colors ${
                  activeSection === item.name.toLowerCase()
                    ? 'text-blue-600'
                    : 'text-slate-500'
                }`}
              >
                {item.name}
              </span>
              {activeSection === item.name.toLowerCase() && (
                <motion.div
                  layoutId="activeDot"
                  className="absolute -top-1 w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </motion.nav>

      {/* Mobile Top Bar (Logo + Music Player) */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`md:hidden fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-md border-b border-blue-100'
            : 'bg-transparent'
        }`}
      >
        <div className="px-6 py-4 flex justify-between items-center">
          {/* Logo dengan gambar (versi kecil untuk mobile) */}
          <Logo size="sm" />

          {/* Music Player versi compact (pengganti Hire Me) */}
          <MusicPlayer compact />
        </div>
      </motion.div>
    </>
  );
}