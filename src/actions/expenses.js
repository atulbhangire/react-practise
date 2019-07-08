import uuid from "uuid";

//ADD_EXPENSE
export const addExpenses = (
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
export const removeExpense = ({ id } = {}) => ({
    type: "REMOVE_EXPENSES",
    id
});

//EDIT_EXPENSE
export const editExpense = (id, updateExpenses) => {
    return {
        type: "EDIT_EXPENSES",
        id,
        updateExpenses
    }
}