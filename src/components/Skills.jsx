
import { motion } from "framer-motion";
import skillsData from "../data/skillsData";
import { useLanguage } from "../context/LanguageContext";


function Skills() {

    const { t } = useLanguage();
    
    return (
        <section
            id="skills"
            className="min-h-screen flex items-center justify-center px-5 pt-24 pb-10"
        >
            <div className="max-w-[1100px] w-full">

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-5xl font-bold text-white mb-4 text-center"
                >
                   {t.skillsTitle}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-gray-400 text-center mb-12"
                >
                    {t.skillsSubtitle}
                </motion.p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">

                    {skillsData.map((skill, index) => {
                        const Icon = skill.icon;

                        return (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                whileHover={{
                                    y: -10,
                                    scale: 1.05,
                                }}
                                className="group flex flex-col items-center justify-center gap-4 p-8 rounded-2xl border-3 border-sky-300/30 bg-slate-900/70 backdrop-blur-md hover:border-sky-500/80 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] transition-all duration-300"
                            >
                                <Icon
                                    size={45}
                                    style={{ color: skill.color }}
                                    className="group-hover:scale-110 transition-transform duration-300"
                                />

                                <h3 className="text-white font-semibold text-lg">
                                    {skill.name}
                                </h3>
                            </motion.div>
                        );
                    })}

                </div>
            </div>
        </section>
    );
}

export default Skills;
