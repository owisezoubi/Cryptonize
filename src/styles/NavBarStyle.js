export const navBarStyle = {
  navBarContainer: `
    shadow-xl p-4 flex justify-between items-center 
    bg-gray-100 dark:bg-gray-700 
    fixed top-0 left-0 w-full z-50
  `,
  logoContainer: `
    flex items-center space-x-2 md:space-x-4 flex-shrink-0
  `,
  logo: `
    w-8 h-auto sm:w-10 md:w-12
  `,
  titleText: `
    text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold
    text-white
    relative
    before:absolute before:content-['CRYPTONIZE'] before:text-purple-500 before:-z-10
    before:top-1 before:left-1
    drop-shadow-[4px_4px_6px_rgba(64,224,208,0.75)]
    dark:drop-shadow-[4px_4px_6px_rgba(173,216,230,0.9)] // Slightly stronger shadow in dark mode
    ml-2 sm:ml-4 // Adds spacing to prevent crowding
  `,
  themeToggleContainer: `
    flex-shrink-0 ml-auto
  `,
};
