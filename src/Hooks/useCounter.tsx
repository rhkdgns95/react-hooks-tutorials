import React, { useState } from "react";

const useCounter = (initCount: number, value: number) => {
    const [count, setCount] = useState<number>(initCount);
    
    const increment: React.MouseEventHandler<HTMLButtonElement> = () => {
        setCount(count + value);
    }
    
    const decrement: React.MouseEventHandler<HTMLButtonElement> = () => {
        setCount(count - value);
    }
    const reset: React.MouseEventHandler<HTMLButtonElement> = () => {
        setCount(initCount);
    }
    return {
        count, increment, decrement, reset
    };
};

export default useCounter;