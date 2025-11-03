"use client";

import Lottie from "lottie-react";
import Developer from "@/public/assets/Developer.json";
import TextType from "../animation/TextType";
import SplitText from "../animation/SplitText";
import Link from "next/link";
import TargetCursor from "../animation/TargetCursor";

export default function Home() {
    return(
        <section id="home" className="h-screen p-8 flex flex-col justify-center">
            <div className="flex justify-between w-6/10 m-auto items-center">
                <div className="w-full flex flex-col gap-6">
                    <TextType 
                        text={["Hi, I'm Jhumer Ojales Apus", "I'm a Web Developer", "I create cool websites for you"]}
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter="|"
                        className="text-4xl font-semibold"
                    />
                    <SplitText
                        text="Web Developer"
                        className="text-purple-300 text-3xl font-semibold"
                        delay={100}
                        duration={0.9}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="left"
                    />
                    <SplitText
                        text="Let's create awesome websites together!"
                        className="text-slate-100 text2xl"
                        delay={100}
                        duration={0.9}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="left"
                    />
                    <div className="flex gap-6 text-xl font-semibold">
                        <TargetCursor 
                            spinDuration={3}
                            hideDefaultCursor={true}
                        />
                        <Link href="#portofolio" className="p-2 rounded-md cursor-target text-sky-400">View My Work</Link>
                        <Link href="#contact" className="p-2 rounded-md cursor-target text-sky-400">Contact</Link>
                    </div>              
                </div>
 
                <Lottie animationData={Developer} loop={true} className="w-[600px]"/>

            </div>
        </section>
    )
}