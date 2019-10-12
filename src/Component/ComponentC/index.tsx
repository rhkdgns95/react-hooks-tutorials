import React, { useContext } from "react";
import ComponentE from "../ComponentE";
import ComponentF from "../ComponentF";

const ComponentC = () => {
    return (
        <div>
            <h1>ComponentE</h1>
            <ComponentE/>
            <hr />
            <h1>ComponentF</h1>
            <ComponentF />
        </div>
    )
};

export default ComponentC;
