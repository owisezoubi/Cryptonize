import React, { useState, useEffect } from "react";
import AssetsTable from "./AssetsTable";
import TransactionTable from "./TransactionTable";
import BestPerformingTable from "./BestPerformingTable";
import MainData from "./MainData";
import LoadingSpinner from "./LoadingSpinner";
import { getUrlString } from "../utils/urlUtils";
import { processWalletData } from "../utils/walletUtils";

/**
 * WalletData fetches and displays wallet data including assets, transactions, and best-performing tokens.
 * @param {Object} props - Component props.
 * @param {Object} props.wallet - The wallet object containing network and address information.
 * @returns {JSX.Element} The rendered WalletData component.
 */
function WalletData({ wallet }) {
  const [tokens, setTokens] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const url = getUrlString(wallet.Network, "getAddressInfo", wallet.Address);
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch wallet data.");
        }

        const json = await response.json();
        const data = processWalletData(json);
        setTokens(data);
      } catch (error) {
        console.error("Error fetching wallet data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (wallet.Address) {
      fetchData();
    }
  }, [wallet.Address, wallet.Network]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <LoadingSpinner />
      </div>
    );
  }

  

  return (
    <div className="space-y-8">
      {/* Main Data Section */}
      <MainData address={wallet.Address} tokens={tokens} />

      {/* Assets Table */}
      <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Assets</h2>
        <AssetsTable tokens={tokens} />
      </div>

      {/* Transactions Table */}
      <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Transactions</h2>
        <TransactionTable wallet={wallet} />
      </div>

      {/* Best Performing Tokens Table */}
      <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Best Performing Tokens</h2>
        <BestPerformingTable tokens={tokens} />
      </div>
    </div>
  );
}

export default WalletData;
