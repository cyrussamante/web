import { useState } from "react";
import { Link } from "react-router";
import { useTheme } from "../context/ThemeContext";
import Switch from "./Switch";

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { value, toggleTheme } = useTheme();

    return (
        <nav className="border-b border-border bg-page py-4 text-foreground transition-colors duration-200">
            <div className="relative mx-auto grid w-full max-w-7xl grid-cols-2 items-center px-6 sm:px-8 md:grid-cols-3 lg:px-12">
                <div>
                    <Link to="/" className="whitespace-nowrap text-lg font-bold text-foreground">
                        Cyruss Amante
                    </Link>
                </div>
                <div className="hidden items-center justify-self-center space-x-6 text-sm text-secondary md:flex">
                    <Link className="transition-colors hover:text-accent" to="/">
                        Home
                    </Link>
                    <Link className="transition-colors hover:text-accent" to="/projects">
                        Projects
                    </Link>
                    <Link className="transition-colors hover:text-accent" to="/experience">
                        Experience
                    </Link>
                </div>
                <div className="flex items-center justify-self-end space-x-4">
                    <Switch onChange={toggleTheme} checked={value === "dark"} />
                    <button
                        type="button"
                        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-navigation"
                        className="flex h-10 w-10 flex-col items-center justify-center gap-1 rounded text-foreground hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:hidden"
                        onClick={() => setIsMenuOpen((open) => !open)}
                    >
                        <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
                        <span className="h-0.5 w-5 bg-current" />
                        <span className="h-0.5 w-5 bg-current" />
                        <span className="h-0.5 w-5 bg-current" />
                    </button>
                </div>
                {isMenuOpen && (
                    <div
                        id="mobile-navigation"
                        className="absolute inset-x-0 top-full z-10 flex flex-col border-b border-border bg-page px-6 py-3 text-sm text-secondary shadow-lg md:hidden"
                    >
                        <Link className="py-3 hover:text-accent" to="/" onClick={() => setIsMenuOpen(false)}>
                            Home
                        </Link>
                        <Link className="py-3 hover:text-accent" to="/projects" onClick={() => setIsMenuOpen(false)}>
                            Projects
                        </Link>
                        <Link className="py-3 hover:text-accent" to="/experience" onClick={() => setIsMenuOpen(false)}>
                            Experience
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default NavBar;