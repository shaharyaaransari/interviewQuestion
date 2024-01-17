import React, { createContext, useEffect, useState } from "react";
export const ThemeContext = createContext();
export const ThemProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const ToggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };
  useEffect(()=>{
     document.documentElement.setAttribute("data-theme",theme)
  },[isDarkMode])
  const theme = isDarkMode ? "dark" : "light";
  return (
    <ThemeContext.Provider value={{ theme, ToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
