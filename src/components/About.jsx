
import rasim3 from "../assets/rasim3.png";
import { FaGithub,  FaTelegram, FaInstagram  } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";


function About() {


    const { t } = useLanguage();

    return (
        <section
            id="about"
            className="relative min-h-screen flex items-center px-6 py-24 overflow-hidden"
        >
            <div className="w-full max-w-[1050px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">

                {/* LEFT - TEXT */}
                <div className="relative z-10">

                    <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
            
                        <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                            {t.aboutTitle}
                        </span>
                    </h1>

                    <p className="text-gray-300 text-lg leading-relaxed mb-5">
                        {t.aboutDescription1}
                    </p>

                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                        {t.aboutDescription2}
                    </p>

                    {/* BUTTON AND SOCIAL LINKS */}
                    <div className="flex flex-wrap items-center gap-4">

                        <a href="#contact" className="flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold hover:scale-105 transition duration-300 shadow-[0_0_30px_rgba(34,211,238,0.3)]">
                            {t.contactMe}
                        </a>

                        {/* Social icons */}
                        <div className="flex items-center gap-3 shrink-0">

                            <a
                                href="https://github.com/otamurodovr81-ui"
                                className="inline-flex p-2 sm:p-3 rounded-full border border-cyan-400/30 text-white hover:text-green-400 hover:border-green-400 transition-all duration-700 hover:[transform:perspective(400px)_rotatey(360deg)]"
                            >
                                <FaGithub size={22} />
                            </a>

                            <a href="https://t.me/ravshan0824"
                                className=" inline-flex p-2 sm:p-3 rounded-full border border-cyan-400/30 text-white hover:text-cyan-400 hover:border-cyan-400 transition-all duration-700 hover:[transform:perspective(400px)_rotatey(360deg)]">
                                <FaTelegram size={22} />
                            </a>

                            <a href="https://instagram.com/umorvich_77_"
                                className="inline-flex p-2 sm:p-3 rounded-full border border-cyan-400/30 text-white hover:text-[#FF38B3] hover:border-red-400 transition-all duration-700 hover:[transform:perspective(400px)_rotatey(360deg)]">
                                <FaInstagram size={22} />
                            </a>

                        </div>

                    </div>
                </div>

                {/* RIGHT - IMAGE */}
                <div className="relative flex justify-center items-center">

                    {/* Cyan glow */}
                    <div className="absolute w-80 h-80 bg-cyan-300/50 rounded-full blur-[120px]"></div>

                    {/* Purple glow */}
                    <div className="absolute w-80 h-80 bg-purple-600/70 rounded-full blur-[120px] translate-x-20"></div>

                    <img
                        src={rasim3}
                        alt="Ravshan"
                        className="relative z-10 w-full max-w-sm object-contain"
                        style={{
                            maskImage: "linear-gradient(to bottom, black 65%, transparent 100%)",
                            WebkitMaskImage: "linear-gradient(to bottom, black 65%, transparent 100%)",
                        }}
                    />

                </div>

            </div>
        </section>
    );
}

export default About;
