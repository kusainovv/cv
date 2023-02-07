import React from "react";
import { useTranslation } from "react-i18next";
import arrow from '../../../../public/sections/arrow.svg';
import cloud from '../../../../public/sections/cloud.svg';
import { BurgerMenu } from "../../common/BurgerMenu/BurgerMenu";


export const GreetingBurgerMenu = () => {
    const { t } = useTranslation();
    return <div className={`w-fit`}>
        <div className={`
            w-fit 
            fixed 
            right-[15vh] 
            max-sm:right-[10vh] 
            top-[2vh]
            z-10
        `}>
            <img src={arrow} className={`
                w-[100px] 
                m-auto  
                mr-0
                pl-[20px]
                max-sm:w-[50px]
            `} alt={'settings'} />

            <p className={`
                mt-2 
                font-kalam 
                text-yellow-300 
                text-2xl
                max-s:text-base
                max-xs:text-sm
            `} style={{
                backgroundImage: `url('data:image/svg+xml;utf8,${cloud}')`
            }}>
                {t('greeting.lang')}
            </p>
        </div>

        <BurgerMenu />
    </div>
}