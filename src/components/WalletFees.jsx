import React, { useState, useEffect } from 'react';
import { WalletFeesStyle } from '../styles/WalletFeesStyle'; // Import the styles
import { fetchFees } from '../utils/feesUtils';
import { getETH, getBNB } from '../utils/coinGecko';

/**
 * WalletFees calculates and displays the total gas fees in USD for Ethereum and BNB transactions.
 * @param {Object} props - Component props.
 * @param {string} props.address - The wallet address to fetch fees for.
 * @returns {JSX.Element} The rendered WalletFees component.
 */
function WalletFees({ address }) {
    const [ethFees, setEthFees] = useState(0);
    const [bnbFees, setBnbFees] = useState(0);
    const [loading, setLoading] = useState(false); // Track loading state

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true); // Start loading
            try {
                const ethPrice = await getETH();
                const bnbPrice = await getBNB();
                const [ethFee, bnbFee] = await fetchFees(address);

                setEthFees(ethPrice * ethFee);
                setBnbFees(bnbPrice * bnbFee);
            } catch (error) {
                console.error('Error fetching fees:', error);
            } finally {
                setLoading(false); // End loading
            }
        };

        if (address) {
            fetchData();
        }
    }, [address]);

    return (
        <div className={`${WalletFeesStyle.wrapper} relative`}>
            {loading && (
                <div className="absolute inset-0 flex justify-center items-center bg-gray-100 dark:bg-gray-900 bg-opacity-50 z-10">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-700 dark:border-white"></div>
                </div>
            )}
            <div className={`${loading ? 'blur-md' : ''} transition duration-500`}>
                <div className={WalletFeesStyle.container}>
                    <div className={WalletFeesStyle.header}>Wallet Gas Fees</div>
                    <div className={WalletFeesStyle.totalFees}>
                        Total fees in USD: <span className={WalletFeesStyle.totalAmount}>${(ethFees + bnbFees).toFixed(2)}</span>
                    </div>
                </div>
                <div className={WalletFeesStyle.gridContainer}>
                    <div className={WalletFeesStyle.feeBox}>
                        <div className={WalletFeesStyle.feeLabel}>ETH fees:</div>
                        <div className={WalletFeesStyle.feeAmount}>${ethFees.toFixed(2)}</div>
                    </div>
                    <div className={WalletFeesStyle.feeBox}>
                        <div className={WalletFeesStyle.feeLabel}>BNB fees:</div>
                        <div className={WalletFeesStyle.feeAmount}>${bnbFees.toFixed(2)}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WalletFees;
