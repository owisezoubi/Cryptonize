// utils.js

// Utility function to get the PNL value based on the selected filter
export const getValue = (item, filter) => {
    switch (filter) {
      case 'PNL_24h':
        return item.price.diff || 0;
      case 'PNL_week':
        return item.price.diff7d || 0;
      case 'PNL_month':
        return item.price.diff30d || 0;
      default:
        return 0;
    }
  };
  
  // Utility function to sort tokens by the selected PNL filter
  export const sortTokensByPNL = (tokens, selectedFilter) => {
    return [...tokens].sort((a, b) => {
      const aValue = getValue(a[1], selectedFilter);
      const bValue = getValue(b[1], selectedFilter);
      return bValue - aValue; // Sort in descending order
    });
  };
  
  // Utility function to format price
  export const formatPrice = (rate) => {
    if (rate >= 1) {
      // For rates >= 1, limit to 2 decimal places
      return rate.toFixed(2);
    } else {
      // For rates < 1, find the first non-zero digit after the decimal point
      const rateStr = rate.toString();
      let nonZeroIndex = rateStr.indexOf('.') + 1; // Start after the decimal point
      
      while (nonZeroIndex < rateStr.length && rateStr[nonZeroIndex] === '0') {
        nonZeroIndex++;
      }
  
      // Keep the first two non-zero digits
      const precision = nonZeroIndex - rateStr.indexOf('.') + 1;
      return rate.toFixed(precision);
    }
  };
  