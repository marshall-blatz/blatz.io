import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Footer from "./components/Footer";

export default function App() {
    return (
        <>
            <Router>
                <div className="w-full flex flex-col justify-center items-center text-black dark:text-white">
                    <div className="max-w-[1234px] px-5 md:px-20 py-10 space-y-8">
                        <Navbar />
                        <AllRoutes />
                        <Footer />
                    </div>
                </div>
            </Router>
        </>
    );
}

function AllRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/work" element={<Work />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/resume" element={<Resume />} />
            </Routes>
        </>
    );
}
