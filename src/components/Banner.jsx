// src/components/Banner.js
import React from "react";
import CryptoTable from "./CryptoTable";
import { BannerStyle } from "../styles/BannerStyle";
import WalletConnectComponent from "./WalletConnectComponent";
import SearchUsingAddress from "./SearchUsingAddress";
import FeaturesSection from "./FeaturesSection";

function Banner({ handleConnect }) {
  return (
    <div className={BannerStyle.background}>
      <div className={BannerStyle.container}>
        {/* Header Text */}
        <h1 className={BannerStyle.gradientText}>
          Personal Crypto <span className={BannerStyle.textHighlight}>Portfolio Tracker</span>
        </h1>
        <p className={BannerStyle.description}>
          Connect to your portfolio and seamlessly monitor your cryptocurrency performance.
        </p>

        {/* WalletConnect, Search, and Features Section */}
        <div className={BannerStyle.featuresContainer}>
          <div className={BannerStyle.walletSearchContainer}>
            <WalletConnectComponent handleConnect={handleConnect} />
            <SearchUsingAddress handleConnect={handleConnect} />
          </div>
          <div className={BannerStyle.featuresSectionContainer}>
            <FeaturesSection />
          </div>
        </div>

        {/* Crypto Table */}
        <div className={BannerStyle.cryptoTableContainer}>
          <CryptoTable />
        </div>
      </div>
    </div>
  );
}

export default Banner;
