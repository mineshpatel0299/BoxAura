"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import SectionBg from "../SectionBg";
import CursorRevealBg from "../CursorRevealBg";

import { getProductsByCategory } from "@/data/products";

const FEATURED_PRODUCTS = [
  ...getProductsByCategory("wedding").slice(0, 3),
  ...getProductsByCategory("diwali").slice(0, 3),
].map((p) => ({
  name: p.name,
  tagline: p.tagline,
  slug: p.id,
  closedImage: p.closedImage,
  openImage: p.openImage,
}));

function ProductCard({
  product,
  index,
}: {
  product: (typeof FEATURED_PRODUCTS)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.9,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative"
    >
      <Link href={`/product/${product.slug}`} className="block">
      <div className="relative overflow-hidden rounded-2xl cursor-pointer border border-stone-200/60 bg-gradient-to-b from-white/80 to-[#f8f5f0]/80 backdrop-blur-sm shadow-[0_2px_20px_rgba(120,100,70,0.05)] hover:shadow-[0_12px_50px_rgba(120,100,70,0.13)] transition-all duration-700 hover:-translate-y-1.5">
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={product.closedImage}
            alt={`${product.name} — closed`}
            fill
            className="object-cover transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-0 group-hover:scale-[1.04]"
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
          />
          <Image
            src={product.openImage}
            alt={`${product.name} — open`}
            fill
            className="object-cover opacity-0 scale-[1.06] transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 group-hover:scale-100"
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
          />

          {/* Soft bottom fade into text area */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/80 via-white/30 to-transparent pointer-events-none group-hover:from-white/90 transition-all duration-500" />
        </div>

        {/* Text area */}
        <div className="relative px-3 sm:px-6 pt-3 sm:pt-6 pb-3 sm:pb-6">
          <div className="flex flex-col items-center text-center">
            <span className="w-6 sm:w-8 h-px bg-stone-300 group-hover:w-12 group-hover:bg-stone-500 transition-all duration-600 mb-2 sm:mb-4" />
            <h3 className="font-heading text-sm sm:text-xl text-stone-800 tracking-tight leading-tight">
              {product.name}
            </h3>
            <p className="mt-1 sm:mt-2 text-[7px] sm:text-[10px] text-stone-400 font-light tracking-[0.3em] uppercase">
              {product.tagline}
            </p>
          </div>
        </div>
      </div>
      </Link>
    </motion.div>
  );
}

export default function FeaturedProducts() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section className="relative w-full bg-[#EFECE5] py-24 sm:py-32 lg:py-40 overflow-hidden border-b border-stone-300">
      <CursorRevealBg />
      <SectionBg variant="corner-both" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center mb-16 sm:mb-24"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-stone-400" />
            <span className="font-heading text-[9px] sm:text-[10px] uppercase tracking-[0.5em] text-stone-400">
              Exclusive Selection
            </span>
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-stone-400" />
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-8xl font-heading tracking-tight leading-none text-center">
            <span className="text-stone-800">Featured</span>{" "}
            <span className="italic font-light text-stone-500">Products</span>
          </h2>

          <p className="mt-5 sm:mt-6 max-w-xs sm:max-w-md text-center text-[10px] sm:text-xs text-stone-400 font-light tracking-[0.2em] leading-relaxed uppercase">
            The artistry within — each piece, a statement of refined luxury
          </p>
       
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-7 lg:gap-8">
          {FEATURED_PRODUCTS.map((product, i) => (
            <div key={i} className={i >= 4 ? "hidden md:block" : undefined}>
              <ProductCard product={product} index={i} />
            </div>
          ))}
        </div>

        {/* Bottom accent */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex justify-center mt-16 sm:mt-24"
        >
          <div className="flex items-center gap-3">
            <span className="w-16 h-px bg-gradient-to-r from-transparent to-stone-300" />
            <div className="w-1.5 h-1.5 rotate-45 border border-stone-400" />
            <span className="w-16 h-px bg-gradient-to-l from-transparent to-stone-300" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
