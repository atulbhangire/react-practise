import React from "react";
import { connect } from "react-redux";

const ExpensesListItem = (props) => {    
    return props.expenses.map((expense) => {
        return (
            <div>                
                <p>Description: {expense.description}</p>
                <p>Amount: {expense.amount}</p>
                <p>Create At: {expense.createAt}</p>
                <hr/>
            </div>
        )
    });

    
}

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    };
};

export default connect(mapStateToProps)(ExpensesListItem);