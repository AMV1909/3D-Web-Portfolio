import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import { styles } from "../Styles";
import { fullscreen, github, url } from "../Assets";
import { SectionWrapper } from "../Hoc";
import { projects } from "../Constants";
import { fadeIn, textVariant } from "../Utils/Motion";

const ImageModal = ({ src, setIsModalOpen }) => {
    const imageRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (imageRef.current && !imageRef.current.contains(event.target)) {
                setIsModalOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [imageRef, setIsModalOpen]);

    return (
        <div
            className="w-full h-full fixed inset-0 z-50 bg-black/75 flex justify-center items-center"
        >
            <img
                ref={imageRef}
                src={src}
                alt="project"
                className="px-4 sm:px-10 lg:px-0 lg:w-3/4 lg:h-3/4 object-contain"
            />
        </div>
    );
};

const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
    deployed_url,
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
                <Tilt className="bg-tertiary p-5 rounded-2xl sm:w-[300px] w-full h-full">
                    <div className="relative w-full h-[230px]">
                        <img
                            src={image}
                            alt={name}
                            className="w-full h-full object-cover rounded-2xl"
                        />

                        <div className="absolute inset-0 flex gap-2 justify-end m-3 card-img_hover">
                            {deployed_url && (
                                <div
                                    onClick={() =>
                                        window.open(deployed_url, "_blank")
                                    }
                                    className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                                >
                                    <img
                                        src={url}
                                        alt="url"
                                        className="w-1/2 h-1/2 object-contain"
                                    />
                                </div>
                            )}

                            {source_code_link && (
                                <div
                                    onClick={() =>
                                        window.open(source_code_link, "_blank")
                                    }
                                    className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                                >
                                    <img
                                        src={github}
                                        alt="github"
                                        className="w-1/2 h-1/2 object-contain"
                                    />
                                </div>
                            )}

                            <div
                                onClick={() => setIsModalOpen(true)}
                                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                            >
                                <img
                                    src={fullscreen}
                                    alt="fullscreen"
                                    className="w-1/2 h-1/2 object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-5">
                        <h3 className="text-white font-bold text-[24px]">
                            {name}
                        </h3>

                        <p className="mt-2 text-secondary text-[14px] text-justify">
                            {description}
                        </p>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <p
                                key={tag.name}
                                className={`text-[14px] ${tag.color}`}
                            >
                                #{tag.name}
                            </p>
                        ))}
                    </div>
                </Tilt>
            </motion.div>

            {isModalOpen && (
                <ImageModal src={image} setIsModalOpen={setIsModalOpen} />
            )}
        </>
    );
};

export const Works = SectionWrapper(function Works() {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText}`}>My work</p>
                <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
            </motion.div>

            <div className="w-full flex">
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
                >
                    Following projects showcases my skills and experience
                    through real-world examples of my work. Each project is
                    briefly described with a link to the source code and a live
                    demo in it (if available). It reflects my ability to solve
                    complex problems, work with different technologies and
                    manage projects effectively.
                </motion.p>
            </div>

            <div className="mt-20 flex flex-wrap gap-7">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={project.name}
                        index={index}
                        {...project}
                    />
                ))}
            </div>
        </>
    );
}, "work");
