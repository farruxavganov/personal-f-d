import React, { createContext, useState } from 'react';

export const FinanceContext = createContext();

const FinanceProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(
    JSON.parse(localStorage.getItem('transactions')) || []
  );

  const addTransaction = (transaction) => {
    const updatedTransactions = [...transactions, transaction];
    setTransactions(updatedTransactions);
    localStorage.setItem('transactions', JSON.stringify(updatedTransactions));
  };

  return (
    <FinanceContext.Provider value={{ transactions, addTransaction }}>
      {children}
    </FinanceContext.Provider>
  );
};

export default FinanceProvider;
