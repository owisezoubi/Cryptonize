"use client";

import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultConfig,
  RainbowKitProvider,
  darkTheme,
  lightTheme,
} from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, base } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import WalletData from "./components/WalletData";
import WalletAddress from "./components/WalletAddress";
import ChooseNetwork from "./components/ChooseNetwork";
import DisconnectBtn from "./components/DisconnectBtn";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import { containerStyles, contentStyles } from "./styles/AppStyles";

import { CryptoDataProvider } from "./config/CryptoDataContext";


const config = getDefaultConfig({
  appName: "My RainbowKit App",
  projectId: "a35f81e6c5e2d6540f219f55b6ef0c81",
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: false,
});

const queryClient = new QueryClient();

// Wrapper Component to handle location
const AppContent = () => {
  const [wallet, setWallet] = useState({ Address: "", Network: "", isConnected: false });
  const [themeMode, setThemeMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  useEffect(() => {
    function handleStorage(e) {
      if (e.key === "theme" && e.newValue) {
        setThemeMode(e.newValue);
      }
    }
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const handleStatus = (address, network, isConnected) => {
    setWallet({ Address: address, Network: network, isConnected });
  };

  const handleChangeNetwork = (network) => {
    setWallet((prev) => ({ ...prev, Network: network }));
  };

  const isDark = themeMode === "dark";
  const rainbowKitTheme = isDark
    ? darkTheme({
        accentColor: "#7b3fe4",
        accentColorForeground: "white",
        borderRadius: "medium",
        overlayBlur: "small",
        fontStack: "system",
      })
    : lightTheme({
        accentColor: "#7b3fe4",
        accentColorForeground: "white",
        borderRadius: "medium",
        overlayBlur: "small",
        fontStack: "system",
      });

  const location = useLocation();

  return (
    <CryptoDataProvider>
    <RainbowKitProvider theme={rainbowKitTheme}>
      <div className={containerStyles}>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              wallet.isConnected ? (
                <div>
                  <div className={contentStyles}>
                    <DisconnectBtn handleDisconnect={handleStatus} />
                    <WalletAddress address={wallet.Address} handleDisconnect={handleStatus} />
                    <ChooseNetwork handleChangeNetwork={handleChangeNetwork} />
                  </div>
                  <WalletData wallet={wallet} />
                </div>
              ) : (
                <Banner handleConnect={handleStatus} />
              )
            }
          />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
        {location.pathname !== "/about-us" && <Footer />}
      </div>
    </RainbowKitProvider>
    </CryptoDataProvider>
  );
};

const App = () => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <AppContent />
        </Router>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default App;
