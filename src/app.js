import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link, Switch } from "react-router-dom";
import configStore from  "./store/configStore";
import { Provider } from "react-redux";
import { addExpenses, editExpenses, removeExpenses } from "./actions/expenses";
import { setTextFilter, sortByDate, sortByAmount} from "./actions/filters";
import Indecision from "./components/Indecision.js";
import ExpensesDashboard from "./components/ExpensesDashboard";

const store = configStore();

store.subscribe(() => {
//    console.log(store.getState()); 
});

//Dispatch Actions
const gasBill = store.dispatch(addExpenses({description: "Gas Bill", note: "bill", amount: 600, createdAt : 0}));
const waterBill = store.dispatch(addExpenses({description: "Water Bill", note: "bill", amount: 200, createdAt : 2}));
const rent = store.dispatch(addExpenses({description: "Rent", note: "rent", amount: 1200, createdAt : 1}));
// const textFilter = store.dispatch(setTextFilter("bill"));

const jsx = (
    <Provider store={store}>
        <Indecision />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));