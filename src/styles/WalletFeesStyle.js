export const WalletFeesStyle = {
  wrapper: `
    relative w-full p-2
  `,
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
};
