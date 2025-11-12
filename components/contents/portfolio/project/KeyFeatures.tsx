import { ProjectProps } from "@/data/projects";
import { FaCircle, FaRegStar } from "react-icons/fa6";

interface Props {
    project?: ProjectProps
}
export default function KeyFeatures({ project }: Props) {
    return (
        <div id="key-features" className="bg-gray-800/40 w-full mt-10 p-8 rounded-xl border-white/30 border-2">
            <div id="key-feature-header" className="flex items-center gap-2">
                <FaRegStar className="text-xl text-yellow-500"/>
                <h1 className="text-xl font-semibold">Core Features</h1>
            </div>
            <nav className="mt-6">
                <ul className="text-md ml-6 text-gray-200 flex flex-col gap-3">
                    {project?.keyFeatures.map((feat, index) => (
                        <li key={index} className="flex items-center gap-4">
                            <FaCircle className="text-indigo-400 shrink-0" size={15}/>
                            <p>{feat}</p>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}