"use client"

import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

const getFromlocalStorage = () => {
  if(typeof window !== 'undefined') {
    const value = window.localStorage.getItem('theme');
    return value || 'light';
  }

  return 'light';
}

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(getFromlocalStorage);

  useEffect(() => {
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const toggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>
}