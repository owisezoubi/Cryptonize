import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { CryptoDataContext } from "../config/CryptoDataContext"; // Import the context
import { adjustTableStyles } from "../utils/CryptoTableUtils";
import { TableStyle } from "../styles/CryptoTableStyle";
import LoadingSpinner from "./LoadingSpinner";

/**
 * The CryptoTable component fetches and displays trending cryptocurrency data
 * in a responsive table. It updates every 10 seconds and adjusts its layout
 * based on the window width.
 */
const CryptoTable = () => {
  const { cryptoData, setCryptoData, isDataFetched, setIsDataFetched } = useContext(CryptoDataContext); // Use the global context
  const [loading, setLoading] = useState(!isDataFetched); // Show loader only if data is not fetched
  const [tableStyles, setTableStyles] = useState(adjustTableStyles(window.innerWidth));

  useEffect(() => {
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
        setCryptoData(response.data); // Update global state
        setIsDataFetched(true); // Mark the first fetch as successful
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false); // Stop loader
      }
    };

    if (!isDataFetched) {
      loadData(); // Fetch data on the first render
    }

    const refreshInterval = setInterval(() => {
      loadData(); // Fetch new data every 10 seconds
    }, 10000);

    const handleResize = () => {
      setTableStyles(adjustTableStyles(window.innerWidth));
    };
    window.addEventListener("resize", handleResize);

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
            {cryptoData.length === 0 && (
              <tr>
                <td colSpan="6">
                  <LoadingSpinner/>
                </td>
              </tr>
            )}
            {cryptoData.map((crypto, index) => {
              const isProfit1h = crypto?.price_change_percentage_1h_in_currency >= 0;
              const isProfit24h = crypto?.price_change_percentage_24h >= 0;
              const isProfit7d = crypto?.price_change_percentage_7d_in_currency >= 0;

              return (
                <tr key={crypto.id || index} className={TableStyle.tableRow}>
                  <td className={`${TableStyle.tableCell} ${tableStyles.cellPadding}`}>{index + 1}</td>
                  <td className={`${TableStyle.tableCell} ${tableStyles.cellPadding} ${TableStyle.nameColumn} flex items-center space-x-2`}>
                    {crypto.image && <img src={crypto.image} alt={crypto.name} className={TableStyle.coinImage} />}
                    <span>{crypto.name} ({crypto.symbol?.toUpperCase()})</span>
                  </td>
                  <td className={`${TableStyle.tableCell} ${tableStyles.cellPadding}`}>${crypto.current_price?.toFixed(2) || "N/A"}</td>
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
