import React from "react";
import { useCalculatorContext } from "../../Provider/CalculatorProvider";

const CalculatorComponentB = () => {
    const { count: { firstCount, secondCount}, dispatchCount } = useCalculatorContext();
    return (
        <div>
            <h2>---- ComponentB Counting +- 3 ----[ firstCount: { firstCount } secondCount: { secondCount } ]</h2>
            <button onClick={e => dispatchCount({type: "increment", value: 3})}>increment 1</button>
            <button onClick={e => dispatchCount({type: "decrement", value: 3})}>decrement 1</button>
            <button onClick={e => dispatchCount({type: "increment2", value: 3})}>increment 2</button>
            <button onClick={e => dispatchCount({type: "decrement2", value: 3})}>decrement 2</button>
            <button onClick={e => dispatchCount({type: "reset", value: 0})}>reset</button>
        </div>
    )
};

export default CalculatorComponentB;