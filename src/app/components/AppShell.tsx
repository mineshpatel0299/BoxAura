"use client";

import { useState } from "react";
import Preloader from "./Preloader";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [showPreloader, setShowPreloader] = useState(true);

  return (
    <>
      {showPreloader && (
        <Preloader onComplete={() => setShowPreloader(false)} />
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
