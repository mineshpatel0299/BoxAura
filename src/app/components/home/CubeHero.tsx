"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const CUBE_IMAGES = [
  "/images/wedding_box_2.png",
  "/images/wedding_box_1.png",
  "/images/wedding_box_4.png",
  "/images/wedding_box_6.png",
  "/images/wedding_box_5.png",
  "/images/wedding_box_3.png",
];

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

export default function CubeHero() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: -20, y: 30 });
  const size = useCubeSize();
  const half = size / 2;

  const handlePointerMove = useCallback((e: PointerEvent) => {
    const px = e.clientX / window.innerWidth;
    const py = e.clientY / window.innerHeight;
    setRotation({
      x: -160 + 320 * py,
      y: -160 + 320 * px,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [handlePointerMove]);

  const faces = [
    { transform: `rotateY(0deg) translateZ(${half}px)` },
    { transform: `rotateY(90deg) translateZ(${half}px)` },
    { transform: `rotateY(180deg) translateZ(${half}px)` },
    { transform: `rotateY(-90deg) translateZ(${half}px)` },
    { transform: `rotateX(90deg) translateZ(${half}px)` },
    { transform: `rotateX(-90deg) translateZ(${half}px)` },
  ];

  return (
    <div className="flex items-center justify-center">
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
            transition: "transform 0.15s ease-out",
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
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
