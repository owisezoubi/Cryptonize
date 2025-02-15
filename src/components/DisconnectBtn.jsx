import React from 'react';
import { useDisconnect } from 'wagmi';
import { DisconnectButtonStyle } from '../styles/DisconnectButtonStyle';

/**
 * DisconnectBtn component provides a button for disconnecting the user's wallet.
 * @param {Object} props - The props for the component.
 * @param {Function} props.handleDisconnect - Function to handle wallet disconnect events.
 * @returns {JSX.Element} The rendered DisconnectBtn component.
 */
function DisconnectBtn({ handleDisconnect }) {
    // Hook to get the disconnect function from wagmi
    const { disconnectAsync } = useDisconnect();

    /**
     * Handles the disconnection of the wallet.
     * Calls the disconnect function and then updates the parent component to reflect the disconnection state.
     * @async
     */
    async function disconnectWallet() {
        await disconnectAsync(); 
        handleDisconnect("", "", false);
    }

    return (
        <button
          onClick={disconnectWallet} 
          className={DisconnectButtonStyle.btn} 
        >
          Disconnect
        </button>
    );
}

export default DisconnectBtn;
