"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionBg from "../SectionBg";
import RosePetals from "./RosePetals";

export default function Philosophy() {
  const containerRef = useRef(null);
  
  // Subtle parallax for the image
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#EFECE5] flex flex-col items-center justify-center py-12 sm:py-24 lg:py-40 overflow-hidden border-b border-stone-400"
    >
      <SectionBg variant="left-strip" />
      <RosePetals count={8} />
      
      <div className="w-full max-w-[1400px] px-4 sm:px-12 lg:px-20 relative z-10 flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-24">
        
        {/* Left Column: Cinematic Image */}
        <div className="w-full lg:w-[45%] flex justify-center lg:justify-start">
          <div className="relative w-full sm:w-[90%] md:w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[450px] aspect-[4/5] bg-stone-200">
            {/* Mask Reveal container */}
            <motion.div 
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              whileInView={{ clipPath: "inset(0% 0 0 0)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
              className="absolute inset-0 overflow-hidden"
            >
              <motion.div 
                style={{ y: imageY }}
                className="absolute inset-[-15%]" // extra space for parallax
              >
                <Image 
                  src="https://res.cloudinary.com/de4pazo51/image/upload/v1781861915/WhatsApp_Image_2026-06-19_at_15.05.10_wyo6jf.jpg" 
                  alt="BoxAura Philosophy"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
              </motion.div>
            </motion.div>
            
            {/* Decorative Outline Frame offset */}
            <motion.div 
              initial={{ opacity: 0, x: -10, y: 10 }}
              whileInView={{ opacity: 1, x: 12, y: -12 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              className="absolute inset-0 border border-stone-400 pointer-events-none z-10"
            />
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
              "We open this brand with a vision to redefine how celebrations begin. Every box we craft is an experience — a blend of premium fabrics, satin finishes, velvet textures, and exquisite accessories that transform a simple invitation into an unforgettable first impression.",
              "From hand-picked materials to meticulous detailing, each piece carries the warmth of artisan craftsmanship and the elegance of modern design. We believe your celebration deserves a beginning as beautiful as the occasion itself."
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
