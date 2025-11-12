"use client";

import Lottie from "lottie-react";
import Developer from "@/public/assets/Developer.json";
import TextType from "../animation/TextType";
import SplitText from "../animation/SplitText";
import Link from "next/link";
import TargetCursor from "../animation/TargetCursor";
import { FaPhone } from "react-icons/fa";
import { FaScrewdriverWrench } from "react-icons/fa6";
import FadeContent from "../animation/FadeContent";

export default function Home() {
    return(
        <section id="home" className="h-screen p-8 flex flex-col justify-center">
            <TargetCursor spinDuration={3} hideDefaultCursor={true} />
            <div className="flex flex-col-reverse md:flex-row md:justify-between md:w-6/10 m-auto items-center">
                <div className="w-full flex flex-col gap-6">
                    <TextType 
                        text={["Hi, I'm Jhumer Apus", "I'm a Web Developer", "I create cool websites for you"]}
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter="|"
                        className="text-center md:text-left text-2xl md:text-4xl font-semibold"
                    />
                    <SplitText
                        text="Web Developer"
                        className="text-center md:text-left text-purple-300 text-xl md:text-3xl font-semibold"
                        delay={100}
                        duration={0.9}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                    />
                    <SplitText
                        text="Let's create awesome websites together!"
                        className="text-center md:text-left text-slate-100"
                        delay={50}
                        duration={0.1}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                    />
                    <div className="flex gap-4 text-md font-semibold m-auto md:m-0">
                        <FadeContent 
                            blur={true} 
                            duration={1000} 
                            easing="ease-out" 
                            initialOpacity={0}
                        >
                            <Link href="/portfolio" className="bg-gray-900 w-32 block border border-indigo-500 hover:bg-gray-500/20 p-2 cursor-target text-indigo-300 flex items-center gap-2">
                                <div>View Works</div>
                                <FaScrewdriverWrench className="text-gray-300"/>
                            </Link>
                        </FadeContent>
                        <FadeContent 
                            blur={true} 
                            duration={1000} 
                            easing="ease-out" 
                            initialOpacity={0}
                        >
                            <Link href="/contact" className="bg-gray-900 w-32 block border border-indigo-500 hover:bg-gray-500/20 p-2 cursor-target text-indigo-300 flex items-center gap-2">
                                <div>Contact Me</div>
                                <FaPhone className="text-gray-300" />
                            </Link>
                        </FadeContent>
                    </div>              
                </div>
 
                <Lottie animationData={Developer} loop={true} className="w-[200px] md:w-[600px]"/>

            </div>
        </section>
    )
}