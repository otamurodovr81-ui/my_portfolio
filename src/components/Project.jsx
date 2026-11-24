
import { motion } from "framer-motion";
import { FaGithub,  FaTelegram, FaInstagram  } from "react-icons/fa";
import projects from "../data/project";
import { useLanguage } from "../context/LanguageContext";

function Project() {
    const cardProject = projects;

    const { t } = useLanguage();

    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center px-5 py-24"
        >
            <div className="max-w-[1100px] w-full">

                {/* Section title */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-14"
                >

                    <h2 className="text-4xl md:text-5xl mt-4 font-bold text-cyan-400">
                        {t.title}
                    </h2>

                    <p className="text-gray-400 mt-4 max-w-xl mx-auto">
                       {t.subtitle}
                    </p>
                </motion.div>

                {/* Project cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {cardProject.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.7,
                                delay: index * 0.2,
                                ease: "easeOut",
                            }}
                            whileHover={{ y: -8 }}
                            className="group overflow-hidden rounded-2xl border border-sky-400/20 bg-slate-900/70 hover:border-sky-400/20 hover:shadow-[0_0_30px_rgba(56,189,248,0.12)] transition-colors duration-300"
                        >

                            {/* Project image */}
                            <div className="overflow-hidden h-62">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            {/* Card content */}
                            <div className="p-6">

                                <h3 className="text-xl font-bold text-white mb-3">
                                    {project.name}
                                </h3>

                                <p className="text-gray-400 text-sm leading-6 mb-5">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies?.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="text-xs text-sky-300 bg-sky-400/10 border border-sky-400/20 px-3 py-1.5 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex items-center gap-3">

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 rounded-lg border border-sky-400/30 text-white text-sm hover:bg-sky-400/10 transition"
                                    >
                                       <FaGithub size={20}/>
                                        GitHub
                                    </a>

                                    {/* <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-500 text-white text-sm hover:bg-sky-400 transition"
                                    >
                                        <ExternalLink size={17} />
                                        Live Demo
                                    </a> */}

                                </div>
                            </div>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default Project;
