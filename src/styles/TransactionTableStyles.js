export const TransactionTableStyles = {
  container: `
    w-full overflow-x-auto rounded-xl 
    p-2 dark:bg-gray-700 
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
  tbody: `
    bg-gray-200 dark:bg-gray-700 
    text-black dark:text-white 
    divide-y divide-gray-300 dark:divide-gray-600
  `,
  noDataContainer: `
    flex justify-center items-center 
    h-48 text-gray-500 dark:text-gray-400 
    text-lg font-semibold
  `,
  row: `
    group
    border border-gray-300 dark:border-gray-600
    odd:bg-gray-50 even:bg-gray-100
    dark:odd:bg-gray-800 dark:even:bg-gray-700
    text-black dark:text-white
    hover:bg-gray-200 dark:hover:bg-gray-600
    transition-all duration-150
  `,
  cell: `
    px-4 py-2 text-center 
    text-gray-800 dark:text-gray-300 
    text-xs md:text-sm
    whitespace-nowrap
    group-hover:font-bold
  `,
  th: `
    px-4 py-2 text-center text-xs font-bold uppercase tracking-wider 
    text-gray-900 dark:text-white 
    border-b border-gray-300 dark:border-gray-600
  `,
  pagination: `
    flex items-center justify-center space-x-4 p-4 
    dark:bg-gray-700 
    rounded-xl 
  `,
  button: `
    px-4 py-2 font-semibold text-white rounded-xl 
    bg-blue-500 dark:bg-blue-700 
    focus:outline-none focus:ring-2 
    focus:ring-blue-500 dark:focus:ring-blue-700
  `,
  pageInfo: `
    text-lg font-medium 
    text-gray-900 dark:text-gray-100
  `,
  enabledButton: `
    bg-blue-500 hover:bg-blue-600 
    dark:bg-blue-700 dark:hover:bg-blue-800
  `,
  disabledButton: `
    bg-gray-300 cursor-not-allowed 
    dark:bg-gray-600
  `
};
