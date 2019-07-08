import { createStore, combineReducers } from "redux";
import ExpensesReducers from "../reducers/expenses";
import FiltersReducers from "../reducers/filters"; 

// Create Store
export default () => {
    const store = createStore(
        combineReducers({
            expenses: ExpensesReducers,
            filters: FiltersReducers
        })
    );

    return store;
}