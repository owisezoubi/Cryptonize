import React, { useState, useEffect } from "react";
import AssetsTable from "./AssetsTable";
import TransactionTable from "./TransactionTable";
import BestPerformingTable from "./BestPerformingTable";
import MainData from "./MainData";
import LoadingSpinner from "./LoadingSpinner";
import { getUrlString } from "../utils/urlUtils";
import { processWalletData } from "../utils/walletUtils";
import { walletDataStyles } from "../styles/WalletDataStyle"; // Import style definitions

/**
 * WalletData fetches and displays wallet data including assets, transactions,
 * and best-performing tokens.
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
      <div className={walletDataStyles.loadingContainer}>
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className={walletDataStyles.container}>
      {/* Main Data Section */}
      <MainData address={wallet.Address} tokens={tokens} />

      {/* Assets Table Section */}
      <div className={walletDataStyles.sectionContainer}>
        <h2 className={walletDataStyles.sectionTitle}>Assets</h2>
        <AssetsTable tokens={tokens} />
      </div>

      {/* Transactions Table Section */}
      <div className={walletDataStyles.sectionContainer}>
        <h2 className={walletDataStyles.sectionTitle}>Transactions</h2>
        <TransactionTable wallet={wallet} />
      </div>

      {/* Best Performing Tokens Section */}
      <div className={walletDataStyles.sectionContainer}>
        <h2 className={walletDataStyles.sectionTitle}>Best Performing Tokens</h2>
        <BestPerformingTable tokens={tokens} />
      </div>
    </div>
  );
}

export default WalletData;
