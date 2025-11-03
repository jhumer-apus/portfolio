"use client";

import BlurText from "../animation/BlurText";
import ElectricBorder from "../animation/ElectricBorder";

export default function About() {

    return(
        <section id="about" className="min-h-screen flex flex-col justify-center items-center">
            <BlurText
                text="About"
                delay={200}
                animateBy="words"
                direction="top"
                className="text-center text-6xl text-purple-300 font-semibold"
            />
            <BlurText
                text="Transform your dreams into digital experiences"
                delay={200}
                animateBy="words"
                direction="top"
                className="text-center text-3xl text-slate-200 font-semi-bold"
            />
            <div className="flex gap-10 mt-20 w-6/10 items-center">
                <BlurText
                    text="
                    Hello! My name is Jhumer Apus a web developer with over three years of experience in building websites and web applications. I specialize in developing enterprise-level applications that help automate processes, perform calculations efficiently, accelerate audits within seconds, and ensure data security and integrity. I also offer services for building Minimum Viable Products (MVPs) to help businesses bring their ideas to life quickly and effectively. My approach follows a user-centric design philosophy, ensuring that every system I create is intuitive, accessible, and provides a seamless user experience."
                    delay={100}
                    animateBy="words"
                    direction="top"
                    className="text-center text-xl text-slate-300 font-semi-bold"
                />
                <div className="relative">
                    <ElectricBorder
                        color="#bb5ce0"
                        speed={1}
                        chaos={2}
                        thickness={6}
                        className="rounded-2xl"
                    >
                        <div className="size-64 p-4">
                            <img
                                src="/assets/formal-pic.jpg"
                                alt="Profile"
                                className="rounded-2xl shadow-2xl"
                            />
                        </div>
                    </ElectricBorder>
                </div>
            </div>
        </section>
    )
}