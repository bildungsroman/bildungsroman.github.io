import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Coding from "./pages/Coding";
import Writing from "./pages/Writing";
import Speaking from "./pages/Speaking";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <div>
        {/* Basic navigation - will be replaced with proper Navbar component in later tasks */}
        <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
          <Link to="/" style={{ marginRight: "1rem" }}>
            Home
          </Link>
          <Link to="/coding" style={{ marginRight: "1rem" }}>
            Coding
          </Link>
          <Link to="/writing" style={{ marginRight: "1rem" }}>
            Writing
          </Link>
          <Link to="/speaking" style={{ marginRight: "1rem" }}>
            Speaking
          </Link>
        </nav>

        <main style={{ padding: "2rem" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/coding" element={<Coding />} />
            <Route path="/writing" element={<Writing />} />
            <Route path="/speaking" element={<Speaking />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
