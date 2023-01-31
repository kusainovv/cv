import React, { createContext } from "react";
import { RootStore } from "../RootStore";


export const RootStoreContext = createContext<RootStore>(null);

export const RootStoreProvider = ({ children }) => {
    const root = new RootStore();
    return <RootStoreContext.Provider value={root}>
        {children}
    </RootStoreContext.Provider>
}