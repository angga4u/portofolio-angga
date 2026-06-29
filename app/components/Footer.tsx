"use client";

import { motion } from 'framer-motion';

interface FooterProps {
  setActiveSection: (section: string) => void;
}

export default function Footer({ setActiveSection }: FooterProps) {
  const socialLinks = [
    {
      name: "Instagram",
      href: "https://instagram.com/anggaaa.gs",
      gradient: "from-pink-500 to-purple-600",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "TikTok",
      href: "https://tiktok.com/@anggaaa.gs",
      gradient: "from-slate-800 to-slate-950",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.17 8.17 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
        </svg>
      ),
    },
  ];

  const handleNav = (section: string) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t-2 border-blue-100">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Kolom 1 — Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            <div className="text-3xl font-bold">
              <span className="text-gradient">ANGGA</span>
              <span className="text-blue-400">.</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Public Speaker, Web Developer, dan Wirausahawan Muda dari Banyuwangi yang selalu bahagia di dunia komunikasi dan teknologi.
            </p>
            <div className="flex gap-3 mt-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-11 h-11 bg-gradient-to-br ${social.gradient} rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Kolom 2 — Navigasi */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <h4 className="text-slate-900 font-bold text-lg">Navigasi</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="text-slate-500 hover:text-blue-600 text-sm font-medium transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-300 group-hover:bg-blue-500 transition-colors" />
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('memories')}
                  className="text-slate-500 hover:text-blue-600 text-sm font-medium transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-300 group-hover:bg-blue-500 transition-colors" />
                  Kenangan
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="text-slate-500 hover:text-blue-600 text-sm font-medium transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-300 group-hover:bg-blue-500 transition-colors" />
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="text-slate-500 hover:text-blue-600 text-sm font-medium transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-300 group-hover:bg-blue-500 transition-colors" />
                  Contact
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Kolom 3 — Kontak */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <h4 className="text-slate-900 font-bold text-lg">Hubungi Saya</h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-3 text-slate-500 text-sm">
                <span className="w-9 h-9 bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 rounded-xl flex items-center justify-center text-base shrink-0">
                  📧
                </span>
                damagesang@gmail.com
              </li>
              <li className="flex items-center gap-3 text-slate-500 text-sm">
                <span className="w-9 h-9 bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 rounded-xl flex items-center justify-center text-base shrink-0">
                  📱
                </span>
                Kasih tau gak ya...
              </li>
              <li className="flex items-center gap-3 text-slate-500 text-sm">
                <span className="w-9 h-9 bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 rounded-xl flex items-center justify-center text-base shrink-0">
                  📍
                </span>
                Banyuwangi, Jawa Timur
              </li>
            </ul>
          </motion.div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-100 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 text-center">
          <p className="text-slate-400 text-sm">
            © 2025 <span className="text-blue-500 font-semibold">Angga</span>. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm">
            Made with <span className="text-blue-500">💙</span> and lots of <span className="text-cyan-500">☕</span>
          </p>
        </div>
      </div>
    </footer>
  );
}