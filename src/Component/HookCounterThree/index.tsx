import React, { useState } from "react";

interface IName {
    firstName: string;
    lastName: string;
}
const InitName: IName = {
    firstName: "",
    lastName: ""
};

const useFetch = (initName: IName) => {
    const [name, setName] = useState<IName>(initName);
    const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const { target: { name: targetName, value }} = event; 
        setName({
            ...name, // 이전 객체의 데이터를 넣어주지 않는다면, targetName만 남게된다.
            [targetName]: value
        } as any);
    }
    return {
        name,
        onChange
    };
}

const HookCounterThree = () => {
    const { name, onChange } = useFetch(InitName);
    return (
        <div>
            <form>
                <input type={"text"} onChange={e => onChange(e)} value={ name.firstName } name={"firstName"}/>
                <input type={"text"} onChange={e => onChange(e)} value={ name.lastName } name={"lastName"}/>
                <h2>Input First Name: { name.firstName }</h2>
                <h2>Input Last Name: { name.lastName }</h2>
                <p>{ JSON.stringify(name) }</p>
            </form>
        </div>
    )
}

export default HookCounterThree;