import React from "react";
import { motion } from "framer-motion";

const brands = [
  {
    alt: "FAB",
    src: "src/assets/fab-2.svg",
    style: { height: 38 },
  },
  {
    alt: "KPIT",
    src: "src/assets/pixel.svg",
    style: { height: 38 },
  },
  {
    alt: "TATA",
    src: "src/assets/tata-logo.svg",
    style: { height: 38 },
  },
  {
    alt: "BMW",
    src: "src/assets/bmw.svg",
    style: { height: 40 },
  },
  {
    alt: "SONY",
    src: "src/assets/sony-logo-1.svg",
    fill: "currentColor",
    style: { height: 38 },
  },
  {
    alt: "P&G",
    src: "src/assets/p&g.svg",
    style: { height: 38 },
  },
  {
    alt: "KPIT",
    src: "src/assets/zwsite.svg",
    style: { height: 38 },
  },
];

export default function HeroSection() {
  return (
    <section className="w-full bg-transparent">
      <div className="max-w-7xl mx-auto flex flex-col items-start justify-center py-20 px-6 min-h-[60vh]">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-[2.8rem] sm:text-6xl md:text-7xl font-extrabold leading-[1.05] text-white mb-8"
          style={{
            paddingTop: "50px",
            fontFamily: "Inter, Arial, sans-serif",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
          }}
        >
          Design
          <br />
          Transform
          <br />
          Accelerate
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-lg sm:text-xl md:text-2xl text-White mt-2"
          style={{
            fontFamily: "Inter, Arial, sans-serif",
            fontWeight: 400,
            letterSpacing: "-0.01em",
            lineHeight: 1.3,
          }}
        >
          Redefining user experiences through
          <br />
          Behavioural Science &amp; AI
        </motion.p>
      </div>
      {/* Brand Row */}
      <div className="w-full border-gray-300 bg-transparent">
        <div className="max-w-7xl mx-auto flex items-center py-6 px-6">
          {/* Tagline */}
          <div className="text-white text-base whitespace-nowrap pr-8">
            Your trusted UI UX design agency.
          </div>
          {/* Divider */}
          <div className="h-10 border-l border-black mx-6" />
          {/* Animated Brand Logos */}
          <div className="relative flex-1 overflow-hidden">
            <div className="w-full h-10">
              <div className="brand-marquee flex items-center h-full gap-12">
                {/* Repeat logos twice for seamless loop */}
                {[...brands, ...brands].map((brand, idx) => (
                  <img
                    key={idx}
                    src={brand.src}
                    alt={brand.alt}
                    style={brand.style}
                    className="object-contain inline-block"
                    draggable={false}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .brand-marquee {
          animation: brand-marquee-scroll 22s linear infinite;
          will-change: transform;
        }
        @keyframes brand-marquee-scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @media (max-width: 640px) {
          h1 {
            font-size: 2.2rem !important;
          }
          p {
            font-size: 1.1rem !important;
          }
          .brand-marquee img {
            margin-left: 1.5rem;
            margin-right: 1.5rem;
            height: 28px !important;
          }
        }
      `}</style>
    </section>
  );
}
