import React, { useState, useCallback } from "react";
import Title from "../Title";
import Count from "../Count";
import Button from "../Button";

interface ICount {
    age: number;
    salary: number;
}

const InitCount = {
    age: 0,
    salary: 0
};

const useFetch = () => {
    const [count, setCount] = useState<ICount>(InitCount);
    const handleIncrementAge: React.MouseEventHandler<HTMLButtonElement> = useCallback(() => {
        setCount({
            ...count,
            age: count.age + 1
        });
    }, [count]);
    const handleIncrementSalary: React.MouseEventHandler<HTMLButtonElement> = useCallback(() => {
        setCount({
            ...count,
            salary: count.salary + 1000
        })
    }, [count]);
    return {
        count,
        handleIncrementAge,
        handleIncrementSalary
    };
}
const ParentComponent = () => {
    console.log("Rendering - ParentComponent");
    const { count: { age, salary }, handleIncrementAge, handleIncrementSalary } = useFetch();
    
    return (
        <div>
            <Title />
            <Count text={"Age"} count={age}/>
            <Button handleClick={handleIncrementAge} text={"Age"}/>
            <hr />
            <Count text={"Salary"} count={salary}/>
            <Button handleClick={handleIncrementSalary} text={"Salary"}/>
        </div>
    )
};

export default ParentComponent;