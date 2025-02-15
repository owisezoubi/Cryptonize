import React, { useState, useEffect } from 'react';
import BuildTableRow from './BestPerformingRow';
import { BestPerformingTableStyle } from '../styles/BestPerformingTableStyle'; // Import styles from JS file
import { getImages } from '../utils/coinGecko';
import { sortTokensByPNL } from '../utils/bestperformingTableUtils';

/**
 * BestPerformingTable component displays the best performing tokens in a table.
 */
const BestPerformingTable = ({ tokens }) => {
  // State for the selected filter criteria (default is 24h PNL)
  const [selectedFilter, setSelectedFilter] = useState('PNL_24h');
  // State to hold mapping of token icons
  const [iconsMap, setIconsMap] = useState({});
  // Loading state for asynchronous data fetching
  const [loading, setLoading] = useState(true);

  // Fetch token icons whenever tokens prop changes
  useEffect(() => {
    const fetchIcons = async () => {
      try {
        if (!tokens || tokens.length === 0) {
          setLoading(false);
          return;
        }

        // Extract token names from tokens array and filter out undefined values
        const tokenNames = tokens.map(([_, data]) => data?.name).filter(Boolean);
        if (tokenNames.length === 0) {
          setLoading(false);
          return;
        }

        // Fetch images for tokens
        const images = await getImages(tokenNames);
        setIconsMap(images);
      } catch (error) {
        console.error('Error fetching token icons:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchIcons();
  }, [tokens]);

  // Handler for filter changes triggered by the select dropdown
  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  // Sort tokens based on selected filter criteria (24h, 7d, 30d PNL)
  const sortedData =
    tokens && tokens.length > 0 ? sortTokensByPNL(tokens, selectedFilter) : [];
  // Limit to top 10 tokens after sorting
  const topData = sortedData.slice(0, 10);

  return (
    <>
      {/* Filter selection container */}
      <div className={BestPerformingTableStyle.filterContainer}>
        <div className={BestPerformingTableStyle.textLgCenter}>Choose Criteria</div>
        <select
          value={selectedFilter}
          onChange={handleFilterChange}
          className={BestPerformingTableStyle.selectClass}
        >
          <option value="PNL_24h">24h PNL</option>
          <option value="PNL_week">7d PNL</option>
          <option value="PNL_month">30d PNL</option>
        </select>
      </div>

      {/* Table container */}
      <div className={BestPerformingTableStyle.tableContainer}>
        <table className={BestPerformingTableStyle.table}>
          <thead className={BestPerformingTableStyle.thead}>
            <tr>
              <th className={BestPerformingTableStyle.th}>Rank</th>
              <th className={BestPerformingTableStyle.th}>Token Name</th>
              <th className={BestPerformingTableStyle.th}>Price (USD)</th>
              <th className={BestPerformingTableStyle.th}>PNL</th>
              <th className={BestPerformingTableStyle.th}>Balance</th>
              <th className={BestPerformingTableStyle.th}>Balance (USD)</th>
            </tr>
          </thead>
          <tbody className={BestPerformingTableStyle.tbody}>
            {/* Loading spinner */}
            {loading && (
              <tr>
                <td colSpan="6">
                  <div className={BestPerformingTableStyle.spinnerContainer}>
                    <div className={BestPerformingTableStyle.spinner}></div>
                  </div>
                </td>
              </tr>
            )}
            {/* No data message */}
            {!loading && topData.length === 0 && (
              <tr>
                <td colSpan="6">
                  <div className={BestPerformingTableStyle.noDataMessage}>
                    No Data Available.
                  </div>
                </td>
              </tr>
            )}
            {/* Render a row for each token */}
            {!loading &&
              topData.map(([symbol, data], index) => (
                <BuildTableRow
                  key={symbol}
                  symbol={symbol}
                  data={data}
                  index={index + 1}
                  styles={BestPerformingTableStyle}
                  selectedFilter={selectedFilter}
                  iconsMap={iconsMap}
                />
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BestPerformingTable;
