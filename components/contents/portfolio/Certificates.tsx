import { certificates } from "@/data/certificates";
import PortfolioCard from "./PortfolioCard";

export default function Certificates() {

    return (
        <div className="flex gap-4 flex-wrap">
            {certificates.map((cert, index) => (
                <PortfolioCard 
                    key={index}
                    {...cert}
                    href={"/portfolio/certificates/" + cert.id}
                />
            ))}
        </div>
    )
}