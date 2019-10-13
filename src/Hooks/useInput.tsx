import { useState } from "react";

const useInput = (placeholder: string, initValue: string) => {
    const [value, setValue] = useState<string>(initValue);
    const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const { target: { value }} = event;
        setValue(value);
    }
    const reset = () => {
        setValue(initValue);
    } 
    return {
        placeholder,
        value,
        onChange,
        reset
    };
};

export default useInput;