import React from "react";

interface IButton {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => any;
    text: string;
}
const Button: React.FC<IButton> = ({
    handleClick,
    text
}) => {
    console.log("Rendering button - ", text);
    return (
        <div>
            <button onClick={handleClick}>Click</button>
        </div>
    );
};

export default React.memo(Button);