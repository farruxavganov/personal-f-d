import React, { useContext, useState } from "react";
import { FinanceContext } from "../../context/FinanceContext";
import { convertCurrency } from "../../utils/currencyUtils";

const TransactionForm = () => {
    const { setTransactions } = useContext(FinanceContext);
    const [formData, setFormData] = useState({
        amount: "",
        category: "Income",
        date: "",
        comment: "",
        currency: "USD",
    });
    const [conversionRate, setConversionRate] = useState(1); // Simulated rate

    const handleSubmit = (e) => {
        e.preventDefault();
        const convertedAmount = parseFloat(
            convertCurrency(formData.amount, conversionRate)
        );
        setTransactions((prev) => [
            ...prev,
            { ...formData, amount: convertedAmount, id: Date.now() },
        ]);
        setFormData({
            amount: "",
            category: "Income",
            date: "",
            comment: "",
            currency: "USD",
        });
    };

    return (
        <div className="card border-0 shadow p-3 mb-5 bg-body rounded p-3 mb-4">
            <h5>Add Transaction</h5>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label>Amount:</label>
                        <input
                            type="number"
                            className="form-control"
                            value={formData.amount}
                            onChange={(e) =>
                                setFormData({ ...formData, amount: e.target.value })
                            }
                            required
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label>Category:</label>
                        <select
                            className="form-control"
                            value={formData.category}
                            onChange={(e) =>
                                setFormData({ ...formData, category: e.target.value })
                            }
                        >
                            <option value="Income">Income</option>
                            <option value="Expense">Expense</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label>Date:</label>
                        <input
                            type="date"
                            className="form-control"
                            value={formData.date}
                            onChange={(e) =>
                                setFormData({ ...formData, date: e.target.value })
                            }
                            required
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label>Comment:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={formData.comment}
                            onChange={(e) =>
                                setFormData({ ...formData, comment: e.target.value })
                            }
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">
                    Add Transaction
                </button>
            </form>
        </div>
    );
};

export default TransactionForm;
