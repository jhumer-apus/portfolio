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
            imgSrc: "/assets/projects/hris/skyfreight-hris.png",
            thumbnails: ["/assets/projects/hris/skyfreight-hris.png"],
            tags: ["react", "mui", "digital_ocean", "redux", "javascript", "html", "tailwind", "css"],
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
            imgSrc: "/assets/projects/bitverse/bitverse_home.png",
            thumbnails: ["/assets/projects/bitverse/bitverse_home.png", "/assets/projects/bitverse/bitverse_about.png", "/assets/projects/bitverse/bitverse_services.png", "/assets/projects/bitverse/bitverse_partners.png", "/assets/projects/bitverse/bitverse_contact.png"],
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
        {
            id: 3,
            title: "Web Conx",
            description: "Web ConX is a modern staff-augmentation platform that enables companies to quickly scale their teams with skilled professionals, while maintaining full control of workflows, quality and culture. With Web ConX you can embed external talent as if they were part of your in-house team — from recruitment and onboarding through tracking, management, and analytics — enabling you to respond to changing project demands, avoid long lead times for hiring, reduce risk, and keep overheads lean. Whether you need developers, QA engineers, business analysts, customer-support agents or back-office staff, Web ConX provides a seamless experience: you define the roles, the system helps you identify and onboard the right people, lets you manage them transparently, and scales up or down as your business demands.",
            imgSrc: "/assets/projects/conx/conx_login.png",
            thumbnails: ["/assets/projects/conx/conx_login.png", ],
            tags: ["nuxtjs", "antd", "laravel", "antd", "mysql", "php", "javascript", "html", "css", "vuex", "tailwind", "sass"],
            repositoryLink: "",
            websiteLink: "https://web-conx.com/",
            videoSrc: "https://www.youtube.com/embed/56MzhnGIAVs?si=HBO6I53KUgmRLOio",
            keyFeatures: [
                "Talent Pool & Matching",
                "Onboarding & Integration",
                "Assignment & Management",
                "Contracting & Billing",
            ]
        },
        {
            id: 4,
            title: "Vital Care",
            description: "Vital Care Website is a product showcase platform that features a wide range of healthcare products such as TENS units, orthopedic braces, and compression stockings. It allows users to explore product details and contact the company directly for inquiries and purchases.",
            imgSrc: "/assets/projects/vital-care/vital_care_home.png",
            thumbnails: ["/assets/projects/vital-care/vital_care_bracing.png", "/assets/projects/vital-care/vital_care_contact.png", "/assets/projects/vital-care/vital_care_home.png", "/assets/projects/vital-care/vital_care_products.png", "/assets/projects/vital-care/vital_care_stockings.png", "/assets/projects/vital-care/vital_care_tens.png"],
            tags: ["nextjs", "mui", "javascript", "html", "css"],
            repositoryLink: "https://github.com/jhumer-apus/ca-health.git",
            websiteLink: "https://vital-care-ca.netlify.app/",
            videoSrc: "https://www.youtube.com/embed/N0gYt_WioH4?si=U1A1UtRse3EwRcXi",
            keyFeatures: [
                "Home page for company introduction and overview",
                "Products page showcasing various healthcare items such as TENS units, orthopedic braces, and compression stockings",
                "Contact page where users can reach out for inquiries or product orders",
            ]
        },
        {
            id: 5,
            title: "Ask For A Date",
            description: "Vital Care Website is a product showcase platform that features a wide range of healthcare products such as TENS units, orthopedic braces, and compression stockings. It allows users to explore product details and contact the company directly for inquiries and purchases.",
            imgSrc: "/assets/projects/vital-care/vital_care_home.png",
            thumbnails: ["/assets/projects/vital-care/vital_care_bracing.png", "/assets/projects/vital-care/vital_care_contact.png", "/assets/projects/vital-care/vital_care_home.png", "/assets/projects/vital-care/vital_care_products.png", "/assets/projects/vital-care/vital_care_stockings.png", "/assets/projects/vital-care/vital_care_tens.png"],
            tags: ["nextjs", "mui", "javascript", "html", "css"],
            repositoryLink: "https://github.com/jhumer-apus/ca-health.git",
            websiteLink: "https://vital-care-ca.netlify.app/",
            videoSrc: "https://www.youtube.com/embed/N0gYt_WioH4?si=U1A1UtRse3EwRcXi",
            keyFeatures: [
                "Home page for company introduction and overview",
                "Products page showcasing various healthcare items such as TENS units, orthopedic braces, and compression stockings",
                "Contact page where users can reach out for inquiries or product orders",
            ]
        },
    ]