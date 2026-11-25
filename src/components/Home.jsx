import { useLanguage } from "../context/LanguageContext";

function Home() {


  const { t } = useLanguage();


  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="container mx-auto text-center">

        {/* Asosiy sarlavha */}
        <h1 className="text-5xl md:text-6xl font-bold text-black mb-4  text-white">
          {t.homeTitle}
        </h1>

        {/* Kasb */}
        <h2 className="text-2xl md:text-4xl font-semibold text-cyan-400 mb-6">
          {t.profession}
        </h2>

        {/* Tanishtiruv */}
        <p className="max-w-2xl mx-auto text-gray-400 text-base md:text-lg leading-relaxed mb-8">
           {t.homeDescription}
        </p>

        {/* Tugmalar */}
        <div className="flex flex-wrap justify-center gap-4">
          <a  href="#projects" className="px-6 py-3 bg-cyan-500 text-slate-950 font-bold rounded-3xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold hover:scale-105 transition duration-300 shadow-[0_0_30px_rgba(34,211,238,0.3)]">
            {t.viewProjects}
          </a>

          <a href="#contact" className="px-6 py-3 border border-cyan-400 text-cyan-400 font-bold rounded-3xl  bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold hover:scale-105 transition duration-300 shadow-[0_0_30px_rgba(34,211,238,0.3)] ">
            {t. contactMe}
          </a>
        </div>

      </div>
    </section>
  );
}

export default Home;
