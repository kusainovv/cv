import { BurgerMenuStore } from "./BurgerMenuStore";


export class RootStore {
    burgerMenuStore: BurgerMenuStore

    constructor() {
        this.burgerMenuStore = new BurgerMenuStore();    
    }
}