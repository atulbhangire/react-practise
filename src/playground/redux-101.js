import { createStore } from "redux";


//Action Generator

const incrementCount = ({incrementBy = 1} = {}) => {    
    //Actions
    return {
        type: "INCREMENT",
        incrementBy
    }
}

const decrementCount = ({decrementBy = 1} = {}) => {
    return {
        type: "DECREMENT",
        decrementBy
    }
}

// Reducer
// 1. Reducer is pure function
// 2. Never change state or action instead it returns new state.

const counterReducer = (state = { count: 0 }, action) => {        
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT' :
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET' :
                return {
                    count: 0
                }
        default:
            return state
    }
};

//Store
const store = createStore(counterReducer);

store.subscribe(() => console.log(store.getState()));

store.dispatch(incrementCount({incrementBy: 9}));

store.dispatch(decrementCount({decrementBy: 20}));

store.dispatch({
    type: 'RESET'
});


