import { useEffect, useState, type ReactNode } from "react";
import { ThemeContext, type Theme } from "./themeContext";

function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) {
            return storedTheme as Theme;
        }
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    });

    const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ value: theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;
