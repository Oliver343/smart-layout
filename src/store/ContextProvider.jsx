import { createContext, useState } from "react";

export const MainContext = createContext({
    headerCollapsed: false,
    toggleFunction: () => {},
})

export default function ContextProvider ({children}) {
    const [headerCollapsed, setHeaderCollapsed] = useState(false)
    const toggleFunction = () => {
        setHeaderCollapsed ((pre) => {
            return !pre;
        })
    }
    return (
        <MainContext.Provider value = {{headerCollapsed, toggleFunction}} >
            {children}
        </MainContext.Provider>
    )
}
