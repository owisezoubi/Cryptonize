// BestPerformingRow.jsx
import React from 'react';
import { getValue, formatPrice } from '../utils/bestperformingTableUtils';


const BuildTableRow = ({ symbol, data, index, styles, selectedFilter, iconsMap }) => {
    /**
     * BuildTableRow component displays a single row in the BestPerformingTable.
     * @param {string} symbol - The token symbol.
     * @param {Object} data - The data for the token, including name, price, balance, and balanceInUsd.
     * @param {number} index - The rank of the token in the list.
     * @param {Object} styles - The styling classes for the table.
     * @param {string} selectedFilter - The currently selected filter criteria for PNL.
     * @param {Object} iconsMap - A mapping of token names to their icon URLs.
     * @returns {JSX.Element} The rendered table row for a token.
     */
  const pnl = getValue(data, selectedFilter);
  const iconUrl = iconsMap[data.name.toLowerCase().replace(/\s+/g, '-')];

  return (
    <tr key={symbol} className={styles.tableRow}>
      <td className={styles.tableCell}>
        <div className="text-lg">{index}</div>
      </td>
      <td className={`${styles.tableCell} flex items-center`}>
        {/* Icon and text container */}
        <div className="flex items-center space-x-3">
          {/* Icon */}
          <div className="flex-shrink-0 flex items-center justify-center">
            {iconUrl ? (
              <img src={iconUrl} alt={`${data.name} icon`} className="w-8 h-8" />
            ) : (
              <div className="w-8 h-8" />
            )}
          </div>
          {/* Name and symbol */}
          <div className="flex flex-col items-start">
            <div className={`${styles.tokenSymbolText}`}>{data.name}</div>
            <div className="text-left">{symbol}</div>
          </div>
        </div>
      </td>
      <td className={styles.tableCell}>
        <div className="text-lg text-center">
          {formatPrice(data.price.rate)}
        </div>
      </td>
      <td className={styles.tableCell}>
        <div className={`text-lg text-center ${
            pnl === 0
                ? "text-gray-500 dark:text-gray-400"
                : pnl > 0
                    ? "text-green-500 dark:text-green-400"
                    : "text-red-500 dark:text-red-400"
            }`}>
          {pnl.toFixed(1)}%
        </div>
      </td>
      <td className={styles.tableCell}>
        <div className="text-lg text-center">
          {data.balance.toFixed(2)}
        </div>
      </td>
      <td className={styles.tableCell}>
        <div className="text-lg text-center">
          {data.balanceInUsd.toFixed(2)}       
        </div>
      </td>
    </tr>
  );
};

export default BuildTableRow;
