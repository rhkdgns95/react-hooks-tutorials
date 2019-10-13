import React from "react";

interface ICount {
    text: string;
    count: number;
}
const Count: React.FC<ICount> = ({
    text,
    count
}) => {
    console.log("Rendering Count - ", text);

    return (
        <div>
            <p>{text} - {count}</p>
        </div>
    )
};

export default React.memo(Count);