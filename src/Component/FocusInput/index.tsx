import React, { useRef, useEffect } from "react";

const FocusInput = () => {
    
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current!.focus();
    }, [])
    return (
        <div>
            <input type={"text"} ref={inputRef}/>
        </div>
    );
};

export default FocusInput;