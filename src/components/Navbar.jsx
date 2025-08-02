import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { id: "about", label: "About" },
        { id: "skills", label: "Skills" },
        { id: "projects", label: "Projects" },
        { id: "education", label: "Education" },
        { id: "contact", label: "Contact" },
    ];

    return (
        <nav className="bg-transparent text-white">
            <div className="flex justify-between items-center p-4">
                {/* Logo & Socials */}
                <div className="flex items-center gap-4">
                    <div className="text-lg font-semibold">Dhruv Kumar</div>
                    <div className="hidden sm:flex gap-3">
                        <a href="https://github.com/dhruvkumarcodes" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#8245ec]">
                            <FaGithub size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/contactdhruvkumar/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#8245ec]">
                            <FaLinkedin size={24} />
                        </a>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="mr-10">
                    <ul className="hidden font-semibold sm:flex gap-10">
                        {menuItems.map((item) => (
                            <li key={item.id}>
                                <a
                                    href={`#${item.id}`}
                                    className="hover:text-purple-500 transition duration-200"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>


                {/* Hamburger Menu */}
                <div className="sm:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="sm:hidden flex flex-col items-center gap-4 pb-4">
                    {menuItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            onClick={() => setIsOpen(false)}
                            className="text-lg hover:text-purple-500 transition duration-200"
                        >
                            {item.label}
                        </a>
                    ))}
                    {/* Socials in mobile menu */}
                    <div className="flex gap-4 mt-2">
                        <a href="https://github.com/dhruvkumarcodes" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#8245ec]">
                            <FaGithub size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/contactdhruvkumar/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#8245ec]">
                            <FaLinkedin size={24} />
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
