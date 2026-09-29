import { Route, Routes } from "react-router"

import Footer from "./components/Footer"
import NavBar from "./components/Navbar"

import Home from "./routes/Home"
import Projects from "./routes/Projects"
import Experience from "./routes/Experience"

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/projects" element={<Projects />} /> 
        <Route path="/experience" element={<Experience />} /> 
      </Routes>
      <Footer />
    </>
  )
}

export default App
