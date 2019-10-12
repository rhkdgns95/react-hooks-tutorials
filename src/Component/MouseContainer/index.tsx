import React, { useState } from "react";
import HookMouse from "../HookMouse";

const useFetch = () => {
    const [display, setDisplay] = useState<boolean>(false);
    
    const toggleDisplay = () => {
        setDisplay(!display);
    }

    return {
        display,
        toggleDisplay
    };
}

const MouseContainer = () => {
    const { display, toggleDisplay } = useFetch();
    
    return (
        <div>
            <button onClick={ e => toggleDisplay()} >Toggle Button</button>
            {
                display && <HookMouse />
            }
        </div>
    )
};

export default MouseContainer;