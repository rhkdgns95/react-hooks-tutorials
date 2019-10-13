import React, { useReducer } from "react";

interface IState {
    firstCount: number;
    secondCount: number;
}
interface IAction {
    type: string;
    value: number;
}
const initialState: IState = {
    firstCount: 0,
    secondCount: 10
};

const reducer: React.Reducer<IState, IAction> = (state, action) => {
    switch(action.type) {
        case "increment":
            return { ...state, firstCount: state.firstCount + action.value };
        case "decrement":
            return { ...state, firstCount: state.firstCount - action.value };
        case "increment2":
            return { ...state, secondCount: state.secondCount + action.value };
        case "decrement2":
            return { ...state, secondCount: state.secondCount - action.value };
        case "reset":
            return initialState;
        default: 
            throw new Error("Error");
    }
}
const CounterTwo = () => {
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>first Counter: {count.firstCount}</h1>
            <h1>second Counter: {count.secondCount}</h1>
             <button onClick={e => dispatch({type: "increment", value: 1})}>Increment 1</button>
            <button onClick={e => dispatch({type: "decrement", value: 1})}>Decrement 1</button>
            <button onClick={e => dispatch({type: "increment2", value: 1})}>Increment 2</button>
            <button onClick={e => dispatch({type: "decrement2", value: 1})}>Decrement 2</button>
            <button onClick={e => dispatch({type: "reset", value: 0})}>Reset</button>
        </div>
    );
};

export default CounterTwo;