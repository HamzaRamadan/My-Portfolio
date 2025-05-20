import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Admin from './pages/Admin'
import CV from './pages/CV'
import { ThemeProvider } from './context/ThemeContext'
import { AdminProvider } from './context/AdminContext'

function App() {
  return (
    <ThemeProvider>
      <AdminProvider>
        <Router>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
            <Navbar />
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/cv" element={<CV />} />
              </Routes>
            </AnimatePresence>
          </div>
        </Router>
      </AdminProvider>
    </ThemeProvider>
  )
}

export default App 