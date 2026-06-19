"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const TESTIMONIALS = [
  {
    quote: "The first experience that met our expectations — innovative artistry and exquisite attention to detail woven into every box. BoxAura made our wedding invitations truly unforgettable.",
    author: "Priya & Arjun",
    location: "Mumbai",
  },
  {
    quote: "From the velvet finish to the intricate embossing, every detail was perfect. Our guests were in awe before they even opened the invitation.",
    author: "Sneha & Rohan",
    location: "Delhi",
  },
  {
    quote: "BoxAura transformed our vision into a masterpiece. The quality of craftsmanship is unmatched — it set the tone for our entire celebration.",
    author: "Meera & Karan",
    location: "Jaipur",
  },
];

const IMAGES = [
  "https://res.cloudinary.com/de4pazo51/image/upload/v1781865563/box_F_sample-2.1_kofhcn.png",
  "https://res.cloudinary.com/de4pazo51/image/upload/v1781865563/box_F_sample-2.3_hrfbhm.png",
  "https://res.cloudinary.com/de4pazo51/image/upload/v1781865563/box_F_sample-2.2_p6edgp.png",
];

export default function ClientExperiences() {
  const [active, setActive] = useState(0);

  const goNext = useCallback(() => setActive((p) => (p + 1) % TESTIMONIALS.length), []);

  useEffect(() => {
    const timer = setInterval(goNext, 8000);
    return () => clearInterval(timer);
  }, [goNext]);

  return (
    <section className="relative w-full bg-stone-950 flex flex-col lg:flex-row min-h-[100svh] overflow-hidden border-t border-stone-800">
      {/* Left side: Imagery */}
      <div className="relative w-full lg:w-1/2 h-[50vh] sm:h-[60vh] lg:h-auto overflow-hidden bg-stone-900">
        <AnimatePresence initial={false}>
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={IMAGES[active]}
              alt={`BoxAura Craftsmanship ${active + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            {/* Overlay to blend with dark theme */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/20 lg:bg-gradient-to-r lg:from-transparent lg:to-stone-950" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Right side: Content */}
      <div className="relative w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 lg:px-24 py-16 lg:py-32 bg-[#EFECE5]">
        
        <div className="flex items-center gap-4 mb-12 lg:mb-24">
          <span className="w-8 sm:w-12 h-px bg-stone-300" />
          <span className="font-heading text-[9px] sm:text-[10px] uppercase tracking-[0.4em] text-stone-500">
            Voices of Elegance
          </span>
        </div>

        <div className="flex-1 flex flex-col justify-center relative min-h-[250px] sm:min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0 flex flex-col justify-center"
            >
              {/* Massive Quote Mark */}
              <span className="text-stone-300 text-6xl sm:text-8xl font-serif leading-none absolute -top-6 sm:-top-12 -left-2 sm:-left-8 opacity-50 select-none">
                "
              </span>
              
              <h3 className="text-2xl sm:text-3xl lg:text-[2.5rem] text-stone-800 font-serif font-light leading-[1.5] sm:leading-[1.5] lg:leading-[1.4] mb-8 sm:mb-12 relative z-10">
                {TESTIMONIALS[active].quote}
              </h3>

              <div className="mt-auto pt-4 border-t border-stone-300 w-max">
                <p className="text-[11px] sm:text-xs font-medium tracking-[0.2em] uppercase text-stone-900 mb-1 sm:mb-2">
                  {TESTIMONIALS[active].author}
                </p>
                <p className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-stone-500">
                  {TESTIMONIALS[active].location}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Custom Navigation */}
        <div className="flex items-center justify-between mt-12 sm:mt-16 lg:mt-24">
          <div className="flex items-center gap-4 sm:gap-6">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="group py-2 flex flex-col gap-2"
                aria-label={`Go to testimonial ${i + 1}`}
              >
                <span className={`text-[9px] sm:text-[10px] tracking-widest transition-colors duration-500 ${
                  active === i ? "text-stone-900" : "text-stone-400 group-hover:text-stone-600"
                }`}>
                  0{i + 1}
                </span>
                <span 
                  className={`block h-px transition-all duration-500 ${
                    active === i ? 'w-8 sm:w-12 bg-stone-900' : 'w-4 bg-stone-300 group-hover:bg-stone-400 group-hover:w-6'
                  }`}
                />
              </button>
            ))}
          </div>
          
          <div className="font-heading text-[9px] sm:text-[10px] tracking-[0.3em] text-stone-600">
            0{active + 1} / 0{TESTIMONIALS.length}
          </div>
        </div>
        
      </div>
    </section>
  );
}
