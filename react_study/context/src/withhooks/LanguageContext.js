import React, { createContext, useState } from "react";

export const LanguageContext = createContext();
export default function LanguageProvider(props) {
  const [language, setLanguage] = useState("tamil");

  function changeLanguage(e) {
    setLanguage(e.target.value);
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  );
}
