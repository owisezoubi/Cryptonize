import React, { useState, useEffect } from 'react';
import { fetchTransactions } from '../utils/transactionService';
import { formatTimestamp, generateTableRow, handlePageChange } from '../utils/transactionUtils';
import { TransactionTableStyles } from '../styles/TransactionTableStyles';
import LoadingSpinner from '../components/LoadingSpinner'; // Import reusable loader

const TransactionTable = ({ wallet }) => {
  const [transactions, setTransactions] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 10;

  useEffect(() => {
    const getTransactions = async () => {
      setLoading(true); // Show loader
      try {
        const operations = await fetchTransactions(wallet.Network, wallet.Address);
        setTransactions(operations);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false); // Hide loader
      }
    };

    getTransactions();
  }, [wallet.Network, wallet.Address]);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentTransactions = transactions ? transactions.slice(startIndex, endIndex) : [];
  const totalPages = transactions ? Math.ceil(transactions.length / ITEMS_PER_PAGE) : 1;

  const nextPage = () => handlePageChange(currentPage, totalPages, setCurrentPage, 'next');
  const prevPage = () => handlePageChange(currentPage, totalPages, setCurrentPage, 'prev');

  return (
    <div id="TransactionTable" className={`${TransactionTableStyles.container} relative`}>
      {loading && (
        <div className="absolute inset-0 flex justify-center items-center bg-gray-100 dark:bg-gray-900 bg-opacity-50 z-10">
          <LoadingSpinner />
        </div>
      )}
      <div className={`${loading ? 'blur-sm' : ''} transition duration-300`}>
        <table className={TransactionTableStyles.table}>
          <thead className={TransactionTableStyles.thead}>
            <tr>
              <th className={TransactionTableStyles.th}>Date & Time</th>
              <th className={TransactionTableStyles.th}>Tx Hash</th>
              <th className={TransactionTableStyles.th}>From</th>
              <th className={TransactionTableStyles.th}>To</th>
              <th className={TransactionTableStyles.th}>Amount</th>
              <th className={TransactionTableStyles.th}>Type</th>
              <th className={TransactionTableStyles.th}>Token</th>
            </tr>
          </thead>
          <tbody className={TransactionTableStyles.tbody}>
            {!loading && currentTransactions.length === 0 && (
              <tr>
                <td colSpan="7">
                  <div className={TransactionTableStyles.noDataContainer}>
                    No Transactions Found.
                  </div>
                </td>
              </tr>
            )}
            {!loading &&
              currentTransactions.map((transaction, index) =>
                generateTableRow(transaction, index, formatTimestamp)
              )}
          </tbody>
        </table>
        {!loading && transactions && transactions.length > 0 && (
          <div className={TransactionTableStyles.pagination}>
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`${TransactionTableStyles.button} ${
                currentPage === 1 ? TransactionTableStyles.disabledButton : TransactionTableStyles.enabledButton
              }`}
            >
              Previous
            </button>
            <span className={TransactionTableStyles.pageInfo}>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className={`${TransactionTableStyles.button} ${
                currentPage === totalPages ? TransactionTableStyles.disabledButton : TransactionTableStyles.enabledButton
              }`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TransactionTable;
