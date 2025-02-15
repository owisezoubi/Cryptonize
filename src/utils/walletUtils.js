/**
 * Processes wallet data to extract and format token information.
 * @param {Object} data - The raw wallet data from the API.
 * @returns {Array} An array of token entries, each containing token details.
 */
export function processWalletData(data) {
    const result = {};

    // Add Ethereum (ETH) to the dictionary
    if (data.ETH && data.ETH.price) {
        const ethBalanceInUsd = data.ETH.balance * data.ETH.price.rate;
        result['ETH'] = {
            name: 'Ethereum',
            decimals: 18, 
            price: data.ETH.price,
            balance: data.ETH.balance,
            balanceInUsd: ethBalanceInUsd
        };
    }

    // Iterate over all tokens and add them if they have a price
    data.tokens.forEach((token) => {
        const { tokenInfo, balance } = token;
        const { price, symbol, decimals, name } = tokenInfo;

        // Check if the token has a valid price
        if (price && price.rate) {
            const balanceInUsd = (balance / Math.pow(10, decimals)) * price.rate;

            // Add the token to the result dictionary
            result[symbol] = {
                name: name,
                decimals: parseInt(decimals, 10),
                price: price,
                balance: balance / Math.pow(10, decimals), // Convert balance to human-readable format
                balanceInUsd: balanceInUsd
            };
        }
    });

    return Object.entries(result);
}
