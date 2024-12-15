import React, { useContext, useState } from "react";
import { FinanceContext } from "../context/FinanceContext";

const CurrencyConverter = () => {
    const { currencyRates, baseCurrency, setBaseCurrency } = useContext(FinanceContext);
    const [amount, setAmount] = useState(0);
    const [targetCurrency, setTargetCurrency] = useState("EUR");

    const convertedAmount = (amount * (currencyRates[targetCurrency] || 1)).toFixed(2);

    return (
        <div className="card p-3 mb-4">
            <h5>Currency Converter</h5>
            <div className="form-group">
                <label>Base Currency:</label>
                <select
                    className="form-control"
                    value={baseCurrency}
                    onChange={(e) => setBaseCurrency(e.target.value)}
                >
                    {Object.keys(currencyRates).map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
            <div className="form-group">
                <label>Amount:</label>
                <input
                    type="number"
                    className="form-control"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Target Currency:</label>
                <select
                    className="form-control"
                    value={targetCurrency}
                    onChange={(e) => setTargetCurrency(e.target.value)}
                >
                    {Object.keys(currencyRates).map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
            <p className="mt-3">
                Converted Amount: <strong>{convertedAmount}</strong> {targetCurrency}
            </p>
        </div>
    );
};

export default CurrencyConverter;
