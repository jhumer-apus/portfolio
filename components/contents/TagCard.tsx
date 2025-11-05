interface Props {
    label: string;
    imgSrc: string;
}
export default function TagCard(props: Props) {
    const { label, imgSrc } = props
    return (
        <div className="size-28 bg-gray-800/30 rounded-xl p-2 border-2 border-white/20">
            <img src={imgSrc} className="size-16 m-auto"/>
            <h1 className="text-center mt-2 text-sm font-semibold whitespace-wrap">{label}</h1>
        </div>
    )
}