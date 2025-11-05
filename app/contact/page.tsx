"use client";

import BlurText from "@/components/animation/BlurText";
import FadeContent from "@/components/animation/FadeContent";
import ContactDetails from "@/components/contents/contacts/ContactDetails";
import ContactForm from "@/components/contents/contacts/ContactForm";
import { FaPhone } from "react-icons/fa";

export default function Contact() {

    return (
        <section id="contact" className="min-h-screen">
            <br/>

            <div id="title-wrapper">
                <div className="text-center m-auto text-6xl text-purple-300 font-semibold w-fit mt-25 flex items-center gap-4">
                    <BlurText
                        text="Get In Touch"
                        delay={200}
                        animateBy="words"
                        direction="top"

                    />
                    <FadeContent 
                        blur={true} 
                        duration={1000} 
                        easing="ease-out" 
                        initialOpacity={0}
                    >
                        <FaPhone />
                    </FadeContent>
                </div>
                <BlurText
                    text="Ready to take your business to the next level with a modern digital solution? Let’s connect today"
                    delay={100}
                    animateBy="words"
                    direction="top"
                    className="text-center w-fit m-auto text-xl text-slate-200 font-semi-bold mt-4"
                />
            </div>

            <div className="flex m-auto py-20 text-slate-200 w-fit">
                <FadeContent 
                    blur={true} 
                    duration={1000} 
                    easing="ease-out" 
                    initialOpacity={0}
                >
                    <ContactDetails />
                </FadeContent>
                <FadeContent 
                    blur={true} 
                    duration={1000} 
                    easing="ease-out" 
                    initialOpacity={0}
                >
                    <ContactForm />
                </FadeContent>
            </div>
        </section>
    )
}