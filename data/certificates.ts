import dayjs, { Dayjs } from "dayjs";

export interface CertificateProps {
    id: number;
    title: string;
    dateIssued: Date | string |Dayjs
    description: string;
    imgSrc: string;
    pdfSrc: string;
    hashTags: string;
    srcLink: string;
}
export const certificates: CertificateProps[] = [
        {
            id: 1,
            title: "Responsive Web Design",
            dateIssued: dayjs("July 23, 2021"),
            description: "On July 23, 2021, I took my first step into the world of web development! That’s the day I started learning web development and successfully completed the Responsive Web Design course. It was the beginning of a journey that taught me how creativity and logic come together to build something meaningful on the web. 🚀",
            hashTags: "#WebDevelopment #ResponsiveDesign #LearningJourney #Coding #FrontEndDevelopment", 
            imgSrc: "/assets/certificates/cert_responsive_web design.png",
            pdfSrc: "",
            srcLink: "https://www.freecodecamp.org/certification/jhumer-apus/responsive-web-design"
        },
        {
            id: 2,
            title: "Legacy JavaScript Algorithms and Data Structures",
            dateIssued: dayjs("September 5,2021"),
            description: "On September 5,2021, I completed the Legacy JavaScript Algorithms and Data Structures course from freeCodeCamp! This milestone strengthened my understanding of JavaScript fundamentals, problem-solving, and how to write more efficient, logical code. Every new concept I learned pushed me one step closer to becoming a better developer. 🚀",
            hashTags: "#JavaScript #DataStructures #Algorithms #WebDevelopment #CodingJourney #FreeCodeCamp", 
            imgSrc: "/assets/certificates/cert_responsive_web_design.png",
            pdfSrc: "",
            srcLink: "https://www.freecodecamp.org/certification/jhumer-apus/javascript-algorithms-and-data-structures"
        },
        {
            id: 3,
            title: "Using Python to Access Web Data",
            dateIssued: dayjs("November 11, 2020"),
            description: "On November 11, 2020, I completed the “Using Python to Access Web Data” course — an online non-credit program authorized by the University of Michigan and offered through Coursera.This course deepened my understanding of how Python interacts with the web — from handling APIs to parsing data — and strengthened my foundation in programming. 💻",
            hashTags: "#Python #Coursera #UniversityOfMichigan #WebDevelopment #LearningJourney #Programming #Coding", 
            imgSrc: "/assets/certificates/using_python_access_web_data.png",
            pdfSrc: "Using Python to Access Web Data.pdf",
            srcLink: "https://coursera.org/share/917a5ea3cb12b1ae4b640c84f02b9f6a"
        },
        {
            id: 4,
            title: "Programming for Everybody (Getting Started with Python)",
            dateIssued: dayjs("October 13, 2020"),
            description: "🐍 On October 13, 2020, I completed the “Programming for Everybody (Getting Started with Python)” course — an online non-credit program authorized by the University of Michigan and offered through Coursera.This was my very first step into the world of programming. Learning Python gave me the confidence and curiosity to explore how code can solve real-world problems and create meaningful things. 💡",
            hashTags: "#Python #Coursera #UniversityOfMichigan #LearningJourney #Programming #Coding", 
            imgSrc: "/assets/certificates/python_for_everybody.png",
            pdfSrc: "Programming for Everybody (Getting Started with Python).pdf",
            srcLink: "https://coursera.org/share/b27713058d686630bcef821ea1335c6f"
        },
        {
            id: 5,
            title: "Python Data Structures",
            dateIssued: dayjs("October 25, 2020"),
            description: "On October 25, 2020, I completed the “Python Data Structures” course — an online non-credit program authorized by the University of Michigan and offered through Coursera. This course helped me understand how to organize, store, and manage data efficiently using Python — one of the key foundations for writing smarter and cleaner code. 💡",
            hashTags: "#Python #Coursera #UniversityOfMichigan #DataStructures #Programming #LearningJourney #Coding", 
            imgSrc: "/assets/certificates/python_data_structures.png",
            pdfSrc: "Python Data Structures.pdf",
            srcLink: "https://coursera.org/share/b27713058d686630bcef821ea1335c6f"
        },
        {
            id: 6,
            title: "Certificate of Appreciation",
            dateIssued: dayjs("August 30, 2024"),
            description: "🏆 On August 30, 2024, I was awarded a Certificate of Appreciation in recognition of my expertise in the development of the Sky Freight HRIS and my participation in conducting the user orientation held on August 28–30, 2024, at the Sky Freight Training Room. I’m grateful for the opportunity to contribute to a project that streamlines HR processes and helps improve efficiency within the organization. This experience taught me a lot about teamwork, system implementation, and delivering real-world tech solutions. 💼💻",
            hashTags: "#Achievement #WebDevelopment #HRIS #SoftwareDevelopment #Teamwork #LearningJourney #Recognition", 
            imgSrc: "/assets/certificates/cert_of_appreciation_skyfreight.png",
            pdfSrc: "",
            srcLink: ""
        },
        {
            id: 7,
            title: "Certificate of Recognition",
            dateIssued: dayjs("September 12, 2025"),
            description: "🌟 On September 12, 2025, I was honored to receive a Certificate of Recognition in grateful acknowledgment of my outstanding performance and unwavering dedication to the success of Highly Succeed Inc. I’m truly grateful for this recognition. It reflects not just my individual effort but also the collaboration, trust, and support of an incredible team. 💼 This achievement motivates me to keep striving for excellence and to continue growing both personally and professionally. 🚀",
            hashTags: "#Recognition #Achievement #ProfessionalGrowth #Teamwork #Excellence #Dedication #HighlySucceedInc", 
            imgSrc: "/assets/certificates/cert_of_recognition_hsi.png",
            pdfSrc: "",
            srcLink: ""
        },
    ]