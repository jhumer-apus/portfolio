"use client";

import { useState } from "react";
import BlurText from "../animation/BlurText";
import { cn } from "@/lib/utils";

export default function Portfolio() {

    const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

    const portfolioItems = [
        {
            label: "Projects",
            key: "projects"
        },
        {
            label: "Certificates",
            key: "certificates"
        },
        {
            label: "Tech Stacks",
            key: "tech-stacks"
        }
    ]

    return (
        <section id="portfolio" className="min-h-screen">
            <br/>
            <BlurText
                text="Portfolio"
                delay={200}
                animateBy="words"
                direction="top"
                className="text-center m-auto text-6xl text-purple-300 font-semibold w-fit mt-25"
            />
            <div className="flex gap-4 bg-slate-100/20 w-9/10 m-auto p-2 rounded-md mt-10">
                {portfolioItems.map((item, index) => (
                    <div 
                        key={index} 
                        className={cn("w-full p-2 text-center font-bold rounded-sm hover:bg-slate-500/20 cursor-pointer", activeTabIndex == index && "bg-slate-500/20")}
                        onClick={() => setActiveTabIndex(() => index)}
                    >
                        {item.label}
                    </div>
                ))}
            </div>
        </section>
    )
}