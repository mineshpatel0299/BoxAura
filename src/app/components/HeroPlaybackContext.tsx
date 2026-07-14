"use client";

import { createContext, useCallback, useContext, useState } from "react";

type HeroPlaybackContextValue = {
  // Bumped on the preloader's "Start Exploring" click — a real user gesture,
  // so the hero video can be (re)started unmuted from the beginning.
  playbackSignal: number;
  triggerPlayback: () => void;
};

const HeroPlaybackContext = createContext<HeroPlaybackContextValue | null>(null);

export function HeroPlaybackProvider({ children }: { children: React.ReactNode }) {
  const [playbackSignal, setPlaybackSignal] = useState(0);
  const triggerPlayback = useCallback(() => setPlaybackSignal((n) => n + 1), []);

  return (
    <HeroPlaybackContext.Provider value={{ playbackSignal, triggerPlayback }}>
      {children}
    </HeroPlaybackContext.Provider>
  );
}

export function useHeroPlayback() {
  const ctx = useContext(HeroPlaybackContext);
  if (!ctx) {
    throw new Error("useHeroPlayback must be used within a HeroPlaybackProvider");
  }
  return ctx;
}
