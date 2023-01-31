import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useRootStore } from '../../../store/provider/useRootStore';
import { getBurgerMenuAnimation } from './getBurgerMenuAnimation';



export const BurgerMenu = observer(() => {
    const { burgerMenuStore } = useRootStore();
    const { showButtonMenu, showFullMenu } = getBurgerMenuAnimation();

    useEffect(() => {
        if (!burgerMenuStore.isShowBurgerMenu) {
            showButtonMenu();
        } else {
            showFullMenu();
        }
    }, [ burgerMenuStore.isShowBurgerMenu ]);

    return <>
        <div className={`
            fixed 
            w-screen  
            top-0 
            h-screen 
            bg-main_menu_background_texture 
            ${ burgerMenuStore.isShowBurgerMenu ? 'left-[0px]' : 'left-[2000px]'} 
            duration-1000
        `}>
            <canvas id="full_menu">
            </canvas>
        </div>


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
            max-sm:!w-[15vh]
            max-sm:!h-[15vh]
        `} onClick={() => {
            if (burgerMenuStore.isShowBurgerMenu) {
                burgerMenuStore.closeFullMenu();
            } else {
                burgerMenuStore.openFullMenu();
            }
        }} id="burger_menu"></canvas>   
    </>   
});