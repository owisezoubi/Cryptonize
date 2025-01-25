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
  `
};