import React, { useState, useEffect } from "react";

interface ICounting {
    delay: number;
    count: number;
}

const useFetch = (initCounting: ICounting) => {
    const [counting, setCounting] = useState<ICounting>(initCounting);
    
    const onChangeDelay: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const {target: {name, value}} = event;
        setCounting({
            ...counting,
            [name]: parseInt(value)
        });
    }

    const tick = () => {
        const { delay, count } = counting;
        setCounting({
            ...counting,
            count: count + 1
        });
        console.log(`Delay: ${delay} Count: ${count}`);
    }

    useEffect(() => {
        const { delay } = counting;
        const interval: NodeJS.Timeout = setTimeout(tick, delay);
        return () => {
            console.log("Bye");
            clearTimeout(interval); // componentUnmount();
        };
    }, [counting]);

    return {
        counting,
        onChangeDelay
    };
}

const IntervalHookCounterTwo = () => {
    const { counting: { count, delay }, onChangeDelay } = useFetch({count: 0, delay: 1000});

    return (
        <div>
            <h5>{count}</h5>
            <span>Delay: </span>
            <input type="text" value={delay} name={"delay"} onChange={onChangeDelay}/>
        </div>
    )
};

export default IntervalHookCounterTwo;