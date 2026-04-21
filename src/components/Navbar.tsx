"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 group">
        <div className="relative w-10 h-10 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 opacity-80 group-hover:opacity-100 transition-opacity" />
          <div className="absolute inset-[3px] rounded-full bg-black/80" />
          <svg
            className="relative w-5 h-5 text-amber-400"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v4M12 19v4M1 12h4M19 12h4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </svg>
        </div>
        <span className="text-xl font-bold tracking-[3px] uppercase text-white/90 group-hover:text-white transition-colors">
          Soler
        </span>
      </Link>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-8">
        {["Home", "Explore", "Galaxy", "About"].map((item) => (
          <Link
            key={item}
            href="#"
            className="text-xs tracking-[2px] uppercase text-white/40 hover:text-white/90 transition-colors duration-300 relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-amber-400/60 group-hover:w-full transition-all duration-300" />
          </Link>
        ))}
      </div>

      {/* CTA */}
      <button className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-xs tracking-[2px] uppercase text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300">
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        Live View
      </button>
    </nav>
  );
}
