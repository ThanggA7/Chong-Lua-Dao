import { createContext } from "react";
import { useState, useContext } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [themes, setThemes] = useState("dark");
  const toggleMenu = () => {
    setThemes((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };
  const value = {
    themes,
    toggleMenu,
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
