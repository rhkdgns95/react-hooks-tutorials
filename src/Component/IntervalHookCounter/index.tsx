import React, { useState, useEffect } from "react";

const useFetch = (initCount: number) => {
    const [count, setCount] = useState<number>(initCount);

    const tick = () => {
        // if in useEffect(_, []) was empty arrays like [], this working!
        // setCount(prevCount => prevCount + 1);
        setCount(count + 1);
        console.log("Count: ", count);
    }
    useEffect(() => {
        const interval: NodeJS.Timeout = setInterval(tick, 1000);
        return () => {
            clearInterval(interval);
        }
    }, [count]); // if empty arrays like [], it`s not working
    
    return {
        count
    };
}
const IntervalHookCounter = () => {
    const { count } = useFetch(0);
    return (
        <div>
            <h5>Interval Counting</h5>
            <p>{ count }</p>
        </div>            
    )
};

export default IntervalHookCounter;