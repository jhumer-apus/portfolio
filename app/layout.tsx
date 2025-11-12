// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-photo-view/dist/react-photo-view.css';
import ParticlesBackground from "@/components/animation/ParticlesBackground"; // client component
import Header from "@/components/Header";
import ToastProvider from "@/components/ToastProvider";
import HeaderMobile from "@/components/HeaderMobile";
import SideBar from "@/components/SideBar";
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

        {/* Header and Header Mobile */}
        <Header /> 
        <HeaderMobile />

        <SideBar />
        {children}
      </body>
    </html>
  );
}
