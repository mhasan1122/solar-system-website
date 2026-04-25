export interface PlanetData {
  name: string;
  img: string;
  galaxy: string;
  diameter: string;
  day: string;
  temp: string;
  orbitRx: number;
  orbitRy: number;
  angle: number;
  size: number;
  speed: number;
}

// Newer UI uses a richer planet model (ids, colors, descriptions, circular orbits).
export type Planet = {
  id: number;
  name: string;
  description: string;
  img: string;
  galaxy: string;
  diameter: string;
  dayLength: string;
  temperature: string;
  color: string;
  glowColor: string;
  orbitRadius: number;
  orbitDuration: number;
  size: number;
};

export const SUN_DATA = {
  name: "SUN",
  img: "/images/sun.png",
  galaxy: "Milky Way",
  diameter: "1,392,684 km",
  day: "---",
  temp: "6000 Kelvin",
};

export const PLANETS: PlanetData[] = [
  {
    name: "MERCURY",
    img: "/images/Mercury.png",
    galaxy: "Milky Way",
    diameter: "4,879 km",
    day: "58d 15h 30m",
    temp: "167 °C",
    orbitRx: 190,
    orbitRy: 95,
    angle: 0,
    size: 32,
    speed: 0.012,
  },
  {
    name: "VENUS",
    img: "/images/venus.png",
    galaxy: "Milky Way",
    diameter: "12,104 km",
    day: "116d 18h",
    temp: "464 °C",
    orbitRx: 250,
    orbitRy: 125,
    angle: 1.2,
    size: 38,
    speed: 0.008,
  },
  {
    name: "EARTH",
    img: "/images/earth.png",
    galaxy: "Milky Way",
    diameter: "12,756 km",
    day: "0d 23h 56m",
    temp: "15 °C",
    orbitRx: 310,
    orbitRy: 155,
    angle: 2.5,
    size: 40,
    speed: 0.006,
  },
  {
    name: "MARS",
    img: "/images/mars.png",
    galaxy: "Milky Way",
    diameter: "6,792 km",
    day: "1d 0h 37m",
    temp: "-65 °C",
    orbitRx: 370,
    orbitRy: 185,
    angle: 3.8,
    size: 34,
    speed: 0.005,
  },
  {
    name: "JUPITER",
    img: "/images/jupiter.png",
    galaxy: "Milky Way",
    diameter: "142,984 km",
    day: "0d 9h 56m",
    temp: "-110 °C",
    orbitRx: 440,
    orbitRy: 220,
    angle: 5.0,
    size: 55,
    speed: 0.003,
  },
  {
    name: "SATURN",
    img: "/images/saturn.png",
    galaxy: "Milky Way",
    diameter: "120,536 km",
    day: "0d 10h 42m",
    temp: "-140 °C",
    orbitRx: 520,
    orbitRy: 260,
    angle: 0.8,
    size: 50,
    speed: 0.002,
  },
  {
    name: "URANUS",
    img: "/images/Uranus.png",
    galaxy: "Milky Way",
    diameter: "51,118 km",
    day: "0d 17h 14m",
    temp: "-195 °C",
    orbitRx: 600,
    orbitRy: 300,
    angle: 3.2,
    size: 42,
    speed: 0.0015,
  },
  {
    name: "NEPTUNE",
    img: "/images/nepturn.png",
    galaxy: "Milky Way",
    diameter: "49,528 km",
    day: "0d 16h 6m",
    temp: "-200 °C",
    orbitRx: 680,
    orbitRy: 340,
    angle: 4.5,
    size: 40,
    speed: 0.001,
  },
];

