import React from "react";
import { useCalculatorContext } from "../../Provider/CalculatorProvider";

const CalculatorComponentA = () => {
    const { count: { firstCount, secondCount }, dispatchCount } = useCalculatorContext();
    return (
        <div>
            <h2>---- ComponentA Counting +- 1 ----[ firstCount: { firstCount } secondCount: { secondCount } ]</h2>
            <button onClick={e => dispatchCount({type: "increment", value: 1})}>increment 1</button>
            <button onClick={e => dispatchCount({type: "decrement", value: 1})}>decrement 1</button>
            <button onClick={e => dispatchCount({type: "increment2", value: 1})}>increment 2</button>
            <button onClick={e => dispatchCount({type: "decrement2", value: 1})}>decrement 2</button>
            <button onClick={e => dispatchCount({type: "reset", value: 0})}>reset</button>
        </div>
    )
};

export default CalculatorComponentA;