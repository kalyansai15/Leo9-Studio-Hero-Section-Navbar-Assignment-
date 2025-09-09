import React, { useRef, useEffect, useState } from "react";
import GLOBE from "vanta/dist/vanta.globe.min";
import * as THREE from "three";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import HeroSection from "./pages/hero-section";
import Services from "./pages/Services";
import Projects from "./pages/Projects";

// Animation variants for reusability
const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      type: "spring",
      stiffness: 60,
    },
  }),
};

const fadeInVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.18,
      duration: 0.7,
      type: "spring",
      stiffness: 60,
    },
  }),
};

export default function App() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        GLOBE({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-slate-100">
      {/* Navbar with slide-down */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 15 }}
      >
        <Navbar />
      </motion.div>
      {/* Main content fade/slide-in */}
      <motion.main
        className="mx-auto max-w-7xl px-6 lg:px-8"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6, type: "tween" }}
      >
        <div
          style={{
            position: "relative",
            zIndex: 1,
            color: "#fff",
            minHeight: "100vh",
          }}
        >
          <HeroSection />
          <Services />
          <Projects />
          <HomePage />
          <Contact />
        </div>
      </motion.main>
      <footer className="mt-24 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Your Name — Built for assignment
      </footer>
      <div
        ref={vantaRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
