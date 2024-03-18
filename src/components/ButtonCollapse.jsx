import { useContext } from "react"
import { MainContext } from "../store/ContextProvider"

export default function ButtonCollapse() {
    const storedPreviously = useContext(MainContext)

    return (
        <button className="button-collapse" onClick={storedPreviously.toggleFunction}>{storedPreviously.headerCollapsed ? "+" : "-"}</button>
    )
}