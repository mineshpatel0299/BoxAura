"use client";

import { useState, useEffect } from "react";
import Preloader from "./Preloader";
import SiteAudio from "./SiteAudio";
import { HeroPlaybackProvider, useHeroPlayback } from "./HeroPlaybackContext";

function AppShellInner({ children }: { children: React.ReactNode }) {
  const [showPreloader, setShowPreloader] = useState(false);
  const [checked, setChecked] = useState(false);
  const { triggerPlayback } = useHeroPlayback();

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("boxaura-preloader-shown");
    if (!alreadyShown) {
      setShowPreloader(true);
    }
    setChecked(true);
  }, []);

  const handleComplete = () => {
    setShowPreloader(false);
    sessionStorage.setItem("boxaura-preloader-shown", "1");
  };

  if (!checked) return null;

  return (
    <>
      <SiteAudio />
      {showPreloader && (
        <Preloader onComplete={handleComplete} onExplore={triggerPlayback} />
      )}
      <div
        className={`transition-opacity duration-700 ${
          showPreloader ? "opacity-0" : "opacity-100"
        }`}
      >
        {children}
      </div>
    </>
  );
}


export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <HeroPlaybackProvider>
      <AppShellInner>{children}</AppShellInner>
    </HeroPlaybackProvider>
  );
}
