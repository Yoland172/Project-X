import { useContext } from "react";
import Footer from "./Footer";
import ThemeContext from "../../lib/contexts/ThemeContext";

const FooterContainer = () => {
    const {theme, setTheme} = useContext(ThemeContext);

    return (
        <Footer theme={theme} setTheme={setTheme}/>
    )
}

export default FooterContainer;