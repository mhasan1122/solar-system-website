"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { PLANETS, SUN_DATA } from "@/data/planets";

/* ─── helpers ─── */
function getAllData(name: string) {
  if (name === "SUN") return SUN_DATA;
  const p = PLANETS.find((x) => x.name === name);
  if (!p) return SUN_DATA;
  return { name: p.name, img: p.img, galaxy: p.galaxy, diameter: p.diameter, day: p.day, temp: p.temp };
}

/* Get side planets based on selection */
function getSidePlanets(selectedName: string) {
  const allNames = ["SUN", ...PLANETS.map((p) => p.name)];
  const idx = allNames.indexOf(selectedName);
  const leftIdx = idx <= 0 ? allNames.length - 1 : idx - 1;
  const rightIdx = idx >= allNames.length - 1 ? 0 : idx + 1;
  const leftName = allNames[leftIdx];
  const rightName = allNames[rightIdx];

  const getImg = (n: string) => {
    if (n === "SUN") return SUN_DATA.img;
    return PLANETS.find((p) => p.name === n)?.img || "";
  };

  return {
    left: { name: leftName, img: getImg(leftName), label: leftName },
    right: { name: rightName, img: getImg(rightName), label: rightName },
  };
}

/* ─── Starfield ─── */
function Starfield() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.innerHTML = "";
    for (let i = 0; i < 180; i++) {
      const s = document.createElement("span");
      s.className = "star";
      const sz = Math.random() * 2.2 + 0.6;
      s.style.width = sz + "px";
      s.style.height = sz + "px";
      s.style.top = Math.random() * 100 + "%";
      s.style.left = Math.random() * 100 + "%";
      s.style.opacity = String(Math.random() * 0.7 + 0.15);
      el.appendChild(s);
    }
  }, []);
  return <div ref={ref} className="starfield" />;
}

/* ─── Static orbit positions (values are fractions of the stage width) ─── */
const ORBIT_POSITIONS: { angle: number; rxPct: number; ryPct: number; sizePct: number }[] = [
  { angle: -0.3, rxPct: 0.13, ryPct: 0.095, sizePct: 0.022 }, // Mercury
  { angle: 0.6,  rxPct: 0.18, ryPct: 0.125, sizePct: 0.026 }, // Venus
  { angle: 1.8,  rxPct: 0.23, ryPct: 0.160, sizePct: 0.028 }, // Earth
  { angle: 2.8,  rxPct: 0.28, ryPct: 0.195, sizePct: 0.023 }, // Mars
  { angle: 3.8,  rxPct: 0.33, ryPct: 0.230, sizePct: 0.037 }, // Jupiter
  { angle: 4.6,  rxPct: 0.38, ryPct: 0.265, sizePct: 0.034 }, // Saturn
  { angle: 5.4,  rxPct: 0.28, ryPct: 0.250, sizePct: 0.030 }, // Uranus
  { angle: 6.0,  rxPct: 0.26, ryPct: 0.280, sizePct: 0.028 }, // Neptune
];

