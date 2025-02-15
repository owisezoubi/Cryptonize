/**
 * Fetches images for a list of tokens from the CoinGecko API.
 * 
 * @param {string[]} names - An array of token names to fetch images for.
 * @returns {Promise<Object>} An object mapping each token's `id` to its image URL.
 */
export async function getImages(names) {
  try {
    // Configure the request with demo API key and JSON acceptance
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': 'CG-mNCEY3t9ZsvHKtmrpN4hQoPb',
      },
    };

    // Convert each token name to lowercase and replace spaces with hyphens
    // Then combine them into a comma-separated string for the API query
    const formattedNames = names
      .map((name) => name.toLowerCase().replace(/\s+/g, '-'))
      .join(',');

    // Fetch token data from CoinGecko using the formatted list of IDs
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${formattedNames}`,
      options
    );

    const data = await response.json();

    // Build a map: { token.id -> token.image }
    const imagesMap = data.reduce((acc, token) => {
      acc[token.id] = token.image;
      return acc;
    }, {});

    return imagesMap;
  } catch (error) {
    // If any error occurs, log it and return an empty object
    console.error('Error fetching token images:', error);
    return {};
  }
}

/**
 * Fetches trending coins data from the CoinGecko API and updates component state.
 * 
 * @param {string} currency - The currency code (e.g., 'usd') for the price data.
 * @param {function} setTrending - A state setter function for storing the fetched data.
 * @returns {Promise<void>} A promise that resolves once the data is fetched and state is updated.
 */
export const fetchTrendingCoins = async (currency, setTrending) => {
  try {
    // Construct the query URL with user-specified currency
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=1h,24h,7d`
    );

    // Basic check to see if the response was successful
    if (!response.ok) {
      console.log(`Error HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Debugging: see the structure of the API data, ensuring it includes 1h stats
    console.log("API Data:", data);

    // Save the fetched data into component state
    setTrending(data);
  } catch (error) {
    // Log any error encountered while fetching trending coins
    console.error('Error fetching trending coins: ', error);
  }
};

/**
 * Retrieves the current price of Binance Coin (BNB) from CoinGecko.
 * 
 * @returns {Promise<number>} The current price of BNB in USD, or 0 if there's an error.
 */
export async function getBNB() {
  try {
    // Headers contain the demo API key and JSON acceptance
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': 'CG-mNCEY3t9ZsvHKtmrpN4hQoPb',
      },
    };

    // Query CoinGecko for BNB's market data in USD
    const response = await fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=binancecoin',
      options
    );

    const data = await response.json();

    // Extract current_price from the first (and only) result
    const currentPrice = data[0].current_price;

    return currentPrice;
  } catch (error) {
    // Return 0 on error, logging the issue
    console.error('Error fetching BNB data:', error);
    return 0;
  }
}

/**
 * Retrieves the current price of Ethereum (ETH) from CoinGecko.
 * 
 * @returns {Promise<number>} The current price of ETH in USD, or 0 if there's an error.
 */
export async function getETH() {
  try {
    // Headers contain the demo API key and JSON acceptance
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': 'CG-mNCEY3t9ZsvHKtmrpN4hQoPb',
      },
    };

    // Query CoinGecko for ETH's market data in USD
    const response = await fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum',
      options
    );

    const data = await response.json();

    // Extract current_price from the first (and only) result
    const currentPrice = data[0].current_price;

    return currentPrice;
  } catch (error) {
    // Return 0 on error, logging the issue
    console.error('Error fetching ETH data:', error);
    return 0;
  }
}
