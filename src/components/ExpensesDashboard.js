import React from "react";
import ExpensesList from "./ExpensesList";
import ExpensesListFilters from "./ExpensesListFilters";
import ExpenseForm from "./ExpenseForm";

const ExpensesDashboard = () => {
    return (
        <div>
            <h1>Expenses Dashboard</h1>
            <ExpenseForm />
            <ExpensesListFilters />
            <ExpensesList />
        </div>
    );
}

export default ExpensesDashboard;