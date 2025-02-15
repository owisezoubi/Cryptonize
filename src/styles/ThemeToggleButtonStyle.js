// This file contains all design-related style definitions for the ThemeToggleButton component.
export const ThemeToggleButtonStyle = {
    // Container for the toggle button with margin adjustments
    container: "mt-[-5] ml-[2.5]",
    // Hidden input for accessibility
    input: "sr-only",
    // Label acting as the slider background
    label: "relative block w-16 h-8 rounded-full cursor-pointer transition-all duration-300 shadow-inner bg-gray-200 dark:bg-[#242424]",
    // Base styles for the slider "thumb"
    thumbBase: "absolute top-1 w-6 h-6 rounded-full shadow transition-all duration-480 transform bg-gradient-to-b from-[#ffcc89] to-[#d8860b] dark:bg-gradient-to-b dark:from-gray-400 dark:to-gray-600",
    // Base styles for the Sun icon
    sunIconBase: "absolute top-1.5 left-1 w-5 transition-all duration-100",
    // Base styles for the Moon icon
    moonIconBase: "absolute top-1.5 right-1.5 w-5 transition-all duration-100",
  };
  