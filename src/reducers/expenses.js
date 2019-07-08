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

export default expensesReducers;