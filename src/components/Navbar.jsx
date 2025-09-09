import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Micro-interaction: Notification for menu open/close
const notificationVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } },
  exit: { opacity: 0, y: 30, transition: { duration: 0.3 } },
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [notify, setNotify] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  function handleMenuToggle() {
    setOpen((prev) => !prev);
    setNotify(true);
    setTimeout(() => setNotify(false), 1200);
  }

  function handleNavClick(e, targetId) {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el && typeof el.scrollIntoView === "function") {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    setOpen(false);
  }

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-colors duration-300 ${
        scrolled ? "bg-transparent" : "bg-transparent"
      } backdrop-blur-md`}
      style={{
        backgroundColor: scrolled
          ? "rgba(30, 41, 59, 0.6)" // dark bg with opacity when scrolled
          : "transparent",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between py-6 px-6 lg:px-8">
        <a
          href="#"
          className="inline-flex items-center gap-3 text-lg font-semibold group"
        >
          <span className="inline-block h-8 w-8 rounded-md bg-gradient-to-r from-indigo-500 to-pink-500 shadow-lg transition-transform group-hover:scale-110" />
          <span className="sr-only">Leo9 Studio</span>
          <span className="hidden md:inline">Leo9 Studio — Demo</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <motion.a
            whileHover={{ scale: 1.1, color: "#fff" }}
            className="hover:text-white transition"
            href="#services"
            onClick={(e) => handleNavClick(e, "services")}
          >
            Services
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, color: "#fff" }}
            className="hover:text-white transition"
            href="#works"
            onClick={(e) => handleNavClick(e, "works")}
          >
            Projects
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.08, backgroundColor: "#1e293b" }}
            className="rounded-md border border-slate-700 px-3 py-1 text-sm hover:bg-slate-800 transition"
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
          >
            Let's talk
          </motion.a>
        </nav>

        {/* mobile */}
        <div className="md:hidden">
          <motion.button
            aria-label="Toggle menu"
            onClick={handleMenuToggle}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-700 relative overflow-hidden"
            whileTap={{ scale: 0.92 }}
          >
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile panel */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={
          open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        className="md:hidden overflow-hidden"
      >
        <div className="mx-auto flex max-w-3xl flex-col gap-4 px-6 pb-6">
          <motion.a
            whileHover={{ scale: 1.05, backgroundColor: "#1e293b" }}
            className="block rounded-md px-3 py-2 hover:bg-white/5 transition"
            href="#services"
            onClick={(e) => handleNavClick(e, "services")}
          >
            Services
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05, backgroundColor: "#1e293b" }}
            className="block rounded-md px-3 py-2 hover:bg-white/5 transition"
            href="#works"
            onClick={(e) => handleNavClick(e, "works")}
          >
            Projects
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05, backgroundColor: "#1e293b" }}
            className="block rounded-md border border-slate-700 px-3 py-2 text-center transition"
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
          >
            Let's talk
          </motion.a>
        </div>
      </motion.div>
      {/* Micro-interaction: Animated notification */}
      <AnimatePresence>
        {notify && (
          <motion.div
            variants={notificationVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed left-1/2 top-6 z-50 -translate-x-1/2 rounded-lg bg-indigo-600 px-6 py-3 text-white shadow-xl"
          >
            {open ? "Menu opened" : "Menu closed"}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
