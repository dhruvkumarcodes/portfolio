import React from "react";
import { education } from "../Data";

function Education() {
    return (
        <section id="education" className="bg-slate-900 py-16 px-4 text-white">
            <h2 className="text-4xl font-bold text-center text-purple-500 mb-12">Education</h2>

            <div className="max-w-5xl mx-auto space-y-12">
                {education.map((edu, index) => (
                    <div
                        key={edu.id}
                        className={`flex flex-col md:flex-row ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                            } items-center md:items-start gap-8`}
                    >
                        {/* Content Box */}
                        <div className="bg-slate-800 p-6 rounded-xl shadow-md w-full md:w-1/2">
                            <h3 className="text-2xl font-semibold text-purple-400">{edu.school}</h3>
                            <p className="text-sm text-gray-300 mt-1">{edu.degree}</p>
                            <p className="text-sm text-gray-400 mt-1">{edu.grade}</p>
                            {edu.date && (
                                <p className="text-sm text-gray-500 mt-1">{edu.date}</p>
                            )}
                        </div>

                        {/* Empty space to alternate layout on large screens */}
                        <div className="hidden md:block w-1/2" />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Education;
