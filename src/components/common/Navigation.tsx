import React, { useState }  from "react";


export const Navigation = () => {
    const [currentFrame, setCurrentFrame] = useState(0);
    return <div className={`fixed list-[circle] list-inside top-1/2 right-[20px] -translate-y-1/2`}>
        {
            [1,2,3,4,5,6].map((num, idx) => <div key={idx} onClick={() => {
                setCurrentFrame(idx);
            }} className={`
                group
                flex items-center mt-3 font-network text-white
                cursor-pointer
            `}>
                <span className={`min-w-[30px] opacity-${idx === currentFrame ? '100' : '0'} text-center group-hover:opacity-100`}>{num}</span>
                <div className={'w-[15px] h-[15px] pl-2 bg-[#F3cc30] border-solid border-2 border-black rounded-full'}></div>
            </div>)
        }
    </div>
}