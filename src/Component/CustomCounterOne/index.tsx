import React from "react";
import useCounter from "../../Hooks/useCounter";

const CustomCounterOne = () => {
    const {count, increment, decrement, reset} = useCounter(0, 1);
    return (
        <div>
            <h3>Counter One - {count}</h3>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <hr />
        </div>
    )
};

export default CustomCounterOne;
