"use client";

import AnimatedContent from "@/components/animation/AnimatedContent";
import CertificateDetails from "@/components/contents/portfolio/certificates/CertificateDetails";
import { certificates } from "@/data/certificates";
import { useParams } from "next/navigation";
import { PhotoProvider, PhotoView } from "react-photo-view";


export default function Certificate() {
    const { id } = useParams();

    const certificate = certificates.find(cert => cert.id == Number(id))
    return (
        <div className="my-30 flex flex-col-reverse md:flex-row gap-28 justify-center p-6">

            {/* Left */}
            <AnimatedContent
                distance={150}
                direction="vertical"
                reverse={false}
                duration={1.2}
                ease="bounce.out"
                initialOpacity={0.2}
                animateOpacity
                scale={1.1}
                threshold={0.2}
                delay={0.3}
                >
                <CertificateDetails certificate={certificate}/>
            </AnimatedContent>


            {/* Right */}
            <section id="right-project-details" className="md:w-[500px]">
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
                    <div id="image-project" className="md:h-90 overflow-hidden">
                        <PhotoProvider>
                            <PhotoView src={certificate?.imgSrc}>
                                <img src={certificate?.imgSrc} className="cursor-pointer w-full h-full object-cover object-center"/>
                            </PhotoView>
                        </PhotoProvider>
                    </div>
                </AnimatedContent>
                
            </section>
        </div>
    )
}