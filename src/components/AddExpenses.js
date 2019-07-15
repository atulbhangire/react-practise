import React from "react";
import ExpenseForm from "./ExpenseForm";
import {addExpenses} from "../actions/expenses";
import { connect } from "react-redux";

const AddExpenses = (props) => {
    return (
        <div>
            <h1>Add Expense</h1>
            <ExpenseForm onSubmit={(expense) => {
                props.dispatch(addExpenses(expense));
                props.history.push("/");
            }}/>
        </div>
    );
}

export default connect()(AddExpenses);