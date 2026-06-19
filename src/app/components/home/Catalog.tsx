"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useSpring, useTransform, AnimatePresence } from "framer-motion";
import SectionBg from "../SectionBg";

const PRODUCTS = [
  {
    id: "01",
    image: "https://res.cloudinary.com/de4pazo51/image/upload/v1781861915/WhatsApp_Image_2026-06-19_at_15.05.10_1_cythps.jpg",
    name: "Signature Heritage",
    desc: "A testament to timeless elegance.",
  },
  {
    id: "02",
    image: "https://res.cloudinary.com/de4pazo51/image/upload/v1781861915/WhatsApp_Image_2026-06-19_at_15.05.10_wyo6jf.jpg",
    name: "Obsidian Reserve",
    desc: "Bold, modern, and deeply luxurious.",
  },
  {
    id: "03",
    image: "https://res.cloudinary.com/de4pazo51/image/upload/v1781861840/ChatGPT_Image_Jun_19_2026_01_43_40_PM_zfkduw.png",
    name: "Lumina Prisma",
    desc: "Radiant textures capturing pure light.",
  },
  {
    id: "04",
    image: "https://res.cloudinary.com/de4pazo51/image/upload/v1781861915/WhatsApp_Image_2026-06-19_at_15.05.09_1_qzulax.jpg",
    name: "Silk Cascade",
    desc: "Uncompromising quality & detailing.",
  },
];

export default function Catalog() {
  const [active, setActive] = useState(0);

  // Custom cursor logic for the image area
  const cursorX = useSpring(0, { stiffness: 400, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 400, damping: 28 });
  const [isHoveringImage, setIsHoveringImage] = useState(false);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isHoveringImage && imageContainerRef.current) {
        const rect = imageContainerRef.current.getBoundingClientRect();
        // Calculate center-relative coordinates
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        cursorX.set(x);
        cursorY.set(y);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isHoveringImage, cursorX, cursorY]);

  // Magnetic Image Effect (moves slightly in opposite direction of mouse for parallax)
  const imageX = useTransform(cursorX, [-300, 300], [15, -15]);
  const imageY = useTransform(cursorY, [-300, 300], [15, -15]);

  return (
    <section className="relative w-full bg-[#EFECE5] flex flex-col items-center justify-center overflow-hidden py-24 sm:py-32">
      <SectionBg variant="top-right" />
      
      <div className="w-full max-w-[1400px] px-6 sm:px-12 lg:px-20 relative z-10 flex flex-col">
        
        {/* Header Bar */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end mb-16 lg:mb-24">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-serif text-stone-800 tracking-tight leading-none">
            Curated <span className="italic font-light text-stone-500">Catalog</span>
          </h2>
          <div className="flex items-center gap-4 mt-8 md:mt-0">
            <span className="h-px w-12 bg-stone-400" />
            <p className="font-heading text-[10px] sm:text-xs uppercase tracking-[0.35em] text-stone-500">
              The Collection
            </p>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex flex-col-reverse lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left: Typography List */}
          <div className="w-full lg:w-[55%] flex flex-col">
            {PRODUCTS.map((product, index) => {
              const isActive = active === index;
              return (
                <div 
                  key={product.id}
                  onMouseEnter={() => setActive(index)}
                  className="group relative flex items-center py-6 sm:py-10 border-b border-stone-300 cursor-pointer"
                >
                  {/* Number */}
                  <span className={`font-heading text-xs sm:text-sm tracking-widest transition-colors duration-500 w-12 sm:w-16 flex-shrink-0 ${isActive ? 'text-stone-900' : 'text-stone-400'}`}>
                    {product.id}
                  </span>

                  {/* Title & Desc Wrapper */}
                  <div className="flex flex-col flex-grow relative overflow-hidden">
                    <motion.h3 
                      animate={{ x: isActive ? 10 : 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      className={`text-3xl sm:text-4xl lg:text-5xl font-serif transition-colors duration-500 ${isActive ? 'text-stone-900' : 'text-stone-400'}`}
                    >
                      {product.name}
                    </motion.h3>
                    
                    {/* Expandable description */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1, marginTop: "0.75rem" }}
                          exit={{ height: 0, opacity: 0, marginTop: 0 }}
                          transition={{ duration: 0.4 }}
                          className="text-stone-500 text-sm sm:text-base font-light max-w-sm ml-2.5"
                        >
                          {product.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Arrow Indicator */}
                  <motion.div 
                    animate={{ 
                      x: isActive ? 0 : -10, 
                      opacity: isActive ? 1 : 0 
                    }}
                    className="flex-shrink-0 text-stone-900 ml-4 hidden sm:block"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                       <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* Right: Editorial Image Reveal */}
          <div className="w-full lg:w-[45%] flex justify-center lg:justify-end">
            <div 
              ref={imageContainerRef}
              onMouseEnter={() => setIsHoveringImage(true)}
              onMouseLeave={() => {
                setIsHoveringImage(false);
                cursorX.set(0);
                cursorY.set(0);
              }}
              className="relative w-full max-w-[500px] aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-stone-200"
            >
               {PRODUCTS.map((product, index) => {
                 const isActive = active === index;
                 return (
                   <motion.div
                     key={product.id}
                     initial={false}
                     animate={{
                       clipPath: isActive ? "inset(0% 0% 0% 0%)" : "inset(100% 0% 0% 0%)",
                       zIndex: isActive ? 10 : 0
                     }}
                     transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                     className="absolute inset-0"
                   >
                      <motion.div 
                         style={{ x: imageX, y: imageY }}
                         className="absolute inset-[-30px]"
                      >
                         <Image 
                           src={product.image}
                           alt={product.name}
                           fill
                           className="object-cover"
                           sizes="(max-width: 1024px) 100vw, 500px"
                           priority={index === 0}
                         />
                      </motion.div>
                   </motion.div>
                 );
               })}

               {/* Custom View Cursor */}
               <motion.div
                 style={{
                   x: cursorX,
                   y: cursorY,
                   opacity: isHoveringImage ? 1 : 0,
                   scale: isHoveringImage ? 1 : 0.5,
                 }}
                 transition={{ opacity: { duration: 0.3 }, scale: { duration: 0.3 } }}
                 className="hidden lg:flex absolute top-1/2 left-1/2 -mt-10 -ml-10 w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white items-center justify-center pointer-events-none z-20 shadow-lg"
               >
                  <span className="text-[10px] tracking-widest font-medium uppercase drop-shadow-md">
                    View
                  </span>
               </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
