import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home.tsx";

function Root() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Navigate to="/" replace />} />
        <Route path="/notes" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default Root;
