import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router";
import useTheme from "../context/useTheme";
import Switch from "./Switch";

const links = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
];

function getNavLinkClass(isActive: boolean) {
    return `relative inline-block font-medium theme-transition after:content-[''] md:after:absolute md:after:bottom-1 md:after:left-0 md:after:h-px md:after:w-full md:after:bg-current md:after:transition-opacity md:after:duration-300 md:after:ease-out md:hover:after:opacity-100 md:focus-visible:after:opacity-100 motion-reduce:md:after:transition-none ${
        isActive
            ? "text-accent md:after:opacity-100"
            : "text-secondary hover:text-accent md:after:opacity-0"
    }`;
}

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMenuAnimating, setIsMenuAnimating] = useState(false);
    const menuAnimationTimeoutRef = useRef<number | null>(null);
    const { value, toggleTheme } = useTheme();

    useEffect(() => {
        function handleResize() {
            if (menuAnimationTimeoutRef.current !== null) {
                window.clearTimeout(menuAnimationTimeoutRef.current);
                menuAnimationTimeoutRef.current = null;
            }
            setIsMenuAnimating(false);

            if (window.matchMedia("(min-width: 768px)").matches) {
                setIsMenuOpen(false);
            }
        }

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
            if (menuAnimationTimeoutRef.current !== null) {
                window.clearTimeout(menuAnimationTimeoutRef.current);
            }
        };
    }, []);

    function setMenuOpen(open: boolean) {
        if (menuAnimationTimeoutRef.current !== null) {
            window.clearTimeout(menuAnimationTimeoutRef.current);
        }

        setIsMenuOpen(open);
        setIsMenuAnimating(true);
        menuAnimationTimeoutRef.current = window.setTimeout(() => {
            setIsMenuAnimating(false);
            menuAnimationTimeoutRef.current = null;
        }, 250);
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
                    className="mobile-nav-panel absolute inset-x-0 top-full z-10 flex flex-col border-b border-border bg-page px-6 py-3 text-sm text-secondary md:static md:col-start-2 md:flex-row md:items-center md:justify-self-center md:space-x-6 md:border-0 md:bg-transparent md:px-0 md:py-0"
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
                    <Switch onChange={toggleTheme} checked={value === "dark"} />
                    <button
                        type="button"
                        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-navigation"
                        className="flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-1 rounded text-foreground hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:hidden"
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

export default NavBar;