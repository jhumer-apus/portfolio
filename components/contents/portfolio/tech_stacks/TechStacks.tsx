import { Tags } from "@/data/tags";
import TagCard from "../../TagCard";
import GlareHover from "@/components/animation/GlareHover";

export default function TechStacks() {
    return (
        <div className="flex gap-4 flex-wrap">
            {(Object.keys(Tags) as (keyof typeof Tags)[]).map((key, index) => {
                const tag = Tags[key]
                return (
                    <GlareHover
                        key={index}
                        glareColor="#ffffff"
                        glareOpacity={0.3}
                        glareAngle={-30}
                        glareSize={300}
                        transitionDuration={800}
                        playOnce={false}
                        className="size-fit inline-block overflow-hidden rounded-xl"
                    >
                        <TagCard 
                            label={tag.label} 
                            imgSrc={tag.imgSrc} 
                        />
                    </GlareHover>
                )
            })}
        </div>
    )
}