import { useEffect, useState, type ReactNode } from "react";
import { createContext, useContext } from "react";

interface ThemeContextType {
    value: Theme;
    setTheme: (theme: Theme) => void;
}

type Theme = "light" | "dark";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function ThemeProvider({children}: {children: ReactNode}) {
    const [theme, setTheme] = useState<Theme>(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) {
            return storedTheme as Theme;
        }
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    });

    const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark")
        localStorage.setItem("theme", theme);
    }, [theme])

    return (
        <ThemeContext.Provider value={{ value: theme, setTheme: toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

function useTheme() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}

export { ThemeProvider, useTheme };