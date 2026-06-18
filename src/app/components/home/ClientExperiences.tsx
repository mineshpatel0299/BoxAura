"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import SectionBg from "../SectionBg";

const TESTIMONIALS = [
  {
    quote:
      "The first experience that met our expectations — innovative artistry and exquisite attention to detail woven into every box. BoxAura made our wedding invitations truly unforgettable.",
    author: "Priya & Arjun",
    location: "Mumbai",
  },
  {
    quote:
      "From the velvet finish to the intricate embossing, every detail was perfect. Our guests were in awe before they even opened the invitation.",
    author: "Sneha & Rohan",
    location: "Delhi",
  },
  {
    quote:
      "BoxAura transformed our vision into a masterpiece. The quality of craftsmanship is unmatched — it set the tone for our entire celebration.",
    author: "Meera & Karan",
    location: "Jaipur",
  },
];

const IMAGES = [
  "/images/wedding_box_6.png",
  "/images/wedding_box_1.png",
  "/images/wedding_box_2.png",
];

export default function ClientExperiences() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  const goNext = useCallback(
    () => setActive((p) => (p + 1) % TESTIMONIALS.length),
    [],
  );
  const goPrev = useCallback(
    () =>
      setActive((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length),
    [],
  );

  useEffect(() => {
    const timer = setInterval(goNext, 7000);
    return () => clearInterval(timer);
  }, [goNext]);

  return (
    <section
      ref={sectionRef}
      className="relative z-20 w-full bg-[#EFECE5] flex items-stretch justify-center border-t border-stone-400/50 overflow-hidden"
    >
      <SectionBg variant="right-strip" />

      {/* Main Framed Container */}
      <div className="w-full max-w-[1400px] border-x border-stone-400 flex flex-col relative z-10">
        
        {/* Header Bar */}
        <div className="w-full border-b border-stone-400 py-8 px-6 sm:px-12 flex justify-between items-center bg-[#EFECE5]">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-stone-800 tracking-tight">
            Client <span className="italic font-light text-stone-500">Experiences</span>
          </h2>
          <div className="hidden sm:flex items-center gap-4">
            <span className="h-px w-8 bg-stone-400" />
            <p className="font-heading text-[10px] uppercase tracking-[0.35em] text-stone-500">
              Voices of Elegance
            </p>
          </div>
        </div>

        {/* Flattened Grid for Mobile Reordering */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 bg-[#EFECE5]">
          
          {/* 1. Image (Mobile: Top, Desktop: Bottom Right) */}
          <div className="col-span-1 lg:col-span-1 order-1 lg:order-3 lg:p-12 flex items-center justify-center border-b border-stone-400 lg:border-b-0">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/6] lg:aspect-[21/9] lg:max-w-[600px] overflow-hidden lg:border border-stone-400">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={IMAGES[active]}
                    alt="Client experience"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* 2. Quote (Mobile: Middle, Desktop: Top Row) */}
          <div className="col-span-1 lg:col-span-2 order-2 lg:order-1 w-full h-[280px] sm:h-[360px] lg:h-[400px] border-b border-stone-400 px-8 sm:px-16 lg:px-24 flex flex-col justify-center items-center text-center relative bg-white/30 backdrop-blur-sm">
            <span className="absolute top-4 left-4 sm:top-8 sm:left-12 text-[6rem] sm:text-[10rem] font-serif leading-none text-stone-200/50 select-none">
              "
            </span>
            <AnimatePresence mode="wait">
              <motion.p
                key={active}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 text-lg sm:text-2xl lg:text-4xl text-stone-700 font-light leading-snug sm:leading-relaxed italic max-w-4xl"
              >
                {TESTIMONIALS[active].quote}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* 3. Author & Controls (Mobile: Bottom, Desktop: Bottom Left) */}
          <div className="col-span-1 lg:col-span-1 order-3 lg:order-2 lg:border-r border-stone-400 p-8 sm:p-12 flex flex-col justify-between min-h-[180px] lg:min-h-[200px]">
            
            {/* Fixed height wrapper to prevent jumping */}
            <div className="h-[70px] lg:h-[80px] mb-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-base sm:text-xl font-medium tracking-widest uppercase text-stone-800 mb-2">
                    {TESTIMONIALS[active].author}
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="w-6 sm:w-8 h-px bg-stone-400" />
                    <p className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-stone-500">
                      {TESTIMONIALS[active].location}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center gap-4 mt-auto">
              <button
                onClick={goPrev}
                aria-label="Previous testimonial"
                className="w-10 h-10 sm:w-12 sm:h-12 border border-stone-400 flex items-center justify-center text-stone-500 hover:bg-stone-300 hover:text-stone-800 transition-colors group"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="transition-transform group-hover:-translate-x-1">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={goNext}
                aria-label="Next testimonial"
                className="w-10 h-10 sm:w-12 sm:h-12 border border-stone-400 flex items-center justify-center text-stone-500 hover:bg-stone-300 hover:text-stone-800 transition-colors group"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="transition-transform group-hover:translate-x-1">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>

              {/* Counter */}
              <div className="ml-auto font-heading text-[10px] sm:text-xs text-stone-400 tracking-[0.3em]">
                0{active + 1} / 0{TESTIMONIALS.length}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
