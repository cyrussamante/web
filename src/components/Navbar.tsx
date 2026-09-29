import { Link } from "react-router";
import { useTheme } from "../context/ThemeContext";

function NavBar() {
    
    const { toggleTheme } = useTheme();
    return (
        <nav className="flex justify-between align-middle p-4 bg-gray-200 dark:bg-gray-800">
            <div className="flex space-x-4 dark:text-white">
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/experience">Experience</Link>
            </div>
            <div className="flex space-x-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={toggleTheme}>
                    Change Theme
                </button>
            </div>
        </nav>
    );
}

export default NavBar;