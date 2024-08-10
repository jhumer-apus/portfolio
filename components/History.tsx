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
export default function History(props: Props) {

    const { direction:directionProp, size } = props

    const direction = {
        vertical: "flex-row",
        horizontal: "flex-col"
    }

    const content = [
        {
            title: "Boyax",
            details: "The great estafa"
        },
        {
            title: "Boyax",
            details: "The great estafa"
        }
    ]

    const line = {
        vertical: "min-w-20 h-1",
        horizontal: "min-h-20 w-1"
    }

    const dotStyle = {
        width: `${size}px`,
        height: `${size}px`,
        // "box-shadow": "-10px -10px 20px -5px blue,10px -10px 20px -5px blue,  -10px 10px 20px -5px blue,  10px 10px 20px -5px blue;"   
    }
    return (
        <Fragment>
            <div className={`flex ${direction[directionProp]} items-center`}>
                <div className={`rounded-full bg-blue-800 shadow-xl shadow-blue-500/50`} style={dotStyle}></div>
                <div className={`${line[directionProp]} bg-slate-700`}></div>
            </div>
        </Fragment>
    )
}