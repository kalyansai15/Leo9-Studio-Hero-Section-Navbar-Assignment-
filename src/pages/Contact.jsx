import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Micro-interaction: Notification animation
const notificationVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } },
  exit: { opacity: 0, y: 30, transition: { duration: 0.3 } },
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

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  // Micro-interaction: Button ripple effect
  const [ripple, setRipple] = useState({ show: false, x: 0, y: 0 });

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2500);
    e.target.reset();
  }

  function handleButtonClick(e) {
    const rect = e.target.getBoundingClientRect();
    setRipple({
      show: false,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setTimeout(() => {
      setRipple({
        show: true,
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }, 10);
  }

  return (
    <section id="contact" className="mt-24 mb-12">
      <motion.h3
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="text-2xl font-semibold text-center"
      >
        Contact Us
      </motion.h3>
      <motion.p
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        custom={1}
        className="mt-3 text-center text-slate-300 max-w-xl mx-auto"
      >
        Have a project in mind or want to collaborate? Fill out the form below
        and we’ll get back to you soon.
      </motion.p>
      <motion.form
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={2}
        className="mt-8 mx-auto max-w-lg bg-slate-900 rounded-2xl border border-slate-700 p-8 shadow-lg flex flex-col gap-5"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <motion.input
          whileFocus={{
            scale: 1.03,
            borderColor: "#818cf8",
            boxShadow: "0 0 0 2px #818cf8",
          }}
          type="text"
          placeholder="Your Name"
          className="rounded-md border border-slate-700 bg-slate-800 px-4 py-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          required
        />
        <motion.input
          whileFocus={{
            scale: 1.03,
            borderColor: "#818cf8",
            boxShadow: "0 0 0 2px #818cf8",
          }}
          type="email"
          placeholder="Your Email"
          className="rounded-md border border-slate-700 bg-slate-800 px-4 py-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          required
        />
        <motion.textarea
          whileFocus={{
            scale: 1.03,
            borderColor: "#818cf8",
            boxShadow: "0 0 0 2px #818cf8",
          }}
          placeholder="Your Message"
          rows={4}
          className="rounded-md border border-slate-700 bg-slate-800 px-4 py-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          required
        />
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#6366f1" }}
          type="submit"
          className="mt-2 relative overflow-hidden rounded-md bg-indigo-500 px-6 py-3 font-medium shadow-lg hover:brightness-110 transition focus:outline-none"
          onClick={handleButtonClick}
        >
          Send Message
          {/* Micro-interaction: Ripple effect */}
          {ripple.show && (
            <span
              style={{
                left: ripple.x,
                top: ripple.y,
                position: "absolute",
                width: 120,
                height: 120,
                background: "rgba(255,255,255,0.3)",
                borderRadius: "50%",
                transform: "translate(-50%, -50%)",
                pointerEvents: "none",
                animation: "ripple 0.6s linear",
                zIndex: 1,
              }}
              onAnimationEnd={() => setRipple({ ...ripple, show: false })}
            />
          )}
        </motion.button>
      </motion.form>
      {/* Micro-interaction: Animated notification */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            variants={notificationVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed left-1/2 bottom-10 z-50 -translate-x-1/2 rounded-lg bg-indigo-600 px-6 py-3 text-white shadow-xl"
          >
            Thank you! Your message has been sent.
          </motion.div>
        )}
      </AnimatePresence>
      {/* Fluid transition: Keyframes for ripple */}
      <style>
        {`
          @keyframes ripple {
            0% {
              opacity: 0.7;
              transform: scale(0) translate(-50%, -50%);
            }
            80% {
              opacity: 0.3;
              transform: scale(1.5) translate(-50%, -50%);
            }
            100% {
              opacity: 0;
              transform: scale(2.2) translate(-50%, -50%);
            }
          }
        `}
      </style>
    </section>
  );
}
