import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "E‑commerce Revamp",
    subtitle: "UX, Design System, Frontend",
    description:
      "Modernized storefront with conversion‑focused UX, design tokens, and performance optimizations.",
  },
  {
    title: "Banking Onboarding",
    subtitle: "Mobile UX, Motion, Accessibility",
    description:
      "Reduced drop‑off by 28% with simplified flows, micro‑interactions, and WCAG AA compliance.",
  },
  {
    title: "SaaS Analytics",
    subtitle: "Dashboard, IA, Data Viz",
    description:
      "Built a modular analytics suite with semantic charts and flexible information architecture.",
  },
];

const containerVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.12 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55 } },
};

export default function Projects() {
  return (
    <section id="works" className="mt-24 mb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold mb-8"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {projects.map((p, i) => (
            <motion.article
              key={i}
              variants={cardVariant}
              className="bg-slate-900 rounded-2xl p-6 border border-slate-700 hover:bg-slate-800 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-1">{p.title}</h3>
              <p className="text-sm text-slate-300 mb-3">{p.subtitle}</p>
              <p className="text-slate-200/90 leading-relaxed">{p.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


