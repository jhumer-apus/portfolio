"use client";

import { useRef } from "react";
import GooeyNav from "./animation/GooeyNav";
import { usePathname } from "next/navigation";
import { items } from "@/data/routes";

export default function Header() {

    const audioRef = useRef<HTMLAudioElement | null>(null);
    const pathname = usePathname()    

    const currRouteIndex = items.findIndex(item => {
        if (item.href === "/") {
            return pathname === "/";
        }
        return pathname.startsWith(item.href + "/") || pathname === item.href;
    });

    return (
        <header className="hidden md:flex bg-black/50 w-screen fixed top-0 py-4 px-24 justify-between text-2xl z-10">
            <div className="font-bold flex items-center gap-4">
                <audio ref={audioRef} src="/assets/audio/song.mp3" preload="auto" loop />
                <div>Jhumz <span className="text-purple-400">Dev</span></div>
            </div>
            <div className="text-lg">
                <GooeyNav
                    items={items}
                    particleCount={15}
                    particleDistances={[90, 10]}
                    particleR={100}
                    animationTime={600}
                    initialActiveIndex={currRouteIndex}
                    timeVariance={300}
                    colors={[1, 2, 3, 1, 2, 3, 1, 4]}
                />
            </div>
        </header>
    )
}