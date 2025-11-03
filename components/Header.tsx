"use client";

import { JSX, useEffect, useState } from "react";
import GooeyNav from "./animation/GooeyNav";

interface Menu_T {
    label: string;
    href: string;
    icon?: JSX.Element | string | null
}
export default function Header() {
    const [activeIndex, setActiveIndex] = useState(0);

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

    useEffect(() => {
        const sections = items.map(item => document.getElementById(item.href.replace("#", "")));

        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
            if (entry.isIntersecting) {
                const index = items.findIndex(i => i.href.replace("#", "") === entry.target.id);
                setActiveIndex(index);
            }
            });
        },
        { threshold: 0.5 } // 50% of section visible
        );

        sections.forEach(sec => sec && observer.observe(sec));

        return () => {
        sections.forEach(sec => sec && observer.unobserve(sec));
        };
    }, [items]);

    return (
        <header className="bg-black/10 w-screen fixed top-0 p-12 px-24 flex justify-between text-2xl z-10">
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
                    initialActiveIndex={activeIndex}
                    timeVariance={300}
                    colors={[1, 2, 3, 1, 2, 3, 1, 4]}
                />
            </div>
        </header>
    )
}