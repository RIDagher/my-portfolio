import React, { createContext, useState, useEffect } from 'react';

// Create a context with `createContext`
export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  // State to hold the current theme.
  const [theme, setTheme] = useState('light'); // default is light

  // When component mounts, we read the theme from localStorage and update state
  useEffect(() => {
    const storedTheme = window.localStorage.getItem('theme');
    if (storedTheme) setTheme(storedTheme);
  }, []);

  // Toggle theme function, switch between light and dark, and store in localStorage.
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    window.localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
