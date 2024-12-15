import React, { createContext, useState, useEffect } from "react";

export const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
    const [transactions, setTransactions] = useState(
        JSON.parse(localStorage.getItem("transactions")) || []
    );
    const [currencyRates, setCurrencyRates] = useState({});
    const [baseCurrency, setBaseCurrency] = useState("USD");

    // Fetch currency rates
    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await fetch(
                    `https://v6.exchangerate-api.com/v6/1229f5c276bf8f67178a24e8/latest/${baseCurrency}`
                );
                const data = await response.json();
                setCurrencyRates(data.conversion_rates);
            } catch (error) {
                console.error("Error fetching currency rates:", error);
            }
        };
        fetchRates();
    }, [baseCurrency]);

    // Persist transactions in localStorage
    useEffect(() => {
        localStorage.setItem("transactions", JSON.stringify(transactions));
    }, [transactions]);

    return (
        <FinanceContext.Provider
            value={{
                transactions,
                setTransactions,
                currencyRates,
                baseCurrency,
                setBaseCurrency,
            }}
        >
            {children}
        </FinanceContext.Provider>
    );
};
