import React, { useContext } from "react";
import { AppContext, ChannelContext } from "../../App";

const ComponentC = () => {
    const {componentName: componentApp} = useContext(AppContext);
    const {componentName: componentChannel} = useContext(ChannelContext);
    
    return (
        <div>
            <p>App Context: { componentApp }</p>
            <p>Channel Context: { componentChannel }</p>
        </div>
    )
};

export default ComponentC;
