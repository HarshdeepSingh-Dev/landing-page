import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Color Trading App | Trade Colors, Win Big",
  description: "Discover, trade, and collect exclusive color palettes in a gamified marketplace. Join 45K+ active traders and compete for amazing rewards.",
  keywords: ["color trading", "color marketplace", "gamified trading", "palette collection", "color investment"],

  // Open Graph (Social Media Sharing)
  openGraph: {
    title: "Color Trading App | Trade Colors, Win Big",
    description: "Discover, trade, and collect exclusive color palettes in a gamified marketplace. Join 45K+ active traders.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
