
import Header from "./components/Header";
import About from "./components/About";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Home from "./components/Home";
import { LanguageProvider } from "./context/LanguageContext";
import Contact from "./components/Contact";


function App() {
  return (
    
    <LanguageProvider>
      <Header />

      <main>
        <Home />
        <About />
        <Project />
        <Skills />
        <Contact/>
      </main>

    </LanguageProvider>
    

  );
}

export default App;
