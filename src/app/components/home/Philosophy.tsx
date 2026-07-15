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
      id="philosophy"
      className="relative w-full bg-[#EFECE5] flex flex-col items-center justify-center py-10 sm:py-24 lg:py-40 overflow-hidden border-b border-stone-400 scroll-mt-16 sm:scroll-mt-20"
    >
      <CursorRevealBg />
      <SectionBg variant="left-strip" />

      <div className="w-full max-w-[1400px] px-4 sm:px-12 lg:px-20 relative z-10 flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-24">

        {/* Left Column: 3D Cube */}
        <div className="w-full lg:w-[45%] flex flex-col items-center justify-center lg:justify-start">
          <div className="relative w-full sm:w-[90%] md:w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[450px] aspect-[4/5] flex flex-col items-center justify-center">

            {/* Hint text above cube */}
            {/* <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 1 }}
              className="mb-8 text-stone-500 text-[9px] sm:text-[10px] uppercase tracking-[0.3em] flex items-center gap-2 sm:gap-3 pointer-events-none"
            >
              <span className="w-6 sm:w-10 h-px bg-stone-400" />
              Click to rotate
              <span className="w-6 sm:w-10 h-px bg-stone-400" />
            </motion.div> */}

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

        {/* Mobile-only CTA — replaces right column text on small screens */}
        <div className="flex lg:hidden flex-col items-center text-center w-full gap-5">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="text-sm text-stone-500 tracking-wide font-light leading-relaxed max-w-[280px] mx-auto"
          >
            Premium crafted boxes that transform  into an unforgettable moment.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.76, 0, 0.24, 1] }}
            className="inline-flex w-72 justify-center border border-[#BF944C] bg-[#BF944C] px-8 py-5 rounded-full"
          >
            <a
              href="https://wa.me/919990171703?text=Hi%20BoxAura!%20I%27d%20like%20to%20know%20more%20about%20your%20boxes."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 whitespace-nowrap text-xs uppercase tracking-[0.3em] text-white font-semibold active:opacity-60 transition-opacity duration-150"
            >
              <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Begin your order
            </a>
          </motion.div>

          {/* Instagram link */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.76, 0, 0.24, 1] }}
            className="inline-flex w-72 justify-center border border-stone-900 px-8 py-5 rounded-full"
          >
            <a
              href="https://www.instagram.com/boxaura.boxaura?igsh=MTZpNGZqaWR5Mmw3eA=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 whitespace-nowrap text-xs uppercase tracking-[0.3em] text-stone-900 font-semibold active:opacity-60 transition-opacity duration-150"
            >
              <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              Visit Our Instagram
            </a>
          </motion.div>

        </div>

        {/* Right Column: Typography Area — desktop only */}
        <div className="hidden lg:flex w-full lg:w-[55%] flex-col justify-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center lg:justify-start gap-4 mb-6 sm:mb-10"
          >
            <span className="hidden sm:block h-px w-8 sm:w-12 bg-stone-400" />
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
              { text: "We redefine how celebrations begin. Every crafted box is a blend of premium fabrics and exquisite details that transform into an unforgettable moment.", mobileHidden: false },
              { text: "With artisan craftsmanship and modern elegance, we believe your celebration deserves a beginning as beautiful as the occasion itself.", mobileHidden: true },
            ].map(({ text, mobileHidden }, i) => (
              <div key={i} className={`overflow-hidden${mobileHidden ? " hidden sm:block" : ""}`}>
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
            className="mt-8 sm:mt-16 flex flex-col items-center lg:items-start gap-5"
          >
            <a href="/premium-wedding-invitation" className="group inline-flex items-center gap-4 sm:gap-6 cursor-pointer">
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-stone-900 font-medium">Discover More</span>
              <span className="hidden sm:block w-12 h-px bg-stone-900 transition-all duration-300 group-hover:w-24" />
            </a>

            {/* Instagram link */}
            <a
              href="https://www.instagram.com/boxaura.boxaura?igsh=MTZpNGZqaWR5Mmw3eA=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 active:opacity-60 transition-opacity duration-150"
            >
              <svg className="w-4 h-4 fill-stone-900 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-stone-900">
                @boxaura.boxaura
              </span>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
