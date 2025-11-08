"use client";

import AnimatedContent from "@/components/animation/AnimatedContent";
import KeyFeatures from "@/components/contents/portfolio/project/KeyFeatures";
import Slider from "react-slick";
import ProjectDetails from "@/components/contents/portfolio/project/ProjectDetails";
import { projects } from "@/data/projects";
import { useParams } from "next/navigation";
import { PhotoProvider, PhotoView } from "react-photo-view";
import FadeContent from "@/components/animation/FadeContent";


export default function Project() {
    const { id } = useParams();

    const project = projects.find(proj => proj.id == Number(id))

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
    };
    return (
        <div className="my-30 flex gap-28 justify-center">

            {/* Left */}
            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                <ProjectDetails project={project}/>
            </FadeContent>


            {/* Right */}
            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                <section id="right-project-details" className="md:w-[500px]">
                    <div id="video-wrapper" className="w-full h-96 mb-5">
                        {project?.videoSrc ? (
                            <video
                                src={project.videoSrc}
                                controls
                                className="size-full"
                            />
                        ): (
                            <div className="size-full p-4 border rounded-xl bg-black  flex flex-col justify-center">
                                <p className="text-lg text-center">Sorry the video is not available for this one cause I don't have the access for the repository anymore 😥</p>
                            </div>
                        )}
                    </div>
                    <div id="image-project">
                        <PhotoProvider>
                            <div className="w-full mx-auto">
                                <Slider {...sliderSettings}>
                                    {project?.thumbnails?.map((item: string, index: number) => (
                                        <div key={index} className="p-2 flex gap-2">
                                            <PhotoView src={item}>
                                                <img
                                                    src={item}
                                                    alt={`Thumbnail ${index}`}
                                                    className="w-full h-32 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform"
                                                />
                                            </PhotoView>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </PhotoProvider>
                    </div>
                    <KeyFeatures project={project} />
                </section>
            </ FadeContent>
        </div>
    )
}