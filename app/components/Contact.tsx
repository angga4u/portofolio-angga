"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import MessagesViewer from './Messages';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showMessagesViewer, setShowMessagesViewer] = useState(false);

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert('Mohon isi semua kolom terlebih dahulu! 📝');
      return;
    }

    setIsSubmitting(true);

    const newMessage = {
      id: Date.now().toString(),
      name: formData.name,
      email: formData.email,
      message: formData.message,
      timestamp: new Date().toLocaleString('id-ID', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      read: false
    };

    const existingMessages = localStorage.getItem('contact_messages');
    const messages = existingMessages ? JSON.parse(existingMessages) : [];
    messages.unshift(newMessage);
    localStorage.setItem('contact_messages', JSON.stringify(messages));

    await new Promise(resolve => setTimeout(resolve, 2000));
    alert('Pesan berhasil terkirim! 🎉');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const socialLinks = [
    {
      name: 'Instagram',
      username: '@anggaaa.gs',
      link: 'https://instagram.com/anggaaa.gs',
      gradient: 'from-pink-500 to-purple-600',
      bg: 'from-pink-50 to-purple-50',
      border: 'border-pink-200 hover:border-pink-400',
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      )
    },
    {
      name: 'TikTok',
      username: '@anggaaa.gs',
      link: 'https://tiktok.com/@anggaaa.gs',
      gradient: 'from-slate-800 to-slate-950',
      bg: 'from-slate-50 to-slate-100',
      border: 'border-slate-200 hover:border-slate-400',
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.17 8.17 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
        </svg>
      )
    },
  ];

  const contactMethods = [
    {
      icon: '📧',
      label: 'Email',
      value: 'damagesang@gmail.com',
      link: 'mailto:damagesang@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '📱',
      label: 'WhatsApp',
      value: 'Kasih tau gak ya..',
      link: 'https://wa.me/6288991032211',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: '📍',
      label: 'Lokasi',
      value: 'Banyuwangi, Jawa Timur',
      link: '#',
      color: 'from-blue-400 to-indigo-500'
    }
  ];

  return (
    <section id="contact" className="min-h-screen pt-32 pb-20 px-6">
      <AnimatePresence>
        {showMessagesViewer && (
          <MessagesViewer onClose={() => setShowMessagesViewer(false)} />
        )}
      </AnimatePresence>

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
            <span className="text-sm font-semibold text-blue-600">Hubungi Saya</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Punya pertanyaan?, ingin menyampaikan sesuatu?, atau sekadar menyapa? Yuk scroll kebawah!
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowMessagesViewer(true)}
            className="px-6 py-3 bg-gradient-to-r from-slate-700 to-slate-900 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
          >
            <span>🔐</span>
            Khusus Angga
          </motion.button>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">

          {/* Kiri — Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-blue-100">
              <h3 className="text-2xl font-bold mb-2 text-slate-800">Kirim Pesan 💬</h3>
              <p className="text-slate-500 text-sm mb-8">
                Isi form di bawah ini buat Angga!
              </p>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Nama *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-800"
                    placeholder="Nama kamu"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-800"
                    placeholder="email@contoh.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Pesan *</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none text-slate-800"
                    placeholder="Tulis pesanmu di sini..."
                  />
                </div>

                <motion.button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl transition-all ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      Mengirim...
                    </span>
                  ) : (
                    'Kirim Pesan 🚀'
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Kanan — Foto & Kontak */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Foto */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-2xl opacity-20" />
              <div className="relative bg-white rounded-3xl p-4 shadow-2xl border border-blue-100">
                <div className="relative h-80 rounded-2xl overflow-hidden">
                  <Image
                    src="/malang.jpeg"
                    alt="Angga"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                      <div className="flex items-center gap-3 mb-1">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                        <span className="font-bold text-slate-800 text-sm">Damar Gesang Erlangga</span>
                      </div>
                      <p className="text-xs text-slate-500">
                        Thank you! yang sudah mampir ke Website Angga
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Info Kontak */}
            <div className="space-y-3">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all border border-blue-100 group"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform shrink-0`}>
                    {method.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase">{method.label}</p>
                    <p className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors text-sm">
                      {method.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Sosial Media */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-3 text-slate-800">
            Temukan Saya di
          </h3>
          <p className="text-center text-slate-500 text-sm mb-10 max-w-xl mx-auto">
            Follow Angga untuk update terbaru seputar kegiatan, karya, dan perjalanan hidupnya
          </p>

          <div className="flex justify-center gap-6 flex-wrap">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`bg-gradient-to-br ${social.bg} rounded-3xl p-8 border-2 ${social.border} transition-all shadow-lg hover:shadow-2xl group w-48`}
              >
                <div className="text-center space-y-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${social.gradient} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all shadow-lg`}>
                    {social.icon}
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 text-lg">{social.name}</div>
                    <div className="text-xs text-slate-500 mt-1">{social.username}</div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center pt-12 border-t border-slate-200"
        >
        </motion.div>

      </div>
    </section>
  );
}