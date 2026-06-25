"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import SectionBg from "./SectionBg";
import CursorRevealBg from "./CursorRevealBg";
import RosePetals from "./home/RosePetals";
import type { Product } from "@/data/products";

function ProductCard({ product, index }: { product: Product; index: number }) {
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
      <Link href={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden rounded-2xl cursor-pointer border border-stone-200/60 bg-gradient-to-b from-white/80 to-[#f8f5f0]/80 backdrop-blur-sm shadow-[0_2px_20px_rgba(120,100,70,0.05)] hover:shadow-[0_12px_50px_rgba(120,100,70,0.13)] transition-all duration-700 hover:-translate-y-1.5">
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
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/80 via-white/30 to-transparent pointer-events-none group-hover:from-white/90 transition-all duration-500" />
          </div>

          <div className="relative px-5 sm:px-6 pt-5 sm:pt-6 pb-5 sm:pb-6">
            <div className="flex flex-col items-center text-center">
              <span className="w-8 h-px bg-stone-300 group-hover:w-12 group-hover:bg-stone-500 transition-all duration-500 mb-4" />
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

interface CategoryPageProps {
  title: string;
  titleItalic: string;
  subtitle: string;
  description: string;
  products: Product[];
  heroImage: string;
}

export default function CategoryPage({
  title,
  titleItalic,
  subtitle,
  description,
  products,
  heroImage,
}: CategoryPageProps) {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  const ctaRef = useRef<HTMLDivElement>(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-60px" });

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative w-full min-h-[85vh] lg:min-h-screen flex items-center justify-center overflow-hidden border-b border-stone-800">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={`${title} ${titleItalic}`}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        
        {/* Overlays to ensure text visibility and give a premium feel */}
        <div className="absolute inset-0 bg-stone-950/50 backdrop-blur-[2px]" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 flex flex-col items-center text-center pt-24 pb-12">
          {/* Animated line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "5rem" }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="h-px bg-white/40 mb-8 sm:mb-10"
          />

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center gap-4 mb-6 sm:mb-8"
          >
            <span className="w-8 sm:w-12 h-px bg-white/30" />
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.5em] text-white/80 font-light">
              {subtitle}
            </span>
            <span className="w-8 sm:w-12 h-px bg-white/30" />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl lg:text-[90px] font-heading text-white tracking-tight leading-[0.95]"
          >
            {title}
            <br />
            <span className="italic font-light text-white/70">{titleItalic}</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 sm:mt-8 max-w-md text-[11px] sm:text-[13px] text-white/70 font-light tracking-[0.15em] leading-[1.9] uppercase text-center drop-shadow-sm"
          >
            {description}
          </motion.p>
        </div>
      </section>

      {/* ── Products Grid ── */}
      <section className="relative w-full bg-[#EFECE5] py-16 sm:py-24 lg:py-32 overflow-hidden border-b border-stone-300">
        <CursorRevealBg />
        <SectionBg variant="corner-both" />
        <RosePetals count={8} />

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
                Our Collection
              </span>
              <span className="w-12 h-px bg-gradient-to-l from-transparent to-stone-400" />
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-heading tracking-tight leading-none text-center">
              <span className="text-stone-800">Explore</span>{" "}
              <span className="italic font-light text-stone-500">the Range</span>
            </h2>

            <p className="mt-5 sm:mt-6 max-w-xs sm:max-w-md text-center text-[10px] sm:text-xs text-stone-400 font-light tracking-[0.2em] leading-relaxed uppercase">
              Each piece is handcrafted with premium materials and meticulous attention to detail
            </p>

            <span className="mt-6 sm:mt-8 w-px h-10 sm:h-14 bg-gradient-to-b from-stone-400 to-transparent" />
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
            {products.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
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

      {/* ── CTA ── */}
      <section className="relative w-full bg-stone-950 py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image src={heroImage} alt="" fill className="object-cover" sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/40 via-stone-950/80 to-stone-950" />

        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 30 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 flex flex-col items-center text-center px-5"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="w-10 h-px bg-white/15" />
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.5em] text-white/25">
              Custom Orders Welcome
            </span>
            <span className="w-10 h-px bg-white/15" />
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-heading text-white tracking-tight leading-tight">
            Can&apos;t Find What<br />
            <span className="italic font-light text-white/40">You&apos;re Looking For?</span>
          </h2>

          <p className="mt-6 sm:mt-8 max-w-lg text-[13px] sm:text-base text-white/35 font-light leading-relaxed tracking-wide">
            We specialize in fully customized luxury boxes tailored to your celebration. Share your vision and we&apos;ll bring it to life.
          </p>

          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 sm:mt-14 group inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full pl-6 pr-5 py-3.5 hover:bg-white/20 transition-all duration-500"
          >
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-white/70 group-hover:text-white transition-colors duration-500">
              Chat on WhatsApp
            </span>
            <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
          </a>
        </motion.div>
      </section>

      {/* ── Back link ── */}
      <div className="bg-[#EFECE5] py-10 flex justify-center border-b border-stone-300">
        <Link
          href="/"
          className="group inline-flex items-center gap-4 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-stone-400 hover:text-stone-800 transition-colors duration-300"
        >
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back to Home
        </Link>
      </div>
    </>
  );
}
