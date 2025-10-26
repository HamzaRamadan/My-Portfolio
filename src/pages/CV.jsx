import React from 'react'
import { motion } from 'framer-motion'
import { FaDownload, FaEye } from 'react-icons/fa'
import PageWrapper from '../components/PageWrapper'
import Footer from '../components/Footer'
import cvFile from '../assets/Hamza Frontend-Developer-cv.pdf'

const CV = () => {
  return (
    <PageWrapper>
      <div className="min-h-screen bg-white dark:bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              My Resume
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              View or download my professional resume
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
          >
            <a
              href={cvFile}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center justify-center space-x-2"
            >
              <FaEye size={20} />
              <span>View CV</span>
            </a>
            <a
              href={cvFile}
              download="Hamza_Ramadan_CV.pdf"
              className="btn-secondary flex items-center justify-center space-x-2"
            >
              <FaDownload size={20} />
              <span>Download CV</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden"
          >
            <iframe
              src={`${cvFile}#toolbar=0`}
              className="w-full h-[800px]"
              title="CV Preview"
            />
          </motion.div>
        </div>
      </div>
      <Footer />
    </PageWrapper>
  )
}

export default CV 