import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.tsx";
import About from "./About.tsx";
import Notes from "./Notes.tsx";

function Root() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </Router>
  );
}

export default Root;
