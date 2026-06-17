"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import SectionBg from "../SectionBg";

const TESTIMONIALS = [
  {
    quote:
      "The first experience that met our expectations — innovative artistry and exquisite attention to detail woven into every box. BoxAura made our wedding invitations truly unforgettable.",
    author: "Priya & Arjun",
    location: "Mumbai",
  },
  {
    quote:
      "From the velvet finish to the intricate embossing, every detail was perfect. Our guests were in awe before they even opened the invitation.",
    author: "Sneha & Rohan",
    location: "Delhi",
  },
  {
    quote:
      "BoxAura transformed our vision into a masterpiece. The quality of craftsmanship is unmatched — it set the tone for our entire celebration.",
    author: "Meera & Karan",
    location: "Jaipur",
  },
];

const IMAGES = [
  "/images/wedding_box_6.png",
  "/images/wedding_box_1.png",
  "/images/wedding_box_2.png",
];

export default function ClientExperiences() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  const goNext = () => setActive((p) => (p + 1) % TESTIMONIALS.length);
  const goPrev = () =>
    setActive((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  useEffect(() => {
    const timer = setInterval(goNext, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={sectionRef} className="relative py-28 sm:py-40 overflow-hidden">
      <SectionBg />
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-heading text-xs font-medium uppercase tracking-[0.4em] text-rose-300 mb-5">
            Voices of Elegance
          </p>
          <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-light text-stone-800 leading-[1.05]">
            Client <span className="italic font-normal text-stone-500">Experiences</span>
          </h2>
          <div className="mx-auto mt-6 w-16 h-px bg-rose-200" />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-14 lg:gap-0 items-stretch">
          {/* Left image with stacked effect */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:w-[48%] relative"
          >
            <div className="relative aspect-[3/4] sm:aspect-[4/5]">
              {/* Decorative frame behind */}
              <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-full h-full rounded-3xl border border-rose-200/40" />

              {/* Main image */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={IMAGES[active]}
                      alt="Client experience"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/5" />

                {/* Floating badge */}
                <div className="absolute top-6 left-6 sm:top-8 sm:left-8 bg-white/10 backdrop-blur-md rounded-full px-5 py-2 border border-white/20">
                  <span className="font-heading text-[10px] uppercase tracking-[0.3em] text-white">
                    {String(active + 1).padStart(2, "0")} — {String(TESTIMONIALS.length).padStart(2, "0")}
                  </span>
                </div>

                {/* Bottom overlay text */}
                <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={active}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="font-heading text-2xl sm:text-3xl lg:text-4xl font-light text-white leading-tight"
                    >
                      {TESTIMONIALS[active].author}
                    </motion.p>
                  </AnimatePresence>
                  <p className="font-heading text-xs uppercase tracking-[0.25em] text-white/50 mt-2">
                    {TESTIMONIALS[active].location}
                  </p>
                </div>
              </div>

              {/* Decorative accent */}
              <div className="absolute -bottom-3 -right-3 sm:-bottom-5 sm:-right-5 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-rose-100/30 blur-2xl pointer-events-none" />
            </div>
          </motion.div>

          {/* Right testimonial */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:w-[52%] lg:pl-20 flex flex-col justify-center"
          >
            {/* Large decorative quote */}
            <div className="relative mb-2">
              <span className="font-heading text-[10rem] sm:text-[12rem] leading-none text-rose-100/50 select-none absolute -top-16 -left-4">
                &ldquo;
              </span>
            </div>

            <div className="relative z-10 min-h-[260px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                >
                  <p className="text-2xl sm:text-3xl lg:text-[1.75rem] lg:leading-relaxed text-stone-500 font-light leading-relaxed">
                    {TESTIMONIALS[active].quote}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Author line */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="mt-8 flex items-center gap-5"
              >
                <div className="w-12 h-px bg-gradient-to-r from-rose-300 to-rose-100" />
                <div>
                  <p className="font-heading text-sm uppercase tracking-[0.2em] font-light text-stone-800">
                    {TESTIMONIALS[active].author}
                  </p>
                  <p className="font-heading text-[11px] uppercase tracking-[0.2em] text-stone-400 mt-0.5">
                    {TESTIMONIALS[active].location}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center gap-6 mt-12">
              <button
                onClick={goPrev}
                aria-label="Previous testimonial"
                className="group w-14 h-14 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 hover:border-stone-800 hover:text-stone-800 transition-all duration-500"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:-translate-x-0.5"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Progress indicators */}
              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className="relative h-[2px] overflow-hidden rounded-full transition-all duration-500"
                    style={{ width: i === active ? 32 : 12 }}
                  >
                    <span className="absolute inset-0 bg-stone-200" />
                    {i === active && (
                      <motion.span
                        className="absolute inset-0 bg-stone-700"
                        initial={{ scaleX: 0, transformOrigin: "left" }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 7, ease: "linear" }}
                        key={`bar-${active}`}
                      />
                    )}
                  </button>
                ))}
              </div>

              <button
                onClick={goNext}
                aria-label="Next testimonial"
                className="group w-14 h-14 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 hover:border-stone-800 hover:text-stone-800 transition-all duration-500"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
