"use client";

import { motion } from "framer-motion";
import CubeHero from "./CubeHero";
import SectionBg from "../SectionBg";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-[#EFECE5] flex items-stretch justify-center overflow-hidden border-b border-stone-400">
      <SectionBg variant="corner-both" />

      {/* Main Framed Container */}
      <div className="w-full max-w-[1400px] border-x border-stone-400 flex flex-col relative z-10 min-h-[100svh]">
        
        {/* =========================================
            MOBILE LAYOUT (< md)
            ========================================= */}
        <div className="md:hidden relative w-full h-full flex flex-col items-center justify-between p-8 pt-24 pb-16 flex-1">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl sm:text-6xl font-serif text-stone-800 tracking-tighter leading-[0.9]">
              THE ART<br/>
              <span className="italic font-light text-stone-500">OF</span><br/>
              <span className="italic font-light text-stone-500">IMPRESSIONS</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="scale-125 z-20 my-10"
          >
            <CubeHero />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col items-center text-center max-w-[280px]"
          >
            <p className="text-stone-600 font-light text-xs sm:text-sm leading-relaxed mb-6">
              Bespoke wedding invitation boxes, hand-finished to perfection.
            </p>
            <a 
              href="/premium-wedding-invitation" 
              className="w-full inline-flex items-center justify-center border border-stone-800 bg-stone-800 text-white px-8 py-3.5 text-[10px] sm:text-xs uppercase tracking-[0.2em] hover:bg-stone-700 transition-colors"
            >
              Explore Collection
            </a>
          </motion.div>
        </div>

        {/* =========================================
            DESKTOP "MAGAZINE" LAYOUT (md+)
            ========================================= */}
        <div className="hidden md:flex flex-col w-full h-full flex-1 pt-24 pb-12">
          
          {/* Top Row: Massive Magazine Typography spanning full width */}
          <div className="w-full px-12 py-12 lg:py-16 border-b border-stone-400 text-center flex flex-col justify-center items-center">
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               className="flex items-center gap-4 mb-8"
             >
               <span className="h-px w-12 bg-stone-400" />
               <p className="font-heading text-xs uppercase tracking-[0.4em] text-stone-500">BoxAura Unveiled</p>
               <span className="h-px w-12 bg-stone-400" />
             </motion.div>
             <motion.h1 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, delay: 0.1 }}
               className="text-[6vw] xl:text-[6.5rem] font-serif text-stone-800 tracking-tighter leading-[0.9] uppercase"
             >
                THE ART OF <span className="italic font-light text-stone-500 normal-case">Impressions</span>
             </motion.h1>
          </div>

          {/* Bottom Row: 3-Column Split */}
          <div className="w-full flex-1 flex flex-row min-h-[500px]">
             
             {/* Left Col (30%): Description & CTAs */}
             <div className="w-[30%] border-r border-stone-400 p-10 xl:p-14 flex flex-col justify-end">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <p className="text-stone-600 font-light text-sm lg:text-base leading-relaxed mb-10">
                     Bespoke wedding invitation boxes, meticulously hand-finished to perfection — where profound luxury meets unforgettable celebration.
                  </p>
                  <a href="/premium-wedding-invitation" className="inline-flex items-center justify-center border border-stone-800 bg-stone-800 text-white px-8 py-4 text-[10px] lg:text-xs uppercase tracking-[0.2em] hover:bg-stone-700 transition-colors w-max">
                     Explore Collection
                  </a>
                </motion.div>
             </div>

             {/* Middle Col (45%): The Cube */}
             <div className="w-[45%] flex items-center justify-center relative">
                 <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="scale-[0.9] lg:scale-105 xl:scale-125 z-20"
                 >
                     <CubeHero />
                 </motion.div>
             </div>

             {/* Right Col (25%): Stats */}
             <div className="w-[25%] border-l border-stone-400 p-10 xl:p-14 flex flex-col justify-end items-end text-right">
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="flex flex-col gap-8 text-[10px] uppercase tracking-[0.3em] text-stone-500"
                >
                   <div>
                     <p className="text-2xl xl:text-3xl font-serif text-stone-800 tracking-tight capitalize mb-1">500+</p>
                     <p>Weddings</p>
                   </div>
                   <div className="w-12 h-px bg-stone-400 ml-auto" />
                   <div>
                     <p className="text-2xl xl:text-3xl font-serif text-stone-800 tracking-tight capitalize mb-1">Pan India</p>
                     <p>Delivery</p>
                   </div>
                   <div className="w-12 h-px bg-stone-400 ml-auto" />
                   <div>
                     <p className="text-2xl xl:text-3xl font-serif text-stone-800 tracking-tight capitalize mb-1">100%</p>
                     <p>Bespoke</p>
                   </div>
                </motion.div>
             </div>

          </div>

        </div>

      </div>
    </section>
  );
}
