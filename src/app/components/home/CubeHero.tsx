"use client";

import { useEffect, useRef, useState } from "react";

const CUBE_IMAGES = [
  "/images/wedding_box_2.png",
  "/images/wedding_box_1.png",
  "/images/wedding_box_4.png",
  "/images/wedding_box_6.png",
  "/images/wedding_box_5.png",
  "/images/wedding_box_3.png",
];

const MOBILE_BREAKPOINT = 768;

function useCubeSize() {
  const [size, setSize] = useState(260);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 480) setSize(150);
      else if (w < 640) setSize(180);
      else if (w < 768) setSize(210);
      else setSize(260);
    };
    update();
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);

  return size;
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    update();
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);

  return isMobile;
}

export default function CubeHero() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: -15, y: 30 });
  const autoAngle = useRef({ x: -15, y: 30 });
  const isDragging = useRef(false);
  const previousTouch = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);
  const size = useCubeSize();
  const isMobile = useIsMobile();
  const half = size / 2;

  // Desktop global mouse tracking (Parallax)
  useEffect(() => {
    if (!isMobile) {
      const onGlobalMove = (e: PointerEvent) => {
        const px = e.clientX / window.innerWidth;
        const py = e.clientY / window.innerHeight;
        setRotation({
          x: -160 + 320 * py,
          y: -160 + 320 * px,
        });
      };
      window.addEventListener("pointermove", onGlobalMove, { passive: true });
      return () => window.removeEventListener("pointermove", onGlobalMove);
    }
  }, [isMobile]);

  // Mobile auto-rotation loop
  useEffect(() => {
    if (isMobile) {
      let lastTime = performance.now();
      const animate = (now: number) => {
        const delta = (now - lastTime) / 1000;
        lastTime = now;
        
        if (!isDragging.current) {
          autoAngle.current.y += delta * 25; // Rotate 25 deg per sec
          setRotation({
            x: autoAngle.current.x,
            y: autoAngle.current.y,
          });
        }
        rafRef.current = requestAnimationFrame(animate);
      };
      rafRef.current = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(rafRef.current);
    }
  }, [isMobile]);

  // Mobile Drag Handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    if (!isMobile) return;
    isDragging.current = true;
    previousTouch.current = { x: e.clientX, y: e.clientY };
    try {
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    } catch (err) {}
  };

  const handlePointerMoveLocal = (e: React.PointerEvent) => {
    if (!isMobile || !isDragging.current) return;
    
    const deltaX = e.clientX - previousTouch.current.x;
    const deltaY = e.clientY - previousTouch.current.y;
    
    autoAngle.current.y += deltaX * 0.5;
    autoAngle.current.x -= deltaY * 0.5;
    
    // Clamp X rotation so it doesn't flip completely upside down
    autoAngle.current.x = Math.max(-60, Math.min(60, autoAngle.current.x));

    setRotation({
      x: autoAngle.current.x,
      y: autoAngle.current.y,
    });
    
    previousTouch.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerEnd = (e: React.PointerEvent) => {
    if (!isMobile) return;
    isDragging.current = false;
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch (err) {}
  };

  const faces = [
    { transform: `rotateY(0deg) translateZ(${half}px)` },
    { transform: `rotateY(90deg) translateZ(${half}px)` },
    { transform: `rotateY(180deg) translateZ(${half}px)` },
    { transform: `rotateY(-90deg) translateZ(${half}px)` },
    { transform: `rotateX(90deg) translateZ(${half}px)` },
    { transform: `rotateX(-90deg) translateZ(${half}px)` },
  ];

  return (
    <div 
      className={`flex items-center justify-center ${isMobile ? "cursor-grab active:cursor-grabbing" : ""}`}
      style={{ touchAction: isMobile ? "none" : "auto" }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMoveLocal}
      onPointerUp={handlePointerEnd}
      onPointerCancel={handlePointerEnd}
    >
      <div
        ref={wrapRef}
        style={{
          width: size,
          height: size,
          perspective: 1200,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            transformStyle: "preserve-3d",
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            transition: isMobile && !isDragging.current ? "none" : "transform 0.1s ease-out",
          }}
        >
          {faces.map((face, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                backgroundImage: `url(${CUBE_IMAGES[i]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transform: face.transform,
                backfaceVisibility: "hidden",
                borderRadius: 4,
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
