"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { use } from "react";
import CursorRevealBg from "../../../components/CursorRevealBg";

import { getProduct, getRelatedProducts } from "@/data/products";

/* ── Fullscreen Lightbox ── */
function Lightbox({
  images,
  activeIndex,
  onClose,
  onPrev,
  onNext,
}: {
  images: string[];
  activeIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose, onNext, onPrev]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-xl flex items-center justify-center"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full border border-black/15 flex items-center justify-center hover:bg-black/5 transition-colors"
      >
        <svg className="w-5 h-5 text-black/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 sm:left-8 z-10 w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-black/5 transition-colors"
      >
        <svg className="w-5 h-5 text-black/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 sm:right-8 z-10 w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-black/5 transition-colors"
      >
        <svg className="w-5 h-5 text-black/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-[90vw] h-[80vh] sm:w-[85vw] sm:h-[85vh]"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={images[activeIndex]}
            alt={`Gallery ${activeIndex + 1}`}
            fill
            className="object-contain"
            sizes="90vw"
            priority
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <span className="text-[10px] font-heading tracking-[0.4em] text-black/30">
          {String(activeIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
        </span>
      </div>
    </motion.div>
  );
}

export default function ProductDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const product = getProduct(slug);
  const galleryImages = product.gallery;

  const [activeImage, setActiveImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = (index: number) => {
    setActiveImage(index);
    setLightboxOpen(true);
  };

  const lightboxPrev = useCallback(() => {
    setActiveImage((p) => (p === 0 ? galleryImages.length - 1 : p - 1));
  }, []);

  const lightboxNext = useCallback(() => {
    setActiveImage((p) => (p === galleryImages.length - 1 ? 0 : p + 1));
  }, []);

  const moreRef = useRef<HTMLDivElement>(null);
  const moreInView = useInView(moreRef, { once: true, margin: "-80px" });

  const relatedProducts = getRelatedProducts(slug, 4);

  return (
    <>
      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <Lightbox
            images={galleryImages}
            activeIndex={activeImage}
            onClose={() => setLightboxOpen(false)}
            onPrev={lightboxPrev}
            onNext={lightboxNext}
          />
        )}
      </AnimatePresence>

      {/* ── Product Detail — E-comm Layout ── */}
      <section className="relative w-full bg-[#EFECE5] overflow-hidden pt-24 sm:pt-28 lg:pt-32">
        <CursorRevealBg />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 pb-16 sm:pb-20 lg:pb-24">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[10px] sm:text-[11px] text-stone-400 font-light tracking-wide mb-8 sm:mb-10">
            <Link href="/" className="hover:text-stone-700 transition-colors">Home</Link>
            <svg className="w-3 h-3 text-stone-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
            <span className="text-stone-600">{product.name}</span>
          </nav>

          <div className="flex flex-col lg:flex-row gap-10 sm:gap-12 lg:gap-14">

            {/* ── RIGHT: Product Info (scrolls) ── */}
            <div className="w-full lg:w-[38%] order-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Tagline */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-px bg-stone-400" />
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.4em] text-stone-400 font-light">
                    {product.tagline}
                  </span>
                </div>

                {/* Name */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-stone-800 tracking-tight leading-[1.1] mb-3">
                  {product.name}
                </h1>

                <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-stone-400 font-light mb-8">
                  {product.categoryLabel}
                </p>

                {/* Divider */}
                <div className="w-full h-px bg-stone-300/60 mb-8" />

                {/* Description */}
                <div className="text-stone-600 font-light text-[13px] sm:text-[14px] leading-[1.8] tracking-wide mb-8">
                  <p>{product.description}</p>
                </div>

                {/* What's Inside */}
                <div className="mb-8">
                  <h3 className="font-heading text-sm sm:text-[15px] text-stone-800 tracking-wide mb-4 uppercase">
                    What&apos;s Inside
                  </h3>
                  <div className="space-y-3">
                    {product.whatsInside.map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-stone-400 flex-shrink-0" />
                        <span className="text-[13px] sm:text-[14px] text-stone-600 font-light tracking-wide">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://wa.me/919999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex-1 inline-flex items-center justify-center gap-3 bg-stone-800 rounded-full px-8 py-4 hover:bg-stone-900 transition-all duration-500"
                  >
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-white font-medium">
                      Enquire Now
                    </span>
                  </a>

                  <button
                    onClick={() => openLightbox(0)}
                    className="group inline-flex items-center justify-center gap-3 border border-stone-300 rounded-full px-8 py-4 hover:border-stone-500 hover:bg-white/50 transition-all duration-500"
                  >
                    <svg className="w-4 h-4 text-stone-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                    </svg>
                    <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-stone-600 font-medium">
                      View Gallery
                    </span>
                  </button>
                </div>

                {/* Trust badges */}
                <div className="mt-8 pt-6 border-t border-stone-300/40 flex items-center justify-between">
                  {[
                    { icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z", text: "Handcrafted" },
                    { icon: "M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z", text: "Premium Materials" },
                    { icon: "M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H18.75m-7.5-2.25h7.5", text: "Pan India Delivery" },
                  ].map((badge, i) => (
                    <div key={i} className="flex flex-col items-center gap-2">
                      <svg className="w-5 h-5 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={badge.icon} />
                      </svg>
                      <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-stone-400 font-light text-center">
                        {badge.text}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* ── LEFT: Image Gallery (sticky) ── */}
            <div className="w-full lg:w-[62%] order-1 lg:sticky lg:top-24 lg:self-start">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                {/* ── Mobile: Large image + 3 side thumbnails ── */}
                <div className="lg:hidden">
                  <div className="flex gap-2">
                    {/* Large main image */}
                    <div
                      className="relative flex-1 aspect-[3/4] rounded-xl overflow-hidden bg-[#f5f2ed] cursor-pointer shadow-[0_10px_40px_rgba(80,60,40,0.08)]"
                      onClick={() => openLightbox(activeImage)}
                    >
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeImage}
                          initial={{ opacity: 0, scale: 1.03 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.97 }}
                          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute inset-0"
                        >
                          <Image
                            src={galleryImages[activeImage]}
                            alt={product.name}
                            fill
                            className="object-cover"
                            sizes="65vw"
                            priority
                          />
                        </motion.div>
                      </AnimatePresence>
                      <div className="absolute inset-0 shadow-[inset_0_0_40px_5px_rgba(0,0,0,0.06)] pointer-events-none" />
                    </div>

                    {/* 3 stacked thumbnails on the right */}
                    <div className="flex flex-col gap-2 w-[28%]">
                      {galleryImages.slice(0, 3).map((src, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveImage(i)}
                          className={`relative flex-1 rounded-xl overflow-hidden transition-all duration-300 ${
                            activeImage === i
                              ? "ring-2 ring-stone-700 ring-offset-1 ring-offset-[#EFECE5]"
                              : "opacity-60"
                          }`}
                        >
                          <Image src={src} alt={`View ${i + 1}`} fill className="object-cover" sizes="28vw" />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Remaining thumbnails below */}
                  {galleryImages.length > 3 && (
                    <div className="mt-2 grid grid-cols-4 gap-2">
                      {galleryImages.slice(3).map((src, i) => (
                        <button
                          key={i + 3}
                          onClick={() => setActiveImage(i + 3)}
                          className={`relative aspect-square rounded-xl overflow-hidden transition-all duration-300 ${
                            activeImage === i + 3
                              ? "ring-2 ring-stone-700 ring-offset-1 ring-offset-[#EFECE5]"
                              : "opacity-60 hover:opacity-90"
                          }`}
                        >
                          <Image src={src} alt={`View ${i + 4}`} fill className="object-cover" sizes="22vw" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* ── Desktop: Original layout ── */}
                <div className="hidden lg:block">
                  {/* Main Image */}
                  <div
                    className="group relative rounded-2xl overflow-hidden bg-[#f5f2ed] cursor-pointer shadow-[0_10px_40px_rgba(80,60,40,0.08)]"
                    onClick={() => openLightbox(activeImage)}
                  >
                    <div className="relative aspect-square overflow-hidden">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeImage}
                          initial={{ opacity: 0, scale: 1.03 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.97 }}
                          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute inset-0"
                        >
                          <Image
                            src={galleryImages[activeImage]}
                            alt={product.name}
                            fill
                            className="object-contain group-hover:scale-[1.02] transition-transform duration-700"
                            sizes="62vw"
                            priority
                          />
                        </motion.div>
                      </AnimatePresence>

                      <div className="absolute inset-0 shadow-[inset_0_0_40px_5px_rgba(0,0,0,0.06)] pointer-events-none" />
                      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/20 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400 shadow-sm">
                        <svg className="w-4 h-4 text-stone-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                        </svg>
                      </div>

                      <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-md rounded-full px-3.5 py-1.5 opacity-0 group-hover:opacity-100 transition-all duration-400 shadow-sm">
                        <span className="text-[9px] font-heading tracking-[0.3em] text-stone-600">
                          {String(activeImage + 1).padStart(2, "0")} / {String(galleryImages.length).padStart(2, "0")}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Thumbnails */}
                  <div className="mt-4 grid grid-cols-4 gap-3">
                    {galleryImages.map((src, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveImage(i)}
                        className={`relative aspect-square rounded-xl overflow-hidden transition-all duration-300 ${
                          activeImage === i
                            ? "ring-2 ring-stone-700 ring-offset-2 ring-offset-[#EFECE5] shadow-md"
                            : "opacity-40 hover:opacity-90"
                        }`}
                      >
                        <Image src={src} alt={`View ${i + 1}`} fill className="object-cover" sizes="15vw" />
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── More Products ── */}
      <section className="relative w-full bg-[#EFECE5] py-20 sm:py-28 lg:py-36 overflow-hidden border-b border-stone-300">
        <CursorRevealBg />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <motion.div
            ref={moreRef}
            initial={{ opacity: 0, y: 30 }}
            animate={moreInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center mb-14 sm:mb-20"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-10 h-px bg-gradient-to-r from-transparent to-stone-400" />
              <span className="font-heading text-[9px] sm:text-[10px] uppercase tracking-[0.5em] text-stone-400">
                You May Also Like
              </span>
              <span className="w-10 h-px bg-gradient-to-l from-transparent to-stone-400" />
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading tracking-tight leading-none text-center">
              <span className="text-stone-800">More</span>{" "}
              <span className="italic font-light text-stone-500">Products</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {relatedProducts.map((prod, i) => (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, y: 30 }}
                animate={moreInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link href={`/product/${prod.id}`} className="group block">
                  <div className="relative overflow-hidden rounded-2xl border border-stone-200/60 bg-gradient-to-b from-white/80 to-[#f8f5f0]/80 backdrop-blur-sm shadow-[0_2px_20px_rgba(120,100,70,0.05)] hover:shadow-[0_12px_50px_rgba(120,100,70,0.13)] transition-all duration-700 hover:-translate-y-1.5">
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <Image
                        src={prod.closedImage}
                        alt={prod.name}
                        fill
                        className="object-cover transition-all duration-700 ease-out group-hover:opacity-0 group-hover:scale-[1.04]"
                        sizes="(max-width: 640px) 45vw, 25vw"
                      />
                      <Image
                        src={prod.openImage}
                        alt={`${prod.name} — open`}
                        fill
                        className="object-cover opacity-0 scale-[1.06] transition-all duration-700 ease-out group-hover:opacity-100 group-hover:scale-100"
                        sizes="(max-width: 640px) 45vw, 25vw"
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/80 via-white/30 to-transparent pointer-events-none" />
                    </div>

                    <div className="relative px-4 sm:px-5 pt-4 pb-4 sm:pb-5">
                      <div className="flex flex-col items-center text-center">
                        <span className="w-6 h-px bg-stone-300 group-hover:w-10 group-hover:bg-stone-500 transition-all duration-500 mb-3" />
                        <h3 className="font-heading text-sm sm:text-base text-stone-800 tracking-tight leading-tight">
                          {prod.name}
                        </h3>
                        <p className="mt-1.5 text-[8px] sm:text-[9px] text-stone-400 font-light tracking-[0.25em] uppercase">
                          {prod.tagline}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative w-full bg-stone-950 py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image src="https://res.cloudinary.com/de4pazo51/image/upload/v1781861915/WhatsApp_Image_2026-06-19_at_15.05.10_1_cythps.jpg" alt="" fill className="object-cover" sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/40 via-stone-950/80 to-stone-950" />

        <div className="relative z-10 flex flex-col items-center text-center px-5">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-10 h-px bg-white/15" />
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.5em] text-white/25">
              Begin Your Story
            </span>
            <span className="w-10 h-px bg-white/15" />
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-heading text-white tracking-tight leading-tight">
            Make Your Invitation<br />
            <span className="italic font-light text-white/40">Unforgettable</span>
          </h2>

          <p className="mt-6 sm:mt-8 max-w-lg text-[13px] sm:text-base text-white/35 font-light leading-relaxed tracking-wide">
            Get in touch with us to customize your luxury wedding invitation box, tailored to your celebration.
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
        </div>
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
          Back to Collections
        </Link>
      </div>
    </>
  );
}
