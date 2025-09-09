import React from "react";
import { motion } from "framer-motion";

const containerVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.12 }
  }
};

const cardVariant = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55 } }
};

export default function Services() {
  return (
    <section id="services" className="mt-24 mb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold mb-8"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
        >
          Services
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-3 gap-10"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Design */}
          <motion.div variants={cardVariant} className="bg-slate-900 rounded-2xl p-10 md:p-12 border border-slate-700 min-h-[420px] overflow-hidden">
            <div className="flex items-center gap-4 mb-6 flex-wrap min-w-0">
              <span className="relative inline-flex items-center justify-center">
                <span className="absolute inset-0 rounded-full border-2 border-dotted border-white/30 scale-125" />
                <span className="inline-block size-8 rounded-full bg-rose-500" />
              </span>
              <h3 className="text-4xl md:text-4xl font-extrabold leading-tight break-words max-w-full">
                Design
              </h3>
            </div>
            <ul className="space-y-3 text-lg">
              <li>UI Design</li>
              <li>UX Design</li>
              <li>UX Consultancy</li>
              <li>Design System</li>
              <li>Animation</li>
              <li>Illustrations</li>
            </ul>
          </motion.div>

          {/* Marketing */}
          <motion.div variants={cardVariant} className="bg-slate-900 rounded-2xl p-10 md:p-12 border border-slate-700 min-h-[420px] overflow-hidden">
            <div className="flex items-center gap-4 mb-6 flex-wrap min-w-0">
              <span className="relative inline-flex items-center justify-center">
                <span className="absolute inset-0 rounded-full border-2 border-dotted border-white/30 scale-125" />
                <span className="inline-block size-8 rounded-full bg-violet-500" />
              </span>
              <h3 className="text-4xl md:text-4xl font-extrabold leading-tight break-words max-w-full">
                Marketing
              </h3>
            </div>
            <ul className="space-y-3 text-lg">
              <li>Branding</li>
              <li>Brand Name</li>
              <li>Brand Guidelines</li>
              <li>Strategy</li>
              <li>Digital Marketing</li>
              <li>S.E.O.</li>
            </ul>
          </motion.div>

          {/* Technology */}
          <motion.div variants={cardVariant} className="bg-slate-900 rounded-2xl p-10 md:p-12 border border-slate-700 min-h-[420px] overflow-hidden">
            <div className="flex items-center gap-4 mb-6 flex-wrap min-w-0">
              <span className="relative inline-flex items-center justify-center">
                <span className="absolute inset-0 rounded-full border-2 border-dotted border-white/30 scale-125" />
                <span className="inline-block size-8 rounded-full bg-indigo-500" />
              </span>
              <h3 className="text-4xl md:text-4xl font-extrabold leading-tight break-words max-w-full">
                Technology
              </h3>
            </div>
            <ul className="space-y-3 text-lg">
              <li>Web Development</li>
              <li>Softwares</li>
              <li>Mobile Apps</li>
              <li>Web Apps</li>
              <li>Front-End</li>
              <li>Back-End</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


