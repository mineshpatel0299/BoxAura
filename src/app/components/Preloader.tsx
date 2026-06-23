"use client";

import { useState, useRef, useEffect } from "react";

export default function Preloader({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [videoEnded, setVideoEnded] = useState(false);
  const [exiting, setExiting] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  const handleExplore = () => {
    setExiting(true);
    setTimeout(() => {
      onComplete();
    }, 800);
  };

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black transition-opacity duration-700 ${
        exiting ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <video
        ref={videoRef}
        src="/box video.mp4"
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay when video ends */}
      <div
        className={`absolute inset-0 bg-black/60 transition-opacity duration-1000 ${
          videoEnded ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      <div
        className={`relative z-10 flex flex-col items-center gap-10 transition-all duration-1000 delay-300 ${
          videoEnded
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8 pointer-events-none"
        }`}
      >
        <img 
          src="https://res.cloudinary.com/de4pazo51/image/upload/v1781949351/WhatsApp_Image_2026-06-19_at_17.10.04__1_-removebg-preview_hdhqbp.png" 
          alt="BoxAura Logo" 
          className="w-56 sm:w-72 md:w-80 h-auto object-contain brightness-0 invert drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]"
        />
        <button
          onClick={handleExplore}
          className="group relative px-7 py-3 sm:px-10 sm:py-4 font-[family-name:var(--font-heading)] text-sm sm:text-lg tracking-[0.15em] sm:tracking-[0.2em] uppercase text-white border border-white/40 rounded-none bg-transparent backdrop-blur-sm cursor-pointer overflow-hidden transition-all duration-500 hover:border-white/80 hover:tracking-[0.3em]"
        >
          <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          <span className="relative z-10">Start Exploring</span>
        </button>
      </div>
    </div>
  );
}
