import React from 'react';
import { getValue, formatPrice } from '../utils/bestperformingTableUtils';
import { BestPerformingTableStyle } from '../styles/BestPerformingTableStyle';

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
    <tr key={symbol} className={BestPerformingTableStyle.tableRow}>
      <td className={BestPerformingTableStyle.tableCell}>
        <div className={BestPerformingTableStyle.textLg}>{index}</div>
      </td>
      <td className={`${BestPerformingTableStyle.tableCell} ${BestPerformingTableStyle.flexItemsCenter}`}>
        <div className={BestPerformingTableStyle.iconTextContainer}>
          <div className={BestPerformingTableStyle.iconContainer}>
            {iconUrl ? (
              <img src={iconUrl} alt={`${data.name} icon`} className={BestPerformingTableStyle.iconImage} />
            ) : (
              <div className={BestPerformingTableStyle.emptyIcon} />
            )}
          </div>
          <div className={BestPerformingTableStyle.nameSymbolContainer}>
            <div className={BestPerformingTableStyle.tokenSymbolText}>{data.name}</div>
            <div className={BestPerformingTableStyle.textLeft}>{symbol}</div>
          </div>
        </div>
      </td>
      <td className={BestPerformingTableStyle.tableCell}>
        <div className={BestPerformingTableStyle.textLgCenter}>{formatPrice(data.price.rate)}</div>
      </td>
      <td className={BestPerformingTableStyle.tableCell}>
        <div className={`${BestPerformingTableStyle.textLgCenter} ${
            pnl === 0
                ? BestPerformingTableStyle.textNeutral
                : pnl > 0
                    ? BestPerformingTableStyle.textPositive
                    : BestPerformingTableStyle.textNegative
        }`}>
          {pnl.toFixed(1)}%
        </div>
      </td>
      <td className={BestPerformingTableStyle.tableCell}>
        <div className={BestPerformingTableStyle.textLgCenter}>
          {data.balance.toFixed(2)}
        </div>
      </td>
      <td className={BestPerformingTableStyle.tableCell}>
        <div className={BestPerformingTableStyle.textLgCenter}>
          {data.balanceInUsd.toFixed(2)}       
        </div>
      </td>
    </tr>
  );
};

export default BuildTableRow;
