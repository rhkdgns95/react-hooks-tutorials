import React, { useState } from "react";

interface IItem {
    id: number;
    value: number;
}

const useFetch = () => {
    const [items, setItems] = useState<IItem[]>([]);
    const addItems = () => {
        setItems([
            ...items, 
            {
                id: items.length,
                value: Math.floor(Math.random() * 10)
            }
        ]);
    }    
    return {
        items,
        addItems
    };
}
const HookCounterFour = () => {
    const { items, addItems } = useFetch();
    
    return (
        <div>
            <button onClick={e => addItems()}>Add a Number</button>
            <ul>
                {
                    items.map(item => <li key={item.id}>{item.value}</li>)
                }
            </ul>
        </div>
    );
};

export default HookCounterFour;