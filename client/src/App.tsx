import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";


export default function App() {
  return (
    <>
      <Router>
        <AllRoutes />
      </Router>
    </>
  );
}


function AllRoutes() {
  return (
    <>
        <Navbar/>

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/work" element={<Work />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/resume" element={<Resume />}/>
        </Routes>
    </>
  );
}