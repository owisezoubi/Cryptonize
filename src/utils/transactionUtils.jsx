import { TransactionTableStyles } from '../styles/TransactionTableStyles';


/**
 * Formats a timestamp into a date and time JSX element.
 * @param {number} timestamp - Unix timestamp.
 * @returns {JSX.Element} Date and time representation.
 */
export const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp * 1000); // Convert timestamp to milliseconds and create Date object
    return (
      <div className="flex flex-col">
        <div>{date.toLocaleDateString()}</div>
        <div className="text-gray-500">{date.toLocaleTimeString()}</div>
      </div>
    );
  };
  
  /**
   * Generates a table row for a transaction item.
   * @param {Object} item - Transaction item.
   * @param {number} index - Row index.
   * @param {Function} formatTimestamp - Function to format timestamp.
   * @returns {JSX.Element} Table row for the transaction item.
   */
  export const generateTableRow = (item, index, formatTimestamp) => {
    const tokenDecimals = parseInt(item.tokenInfo.decimals, 10);
    const tokenValue = (item.value / Math.pow(10, tokenDecimals)).toFixed(2);
  
    return (
      <tr key={index} className={TransactionTableStyles.row}>
        <td className={TransactionTableStyles.cell}>
          <div>{formatTimestamp(item.timestamp)}</div>
        </td>
        <td className={TransactionTableStyles.cell}>
          <div className="text-lg" title={item.transactionHash}>
            {item.transactionHash ? `${item.transactionHash.substring(0, 5)}...` : 'N/A'}
          </div>
        </td>
        <td className={TransactionTableStyles.cell}>
          <div className="text-lg" title={item.from}>
            {item.from ? `${item.from.substring(0, 6)}...${item.from.slice(-4)}` : 'N/A'}
          </div>
        </td>
        <td className={TransactionTableStyles.cell}>
          <div className="text-lg" title={item.to}>
            {item.to ? `${item.to.substring(0, 6)}...${item.to.slice(-4)}` : 'N/A'}
          </div>
        </td>
        <td className={TransactionTableStyles.cell}>
          <div className="text-lg">{tokenValue}</div>
        </td>
        <td className={TransactionTableStyles.cell}>
          <div className="text-lg">{item.type}</div>
        </td>
        <td className={TransactionTableStyles.cell}>
          <div className="flex flex-col items-center justify-center">
            <div className="text-lg">{item.tokenInfo.name}</div>
            <div className='text-gray-500'>{item.tokenInfo.symbol}</div>
          </div>
        </td>
      </tr>
    );
  };
  
  /**
   * Handles page change for pagination.
   * @param {number} currentPage - Current page number.
   * @param {number} totalPages - Total number of pages.
   * @param {Function} setCurrentPage - Function to update current page state.
   * @param {string} direction - Direction of pagination ('next' or 'prev').
   */
  export const handlePageChange = (currentPage, totalPages, setCurrentPage, direction) => {
    if (direction === 'next' && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else if (direction === 'prev' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  