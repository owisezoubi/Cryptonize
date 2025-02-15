// This file contains all design-related style definitions for the BestPerformingTable component.
export const BestPerformingTableStyle = {
  tableContainer: `
    w-full overflow-x-auto rounded-xl 
    p-2 
    text-black dark:text-white
  `,
  table: `
    min-w-full rounded-xl 
    border border-gray-300 dark:border-gray-600 
    bg-gray-200 dark:bg-gray-700 
    text-black dark:text-white text-sm
  `,
  thead: `
    bg-blue-100 dark:bg-blue-900 
    text-gray-900 dark:text-white 
    rounded-t-xl
  `,
  th: `
    px-4 py-2 text-center text-xs font-bold uppercase tracking-wider 
    text-gray-900 dark:text-white 
    border-b border-gray-300 dark:border-gray-600
  `,
  tbody: `
    bg-gray-200 dark:bg-gray-700 
    text-black dark:text-white 
    divide-y divide-gray-300 dark:divide-gray-600
  `,
  tableRow: `
    group
    border border-gray-300 dark:border-gray-600
    odd:bg-gray-50 even:bg-gray-100
    dark:odd:bg-gray-800 dark:even:bg-gray-700
    text-black dark:text-white
    hover:bg-gray-200 dark:hover:bg-gray-600
    transition-all duration-150
  `,
  tableCell: `
    px-4 py-2 text-center 
    text-gray-800 dark:text-gray-300 
    text-xs md:text-sm
    whitespace-nowrap
    group-hover:font-bold
  `,
  tokenSymbolText: `
    text-sm font-bold
    text-gray-900 dark:text-white
    group-hover:font-bold
  `,
  filterContainer: `
    flex flex-col items-center justify-center 
    p-4  
    dark:bg-gray-800 
    text-blue-900 dark:text-white 
    w-full sm:w-64 mx-auto
  `,
  selectClass: `
    mt-2 w-full sm:w-48 
    p-2 sm:px-3 sm:py-2 rounded-md 
    border border-gray-400 dark:border-gray-600 
    bg-gray-200 dark:bg-gray-700 
    text-gray-900 dark:text-white 
    focus:outline-none focus:ring-2 focus:ring-yellow-500 
    transition ease-in-out duration-200
  `,
  spinnerContainer: `
    flex justify-center items-center py-4
  `,
  spinner: `
    animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-700 dark:border-white
  `,
  noDataMessage: `
    text-center py-4 text-gray-500 dark:text-gray-400
  `,
  // Additional text styles
  textLg: 'text-lg',
  textLgCenter: 'text-lg text-center',
  textLeft: 'text-left',
  textNeutral: 'text-gray-500 dark:text-gray-400',
  textPositive: 'text-green-500 dark:text-green-400',
  textNegative: 'text-red-500 dark:text-red-400',
  flexItemsCenter: 'flex items-center',
  iconTextContainer: 'flex items-center space-x-3',
  iconContainer: 'flex-shrink-0 flex items-center justify-center',
  iconImage: 'w-8 h-8',
  emptyIcon: 'w-8 h-8',
  nameSymbolContainer: 'flex flex-col items-start',
};
