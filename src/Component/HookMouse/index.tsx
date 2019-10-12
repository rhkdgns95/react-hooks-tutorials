import React, { useState, useEffect } from "react";

interface IPosition {
    clientX: number;
    clientY: number;
}

const useFetch = () => {
    const [position, setPosition] = useState<IPosition>({clientX:0, clientY:0});
    
    const handleMouseMove = (event: MouseEvent) => {
        const { target, clientX, clientY } = event;
        setPosition({
            clientX,
            clientY
        });
    }
    
    useEffect(() => {
        console.log("useEffect Called - Add MouseEvent");
        window.addEventListener('mousemove', handleMouseMove);
        
        // Cleanup useEffect.
        return () => {
            console.log('Component unmounting code');
            window.removeEventListener('mousemove', handleMouseMove);
        }
    }, [])

    useEffect(() => {
        console.log("useEffect Called - Update Position");
    }, [position]);

    return {
        position,
        handleMouseMove
    };
}
const Styles:React.CSSProperties = {
    width: '100vw',
    height: '100vw',
    backgroundColor: 'black',
    color: 'white'
}

const HookMouse = () => {
    const { position: { clientX, clientY }, handleMouseMove } = useFetch();
    
    return (
        <div style={Styles}>
            <h5>Mouse Position</h5>
            <p>Hooks X - { clientX } Y- { clientY }</p>
        </div>
    );
};

export default HookMouse;