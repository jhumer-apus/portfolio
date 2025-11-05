import { Tags } from "@/data/tags";
import TagCard from "../../TagCard";
import { ProjectProps } from "@/data/projects";

interface Props {
    project?: ProjectProps
}

export default function ProjectDetails({ project }:Props) {
    return (
        <section id="left-project-details" className="md:max-w-[500px]">
            <div id="project-details">
                <h1 className="text-3xl text-indigo-300 font-semibold mb-8">{project?.title}</h1>
                <p className="text-gray-200">{project?.description}</p>
            </div>
            <div id="tech-stacks-details" className="mt-20">
                <h1 className="text-3xl font-semibold text-pink-300">
                    Tech Stacks Used
                </h1>
                <div id="tech-stacks-tags" className="flex flex-wrap gap-4 mt-10">
                    {project?.tags.map((tag, index) => (
                        <TagCard 
                            key={index} 
                            label={Tags[tag].label} 
                            imgSrc={Tags[tag].imgSrc} 
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}