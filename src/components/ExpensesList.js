import React from "react";
import { connect } from "react-redux";
import ExpensesListItem from "./ExpensesListItem";

const ExpensesList = (props) => (
    <div>
        <h1>Expenses List</h1>
        {props.expenses.map((expense) => {
            return <ExpensesListItem {...expense}/>
        }) }
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    };
};

export default connect(mapStateToProps)(ExpensesList);