// This file contains all design-related style definitions for the TokenRow component.
export const TokenRowStyle = {
  // Table row styling
  tableRow: `
    group
    border border-gray-300 dark:border-gray-600
    odd:bg-gray-50 even:bg-gray-100
    dark:odd:bg-gray-800 dark:even:bg-gray-700
    text-black dark:text-white
    hover:bg-gray-200 dark:hover:bg-gray-600
  `,
  // Table cell styling
  tableCell: `
    px-4 py-4 text-center text-gray-800 dark:text-gray-300 
    text-xs md:text-sm font-medium 
    border-t border-gray-300 dark:border-gray-600
    group-hover:font-bold
  `,
  // Token name styling
  tokenSymbolText: `
    text-xs md:text-sm text-gray-900 dark:text-white 
    font-semibold
    group-hover:font-bold
  `,
  // Container for icon and text with left padding and spacing
  iconContainer: "pl-[30%] flex items-center space-x-3",
  // Utility class for flex shrink on icon wrapper
  flexShrink: "flex-shrink-0",
  // Image style for token icon
  imageStyle: "w-8 h-8",
  // Container for token text elements (name and symbol)
  textContainer: "flex flex-col items-start",
  // Styling for token symbol text below the token name
  symbolText: "text-sm",
  // Style for positive price difference
  pricePositive: "text-green-500 dark:text-green-400",
  // Style for negative price difference
  priceNegative: "text-red-500 dark:text-red-400",
};
