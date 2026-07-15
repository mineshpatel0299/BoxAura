"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useHeroPlayback } from "../HeroPlaybackContext";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { playbackSignal } = useHeroPlayback();
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches
  );
  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  // Returning visitors skip the preloader, so there's no click gesture to hang
  // sound off of — just start the video from the top, muted.
  useEffect(() => {
    if (sessionStorage.getItem("boxaura-preloader-shown")) {
      videoRef.current?.play().catch(() => {});
    }
  }, []);

  // First-time visitors: the preloader's "Start Exploring" button click bumps
  // this signal. Restart the video from frame zero on that gesture, but keep
  // it muted — the site-wide soundtrack (SiteAudio) owns audio now.
  useEffect(() => {
    if (playbackSignal === 0) return;
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    video.muted = true;
    video.play().catch(() => {});
  }, [playbackSignal]);

  const videoSrc = isMobile ? "/mob.mp4" : "/web.mp4";

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-[#7F807F] pt-14 sm:pt-20 lg:pt-28 pb-4 sm:pb-8"
    >
      {/* Background Video */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute inset-0 z-0"
      >
        <video
          ref={videoRef}
          key={videoSrc}
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src={videoSrc}
        />
        {/* Elegant overlay for contrast */}
        <div className="absolute inset-0 bg-[black]/30 " />
        <div className="absolute inset-0 bg-[black]/15 " />
      </motion.div>

      <div className="relative z-10 w-full px-2 sm:px-3 lg:px-4 flex-1 flex flex-col items-center justify-end gap-6 sm:gap-10">
        {/* Bottom-center Typography */}
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-stone-300 uppercase tracking-[0.3em] sm:tracking-[0.5em] text-[10px] sm:text-xs mb-2 sm:mb-3 font-light"
          >
            BoxAura Unveiled
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="whitespace-nowrap text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-white font-lightleading-[0.9] tracking-tight drop-shadow-lg"
          >
            The Art of{" "}
            <span className=" text-stone-200 font-light pr-2 sm:pr-4">Impressions</span>
          </motion.h1>

          {/* <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-stone-300 text-xs sm:text-sm text-left font-light leading-relaxed max-w-[320px] sm:max-w-md mt-3 sm:mt-4"
          >
            Elevating celebrations with premium handcrafted boxes and exquisite invitations.
          </motion.p> */}
        </div>

        {/* CTA */}
        <div className="w-full flex flex-col items-center text-center text-white mb-2 sm:mb-4">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.8, duration: 0.8 }}
             className="flex flex-col items-center max-w-70 sm:max-w-lg mx-auto"
          >
            <a href="/premium-wedding-invitation" className="inline-flex items-center justify-center rounded-none border border-white/40 bg-white/5 backdrop-blur-md text-white px-8 py-4 sm:px-12 sm:py-5 text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] hover:bg-white hover:text-stone-950 transition-all duration-500 w-max font-bold">
               Explore Collection
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
