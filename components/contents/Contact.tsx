"use client";

import BlurText from "../animation/BlurText";

export default function Contact() {
    return (
        <section id="contact" className="min-h-screen">
            <br/>
            <BlurText
                text="Get In Touch"
                delay={200}
                animateBy="words"
                direction="top"
                className="text-center m-auto text-6xl text-purple-300 font-semibold w-fit mt-25"
            />
            <BlurText
                text="Ready to take your business to the next level with a modern digital solution? Let’s connect today"
                delay={200}
                animateBy="words"
                direction="top"
                className="text-center w-fit m-auto text-xl text-slate-200 font-semi-bold"
            />
        </section>
    )
}