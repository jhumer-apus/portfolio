import { projects } from "@/data/projects";
import PortfolioCard from "./PortfolioCard";
import FadeContent from "@/components/animation/FadeContent";

export default function Projects() {

    return (
        <FadeContent 
            blur={true} 
            duration={1000} 
            easing="ease-out" 
            initialOpacity={0}
        >
            <div className="flex gap-4 flex-wrap">

                {projects.map((project, index) => (
                    <PortfolioCard 
                        key={index}
                        {...project}
                        href={"/portfolio/projects/" + project.id}
                    />
                ))}
            </div>
        </FadeContent>
    )
}