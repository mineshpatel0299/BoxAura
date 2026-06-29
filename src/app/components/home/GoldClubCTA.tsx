"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";


export default function GoldClubCTA() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // High-end cinematic parallax
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[80vh] min-h-[500px] sm:min-h-[600px] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Parallax Background Image */}
      <motion.div style={{ y }} className="absolute inset-0 w-full h-[140%] -top-[20%] z-0">
        <Image 
          src="https://res.cloudinary.com/de4pazo51/image/upload/v1781861915/WhatsApp_Image_2026-06-19_at_15.05.10_1_cythps.jpg" 
          alt="BoxAura Craftsmanship"
          fill
          className="object-cover opacity-60 grayscale-[40%]"
          sizes="100vw"
        />
        {/* Deep, moody overlay to make white text pop */}
        <div className="absolute inset-0 bg-stone-950/80" />
      </motion.div>


      {/* Main Content Overlay */}
      <div className="relative z-10 w-full max-w-[1400px] px-4 sm:px-12 flex flex-col items-center text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-8 sm:mb-12"
        >
          <span className="h-px w-10 sm:w-16 bg-white/40" />
          <p className="font-heading text-[10px] sm:text-xs uppercase tracking-[0.35em] text-white/70">
            The BoxAura Promise
          </p>
          <span className="h-px w-10 sm:w-16 bg-white/40" />
        </motion.div>

        {/* Staggered Line Reveal for Huge Typography */}
        <div className="flex flex-col items-center gap-1 sm:gap-4 mb-8 sm:mb-10">
          <div className="overflow-hidden py-1 sm:py-2">
             <motion.h2
               initial={{ y: "100%", rotate: 2 }}
               whileInView={{ y: "0%", rotate: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
               className="text-3xl sm:text-7xl lg:text-[7rem] font-heading text-white tracking-tight leading-none"
             >
               Where Every Detail
             </motion.h2>
          </div>
          <div className="overflow-hidden py-1 sm:py-2">
             <motion.h2
               initial={{ y: "100%", rotate: -2 }}
               whileInView={{ y: "0%", rotate: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
               className="text-3xl sm:text-7xl lg:text-[7rem] font-heading tracking-tight leading-none italic font-light text-white/80"
             >
               Tells a Story
             </motion.h2>
          </div>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-white/60 text-xs sm:text-base leading-relaxed max-w-xs sm:max-w-xl font-light tracking-wide mb-10 sm:mb-14 px-2 sm:px-0"
        >
          A curated composition of premium fabrics and intricate finishes, designed for unforgettable celebrations.
        </motion.p>

        {/* Animated Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
        >
          <a
            href="https://wa.me/919999999999?text=Hi%20BoxAura!"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden inline-flex items-center justify-center border border-white/20 bg-white/10 backdrop-blur-md text-white px-8 py-4 sm:px-12 sm:py-5 text-[9px] sm:text-xs uppercase tracking-[0.2em] font-medium transition-colors hover:bg-white hover:text-stone-900"
          >
            Start Your Order
          </a>
        </motion.div>
        
      </div>
      
      {/* Footer Anchored Stats */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 sm:gap-8 text-[8px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-white/40"
      >
        <span>500+ Crafted</span>
        <span className="w-px h-4 bg-white/20" />
        <span>100% Bespoke</span>
      </motion.div>

    </section>
  );
}
