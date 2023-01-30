import React from "react";
import { useTranslation } from "react-i18next";
import arrow from '../../../../public/sections/arrow.svg';
import { BurgerMenu } from "../../common/BurgerMenu";


export const GreetingBurgerMenu = () => {
    const { t } = useTranslation();
    return <div className={`w-fit`}>
        <div className={`
            w-fit 
            fixed 
            right-[15vh] 
            max-sm:right-[10vh] 
            top-[50px]
            max-sm:top-[25px]
        `}>
            <img src={arrow} className={`
                w-[100px] 
                m-auto  
                mr-0
                max-sm:w-[50px]
            `} alt={'settings'} />

            <p className={`
                mt-2 
                font-kalam 
                text-yellow-300 
                text-2xl
                max-s:text-base
                max-xs:text-sm
            `}>
                {t('greeting.click_for_settings')}
            </p>
        </div>

        <BurgerMenu />
    </div>
}