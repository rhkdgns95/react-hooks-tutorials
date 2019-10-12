import React from "react";
import { useAppContext } from "../../Provider/AppProvider";

const ComponentE = () => {
    const { componentName } = useAppContext();
    return (
        <div>
            <h3>useAppContext: { componentName }</h3> 
        </div>
    )
};

export default ComponentE;