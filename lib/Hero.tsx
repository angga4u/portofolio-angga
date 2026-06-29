"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-7xl font-bold tracking-tight"
      >
        Hi, I'm <span className="text-purple-500">Angga</span> 👋
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl"
      >
        A passionate <span className="text-purple-400 font-semibold">Frontend & Mobile Developer</span> who loves building beautiful modern UI experiences.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-8"
      >
        <button className="px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
          Explore My Work 🚀
        </button>
      </motion.div>
    </section>
  );
}