"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

interface AboutProps {
  setActiveSection: (section: string) => void;
}

export default function About({ setActiveSection }: AboutProps) {
  const expertise = [
    {
      title: 'Public Speaking',
      description: 'Berpengalaman sebagai MC, Moderator, dan Pemateri di berbagai acara, tampil percaya diri di hadapan publik.',
      icon: '🎤',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Kepemimpinan',
      description: 'Dua kali mencalonkan diri sebagai Ketua OSIS dan aktif memimpin di 7 organisasi & komunitas.',
      icon: '👑',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'Web Development',
      description: 'Membangun website modern dan responsif dengan teknologi terkini seperti Next.js, Tailwind CSS, Dan Lainnya.',
      icon: '🌐',
      color: 'from-cyan-500 to-sky-500'
    },
    {
      title: 'Wirausaha',
      description: 'Mendirikan dan mengelola Anggaisss jasa joki tugas dari SD hingga Kuliah secara mandiri.',
      icon: '💡',
      color: 'from-sky-500 to-indigo-500'
    },
  ];

  const values = [
    { icon: '🎯', title: 'Berani Tampil', description: 'Percaya diri berbicara dan tampil di depan umum dalam berbagai situasi' },
    { icon: '🚀', title: 'Terus Berkembang', description: 'Selalu belajar hal baru dan tidak berhenti bertumbuh' },
    { icon: '🤝', title: 'Kolaboratif', description: 'Senang bekerja dalam tim dan membangun relasi yang baik' },
    { icon: '💪', title: 'Mandiri', description: 'Mampu bekerja dan menyelesaikan tantangan secara independen' },
  ];

  return (
    <section id="about" className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full border border-blue-200 shadow-lg mb-6"
          >
            <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-blue-600">Tentang Saya</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">About Me</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Pemuda yang selalu bahagia di dunia komunikasi, kepemimpinan, dan teknologi, terus bertumbuh dan berkarya
          </p>
        </motion.div>

        {/* Section 1 — Bio Angga */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">

          {/* Kiri — Foto & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-2xl opacity-20" />
              <div className="relative bg-white rounded-3xl p-3 shadow-2xl border border-blue-100">
                <div className="relative h-[480px] rounded-2xl overflow-hidden">
                  <Image
                    src="/anggaa.jpeg"
                    alt="Foto Angga"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-5 shadow-lg border border-blue-100 text-center"
              >
                <div className="text-3xl font-bold text-gradient mb-1">29</div>
                <div className="text-xs text-slate-500 font-medium">Oktober</div>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-5 shadow-lg border border-blue-100 text-center"
              >
                <div className="text-3xl font-bold text-gradient mb-1">2007</div>
                <div className="text-xs text-slate-500 font-medium">Tahun Lahir</div>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-5 shadow-lg border border-blue-100 text-center"
              >
                <div className="text-3xl font-bold text-gradient mb-1">🎂</div>
                <div className="text-xs text-slate-500 font-medium">Banyuwangi</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Kanan — Bio Angga */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center"
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100 w-full">
              <h3 className="text-2xl font-bold mb-5 text-slate-800">
                Halo! <span className="text-gradient">Saya Angga</span>
              </h3>
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm">
                <p>
                  Nama lengkapku <span className="font-semibold text-blue-600">Damar Gesang Erlangga</span>.
                  Lahir di <span className="font-semibold text-blue-600">Banyuwangi, 29 Oktober 2007</span>.
                  Sejak kecil, Angga tumbuh dengan kemandirian, bukan karena tidak punya keluarga,
                  melainkan karena kedua orang tua yang merantau jauh hingga ke luar negeri.
                  Dari situlah terbentuk pribadi yang kuat, mandiri, dan selalu ingin berkembang.
                </p>
                <p>
                  Angga adalah tipe <span className="font-semibold text-blue-600">ambivert</span>,
                  bisa menyesuaikan diri dengan berbagai situasi, namun tetap selektif dalam pertemanan.
                  Di tengah pergaulan yang semakin kompleks, Angga memilih lingkaran kecil yang berkualitas
                  daripada banyak tapi tidak bermakna.
                </p>
                <p>
                  Di luar kesibukan, Angga punya hobi
                  <span className="font-semibold text-blue-600"> basket dan jogging</span>,
                  sangat menyukai <span className="font-semibold text-blue-600">salad buah</span> dan
                  secangkir <span className="font-semibold text-blue-600">cappuccino</span> hangat.
                  Warna favoritnya <span className="font-semibold text-blue-600">biru</span>,
                  tenang, dalam, dan penuh makna. Love language-nya adalah
                  <span className="font-semibold text-blue-600"> act of service</span>, dan Angga
                  sangat menghargai orang-orang yang <span className="font-semibold text-blue-600">soft spoken</span>,
                  lembut dalam perkataan maupun perbuatan.
                </p>
                <p>
                  Angga juga sangat menyukai lagu-lagu dari album
                  <span className="font-semibold text-blue-600"> Lyla </span>
                  menurutnya, lirik dan melodi Lyla begitu relate dengan perjalanan hidupnya,
                  selalu berhasil membangkitkan semangat di saat segalanya terasa berat.
                  Musik bukan sekadar hiburan bagi Angga, tapi teman setia di setiap momen.
                  Dan kalau disuruh memilih pergi ke mana,
                  Angga akan selalu memilih <span className="font-semibold text-blue-600">Alam </span>
                  tempat di mana pikiran bisa bernapas, hati bisa tenang, dan semangat bisa pulih kembali.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mt-7">
                <motion.a
                  href="/cvku.png"
                  download="Angga_CV.png"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-semibold rounded-full shadow-lg shadow-blue-500/30 hover:shadow-xl transition-all inline-block"
                >
                  Download CV 📄
                </motion.a>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveSection('contact')}
                  className="px-6 py-3 bg-white border-2 border-blue-500 text-blue-500 text-sm font-semibold rounded-full hover:bg-blue-50 transition-all"
                >
                  Hubungi Saya 📧
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Section 2 — Go Youn Jung */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">

          {/* Kiri — Teks Go Youn Jung */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center"
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100 w-full">
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-600 text-xs font-semibold rounded-full border border-blue-200 mb-4">
                🎬 Tokoh Favorit
              </span>
              <h3 className="text-2xl font-bold mb-5 text-slate-800">
                Go Youn Jung <span className="text-gradient">My Bini Gueh</span>
              </h3>
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm">
                <p>
                  <span className="font-semibold text-blue-600">Go Youn Jung</span> lahir pada
                  <span className="font-semibold text-blue-600"> 22 April 1996</span> di Korea Selatan.
                  Ia adalah aktris dan model yang dikenal karena pesonanya yang elegan,
                  ekspresi yang natural, serta kemampuan akting yang mampu menghidupkan
                  setiap karakter yang ia perankan.
                </p>

                <p>
                  Namanya semakin dikenal luas melalui drama
                  <span className="font-semibold text-blue-600"> &ldquo;Alchemy of Souls: Light and Shadow&rdquo;</span>,
                  kemudian semakin bersinar lewat
                  <span className="font-semibold text-blue-600"> &ldquo;Moving&rdquo;</span>,
                  <span className="font-semibold text-blue-600"> &ldquo;Death's Game&rdquo;</span>,
                  hingga
                  <span className="font-semibold text-blue-600"> &ldquo;Resident Playbook&rdquo;</span>.
                  Setiap penampilannya selalu terasa berkesan karena mampu menampilkan
                  emosi yang kuat tanpa kehilangan kesan tenang dan elegan.
                </p>

                <p>
                  Yang membuat Go Youn Jung begitu menginspirasi bagi Angga bukan hanya
                  karena parasnya, tetapi juga karena pembawaannya yang
                  <span className="font-semibold text-blue-600"> tenang, anggun, dan rendah hati</span>.
                  Ia memancarkan karakter
                  <span className="font-semibold text-blue-600"> soft spoken</span> yang mampu
                  berbicara dengan lembut namun tetap penuh percaya diri.
                  Bagi Angga, sosok seperti itu mencerminkan bahwa kekuatan seseorang tidak
                  selalu ditunjukkan dengan suara yang keras, melainkan melalui sikap,
                  ketulusan, dan cara memperlakukan orang lain dengan hormat.
                </p>
              </div>

              {/* Fun Facts */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-4 border border-blue-100">
                  <div className="text-xs text-slate-400 font-medium mb-1">Lahir</div>
                  <div className="text-sm font-bold text-slate-700">22 April 1996</div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-4 border border-blue-100">
                  <div className="text-xs text-slate-400 font-medium mb-1">Profesi</div>
                  <div className="text-sm font-bold text-slate-700">Aktris & Model</div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-4 border border-blue-100">
                  <div className="text-xs text-slate-400 font-medium mb-1">Drama Ikonik</div>
                  <div className="text-sm font-bold text-slate-700">Moving</div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-4 border border-blue-100">
                  <div className="text-xs text-slate-400 font-medium mb-1">Kesan</div>
                  <div className="text-sm font-bold text-slate-700">Elegan & Soft Spoken</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Kanan — Foto Go Youn Jung */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-3xl blur-2xl opacity-20" />
              <div className="relative bg-white rounded-3xl p-3 shadow-2xl border border-blue-100">
                <div className="relative h-[480px] rounded-2xl overflow-hidden">
                  <Image
                    src="/asik.jpeg"
                    alt="Go Youn Jung"
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-bold text-xl">Go Youn Jung</p>
                    <p className="text-blue-200 text-sm">고윤정 · My Bini Gueh</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100 shadow-lg">
              <p className="text-slate-600 text-sm leading-relaxed italic text-center">
                &ldquo;Kadang, orang yang paling ingin dicintai justru menjadi orang yang
                paling takut untuk mencintai.&rdquo;
              </p>
              <p className="text-blue-500 text-xs font-semibold text-center mt-3">
                — Go Youn Jung
              </p>
            </div>
          </motion.div>
        </div>

        {/* Expertise Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-slate-800">
            Apa yang Saya <span className="text-gradient">Lakukan</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-blue-100 group"
              >
                <div className={`w-14 h-14 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold mb-2 text-slate-800 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-slate-800">
            Nilai yang Saya <span className="text-gradient">Pegang</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-blue-100 text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-base font-bold mb-2 text-slate-800">{value.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}