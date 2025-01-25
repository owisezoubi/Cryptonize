export const BannerStyle = {
  background: "bg-cover bg-center bg-no-repeat py-14 transition-colors duration-300 bg-blue-50 dark:bg-gray-900 text-black dark:text-white",
  gradientText: "text-5xl md:text-6xl font-extrabold font-montserrat mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 overflow-visible",
  container: "container mx-auto px-8 flex flex-col items-center text-center space-y-8 mt-16", // Added `mt-16` for spacing below the NavBar
  textHighlight: "text-black dark:text-white",
  description: "text-xl md:text-4xl font-extrabold font-cursive text-blue-600 dark:text-blue-300 max-w-4xl leading-relaxed",

  // WalletConnect, Search, and Features Section
  featuresContainer: "flex flex-col md:flex-row gap-4 justify-center items-start w-full mt-8",
  walletSearchContainer: "flex flex-col gap-4 justify-center items-center md:w-1/3 w-full", // Center-align the wallet and search
  featuresSectionContainer: "flex justify-center md:w-1/3 w-full",

  // Crypto Table
  cryptoTableContainer: "w-full flex justify-center items-center mt-10",

  // Adjust Button/Component Containers
  buttonContainer: "flex flex-col gap-4 w-full max-w-xs md:max-w-sm justify-center items-center",
  button: "flex justify-center items-center bg-gray-200 dark:bg-gray-800 border border-gray-400 dark:border-gray-700 rounded-lg px-8 py-5 w-full max-w-xs hover:bg-gray-300 dark:hover:bg-gray-700 shadow-lg transition duration-300",
};
