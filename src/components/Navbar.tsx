import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router";
import useTheme from "../context/useTheme";
import ThemeToggle from "./ThemeToggle";

const links = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
];
const desktopViewport = "(min-width: 768px)";
const menuTransitionSettleDelay = 250;

function getNavLinkClass(isActive: boolean) {
    return `relative inline-block font-medium theme-transition after:content-[''] md:after:absolute md:after:bottom-1 md:after:left-0 md:after:h-px md:after:w-full md:after:bg-current md:after:transition-opacity md:after:duration-300 md:after:ease-out md:hover:after:opacity-100 md:focus-visible:after:opacity-100 motion-reduce:md:after:transition-none ${
        isActive
            ? "text-accent md:after:opacity-100"
            : "text-secondary hover:text-accent md:after:opacity-0"
    }`;
}

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMenuAnimating, setIsMenuAnimating] = useState(false);
    const menuAnimationTimeoutRef = useRef<number | null>(null);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const mediaQuery = window.matchMedia(desktopViewport);

        function handleViewportChange(event: MediaQueryListEvent) {
            if (!event.matches) return;

            if (menuAnimationTimeoutRef.current !== null) {
                window.clearTimeout(menuAnimationTimeoutRef.current);
                menuAnimationTimeoutRef.current = null;
            }
            setIsMenuAnimating(false);
            setIsMenuOpen(false);
        }

        mediaQuery.addEventListener("change", handleViewportChange);
        return () => {
            mediaQuery.removeEventListener("change", handleViewportChange);
            if (menuAnimationTimeoutRef.current !== null) {
                window.clearTimeout(menuAnimationTimeoutRef.current);
            }
        };
    }, []);

    function setMenuOpen(open: boolean) {
        if (isMenuOpen === open) return;

        if (menuAnimationTimeoutRef.current !== null) {
            window.clearTimeout(menuAnimationTimeoutRef.current);
        }

        setIsMenuOpen(open);
        setIsMenuAnimating(true);
        menuAnimationTimeoutRef.current = window.setTimeout(() => {
            setIsMenuAnimating(false);
            menuAnimationTimeoutRef.current = null;
        }, menuTransitionSettleDelay);
    }

    return (
        <nav className="border-b border-border py-4 text-foreground theme-transition">
            <div className="relative mx-auto grid w-full max-w-7xl grid-cols-2 items-center px-6 sm:px-8 md:grid-cols-3 lg:px-12">
                <div>
                    <NavLink to="/" className="whitespace-nowrap text-lg font-extrabold text-foreground theme-transition">
                        Cyruss Amante
                    </NavLink>
                </div>
                <div
                    id="mobile-navigation"
                    data-open={isMenuOpen}
                    data-animate={isMenuAnimating}
                    className="mobile-nav-panel absolute inset-x-0 top-full z-10 flex flex-col border-b border-border bg-page px-6 py-3 text-sm text-secondary theme-transition md:static md:col-start-2 md:flex-row md:items-center md:justify-self-center md:space-x-6 md:border-0 md:bg-transparent md:px-0 md:py-0"
                >
                    {links.map(({ name, path }) => (
                        <NavLink
                            key={name}
                            to={path}
                            end={path === "/"}
                            className={({ isActive }) => `${getNavLinkClass(isActive)} py-3 md:py-2`}
                            onClick={() => setMenuOpen(false)}
                        >
                            {name}
                        </NavLink>
                    ))}
                </div>
                <div className="flex items-center justify-self-end space-x-4">
                    <ThemeToggle
                        isDarkMode={theme === "dark"}
                        onToggle={toggleTheme}
                    />
                    <button
                        type="button"
                        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-navigation"
                        className="flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-1 rounded text-foreground theme-transition hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:hidden"
                        onClick={() => setMenuOpen(!isMenuOpen)}
                    >
                        <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
                        <span className="h-0.5 w-5 bg-current" />
                        <span className="h-0.5 w-5 bg-current" />
                        <span className="h-0.5 w-5 bg-current" />
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;