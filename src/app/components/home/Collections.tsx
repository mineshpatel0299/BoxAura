"use client";

import { useState, useRef, useMemo, RefObject, createRef, useEffect } from "react";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import SectionBg from "../SectionBg";
import RosePetals from "./RosePetals";

const COLLECTIONS = [
  {
    image:
      "https://res.cloudinary.com/de4pazo51/image/upload/v1781696656/box_F_sample-6_reb2ss.png",
    title: "Timeless",
    subtitle: "Elegance Redefined",
    category: "Signature Collection",
  },
  {
    image: "https://res.cloudinary.com/de4pazo51/image/upload/v1781861915/WhatsApp_Image_2026-06-19_at_15.05.10_1_cythps.jpg",
    title: "Wedding",
    subtitle: "Love in Every Detail",
    category: "Bespoke Event",
  },
  {
    image: "https://res.cloudinary.com/de4pazo51/image/upload/v1781861915/WhatsApp_Image_2026-06-19_at_15.05.09_1_qzulax.jpg",
    title: "Festive",
    subtitle: "Celebrate in Style",
    category: "Seasonal Edition",
  },
  {
    image: "https://res.cloudinary.com/de4pazo51/image/upload/v1781861841/ChatGPT_Image_Jun_19_2026_01_46_12_PM_1_1_egihmx.png",
    title: "Premium",
    subtitle: "Crafted to Perfection",
    category: "Luxury Line",
  },
  {
    image: "https://res.cloudinary.com/de4pazo51/image/upload/v1781861840/ChatGPT_Image_Jun_19_2026_01_43_40_PM_zfkduw.png",
    title: "Custom",
    subtitle: "Your Vision, Our Craft",
    category: "Personalized",
  },
];

