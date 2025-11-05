import { projects } from "@/data/projects";
import PortfolioCard from "./PortfolioCard";

export default function Projects() {

    return (
        <div className="flex gap-4 flex-wrap">
            {projects.map((project, index) => (
                <PortfolioCard 
                    key={index}
                    {...project}
                    href={"/projects/" + project.id}
                />
            ))}
        </div>
    )
}