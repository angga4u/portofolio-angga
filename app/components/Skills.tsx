"use client";

import { motion } from 'framer-motion';

const skills = [
  { name: "Public Speaking", level: 90, color: "from-blue-500 to-cyan-500", icon: "🎤" },
  { name: "Jiwa Kepemimpinan", level: 88, color: "from-indigo-500 to-blue-500", icon: "👑" },
  { name: "Pengalaman Dunia Kerja & Usaha", level: 85, color: "from-cyan-500 to-sky-500", icon: "💼" },
  { name: "Web Developer", level: 78, color: "from-sky-500 to-indigo-500", icon: "🌐" },
  { name: "UI/UX Design", level: 72, color: "from-blue-500 to-cyan-500", icon: "🎨" },
  { name: "Kemandirian", level: 92, color: "from-indigo-500 to-cyan-500", icon: "🦾" }
];

export default function Skills() {
  return (
    <section className="relative py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 text-sm font-semibold tracking-wide rounded-full border border-blue-200 mb-6">
            💪 Bakat & Kemampuan
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">
            Keahlian <span className="text-gradient">unggulan</span> saya
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-3xl border border-blue-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 bg-gradient-to-br ${skill.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg`}>
                  {skill.icon}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-bold text-slate-900">{skill.name}</span>
                    <span className="text-sm font-semibold text-blue-600">{skill.level}%</span>
                  </div>
                </div>
              </div>
              
              <div className="h-3 bg-white rounded-full overflow-hidden shadow-inner">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full shadow-lg`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}