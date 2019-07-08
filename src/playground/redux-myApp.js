import { createStore, combineReducers } from "redux";
import uuid from "uuid";

//Actions

//ADD_EXPENSE
const addExpenses = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
    ) => {
    return {
        type: "ADD_EXPENSES",
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt
        }
    }
}

//REMOVE_EXPENSES
const removeExpense = ({ id } = {}) => ({
    type: "REMOVE_EXPENSES",
    id
});

//EDIT_EXPENSE
const editExpense = (id, updateExpenses) => {
    return {
        type: "EDIT_EXPENSES",
        id,
        updateExpenses
    }
}

//SET_TEXT_FILTER
const setTextFilter = (text = "") => {
    return {
        type: "SET_TEXT_FILTER",
        text
    }
}

//SORT_BY_DATE
const sortByDate = () => {
    return {
        type: "SORT_BY_DATE"
    }
}

//SORT_BY_AMOUNT
const sortByAmount = () => {
    return {
        type: "SORT_BY_AMOUNT"
    }
}


//Expenses Reducers
const expensesReducersDefaultState = [];

const expensesReducers = (state = expensesReducersDefaultState, action) => {
    switch(action.type) {
        case "ADD_EXPENSES" :
            return [
                ...state,
                action.expense
            ];
        case "REMOVE_EXPENSES" :
            return state.filter(({id}) => id !== action.id);
            
        case "EDIT_EXPENSES" :
            return state.map((expense) => {
                if(expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updateExpenses
                    }
                } else{
                    return state;
                }
            });
         default:
            return state;
    }
};

// Filters reducers
const filtersReducersDefaultState = {
    text: '',
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
};

const filtersReducers = (state = filtersReducersDefaultState, action) => {
    switch(action.type) {
        case "SET_TEXT_FILTER":
            return {
                ...state,
                text: action.text
            }
        case "SORT_BY_DATE":
            return {
                ...state,
                sortBy: "date"
            }
        case "SORT_BY_AMOUNT":
                return {
                    ...state,
                    sortBy: "amount"
                }
        default:
            return state;
    }
};

// Create Store
const store = createStore(
    combineReducers({
        expenses: expensesReducers,
        filters: filtersReducers
    })
);

store.subscribe(() => {
    console.log(store.getState());
});


//dispatch action

const expenseOne = store.dispatch(addExpenses({description: "Test Description", note: "Tea", amount: 100}));
const expenseTwo = store.dispatch(addExpenses({description: "Test Description", note: "Coffee", amount: 200}));

const removeExpenseOne = store.dispatch(removeExpense({id: expenseOne.expense.id}));

const editExpenses = store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}));

const setTextFilters = store.dispatch(setTextFilter("rent"));

const sortByDateValue = store.dispatch(sortByDate());
const sortByAmountValue = store.dispatch(sortByAmount());

console.log(removeExpenseOne);

const demoState = {
    expenses: [{
        id: "test-Id",
        description: "My Expenses",
        note: "Test note",
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: "rent",
        sortBy: "amount",
        startDate: undefined,
        endDate: undefined
    }
};