/**
 * Calculates the total balance and top 3 balances from the tokens array.
 * @param {Array} tokens - Array of token objects containing symbol and balance.
 * @returns {Object} An object containing total balance and top balances.
 */
export function calculateTotalAndTopBalances(tokens) {
    const dataArray = tokens.map(([symbol, crypto]) => ({
      symbol,
      balanceInUsd: crypto.balanceInUsd,
    }));
  
    const total = dataArray.reduce((sum, crypto) => sum + crypto.balanceInUsd, 0);
    const sortedData = dataArray.sort((a, b) => b.balanceInUsd - a.balanceInUsd);
  
    const top3 = sortedData.slice(0, 3);
  
    const otherTokens = sortedData.slice(3);
    const otherBalanceInUsd = otherTokens.reduce((sum, crypto) => sum + crypto.balanceInUsd, 0);
  
    if (otherTokens.length > 0 && otherBalanceInUsd > 0) {
      top3.push({ symbol: 'Other', balanceInUsd: otherBalanceInUsd });
    }
  
    return { total, top: top3 };
  }
  