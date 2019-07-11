import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses";

const ExpensesListItem = ({dispatch, id, description, amount, createdAt}) => {    
    return (
        <div>                
            <p>Description: {description}</p>
            <p>Amount: {amount}</p>
            <p>Create At: {createdAt}</p>
            <button onClick={() => {
                console.log(id);
                dispatch(removeExpense({id}));
            }} >Remove</button>
            <hr/>
        </div>
    )
};

export default connect()(ExpensesListItem);