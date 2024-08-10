import { Typography } from "@mui/material";
import { Fragment } from "react";

interface Props {
    direction: "vertical" | "horizontal"
    size: number
    content: Content[]
}

type Content = {
    title: string
    details: string
}
export default function StepperLine(props: Props) {

    const { direction:directionProp, size } = props


    const contents = [
        {
            title: "Boyax",
            details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            title: "Boyax",
            details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            title: "Boyax",
            details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
    ]

    const direction = {
        vertical: "flex-row",
        horizontal: "flex-col"
    }

    const line = {
        vertical: "w-full h-1",
        horizontal: "h-full w-1"
    }

    const dotStyle = {
        width: `${size}px`,
        height: `${size}px`,
    }

    const stepsContentAlignment = {
        vertical: "flex-col",
        horizontal: "flex-row"
    }

    return (
        <div className="mt-8">
            {contents.map((item:Content, index:number) => (
                <div className={`flex ${stepsContentAlignment[directionProp]} gap-4 w-full h-full`}>
                    <div className={`flex ${direction[directionProp]} items-center`}>
                        <div className={`rounded-full bg-blue-800 shadow-xl shadow-blue-500/50`} style={dotStyle}></div>
                        {contents.length > 1 &&  (index < contents.length-1) && 
                            <div className={`${line[directionProp]} bg-slate-700`}></div>
                        }
                    </div>
                    <article className="pb-20">
                        <Typography variant="h5">{item.title}</Typography>
                        <p>{item.details}</p>
                    </article>
                </div>
            ))}
            
        </div>
    )
}