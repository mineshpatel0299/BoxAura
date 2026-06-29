"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionBg from "../SectionBg";
import CursorRevealBg from "../CursorRevealBg";

import CubeHero from "./CubeHero";

const CUBE_IMAGES = [
  "https://res.cloudinary.com/de4pazo51/image/upload/v1781861915/WhatsApp_Image_2026-06-19_at_15.05.10_1_cythps.jpg",
  "https://res.cloudinary.com/de4pazo51/image/upload/v1781861915/WhatsApp_Image_2026-06-19_at_15.05.10_wyo6jf.jpg",
  "https://res.cloudinary.com/de4pazo51/image/upload/v1781861841/ChatGPT_Image_Jun_19_2026_01_46_12_PM_1_1_egihmx.png",
  "https://res.cloudinary.com/de4pazo51/image/upload/v1781861915/WhatsApp_Image_2026-06-19_at_15.05.10_wyo6jf.jpg",
  "https://res.cloudinary.com/de4pazo51/image/upload/v1781861840/ChatGPT_Image_Jun_19_2026_01_43_40_PM_zfkduw.png",
  "https://res.cloudinary.com/de4pazo51/image/upload/v1781861915/WhatsApp_Image_2026-06-19_at_15.05.09_1_qzulax.jpg",
];

export default function Philosophy() {
  const containerRef = useRef(null);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep(s => s + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setStep(s => s + 1);
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#EFECE5] flex flex-col items-center justify-center py-12 sm:py-24 lg:py-40 overflow-hidden border-b border-stone-400"
    >
      <CursorRevealBg />
      <SectionBg variant="left-strip" />
      
      <div className="w-full max-w-[1400px] px-4 sm:px-12 lg:px-20 relative z-10 flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-24">
        
        {/* Left Column: 3D Cube */}
        <div className="w-full lg:w-[45%] flex flex-col items-center justify-center lg:justify-start">
          <div className="relative w-full sm:w-[90%] md:w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[450px] aspect-[4/5] flex flex-col items-center justify-center">
            
            {/* Hint text above cube */}
            <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.8, duration: 1 }}
               className="mb-8 text-stone-500 text-[9px] sm:text-[10px] uppercase tracking-[0.3em] flex items-center gap-2 sm:gap-3 pointer-events-none"
            >
              <span className="w-6 sm:w-10 h-px bg-stone-400" />
              Click to rotate
              <span className="w-6 sm:w-10 h-px bg-stone-400" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
              className="relative z-20 w-full flex justify-center"
            >
              {/* Glow behind cube */}
              <div className="absolute inset-0 rounded-full blur-[80px] sm:blur-[120px] bg-stone-400/20" />
              <CubeHero step={step} onNext={handleNext} images={CUBE_IMAGES} />
            </motion.div>

          </div>
        </div>

        {/* Right Column: Typography Area */}
        <div className="w-full lg:w-[55%] flex flex-col justify-center">
          
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="flex items-center justify-center lg:justify-start gap-4 mb-6 sm:mb-10"
          >
             <span className="h-px w-8 sm:w-12 bg-stone-400" />
             <p className="font-heading text-[10px] sm:text-xs uppercase tracking-[0.35em] text-stone-500">
               Our Heritage
             </p>
          </motion.div>

          {/* Staggered Title */}
          <div className="mb-4 sm:mb-10 overflow-hidden py-2 text-center lg:text-left">
            <motion.h2
              initial={{ y: "100%", rotate: 2 }}
              whileInView={{ y: "0%", rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="text-3xl sm:text-5xl lg:text-7xl font-heading text-stone-800 tracking-tight leading-none"
            >
              The <span className="italic font-light text-stone-500">Philosophy</span>
            </motion.h2>
          </div>

          <div className="space-y-4 sm:space-y-8 max-w-xl mx-auto lg:mx-0 text-center lg:text-left text-stone-600 font-light text-[12px] sm:text-base leading-[1.7] sm:leading-relaxed tracking-wide">
            {/* Staggered Paragraphs */}
            {[
              "We redefine how celebrations begin. Every crafted box is a blend of premium fabrics and exquisite details that transform an invitation into an unforgettable first impression.",
              "With artisan craftsmanship and modern elegance, we believe your celebration deserves a beginning as beautiful as the occasion itself."
            ].map((text, i) => (
              <div key={i} className="overflow-hidden">
                 <motion.p
                   initial={{ y: "100%", opacity: 0 }}
                   whileInView={{ y: "0%", opacity: 1 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.8, delay: 0.2 + (i * 0.15), ease: [0.76, 0, 0.24, 1] }}
                 >
                   {text}
                 </motion.p>
              </div>
            ))}
          </div>

          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.6 }}
             className="mt-8 sm:mt-16 flex justify-center lg:justify-start"
          >
             <a href="/premium-wedding-invitation" className="group inline-flex items-center gap-4 sm:gap-6 cursor-pointer">
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-stone-900 font-medium">Discover More</span>
                <span className="w-12 h-px bg-stone-900 transition-all duration-300 group-hover:w-24" />
             </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
