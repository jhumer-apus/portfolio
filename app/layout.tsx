// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ParticlesBackground from "@/components/animation/ParticlesBackground"; // client component
import TargetCursor from "@/components/animation/TargetCursor"; // client component
import Header from "@/components/Header";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bogart Chuy",
  description: "Portfolio website of Jhumer Apus",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}>
        {/* Client components are allowed inside a server component */}
        <ParticlesBackground /> 
        <TargetCursor spinDuration={3} hideDefaultCursor={true} />
        <Header />
        {children}
      </body>
    </html>
  );
}
