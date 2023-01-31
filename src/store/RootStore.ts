import { BurgerMenuStore } from "./entities/BurgerMenuStore";


export class RootStore {
    burgerMenuStore: BurgerMenuStore

    constructor() {
        this.burgerMenuStore = new BurgerMenuStore();    
    }
}