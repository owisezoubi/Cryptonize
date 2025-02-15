import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { CryptoDataContext } from "../config/CryptoDataContext"; // Import global context for crypto data
import { adjustTableStyles } from "../utils/CryptoTableUtils";
import { TableStyle } from "../styles/CryptoTableStyle"; // Import styles from separate design file
import LoadingSpinner from "./LoadingSpinner";

/**
 * CryptoTable component fetches and displays trending cryptocurrency data
 * in a responsive table. It refreshes data every 10 seconds and adjusts its layout
 * based on the window width.
 */
const CryptoTable = () => {
  // Access global crypto data and update functions from context
  const { cryptoData, setCryptoData, isDataFetched, setIsDataFetched } = useContext(CryptoDataContext);
  // Loading state is true until data is fetched
  const [loading, setLoading] = useState(!isDataFetched);
  // State to adjust table styles based on current window width
  const [tableStyles, setTableStyles] = useState(adjustTableStyles(window.innerWidth));

  useEffect(() => {
    // Function to fetch data from the API
    const loadData = async () => {
      try {
        const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets", {
          params: {
            vs_currency: "USD",
            order: "gecko_desc",
            per_page: 10,
            page: 1,
            sparkline: false,
            price_change_percentage: "1h,24h,7d",
          },
        });
        // Update global state with the fetched data
        setCryptoData(response.data);
        setIsDataFetched(true); // Mark that data has been successfully fetched
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        // Hide loader regardless of the fetch result
        setLoading(false);
      }
    };

    // If data hasn't been fetched yet, load data on first render
    if (!isDataFetched) {
      loadData();
    }

    // Set up an interval to refresh data every 10 seconds
    const refreshInterval = setInterval(() => {
      loadData();
    }, 10000);

    // Adjust table styles when the window is resized
    const handleResize = () => {
      setTableStyles(adjustTableStyles(window.innerWidth));
    };
    window.addEventListener("resize", handleResize);

    // Cleanup interval and event listener on unmount
    return () => {
      clearInterval(refreshInterval);
      window.removeEventListener("resize", handleResize);
    };
  }, [isDataFetched, setCryptoData, setIsDataFetched]);

  return (
    <div className={TableStyle.tableContainer}>
      <div className="overflow-x-auto">
        <table className={`${TableStyle.table} ${tableStyles.fontSize}`}>
          <thead className={TableStyle.tableHeader}>
            <tr>
              <th className={`${TableStyle.tableCell} ${tableStyles.cellPadding}`}>#</th>
              <th className={`${TableStyle.tableCell} ${tableStyles.cellPadding} ${TableStyle.nameColumn}`}>Name</th>
              <th className={`${TableStyle.tableCell} ${tableStyles.cellPadding}`}>Price</th>
              <th className={`${TableStyle.tableCell} ${tableStyles.cellPadding}`}>1h</th>
              <th className={`${TableStyle.tableCell} ${tableStyles.cellPadding}`}>24h</th>
              <th className={`${TableStyle.tableCell} ${tableStyles.cellPadding}`}>7d</th>
            </tr>
          </thead>
          <tbody>
            {/* Show loading spinner if there is no data */}
            {cryptoData.length === 0 && (
              <tr>
                <td colSpan="6">
                  <LoadingSpinner />
                </td>
              </tr>
            )}
            {/* Map through crypto data to create table rows */}
            {cryptoData.map((crypto, index) => {
              // Determine if the percentage changes indicate profit (green) or loss (red)
              const isProfit1h = crypto?.price_change_percentage_1h_in_currency >= 0;
              const isProfit24h = crypto?.price_change_percentage_24h >= 0;
              const isProfit7d = crypto?.price_change_percentage_7d_in_currency >= 0;

              return (
                <tr key={crypto.id || index} className={TableStyle.tableRow}>
                  <td className={`${TableStyle.tableCell} ${tableStyles.cellPadding}`}>{index + 1}</td>
                  <td className={`${TableStyle.tableCell} ${tableStyles.cellPadding} ${TableStyle.nameColumn} flex items-center space-x-2`}>
                    {crypto.image && (
                      <img src={crypto.image} alt={crypto.name} className={TableStyle.coinImage} />
                    )}
                    <span>
                      {crypto.name} ({crypto.symbol?.toUpperCase()})
                    </span>
                  </td>
                  <td className={`${TableStyle.tableCell} ${tableStyles.cellPadding}`}>
                    ${crypto.current_price?.toFixed(2) || "N/A"}
                  </td>
                  <td className={`${TableStyle.percentageColumn} ${tableStyles.cellPadding} ${isProfit1h ? "text-green-500" : "text-red-500"}`}>
                    {isProfit1h ? "▲" : "▼"} {isProfit1h && "+"}{crypto.price_change_percentage_1h_in_currency?.toFixed(2) || "N/A"}%
                  </td>
                  <td className={`${TableStyle.percentageColumn} ${tableStyles.cellPadding} ${isProfit24h ? "text-green-500" : "text-red-500"}`}>
                    {isProfit24h ? "▲" : "▼"} {isProfit24h && "+"}{crypto.price_change_percentage_24h?.toFixed(2) || "N/A"}%
                  </td>
                  <td className={`${TableStyle.percentageColumn} ${tableStyles.cellPadding} ${isProfit7d ? "text-green-500" : "text-red-500"}`}>
                    {isProfit7d ? "▲" : "▼"} {isProfit7d && "+"}{crypto.price_change_percentage_7d_in_currency?.toFixed(2) || "N/A"}%
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CryptoTable;
