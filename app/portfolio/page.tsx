"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { FaCertificate, FaCode } from "react-icons/fa";
import { FaScrewdriverWrench } from "react-icons/fa6";
import Projects from "@/components/contents/portfolio/Projects";
import BlurText from "@/components/animation/BlurText";
import FadeContent from "@/components/animation/FadeContent";
import TechStacks from "@/components/contents/portfolio/tech_stacks/TechStacks";
import Certificates from "@/components/contents/portfolio/Certificates";

export default function Portfolio() {

    const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

    const portfolioItems = [
        {
            label: "Projects",
            key: "projects",
            icon: <FaCode  className="size-6"/>,
            content: <Projects />
        },
        {
            label: "Certificates",
            key: "certificates",
            icon: <FaCertificate className="size-6"/>,
            content: <Certificates />
        },
        {
            label: "Tech Stacks",
            key: "tech_stacks",
            icon: <FaScrewdriverWrench className="size-6"/>,
            content: <TechStacks />
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
                className="text-center m-auto text-3xl md:text-6xl text-purple-300 font-semibold w-fit mt-25"
            />
            <div className="mt-10 w-9/10 m-auto">
                <FadeContent 
                    blur={true} 
                    duration={1000} 
                    easing="ease-out" 
                    initialOpacity={0}
                >
                    <div className="flex gap-4 bg-gray-100/10 p-2 rounded-full cursor-pointer text-indigo-300 overflow-auto">
                        {portfolioItems.map((item, index) => (
                            <div 
                                key={index} 
                                className={cn("w-full p-2 text-center font-bold rounded-full hover:bg-gray-500/20 cursor-target flex items-center justify-center gap-2", activeTabIndex == index && "bg-gray-500/50")}
                                onClick={() => setActiveTabIndex(() => index)}
                            >
                                <div className="whitespace-nowrap">{item.label}</div>
                                <div>{item.icon}</div>
                            </div>
                        ))}
                    </div>
                </FadeContent>

                <div className="w-full mt-10">
                    {portfolioItems[activeTabIndex].content}
                </div>
            </div>
        </section>
    )
}