import Link from "next/link";

interface Props {
    title: string;
    description: string;
    href: string;
    imgSrc: string;
}
export default function PortfolioCard(props: Props) {
    const { title, description , href, imgSrc } = props;

    return (
        <a href={href} target="_blank" className="rounded-2xl bg-slate-800/50 border-2 border-purple-300/20 p-4 w-fit h-86 cursor-target hover:bg-slate-500/50">
            <div className="h-48 md:w-72 rounded-2xl overflow-hidden">
                <img src={imgSrc} className="w-full h-full object-cover object-center" />
            </div>
            <div className="mt-2">
                <p className="text-2xl mb-6 text-purple-300 font-semibold">{title}</p>
                <p className="text-md text-slate-200">{description}</p>
            </div>
        </a>
    )
}