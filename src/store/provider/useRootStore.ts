import { useContext } from "react"
import { RootStoreContext } from "./RootStoreProvider"

export const useRootStore = () => {
    const context = useContext(RootStoreContext);

    if (context === undefined) {
        throw new Error("Don't use useRootStore without RootStoreProvider context");
    }

    return context;
}