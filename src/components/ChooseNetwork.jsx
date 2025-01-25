import React, { useState } from 'react';
import { Menu } from '@headlessui/react';
import ethIcon from '../icon/eth.webp';
import bnbIcon from '../icon/bnb.webp';
import { ChooseNetworkStyle } from '../styles/ChooseNetworkStyle'; 

/**
 * Array of network options for the selection menu.
 * Each option includes a value, label, and icon.
 * @type {Array<{ value: string, label: string, icon: string }>}
 */
const options = [
    { value: 'Ethereum', label: 'Ethereum', icon: ethIcon },
    { value: 'BNB Smart Chain', label: 'BNB Smart Chain', icon: bnbIcon },
];

/**
 * ChooseNetwork component provides a dropdown menu for selecting a blockchain network.
 * @param {Object} props - The props for the component.
 * @param {Function} props.handleChangeNetwork - Function to handle network change events.
 * @returns {JSX.Element} The rendered ChooseNetwork component.
 */
function ChooseNetwork({ handleChangeNetwork }) {
    const [selectedNetwork, setSelectedNetwork] = useState('Ethereum');

    const handleSelect = (network) => {
        setSelectedNetwork(network.label);
        handleChangeNetwork(network.value);
    };

    return (
        <div className={ChooseNetworkStyle.container}>
            <div className={ChooseNetworkStyle.label}>
                Network :
            </div>
            <Menu as="div" className={ChooseNetworkStyle.menuContainer}>
                <Menu.Button className={ChooseNetworkStyle.button}>
                    <div className={ChooseNetworkStyle.buttonContent}>
                        <img
                            src={options.find(net => net.label === selectedNetwork)?.icon}
                            alt={selectedNetwork}
                            className={ChooseNetworkStyle.icon}
                        />
                        {selectedNetwork}
                    </div>
                    <svg
                        className={ChooseNetworkStyle.arrowIcon}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </Menu.Button>
                <Menu.Items className={ChooseNetworkStyle.menuItems}>
                    <div className="py-1">
                        {options.map((network) => (
                            <Menu.Item key={network.value}>
                                {({ active }) => (
                                    <button
                                        onClick={() => handleSelect(network)}
                                        className={`${ChooseNetworkStyle.menuItem} ${active ? ChooseNetworkStyle.active : ''}`}
                                    >
                                        <img
                                            src={network.icon}
                                            alt={network.label}
                                            className={ChooseNetworkStyle.icon}
                                        />
                                        {network.label}
                                    </button>
                                )}
                            </Menu.Item>
                        ))}
                    </div>
                </Menu.Items>
            </Menu>
        </div>
    );
}

export default ChooseNetwork;
