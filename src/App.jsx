import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Coding from "./pages/Coding";
import Writing from "./pages/Writing";
import Speaking from "./pages/Speaking";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/coding" element={<Coding />} />
            <Route path="/writing" element={<Writing />} />
            <Route path="/speaking" element={<Speaking />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
