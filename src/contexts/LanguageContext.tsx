import { createContext, useContext, useState, ReactNode } from "react";

export const languages = [
  { code: "en", label: "English", short: "EN" },
  { code: "hi", label: "हिन्दी", short: "हि" },
  { code: "od", label: "ଓଡ଼ିଆ", short: "ଓ" },
  { code: "te", label: "తెలుగు", short: "తె" },
  { code: "ta", label: "தமிழ்", short: "த" },
  { code: "bn", label: "বাংলা", short: "বা" },
  { code: "mr", label: "मराठी", short: "म" },
  { code: "gu", label: "ગુજરાતી", short: "ગુ" },
  { code: "pa", label: "ਪੰਜਾਬੀ", short: "ਪੰ" },
];

type LanguageContextType = {
  lang: string;
  setLang: (lang: string) => void;
  currentLanguage: typeof languages[0];
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  currentLanguage: languages[0],
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState("en");
  const currentLanguage = languages.find((l) => l.code === lang) || languages[0];
  return (
    <LanguageContext.Provider value={{ lang, setLang, currentLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
