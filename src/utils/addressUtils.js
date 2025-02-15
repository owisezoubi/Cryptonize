import Web3 from 'web3';

/**
 * Creates a Web3 instance.
 * @returns {Web3} A Web3 instance.
 */
export function createWeb3() {
    return new Web3(); // Create a new Web3 instance
}

/**
 * Validates if the provided address is a valid Ethereum or BNB address.
 * @param {string} address - Wallet address to be validated.
 * @returns {boolean} True if the address is valid, otherwise false.
 */
export function validateAddress(address) {
    const web3 = createWeb3();
    return web3.utils.isAddress(address); // Check if the address is valid
}

/**
 * Handles the address search and connection.
 * @param {string} address - Wallet address to be validated.
 * @param {Function} handleConnect - Function to handle the address connection.
 * @returns {Object} Result object containing validity status and an error message if validation fails.
 */
export function handleAddressSearch(address, handleConnect) {
    try {
        if (validateAddress(address)) {
            handleConnect(address, "Ethereum", true); // Assuming Ethereum chain for simplicity
            return { isValid: true, errorMsg: '' }; // Clear error message if address is valid
        } else {
            return { isValid: false, errorMsg: 'Invalid address. Please enter a valid Ethereum or BNB address.' };
        }
    } catch (err) {
        console.error('Validation error:', err); // Log error for debugging
        return { isValid: false, errorMsg: 'An error occurred. Please try again.' };
    }
}
