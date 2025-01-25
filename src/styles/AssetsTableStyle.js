export const AssestsTableStyle = {
  th: `
    px-4 py-2 text-center text-xs font-bold uppercase tracking-wider 
    text-gray-900 dark:text-white 
    bg-blue-100 dark:bg-blue-900 
    border-b border-gray-300 dark:border-gray-600
  `,
  tableContainer: `
    w-full overflow-x-auto rounded-xl  
    p-2 dark:bg-gray-700 
    text-black dark:text-white 
    max-h-[calc(50vh)] overflow-y-auto
  `,
  table: `
    min-w-full rounded-xl border border-gray-300 dark:border-gray-600 
    bg-gray-200 dark:bg-gray-700 
    text-black dark:text-white
  `,
  tbody: `
    bg-gray-200 dark:bg-gray-700 
    text-black dark:text-white 
    divide-y divide-gray-300 dark:divide-gray-600
  `,
  tableRow: `
    group
    hover:bg-gray-100 dark:hover:bg-gray-800 
    transition duration-150 ease-in-out
  `,
  tableCell: `
    px-4 py-2 text-center 
    text-gray-800 dark:text-gray-300
    group-hover:font-bold
  `,
  spinnerContainer: `
    flex justify-center items-center py-4
  `,
  spinner: `
    animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-700 dark:border-white
  `,
  noDataContainer: `
    text-center py-4 text-gray-500 dark:text-gray-400
  `,
};
