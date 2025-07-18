import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import CV from "./pages/CV";
import { ThemeProvider } from "./context/ThemeContext";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <ThemeProvider>
        <Router>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
            <Navbar />
            <AnimatePresence mode="wait">
              <Routes>
                {/* Projects */}
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/cv" element={<CV />} />
                <Route path="/Projects" element={<Projects />} />
              </Routes>
            </AnimatePresence>
          </div>
        </Router>
    </ThemeProvider>
  );
}

export default App;
