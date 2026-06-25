"use client";

import { useState, useEffect } from "react";
import Preloader from "./Preloader";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [showPreloader, setShowPreloader] = useState(false);
  const [checked, setChecked] = useState(false);

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
      {showPreloader && (
        <Preloader onComplete={handleComplete} />
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
