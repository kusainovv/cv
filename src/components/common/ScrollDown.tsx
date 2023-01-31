import React from "react";

const scroll_arrow = `
    w-[10px]
    h-[10px]
    bg-transparent
    border-r-2
    border-l-cyan-100
    border-b-2
    rotate-45
    border-t-cyan-100
`;

export const ScrollDown = () => {
    return <>
        <div className={`
    w-[30px] 
    h-[50px] 
    bg-transparent 
    border-solid 
    border-2 
    border-white 
    rounded-[22px]
    flex 
    flex-col 
    justify-center 
    items-center 
    overflow-hidden
`}>
    <div className={`
        relative 
        top-0 
        animate-scroll
    `}>
                <div className={scroll_arrow}></div>
                <div className={scroll_arrow}></div>
                <div className={scroll_arrow}></div>
            </div>
        </div>

        <div className={`
    m-auto 
    mt-2 
    w-[8px] 
    h-[8px] 
    bg-cyan-200 
    rounded-[22px] 
    opacity-50
`}></div>
    </>
}