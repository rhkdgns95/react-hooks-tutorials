import React from "react";
import useCounter from "../../Hooks/useCounter";

const CustomCounterTwo = () => {
    const {count, increment, decrement, reset} = useCounter(100, 5);
    return (
        <div>
            <h3>Counter Two - {count}</h3>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
};

export default CustomCounterTwo;