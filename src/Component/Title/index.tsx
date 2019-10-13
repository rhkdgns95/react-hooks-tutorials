import React from "react";

const Title = () => {
    console.log("Rendering - Title");
    return (
        <p>TItle</p>
    )
};

export default React.memo(Title)