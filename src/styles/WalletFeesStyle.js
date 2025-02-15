// This file contains all design-related style definitions for the WalletFees component.
export const WalletFeesStyle = {
  // Wrapper for the entire component
  wrapper: `
    relative w-full p-2
  `,
  // Main container style for fees information
  container: `
    flex flex-col items-center justify-center 
    h-32 p-2 
    bg-blue-100 hover:bg-blue-200 
    dark:bg-purple-800 dark:hover:bg-purple-900 
    rounded-xl 
    text-gray-900 dark:text-white 
    text-center 
    transition-all duration-300
    shadow-md
  `,
  header: "text-xl font-bold mb-2",
  totalFees: "text-lg font-medium",
  totalAmount: "font-semibold text-2xl text-green-600 dark:text-green-400",
  // Grid layout for individual fee boxes
  gridContainer: "grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4",
  feeBox: `
    flex flex-col items-center justify-center 
    h-24 
    bg-blue-100 hover:bg-blue-200 
    dark:bg-purple-800 dark:hover:bg-purple-900 
    rounded-xl 
    text-gray-900 dark:text-white 
    text-center 
    transition-all duration-300
    shadow-sm
  `,
  feeLabel: "text-md font-medium text-gray-700 dark:text-gray-300",
  feeAmount: "text-lg font-semibold text-gray-900 dark:text-white",
  // Loader overlay to cover content when loading
  loaderOverlay: `
    absolute inset-0 flex justify-center items-center 
    bg-gray-100 dark:bg-gray-900 bg-opacity-50 z-10
  `,
  // Spinner style for loading indicator
  spinner: `
    animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-700 dark:border-white
  `,
  // Transition effect for content changes
  transition: "transition duration-500",
  // Blur effect applied to content when loading
  blurEffect: "blur-md",
};
