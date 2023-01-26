import React from "react";
import { useTranslation } from "react-i18next";
import arrow from '../../../../public/sections/arrow.svg';
import { BurgerMenu } from "../../common/BurgerMenu";


export const GreetingBurgerMenu = () => {
    const { t } = useTranslation();
    return <div>
        <div className={`fixed w-[100px] right-[220px] top-[50px]`}>
            <img src={arrow} alt={'settings'} />

            <div className={'mt-2 font-kalam text-yellow-300 text-2xl -translate-x-1/2'}>
                {t('greeting.click_for_settings')}
            </div>
        </div>

        <BurgerMenu />
    </div>
}