import { Globe, Menu, Phone, X,  } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";



function Header() {

    const { language, setLanguage, t } = useLanguage();

    const [isOpen, setOpen] = useState(false);

    const [langOpen, setlangOpen] = useState(false);


    const navLinks = [
        { name: t.home, path: "#home" },
        { name: t.about, path: "#about" },
        { name: t.projects, path: "#projects" },
        { name: t.skills, path: "#skills" },
        { name: t.contact, path: "#contact" },
    ];

    return (
        <header className="fixed top-0 left-0 z-50 w-full pt-8 px-5">
            <div className="flex items-center justify-between max-w-[1200px] mx-auto px-[28px] py-[14px] rounded-4xl bg-white/10 backdrop-blur-xl border border-white/30 shadow-lg">
               
                {/* Logo */}
                <a href="#home" className="text-2xl font-bold text-cyan-400">
                    Ravshan
                </a>

                {/* Navigation */}
                <nav className="flex hidden md:flex items-center gap-8 ">
                    {navLinks.map((link) => (
                        <a
                            key={link.path}
                            href={link.path}
                            className="transition duration-400 hover:-translate-y-1 hover:text-cyan-400 hover:scale-125"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <button onClick={() => setlangOpen(!langOpen)}
                        className="cursor-pointer "
                    >
                        <Globe size={20}
                            className={`transition duration-300 hover:text-cyan-400 ${langOpen ? "text-cyan-400" : ""}`}
                        />
                    </button>
                    
                    <a href="#contact" className="px-6 py-2 hidden sm:flex rounded-2xl cursor-pointer bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold hover:scale-105 transition duration-300 shadow-[0_0_30px_rgba(34,211,238,0.3)]">
                        <Phone size={18} />
                    </a>

                    {/* menu */}
                    <button
                        onClick={() => setOpen(!isOpen)}
                        className="md:hidden"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {langOpen && (
                    <nav className=" absolute flex flex-col gap-2 right-28 top-18 px-2 py-2 w-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl text-slate-950 font-bold ">
                        <button onClick={() => {
                            setLanguage("uz");
                            setlangOpen(false);
                        }}
                            className="cursor-pointer transition duration-400 hover:-translate-y-1 hover:text-white"
                        >
                            UZB
                        </button>

                        <button onClick={() => {
                            setLanguage("en");
                            setlangOpen(false);
                        }}
                            className="cursor-pointer transition duration-400 hover:-translate-y-1 hover:text-white"
                        >
                            ENG
                        </button>

                        <button onClick={() => {
                            setLanguage("ru");
                            setlangOpen(false);
                        }}
                            className="cursor-pointer transition duration-400 hover:-translate-y-1 hover:text-white"
                        >
                            RUS
                        </button>
                    </nav>
                    
                )}
              
                {/* Menu responsive */}
                {isOpen && (
                    <nav className=" absolute top-18 right-4  md:hidden flex flex-col bg-blue-500 px-2 py-2 w-32 rounded-2xl gap-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold hover:scale-105 transition duration-300 shadow-[0_0_30px_rgba(34,211,238,0.3)] "
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.path}
                                href={link.path}
                                onClick={() => setOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>
                )}
            </div>
        </header>
    );
}

export default Header;