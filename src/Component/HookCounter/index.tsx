import React, { useState } from "react";

const useFetchCount = (defaultCount: number) => {
    const [count, setCount] = useState(defaultCount);
    const onClick = () => {
        setCount(count + 1);
    };
    return {
        count,
        onClick
    };
}
const HomeCounter = () => {
    const data = useFetchCount(0);
    return (
        <button {...data}>
            { data.count }
        </button>
    );
};

export default HomeCounter;