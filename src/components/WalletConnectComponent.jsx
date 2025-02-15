import React, { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';
import { walletConnectStyles } from '../styles/WalletConnectStyle';

import {
  RainbowKitProvider,
  darkTheme,
  lightTheme,
  ConnectButton,
} from '@rainbow-me/rainbowkit';

/**
 * WalletConnectComponent displays a button for wallet connection
 * (using RainbowKit's ConnectButton) and manages the connection state via wagmi's useAccount.
 * It dynamically syncs the RainbowKit theme with the website theme.
 * 
 * @param {Object} props - Component props.
 * @param {Function} props.handleConnect - A callback that updates the parent component
 *   with the wallet address, chain name, and whether the user is connected.
 * @returns {JSX.Element} The rendered WalletConnectComponent.
 */
function WalletConnectComponent({ handleConnect }) {
  // Destructure wagmi's account data
  const { isConnected, address, chain } = useAccount();

  // State to manage the current theme
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  /**
   * Sync theme state with the website's existing theme toggle.
   */
  useEffect(() => {
    const updateTheme = (e) => {
      const newTheme = e?.detail?.theme || localStorage.getItem('theme') || 'light';
      setTheme(newTheme);
    };

    // Listen for the custom themeChange event
    window.addEventListener('themeChange', updateTheme);

    // Initial sync with localStorage
    updateTheme();

    return () => {
      window.removeEventListener('themeChange', updateTheme);
    };
  }, []);

  /**
   * On component mount/update, if the user is connected with a valid address
   * and chain, call handleConnect with that info. Otherwise, reset via handleConnect.
   */
  useEffect(() => {
    if (isConnected && address && chain) {
      handleConnect(address, chain.name, isConnected);
    } else if (!isConnected) {
      handleConnect("", "", false);
    }
  }, [isConnected, address, chain]);

  // Dynamically set RainbowKit theme
  const rainbowKitTheme =
    theme === 'dark'
      ? darkTheme({
          accentColor: '#7b3fe4',
          accentColorForeground: 'white',
          borderRadius: 'medium',
          overlayBlur: 'small',
        })
      : lightTheme({
          accentColor: '#7b3fe4',
          accentColorForeground: 'white',
          borderRadius: 'medium',
          overlayBlur: 'small',
        });

  return (
    <RainbowKitProvider theme={rainbowKitTheme}>
      <div className={walletConnectStyles.container}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            padding: 12,
          }}
        >
          <ConnectButton />
        </div>
      </div>
    </RainbowKitProvider>
  );
}

export default WalletConnectComponent;
