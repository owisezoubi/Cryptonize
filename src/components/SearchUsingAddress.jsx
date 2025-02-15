import React, { useState } from 'react';
import { validateAddress, handleAddressSearch } from '../utils/addressUtils';
import { searchAddressStyle } from '../styles/SearchAddressStyle';

/**
 * The `SearchUsingAddress` component provides:
 * - An input field for a wallet address
 * - A "Search" button that attempts to validate and connect using that address.
 *
 * @param {Object} props
 * @param {Function} props.handleConnect - Callback that notifies the parent about
 *        a successful or failed address connection attempt.
 *
 * @returns {JSX.Element} Renders an address input and a search button.
 */
function SearchUsingAddress({ handleConnect }) {
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');

  function handleSearchAddress() {
    try {
      const { isValid, errorMsg } = handleAddressSearch(address, handleConnect);
      window.scrollTo({
        top: 0, // Scroll to the top of the page
        behavior: 'smooth', // Smooth scrolling
      });
      if (isValid) {
        setError('');
      } else {
        setError(errorMsg);
      }
    } catch (err) {
      console.error('Validation error:', err);
      setError('An error occurred. Please try again.');
    }
  }

  return (
    <div className={searchAddressStyle.container}>
      <div className={searchAddressStyle.inputContainer}>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter wallet address"
          className={searchAddressStyle.input}
        />
      </div>
      <button onClick={handleSearchAddress} className={searchAddressStyle.button}>
        Search
      </button>
      {error && <div className={searchAddressStyle.error}>{error}</div>}
    </div>
  );
}

export default SearchUsingAddress;
