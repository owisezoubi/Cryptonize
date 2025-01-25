export const searchAddressStyle = {
    container: `
      flex flex-col items-center justify-center p-6 space-y-6 
      bg-white dark:bg-gray-700 rounded-xl shadow-lg 
      max-w-lg mx-auto w-full
    `,
 
    inputContainer: `
      flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 
      w-full
    `,
    input: `
      rounded-md border border-gray-300 dark:border-gray-600 
      bg-white dark:bg-gray-700 p-3 w-full 
      focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
      text-gray-900 dark:text-gray-100
    `,
    error: `
      text-sm text-red-500 dark:text-red-400 text-center
    `,
    button: `
      bg-[#7b3fe4] text-white font-bold py-2 px-6 
      rounded-xl hover:bg-[#572aa6] focus:outline-none 
      focus:ring-2 focus:ring-blue-500 
      dark:bg-[#7b3fe4] dark:hover:bg-[#572aa6] dark:focus:ring-blue-400
      transition-all duration-300
    `,
  };
  