export const TokenRowStyle = {
  tableRow: `
    group
    border border-gray-300 dark:border-gray-600
    odd:bg-gray-50 even:bg-gray-100
    dark:odd:bg-gray-800 dark:even:bg-gray-700
    text-black dark:text-white
    hover:bg-gray-200 dark:hover:bg-gray-600
  `,
  tableCell: `
    px-4 py-4 text-center text-gray-800 dark:text-gray-300 
    text-xs md:text-sm font-medium 
    border-t border-gray-300 dark:border-gray-600
    group-hover:font-bold
  `,
  tokenSymbolText: `
    text-xs md:text-sm text-gray-900 dark:text-white 
    font-semibold
    group-hover:font-bold
  `,
};