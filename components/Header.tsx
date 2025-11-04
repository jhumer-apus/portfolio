"use client";

import { JSX, useEffect, useState } from "react";
import GooeyNav from "./animation/GooeyNav";

interface Menu_T {
    label: string;
    href: string;
    icon?: JSX.Element | string | null
}
export default function Header() {

    const items: Menu_T[] = [
        {
            label: "Home",
            href: "#home",
            icon: ""
        },
        {
            label: "About",
            href: "#about",
            icon: ""
        },
        {
            label: "Portfolio",
            href: "#portfolio",
            icon: ""
        },
        {
            label: "Contact",
            href: "#contact",
            icon: ""
        },
    ]

    return (
        <header className="bg-black/50 w-screen fixed top-0 py-4 px-24 flex justify-between text-2xl z-10">
            <div className="font-bold">
                Jhumz <span className="text-purple-400">Dev</span>
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