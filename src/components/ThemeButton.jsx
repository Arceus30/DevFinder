import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";

export const ThemeButton = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <button
            onClick={() => {
                setTheme((prev) => (prev === "light" ? "dark" : "light"));
            }}
            className="relative flex w-24 h-10 items-center justify-between rounded-full p-1 bg-white border border-primary/30 shadow-sm transition dark:bg-cardDark"
        >
            <span
                className={`absolute w-8 h-8 rounded-full bg-primaryLight shadow-sm transition-transform duration-300 ${theme === "dark" ? "translate-x-14" : "translate-x-0"} dark:bg-slate-700
                `}
            />

            <span className="relative z-10 flex w-8 h-8 items-center justify-center">
                ☀️
            </span>
            <span className="relative z-10 flex w-8 h-8 items-center justify-center">
                🌙
            </span>
        </button>
    );
};
