import { Tags } from "@/data/tags";
import TagCard from "../../TagCard";
import GlareHover from "@/components/animation/GlareHover";
import AnimatedContent from "@/components/animation/AnimatedContent";

export default function TechStacks() {
    return (
        <div className="flex gap-4 flex-wrap">
            {(Object.keys(Tags) as (keyof typeof Tags)[]).map((key, index) => {
                const tag = Tags[key]
                return (
                    <AnimatedContent
                        key={index}
                        distance={200}
                        direction="vertical"
                        reverse={index % 2 == 0? true: false}
                        duration={Math.random() + 1.2}
                        ease="bounce.out"
                        initialOpacity={0.2}
                        animateOpacity
                        scale={1.1}
                        threshold={0.1}
                        delay={0.1}
                    >
                        <GlareHover
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
                    </AnimatedContent>
                )
            })}
        </div>
    )
}