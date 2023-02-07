import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { getBurgerMenuAnimation } from './getBurgerMenuAnimation';
import { useTranslation } from 'react-i18next';

export const BurgerMenu = observer(() => {
    const { showButtonMenu } = getBurgerMenuAnimation();
    const { i18n } = useTranslation();

    useEffect(() => {
        showButtonMenu();
    }, []);

    return <>
        <canvas className={`
            fixed 
            !w-[25vh] 
            rounded-full 
            !h-[25vh] 
            top-0 
            right-0 
            translate-x-1/2 
            -translate-y-1/2 
            cursor-pointer           
            z-10
            max-sm:!w-[15vh]
            max-sm:!h-[15vh]
        `} onClick={() => {
            i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
        }} id="burger_menu"></canvas>   
    </>   
});