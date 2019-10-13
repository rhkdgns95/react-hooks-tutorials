import React from "react";
import { useCalculatorContext } from "../../Provider/CalculatorProvider";

const CalculatorComponentC = () => {
    const { count: { firstCount, secondCount }, dispatchCount } = useCalculatorContext();
    return (
        <div>
            <h2>---- ComponentC Counting +- 5 ----[ firstCount: { firstCount } secondCount: { secondCount } ]</h2>
            <button onClick={e => dispatchCount({type: "increment", value: 5})}>incremnet 1</button>
            <button onClick={e => dispatchCount({type: "decrement", value: 5})}>decrement 1</button>
            <button onClick={e => dispatchCount({type: "increment2", value: 5})}>incremnet 2</button>
            <button onClick={e => dispatchCount({type: "decrement2", value: 5})}>decrement 2</button>
            <button onClick={e => dispatchCount({type: "reset", value: 0})}>reset</button>>
        </div>
    )
};

export default CalculatorComponentC;