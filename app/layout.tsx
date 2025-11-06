// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ParticlesBackground from "@/components/animation/ParticlesBackground"; // client component
import Header from "@/components/Header";
import ToastProvider from "@/components/ToastProvider";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jhumer Apus",
  description: "Portfolio website of Jhumer Apus",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}>
        <ToastProvider />
        <ParticlesBackground /> 
        <Header />
        {children}
      </body>
    </html>
  );
}
