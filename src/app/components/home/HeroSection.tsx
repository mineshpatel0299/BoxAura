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
  const [isMuted, setIsMuted] = useState(true);

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
  // this signal. It's a real user gesture, so we can (re)start the video from
  // frame zero with sound instead of the muted-only autoplay browsers allow.
  useEffect(() => {
    if (playbackSignal === 0) return;
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    video.muted = false;
    setIsMuted(false);
    video.play().catch(() => {
      video.muted = true;
      setIsMuted(true);
      video.play().catch(() => {});
    });
  }, [playbackSignal]);

  // Scrolling the hero out of view should stop the audio — mute it rather
  // than pausing, so the background video keeps looping silently.
  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && !video.muted) {
          video.muted = true;
          setIsMuted(true);
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const videoSrc = isMobile ? "/mh.mp4" : "/w.mp4";

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

        <button
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute video" : "Mute video"}
          className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/40 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors"
        >
          {isMuted ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 sm:w-5 sm:h-5">
              <path d="M11 5 6 9H2v6h4l5 4V5Z" />
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 sm:w-5 sm:h-5">
              <path d="M11 5 6 9H2v6h4l5 4V5Z" />
              <path d="M15.5 8.5a5 5 0 0 1 0 7" />
              <path d="M18.5 5.5a9 9 0 0 1 0 13" />
            </svg>
          )}
        </button>
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