// Helper component to bind scroll progress to image wipe effect
function StickyImage({ 
  item, 
  index, 
  rowRef 
}: { 
  item: typeof COLLECTIONS[0]; 
  index: number; 
  rowRef: RefObject<HTMLDivElement | null> 
}) {
  const { scrollYProgress } = useScroll({
    target: rowRef,
    // The wipe starts when the row's top is at 60% of viewport and finishes at 40%
    offset: ["start 65%", "start 35%"],
  });

  // First image is always visible base. Subsequent images wipe from bottom.
  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    index === 0 ? ["inset(0% 0 0 0)", "inset(0% 0 0 0)"] : ["inset(100% 0 0 0)", "inset(0% 0 0 0)"]
  );

  return (
    <motion.div
      style={{ clipPath, zIndex: index }}
      className="absolute inset-0 w-full h-full"
    >
      <div className="absolute inset-0 bg-[#EFECE5] p-2 shadow-sm border border-stone-300/50">
        <div className="relative w-full h-full bg-stone-200 overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 0vw, 280px"
            priority={index === 0}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function Collections() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Stable refs for scroll spy binding
  const rowRefs = useMemo(
    () => COLLECTIONS.map(() => createRef<HTMLDivElement>()),
    []
  );

  // Auto-scroll to center & Close expanded item on scroll
  useEffect(() => {
    if (expanded === null) return;

    let isAutoScrolling = true;
    let startY = window.scrollY;

    const el = rowRefs[expanded]?.current;
    if (el) {
      // Small delay to let the AnimatePresence layout settle
      setTimeout(() => {
        const y = el.getBoundingClientRect().top + window.scrollY;
        // The image is ~500px tall and starts after ~80px padding.
        // Its center is roughly at y + 330.
        // We want this center to align with the vertical center of the viewport (window.innerHeight / 2),
        // exactly matching the sticky static image's vertical position.
        const targetY = y + 330 - (window.innerHeight / 2);
        
        window.scrollTo({
          top: targetY,
          behavior: "smooth"
        });

        // After the smooth scroll finishes, update startY and enable close-on-scroll
        setTimeout(() => {
          isAutoScrolling = false;
          startY = window.scrollY;
        }, 800);
      }, 50);
    } else {
      isAutoScrolling = false;
    }

    const handleScroll = () => {
      if (isAutoScrolling) return;
      if (Math.abs(window.scrollY - startY) > 50) {
        setExpanded(null);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [expanded]);

  return (
    <section ref={sectionRef} className="relative bg-[#EFECE5] py-20 sm:py-28 text-stone-900 font-sans border-t border-stone-400/50">
      <SectionBg variant="bottom-left" />
      <RosePetals count={6} />
      <div className="mx-auto max-w-[1400px] px-6 sm:px-12 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 sm:mb-24"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-12 bg-stone-400" />
            <p className="font-heading text-xs font-medium uppercase tracking-[0.35em] text-stone-500">
              The Catalog
            </p>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-serif text-stone-800 tracking-tight leading-tight max-w-3xl">
            Curated <br className="hidden sm:block" /> <span className="italic font-light text-stone-500">Masterpieces</span>
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative w-full mt-12 md:mt-16"
        >
          {/* Sticky Center Image - Hidden on Mobile */}
          <div className="hidden md:flex sticky top-[50vh] -translate-y-1/2 w-full h-0 z-20 justify-center pointer-events-none">
            <div className="relative w-[280px] h-[350px] -mt-[175px]">
              {COLLECTIONS.map((item, index) => (
                <StickyImage 
                  key={index} 
                  item={item} 
                  index={index} 
                  rowRef={rowRefs[index]} 
                />
              ))}
            </div>
          </div>

          {/* Scrolling Rows */}
          <div className="relative z-10 flex flex-col pb-32">
            {COLLECTIONS.map((item, index) => {
              const isExpanded = expanded === index;

              return (
                <div
                  key={index}
                  ref={rowRefs[index]}
                  className="border-b border-stone-300 relative group"
                >
                  {/* Subtle hover background highlight */}
                  <div className="absolute inset-0 bg-stone-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Accordion Content (Secondary Image / Details) - Now positioned ABOVE the title */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden relative z-10"
                      >
                        <div className="pt-12 md:pt-20 pb-4 flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
                          {/* Large image coming from behind static image */}
                          <div className="relative w-full lg:w-[50%] aspect-[4/3] bg-stone-200 border border-stone-300/50 shadow-sm p-1">
                             <div className="relative w-full h-full">
                               <Image 
                                 src={item.image} 
                                 alt={item.title} 
                                 fill 
                                 className="object-cover" 
                               />
                             </div>
                          </div>
                          
                          {/* <div className="w-full lg:w-[35%] text-stone-600 text-sm md:text-base leading-relaxed lg:pt-4">
                             <h4 className="text-xl text-stone-900 font-medium mb-4">{item.category}</h4>
                             <button className="mt-8 text-stone-500 font-medium tracking-widest uppercase hover:text-stone-800 transition-colors flex items-center gap-2">
                               design my visit <span className="text-lg leading-none">→</span>
                             </button>
                          </div> */}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Row Header (Title, Spacer, Category) */}
                  <div className={`flex flex-col md:flex-row md:items-center w-full relative z-10 transition-all duration-500 pb-12 md:pb-24 ${isExpanded ? 'pt-6 md:pt-8' : 'pt-12 md:pt-24 min-h-[120px] md:min-h-[400px]'}`}>
                    
                    {/* Left Column: Title (Clickable) */}
                    <div 
                      className="w-full md:w-[40%] flex-shrink-0 cursor-pointer pr-4 mb-4 md:mb-0"
                      onClick={() => setExpanded(isExpanded ? null : index)}
                    >
                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.1] text-stone-900 transition-colors duration-500 group-hover:text-stone-600">
                        "{item.title}: <br className="hidden lg:block" /> {item.subtitle}"
                      </h3>
                    </div>

                    {/* Center Column Spacer */}
                    <div className="hidden md:block w-[20%] flex-shrink-0 pointer-events-none" />

                    {/* Right Column: Category */}
                    <div className="w-full md:w-[40%] flex md:justify-end items-center pl-0 md:pl-4">
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-stone-800 opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
                        <span className="text-sm md:text-base font-medium tracking-wide text-stone-600 group-hover:text-stone-900 transition-colors duration-500">
                          {item.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
