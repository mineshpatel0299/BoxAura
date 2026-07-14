"use client";

import { useState, useRef, useEffect } from "react";

export default function Preloader({
  onComplete,
  onExplore,
}: {
  onComplete: () => void;
  onExplore?: () => void;
}) {
  const [doorOpen, setDoorOpen] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);
  const [exiting, setExiting] = useState(false);
  // Preloader only ever mounts on the client (AppShell gates it behind a client-only
  // check), so it's safe to read matchMedia synchronously here instead of via an effect —
  // that avoids an extra render pass that delayed the <video> from mounting and left a
  // frozen ~1s gap before playback could even start.
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches
  );
  const videoRef = useRef<HTMLVideoElement>(null);

  const videoSrc = isMobile ? "/m.mp4" : "/box video.mp4";
  // Door starts swinging open a little later on the mobile cut; logo follows with a slight delay.
  const DOOR_OPEN_TIME = isMobile ? 2.7 : 2.3;
  // Logo fades in a touch before the door finishes opening, so it doesn't feel like it lags behind.
  const LOGO_APPEAR_TIME = DOOR_OPEN_TIME - 0.4;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const mql = window.matchMedia("(max-width: 767px)");
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener("change", onChange);
    return () => {
      document.body.style.overflow = "";
      mql.removeEventListener("change", onChange);
    };
  }, []);

  // Button shows a beat before the video's natural end, once its duration is known.
  const BUTTON_LEAD_TIME = 0.6;

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    const t = video?.currentTime ?? 0;
    if (!logoVisible && t >= LOGO_APPEAR_TIME) {
      setLogoVisible(true);
    }
    if (!doorOpen && t >= DOOR_OPEN_TIME) {
      setDoorOpen(true);
    }
    if (
      !buttonVisible &&
      video &&
      Number.isFinite(video.duration) &&
      t >= video.duration - BUTTON_LEAD_TIME
    ) {
      setButtonVisible(true);
    }
  };

  const handleVideoEnd = () => {
    setLogoVisible(true);
    setDoorOpen(true);
    setButtonVisible(true);
  };

  const handleExplore = () => {
    // Fire synchronously within the click so this counts as the user gesture
    // browsers require to allow the hero video to play with sound.
    onExplore?.();
    setExiting(true);
    setTimeout(() => {
      onComplete();
    }, 800);
  };

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-black transition-opacity duration-700 ${
        exiting ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <video
        ref={videoRef}
        src={videoSrc}
        autoPlay
        muted
        playsInline
        preload="auto"
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleVideoEnd}
        className="absolute inset-0 w-full h-full object-cover scale-125 origin-top"
      />

      {/* Dark overlay as soon as the logo arrives */}
      <div
        className={`absolute inset-0 bg-black/60 transition-opacity duration-1000 ${
          doorOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      <div className="relative z-10 flex flex-col items-center gap-10">
        <img
          src="https://res.cloudinary.com/de4pazo51/image/upload/v1781949351/WhatsApp_Image_2026-06-19_at_17.10.04__1_-removebg-preview_hdhqbp.png"
          alt="BoxAura Logo"
          className={`w-80 sm:w-md md:w-lg h-auto object-contain drop-shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all duration-1000 ${
            logoVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        />
        <button
          onClick={handleExplore}
          className={`group relative px-9 py-4 sm:px-14 sm:py-6 font-[family-name:var(--font-heading)] text-base sm:text-xl tracking-[0.15em] sm:tracking-[0.2em] uppercase text-white border border-white/40 rounded-none bg-transparent backdrop-blur-sm cursor-pointer overflow-hidden transition-all duration-500 hover:border-white/80 hover:tracking-[0.3em] ${
            buttonVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        >
          <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          <span className="relative z-10">Start Exploring</span>
        </button>
      </div>
    </div>
  );
}
