import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const useTheme = () =>
{
    const context = useContext(ThemeContext);
    if (!context)
        throw new Error("useTheme() must be used inside a ThemeProvider");

    return context
}

export { useTheme } 