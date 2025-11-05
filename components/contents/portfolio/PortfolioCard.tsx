import SpotlightCard from "@/components/animation/SpotlightCard";
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
        <Link href={href} className="block cursor-pointer">
            <SpotlightCard className="md:w-72 h-96 custom-spotlight-card rounded-2xl bg-slate-800/50 border-2 border-purple-300/20 cursor-target" spotlightColor="rgba(0, 229, 255, 0.2)">
                <div className="h-48 md:w-62 rounded-2xl overflow-hidden bg-red-100 m-auto">
                    <img src={imgSrc} className="w-full h-full object-cover object-center" />
                </div>
                <div className="mt-2">
                    <p className="text-md mb-6 text-purple-300 font-semibold">{title}</p>
                    <p className="description text-sm text-slate-200">{description}</p>
                </div>
            </SpotlightCard>
        </Link>
    )
}