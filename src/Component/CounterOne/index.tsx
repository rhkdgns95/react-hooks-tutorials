import React, { useReducer } from "react";

const initialState: number = 0;

const reducer: React.Reducer<any, {type: string}> = (state, action) => {
    switch(action.type) {
        case "+":  
            return state + 1;
        case "-":
            return state - 1;
        case "reset":
            return initialState;
        default: 
            throw new Error("Error");
    }
}

const CounterOne = () => {

    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h1>Count: { count }</h1>
            <button onClick={e => dispatch({type: "+"})}>Increment</button>
            <button onClick={e => dispatch({type: "-"})}>Decrement</button>
            <button onClick={e => dispatch({type: "reset"})}>Reset</button>
        </div>
    )
};

export default CounterOne;