import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaUser, FaProjectDiagram, FaEnvelope, FaCog, FaTimes, FaFileAlt } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'
import profileImage from '../assets/my-pic.jpeg'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const location = useLocation()
  const { isDark, toggleTheme } = useTheme()
  


  const navLinks = [
    { name: 'Home', path: '/', icon: FaUser },
    // { name: 'Projects', path: '/projects', icon: FaProjectDiagram },
    { name: 'Projects', path: '/Projects', icon: FaProjectDiagram },
    { name: 'Contact', path: '/contact', icon: FaEnvelope },
    { name: 'CV', path: '/cv', icon: FaFileAlt },
  ]
const adminLink = {
  name: 'Dashboard',
  path: '/admin',
  icon: FaCog,
}


  return (
    <nav className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
              Hamza Ramadan
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center space-x-2 px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  location.pathname === link.path
                    ? 'text-primary-600 border-b-2 border-primary-600'
                    : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 hover:scale-105'
                }`}
              >
                <link.icon size={16} />
                <span>{link.name}</span>
              </Link>
            ))}
            
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all hover:scale-110"
            >
              {isDark ? '☀️' : '🌙'}
            </button>
            
            {/* Profile Image */}
            <div className="ml-2">
              <button 
                onClick={() => setShowModal(true)}
                className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary-500 hover:border-primary-600 transition-all hover:shadow-lg hover:scale-105 focus:outline-none"
              >
                <img 
                  src={profileImage} 
                  alt="Profile" 
                  className="w-full h-full object-cover rounded-full"
                />
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            >
              {isDark ? '☀️' : '🌙'}
            </button>
            
            {/* Mobile Profile Image */}
            <button 
              onClick={() => setShowModal(true)}
              className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-500 transition-all hover:shadow-lg hover:scale-105"
            >
              <img 
                src={profileImage} 
                alt="Profile" 
                className="w-full h-full object-cover rounded-full"
              />
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-2 block px-3 py-2 text-base font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-primary-600 bg-primary-50 dark:bg-primary-900/20'
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  <link.icon size={16} />
                  <span>{link.name}</span>
                </Link>
              ))}
              
              
            </div>
          </motion.div>
        )}
      </div>
      
      {/* Profile Modal Image   */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 bg-black/70 z-[9999] flex items-center justify-center px-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto max-h-[70vh] bg-white dark:bg-gray-800 rounded-xl p-3 sm:p-4 shadow-2xl overflow-x-auto overflow-y-auto "
              style={{marginTop: '15rem'}}
            >
              <button 
                onClick={() => setShowModal(false)}
                className="absolute top-3 right-3 text-red-600 bg-gray-100 dark:bg-gray-700 p-2 rounded-full shadow-md z-10"
                aria-label="Close"
              >
                <FaTimes size={22} />
              </button>
              <div className="flex flex-col items-center justify-center h-full py-4 mt-2">
                <img 
                  src={profileImage}
                  alt="Profile" 
                  className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-full mx-auto border-4 border-primary-500 shadow-lg"
                />
                <h3 className="text-xl font-bold mt-4 text-gray-900 dark:text-white">Hamza Ramadan</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  Frontend Developer & React & Next
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar