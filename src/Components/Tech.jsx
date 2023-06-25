import { motion } from "framer-motion";

import { SectionWrapper } from "../Hoc";
import { technologies } from "../Constants";
import { fadeIn, textVariant } from "../Utils/Motion";
import { styles } from "../Styles";

export const Tech = SectionWrapper(function Tech() {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText}`}>What I know?</p>
                <h2 className={`${styles.sectionHeadText}`}>Technologies.</h2>
            </motion.div>

            <div className="mt-10 flex flex-row flex-wrap justify-center gap-10">
                {technologies.map((tech, index) => (
                    <motion.div
                        key={tech.name}
                        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                    >
                        <div className="w-28 h-28 bg-white rounded-xl flex justify-center items-center">
                            <img
                                className="cursor-pointer"
                                src={tech.icon}
                                alt={tech.name}
                                onClick={() => window.open(tech.link, "_blank")}
                            />
                        </div>

                        <p className="text-white text-center text-[14px] font-semibold mt-2">
                            {tech.name}
                        </p>
                    </motion.div>
                ))}
            </div>
        </>
    );
}, "technologies");
