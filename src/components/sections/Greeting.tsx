import React, { useState, useEffect } from "react";

export const Greeting = () => {
    const [isShowNeon, setShowNeon] = useState(false);
    
    useEffect(() => {
        setTimeout(() => {
            setShowNeon(!isShowNeon)
        }, 500);
    }, [ isShowNeon ]);
    
    return <div className={`relative h-screen bg-section_first bg-no-repeat bg-cover`}>
        <div className={`absolute bg-section_first_neon bg-no-repeat bg-cover ${ isShowNeon ? 'w-full h-screen' : ''}`}></div>

        <h1 className={"absolute bottom-0 left-2/4 -translate-x-1/2 -translate-y-1/2 text-6xl text-white"}>Hi, I'm Ratmir</h1>
    </div>
}
