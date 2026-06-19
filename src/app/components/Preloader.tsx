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
        src="/BOX AI AE.mp4"
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay when video ends */}
      <div
        className={`absolute inset-0 bg-black/50 transition-opacity duration-1000 ${
          videoEnded ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      <div
        className={`relative z-10 transition-all duration-1000 delay-300 ${
          videoEnded
            ? "opacity-100 translate-y-16"
            : "opacity-0 translate-y-24 pointer-events-none"
        }`}
      >
        <button
          onClick={handleExplore}
          className="group relative px-10 py-4 font-[family-name:var(--font-heading)] text-lg tracking-[0.2em] uppercase text-white border border-white/40 rounded-none bg-transparent backdrop-blur-sm cursor-pointer overflow-hidden transition-all duration-500 hover:border-white/80 hover:tracking-[0.3em]"
        >
          <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          <span className="relative z-10">Start Exploring</span>
        </button>
      </div>
    </div>
  );
}
