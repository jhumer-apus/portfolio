"use client";

import { JSX, useEffect, useRef, useState } from "react";
import GooeyNav from "./animation/GooeyNav";
import { FaVolumeHigh, FaVolumeXmark } from "react-icons/fa6";
import { cn } from "@/lib/utils";

interface Menu_T {
    label: string;
    href: string;
    icon?: JSX.Element | string | null
}
export default function Header() {

    const [isPlay, setIsPlay] = useState<boolean>(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const items: Menu_T[] = [
        {
            label: "Home",
            href: "/#home",
            icon: ""
        },
        {
            label: "About",
            href: "/#about",
            icon: ""
        },
        {
            label: "Portfolio",
            href: "/#portfolio",
            icon: ""
        },
        {
            label: "Contact",
            href: "/#contact",
            icon: ""
        },
    ]

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.3; // set volume first
        }
        if(isPlay) {
            audioRef.current?.play();
        } else {
            audioRef.current?.pause();
        }
    }, [isPlay])

    const speakerClass = "cursor-target hover:text-purple-400 text-3xl"
    return (
        <header className="bg-black/50 w-screen fixed top-0 py-4 px-24 flex justify-between text-2xl z-10">
            <div className="font-bold flex items-center gap-4">
                <audio ref={audioRef} src="/assets/audio/song.mp3" preload="auto" loop />
                <div>Jhumz <span className="text-purple-400">Dev</span></div>
                {isPlay 
                    ? <FaVolumeHigh className={cn(speakerClass)} onClick={() => setIsPlay((curr) => !curr)} />
                    : <FaVolumeXmark className={cn(speakerClass)} onClick={() => setIsPlay((curr) => !curr)} />
                }
            </div>
            <div className="text-lg">
                <GooeyNav
                    items={items}
                    particleCount={15}
                    particleDistances={[90, 10]}
                    particleR={100}
                    animationTime={600}
                    initialActiveIndex={0}
                    timeVariance={300}
                    colors={[1, 2, 3, 1, 2, 3, 1, 4]}
                />
            </div>
        </header>
    )
}