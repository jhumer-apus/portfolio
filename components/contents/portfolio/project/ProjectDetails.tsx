import { Tags } from "@/data/tags";
import TagCard from "../../TagCard";
import { ProjectProps } from "@/data/projects";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";

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

            <div className="flex items-center mt-10 gap-4 text-xl text-sky-300">
                <button 
                    onClick={() => ""}
                    className="cursor-target hover:bg-gray-600/50 bg-gray-900/50 py-2 flex items-center gap-2 rounded-lg justify-center w-28 border border-white/30"
                >
                    <p>Link</p>
                    <FaExternalLinkAlt />
                </button>
                <button 
                    onClick={() => ""}
                    className="cursor-target hover:bg-gray-600/50 bg-gray-900/50 py-2 flex items-center gap-2 rounded-lg justify-center w-28 border border-white/30"
                >
                    <p>Code</p>
                    <FaCode />
                </button>
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