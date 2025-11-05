"use client";

import { JSX, useRef } from "react";
import GooeyNav from "./animation/GooeyNav";
import { usePathname } from "next/navigation";

interface Menu_T {
    label: string;
    href: string;
    icon?: JSX.Element | string | null
}

export default function Header() {

    const audioRef = useRef<HTMLAudioElement | null>(null);
    const pathname = usePathname()    

    const items: Menu_T[] = [
        {
            label: "Home",
            href: "/",
            icon: ""
        },
        {
            label: "About",
            href: "/about",
            icon: ""
        },
        {
            label: "Portfolio",
            href: "/portfolio",
            icon: ""
        },
        {
            label: "Contact",
            href: "/contact",
            icon: ""
        },
    ]

    const currRouteIndex = items.findIndex(item => item.href == pathname);

    return (
        <header className="bg-black/50 w-screen fixed top-0 py-4 px-24 flex justify-between text-2xl z-10">
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