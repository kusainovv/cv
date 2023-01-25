import React, { useState, useEffect } from "react";

export const Greeting = () => {
    const [isShowNeon, setShowNeon] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowNeon(!isShowNeon);
        }, 500);
    }, [ isShowNeon ]);

    return <div className={`relative h-screen bg-section_first bg-no-repeat bg-cover`}>
        <div className={`absolute bg-section_first_neon bg-no-repeat bg-cover ${ isShowNeon ? 'w-full h-screen' : ''}`}></div>

        <div className={"h-screen pb-3 flex flex-col justify-end bg-transparent items-center"}>
            <h1 className={"relative font-network text-6xl text-white overflow-hidden"}>
                Hi, I'm Ratmir
            </h1>

            <p className={'pb-5 font-unbounded text-xl text-cyan-200'}>Scroll down & join the portfolio</p>
            
            <div className={`mt-2`}>
                <div className={`
                    w-[30px] h-[50px] bg-transparent border-solid border-2 border-white rounded-[22px]
                    flex flex-col justify-center items-center overflow-hidden
                `}>
                    <div className={`relative top-0 animate-scroll`}>
                        <div className={`
                            w-[10px]
                            h-[10px]
                            bg-transparent
                            border-r-2
                            border-l-cyan-100
                            border-b-2
                            rotate-45
                            border-t-cyan-100
                        `}></div>

                        <div className={`
                            w-[10px]
                            h-[10px]
                            bg-transparent
                            border-r-2
                            border-l-cyan-100
                            border-b-2
                            rotate-45
                            border-t-cyan-100
                        `}></div>

                        <div className={`
                            w-[10px]
                            h-[10px]
                            bg-transparent
                            border-r-2
                            border-l-cyan-100
                            border-b-2
                            rotate-45
                            border-t-cyan-100
                        `}></div>
                    </div>
                </div>

                <div className={'m-auto mt-2 w-[8px] h-[8px] bg-cyan-200 rounded-[22px] opacity-50'}></div>
            </div>
        </div>
    </div>
}
