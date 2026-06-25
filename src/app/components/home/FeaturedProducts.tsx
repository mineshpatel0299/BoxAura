"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import SectionBg from "../SectionBg";
import CursorRevealBg from "../CursorRevealBg";
import RosePetals from "./RosePetals";

const FEATURED_PRODUCTS = [
  {
    name: "Velvet Noir", tagline: "Dark Sophistication", slug: "velvet-noir",
    closedImage: "https://res.cloudinary.com/de4pazo51/image/upload/v1781696657/box_F_sample_bp6c2s.png",
    openImage: "https://res.cloudinary.com/de4pazo51/image/upload/v1782378484/box-2.2_ecj267.png",
  },
  {
    name: "Royal Amber", tagline: "Warm Opulence", slug: "royal-amber",
    closedImage: "https://res.cloudinary.com/de4pazo51/image/upload/v1781865563/box_F_sample-2.1_kofhcn.png",
    openImage: "https://res.cloudinary.com/de4pazo51/image/upload/v1781865563/box_F_sample-2.2_p6edgp.png",
  },
  {
    name: "Ivory Luxe", tagline: "Pristine Elegance", slug: "ivory-luxe",
    closedImage: "https://res.cloudinary.com/de4pazo51/image/upload/v1782385102/box-1_f5iq8n.png",
    openImage: "https://res.cloudinary.com/de4pazo51/image/upload/v1782385102/box-1.1_zncjlq.png",
  },
  {
    name: "Midnight Gold", tagline: "Gilded Mystery", slug: "midnight-gold",
    closedImage: "https://res.cloudinary.com/de4pazo51/image/upload/v1782381226/box-2.4_itwesd.png",
    openImage: "https://res.cloudinary.com/de4pazo51/image/upload/v1781865563/box_F_sample-2.1_kofhcn.png",
  },
  {
    name: "Champagne Mist", tagline: "Subtle Radiance", slug: "champagne-mist",
    closedImage: "https://res.cloudinary.com/de4pazo51/image/upload/v1782381227/box-2.6_p9gliw.png",
    openImage: "https://res.cloudinary.com/de4pazo51/image/upload/v1781865563/box_F_sample-2.2_p6edgp.png",
  },
  {
    name: "Obsidian Pearl", tagline: "Contrast & Charm", slug: "obsidian-pearl",
    closedImage: "https://res.cloudinary.com/de4pazo51/image/upload/v1781865563/box_F_sample-2.3_hrfbhm.png",
    openImage: "https://res.cloudinary.com/de4pazo51/image/upload/v1782381226/box-2.4_itwesd.png",
  },
];

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
        <div className="relative px-5 sm:px-6 pt-5 sm:pt-6 pb-5 sm:pb-6">
          <div className="flex flex-col items-center text-center">
            <span className="w-8 h-px bg-stone-300 group-hover:w-12 group-hover:bg-stone-500 transition-all duration-600 mb-4" />
            <h3 className="font-heading text-lg sm:text-xl text-stone-800 tracking-tight leading-tight">
              {product.name}
            </h3>
            <p className="mt-2 text-[9px] sm:text-[10px] text-stone-400 font-light tracking-[0.3em] uppercase">
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
      <RosePetals count={10} />

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
       
          <span className="mt-6 sm:mt-8 w-px h-10 sm:h-14 bg-gradient-to-b from-stone-400 to-transparent" />
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {FEATURED_PRODUCTS.map((product, i) => (
            <div key={i} className={i >= 2 ? "hidden sm:block" : ""}>
              <ProductCard product={product} index={i} />
            </div>
          ))}
        </div>

        {/* Mobile View All */}
        <div className="flex justify-center mt-10 sm:hidden">
          <Link
            href="/premium-wedding-invitation"
            className="group inline-flex items-center gap-4 border border-stone-800 rounded-full px-7 py-3 hover:bg-stone-800 transition-all duration-500"
          >
            <span className="text-[10px] uppercase tracking-[0.25em] text-stone-800 font-medium group-hover:text-white transition-colors duration-500">
              View All Products
            </span>
            <svg className="w-4 h-4 text-stone-800 group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
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
