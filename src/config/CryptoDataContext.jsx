import React, { createContext, useState } from "react";

// Create the context
export const CryptoDataContext = createContext();

// Create a provider component
export const CryptoDataProvider = ({ children }) => {
  const [cryptoData, setCryptoData] = useState([]); // Global variable to store the data
  const [isDataFetched, setIsDataFetched] = useState(false); // To track the first successful fetch

  return (
    <CryptoDataContext.Provider value={{ cryptoData, setCryptoData, isDataFetched, setIsDataFetched }}>
      {children}
    </CryptoDataContext.Provider>
  );
};
