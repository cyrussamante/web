import { lazy, Suspense } from "react"
import { Navigate, Route, Routes } from "react-router"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import ScrollToTop from "./components/ScrollToTop"
import CreativeLayout from "./layouts/CreativeLayout"
import SoftwareLayout from "./layouts/SoftwareLayout"
import Landing from "./routes/Landing"
import NotFound from "./routes/NotFound"
import Experience from "./routes/software/Experience"
import Home from "./routes/software/Home"
import Projects from "./routes/software/Projects"

const CreativeHome = lazy(() => import("./routes/creative/CreativeHome"))
const CreativeProject = lazy(() => import("./routes/creative/CreativeProject"))

function App() {
    return (
        <div className="flex min-h-screen flex-col bg-page text-foreground theme-transition">
            <ScrollToTop />
            <Navbar />
            <Suspense fallback={<div className="flex-1" aria-busy="true" />}>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <div className="mx-auto w-full max-w-7xl flex-1 px-6 sm:px-8 lg:px-12">
                                <Landing />
                            </div>
                        }
                    />
                    <Route path="/software" element={<SoftwareLayout />}>
                        <Route index element={<Home />} />
                        <Route path="projects" element={<Projects />} />
                        <Route path="experience" element={<Experience />} />
                    </Route>
                    <Route path="/creative" element={<CreativeLayout />}>
                        <Route index element={<CreativeHome />} />
                        <Route path=":slug" element={<CreativeProject />} />
                    </Route>
                    <Route path="/projects" element={<Navigate to="/software/projects" replace />} />
                    <Route path="/experience" element={<Navigate to="/software/experience" replace />} />
                    <Route
                        path="*"
                        element={
                            <div className="mx-auto w-full max-w-7xl flex-1 px-6 sm:px-8 lg:px-12">
                                <NotFound />
                            </div>
                        }
                    />
                </Routes>
            </Suspense>
            <Footer />
        </div>
    );
}

export default App;
