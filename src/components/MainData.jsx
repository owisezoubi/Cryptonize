import React, { useState, useEffect } from "react";
import WalletFees from "./WalletFees";
import DistributionChart from "./DistributionChart";
import { calculateTotalAndTopBalances } from '../utils/mainDataUtils';
import { styles } from '../styles/MainDataStyles'; // Import styles

/**
 * MainData component displays the total balance, wallet fees, and a distribution chart.
 * @param {Object} props - Component props.
 * @param {string} props.address - Wallet address.
 * @param {Array} props.tokens - Array of token objects containing symbol and balance.
 * @returns {JSX.Element} The rendered MainData component.
 */
function MainData({ address, tokens }) {
  const [totalBalance, setTotalBalance] = useState(0);
  const [topBalances, setTopBalances] = useState([]);

  useEffect(() => {
    if (tokens) {
      const { total, top } = calculateTotalAndTopBalances(tokens);
      setTotalBalance(total);
      setTopBalances(top);
    }
  }, [tokens]);

  return (
    <div className={styles.container}>

      <div className={styles.container}>
        <div className={styles.totalBalanceCard}>
          <div className="text-center">
            <div className="font-semibold text-xl sm:text-2xl mb-2">
              Total Balance:
            </div>
            <div className="font-bold text-2xl sm:text-3xl">
              ${totalBalance.toFixed(2)}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.gridContainer}>
        <div className={styles.walletFeesCard}>
          <WalletFees address={address} />
        </div>
        <div className={styles.chartCard}>
          <DistributionChart tokens={topBalances} />
        </div>
      </div>
    </div>
  );
}

export default MainData;
