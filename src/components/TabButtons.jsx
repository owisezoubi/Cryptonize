import React, { useState, useContext } from 'react';
import { TabButtonsStyle } from '../styles/TabButtonsStyle'; // Import unified theme classes

const TabButtons = ({ setActiveTab }) => {
    /**
   * TabButtons component displays a set of tab buttons that allow users to switch between different views.
   * @param {Object} props - Component props.
   * @param {Function} props.setActiveTab - Function to set the currently active tab.
   * @returns {JSX.Element} The rendered TabButtons component.
   */
  const [activeButton, setActiveButton] = useState('');
  const [tabOpen, setTabOpen] = useState({
    assets: false,
    transactions: false,
    BestPerforming: false,
  });

  const handleClick = (tab) => {
    const allTabsClosed = {
      assets: false,
      transactions: false,
      BestPerforming: false,
    };

    if (tabOpen[tab]) {
      setActiveTab(''); 
      setActiveButton(''); 
      setTabOpen(allTabsClosed); 
    } else {
      setActiveTab(tab); 
      setActiveButton(tab); 
      setTabOpen({
        ...allTabsClosed,
        [tab]: true, 
      });
    }
  };

  return (
    <div className={TabButtonsStyle.tabContainer}>
      {['assets', 'transactions', 'BestPerforming'].map(tab => (
        <button
          key={tab}
          onClick={() => handleClick(tab)}
          className={`${TabButtonsStyle.tabButton} ${activeButton === tab ? TabButtonsStyle.activeTab : TabButtonsStyle.inactiveTab}`}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default TabButtons;
