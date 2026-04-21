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
