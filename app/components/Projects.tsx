"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const experiences = [
  {
    title: "Calon Ketua OSIS",
    description: "Dua kali mencalonkan diri sebagai Ketua OSIS, menunjukkan jiwa kepemimpinan, keberanian tampil di depan publik, dan kemampuan meyakinkan banyak orang.",
    tags: ["Kepemimpinan", "Public Speaking", "Pengalaman"],
    gradient: "from-blue-400 to-cyan-400",
    images: ["/osis1.jpeg", "/putih.jpeg", "/osis3.jpeg"]
  },
  {
    title: "Juara 1 Lomba Debat 2025",
    description: "Meraih juara pertama dalam lomba debat, membuktikan kemampuan berpikir kritis, argumentasi yang kuat, dan kepercayaan diri berbicara di hadapan juri dan audiens.",
    tags: ["Debat", "Juara 1", "Public Speaking"],
    gradient: "from-indigo-400 to-blue-400",
    images: ["/debat1.jpeg", "/debat2.jpeg", "/debat3.jpeg"]
  },
  {
    title: "Juara 2 Lomba LKBB 2025",
    description: "Meraih juara kedua dalam Lomba Keterampilan Baris-Berbaris, melatih kedisiplinan, kekompakan tim, dan kemampuan memimpin pasukan di bawah tekanan.",
    tags: ["LKBB", "Juara 2", "Disiplin"],
    gradient: "from-cyan-400 to-sky-400",
    images: ["/lkbb1.jpeg", "/lkbb2.jpeg", "/lkbb3.jpeg"]
  },
  {
    title: "Aktif di 7 Organisasi & Komunitas SMA/SMK",
    description: "Bergabung dan aktif berkontribusi di 7 organisasi atau komunitas yang berbeda, memperluas jaringan, mengasah soft skill, dan terus bertumbuh bersama orang-orang hebat.",
    tags: ["Organisasi", "Komunitas", "Networking"],
    gradient: "from-sky-400 to-indigo-400",
    images: ["/1.jpeg", "/2.jpeg", "/3.jpeg"]
  },
  {
    title: "Junior Assistant Programmer",
    description: "Dinyatakan Kompeten dalam uji sertifikasi LSP jurusan, pengakuan resmi atas keahlian dan kompetensi di bidang yang ditekuni.",
    tags: ["Sertifikasi", "LSP", "Kompeten"],
    gradient: "from-blue-400 to-indigo-400",
    images: ["/lsp1.jpeg", "/lsp2.jpeg", "/lsp3.jpeg"]
  },
  {
    title: "Moderator, Pemateri & MC",
    description: "Berpengalaman tampil dalam berbagai peran, sebagai Moderator yang memandu diskusi, Pemateri yang menyampaikan materi, hingga MC yang menghidupkan suasana acara.",
    tags: ["MC", "Moderator", "Pemateri"],
    gradient: "from-indigo-400 to-cyan-400",
    images: ["/ps1.jpeg", "/ps2.jpeg", "/ps3.jpeg"]
  },
  {
    title: "PKL / Magang di DPRD",
    description: "Menjalani Praktik Kerja Lapangan di DPRD, mendapatkan pengalaman langsung di lingkungan pemerintahan, memahami sistem birokrasi, dan mengasah profesionalisme di dunia kerja nyata.",
    tags: ["PKL", "Magang", "DPRD"],
    gradient: "from-blue-500 to-indigo-500",
    images: ["/pkl1.jpeg", "/pkl2.jpeg", "/pkl3.jpeg"]
  },
  {
    title: "Founder Anggaisss",
    description: "Membuka dan mengelola usaha jasa joki tugas sendiri bernama Anggaisss, melayani pelanggan dari jenjang SD hingga Kuliah. Melatih jiwa wirausaha, manajemen klien, dan tanggung jawab sebagai pemilik bisnis.",
    tags: ["Wirausaha", "Founder", "Joki Tugas"],
    gradient: "from-cyan-500 to-blue-500",
    images: ["/anggaisss1.jpeg", "/logo Anggaiss.jpg", "/anggaisss3.jpeg"]
  },
];

export default function Experience() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 text-sm font-semibold tracking-wide rounded-full border border-blue-200 mb-6">
            🌟 Pengalaman & Prestasi
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">
            Perjalanan <span className="text-gradient">Membentuk</span> Pribadi Angga
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Setiap pengalaman dan prestasi adalah bagian dari proses bertumbuh, sebagai pemimpin, pembicara, dan pribadi yang terus berkembang
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-blue-100"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-3xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500" />

              <div className="relative">

                {/* 3 Images */}
                <div className="flex justify-center md:justify-start gap-3 mb-6">
                  {item.images.map((src, i) => (
                    <div
                      key={i}
                      className="relative w-20 h-20 overflow-hidden rounded-2xl shadow-md border-2 border-white"
                    >
                      <Image
                        src={src}
                        alt={`${item.title} ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-gradient transition-all">
                  {item.title}
                </h3>

                <p className="text-slate-600 mb-6 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-600 text-sm font-medium rounded-full border border-blue-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}