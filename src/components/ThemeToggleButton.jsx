import React, { useState, useEffect } from 'react';
import { ReactSVG } from 'react-svg';
import SunSVG from '../icon/Sun.svg';
import MoonSVG from '../icon/Moon.svg';

const ThemeToggleButton = () => {
  // 1) Load initial theme from localStorage or default to "light"
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  // 2) On theme change, update HTML, localStorage, and dispatch a custom event
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }

    // Save the theme to localStorage
    localStorage.setItem('theme', theme);

    // Dispatch a custom event to notify other components
    const themeChangeEvent = new CustomEvent('themeChange', { detail: { theme } });
    window.dispatchEvent(themeChangeEvent);
  }, [theme]);

  // 3) Handle the toggle by flipping the theme
  const handleToggle = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="mt-[-5] ml-[2.5]">
      {/* Hidden checkbox toggles theme between dark/light */}
      <input
        className="sr-only"
        type="checkbox"
        id="darkmode-toggle"
        checked={theme === 'dark'}
        onChange={handleToggle}
      />

      {/* The outer label (slider background) */}
      <label
        htmlFor="darkmode-toggle"
        className="relative block w-16 h-8 rounded-full cursor-pointer transition-all duration-300 shadow-inner bg-gray-200 dark:bg-[#242424]"
      >
        {/* The slider "thumb" */}
        <span
          className={`absolute top-1 w-6 h-6 rounded-full shadow transition-all duration-480 transform
                      bg-gradient-to-b from-[#ffcc89] to-[#d8860b] 
                      dark:bg-gradient-to-b dark:from-gray-400 dark:to-gray-600
                      ${theme === 'dark' ? 'left-9' : 'left-0.5'}`}
        />

        {/* Sun icon on the left */}
        <ReactSVG
          src={SunSVG}
          className={`absolute top-1.5 left-1 w-5 transition-all duration-100 
                      ${theme === 'dark' ? 'opacity-0' : 'opacity-100'}`}
        />

        {/* Moon icon on the right */}
        <ReactSVG
          src={MoonSVG}
          className={`absolute top-1.5 right-1.5 w-5 transition-all duration-100 
                      ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}
        />
      </label>
    </div>
  );
};

export default ThemeToggleButton;
