import React from "react";
import { connect } from "react-redux";
import ExpensesListItem from "./ExpensesListItem";
import selectExpenses from "../selectors/expenses";

const ExpensesList = (props) => (
    <div>
        <h1>Expenses List</h1>
        {props.expenses.map((expense) => {
            return <ExpensesListItem {...expense}/>
        }) }
    </div>
);

const mapStateToProps = (state) => {
    console.log(state.expenses);
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpensesList);