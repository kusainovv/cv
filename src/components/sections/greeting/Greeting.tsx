import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ScrollDown } from "../../common/ScrollDown";

export const Greeting = () => {
    const [isShowNeon, setShowNeon] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowNeon(!isShowNeon);
        }, 500);
    }, [ isShowNeon ]);


    const { t } = useTranslation();

    return <div className={`
        relative 
        h-screen 
        bg-section_first 
        bg-no-repeat 
        bg-cover
        max-s:bg-[25%]
        max-xs:bg-[25%]
    `} >
        <div className={`absolute bg-section_first_neon bg-no-repeat bg-cover ${ isShowNeon ? 'w-full h-screen' : ''}`}></div>

        <div className={`
            h-screen 
            pb-5 flex 
            flex-col 
            justify-end 
            bg-transparent 
            items-center
            pr-[10px]
            pl-[10px]
            text-center
        `}>
            <h1 className={`
                relative 
                font-network 
                text-6xl 
                text-white 
                overflow-hidden
                max-s:text-4xl
                max-xs:text-4xl
            `}>
                Hi, I'm Ratmir
            </h1>

            <p className={`
                pb-5 
                font-unbounded 
                text-xl 
                text-cyan-200
                max-s:text-sm
                max-xs:text-sm
            `}>{t('greeting.scroll_down')}</p>
            <div className={`mt-2`}>
                <ScrollDown />
            </div>
        </div>
    </div>
}
