import React, { useState, useEffect } from "react";

const useFetch = (initCount: number) => {
    const [count, setCount] = useState<number>(initCount);
    
    const onUpdateCount = (newCount: number) => {
        setCount(newCount);
    }
    
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });

    return {
        count,
        onUpdateCount
    };
}
const HookCounterOne = () => {
    const { count, onUpdateCount } = useFetch(0);

    return (
        <div>
            <button onClick={e => onUpdateCount(count + 1)}>Click {count} times</button>
        </div>
    );
};

export default HookCounterOne;