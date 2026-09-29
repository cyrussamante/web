import { Link } from "react-router";
import { useTheme } from "../context/ThemeContext";
import Switch from "./Switch";

function NavBar() {
    
    const { value, toggleTheme } = useTheme();

    return (
        <nav className="flex justify-between align-middle p-4 bg-gray-200 dark:bg-gray-800 transition-colors duration-200">
            <div className="flex space-x-4 dark:text-white">
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/experience">Experience</Link>
            </div>
            <div className="flex space-x-4">
                <Switch onChange={toggleTheme} checked={value === "dark"} />
            </div>
        </nav>
    );
}

export default NavBar;