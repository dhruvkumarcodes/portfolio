// src/components/Projects.jsx

import React from "react";
import { PROJECTS } from "../Data";
import { FiGithub } from "react-icons/fi";
import { BiLinkExternal } from "react-icons/bi";

function Projects() {
    return (
        <section id="projects" className="bg-slate-900 py-16 px-4 text-white">
            <h2 className="text-4xl font-bold text-center text-purple-500 mb-12">Projects</h2>

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {PROJECTS.map((project, index) => (
                    <div
                        key={index}
                        className="bg-slate-800 rounded-2xl p-5 shadow-md hover:shadow-purple-500/50 transition duration-300 group"
                    >
                        <div className="rounded-xl">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover rounded-xl transform transition-transform duration-300 hover:scale-150"
                            />
                        </div>
                        <h3 className="text-xl font-semibold text-purple-400 mt-4">{project.title}</h3>
                        <p className="text-sm mt-2 text-gray-300">{project.description}</p>

                        <div className="flex flex-wrap gap-2 mt-4">
                            {project.technologies.map((tech, i) => (
                                <span
                                    key={i}
                                    className="bg-purple-700/30 text-sm px-2 py-1 rounded-md text-purple-300"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Links Section */}
                        <div className="flex gap-4 mt-4 justify-end ">
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-purple-300 hover:text-white transition"
                                >
                                    <FiGithub className="text-lg" />
                                    GitHub
                                </a>
                            )}
                            {project.live && (
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-purple-300 hover:text-white transition"
                                >
                                    <BiLinkExternal className="text-lg" />
                                    Live
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
