"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionBg from "../SectionBg";

export default function Philosophy() {
  return (
    <section className="relative w-full bg-[#EFECE5] flex items-stretch justify-center border-y border-stone-400/50 overflow-hidden">
      <SectionBg variant="left-strip" />
      
      <div className="w-full max-w-[1400px] flex flex-col md:flex-row items-stretch relative z-10">
        
        {/* Left Column: Image Area - Borders stretch full height because of items-stretch */}
        <div className="w-full md:w-[45%] lg:w-[40%] py-16 sm:py-20 px-8 sm:px-16 lg:px-20 border-x border-stone-400 flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full aspect-[3/4] sm:aspect-[2/3] max-w-[400px] overflow-hidden group"
          >
            <Image 
              src="/images/wedding_box_6.png" 
              alt="BoxAura Philosophy"
              fill
              className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>

        {/* Right Column: Text Area */}
        <div className="w-full md:w-[55%] lg:w-[60%] py-16 sm:py-20 px-10 sm:px-16 lg:px-24 flex flex-col justify-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-serif text-stone-800 mb-10 sm:mb-14 tracking-tight"
          >
            Philosophy
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-stone-700 text-sm sm:text-base leading-relaxed space-y-6 max-w-xl font-light tracking-wide"
          >
            <p>
              We open this brand with a vision to redefine how celebrations begin.
              Every box we craft is an experience — a blend of premium fabrics,
              satin finishes, velvet textures, and exquisite accessories that
              transform a simple invitation into an unforgettable first impression.
            </p>
            <p>
              From hand-picked materials to meticulous detailing, each piece
              carries the warmth of artisan craftsmanship and the elegance of
              modern design. We believe your celebration deserves a beginning as
              beautiful as the occasion itself.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
