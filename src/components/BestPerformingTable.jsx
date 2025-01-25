import React, { useState, useEffect } from 'react';
import BuildTableRow from './BestPerformingRow';
import { BestPerformingTableStyle } from '../styles/BestPerformingTableStyle';
import { getImages } from '../utils/coinGecko';
import { sortTokensByPNL } from '../utils/bestperformingTableUtils';

const BestPerformingTable = ({ tokens }) => {
  const [selectedFilter, setSelectedFilter] = useState('PNL_24h');
  const [iconsMap, setIconsMap] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIcons = async () => {
      try {
        if (!tokens || tokens.length === 0) {
          setLoading(false); // Stop loader if no tokens
          return;
        }

        const tokenNames = tokens.map(([_, data]) => data?.name).filter(Boolean);
        if (tokenNames.length === 0) {
          setLoading(false); // Stop loader if no token names
          return;
        }

        const images = await getImages(tokenNames);
        setIconsMap(images);
      } catch (error) {
        console.error('Error fetching token icons:', error);
      } finally {
        setLoading(false); // Stop loader
      }
    };

    fetchIcons();
  }, [tokens]);

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  const sortedData = tokens && tokens.length > 0 
    ? sortTokensByPNL(tokens, selectedFilter) 
    : [];
  const topData = sortedData.slice(0, 10);

  return (
    <>
      <div className={BestPerformingTableStyle.filterContainer}>
        <div className="text-lg font-semibold">Choose Criteria</div>
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
            {loading && (
              <tr>
                <td colSpan="6">
                  <div className="flex justify-center items-center py-4">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-700 dark:border-white"></div>
                  </div>
                </td>
              </tr>
            )}
            {!loading && topData.length === 0 && (
              <tr>
                <td colSpan="6">
                  <div className="text-center py-4 text-gray-500 dark:text-gray-400">
                    No Data Available.
                  </div>
                </td>
              </tr>
            )}
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
