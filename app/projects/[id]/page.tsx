"use client";

import AnimatedContent from "@/components/animation/AnimatedContent";
import TargetCursor from "@/components/animation/TargetCursor";
import KeyFeatures from "@/components/contents/portfolio/project/KeyFeatures";
import ProjectDetails from "@/components/contents/portfolio/project/ProjectDetails";
import { projects } from "@/data/projects";
import { useParams } from "next/navigation";


export default function Project() {
    const { id } = useParams();

    const project = projects.find(proj => proj.id == Number(id))
    return (
        <div className="my-30 flex gap-28 justify-center">
            <TargetCursor spinDuration={3} hideDefaultCursor={true} />

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
                <ProjectDetails project={project}/>
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
                    <div id="image-project" className="md:h-90 rounded-xl overflow-hidden">
                        <img src={project?.imgSrc} className="w-full h-full object-cover object-center"/>
                    </div>
                    <KeyFeatures project={project} />
                </AnimatedContent>
                
            </section>
        </div>
    )
}