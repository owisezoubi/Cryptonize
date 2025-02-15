import React, { useState, useEffect } from "react";
import WalletFees from "./WalletFees";
import DistributionChart from "./DistributionChart";
import { calculateTotalAndTopBalances } from "../utils/mainDataUtils";
// Import styles from the separate design file
import { styles } from "../styles/MainDataStyles";

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
          <div className={styles.textCenter}>
            <div className={styles.totalBalanceTitle}>Total Balance:</div>
            <div className={styles.totalBalanceAmount}>
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
