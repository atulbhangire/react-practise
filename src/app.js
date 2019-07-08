import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link, Switch } from "react-router-dom";
import configStore from  "./store/configStore";
import { addExpenses, editExpenses, removeExpenses } from "./actions/expenses";
import { setTextFilter, sortByDate, sortByAmount} from "./actions/filters";
import Indecision from "./components/Indecision.js";


const store = configStore();

store.subscribe(() => {
   console.log(store.getState()); 
});

//Dispatch Actions
const gasBill = store.dispatch(addExpenses({description: "Gas Bill", note: "bill", amount: 600}));
const waterBill = store.dispatch(addExpenses({description: "Water Bill", note: "bill", amount: 200}));
const textFilter = store.dispatch(setTextFilter("bill"));


const DashboardApp = () => (
    "This is dashboard app"
);

const CreateDashboardApp = () => {
    return "This is create dashboard page";
}

const NotFoundPage = () => {
    return "404!";
}

const routes = (
    <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/create">Create</Link>
        <Switch>            
            <Route exact path="/" component={DashboardApp} />
            <Route path="/create" component={CreateDashboardApp} />
            <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(<Indecision />, document.getElementById("app"));