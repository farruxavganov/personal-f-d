import React, { useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";

const Summary = () => {
    const { transactions } = useContext(FinanceContext);

    // Calculate totals
    const totalIncome = transactions
        .filter((transaction) => transaction.category === "Income")
        .reduce((sum, transaction) => sum + transaction.amount, 0);

    const totalExpense = transactions
        .filter((transaction) => transaction.category === "Expense")
        .reduce((sum, transaction) => sum + transaction.amount, 0);

    const netBalance = totalIncome - totalExpense;

    return (
        <div className="card p-3 mb-4">
            <h5>Financial Summary</h5>
            <div className="row text-center">
                <div className="col-md-4">
                    <div className="summary-box bg-success text-white p-3 rounded">
                        <h6>Total Income</h6>
                        <h4>+${totalIncome.toFixed(2)}</h4>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="summary-box bg-danger text-white p-3 rounded">
                        <h6>Total Expense</h6>
                        <h4>-${totalExpense.toFixed(2)}</h4>
                    </div>
                </div>
                <div className="col-md-4">
                    <div
                        className={`summary-box p-3 rounded ${
                            netBalance >= 0 ? "bg-primary" : "bg-warning text-dark"
                        }`}
                    >
                        <h6>Net Balance</h6>
                        <h4>
                            {netBalance >= 0 ? "+" : "-"}${Math.abs(netBalance).toFixed(2)}
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summary;
