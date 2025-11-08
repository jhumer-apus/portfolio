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
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            imgSrc: "/assets/abs.jpg",
            thumbnails: ["/assets/abs.jpg", "/assets/abs.jpg", "/assets/abs.jpg", "/assets/abs.jpg", "/assets/abs.jpg" , "/assets/abs.jpg", "/assets/abs.jpg", "/assets/abs.jpg", "/assets/abs.jpg"],
            tags: ["react", "mui", "digital_ocean", "redux"],
            repositoryLink: "",
            websiteLink: "",
            videoSrc: null,
            keyFeatures: [
                "Employee Information Management",
                "Time and Attendance Tracking",
                "Leave and Absence Management",
                "Recruitment and Onboarding",
                "Analytics and Reporting",
                "Violation Management",
            ]
        },
    ]