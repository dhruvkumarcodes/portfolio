import React from 'react';
import { DiRedis, DiVisualstudio } from "react-icons/di";
import { FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaNodeJs } from "react-icons/fa";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import {
    SiMongodb, SiMysql, SiTypescript, SiJupyter, SiPostman,
    SiCplusplus, SiExpress, SiDocker, SiRender
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoPython } from "react-icons/io";

const skills = [
    { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
    { icon: <FaCss3Alt className="text-blue-600" />, name: "CSS" },
    { icon: <RiReactjsLine className="text-cyan-400" />, name: "React" },
    { icon: <TbBrandNextjs />, name: "Next.js" },
    { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
    { icon: <SiExpress className="text-gray-400" />, name: "Express" },
    { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
    { icon: <FaGitAlt className="text-red-500" />, name: "Git" },
    { icon: <FaGithub className="text-white" />, name: "GitHub" },
    { icon: <SiMysql className="text-yellow-700" />, name: "MySQL" },
    { icon: <IoLogoPython className="text-sky-400" />, name: "Python" },
    { icon: <SiCplusplus className="text-red-500" />, name: "C++" },
    { icon: <SiTypescript className="text-blue-500" />, name: "TypeScript" },
    { icon: <RiTailwindCssFill className="text-sky-400" />, name: "Tailwind" },
    { icon: <DiVisualstudio className="text-purple-500" />, name: "VS Code" },
    { icon: <SiRender className="text-indigo-400" />, name: "Render" },
    { icon: <SiDocker className="text-blue-500" />, name: "Docker" },
    { icon: <SiPostman className="text-orange-500" />, name: "Postman" },
];

function Skills() {
    return (
        <div id="skills" className="border-b border-neutral-800 pb-24 text-white bg-slate-900 pt-10 font-semibold text-5xl">
            <div className='flex justify-center mb-10 text-purple-500 font-bold text-6xl transition-all duration-300 hover:text-purple-400 hover:drop-shadow-purple-400'>
                SkillSet
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-5 gap-8 justify-items-center text-6xl">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center transition-transform duration-300 hover:scale-125 group"
                    >
                        {skill.icon}
                        <span className="text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                            {skill.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
