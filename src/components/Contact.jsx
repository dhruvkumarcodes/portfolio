import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
    const form = useRef();
    const [isSent, setIsSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_e4ewvea",
                "template_jhi5nhd",
                form.current,
                "-0dYMo24_FZ9WV7UP"
            )
            .then(
                () => {
                    setIsSent(true);
                    form.current.reset();
                    toast.success("Message sent successfully! ", {
                        position: "top-right",
                        autoClose: 3000,
                        theme: "dark",
                    });
                },
                (error) => {
                    console.error("Error:", error);
                    toast.error("Failed to send message. Try again.", {
                        position: "top-right",
                        autoClose: 3000,
                        theme: "dark",
                    });
                }
            );
    };

    return (
        <section
            id="contact"
            className="bg-slate-900 py-20 px-4 text-white"
        >
            <ToastContainer />

            <h2 className="text-4xl font-bold text-center text-purple-500 mb-12">Contact Me</h2>

            <div className="max-w-3xl mx-auto bg-slate-800 p-8 rounded-2xl shadow-md">
                <p className="text-center text-gray-300 mb-6 text-lg font-semibold">
                    I'm always open to discussing projects or collaborations. Let's connect!
                </p>

                <form ref={form} onSubmit={sendEmail} className="space-y-5">
                    <div>
                        <label htmlFor="user_name" className="block text-sm mb-1 text-purple-300">Name</label>
                        <input
                            type="text"
                            name="user_name"
                            placeholder="Your Name"
                            required
                            className="w-full p-3 rounded-md bg-slate-900 text-white border border-gray-600 focus:outline-none focus:border-purple-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="user_email" className="block text-sm mb-1 text-purple-300">Email</label>
                        <input
                            type="email"
                            name="user_email"
                            placeholder="Your Email"
                            required
                            className="w-full p-3 rounded-md bg-slate-900 text-white border border-gray-600 focus:outline-none focus:border-purple-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block text-sm mb-1 text-purple-300">Subject</label>
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            required
                            className="w-full p-3 rounded-md bg-slate-900 text-white border border-gray-600 focus:outline-none focus:border-purple-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm mb-1 text-purple-300">Message</label>
                        <textarea
                            name="message"
                            rows="5"
                            placeholder="Write your message..."
                            required
                            className="w-full p-3 rounded-md bg-slate-900 text-white border border-gray-600 focus:outline-none focus:border-purple-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 rounded-md font-semibold text-white hover:opacity-90 transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
