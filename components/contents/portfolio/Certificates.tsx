import { certificates } from "@/data/certificates";
import PortfolioCard from "./PortfolioCard";
import FadeContent from "@/components/animation/FadeContent";

export default function Certificates() {

    const certificatesOrderByDate = certificates.sort((a,b) => {
        if(a.dateIssued > b.dateIssued) {
            return -1
        } else if (a.dateIssued < b.dateIssued) {
            return 1
        } else {
            return 0
        }
    })

    return (
        <FadeContent
            blur={true} 
            duration={1000} 
            easing="ease-out" 
            initialOpacity={0}
        >
            <div className="flex gap-4 flex-wrap">
                {certificatesOrderByDate.map((cert, index) => (
                    <PortfolioCard 
                        key={index}
                        {...cert}
                        href={"/portfolio/certificates/" + cert.id}
                    />
                ))}
            </div>
        </FadeContent>
    )
}