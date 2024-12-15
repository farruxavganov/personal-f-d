import React from "react";
import { FinanceProvider } from "./context/FinanceContext";
import CurrencyConverter from "./components/CurrencyConverter";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import Summary from "./components/Summary";
import Charts from "./components/Charts";
import ExchangeRates from "./components/ExchangeRates";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
    return (
        <FinanceProvider>
            <div className="container">
                <h1 className="text-center my-4">Personal Finance Dashboard</h1>
                <CurrencyConverter />
                <TransactionForm />
                <TransactionList />
                <Summary />
                <Charts />
                <ExchangeRates />
            </div>
        </FinanceProvider>
    );
};

export default App;
