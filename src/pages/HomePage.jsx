import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import { TbArrowNarrowLeft, TbArrowNarrowRight } from "react-icons/tb";

// Utility for classnames (optional, fallback to join if not present)
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const testimonialAni = {
  variants: {
    initial: (c) => ({
      transform: `translateX(${20 * c}px)`,
      filter: "blur(4px)",
      opacity: 0,
    }),
    animate: () => ({
      transform: "translateX(0px)",
      filter: "blur(0px)",
      opacity: 1,
    }),
    exit: (c) => ({
      transform: `translateX(${-20 * c}px)`,
      filter: "blur(4px)",
      opacity: 0,
    }),
  },
  initial: "initial",
  animate: "animate",
  exit: "exit",
};

function AnimatedBlurTestimonials({
  data,
  delayDuration = 8,
  _duration = 0.4,
}) {
  const [count, setCount] = useState(0);
  const [dir, setDir] = useState(1);
  const [height, setHeight] = useState("auto");
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.offsetHeight);
    }
  }, [count]);

  useEffect(() => {
    const int = setInterval(() => {
      setCount((count) => (count + 1) % data.length);
      setDir(1);
    }, delayDuration * 1000);
    return () => clearInterval(int);
  }, [count, data.length, delayDuration]);

  return (
    <MotionConfig
      transition={{ type: "spring", duration: _duration, bounce: 0 }}
    >
      <div className="grid gap-4 select-none">
        <div className="mb-2 flex -space-x-2">
          {data.map((i, idx) => (
            <motion.button
              onClick={() => setCount(idx)}
              key={idx}
              initial={false}
              animate={{
                scale: idx === count ? 1.3 : 1,
                zIndex: idx === count ? 1 : 0,
              }}
              aria-label={`Select testimonial ${idx + 1}`}
              className="focus:outline-none"
              tabIndex={0}
            >
              <Avatar src={i.avatar.src} fallback={i.avatar.fallback} />
            </motion.button>
          ))}
        </div>

        <motion.div
          initial={false}
          animate={{ height: height ? height : "auto" }}
          className={cn(
            "bg-slate-900 border border-slate-700",
            "relative z-10 overflow-hidden rounded-xl"
          )}
        >
          <div ref={ref} className="h-fit p-4">
            <AnimatePresence mode="popLayout" custom={dir} initial={false}>
              <motion.p
                {...testimonialAni}
                custom={dir}
                key={count}
                className="text-slate-200 font-medium"
                aria-live="polite"
              >
                {data[count].message}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>

        <div className="grid grid-cols-[60%_1fr] px-2">
          <div className="flex items-center gap-1">
            {Array.from({ length: data.length }).map((_, i) => (
              <motion.button
                key={`progress-${i}`}
                role="button"
                onClick={() => setCount(i)}
                initial={{ width: i === count ? 64 : 18 }}
                animate={{ width: i === count ? 64 : 18 }}
                className={cn(
                  "bg-slate-200/10 h-[6px] cursor-pointer overflow-hidden rounded-xl border-none p-0"
                )}
                style={{ border: "none" }}
                tabIndex={0}
              >
                {count === i && (
                  <motion.div
                    className="bg-slate-200/40 float-right h-full rounded-xl"
                    transition={{ duration: delayDuration }}
                    initial={{ width: "100%" }}
                    animate={{ width: ["100%", "0%"] }}
                  />
                )}
              </motion.button>
            ))}
          </div>
          <div className="text-slate-400 flex justify-end gap-2">
            <button
              onClick={() => {
                setCount((count) => (count - 1 + data.length) % data.length);
                setDir(-1);
              }}
              className="hover:bg-slate-200/10 flex size-8 cursor-pointer items-center justify-center rounded-md transition-colors active:scale-[0.95]"
              aria-label="Previous testimonial"
              tabIndex={0}
            >
              <TbArrowNarrowLeft size={24} />
            </button>
            <button
              onClick={() => {
                setCount((count) => (count + 1) % data.length);
                setDir(1);
              }}
              className="hover:bg-slate-200/10 flex size-8 cursor-pointer items-center justify-center rounded-md transition-colors active:scale-[0.95]"
              aria-label="Next testimonial"
              tabIndex={0}
            >
              <TbArrowNarrowRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </MotionConfig>
  );
}

function Avatar({ src, fallback }) {
  return (
    <div className="ring-slate-900 relative flex size-9 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-white/10 ring-2 backdrop-blur-xl">
      {src ? (
        <img
          src={src}
          draggable={false}
          alt="testimonial image"
          className="absolute inset-0 object-cover w-full h-full"
        />
      ) : (
        fallback
      )}
    </div>
  );
}

export default function HomePage() {
  // Testimonial data
  const TESTIMONIALS = [
    {
      avatar: { src: "https://randomuser.me/api/portraits/lego/4.jpg" },
      message:
        "The hero and navbar feel polished and fast. Smooth scroll and centered section jumps make navigation effortless.",
    },
    {
      avatar: { src: "https://randomuser.me/api/portraits/lego/6.jpg" },
      message:
        "Love the micro‑interactions. Framer Motion adds just enough motion without getting in the way.",
    },
    {
      avatar: { src: "https://randomuser.me/api/portraits/men/34.jpg" },
      message:
        "Responsive across devices. The layout scales neatly from mobile to desktop with consistent spacing.",
    },
    {
      avatar: { src: "https://randomuser.me/api/portraits/lego/2.jpg" },
      message:
        "The dark theme and card design for Services and Projects look professional and accessible.",
    },
    {
      avatar: { src: "https://randomuser.me/api/portraits/lego/1.jpg" },
      message:
        "Codebase is clean: semantic sections, utility classes, and clear animation variants. Easy to maintain.",
    },
  ];

  return (
    <section className="mt-28 mb-16 flex flex-col items-center">
      <h3 className="text-3xl md:text-4xl font-extrabold mb-8 text-center">
        What Our Clients Say
      </h3>
      <div className="w-full max-w-3xl md:max-w-4xl">
        <AnimatedBlurTestimonials data={TESTIMONIALS} delayDuration={7} />
      </div>
    </section>
  );
}
