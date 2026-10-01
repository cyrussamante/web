import { Route, Routes } from "react-router"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Experience from "./routes/Experience"
import Home from "./routes/Home"
import Projects from "./routes/Projects"

function App() {
    return (
        <div className="flex min-h-screen flex-col bg-page text-foreground theme-transition">
            <Navbar />
            <div className="mx-auto w-full max-w-7xl flex-1 px-6 sm:px-8 lg:px-12">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/experience" element={<Experience />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
