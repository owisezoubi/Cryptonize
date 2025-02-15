/**
 * This file contains all design-related style definitions for the TransactionTable component.
 */
export const TransactionTableStyles = {
  // Container for the entire table
  container: `
    w-full overflow-x-auto rounded-xl 
    p-2 dark:bg-gray-700 
    text-black dark:text-white
  `,
  // Table element styling
  table: `
    min-w-full rounded-xl 
    border border-gray-300 dark:border-gray-600 
    bg-gray-200 dark:bg-gray-700 
    text-black dark:text-white text-sm
  `,
  // Table header styling
  thead: `
    bg-blue-100 dark:bg-blue-900 
    text-gray-900 dark:text-white 
    rounded-t-xl
  `,
  // Table body styling with row divider
  tbody: `
    bg-gray-200 dark:bg-gray-700 
    text-black dark:text-white 
    divide-y divide-gray-300 dark:divide-gray-600
  `,
  // Styling for the no-data message container
  noDataContainer: `
    flex justify-center items-center 
    h-48 text-gray-500 dark:text-gray-400 
    text-lg font-semibold
  `,
  // Style for table rows
  row: `
    group
    border border-gray-300 dark:border-gray-600
    odd:bg-gray-50 even:bg-gray-100
    dark:odd:bg-gray-800 dark:even:bg-gray-700
    text-black dark:text-white
    hover:bg-gray-200 dark:hover:bg-gray-600
    transition-all duration-150
  `,
  // Style for table cells
  cell: `
    px-4 py-2 text-center 
    text-gray-800 dark:text-gray-300 
    text-xs md:text-sm
    whitespace-nowrap
    group-hover:font-bold
  `,
  // Table header cell styling
  th: `
    px-4 py-2 text-center text-xs font-bold uppercase tracking-wider 
    text-gray-900 dark:text-white 
    border-b border-gray-300 dark:border-gray-600
  `,
  // Loader overlay styling
  loaderOverlay: `
    absolute inset-0 flex justify-center items-center 
    bg-gray-100 dark:bg-gray-900 bg-opacity-50 z-10
  `,
  // Transition styling for content (e.g., when blurring while loading)
  contentTransition: `transition duration-300`,
  // Blur effect for content when loading
  blurEffect: `blur-sm`,
  // Pagination container styling
  pagination: `
    flex items-center justify-center space-x-4 p-4 
    dark:bg-gray-700 
    rounded-xl
  `,
  // Button base styling for pagination
  button: `
    px-4 py-2 font-semibold text-white rounded-xl 
    bg-blue-500 dark:bg-blue-700 
    focus:outline-none focus:ring-2 
    focus:ring-blue-500 dark:focus:ring-blue-700
  `,
  // Page info text styling
  pageInfo: `
    text-lg font-medium 
    text-gray-900 dark:text-gray-100
  `,
  // Enabled button state styling
  enabledButton: `
    bg-blue-500 hover:bg-blue-600 
    dark:bg-blue-700 dark:hover:bg-blue-800
  `,
  // Disabled button state styling
  disabledButton: `
    bg-gray-300 cursor-not-allowed 
    dark:bg-gray-600
  `,
  // Additional style for text inside cells (e.g., for transaction hash, from, to, etc.)
  hashText: "text-lg",
  // Additional style for cell values (e.g., token value and transaction type)
  valueText: "text-lg",
  // Container style for token info (name and symbol)
  tokenInfoContainer: "flex flex-col items-center justify-center",
  // Style for token name text
  tokenName: "text-lg",
  // Style for token symbol text
  tokenSymbol: "text-gray-500"
};
