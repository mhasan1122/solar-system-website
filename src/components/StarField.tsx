"use client";

import { useMemo } from "react";

function pseudoRandom(seed: number) {
  const x = Math.sin(seed * 9999.91) * 10000;
  return x - Math.floor(x);
}

export default function StarField() {
  const stars = useMemo(
    () =>
      Array.from({ length: 200 }, (_, i) => ({
        id: i,
        x: pseudoRandom(i + 1) * 100,
        y: pseudoRandom(i + 501) * 100,
        size: pseudoRandom(i + 1001) * 2.5 + 0.5,
        twinkleDuration: pseudoRandom(i + 1501) * 4 + 2,
        twinkleDelay: pseudoRandom(i + 2001) * 5,
        opacity: pseudoRandom(i + 2501) * 0.7 + 0.3,
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            "--twinkle-duration": `${star.twinkleDuration}s`,
            "--twinkle-delay": `${star.twinkleDelay}s`,
          } as React.CSSProperties}
        />
      ))}
      {/* Nebula-like gradient patches */}
      <div className="absolute top-[10%] left-[20%] w-[400px] h-[400px] rounded-full bg-purple-900/5 blur-[100px]" />
      <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] rounded-full bg-blue-900/5 blur-[80px]" />
      <div className="absolute top-[60%] left-[60%] w-[350px] h-[350px] rounded-full bg-indigo-900/5 blur-[90px]" />
    </div>
  );
}
