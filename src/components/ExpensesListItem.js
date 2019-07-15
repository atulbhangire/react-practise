import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses";
import {Link} from "react-router-dom";

const ExpensesListItem = ({dispatch, id, description, amount, createdAt}) => {    
    return (
        <div>                
            <Link to={`edit/${id}`}><p>{description}</p></Link>
            <p>Amount: {amount}</p>
            <p>Create At: {createdAt}</p>
            <button onClick={() => {
                dispatch(removeExpense({id}));
            }} >Remove</button>
            <hr/>
        </div>
    )
};

export default connect()(ExpensesListItem);