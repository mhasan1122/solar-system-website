"use client";

export default function Footer() {
  const links = [
    { label: "About Us", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Career", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Contact Us", href: "#" },
  ];

  return (
    <footer className="absolute bottom-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4">
      <p className="text-[10px] tracking-[2px] uppercase text-white/20">
        © 2025 Soler. All rights reserved.
      </p>
      <div className="hidden md:flex items-center gap-6">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-[10px] tracking-[2px] uppercase text-white/25 hover:text-white/60 transition-colors duration-300"
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
