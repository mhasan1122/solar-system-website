"use client";

import { Planet } from "@/data/planets";

interface PlanetNavProps {
  planets: Planet[];
  activePlanet: number;
  onPlanetClick: (id: number) => void;
}

export default function PlanetNav({
  planets,
  activePlanet,
  onPlanetClick,
}: PlanetNavProps) {
  return (
    <div className="absolute right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col items-end gap-1">
      {planets.map((planet) => (
        <button
          key={planet.id}
          onClick={() => onPlanetClick(planet.id)}
          className={`planet-nav-item ${activePlanet === planet.id ? "active" : ""}`}
        >
          <div className="flex items-center gap-3">
            <span className="text-right">{planet.name}</span>
            <div
              className="w-2 h-2 rounded-full transition-all duration-300"
              style={{
                backgroundColor:
                  activePlanet === planet.id
                    ? planet.color
                    : "rgba(255,255,255,0.15)",
                boxShadow:
                  activePlanet === planet.id
                    ? `0 0 8px ${planet.glowColor}`
                    : "none",
              }}
            />
          </div>
        </button>
      ))}
    </div>
  );
}
