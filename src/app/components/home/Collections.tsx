"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import SectionBg from "../SectionBg";

const SLIDES = [
  {
    image: "/images/wedding_box_1.png",
    title: "Collections",
    subtitle: "Timeless Elegance",
  },
  {
    image: "/images/wedding_box_2.png",
    title: "Wedding",
    subtitle: "Love in Every Detail",
  },
  {
    image: "/images/wedding_box_3.png",
    title: "Festive",
    subtitle: "Celebrate in Style",
  },
  {
    image: "/images/wedding_box_4.png",
    title: "Premium",
    subtitle: "Crafted to Perfection",
  },
  {
    image: "/images/wedding_box_5.png",
    title: "Custom",
    subtitle: "Your Vision, Our Craft",
  },
];

export default function Collections() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  const goNext = useCallback(
    () => setActive((p) => (p + 1) % SLIDES.length),
    [],
  );
  const goPrev = useCallback(
    () => setActive((p) => (p - 1 + SLIDES.length) % SLIDES.length),
    [],
  );

  useEffect(() => {
    const timer = setInterval(goNext, 6000);
    return () => clearInterval(timer);
  }, [goNext]);

  return (
    <section ref={sectionRef} className="relative py-28 sm:py-36 overflow-hidden">
      <SectionBg />
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-end justify-between mb-14"
        >
          <div>
            <p className="font-heading text-xs font-medium uppercase tracking-[0.3em] text-rose-300 mb-4">
              Curated for You
            </p>
            <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-light text-stone-800">
              Collections
            </h2>
          </div>

          {/* Arrows */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={goPrev}
              aria-label="Previous slide"
              className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 hover:border-rose-300 hover:text-rose-400 transition-all duration-300"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goNext}
              aria-label="Next slide"
              className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 hover:border-rose-300 hover:text-rose-400 transition-all duration-300"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Main showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Main image */}
          <div className="relative w-full aspect-[16/9] sm:aspect-[2.2/1] rounded-3xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={SLIDES[active].image}
                  alt={SLIDES[active].title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority={active === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
              </motion.div>
            </AnimatePresence>

            {/* Overlay text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="text-center"
                >
                  <p className="font-heading text-xs sm:text-sm uppercase tracking-[0.4em] text-white/60 mb-3">
                    {SLIDES[active].subtitle}
                  </p>
                  <h3 className="font-heading text-5xl sm:text-7xl lg:text-9xl font-light uppercase tracking-[0.15em] text-white drop-shadow-2xl">
                    {SLIDES[active].title}
                  </h3>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom gradient bar with counter */}
            <div className="absolute bottom-0 left-0 right-0 px-8 pb-6 flex items-end justify-between z-10">
              <span className="font-heading text-sm tracking-[0.2em] text-white/50">
                {String(active + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
              </span>

              {/* Progress dots */}
              <div className="flex items-center gap-2">
                {SLIDES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className="relative h-[2px] overflow-hidden rounded-full transition-all duration-500"
                    style={{ width: i === active ? 40 : 16 }}
                  >
                    <span className="absolute inset-0 bg-white/30" />
                    {i === active && (
                      <motion.span
                        className="absolute inset-0 bg-white"
                        initial={{ scaleX: 0, transformOrigin: "left" }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 6, ease: "linear" }}
                        key={`progress-${active}`}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Thumbnail strip */}
          <div className="mt-6 flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {SLIDES.map((slide, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`relative shrink-0 w-20 sm:w-24 aspect-[4/3] rounded-xl overflow-hidden transition-all duration-500 ${
                  i === active
                    ? "ring-2 ring-rose-300 ring-offset-2 ring-offset-[#fdf6f0] opacity-100"
                    : "opacity-40 hover:opacity-70"
                }`}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
