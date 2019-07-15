import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import {editExpense} from "../actions/expenses";

const EditExpenses = (props) => {
    const id = props.match.params.id;
    return (
        <div>
            <ExpenseForm 
                expense={props.expense}
                onSubmit={(expense) => {
                    props.dispatch(editExpense(props.expense.id, expense));
                    props.history.push("/");
                }}
            />
        </div>
    );
}

const mapStateToProps = ((state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
});

export default connect(mapStateToProps)(EditExpenses);