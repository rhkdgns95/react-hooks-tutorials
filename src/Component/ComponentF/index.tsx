import React from "react";
import { useChannelContext } from "../../Provider/ChannelProvider";

const ComponentF = () => {
    const { componentName } = useChannelContext();
    return (
        <div>
            <h3>useChannelContext: { componentName }</h3>
        </div>
    );
}

export default ComponentF;