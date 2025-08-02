import MindMirror from "../assets/MindMirror.png"
import Bubble from "../assets/Bubble.png"
import Zesty from "../assets/Zesty.JPG"
import portfolio from "../assets/portfolio.png"

export const PROJECTS = [
    {
        title: "MindMirror",
        image: MindMirror,
        description:
            "a Platform to capture and organize 1000+ thoughts, tasks, secrets, and media with real-time sync and tag-based categorization for 2.5x faster content retrieval and public link sharing for secure visibility.",
        technologies: ["TypeScript", "Express", "Node.js", "MongoDB", "Tailwind CSS", "Zod", "JWT", "Bcrypt.js"],
        github: "https://github.com/dhruvkumarcodes/MindMirror",
        live: "https://mindmirror-goha.onrender.com"
    },
    {
        title: "BUBBLE",
        image: Bubble,
        description:
            "A secure Real-Time Messaging Platform with private messaging using WebSockets and Socket.IO",
        technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Bcrypt.js", "Tailwind CSS", "Socket.IO"],
        github: "https://github.com/dhruvkumarcodes/BUBBLE",
        live: "https://bubble-aakb.onrender.com"
    },
    {
        title: "Zesty",
        image: Zesty,
        description:
            "A dynamic food ordering platform supporting 50+ items and secure Stripe Payments.",
        technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API", "Tailwind CSS"],
        github: "https://github.com/dhruvkumarcodes/Zesty",

    },
    {
        title: "Portfolio Website",
        image: portfolio,
        description:
            "A personal portfolio website showcasing projects, skills, experience and contact information.",
        technologies: ["HTML", "Tailwind CSS", "React"],
    },
];

export const education = [
    {
        id: 0,
        school: "Indian Institute of Information Technology, Sonepat",
        date: "Nov 2022 - May 2026",
        grade: "8.3 CGPA",
        degree: "B.Tech - Information Technology",
    },
    {
        id: 1,
        school: "MASD Public School,Panipat",
        grade: "95.6%",
        degree: "CBSE(XII)",
    },
    {
        id: 2,
        school: "Pratap Public School, Karnal",
        grade: "92.4%",
        degree: "CBSE(X)",
    },

];