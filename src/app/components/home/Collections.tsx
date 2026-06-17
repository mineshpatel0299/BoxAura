"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import SectionBg from "../SectionBg";

const COLLECTIONS = [
  {
    image:
      "https://res.cloudinary.com/de4pazo51/image/upload/v1781696656/box_F_sample-6_reb2ss.png",
    title: "Timeless",
    subtitle: "Elegance Redefined",
    description:
      "Where tradition meets modern luxury — hand-finished with the finest fabrics and intricate detailing.",
  },
  {
    image: "/images/wedding_box_2.png",
    title: "Wedding",
    subtitle: "Love in Every Detail",
    description:
      "Bespoke invitation boxes crafted to set the tone for your most cherished celebration.",
  },
  {
    image: "/images/wedding_box_3.png",
    title: "Festive",
    subtitle: "Celebrate in Style",
    description:
      "Seasonal collections adorned with rich textures and warm, celebratory palettes.",
  },
  {
    image: "/images/wedding_box_4.png",
    title: "Premium",
    subtitle: "Crafted to Perfection",
    description:
      "Our signature line — velvet finishes, satin linings, and gold-foil accents.",
  },
  {
    image: "/images/wedding_box_5.png",
    title: "Custom",
    subtitle: "Your Vision, Our Craft",
    description:
      "Fully personalized creations designed around your unique story and aesthetic.",
  },
];

export default function Collections() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  const goNext = useCallback(
    () => setActive((p) => (p + 1) % COLLECTIONS.length),
    [],
  );
  useEffect(() => {
    const timer = setInterval(goNext, 6000);
    return () => clearInterval(timer);
  }, [goNext]);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 sm:py-36 overflow-hidden"
    >
      <SectionBg variant="top-right" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="flex items-center gap-4 justify-center mb-6">
            <span className="h-px w-12 bg-linear-to-r from-transparent to-pink-300/50" />
            <p className="font-heading text-[11px] font-medium uppercase tracking-[0.35em] text-pink-400/70">
              Curated for You
            </p>
            <span className="h-px w-12 bg-linear-to-l from-transparent to-pink-300/50" />
          </div>
          <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-light text-stone-800">
            Our{" "}
            <span className="italic font-normal text-stone-500">
              Collections
            </span>
          </h2>
        </motion.div>

        {/* Main showcase — split layout */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col lg:flex-row gap-8 lg:gap-12"
        >
          {/* Large hero image */}
          <div className="relative lg:w-[62%] aspect-4/5 sm:aspect-3/4 lg:aspect-auto lg:min-h-150 rounded-2xl overflow-hidden group">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={COLLECTIONS[active].image}
                  alt={COLLECTIONS[active].title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 62vw"
                  priority={active === 0}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/25 to-black/5" />
                <div className="absolute inset-0 bg-linear-to-r from-black/20 to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* Overlay content — bottom-left aligned */}
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 lg:bottom-10 lg:left-10 lg:right-10 z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                >
                  <p className="font-heading text-[10px] sm:text-xs uppercase tracking-[0.4em] text-white/70 mb-2">
                    {COLLECTIONS[active].subtitle}
                  </p>
                  <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-light uppercase tracking-widest text-white mb-3">
                    {COLLECTIONS[active].title}
                  </h3>
                  <p className="max-w-sm text-xs sm:text-sm text-white/60 font-light leading-relaxed">
                    {COLLECTIONS[active].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right side — vertical thumbnail strip */}
          <div className="lg:w-[38%] flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible lg:overflow-y-auto scrollbar-hide">
            {COLLECTIONS.map((item, i) => (
              <motion.button
                key={i}
                onClick={() => setActive(i)}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`relative shrink-0 flex items-center gap-4 sm:gap-5 rounded-xl transition-all duration-500 text-left ${
                  i === active
                    ? "bg-white/60 backdrop-blur-sm shadow-lg shadow-pink-100/30 ring-1 ring-pink-100/50 p-2.5"
                    : "bg-transparent p-2.5 hover:bg-white/30"
                } w-52 sm:w-56 lg:w-full`}
              >
                <div
                  className={`relative shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden transition-all duration-500 ${
                    i === active ? "ring-2 ring-pink-200/60" : "opacity-60"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p
                    className={`font-heading text-[10px] uppercase tracking-[0.25em] mb-1 transition-colors duration-300 ${
                      i === active ? "text-pink-400/70" : "text-stone-300"
                    }`}
                  >
                    {item.subtitle}
                  </p>
                  <h4
                    className={`font-heading text-sm sm:text-base font-light tracking-wide transition-colors duration-300 truncate ${
                      i === active ? "text-stone-700" : "text-stone-400"
                    }`}
                  >
                    {item.title}
                  </h4>
                </div>

                {/* Active indicator line */}
                {i === active && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-8 rounded-full bg-pink-300 hidden lg:block"
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}
              </motion.button>
            ))}

            {/* Progress bar below thumbnails */}
            <div className="hidden lg:flex items-center gap-2 mt-auto pt-4">
              {COLLECTIONS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to collection ${i + 1}`}
                  className="relative h-0.5 overflow-hidden rounded-full transition-all duration-500"
                  style={{ width: i === active ? 40 : 16 }}
                >
                  <span className="absolute inset-0 bg-stone-200" />
                  {i === active && (
                    <motion.span
                      className="absolute inset-0 bg-pink-300"
                      initial={{ scaleX: 0, transformOrigin: "left" }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 6, ease: "linear" }}
                      key={`progress-${active}`}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
