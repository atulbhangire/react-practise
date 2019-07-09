import React from "react";
import ExpensesList from "./ExpensesList";
import ExpensesListFilters from "./ExpensesListFilters";

const ExpensesDashboard = () => {
    return (
        <div>
            <h1>Expenses Dashboard</h1>
            <ExpensesListFilters />
            <ExpensesList />
        </div>
    );
}

export default ExpensesDashboard;