const ethApiKey = 'I3KJY4E13M9VBJWASHMS7FGGHREBR3D8VV';
const bnbApiKey = 'BWHFXFN4IDYTRDVW8W3AV9E3Y96JQSJIJ7';

/**
 * Fetches the total fees for Ethereum and BNB transactions for a given address.
 * @param {string} address - The wallet address to fetch fees for.
 * @returns {Promise<Array<number>>} A promise that resolves to an array with total ETH fees and BNB fees.
 */
export async function fetchFees(address) {
    const ethFees = await getTotalFees('eth', address, ethApiKey);
    const bnbFees = await getTotalFees('bnb', address, bnbApiKey);
    return [ethFees, bnbFees];
}

/**
 * Retrieves total fees for a specific blockchain network and address.
 * @param {string} network - The blockchain network (e.g., 'eth' or 'bnb').
 * @param {string} address - The wallet address to fetch fees for.
 * @param {string} apiKey - The API key for accessing the blockchain data.
 * @returns {Promise<number>} A promise that resolves to the total fees for the given network.
 */
async function getTotalFees(network, address, apiKey) {
    const url = network === 'eth' 
        ? `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=${apiKey}`
        : `https://api.bscscan.com/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const transactions = data.result;
        let totalFees = 0;
        transactions.forEach(tx => {
            const gasUsed = parseInt(tx.gasUsed);
            const gasPrice = parseInt(tx.gasPrice);
            const fee = gasUsed * gasPrice;
            totalFees += fee;
        });

        return totalFees / (10 ** 18); 
    } catch (error) {
        console.error(`Error fetching fees for ${network}:`, error);
        return 0;
    }
}

