import React from "react";
import arrow from '../../../../public/sections/arrow.svg';
import { BurgerMenu } from "../../common/BurgerMenu";


export const GreetingBurgerMenu = () => {
    return <div>
        <div className={`fixed w-[100px] right-[220px] top-[50px]`}>
            <img src={arrow} alt={'settings'} />

            <div className={'mt-2 font-kalam text-yellow-300 text-2xl -translate-x-1/2'}>
                Click for show the settings
            </div>
        </div>

        <BurgerMenu />
    </div>
}