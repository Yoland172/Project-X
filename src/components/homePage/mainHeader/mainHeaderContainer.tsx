import { useContext } from "react"
import MainHeader from "./mainHeader"
import ThemeContext from "../../../lib/contexts/ThemeContext"

const MainHeaderContainer = () => {

    const {theme} = useContext(ThemeContext);

return (
    <MainHeader theme={theme}/>
)
}

export default MainHeaderContainer