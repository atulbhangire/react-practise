const getVisibleExpenses = (expenses, {text, sortBy, startDate, endData}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endData !== 'number' || expense.createdAt <= endData;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if(sortBy === 'amount') {
            a.amount < b.amount ? 1 : -1;
        }
    }); 
}

export default getVisibleExpenses;