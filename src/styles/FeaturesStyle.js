// This file contains all design-related style definitions for the FeaturesSection component.
export const FeaturesStyle = {
  // Section styling for background and text colors in light/dark mode
  section: "py-16 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200",
  // Container styling for width and horizontal padding
  container: "max-w-7xl mx-auto px-6 lg:px-8",
  // Wrapper styling to center and properly display the video
  videoWrapper: "relative overflow-hidden flex justify-center items-center",
  // Inline styles for the video element for balanced and responsive sizing
  videoStyle: {
    maxWidth: "600px", // Limit the width for a balanced size
    width: "100%",     // Responsive width
    height: "auto",
  },
};
