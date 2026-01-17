import { useEffect, useState } from "react";
import { SettingsContext } from "./SettingsContext";

export function SettingsProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("app-settings");
    const parsed = saved ? JSON.parse(saved) : {};
    return parsed.theme || "light";
  });
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem("app-settings");
    const parsed = saved ? JSON.parse(saved) : {};
    return parsed.language || "en";
  });

  useEffect(() => {
    const settings = { theme, language };
    localStorage.setItem("app-settings", JSON.stringify(settings));
  }, [theme, language]);

  const changeTheme = (newTheme) => setTheme(newTheme);
  const changeLanguage = (newLanguage) => setLanguage(newLanguage);

  const resetSettings = () => {
    setTheme("light");
    setLanguage("en");
  };

  const value = { theme, language, changeTheme, changeLanguage, resetSettings };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
}
