import React from 'react';
import { TokenRowStyle } from '../styles/TokenRowStyle';

/**
 * TokenRow component displays a row in a table for each token with its details.
 * @param {Object} props - Component props.
 * @param {string} props.symbol - The symbol of the token.
 * @param {Object} props.data - Data object containing token information.
 * @param {Object} props.iconsMap - Map of token names to their icon URLs.
 * @returns {JSX.Element} The rendered TokenRow component.
 */
const TokenRow = ({ symbol, data, iconsMap }) => {
  // Generate the icon URL by formatting the token name
  const iconUrl = iconsMap[data.name.toLowerCase().replace(/\s+/g, '-')];

  return (
    <tr className={TokenRowStyle.tableRow}>
      <td className={TokenRowStyle.tableCell}>
        <div className={TokenRowStyle.iconContainer}>
          {/* Icon container */}
          <div className={TokenRowStyle.flexShrink}>
            {iconUrl ? (
              <img src={iconUrl} alt={`${data.name} icon`} className={TokenRowStyle.imageStyle} />
            ) : (
              <div className={TokenRowStyle.imageStyle} />
            )}
          </div>
          {/* Token name and symbol */}
          <div className={TokenRowStyle.textContainer}>
            <div className={TokenRowStyle.tokenSymbolText}>{data.name}</div>
            <div className={TokenRowStyle.symbolText}>{symbol}</div>
          </div>
        </div>
      </td>
      <td className={TokenRowStyle.tableCell}>
        <div>{data.balance.toFixed(3)}</div>
      </td>
      <td className={TokenRowStyle.tableCell}>
        <div className={data.price.diff >= 0 ? TokenRowStyle.pricePositive : TokenRowStyle.priceNegative}>
          {data.price.diff}%
        </div>
      </td>
      <td className={TokenRowStyle.tableCell}>
        <div>{data.price.rate.toFixed(3)}$</div>
      </td>
      <td className={TokenRowStyle.tableCell}>
        <div>{data.balanceInUsd.toFixed(2)}$</div>
      </td>
    </tr>
  );
};

export default TokenRow;
