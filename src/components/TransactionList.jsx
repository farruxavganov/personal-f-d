import React, { useContext, useState } from "react";
import { FinanceContext } from "../context/FinanceContext";

const TransactionList = () => {
    const { transactions } = useContext(FinanceContext);

    // States for filters
    const [filterCategory, setFilterCategory] = useState("All");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    // Filtered transactions based on selected filters
    const filteredTransactions = transactions.filter((transaction) => {
        // Filter by category
        if (filterCategory !== "All" && transaction.category !== filterCategory) {
            return false;
        }

        // Filter by date range
        const transactionDate = new Date(transaction.date);
        if (
            (startDate && transactionDate < new Date(startDate)) ||
            (endDate && transactionDate > new Date(endDate))
        ) {
            return false;
        }

        return true;
    });

    return (
        <div className="card p-3 mb-4">
            <h5>Transaction List</h5>

            {/* Filters */}
            <div className="filters mb-3">
                <div className="row">
                    <div className="col-md-4">
                        <label>Category:</label>
                        <select
                            className="form-control"
                            value={filterCategory}
                            onChange={(e) => setFilterCategory(e.target.value)}
                        >
                            <option value="All">All</option>
                            <option value="Income">Income</option>
                            <option value="Expense">Expense</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <label>Start Date:</label>
                        <input
                            type="date"
                            className="form-control"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                        />
                    </div>
                    <div className="col-md-4">
                        <label>End Date:</label>
                        <input
                            type="date"
                            className="form-control"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            {/* Transaction Table */}
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th>Comment</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredTransactions.length > 0 ? (
                        filteredTransactions.map((transaction) => (
                            <tr key={transaction.id}>
                                <td>{transaction.date}</td>
                                <td>
                                    {transaction.category === "Expense" ? "-" : "+"}$
                                    {transaction.amount.toFixed(2)}
                                </td>
                                <td>{transaction.category}</td>
                                <td>{transaction.comment || "-"}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="text-center">
                                No transactions found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default TransactionList;
