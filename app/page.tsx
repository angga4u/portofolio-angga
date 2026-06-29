"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 text-slate-900 overflow-x-hidden">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f615_1px,transparent_1px),linear-gradient(to_bottom,#3b82f615_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-300/30 to-cyan-300/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-indigo-300/20 to-sky-300/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-br from-cyan-300/25 to-blue-300/25 rounded-full blur-3xl animate-pulse delay-2000" />
        <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-blue-400 rounded-full animate-ping" />
        <div className="absolute top-2/3 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping delay-500" />
        <div className="absolute bottom-1/3 right-1/2 w-2 h-2 bg-indigo-400 rounded-full animate-ping delay-1000" />
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

        {activeSection === "home" && <Hero setActiveSection={setActiveSection} />}
        {activeSection === "memories" && <Work />}
        {activeSection === "about" && <About setActiveSection={setActiveSection} />}
        {activeSection === "contact" && <Contact />}

        {activeSection === "home" && (
          <>
            <Projects />
            <Skills />
          </>
        )}

        <Footer setActiveSection={setActiveSection} />
      </div>
    </div>
  );
}