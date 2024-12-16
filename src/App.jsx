import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FinanceProvider } from "./context/FinanceContext";
import Layout from "./components/Layout";
import TransactionForm from "./components/TransactionForm";
import CurrencyConverter from "./components/CurrencyConverter";
import Dashboard from "./components/Dashboard/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
    return (
        <BrowserRouter>
            <FinanceProvider>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<CurrencyConverter />} />
                        <Route path="add-transaction" element={<TransactionForm />} />
                        <Route path="dashboard" element={<Dashboard />} />
                    </Route>
                </Routes>  
            </FinanceProvider>
        </BrowserRouter>
    );
};

export default App;