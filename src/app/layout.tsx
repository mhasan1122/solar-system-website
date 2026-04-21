import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PLANETRIX — Solar System Explorer",
  description:
    "Explore our solar system with stunning visuals and smooth animations. Discover planets, their characteristics, and orbital details.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
