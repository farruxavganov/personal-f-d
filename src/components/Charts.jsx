import React, { useContext } from "react";
import { Pie, Line } from "react-chartjs-2";
import { FinanceContext } from "../context/FinanceContext";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
} from "chart.js";

// Register chart components
ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title
);

const Charts = () => {
    const { transactions } = useContext(FinanceContext);

    // Group expenses by category for the Pie Chart
    const expenseCategories = transactions
        .filter((transaction) => transaction.category === "Expense")
        .reduce((acc, transaction) => {
            acc[transaction.comment] = (acc[transaction.comment] || 0) + transaction.amount;
            return acc;
        }, {});

    const pieData = {
        labels: Object.keys(expenseCategories),
        datasets: [
            {
                data: Object.values(expenseCategories),
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#4BC0C0",
                    "#9966FF",
                    "#FF9F40",
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#4BC0C0",
                    "#9966FF",
                    "#FF9F40",
                ],
            },
        ],
    };

    // Line chart data: Income and Expense trends over time
    const transactionsByDate = transactions.reduce((acc, transaction) => {
        const date = transaction.date;
        if (!acc[date]) acc[date] = { income: 0, expense: 0 };
        acc[date][transaction.category.toLowerCase()] += transaction.amount;
        return acc;
    }, {});

    const lineData = {
        labels: Object.keys(transactionsByDate),
        datasets: [
            {
                label: "Income",
                data: Object.values(transactionsByDate).map((data) => data.income),
                borderColor: "#4CAF50",
                backgroundColor: "rgba(76, 175, 80, 0.3)",
                fill: true,
            },
            {
                label: "Expense",
                data: Object.values(transactionsByDate).map((data) => data.expense),
                borderColor: "#F44336",
                backgroundColor: "rgba(244, 67, 54, 0.3)",
                fill: true,
            },
        ],
    };

    return (
        <div className="card p-3 mb-4">
            <h5>Financial Charts</h5>
            <div className="row">
                {/* Pie Chart */}
                <div className="col-md-6">
                    <h6>Expenses by Category</h6>
                    {Object.keys(expenseCategories).length > 0 ? (
                        <Pie data={pieData} />
                    ) : (
                        <p className="text-center">No expenses to show.</p>
                    )}
                </div>

                {/* Line Chart */}
                <div className="col-md-6">
                    <h6>Income & Expense Trends</h6>
                    {Object.keys(transactionsByDate).length > 0 ? (
                        <Line data={lineData} />
                    ) : (
                        <p className="text-center">No data to display trends.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Charts;
