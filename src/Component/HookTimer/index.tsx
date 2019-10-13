import React, { useState, useEffect, useMemo, useRef } from "react";

const useFetch = () => {
    const [count, setCount] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout>();
    
    const tic = () => {
        setCount(count + 1);
    };

    const onStop = () => {
        clearInterval(intervalRef.current!);
    }

    useEffect(() => {
        intervalRef.current = setInterval(tic, 1000);
        
        return () => {
            onStop();
        };
    }, [count])

    return {
        count,
        onStop
    };
}
const HookTimer = () => {
    const  {count, onStop } = useFetch();

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={onStop}>Stop</button>
        </div>
    );
};

export default HookTimer;