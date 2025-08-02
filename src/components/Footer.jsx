import React from "react";

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white py-6">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-4">
                <div className="text-lg font-semibold text-purple-400">
                    Dhruv Kumar
                </div>

                <ul className="flex flex-wrap items-center gap-6 text-sm font-medium">
                    {["about", "skills", "projects", "education", "contact"].map((section) => (
                        <li key={section}>
                            <a
                                href={`#${section}`}
                                className="text-gray-300 hover:text-purple-400 transition duration-200"
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
