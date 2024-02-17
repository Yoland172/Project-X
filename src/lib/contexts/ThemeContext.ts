import React from "react";

export interface ThemeContextProps {
    theme: string;
    setTheme: (text: string) => void;
}

const ThemeContext = React.createContext<ThemeContextProps>({
    theme: "",
    setTheme: () => {}
})

export default ThemeContext;