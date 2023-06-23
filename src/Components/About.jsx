import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import { styles } from "../Styles";
import { services } from "../Constants";
import { fadeIn, textVariant } from "../Utils/Motion";
import { SectionWrapper } from "../Hoc";

const ServiceCard = ({ index, title, icon }) => {
    return (
        <Tilt className="xs:w-[250px] w-full">
            <motion.div
                variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            >
                <div
                    options={{ max: 45, scale: 1, speed: 450 }}
                    className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
                >
                    <img
                        src={icon}
                        alt={title}
                        className="w-16 h-16 object-contain"
                    />
                    <h3 className="text-white text-[20px] font-bold text-center">
                        {title}
                    </h3>
                </div>
            </motion.div>
        </Tilt>
    );
};

export const About = SectionWrapper(function About() {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText}`}>Introduction</p>
                <h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
                I am a Full Stack developer proficient in front-end and back-end
                development. With expertise in HTML, CSS, JavaScript, as well as
                the framework React, I create complete and functional web
                applications. I also have experience in backend development
                using technologies such as Express with Node.js, and databases
                such as MongoDB and MySQL. efficient and high-quality solutions,
                staying updated on the latest web development trends to meet
                client and user needs.
            </motion.p>

            <div className="mt-20 flex flex-wrap gap-10">
                {services.map((service, index) => (
                    <ServiceCard
                        key={service.title}
                        index={index}
                        {...service}
                    />
                ))}
            </div>
        </>
    );
}, "about");
