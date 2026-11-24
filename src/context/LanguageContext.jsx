
import { createContext, useContext, useState } from "react";
import en from "../locales/en";
import ru from "../locales/ru";
import uz from "../locales/uz";

const LanguageContext = createContext();


const translations = {
    en,
    ru,
    uz
}

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState("uz");
    
    const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage,t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
