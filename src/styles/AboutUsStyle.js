export const AboutUsStyles = {
  container: `
    flex flex-col items-center justify-center p-8 
    pt-24
  `,
  title: `
    text-5xl font-extrabold text-center mb-6 
    bg-clip-text text-transparent bg-gradient-to-r 
    from-blue-400 via-purple-500 to-indigo-600
  `,
  description: 'text-lg text-center mb-8',
  cardContainer: 'flex flex-wrap justify-center gap-6 mb-12',
  card: `
    flex flex-col items-center p-4 border rounded-lg shadow-lg w-60 
    bg-gradient-to-r from-purple-300 via-blue-300 to-purple-300 
    dark:from-blue-900 dark:via-purple-800 dark:to-blue-900
  `,
  cardImage: 'w-24 h-24 rounded-full mb-4 object-cover',
  cardName: 'text-lg font-bold mb-2',
  cardRole: 'text-sm text-gray-600 dark:text-gray-300 text-center',
  backButton: `
    bg-[#7b3fe4] text-white font-bold py-2 px-6 rounded-lg 
    hover:bg-[#572aa6] focus:outline-none focus:ring-2 focus:ring-blue-500 
    dark:bg-[#7b3fe4] dark:hover:bg-[#572aa6] dark:focus:ring-blue-400
  `,
};
