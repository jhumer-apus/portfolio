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
            description: "The Human Resource Information System (HRIS) is a web-based platform designed to streamline HR operations for Philippine businesses owned and developed by Bitverse Corporation. It centralizes employee records, attendance tracking, payroll management, and performance monitoring in one system. The HRIS is fully adaptable to local labor practices — including government-mandated contributions such as SSS, PhilHealth, Pag-IBIG, and BIR compliance. It helps companies reduce manual work, minimize payroll errors, and improve workforce transparency. Whether for small enterprises or large corporations, the HRIS simplifies HR processes and enhances efficiency, allowing organizations to focus on growth and employee development. As a contributor to this project, I take pride in enhancing system performance and delivering features based on the client's requirements.",
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
            description: "This website was developed for Bitverse Company and is owned by Bitverse. As part of the team, I served as both a developer and the project lead. In my role as a senior front-end developer, I was primarily responsible for guiding junior developers and ensuring the implementation of clean, effective design practices. The website showcases our core product—the HRIS software—and also highlights our MVP software development services. Overall, this marketing site helps clients explore the solutions and capabilities that Bitverse offers.",
            imgSrc: "/assets/projects/bitverse/bitverse_home.png",
            thumbnails: [
                "/assets/projects/bitverse/bitverse_home.png", 
                "/assets/projects/bitverse/bitverse_about.png", 
                "/assets/projects/bitverse/bitverse_services.png", 
                "/assets/projects/bitverse/bitverse_partners.png", 
                "/assets/projects/bitverse/bitverse_contact.png"
            ],
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
            description: "Web Conx was developed by Eversun Software Philippines Corporation. I am proud to have been one of the contributors to its development. Web ConX is a modern staff-augmentation platform that enables companies to quickly scale their teams with skilled professionals, while maintaining full control of workflows, quality and culture. With Web ConX you can embed external talent as if they were part of your in-house team — from recruitment and onboarding through tracking, management, and analytics — enabling you to respond to changing project demands, avoid long lead times for hiring, reduce risk, and keep overheads lean. Whether you need developers, QA engineers, business analysts, customer-support agents or back-office staff, Web ConX provides a seamless experience: you define the roles, the system helps you identify and onboard the right people, lets you manage them transparently, and scales up or down as your business demands.",
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
            thumbnails: [
                "/assets/projects/vital-care/vital_care_bracing.png", 
                "/assets/projects/vital-care/vital_care_contact.png", 
                "/assets/projects/vital-care/vital_care_home.png", 
                "/assets/projects/vital-care/vital_care_products.png", 
                "/assets/projects/vital-care/vital_care_stockings.png", 
                "/assets/projects/vital-care/vital_care_tens.png"
            ],
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
            description: "“Ask For a Date” was created just for fun and as a personal hobby. I made it when I had someone I liked — instead of asking her directly, I wanted to do it in a unique and creative way.",
            imgSrc: "/assets/projects/ask-date/ask_date_1.png",
            thumbnails: [
                "/assets/projects/ask-date/ask_date_1.png", 
                "/assets/projects/ask-date/ask_date_2.png", 
                "/assets/projects/ask-date/ask_date_3.png", 
                "/assets/projects/ask-date/ask_date_4.png", 
                "/assets/projects/ask-date/ask_date_5.png", 
                "/assets/projects/ask-date/ask_date_6.png", 
                "/assets/projects/ask-date/ask_date_7.png", 
                "/assets/projects/ask-date/ask_date_8.png", 
                "/assets/projects/ask-date/ask_date_9.png"
            ],
            tags: ["nextjs", "mui", "javascript", "html", "css"],
            repositoryLink: "https://github.com/jhumer-apus/ask-date-client.git",
            websiteLink: "https://ask-her-a-date.vercel.app/",
            videoSrc: "https://www.youtube.com/embed/3N8XY9XW0TY?si=hLgKRwrXECTmTi4D",
            keyFeatures: [
                "Comedy content designed to make her smile",
                "A playful 'silly button' feature for fun interaction",
                "Email integration for sending summaries",
            ]
        },
        {
            id: 6,
            title: "Hospital Management System",
            description: "The Hospital Management System is a system owned and developed by Highly Succeed Inc. My contributions to this project include developing missing features, maintaining the system, fixing issues and bugs, optimizing code by applying best practices, and improving performance.",
            imgSrc: "/assets/projects/hospital-system/hospital_system_1.png",
            thumbnails: [
                "/assets/projects/hospital-system/hospital_system_1.png",
                "/assets/projects/hospital-system/hospital_system_2.png",
                "/assets/projects/hospital-system/hospital_system_3.png",
                "/assets/projects/hospital-system/hospital_system_4.png",
                "/assets/projects/hospital-system/hospital_system_5.png",
                "/assets/projects/hospital-system/hospital_system_6.png",
                "/assets/projects/hospital-system/hospital_system_7.png",
                "/assets/projects/hospital-system/hospital_system_8.png",
                "/assets/projects/hospital-system/hospital_system_9.png",
                "/assets/projects/hospital-system/hospital_system_10.png",
                "/assets/projects/hospital-system/hospital_system_11.png",
                "/assets/projects/hospital-system/hospital_system_12.png",
                "/assets/projects/hospital-system/hospital_system_13.png"
            ],
            tags: ["react", "sass", "javascript", "html", "css", "bootstrap", "nodejs", "mysql"],
            repositoryLink: "",
            websiteLink: "",
            videoSrc: "https://www.youtube.com/embed/yaLm-Nrb1cM?si=f08KggtrdLg5ApW-",
            keyFeatures: [
                "Doctor Management – manage doctor profiles and schedules",
                "Patient Management – registration, profiles, and visit tracking",
                "Nurse Management – staff assignments and workflows",
                "Inventory Management – tracking medical supplies and equipment",
                "PhilHealth Integration – insurance claim management",
                "Billing – invoicing and payment tracking",
                "Audit Logs – track system activity for accountability",
                "Medical Records – patient health records and histories",
                "Reports – generate operational and financial reports",
                "Develop missing features and maintain the system",
                "Fix issues and bugs",
                "Optimize code by applying best practices and improving performance"
            ]
        },
        {
            id: 7,
            title: "Makati Waste Management System",
            description: "The Makati Waste Management System is a platform developed by HSI for the Makati City Government. Its purpose is to efficiently manage waste, schedule garbage collection, and monitor operations online. All data is securely stored in the cloud, allowing administrators and collectors to streamline their processes. Additionally, the system includes a tracking feature that monitors the real-time location of garbage collection trucks. I contributed to the system by maintaining and enhancing the validation of all forms to improve user intuitiveness and overall experience.",
            imgSrc: "/assets/projects/makati-waste/makati_waste_1.png",
            thumbnails: [
                "/assets/projects/makati-waste/makati_waste_1.png",
            ],
            tags: ["nextjs", "javascript", "html", "css", "tailwind", "mysql", "leafletjs"],
            repositoryLink: "",
            websiteLink: "",
            videoSrc: "",
            keyFeatures: [
                "User Roles and Permissions: Super Admin, System Admin, Environmental Clearance Admin, and Collectors",
                "Garbage Collection Scheduling",
                "Real-Time Garbage Truck Tracking",
                "Environmental Violation Management",
                "Analytics and Reporting"
            ]
        },
        {
            id: 8,
            title: "Plant AI System",
            description: "The Plant AI System was developed and is owned by HSI. Its purpose is to identify plant diseases from images of farms, helping farmers easily locate affected areas across large hectares of land. The system requires annotated images that label plant diseases. It can also automatically annotate images, tag diseases, and train the model for improved accuracy.",
            imgSrc: "/assets/projects/plant-ai/plant_ai_1.png",
            thumbnails: [
                "/assets/projects/plant-ai/plant_ai_1.png",
            ],
            tags: ["nextjs", "javascript", "html", "css", "tailwind", "nodejs", "mysql"],
            repositoryLink: "",
            websiteLink: "",
            videoSrc: "",
            keyFeatures: [
                "User Roles and Permissions: Super Admin, Image Reviewer, Image Uploader, and Annotator",
                "Annotation of farm images and tag diseases",
                "CRUD operation for plant details",
            ]
        },
    ]