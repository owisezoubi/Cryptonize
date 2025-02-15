import React, { useState, useEffect } from 'react';
import { ReactSVG } from 'react-svg';
import SunSVG from '../icon/Sun.svg';
import MoonSVG from '../icon/Moon.svg';
// Import style definitions from the separate design file
import { ThemeToggleButtonStyle as styles } from '../styles/ThemeToggleButtonStyle';

/**
 * ThemeToggleButton component toggles between dark and light themes.
 */
const ThemeToggleButton = () => {
  // Load initial theme from localStorage or default to "light"
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  // On theme change, update HTML classes, localStorage, and dispatch a custom event
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
    const themeChangeEvent = new CustomEvent('themeChange', { detail: { theme } });
    window.dispatchEvent(themeChangeEvent);
  }, [theme]);

  // Toggle theme between dark and light
  const handleToggle = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className={styles.container}>
      {/* Hidden checkbox for accessibility */}
      <input
        className={styles.input}
        type="checkbox"
        id="darkmode-toggle"
        checked={theme === 'dark'}
        onChange={handleToggle}
      />

      {/* The outer label (slider background) */}
      <label htmlFor="darkmode-toggle" className={styles.label}>
        {/* Slider "thumb" with dynamic positioning based on the theme */}
        <span
          className={`${styles.thumbBase} ${theme === 'dark' ? 'left-9' : 'left-0.5'}`}
        />

        {/* Sun icon on the left with dynamic opacity */}
        <ReactSVG
          src={SunSVG}
          className={`${styles.sunIconBase} ${theme === 'dark' ? 'opacity-0' : 'opacity-100'}`}
        />

        {/* Moon icon on the right with dynamic opacity */}
        <ReactSVG
          src={MoonSVG}
          className={`${styles.moonIconBase} ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}
        />
      </label>
    </div>
  );
};

export default ThemeToggleButton;