/* ─── Main component ─── */
export default function Home() {
  const [selected, setSelected] = useState("SUN");
  const [fadeOut, setFadeOut] = useState(false);
  const [overlayOn, setOverlayOn] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const [stageSize, setStageSize] = useState({ w: 1300, h: 940 });

  const currentData = getAllData(selected);
  const sidePlanets = getSidePlanets(selected);

  /* ── measure stage ── */
  useEffect(() => {
    const measure = () => {
      if (stageRef.current) {
        setStageSize({
          w: stageRef.current.offsetWidth,
          h: stageRef.current.offsetHeight,
        });
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  /* ── select planet ── */
  const selectPlanet = useCallback(
    (name: string) => {
      if (name === selected) return;
      setFadeOut(true);
      setOverlayOn(true);
      setTimeout(() => {
        setSelected(name);
        setFadeOut(false);
        setTimeout(() => setOverlayOn(false), 350);
      }, 400);
    },
    [selected]
  );

  /* compute dot positions — everything expressed as a % of the inner stage
     so it stays perfectly centered at every viewport width */
  const W = stageSize.w || 1300;
  const H = stageSize.h || 900;

  const dotPositions = PLANETS.map((p, i) => {
    const pos = ORBIT_POSITIONS[i];
    // On small screens the center planet gets visually larger relative to the stage,
    // so push orbit dots a bit outward and cap their size to avoid overlaps.
    const isSmall = W < 700;
    const orbitScale = isSmall ? 1.18 : 1;
    const sizeScale = isSmall ? 0.78 : 1;

    const x = W / 2 + (pos.rxPct * orbitScale) * W * Math.cos(pos.angle);
    const y = H / 2 + (pos.ryPct * orbitScale) * W * Math.sin(pos.angle);
    const szRaw = pos.sizePct * W * sizeScale;
    const sz = Math.max(10, Math.min(szRaw, isSmall ? 26 : 48));
    const depth = Math.sin(pos.angle);
    const opacity = 0.65 + 0.35 * ((depth + 1) / 2);
    return {
      planet: p,
      left: `${x.toFixed(2)}px`,
      top: `${y.toFixed(2)}px`,
      width: `${sz.toFixed(2)}px`,
      height: `${sz.toFixed(2)}px`,
      zIndex: depth > 0 ? 25 : 5,
      opacity: Number(opacity.toFixed(3)),
    };
  });

  return (
    <>
      <Starfield />

      {/* overlay */}
      <div className={`overlay ${overlayOn ? "on" : ""}`} />

      {/* navbar */}
      <nav className="navbar">
        <div className="navbar-logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/tasklogo.png" alt="Planetrix" className="brand-logo" />
        </div>
      </nav>

      {/* back button */}
      <button
        className={`back-btn ${selected !== "SUN" ? "show" : ""}`}
        onClick={() => selectPlanet("SUN")}
      >
        ← SOLAR SYSTEM
      </button>

      {/* info panel */}
      <div className={`info-panel ${fadeOut ? "fade-out" : ""}`}>
        <div className="planet-name">{currentData.name}</div>
        <div className="stats-row">
          <div className="stat">
            <span className="stat-lbl">Galaxy</span>
            <span className="stat-val">{currentData.galaxy}</span>
          </div>
          <div className="stat">
            <span className="stat-lbl">Diameter</span>
            <span className="stat-val">{currentData.diameter}</span>
          </div>
          <div className="stat">
            <span className="stat-lbl">Length of Day</span>
            <span className="stat-val">{currentData.day}</span>
          </div>
          <div className="stat">
            <span className="stat-lbl">Average Temperature</span>
            <span className="stat-val">{currentData.temp}</span>
          </div>
        </div>
      </div>

      {/* stage */}
      <div className="stage">
        {/* left side planet — always visible, outside orbit area */}
        <div
          className="side-planet side-left"
          onClick={() => selectPlanet(sidePlanets.left.name)}
        >
          <div className="sp-img-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={sidePlanets.left.img} alt={sidePlanets.left.label} />
          </div>
          <span className="sp-label">{sidePlanets.left.label}</span>
        </div>

        {/* centered inner stage: rings + sun + dots all share this box */}
        <div ref={stageRef} className="stage-inner">
          {/* orbit rings image — ALWAYS visible */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/Solar%20System%2002.png"
            alt="Orbit rings"
            className="orbit-image"
          />

          {/* center image */}
          <div
            className={`center-wrap ${selected === "SUN" ? "sun-glow" : "planet-glow"}`}
            onClick={() => { if (selected !== "SUN") selectPlanet("SUN"); }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="center-img"
              src={currentData.img}
              alt={currentData.name}
            />
          </div>

          {/* orbiting planet dots — static positions, always visible */}
          {dotPositions.map(({ planet, left, top, width, height, zIndex, opacity }) => (
            <div
              key={planet.name}
              className="orb-dot"
              onClick={() => selectPlanet(planet.name)}
              title={planet.name}
              style={{
                left,
                top,
                width,
                height,
                zIndex,
                opacity,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={planet.img} alt={planet.name} />
            </div>
          ))}
        </div>

        {/* right side planet */}
        <div
          className="side-planet side-right"
          onClick={() => selectPlanet(sidePlanets.right.name)}
        >
          <div className="sp-img-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={sidePlanets.right.img} alt={sidePlanets.right.label} />
          </div>
          <span className="sp-label">{sidePlanets.right.label}</span>
        </div>
      </div>

      {/* footer */}
      <footer className="site-footer">
        <div className="footer-l">
          <div className="footer-logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/tasklogo.png" alt="Planetrix" className="brand-logo brand-logo-sm" />
          </div>
          <p className="footer-desc">
            Lorem ipsum dolor sit amet consectetur. Fusce sed aliquam amet curabitur eget quam.
            Tortor nam volutpat tincidunt nibh lacus vitae sed mi. Viverra eu commodo sed sed
            commodo commodo urna sed.
          </p>
        </div>
        <div className="footer-links">
          <a href="#">About Us</a>
          <a href="#">Blog</a>
          <a href="#">Career</a>
          <a href="#">FAQ</a>
          <a href="#">Contact us</a>
        </div>
      </footer>
    </>
  );
}
