import React, { useState, useEffect } from "react";

const useFetch = (initCount: number, initName: string) => {
    const [count, setCount] = useState<number>(initCount);
    const [name, setName] = useState<string>(initName);

    const onUpdateCount = (newCount: number) => {
        setCount(newCount);
    }

    const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const { target: { name, value }} = event;
        setName(value);
    }
    
    useEffect(() => {
        console.log("useEffect()");
        document.title = `You clicked ${count} times`;
    }, [count]);

    return {
        count,
        onUpdateCount,
        name,
        onChange
    };
}
const HookCounterOne = () => {
    const { count, onUpdateCount, name, onChange } = useFetch(0, '');

    return (
        <div>
            <input type={"text"} value={name} onChange={onChange}/>
            <button onClick={e => onUpdateCount(count + 1)}>Click {count} times</button>
        </div>
    );
};

export default HookCounterOne;