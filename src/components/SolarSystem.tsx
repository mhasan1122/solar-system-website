"use client";

import { motion, AnimatePresence } from "framer-motion";
import { planets } from "@/data/planets";

interface SolarSystemProps {
  activePlanet: number;
  onPlanetClick: (id: number) => void;
}

export default function SolarSystem({
  activePlanet,
  onPlanetClick,
}: SolarSystemProps) {
  const activePlanetData = planets[activePlanet];

  return (
    <div className="absolute inset-0 flex items-center justify-center z-10">
      <div className="solar-system-container relative" style={{ width: "1200px", height: "1200px" }}>
        {/* Orbit Lines */}
        {planets
          .filter((p) => p.orbitRadius > 0)
          .map((planet) => (
            <div
              key={`orbit-${planet.id}`}
              className="orbit-line"
              style={{
                width: `${planet.orbitRadius * 2}px`,
                height: `${planet.orbitRadius * 2}px`,
                opacity: activePlanet === 0 || activePlanet === planet.id ? 0.08 : 0.03,
                transition: "opacity 0.5s ease",
              }}
            />
          ))}

        {/* Sun */}
        <motion.div
          className="absolute top-1/2 left-1/2 cursor-pointer"
          style={{
            width: "120px",
            height: "120px",
            x: "-50%",
            y: "-50%",
          }}
          animate={{
            scale: activePlanet === 0 ? 1.1 : 0.8,
            opacity: activePlanet === 0 ? 1 : 0.6,
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          onClick={() => onPlanetClick(0)}
        >
          <div className="sun-glow w-full h-full relative">
            {/* Sun inner glow layers */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-300 via-amber-400 to-orange-600" />
            <div className="absolute inset-[2px] rounded-full bg-gradient-to-br from-yellow-200 via-amber-300 to-orange-500" />
            <div className="absolute inset-0 rounded-full bg-gradient-radial from-white/30 via-transparent to-transparent" />
            {/* Corona effect */}
            <div
              className="absolute -inset-4 rounded-full opacity-40"
              style={{
                background:
                  "radial-gradient(circle, rgba(253,184,19,0.3) 0%, rgba(253,184,19,0.1) 40%, transparent 70%)",
              }}
            />
            <div
              className="absolute -inset-8 rounded-full opacity-20"
              style={{
                background:
                  "radial-gradient(circle, rgba(253,184,19,0.2) 0%, rgba(253,184,19,0.05) 40%, transparent 70%)",
              }}
            />
          </div>
        </motion.div>

        {/* Planets on orbits */}
        {planets
          .filter((p) => p.orbitRadius > 0)
          .map((planet) => {
            const isActive = activePlanet === planet.id;
            return (
              <div
                key={planet.id}
                className="orbit-container"
                style={{
                  width: `${planet.orbitRadius * 2}px`,
                  height: `${planet.orbitRadius * 2}px`,
                  "--orbit-duration": `${planet.orbitDuration}s`,
                  animationPlayState: isActive ? "paused" : "running",
                } as React.CSSProperties}
              >
                <motion.div
                  className="planet-on-orbit"
                  onClick={() => onPlanetClick(planet.id)}
                  animate={{
                    scale: isActive ? 1.8 : 1,
                    opacity:
                      activePlanet === 0 || isActive
                        ? 1
                        : 0.4,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <div
                    className="planet-counter-rotate"
                    style={{
                      "--orbit-duration": `${planet.orbitDuration}s`,
                      animationPlayState: isActive ? "paused" : "running",
                    } as React.CSSProperties}
                  >
                    {/* Planet body */}
                    <div
                      className="relative rounded-full"
                      style={{
                        width: `${planet.size}px`,
                        height: `${planet.size}px`,
                      }}
                    >
                      {/* Planet gradient sphere */}
                      <div
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: `radial-gradient(circle at 35% 35%, ${planet.color}dd, ${planet.color}88 50%, ${planet.color}44 100%)`,
                          boxShadow: isActive
                            ? `0 0 20px ${planet.glowColor}, 0 0 40px ${planet.glowColor}, inset -4px -4px 8px rgba(0,0,0,0.5)`
                            : `0 0 10px ${planet.glowColor}, inset -3px -3px 6px rgba(0,0,0,0.4)`,
                          transition: "box-shadow 0.5s ease",
                        }}
                      />
                      {/* Light reflection */}
                      <div
                        className="absolute rounded-full bg-white/20"
                        style={{
                          width: `${planet.size * 0.3}px`,
                          height: `${planet.size * 0.3}px`,
                          top: `${planet.size * 0.15}px`,
                          left: `${planet.size * 0.2}px`,
                          filter: "blur(2px)",
                        }}
                      />

                      {/* Saturn ring */}
                      {planet.name === "Saturn" && (
                        <div
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 opacity-60"
                          style={{
                            width: `${planet.size * 1.8}px`,
                            height: `${planet.size * 0.5}px`,
                            borderColor: `${planet.color}88`,
                            transform: "translate(-50%, -50%) rotateX(75deg)",
                          }}
                        />
                      )}
                    </div>

                    {/* Planet label */}
                    <AnimatePresence>
                      {(activePlanet === 0 || isActive) && (
                        <motion.span
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 text-[9px] tracking-[2px] uppercase text-white/50 whitespace-nowrap"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {planet.name}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </div>
            );
          })}

        {/* Active planet highlight ring */}
        <AnimatePresence>
          {activePlanet > 0 && (
            <motion.div
              className="absolute top-1/2 left-1/2 rounded-full pointer-events-none"
              style={{
                width: `${activePlanetData.orbitRadius * 2}px`,
                height: `${activePlanetData.orbitRadius * 2}px`,
                border: `1px solid ${activePlanetData.color}30`,
                x: "-50%",
                y: "-50%",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              transition={{ duration: 0.5 }}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
