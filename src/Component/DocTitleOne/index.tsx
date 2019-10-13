import React, { useState } from "react";
import useDocumentTitle from "../../Hooks/useDocumentTItle";

const DocTitleOne = () => {
    const [count, setCount] = useState<number>(0);
    useDocumentTitle(count);
    return (
        <div>
            <button onClick={e => setCount(count + 1)}>Count - {count}</button>
        </div>
    )
};

export default DocTitleOne;