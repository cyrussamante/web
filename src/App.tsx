import { Route, Routes } from "react-router"

import Footer from "./components/Footer"
import NavBar from "./components/Navbar"

import Home from "./routes/Home"
import Projects from "./routes/Projects"
import Experience from "./routes/Experience"

function App() {

  return (
    <div className="min-h-screen bg-page text-foreground transition-colors duration-300 ease">
      <NavBar />
      <div className="min-h-screen mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/projects" element={<Projects />} /> 
          <Route path="/experience" element={<Experience />} /> 
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
