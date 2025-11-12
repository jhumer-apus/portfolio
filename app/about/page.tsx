"use client";

import AnimatedContent from "@/components/animation/AnimatedContent";
import BlurText from "@/components/animation/BlurText";
import ElectricBorder from "@/components/animation/ElectricBorder";
import FadeContent from "@/components/animation/FadeContent";
import TargetCursor from "@/components/animation/TargetCursor";

export default function About() {

    const handleDownload = (type: "resume" | "cv") => {
        const fileUrl = type === "cv"
            ? "/assets/docs/CV-Apus.pdf"
            : "/assets/docs/Resume-Apus.pdf";

        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = fileUrl.split("/").pop() || `${type}.pdf`;
        link.click();
    }

    return(
        <section id="about" className="min-h-screen flex flex-col justify-center items-center py-24 lg:py-0 px-4">
            <TargetCursor spinDuration={3} hideDefaultCursor={true} />
            <BlurText
                text="About"
                delay={200}
                animateBy="words"
                direction="top"
                className="justify-center text-3xl lg:text-6xl text-purple-300 font-semibold"
            />
            <BlurText
                text="Transform your dreams into digital experiences"
                delay={200}
                animateBy="words"
                direction="top"
                className="justify-center text-2xl lg:text-3xl text-slate-200 font-semi-bold"
            />
            <div className="flex flex-col-reverse lg:flex-row gap-10 mt-20 lg:w-6/10 items-center">
                <div id="about-details">
                    <BlurText
                        text="
                        Hello! My name is Jhumer Apus a web developer with over three years of experience in building websites and web applications. I specialize in developing enterprise-level applications that help automate processes, perform calculations efficiently, accelerate audits within seconds, and ensure data security and integrity. I also offer services for building Minimum Viable Products (MVPs) to help businesses bring their ideas to life quickly and effectively. My approach follows a user-centric design philosophy, ensuring that every system I create is intuitive, accessible, and provides a seamless user experience."
                        delay={50}
                        animateBy="words"
                        direction="top"
                        className="lg:text-xl text-slate-300 font-semi-bold justify-center"
                    />
                        <AnimatedContent
                            distance={150}
                            direction="vertical"
                            reverse={true}
                            duration={1.2}
                            ease="bounce.out"
                            initialOpacity={0.2}
                            animateOpacity
                            scale={1.1}
                            threshold={0.2}
                            delay={0.3}
                        >
            
                            <div className="flex gap-4 w-fit mx-auto mt-10 lg:mx-0">
                                <button 
                                    onClick={() => handleDownload("resume")}
                                    className="active:bg-slate-700 bg-slate-900 py-2 px-4 cursor-target border-3 border-purple-900/30 text-md"
                                >
                                    Download Resume
                                </button>
                                <button 
                                    onClick={() => handleDownload("cv")}
                                    className="active:bg-slate-700 bg-slate-900 py-2 px-4 cursor-target border-3 border-purple-900/30 text-md"
                                >
                                    Download CV
                                </button>
                            </div>
                    </AnimatedContent>
                </div>

                <div className="relative">
                    <FadeContent 
                        blur={true} 
                        duration={1000} 
                        easing="ease-out" 
                        initialOpacity={0}
                    >
                        <ElectricBorder
                            color="#bb5ce0"
                            speed={1}
                            chaos={2}
                            thickness={6}
                            className="rounded-2xl"
                        >
                            <div className="size-50 lg:size-64 p-4">
                                <img
                                    src="/assets/formal-pic-transparent.png"
                                    alt="Profile"
                                    className="w-full h-full object-cover rounded-2xl shadow-2xl"
                                />
                            </div>
                        </ElectricBorder>
                    </FadeContent>
                </div>
            </div>
        </section>
    )
}