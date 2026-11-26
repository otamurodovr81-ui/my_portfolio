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
          <a
            href="#projects"
            className="relative inline-block hover:scale-105 transition duration-300"
          >
            {/* Tashqariga tarqaluvchi nur */}
            <span className="absolute -inset-1 animate-pulse rounded-3xl bg-gradient-to-r from-cyan-400 to-blue-500 opacity-60 blur-lg" />

            {/* Aylanuvchi border */}
            <span className="relative block overflow-hidden rounded-3xl bg-cyan-500/40 p-0.5">
              <span className="absolute -inset-full animate-spin bg-[conic-gradient(transparent,#ffffff,transparent_40%)]" />
              <span className="relative block rounded-[22px] bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 font-bold text-slate-950">
                {t.viewProjects}
              </span>
            </span>
          </a>

          <a
            href="#contact"
            className="group relative inline-block hover:scale-105 transition duration-300"
          >
            {/* Tashqariga tarqaluvchi nur */}
            <span className="absolute -inset-1 animate-pulse rounded-3xl bg-gradient-to-r from-cyan-400 to-blue-500 opacity-60 blur-lg" />

            {/* Aylanuvchi border */}
            <span className="relative block overflow-hidden rounded-3xl bg-cyan-500/40 p-0.5">
              <span className="absolute -inset-full animate-spin bg-[conic-gradient(transparent,#ffffff,transparent_40%)]" />
              <span className="relative block rounded-[22px] bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 font-bold text-slate-950">
                {t.contactMe}
              </span>
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}

export default Home;
