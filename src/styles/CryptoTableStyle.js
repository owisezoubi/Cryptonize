export const TableStyle = {
  tableContainer: `
    container mx-auto px-4 overflow-x-auto flex justify-center
  `,
  table: `
    table-auto w-full max-w-6xl text-center dark:text-white border-collapse
    border border-gray-300 dark:border-gray-600
  `,
  tableHeader: `
    bg-gradient-to-r from-purple-300 via-blue-300 to-purple-300
    dark:from-blue-900 dark:via-purple-800 dark:to-blue-900
  `,
  headerCell: `
    px-4 py-4 text-gray-900 dark:text-white font-semibold
    text-lg
  `,
  tableCell: `
    px-4 py-4 text-gray-800 dark:text-gray-300
    hover:font-bold
  `,
  tableRow: `
    border border-gray-300 dark:border-gray-600
    odd:bg-gray-50 even:bg-gray-100
    dark:odd:bg-gray-800 dark:even:bg-gray-700
    hover:bg-gray-200 dark:hover:bg-gray-600
  `,
  coinImage: `
    h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 object-contain
  `,
  nameColumn: `
    w-56 text-gray-900 dark:text-white font-bold
  `,
  percentageColumn: `
    font-semibold
    hover:font-bold    
  `,
  loaderContainer: `
    flex justify-center items-center py-10
  `,
  loader: `
    animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-200 dark:border-gray-600
  `,
  loadingText: `
    ml-4 text-gray-500 dark:text-gray-300 text-lg font-medium
  `,
};
