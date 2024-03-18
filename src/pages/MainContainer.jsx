import { useContext } from "react"
import { MainContext } from "../store/ContextProvider"
import HeaderCollapsed from "../components/HeaderCollapsed"
import Header from "../components/Header"
import Important from "./ImportantPage"

export default function MainContainer() {
    const storedPreviously = useContext(MainContext)

    return(
        <div>
            {storedPreviously.headerCollapsed ? <HeaderCollapsed /> : <Header />}
            <Important />
        </div>
    )
}