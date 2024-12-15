import React, { useState, useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";

const TransactionForm = () => {
    const { transactions, setTransactions } = useContext(FinanceContext);

    // State for the form inputs
    const [formData, setFormData] = useState({
        amount: "",
        category: "Income",
        date: "",
        comment: "",
    });

    // Handle form input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate input
        if (!formData.amount || !formData.date) {
            alert("Please fill in all required fields!");
            return;
        }

        // Add new transaction to the state
        const newTransaction = {
            id: Date.now(),
            ...formData,
            amount: parseFloat(formData.amount), // Ensure amount is a number
        };

        setTransactions([...transactions, newTransaction]);

        // Reset the form
        setFormData({
            amount: "",
            category: "Income",
            date: "",
            comment: "",
        });
    };

    return (
        <div className="card p-3 mb-4">
            <h5>Add Transaction</h5>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Amount:</label>
                    <input
                        type="number"
                        className="form-control"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Category:</label>
                    <select
                        className="form-control"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                    >
                        <option value="Income">Income</option>
                        <option value="Expense">Expense</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Date:</label>
                    <input
                        type="date"
                        className="form-control"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Comment (Optional):</label>
                    <input
                        type="text"
                        className="form-control"
                        name="comment"
                        value={formData.comment}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-3">
                    Add Transaction
                </button>
            </form>
        </div>
    );
};

export default TransactionForm;