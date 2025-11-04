"use client";

import { useState } from "react";
import BlurText from "../animation/BlurText";
import { cn } from "@/lib/utils";
import { FaCertificate, FaCode } from "react-icons/fa";
import { FaScrewdriverWrench } from "react-icons/fa6";
import FadeContent from "../animation/FadeContent";

export default function Portfolio() {

    const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

    const portfolioItems = [
        {
            label: "Projects",
            key: "projects",
            icon: <FaCode  className="size-6"/>
        },
        {
            label: "Certificates",
            key: "certificates",
            icon: <FaCertificate className="size-6"/>
        },
        {
            label: "Tech Stacks",
            key: "tech-stacks",
            icon: <FaScrewdriverWrench className="size-6"/>
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
            <FadeContent 
                blur={true} 
                duration={1000} 
                easing="ease-out" 
                initialOpacity={0}
            >
                <div className="flex gap-4 bg-slate-100/20 w-9/10 m-auto p-2 rounded-md mt-10">
                    {portfolioItems.map((item, index) => (
                        <div 
                            key={index} 
                            className={cn("w-full p-2 text-center font-bold rounded-sm hover:bg-slate-500/20 cursor-target flex items-center justify-center gap-2", activeTabIndex == index && "bg-slate-500/20")}
                            onClick={() => setActiveTabIndex(() => index)}
                        >
                            <div>{item.label}</div>
                            <div>{item.icon}</div>
                        </div>
                    ))}
                </div>
            </FadeContent>
        </section>
    )
}