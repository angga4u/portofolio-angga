"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

type Memory = {
  id: number;
  title: string;
  category: string;
  image: string;
};

export default function Memories() {
  const [selectedImage, setSelectedImage] = useState<Memory | null>(null);
  const [selectedFilter, setSelectedFilter] = useState('all');

  const memories: Memory[] = [
  { id: 1, title: '1 Syawal 1445 Hijriah', category: 'keluarga', image: '/keluarga1.jpeg' },
  { id: 2, title: '1 Syawal 1446 Hijriah', category: 'keluarga', image: '/keluarga2.jpeg' },
  { id: 3, title: 'Sebagian Keluarga Besar', category: 'keluarga', image: '/keluarga4.jpeg' },
  { id: 4, title: 'Mereka Tak Akan Tergantikan', category: 'teman', image: '/temann1.jpeg' },
  { id: 5, title: 'Sahabat Dari Kecil', category: 'teman', image: '/teman2.jpeg' },
  { id: 6, title: 'Tak Lama Mengenalnya But he is always with me, no matter the situation', category: 'teman', image: '/teman3.jpeg' },
  { id: 7, title: '234, Angka bukan sekedar Angka tapi berawal dari inilah kita Berteman', category: 'teman', image: '/teman4.jpeg' },
  { id: 8, title: 'OSIS Esemkasa(OSKA)🤍', category: 'organisasi', image: '/organisasi1.jpeg' },
  { id: 9, title: 'Gerakan Disiplin Siswa (GDS)❤️‍🔥', category: 'organisasi', image: '/organisasi2.jpeg' },
  { id: 10, title: 'Study Community (SC)🩵', category: 'organisasi', image: '/organisasi3.jpeg' },
];

  const filters = [
    { id: 'all', label: 'Semua', icon: '🌟', count: memories.length },
    { id: 'keluarga', label: 'Keluarga', icon: '🏠', count: memories.filter(m => m.category === 'keluarga').length },
    { id: 'teman', label: 'Teman', icon: '🤝', count: memories.filter(m => m.category === 'teman').length },
    { id: 'organisasi', label: 'Organisasi', icon: '🏆', count: memories.filter(m => m.category === 'organisasi').length },
  ];

  const filteredMemories = selectedFilter === 'all'
    ? memories
    : memories.filter(m => m.category === selectedFilter);

  return (
    <section id="memories" className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full border border-blue-200 shadow-lg mb-6"
          >
            <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-blue-600">Tempat Memories Angga</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            A place of <span className="text-gradient">Memories</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Setiap foto menyimpan cerita bersama keluarga, teman, dan organisasi yang membentuk siapa Angga hari ini
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-3 mb-16 flex-wrap"
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-500 flex items-center gap-2 ${
                selectedFilter === filter.id
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-xl shadow-blue-500/30'
                  : 'bg-white text-slate-700 border border-slate-200 shadow-md hover:shadow-lg'
              }`}
            >
              <span>{filter.icon}</span>
              <span>{filter.label}</span>
              <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                selectedFilter === filter.id
                  ? 'bg-white/20 text-white'
                  : 'bg-blue-100 text-blue-600'
              }`}>
                {filter.count}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {filteredMemories.map((memory, index) => (
            <motion.div
              key={memory.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedImage(memory)} // <-- klik untuk buka lightbox
              className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-100 bg-white cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-64 md:h-72 overflow-hidden">
                <Image
                  src={memory.image}
                  alt={memory.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                {/* Judul */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-bold text-sm md:text-base leading-snug drop-shadow">
                    {memory.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Lightbox / Modal Full Image */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          >
            {/* Tombol Close */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-2xl z-50"
              aria-label="Tutup"
            >
              ×
            </button>

            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()} // biar gak ketutup pas klik fotonya
              className="relative w-full max-w-3xl max-h-[85vh]"
            >
              <div className="relative w-full h-[80vh]">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  fill
                  className="object-contain" // <-- ini kuncinya, full image tanpa kepotong
                />
              </div>
              <p className="text-white text-center font-semibold mt-4 px-4">
                {selectedImage.title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}