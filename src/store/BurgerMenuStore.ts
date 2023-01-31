import { makeAutoObservable } from 'mobx';

export class BurgerMenuStore {

    isShowBurgerMenu: boolean

    constructor() {
        this.isShowBurgerMenu = false;

        makeAutoObservable(this);
    }


    openFullMenu() {
        this.isShowBurgerMenu = true;
    }


    closeFullMenu() {
        this.isShowBurgerMenu = false;
    }
}