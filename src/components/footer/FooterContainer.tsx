import { useContext} from "react";
import Footer from "./Footer";
import ThemeContext from "../../lib/contexts/ThemeContext";
import { setThemeToStorage } from "../../lib/helpers/themeHelper";

const FooterContainer = () => {
    const {theme, setTheme} = useContext(ThemeContext);
    const updateTheme = (theme:string) => {
        setTheme(theme);
        setThemeToStorage(theme);
    }

    return (
        <Footer theme={theme} updateTheme={(theme:string) => updateTheme(theme)}/>
    )
}

export default FooterContainer;