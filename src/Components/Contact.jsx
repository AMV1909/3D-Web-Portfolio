import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";

import { styles } from "../Styles";
import { EarthCanvas } from "./Canvas";
import { SectionWrapper } from "../Hoc";
import { slideIn } from "../Utils/Motion";
import { github_logo, linkedin, mail } from "../Assets";

export const Contact = SectionWrapper(function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);

    const onChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        toast.loading("Sending message...", {
            duration: Infinity,
            id: "loading",
        });

        await emailjs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICE,
                import.meta.env.VITE_EMAILJS_TEMPLATE,
                {
                    from_name: form.name,
                    to_name: "Axel",
                    from_email: form.email,
                    to_email: "amorales264@unab.edu.co",
                    message: form.message,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(() => {
                setLoading(false);
                toast.success(
                    "Message sent successfully!. I will get back to you as soon as possible.",
                    { duration: 5000 }
                );

                setForm({
                    name: "",
                    email: "",
                    message: "",
                });
            })
            .catch(() => {
                setLoading(false);
                toast.error("Something went wrong. Please try again later.");
            })
            .finally(() => toast.dismiss("loading"));
    };

    return (
        <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
            >
                <p className={`${styles.sectionSubText}`}>Get in touch</p>
                <h3 className={`${styles.heroHeadText}`}>Contact.</h3>

                <div className="flex items-center gap-5 mt-4 ml-2">
                    <a
                        href="https://www.linkedin.com/in/axel-morales-vesga-200317239"
                        title="LinkedIn"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={linkedin}
                            alt="linkedin"
                            className="h-6 rounded"
                        />
                    </a>

                    <a
                        href="mailto:axelmoralesvesga@gmail.com"
                        title="Email"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={mail} alt="mail" className="h-6" />
                    </a>

                    <a
                        href="https://github.com/AMV1909"
                        title="GitHub"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={github_logo} alt="github" className="h-6" />
                    </a>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="mt-12 flex flex-col gap-8"
                >
                    <div>
                        <label htmlFor="name" className="flex flex-col">
                            <span className="text-white font-medium mb-4">
                                Your Name
                            </span>
                        </label>
                        <input
                            required
                            id="name"
                            type="text"
                            name="name"
                            onChange={onChange}
                            value={form.name}
                            placeholder="What's your name?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium w-full"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="flex flex-col">
                            <span className="text-white font-medium mb-4">
                                Your Email
                            </span>
                        </label>
                        <input
                            required
                            id="email"
                            type="email"
                            name="email"
                            onChange={onChange}
                            value={form.email}
                            placeholder="What's your email?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium w-full"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="flex flex-col">
                            <span className="text-white font-medium mb-4">
                                Your Message
                            </span>
                        </label>
                        <textarea
                            required
                            id="message"
                            rows="7"
                            name="message"
                            onChange={onChange}
                            value={form.message}
                            placeholder="What do you want to say?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium w-full"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:bg-secondary hover:text-tertiary transition-all duration-300"
                    >
                        {loading ? "Sending..." : "Send"}
                    </button>
                </form>
            </motion.div>

            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
            >
                <div className="absolute z-10 h-[350px] w-full"></div>
                <EarthCanvas />
            </motion.div>
        </div>
    );
}, "contact");
