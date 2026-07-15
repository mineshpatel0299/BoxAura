"use client";

import { createContext, useCallback, useContext, useRef, useState, type RefObject } from "react";

type HeroPlaybackContextValue = {
  // Bumped on the preloader's "Start Exploring" click — a real user gesture,
  // so the hero video can be (re)started from the beginning.
  playbackSignal: number;
  // The site-wide <audio> element, registered by SiteAudio. Exposed here (not
  // owned locally by SiteAudio) so triggerPlayback can unmute + play it
  // synchronously inside the click handler — see the comment below.
  audioElRef: RefObject<HTMLAudioElement | null>;
  triggerPlayback: () => void;
};

const HeroPlaybackContext = createContext<HeroPlaybackContextValue | null>(null);

export function HeroPlaybackProvider({ children }: { children: React.ReactNode }) {
  const [playbackSignal, setPlaybackSignal] = useState(0);
  const audioElRef = useRef<HTMLAudioElement | null>(null);

  // Called synchronously from inside the preloader's onClick. Unmuting has to
  // happen here — not in a useEffect reacting to playbackSignal — because
  // effects run after React commits/paints, on a separate tick from the
  // click. Strict browsers (iOS Safari in particular) only allow audible
  // play() when it's a direct result of the user gesture; deferring it even
  // by one tick gets the unmuted play() silently rejected.
  const triggerPlayback = useCallback(() => {
    setPlaybackSignal((n) => n + 1);
    const audio = audioElRef.current;
    if (audio) {
      audio.muted = false;
      audio.currentTime = 0;
      audio.play().catch(() => {});
    }
  }, []);

  return (
    <HeroPlaybackContext.Provider value={{ playbackSignal, audioElRef, triggerPlayback }}>
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
