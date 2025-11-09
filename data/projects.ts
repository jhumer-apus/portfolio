import { Tags } from "./tags";

export interface ProjectProps {
    id: number;
    title: string;
    description: string;
    imgSrc: string;
    thumbnails: string[];
    repositoryLink: string;
    websiteLink: string;
    videoSrc: string | null;
    tags: (keyof typeof Tags)[];
    keyFeatures: string[]
}
export const projects: ProjectProps[] = [
        {
            id: 1,
            title: "Human Resources Information System",
            description: "The Human Resource Information System (HRIS) is a web-based platform designed to streamline HR operations for Philippine businesses. It centralizes employee records, attendance tracking, payroll management, and performance monitoring in one system. The HRIS is fully adaptable to local labor practices — including government-mandated contributions such as SSS, PhilHealth, Pag-IBIG, and BIR compliance. It helps companies reduce manual work, minimize payroll errors, and improve workforce transparency. Whether for small enterprises or large corporations, the HRIS simplifies HR processes and enhances efficiency, allowing organizations to focus on growth and employee development.",
            imgSrc: "/assets/skyfreight-hris.png",
            thumbnails: ["/assets/skyfreight-hris.png"],
            tags: ["react", "mui", "digital_ocean", "redux"],
            repositoryLink: "",
            websiteLink: "https://skyfreight-bithris.com/",
            videoSrc: "https://www.youtube.com/embed/tXv2ZfghK0E?si=H7EZ3EN5_en5zr7Q",
            keyFeatures: [
                "Employee Information Management",
                "Time and Attendance Tracking",
                "Leave and Absence Management",
                "Recruitment and Onboarding",
                "Analytics and Reporting",
                "Violation Management",
            ]
        },
        {
            id: 2,
            title: "Bitverse Website",
            description: "This is a website for Bitverse Company. It primarily showcases our system, the HRIS software. On this site, we also mention that we offer MVP software development services. This marketing website helps clients explore what Bitverse can offer.",
            imgSrc: "/assets/projects/bitverse/bitverse-website.png",
            thumbnails: ["/assets/projects/bitverse/bitverse-website.png"],
            tags: ["react", "nodejs", "javascript", "html", "tailwind", "css"],
            repositoryLink: "",
            websiteLink: "https://bitverseph.com/",
            videoSrc: "https://www.youtube.com/embed/Uxs9LHTFGnk?si=zSJrUKH4ghDKkSgI",
            keyFeatures: [
                "Home page for an overall introduction",
                "About page that introduces what Bitverse is all about",
                "Services page showcasing our projects",
                "Partners page highlighting our clients",
                "Contact page where users can reach out to the company",
                "Book a demo feature for scheduling a live product demonstration",
            ]
        },
    ]