"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CubeHero from "./CubeHero";

const CUBE_IMAGES = [
  "https://res.cloudinary.com/de4pazo51/image/upload/v1781861915/WhatsApp_Image_2026-06-19_at_15.05.10_1_cythps.jpg",
  "https://res.cloudinary.com/de4pazo51/image/upload/v1781861915/WhatsApp_Image_2026-06-19_at_15.05.10_wyo6jf.jpg",
  "https://res.cloudinary.com/de4pazo51/image/upload/v1781861841/ChatGPT_Image_Jun_19_2026_01_46_12_PM_1_1_egihmx.png",
  "https://res.cloudinary.com/de4pazo51/image/upload/v1781861915/WhatsApp_Image_2026-06-19_at_15.05.10_wyo6jf.jpg",
  "https://res.cloudinary.com/de4pazo51/image/upload/v1781861840/ChatGPT_Image_Jun_19_2026_01_43_40_PM_zfkduw.png",
  "https://res.cloudinary.com/de4pazo51/image/upload/v1781861915/WhatsApp_Image_2026-06-19_at_15.05.09_1_qzulax.jpg",
];

export default function HeroSection() {
  const [step, setStep] = useState(0);

  const activeIndex = step % CUBE_IMAGES.length;
  const activeImage = CUBE_IMAGES[activeIndex];

  const handleNext = () => {
    setStep(s => s + 1);
  };

  return (
    <section className="relative w-full min-h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-stone-950 pt-20 lg:pt-28 pb-8">
      {/* Background Crossfade */}
      <AnimatePresence initial={false}>
        <motion.div
          key={step}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${activeImage})` }}
          />
          {/* Elegant dark overlay for contrast */}
          <div className="absolute inset-0 bg-stone-950/75 backdrop-blur-[6px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-900/50" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 lg:px-12 flex-1 flex flex-col items-center justify-center min-h-full">

        {/* Top Typography */}
        <div className="text-center mb-6 sm:mb-10 lg:mb-12 mt-4 md:mt-0">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-stone-400 uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[9px] sm:text-[10px] md:text-[11px] mb-6 sm:mb-8 font-light"
          >
            BoxAura Unveiled
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[6rem] font-serif text-white font-light leading-[1.05] tracking-tight"
          >
            The Art of <br />
            <span className="italic text-stone-300/90 font-light pr-2 sm:pr-4">Impressions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-stone-400 text-xs sm:hidden mt-6 px-4 font-light leading-relaxed max-w-[300px] mx-auto"
          >
            Elevating celebrations with premium handcrafted boxes and exquisite invitations.
          </motion.p>
        </div>

        {/* Cube Container */}
        <div className="relative w-full flex flex-col items-center justify-center mb-10 sm:mb-12 lg:mb-16">
          <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
             className="z-20 relative"
          >
             {/* Glow behind cube */}
             <div className="absolute inset-0 rounded-full blur-[80px] sm:blur-[120px] bg-white/10" />
             <CubeHero step={step} onNext={handleNext} images={CUBE_IMAGES} />
          </motion.div>

          {/* Hint text */}
          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 1.5, duration: 1 }}
             className="absolute -bottom-8 sm:-bottom-10 text-stone-500 text-[8px] sm:text-[9px] uppercase tracking-[0.3em] flex items-center gap-2 sm:gap-3 pointer-events-none"
          >
            <span className="w-6 sm:w-10 h-[1px] bg-stone-700" />
            Click to rotate
            <span className="w-6 sm:w-10 h-[1px] bg-stone-700" />
          </motion.div>
        </div>

        {/* Bottom Details (Centered) */}
        <div className="w-full flex flex-col items-center text-center text-white mt-auto">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.8, duration: 0.8 }}
             className="flex flex-col items-center max-w-[280px] sm:max-w-lg mx-auto"
          >
            <a href="/premium-wedding-invitation" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white px-8 py-3.5 sm:px-10 sm:py-4 text-[9px] sm:text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-stone-950 transition-all duration-500 w-max">
               Explore Collection
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
