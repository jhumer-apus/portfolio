import PortfolioCard from "./PortfolioCard";

export default function Projects() {
    const projects = [
        {
            title: "HRIS",
            description: "Lorep ipsumm",
            href: "https://fb.com",
            imgSrc: "/assets/abs.jpg"
        },
        {
            title: "HRIS",
            description: "Lorep ipsumm",
            href: "https://youtube.com",
            imgSrc: "/assets/abs.jpg"
        },
        {
            title: "HRIS",
            description: "Lorep ipsumm",
            href: "https://fb.com",
            imgSrc: "/assets/abs.jpg"
        },
        {
            title: "HRIS",
            description: "Lorep ipsumm",
            href: "https://youtube.com",
            imgSrc: "/assets/abs.jpg"
        },
        {
            title: "HRIS",
            description: "Lorep ipsumm",
            href: "https://fb.com",
            imgSrc: "/assets/abs.jpg"
        },
        {
            title: "HRIS",
            description: "Lorep ipsumm",
            href: "https://youtube.com",
            imgSrc: "/assets/abs.jpg"
        },
    ]
    return (
        <div className="flex gap-4 flex-wrap">
            {projects.map((project, index) => (
                <PortfolioCard 
                    key={index}
                    {...project}
                />
            ))}
        </div>
    )
}