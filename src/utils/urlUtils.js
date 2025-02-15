// urlUtils.js

export const getUrlString = (key, operation, walletAddress) => {
    const ethplorerAPIKey = 'EK-nY7ou-saWnY7s-ooUEm';
    const urlMappings = {
        'Ethereum': 'https://api.ethplorer.io/',
        'BNB Smart Chain': 'https://api.binplorer.com/'
    };

    const baseUrl = urlMappings[key];
    return `${baseUrl}${operation}/${walletAddress}?apiKey=${ethplorerAPIKey}`;
};
