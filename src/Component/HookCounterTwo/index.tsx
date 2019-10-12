import React, { useState } from "react";

const useFetch = (initData: number) => {
    const [count, setCount] = useState(initData);
    // const handleIncreased = () => {
    //     setCount(count + 1);
    // }
    // const handleDecreased = () => {
    //     setCount(count - 1);
    // }
    // const handleReset = () => {
    //     setCount(initData);
    // }
    const onChangeCount = (data: any) => {
        setCount(data);
    }
    const handleIncreasedFive = () => {
        for(let i = 0; i <= 4; i++) {
            // Not Working
            // setCount(count + 1);
            
            // Working
            setCount(prevCount => prevCount + 1);
        }
    }
    return {
        count,
        // handleIncreased,
        // handleDecreased,
        // handleReset
        onChangeCount,
        handleIncreasedFive
    };
}
const HookCounterTwo = () => {
    const initData = 0;
    const { count, onChangeCount, handleIncreasedFive } = useFetch(initData);
    
    return (
        <div>
            <p>Count: { count }</p>
            <button onClick={() => onChangeCount(initData)}>Reset</button>
            <button onClick={() => onChangeCount(prevCount => prevCount + 1)}>Increase</button>
            <button onClick={() => onChangeCount(prevCount => prevCount - 1)}>Decrease</button>
            <button onClick={() => handleIncreasedFive()}>+Five Increase </button>
        </div> 
    )
};

export default HookCounterTwo;