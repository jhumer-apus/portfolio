import { Tags } from "@/data/tags";
import TagCard from "../../TagCard";
import { ProjectProps } from "@/data/projects";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";

interface Props {
    project?: ProjectProps
}

export default function ProjectDetails({ project }:Props) {

    const handleOpenCode = () => {
        if(!project?.repositoryLink) {
            toast.error("Sorry I don't have the access for the repository anymore😞")
        }
    }
    const handleOpenLink = () => {
        if(!project?.websiteLink) {
            toast.error("Sorry I don't know the link of the website now😞")
        }
    }
    return (
        <section id="left-project-details" className="md:max-w-[500px]">
            <div id="project-details">
                <h1 className="text-3xl text-indigo-300 font-semibold mb-8">{project?.title}</h1>
                <p className="text-gray-200">{project?.description}</p>
            </div>

            <div className="flex items-center mt-10 gap-4 text-lg">
                <button 
                    onClick={() => handleOpenLink()}
                    className="cursor-pointer hover:bg-gray-600/50 bg-gray-900/50 py-2 flex items-center gap-2 rounded-lg justify-center w-28 border border-white/30"
                >
                    <p>Link</p>
                    <FaExternalLinkAlt />
                </button>
                <button 
                    onClick={() => handleOpenCode()}
                    className="cursor-pointer hover:bg-gray-600/50 bg-gray-900/50 py-2 flex items-center gap-2 rounded-lg justify-center w-28 border border-white/30"
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