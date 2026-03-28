"use client";
import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Default Settings (Detroit Style)
  const [config, setConfig] = useState({
    primaryColor: "#FF0000",
    secondaryColor: "#FF8C00",
    gridOpacity: 0.15,
    blurStrength: "12px",
    cardRoundness: "1.25rem"
  });

  // God Mode se changes update karne ke liye function
  const updateConfig = (newSettings) => {
    setConfig((prev) => ({ ...prev, ...newSettings }));
    // Future: Yahan Database save logic aayega
  };

  return (
    <ThemeContext.Provider value={{ config, updateConfig }}>
      <div style={{ 
        "--detroit-red": config.primaryColor,
        "--detroit-orange": config.secondaryColor,
        "--grid-op": config.gridOpacity,
        "--blur-val": config.blurStrength,
        "--radius-val": config.cardRoundness
      }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
