import React, { useEffect, useState } from "react";
import { fetchCurrencyRates } from "../../utils/currencyUtils";

const ExchangeRates = () => {
    const [rates, setRates] = useState({});
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchRates = async () => {
            const apiKey = import.meta.env.VITE_APP_API_KEY;
            const fetchedRates = await fetchCurrencyRates(apiKey);
            if (fetchedRates) {
                setRates(fetchedRates);
            } else {
                setError("Unable to fetch currency rates.");
            }
        };
        fetchRates();
    }, []);

    return (
        <div className="card border-0 shadow p-3 mb-5 bg-body rounded p-3 mb-4">
            <h5>Exchange Rates</h5>
            {error && <p className="text-danger">{error}</p>}
            {!error && (
                <div
                style={{
                    maxHeight: "100px",
                    overflowY: "auto",
                    overflowX: "hidden",
                    border: "1px solid #dee2e6",
                    borderRadius: "5px",
                  }}
                >
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Currency</th>
                                <th>Rate</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(rates).map(([currency, rate]) => (
                                <tr key={currency}>
                                    <td>{currency}</td>
                                    <td>{rate.toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default ExchangeRates;
