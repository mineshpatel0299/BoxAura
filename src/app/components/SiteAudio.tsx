"use client";

import { useEffect, useState } from "react";
import { useHeroPlayback } from "./HeroPlaybackContext";

export default function SiteAudio() {
  const { audioElRef } = useHeroPlayback();
  const [muted, setMuted] = useState(true);

  // Prime playback as soon as the preloader mounts. Muted autoplay is allowed
  // by every browser, so the track is already running — just silent — ready
  // to go audible the instant it's unmuted (see HeroPlaybackContext, which
  // does that synchronously inside the "Start Exploring" click).
  useEffect(() => {
    audioElRef.current?.play().catch(() => {});
  }, [audioElRef]);

  // Every browser blocks audible autoplay with zero interaction — there's no
  // way around that. But gating sound behind the "Start Exploring" button
  // specifically means it stays silent for the button's entire ~2-3s delayed
  // appearance. Instead, unmute on the very first interaction anywhere on the
  // page (a tap on the preloader video, a keypress, anything), so sound
  // starts as early as the browser will ever allow it to.
  useEffect(() => {
    const audio = audioElRef.current;
    if (!audio) return;
    const events: (keyof DocumentEventMap)[] = ["pointerdown", "keydown", "touchstart"];
    const unlock = () => {
      if (audio.muted) {
        audio.muted = false;
        audio.play().catch(() => {});
      }
      events.forEach((e) => document.removeEventListener(e, unlock, true));
    };
    events.forEach((e) => document.addEventListener(e, unlock, { capture: true, passive: true }));
    return () => events.forEach((e) => document.removeEventListener(e, unlock, true));
  }, [audioElRef]);

  // The mute state can change imperatively (triggerPlayback, or the toggle
  // button below), so mirror the icon off the element's real state rather
  // than driving playback from React state.
  useEffect(() => {
    const audio = audioElRef.current;
    if (!audio) return;
    const onVolumeChange = () => setMuted(audio.muted);
    audio.addEventListener("volumechange", onVolumeChange);
    return () => audio.removeEventListener("volumechange", onVolumeChange);
  }, [audioElRef]);

  const toggleMute = () => {
    const audio = audioElRef.current;
    if (!audio) return;
    audio.muted = !audio.muted;
    if (!audio.muted) audio.play().catch(() => {});
  };

  return (
    <>
      <audio ref={audioElRef} src="/audio.mp3" loop preload="auto" muted />
      <button
        onClick={toggleMute}
        aria-label={muted ? "Unmute background music" : "Mute background music"}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-stone-900/85 backdrop-blur-md flex items-center justify-center shadow-lg shadow-black/15 hover:scale-105 hover:shadow-xl transition-all duration-300"
      >
        {muted ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M15.54 8.46a5 5 0 010 7.07" />
            <path d="M18.36 5.64a9 9 0 010 12.73" />
          </svg>
        )}
      </button>
    </>
  );
}
