import React, { useState, useMemo } from "react";

const useFetch = () => {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);
    
    const handleIncrementOne = () => {
        setCounterOne(counterOne + 1);
    }
    const handleIncrementTwo = () => {
        setCounterTwo(counterTwo + 1);
    }
    const isEven = useMemo(() => {
        let i = 0;
        while(i < 2000000000) {
            i++;
            // console.log("i: ", i);
        }
        return counterOne % 2 === 0 ? "Even" : "Odd";
    }, [counterOne]);

    return {
        counterOne,
        counterTwo,
        handleIncrementOne,
        handleIncrementTwo,
        isEven
    };
}
const MemoCount = () => {
    const { counterOne, counterTwo, handleIncrementOne, handleIncrementTwo, isEven } = useFetch();
    return (
        <div>
            <div>
                <button onClick={handleIncrementOne}>Counter One - {counterOne}</button>
                <span>{isEven}</span>
            </div>
            <div>
                <button onClick={handleIncrementTwo}>Counter Two - {counterTwo}</button>
            </div>
        </div>
    )
};

export default MemoCount;