export const planets: Planet[] = [
  {
    id: 0,
    name: "Sun",
    description: "The star at the center of our solar system and the source of all light and heat on Earth.",
    img: SUN_DATA.img,
    galaxy: SUN_DATA.galaxy,
    diameter: SUN_DATA.diameter,
    dayLength: SUN_DATA.day,
    temperature: SUN_DATA.temp,
    color: "#FDB813",
    glowColor: "rgba(253,184,19,0.8)",
    orbitRadius: 0,
    orbitDuration: 0,
    size: 120,
  },
  {
    id: 1,
    name: "Mercury",
    description: "Smallest and closest planet to the Sun, with a heavily cratered surface.",
    img: "/images/Mercury.png",
    galaxy: "Milky Way",
    diameter: "4,879 km",
    dayLength: "58d 15h 30m",
    temperature: "167 °C",
    color: "#A9A9A9",
    glowColor: "rgba(169,169,169,0.7)",
    orbitRadius: 190,
    orbitDuration: 7,
    size: 18,
  },
  {
    id: 2,
    name: "Venus",
    description: "A hot, cloud-covered world with extreme surface temperatures and a dense atmosphere.",
    img: "/images/venus.png",
    galaxy: "Milky Way",
    diameter: "12,104 km",
    dayLength: "116d 18h",
    temperature: "464 °C",
    color: "#D8A24A",
    glowColor: "rgba(216,162,74,0.7)",
    orbitRadius: 250,
    orbitDuration: 10,
    size: 24,
  },
  {
    id: 3,
    name: "Earth",
    description: "Our home planet, the only known world to harbor life, with vast oceans and a protective atmosphere.",
    img: "/images/earth.png",
    galaxy: "Milky Way",
    diameter: "12,756 km",
    dayLength: "0d 23h 56m",
    temperature: "15 °C",
    color: "#3B82F6",
    glowColor: "rgba(59,130,246,0.7)",
    orbitRadius: 310,
    orbitDuration: 14,
    size: 26,
  },
  {
    id: 4,
    name: "Mars",
    description: "The Red Planet, known for its iron-rich dust, ancient riverbeds, and towering volcanoes.",
    img: "/images/mars.png",
    galaxy: "Milky Way",
    diameter: "6,792 km",
    dayLength: "1d 0h 37m",
    temperature: "-65 °C",
    color: "#EF4444",
    glowColor: "rgba(239,68,68,0.7)",
    orbitRadius: 370,
    orbitDuration: 18,
    size: 22,
  },
  {
    id: 5,
    name: "Jupiter",
    description: "The largest planet, a gas giant with powerful storms including the Great Red Spot.",
    img: "/images/jupiter.png",
    galaxy: "Milky Way",
    diameter: "142,984 km",
    dayLength: "0d 9h 56m",
    temperature: "-110 °C",
    color: "#F59E0B",
    glowColor: "rgba(245,158,11,0.7)",
    orbitRadius: 440,
    orbitDuration: 24,
    size: 34,
  },
  {
    id: 6,
    name: "Saturn",
    description: "Famous for its bright ring system, Saturn is a gas giant with many moons.",
    img: "/images/saturn.png",
    galaxy: "Milky Way",
    diameter: "120,536 km",
    dayLength: "0d 10h 42m",
    temperature: "-140 °C",
    color: "#FCD34D",
    glowColor: "rgba(252,211,77,0.7)",
    orbitRadius: 520,
    orbitDuration: 30,
    size: 32,
  },
  {
    id: 7,
    name: "Uranus",
    description: "An ice giant that rotates on its side, with a pale blue-green color from methane in its atmosphere.",
    img: "/images/Uranus.png",
    galaxy: "Milky Way",
    diameter: "51,118 km",
    dayLength: "0d 17h 14m",
    temperature: "-195 °C",
    color: "#22D3EE",
    glowColor: "rgba(34,211,238,0.7)",
    orbitRadius: 600,
    orbitDuration: 36,
    size: 28,
  },
  {
    id: 8,
    name: "Neptune",
    description: "A distant ice giant with deep blue color and fierce winds in its upper atmosphere.",
    img: "/images/nepturn.png",
    galaxy: "Milky Way",
    diameter: "49,528 km",
    dayLength: "0d 16h 6m",
    temperature: "-200 °C",
    color: "#6366F1",
    glowColor: "rgba(99,102,241,0.7)",
    orbitRadius: 680,
    orbitDuration: 42,
    size: 28,
  },
];

// Side planets config (shown half-cut at edges in solar system view)
export const SIDE_PLANETS = {
  left: {
    name: "NEPTUNE",
    img: "/images/nepturn.png",
    size: 220,
    label: "NEPTUNE",
  },
  right: {
    name: "MERCURY",
    img: "/images/Mercury.png",
    size: 200,
    label: "MERCURY",
  },
};
