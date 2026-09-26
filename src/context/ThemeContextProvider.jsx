import { useState, useEffect } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    const contextVal = {
        theme,
        setTheme,
    };

    return (
        <ThemeContext value={contextVal}>
            <div
                className={`${theme} min-h-screen bg-backgroundLight text-textPrimaryLight transition-colors duration-300 dark:text-textPrimaryDark dark:bg-backgroundDark`}
            >
                {children}
            </div>
        </ThemeContext>
    );
};
